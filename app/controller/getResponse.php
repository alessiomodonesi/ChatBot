<?php

require "../model/chatbot.php";
require "../model/filter.php";
header('Content-type: application/json');

// Verifica se il parametro "message" è presente nella richiesta POST,
// altrimenti termina l'esecuzione con un messaggio di errore
if (!isset($_POST['message']))
    die("error: missing message");

$chatbot = new ChatBot();
$filter = new Filter();

// Verifica se il messaggio passato alla funzione checkString() 
// di Filter contiene parole non consentite
// Se il messaggio non è consentito, viene restituito un messaggio di allerta
if ($filter->checkString($_POST['message'])) {
    $allert = "Ehy, il messaggio inserito non è consentito";
    echo json_encode($allert);
    die();
}

$message = [
    [
        "role" => "user",
        "content" => $_POST['message']
    ]
];

// Invio del messaggio a ChatBot per ottenere la risposta
$response = $chatbot->requestResponse($message);

echo json_encode($response, JSON_PRETTY_PRINT);
die();
