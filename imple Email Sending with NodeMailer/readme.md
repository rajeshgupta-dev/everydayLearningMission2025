
---

## ✅ `README.md`

```markdown
# 📧 Node.js Email Sender using Gmail SMTP & Nodemailer

This project is a simple Node.js application that sends emails using the **Gmail SMTP server** and **Nodemailer**. It's built with Express.js and supports secure configuration using environment variables via the `dotenv` package.

---

## 📚 Table of Contents

- [📧 What is SMTP?](#-what-is-smtp)
- [⚙️ Technologies Used](#️-technologies-used)
- [🚀 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🛠️ Setup Instructions](#️-setup-instructions)
- [✅ How It Works](#-how-it-works)
- [🛡 Security Tips](#-security-tips)
- [🙋‍♂️ Author](#-author)
- [📄 License](#-license)

---

## 📧 What is SMTP?

**SMTP** stands for **Simple Mail Transfer Protocol**.  
It is the **standard protocol used for sending emails** over the internet.

> 🔗 Learn more about SMTP on [Wikipedia](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)

In this project, we use Gmail’s SMTP server (`smtp.gmail.com`) to send emails securely via Nodemailer.

---

## ⚙️ Technologies Used

| Technology  | Description |
|-------------|-------------|
| [Node.js](https://nodejs.org/) | JavaScript runtime environment |
| [Express.js](https://expressjs.com/) | Web server framework |
| [Nodemailer](https://nodemailer.com/about/) | Email sending library for Node.js |
| [dotenv](https://www.npmjs.com/package/dotenv) | Loads environment variables from `.env` file |

---

## 🚀 Features

- Send emails from your Gmail account using SMTP
- Supports both plain text and HTML emails
- Simple REST API (`GET /sendemail`)
- Environment-based configuration for security
- Easily extendable for real-world use

---

## 📁 Project Structure

```

project-root/
├── .env               # Email credentials (not pushed to GitHub)
├── .gitignore         # Ignore node\_modules and .env
├── app.js             # Main application file
├── package.json       # Node dependencies
└── README.md          # Documentation

````

---

## 🛠️ Setup Instructions

### 1. 📦 Clone the repository
### 2. 📥 Install dependencies

```bash
npm install
```

### 3. 🔐 Create `.env` file with your Gmail credentials

Create a `.env` file in the root directory:

```env
GOOGLE_APP_EMAIL=yourgmail@gmail.com
GOOGLE_APP_PASSWORD=your_gmail_app_password
```

> ⚠️ **You must use a [Gmail App Password](https://myaccount.google.com/apppasswords)** (not your regular Gmail password).
> Learn how to generate it:
> [How to Generate Gmail App Password (Google Guide)](https://support.google.com/accounts/answer/185833)

### 4. ▶️ Start the server

```bash
node index.js
```

Visit [http://localhost:3000/sendemail](http://localhost:3000/sendemail) in your browser to send the test email.

---

## ✅ How It Works

1. `nodemailer.createTransport()` connects to Gmail's SMTP server using credentials from your `.env` file.
2. When you hit the `/sendemail` route, `sendMail()` is called and sends a test email.
3. You receive the email at the configured address, confirming the setup works.

---

## 🛡 Security Tips

* **NEVER upload your `.env` file to GitHub.** Use `.gitignore` to prevent this.
* Use **App Passwords** instead of your real Gmail password.
* Regenerate and revoke passwords periodically.
* Don’t log sensitive data like passwords in production logs.

---

## 🙋‍♂️ Author

**Rajesh Gupta**
Built as part of a learning project using Node.js, Express, and Nodemailer.

> 💼 [LinkedIn](https://www.linkedin.com/)
> 📧 [rajeshlkh2020@gmail.com](mailto:rajeshlkh2020@gmail.com)

---

## 📄 License

This project is open-source and available for educational and demo purposes.
You're free to use, copy, and modify it for your own learning.

````

---

## 🧪 Test Email Preview

Once your server runs and you visit `/sendemail`, you’ll receive a test email like this:

**Subject:** ✅ Test Email from Nodemailer  
**Body:**
```html
<h2>Hello 👋</h2>
<p>This is a <b>test email</b> using <code>nodemailer</code>.</p>
````

---
