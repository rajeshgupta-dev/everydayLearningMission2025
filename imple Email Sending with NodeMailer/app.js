// Load environment variables from .env file
require("dotenv").config();

// Import required packages
const express = require("express");
const nodemailer = require("nodemailer");

// Initialize express app
const app = express();
const PORT = 3000;

// Load credentials from .env
const email = process.env.GOOGLE_APP_EMAIL;
const password = process.env.GOOGLE_APP_PASSWORD;

// ✅ Check for missing credentials
if (!email || !password) {
  console.error("❌ Missing email or password in .env file.");
  process.exit(1); // Exit the app
}

// Debug log (avoid showing password in logs)
console.log("✅ Email loaded:", email);
console.log("🔒 Password: [HIDDEN]");

// ✅ Configure Nodemailer transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,     // Gmail address from .env
    pass: password,  // Gmail App Password from .env
  },
});

// ✅ Default route (optional)
app.get("/", (req, res) => {
  res.send("✅ Email API is working! Visit <code>/sendemail</code> to send a test email.");
});

// ✅ Route to send email
app.get("/sendemail", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: `"RAJ 👨‍💻" <${email}>`, // Sender info
      to: email, // Send to yourself (or change to any email)
      subject: "✅ Test Email from Nodemailer",
      text: "This is a plain text test email sent using Gmail SMTP and Nodemailer.",
      html: "<h2>Hello 👋</h2><p>This is a <b>test email</b> using <code>nodemailer</code>.</p>",
    });

    console.log("📤 Message sent:", info.messageId);
    res.send("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).send("❌ Failed to send email");
  }
});

// ✅ Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
