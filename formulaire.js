document.getElementById("contactForm").addEventListener("submit", async function(event) { 
    event.preventDefault();

    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!nom || !email || !message) {
        alert("🚨 Veuillez remplir tous les champs !");
        return;
    }

    try {
        const response = await fetch("/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nom, email, message })
        });
    
        if (!response.ok) {
            throw new Error("❌ Une erreur est survenue.");
        }
    
        const result = await response.json();
        alert(result.message);  // Affiche "Formulaire reçu !"
    } catch (error) {
        alert("🚨 Erreur d’envoi !");
        console.error(error);
    }
});
