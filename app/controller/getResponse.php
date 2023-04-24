<?php

require "../model/chatbot.php";
header('Content-type: application/json');

if (!isset($_POST['message']))
    die("error: missing message");

//$chatbot = new ChatBot();
$message = [
    [
        "role" => "user",
        "content" => $_POST['message']
    ]
];

//$response = $chatbot->requestResponse($message);
echo json_encode("Ciao come va ");
die();
