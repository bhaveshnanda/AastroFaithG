export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      email,
      phone,
      gender,
      // dateofBirth,
      // timeOfBirth,
      // birthLocation,
      // birthCountry,
      // preferredLanguage,
      // message,
      // education,
      // fieldOfEducation,
      // currentProfession,
      // relationship,
      // children,
      // modeOfConsultation,
    } = req.body;

    // ✅ Here you can save to DB, or send email, etc.
    // For demo, we’ll just return the data
    return res.status(200).json({
      success: true,
      data: {
        name,
        email,
        phone,
        gender,
        // dateofBirth,
        // timeOfBirth,
        // birthLocation,
        // birthCountry,
        // preferredLanguage,
        // message,
        // education,
        // fieldOfEducation,
        // currentProfession,
        // relationship,
        // children,
        // modeOfConsultation,
      },
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
