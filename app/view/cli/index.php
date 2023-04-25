<?php

require getcwd() . "/app/model/chatbot.php";
require getcwd() . "/app/model/functions.php";

$chatbot = new ChatBot();
$input = setInput();

$message = [
    [
        "role" => "user",
        "content" => $input
    ]
];

$response = $chatbot->requestResponse($message);
echo $response . "\n";
