<?php

function createHistory($msgs)
{
    $message = array();
    for ($i = 0; $i < sizeof($msgs); $i++) :
        $role = null;
        if ($i % 2 == 0)
            $role = 'user';
        else
            $role = 'assistant';
        array_push($message, ['role' => $role, 'content' => $msgs[$i]]);
    endfor;
    echo json_encode(array('message' => $message));
}

function setInput()
{
    echo "Type something\n";
    $handle = fopen("php://stdin", "r");
    return fgets($handle);
}

function getOutput()
{
    $input = setInput();
    $response = "Your message: " . $input;
    echo $response;
}
