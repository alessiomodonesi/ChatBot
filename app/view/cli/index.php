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

    $response = $chatbot->requestResponse($message);
    //$response = "ciao come va";

    array_push($history, $input, $response);

    $msg_to_show = analyzeMessage($response);
    shell_exec("echo off | clip");
    shell_exec("echo ".  $msg_to_show . ' | clip');
    echo "Bot : " . $msg_to_show . "\n";
endwhile;
