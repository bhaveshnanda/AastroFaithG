import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import styles from "./book-appointment.module.css";

export default function BookAppointment() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      gender: e.target.gender.value,
      // dateofBirth: e.target.date.value,
      // timeOfBirth: e.target.timeOfBirth.value,
      // birthLocation: e.target.birthLocation.value,
      // message: e.target.message.value,
      // birthCountry: e.target.birthCountry.value,
      // preferredLanguage: e.target.preferredLanguage.value,
      // education: e.target.education.value,
      // fieldOfEducation: e.target.fieldOfEducation.value,
      // currentProfession: e.target.currentProfession.value,
      // relationship: e.target.relationship.value,
      // children: e.target.children.value,
      // modeOfConsultation: e.target.modeOfConsultation.value,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Appointment booked successfully!");
        e.target.reset(); // clear form
      } else {
        setMessage("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server error. Please try later.");
    }

    setLoading(false);
  }

  return (
    <Layout>
      <div className={styles.appointment}>
        <h1>Book an Appointment</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name" type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input name="email" type="email" placeholder="Your Email" required />

          <label>Phone:</label>
          <input name="phone" type="tel" placeholder="Your Phone Number" required />

          <label>Gender:</label>
          <select name="gender" required>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_say">Prefer not to say</option>
          </select>

          {/* <label>Date of Birth:</label>
          <input name="date" type="date" required />

          <label>Time of Birth:</label>
          <input name="timeOfBirth" type="time" required />

          <label>Birth City/Town and State:</label>
          <input
            name="birthLocation"
            type="text"
            placeholder="Your City/Town and State..."
            required
          /> */}

          {/* <label>Birth Country:</label>
          <input
            name="birthCountry"
            type="text"
            placeholder="Your birth country..."
            required
          />

          <label>Preferred Language:</label>
          <input
            name="preferredLanguage"
            type="text"
            placeholder="Your preferred country..."
            required
          /> */}

          {/* <label>Explain your query:</label>
          <textarea name="message" placeholder="Your Query"></textarea>

          <div className={styles.note}>
            <p>
              These details are taken for astrologer&apos;s research and horoscope
              verification
            </p>
          </div>

          <label>Education Level:</label>
          <select name="education" required>
            <option value="">-- Select education --</option>
            <option value="High-School">High School</option>
            <option value="Graduate">Graduate</option>
            <option value="Post-Graduate">Post Graduate</option>
            <option value="other">Other</option>
          </select> */}
{/* 
          <label>Field of Education:</label>
          <input
            name="fieldOfEducation"
            type="text"
            placeholder="Your education field..."
          />

          <label>Current Profession:</label>
          <input
            name="currentProfession"
            type="text"
            placeholder="Your profession..."
          /> */}

          
          {/* <label>Relationship Status:</label>
          <select name="relationship" required>
            <option value="">-- Select relationship Status --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Seperated">Seperated</option>
            <option value="Widowed">Widowed</option>
          </select>
                    
          
          <label>Children:</label>
          <select name="children" required>
            <option value="">-- Choose any option --</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select> */}

{/* 
          <label>Mode of Consultation:</label>
          <select name="modeOfConsultation" required>
            <option value="">-- Mode of consultation --</option>
            <option value="Google-Meet">Google Meet</option>
            <option value="Phone-Call">Phone Call</option>
          </select> */}


          <button className={styles.btn} type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </Layout>
  );
}
