<?php

require getcwd() . "/app/model/chatbot.php";
require getcwd() . "/app/model/functions.php";

$chatbot = new ChatBot();

while (true):
    $message = [
        [
            "role" => "user",
            "content" => setInput()
        ]
    ];

    $response = $chatbot->requestResponse($message);
    echo $response . "\n";
endwhile;