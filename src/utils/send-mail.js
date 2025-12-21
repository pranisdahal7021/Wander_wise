import nodemailer from "nodemailer";

const sendMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  });
};

for (let index = 0; index < 50; index++) {
  setTimeout(() => {
    sendMail(
      "@gmail.com",
      "Test Mail",
      "This is a test mail from Kiran_doe."
    )
      .then(() => {
        console.log(`Mail sent ${index + 1}`);
      })
      .catch((err) => {
        console.log(`Error sending mail ${index + 1}: `, err);
      });
  }, 2000);
}

export default sendMail;
