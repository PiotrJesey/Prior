const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "piotr.marcin.wrobel@gmail.com",
        pass: "Natusza.7" // Use App Password for security
    }
});

async function sendEmail(to, subject, text) {
    await transporter.sendMail({
        from: "prior@gov.je",
        to,
        subject,
        text
    });
    console.log("Email sent successfully");
}

sendEmail("piotr@retroad.co.uk", "Hello", "This is a test email.");
