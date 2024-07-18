<?php
// Vérification des données envoyées par le formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $education = $_POST['education'];
    $brand = $_POST['brand'];
    $age = $_POST['age'];
    $verification = $_POST['verification'];

    // Traitement des données (exemple : affichage des données)
    echo "Nom : " . $name . "<br>";
    echo "Niveau d'études : " . $education . "<br>";
    echo "Marque préférée d'ordinateur portable : " . $brand . "<br>";
    echo "Âge : " . $age . "<br>";
    echo "Réponse à 2 + 2 : " . $verification . "<br>";

    // Vous pouvez ensuite enregistrer ces données dans un fichier, une base de données, ou les traiter selon vos besoins
}
?>
