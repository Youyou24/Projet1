// Capturer l'événement de soumission du formulaire
const form = document.getElementById('requestForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission du formulaire
            
    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const brand = document.getElementById('brand').value;
    const age = document.getElementById('age').value;
    const verification = document.getElementById('verification').value;

    // Stocker les données dans localStorage (exemple)
    localStorage.setItem('formData', JSON.stringify({ name, education, brand, age, verification }));

    // Afficher un message ou rediriger l'utilisateur, etc.
    alert('Formulaire soumis avec succès !');

    // Réinitialiser le formulaire (optionnel)
    form.reset();
});

// Récupérer les données stockées et les afficher
window.addEventListener('DOMContentLoaded', function() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('education').value = formData.education;
        document.getElementById('brand').value = formData.brand;
        document.getElementById('age').value = formData.age;
        document.getElementById('verification').value = formData.verification;
    }
});
