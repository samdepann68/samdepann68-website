const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Route principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`🚀 Serveur Express démarré sur http://localhost:${port}`);
});
