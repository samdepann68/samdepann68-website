module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });

    req.on("end", () => {
        console.log("Données reçues :", body);
        res.status(200).json({ message: "Formulaire reçu !" });
    });
};
