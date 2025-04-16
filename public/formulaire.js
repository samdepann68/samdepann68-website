document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");

    if (form) {
        form.addEventListener("submit", async function(event) { 
            event.preventDefault(); 
        
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries()); // ✅ Convertit FormData en JSON
        
            try {
                const response = await fetch("/api/submit-form", { // ✅ Vérifie l’URL
                    method: "POST",
                    headers: { "Content-Type": "application/json" }, // ✅ Ajoute le bon header
                    body: JSON.stringify(data) // ✅ Envoie sous format JSON
                });
        
                if (!response.ok) {
                    throw new Error("❌ Une erreur est survenue.");
                }
        
                form.reset();
                successMessage.innerText = "✅ Merci ! Votre message a bien été envoyé.";
                successMessage.style.display = "block";
            } catch (error) {
                alert("🚨 Erreur d’envoi !");
                console.error(error);
            }
        });
        
    } else {
        console.error("🚨 Formulaire introuvable !");
    }
});
