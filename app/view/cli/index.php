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
    echo "ChatBot: " . $response . "\n";

    // copia l'ultima response
    if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN')
        shell_exec("echo " .  $response . ' | clip');
    else
        shell_exec("echo " .  $response . ' | pbcopy');
endwhile;
