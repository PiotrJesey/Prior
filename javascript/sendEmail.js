import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: "facu zbbu yjce nscj" // Use App Password for security
    }
});

async function sendEmail(to, subject, text) {
    await transporter.sendMail({
        from: "hell@ws.s",
        to,
        subject,
        text
    });
    console.log("Email sent successfully");
}

sendEmail("hello", "Hello", "This is a test email.");
