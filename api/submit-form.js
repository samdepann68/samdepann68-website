module.exports = (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "🚨 Méthode non autorisée !" });
    }

    // ✅ Vérifie que les données sont bien en JSON
    if (!req.body || !req.body.nom || !req.body.email || !req.body.message) {
        return res.status(400).json({ error: "❌ Tous les champs sont obligatoires !" });
    }

    console.log("✅ Formulaire reçu :", req.body);
    res.status(200).json({ message: "✅ Formulaire traité avec succès !" });
};
console.log("🚀 Tentative d'envoi d'email à :", email);
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("❌ Erreur d'envoi :", error);
        return res.status(500).json({ error: "Échec d'envoi d'email.", details: error.toString() });
    } else {
        console.log("✅ Email envoyé avec succès :", info.response);
        return res.json({ message: "Email bien envoyé !" });
    }
});
