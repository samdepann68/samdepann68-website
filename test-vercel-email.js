const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "samdepann68@gmail.com",
        pass: "qrtr bqlr yvjm ypnf"
    }
});

transporter.sendMail({
    from: "samdepann68@gmail.com",
    to: "samdepann68@gmail.com",
    subject: "Test depuis Vercel",
    text: "Ceci est un test d'envoi depuis Vercel."
}, (error, info) => {
    if (error) {
        console.error("❌ Erreur Vercel :", error);
    } else {
        console.log("✅ Email Vercel envoyé :", info.response);
    }
});
