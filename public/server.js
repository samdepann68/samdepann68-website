const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// 🚀 Servir les fichiers statiques depuis `public/`
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
