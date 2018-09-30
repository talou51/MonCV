<?php

$errorMSG = "";

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Veuillez saisir votre nom";
} else {
    $name = $_POST["name"];
}
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Veuillez saisir une adresse email valide";
} else {
    $email = $_POST["email"];
}
// SUJET
if (empty($_POST["subject"])) {
    $errorMSG .= "Veuillez saisir le sujet de votre demande";
} else {
    $subject = $_POST["subject"];
}
// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Veuillez saisir votre un message";
} else {
    $message = $_POST["message"];
}
 
$EmailTo = "pascale.simonnet@gmail.com";
$Subject = "Contact CV : ".$subject;

// CORPS DU MESSAGE
$Body = "";
$Body .= "Nom : ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email : ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message : ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
} else {
    if($errorMSG == ""){
        echo "Quelque chose s'est mal passé :-(";
    } else {
        echo $errorMSG;
    }
}

?>