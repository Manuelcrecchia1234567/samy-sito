<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "manuelcrecchia054@gmail.com";
    $subject = "Richiesta di Preventivo";
    $body = "Nome: $name\nEmail: $email\nTelefono: $phone\nMessaggio: $message";

    if (mail($to, $subject, $body)) {
        echo "Email inviata con successo.";
    } else {
        echo "Si è verificato un errore nell'invio dell'email.";
    }
}
?>
