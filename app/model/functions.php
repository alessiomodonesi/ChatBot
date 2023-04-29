<?php

function setInput()
{
    echo "You: ";
    $handle = fopen("php://stdin", "r");
    return fgets($handle);
}

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

function indent($message)
{
    $message = str_replace(';', ";\n", $message);
    return str_replace('`', "\n", $message);
}
