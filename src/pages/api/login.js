import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "goopal123";

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username: ADMIN_USER, role: "admin" },
    process.env.JWT_SECRET || "supersecretkey",
    { expiresIn: "2h" }
  );

  return res.status(200).json({
    success: true,
    token,
    name: "Admin",
  });
}
