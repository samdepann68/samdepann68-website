document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");

    if (form) {
        form.addEventListener("submit", async function(event) { 
            event.preventDefault(); // Empêche la redirection

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
                form.reset(); // Efface le formulaire après envoi
                successMessage.innerText = result.message; // Affiche le message
                successMessage.style.display = "block"; // Rend le message visible
            } catch (error) {
                alert("🚨 Erreur d’envoi !");
                console.error(error);
            }
        });
    } else {
        console.error("🚨 Formulaire introuvable !");
    }
});
