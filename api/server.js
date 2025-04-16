const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour traiter les données du formulaire
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route POST pour le formulaire
app.post("/submit-form", (req, res) => {
    console.log("Données reçues :", req.body);
    res.send("Formulaire envoyé avec succès !");
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`🚀 Serveur Express démarré sur http://localhost:${port}`);
});
