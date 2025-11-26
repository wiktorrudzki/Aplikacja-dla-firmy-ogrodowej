const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
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

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

app.post("/mail/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!validateEmail(email)) {
    console.log("Nieprawidłowy email:", email);
    return res.status(400).json({ success: false });
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
      subject: "Nowa wiadomość z formularza",
      html: `
        <h3>Nowa wiadomość</h3>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server działa na porcie ${process.env.PORT}`)
);
