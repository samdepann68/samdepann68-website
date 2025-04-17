const nodemailer = require("nodemailer"); // Ensuite, importe Nodemailer

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // ✅ Récupère l'email depuis Vercel
        pass: process.env.EMAIL_PASS  // ✅ Récupère le mot de passe depuis Vercel
    }
});



module.exports = (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "🚨 Méthode non autorisée !" });
    }

    const { nom, email, message } = req.body;

    if (!nom || !email || !message) {
        return res.status(400).json({ error: "❌ Tous les champs sont obligatoires !" });
    }

    console.log("✅ Formulaire reçu :", req.body);
    console.log("🚀 Tentative d'envoi d'email à :", email);

    // ✅ Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "samdepann68@gmail.com",
        replyTo: email,  // Permet de répondre au client
        subject: "Confirmation de votre message",
        text: `Bonjour ${nom},\n\nMerci pour votre message : "${message}"\nNous vous répondrons rapidement.\n\nCordialement,`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Erreur d'envoi :", error);
            return res.status(500).json({ error: "Échec d'envoi d'email.", details: error.toString() });
        } else {
            console.log("✅ Email envoyé avec succès :", info.response);
            return res.json({ message: "Email bien envoyé !" });
        }
    });
};


