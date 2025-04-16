document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    
    if (form) {
        form.addEventListener("submit", async function(event) { 
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
                    const errorData = await response.json();
                    throw new Error(errorData.error || "❌ Une erreur inconnue est survenue.");
                }
            
                const result = await response.json();
                alert(result.message); // "✅ Formulaire envoyé avec succès !");
            } catch (error) {
                console.error("🚨 Erreur d'envoi :", error);
                alert(error.message);
            }
            
            
        });
    } else {
        console.error("🚨 Formulaire introuvable !");
    }
});
