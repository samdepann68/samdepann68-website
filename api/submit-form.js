module.exports = (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "🚨 Méthode non autorisée !" });
    }

    const { nom, email, message } = req.body;

    if (!nom || !email || !message) {
        return res.status(400).json({ error: "❌ Tous les champs sont obligatoires !" });
    }

    // 📌 Ici, tu peux enregistrer les données dans une base ou un fichier si besoin.
    console.log(`Nouveau formulaire reçu : Nom: ${nom}, Email: ${email}, Message: ${message}`);

    res.status(200).json({ message: "✅ Formulaire traité avec succès !" });
};
