const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get("/Contacts.html", (req, res) => {
    res.sendFile(__dirname + "/Contacts.html");
});


const transporter = nodemailer.createTransport({
    service: "icloud",
    auth: {
        user: "slamaziere@icloud.com",
        pass: "sqfd-qmuj-esjc-pdmm"
    }
});

app.post("/send-email", (req, res) => {
    const { nom, email, message } = req.body;

    if (!nom || !email || !message) {
        return res.status(400).json({ error: "🚨 Tous les champs sont obligatoires !" });
    }

    const mailOptions = {
        from: "slamaziere@icloud.com",
        to: "slamaziere@icloud.com",
        replyTo: email,
        subject: `Nouveau message de ${nom}`,
        text: `🔹 Nom : ${nom}\n🔹 Email du client : ${email}\n🔹 Message : ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("🚨 Erreur d'envoi :", error);
            return res.status(500).json({ error: "❌ Erreur lors de l'envoi de l'e-mail.", details: error.toString() });
        } else {
            console.log("✅ Email envoyé :", info.response);
            return res.json({ message: "📩 Email envoyé avec succès !" });
        }
    });
});



app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
