const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const allowedOrigin = "https://ogrody.rybnik.pl";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["POST"],
  })
);
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin !== allowedOrigin) {
    return res.status(403).send("Forbidden");
  }

  next();
});
app.use(express.json());
app.use(helmet());
app.enable("trust proxy");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhone = (phone) => {
  return String(phone).match(/^[0-9\-\+]{9,15}$/);
};

const postLimiter = rateLimit({
  windowMs: 60 * 1000, // minuta
  max: 5,
  message: { success: false, error: "Za dużo żądań, spróbuj później" },
});

function requireHTTPS(req, res, next) {
  if (req.secure || req.headers["x-forwarded-proto"] === "https") return next();
  res.status(403).json({ success: false, error: "HTTPS wymagane" });
}

app.post("/mail/send", requireHTTPS, postLimiter, async (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message, token } =
    req.body;

  if (!token) {
    console.log("Brak tokenu reCAPTCHA");
    return res
      .status(400)
      .json({ success: false, message: "Brak tokenu reCAPTCHA" });
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({
        success: false,
        message: "Nieprawidłowy token reCAPTCHA",
      });
    }
  } catch (error) {
    console.error("Błąd weryfikacji reCAPTCHA:", error);
    return res.status(500).json({
      success: false,
      message: "Nieoczekiwany błąd podczas weryfikacji reCAPTCHA",
    });
  }

  if (!validateEmail(email)) {
    console.log("Nieprawidłowy email:", email);
    return res
      .status(400)
      .json({ success: false, message: "Nieprawidłowy email" });
  }

  if (!validatePhone(phoneNumber)) {
    console.log("Nieprawidłowy numer telefonu:", phoneNumber);
    return res
      .status(400)
      .json({ success: false, message: "Nieprawidłowy numer telefonu" });
  }

  if (!message || message.trim() === "") {
    console.log("Wiadomość jest pusta");
    return res
      .status(400)
      .json({ success: false, message: "Wiadomość jest pusta" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_SMTP,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz" <${process.env.MAIL_SMTP}>`,
      to: process.env.MAIL,
      subject: topic ?? "Nowa wiadomość z formularza",
      html: `
        <h3>Nowa wiadomość</h3>
        <p><strong>Imię:</strong> ${firstName ?? "-"}</p>
        <p><strong>Nazwisko:</strong> ${lastName ?? "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Numer telefonu:</strong> ${phoneNumber}</p>
        <p><strong>Wiadomość:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Wystąpił niespodziewany błąd" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server działa na porcie ${process.env.PORT}`)
);
