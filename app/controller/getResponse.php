<?php

require "../model/chatbot.php";
require "../model/filter.php";
header('Content-type: application/json');

if (!isset($_POST['message']))
    die("error: missing message");

$chatbot = new ChatBot();

$filter = new Filter();
if($filter->checkString($_POST['message'])){
    echo json_encode("Messaggio invalido");
    die();
}

$message = [
    [
        "role" => "user",
        "content" => $_POST['message']
    ]
];
$response = $chatbot->requestResponse($message);
echo json_encode($response, JSON_PRETTY_PRINT);
die();
