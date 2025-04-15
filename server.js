const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Route principale
app.get("/", (req, res) => {
    res.send("Hello, Vercel! 🚀");
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
