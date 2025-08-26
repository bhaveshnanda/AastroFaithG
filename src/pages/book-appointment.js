import Layout from "../components/Layout/Layout";
import styles from "./book-appointment.module.css";

export default function BookAppointment() {
  return (
    <Layout>
      <div className={styles.appointment}>
        <h1>Book an Appointment</h1>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
          
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
          
          <label>Preferred Date:</label>
          <input type="date" />
          
          <label>Message:</label>
          <textarea placeholder="Your Query"></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
