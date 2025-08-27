export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, date, message, timeOfBirth, birthLocation } = req.body;

    // ✅ Here you can save to DB, or send email, etc.
    // For demo, we’ll just return the data
    return res.status(200).json({
      success: true,
      data: { name, email, date, message, timeOfBirth, birthLocation }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
