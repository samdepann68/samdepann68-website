document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async function(event) { 
            event.preventDefault(); // Empêche le rechargement de la page

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
                document.getElementById("contactForm").reset(); // Réinitialise le formulaire
                document.getElementById("success-message").innerText = result.message; // Affiche un message de succès
                document.getElementById("success-message").style.display = "block"; // Rend le message visible
            } catch (error) {
                alert("🚨 Erreur d’envoi !");
                console.error(error);
            }
        });
    } else {
        console.error("🚨 Formulaire introuvable !");
    }
});
