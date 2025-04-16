document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("success-message");

    if (form) {
        form.addEventListener("submit", async function(event) { 
            event.preventDefault(); // Empêche la redirection

            const formData = new FormData(form);

            try {
                const response = await fetch("/submit-form", {
                    method: "POST",
                    body: formData
                });

                if (!response.ok) {
                    throw new Error("❌ Une erreur est survenue.");
                }

                const result = await response.json();
                form.reset(); // Efface le formulaire après envoi
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
