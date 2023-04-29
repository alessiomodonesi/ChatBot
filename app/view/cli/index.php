<?php

require(getcwd() . "/app/model/chatbot.php");
require(getcwd() . "/app/model/functions.php");

$chatbot = new ChatBot();
$history = array();

while (true) :
    $input = setInput();
    $message = [
        [
            "role" => "user",
            "content" => $input
        ]
    ];

    $response = indent($chatbot->requestResponse($message));
    array_push($history, $input, $response);
    echo "Bot: " . $response . "\n";
endwhile;
