<?php

require(getcwd() . "/app/model/chatbot.php");
require(getcwd() . "/app/model/filter.php");
require(getcwd() . "/app/model/functions.php");

$chatbot = new ChatBot();
$filter = new Filter();
$history = array();

while (true) :
    $input = setInput();

    if ($filter->checkString($input)) {
        $response = "Ehy, il messaggio inserito non è consentito";
    } else {
        $message = [
            [
                "role" => "user",
                "content" => $input
            ]
        ];
        $response = indent($chatbot->requestResponse($message));
    }
    array_push($history, $input, $response);
    echo "Bot: " . $response . "\n";
endwhile;
