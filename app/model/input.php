<?php

function input()
{
    echo "Type something\n";
    $handle = fopen("php://stdin", "r");
    return fgets($handle);
}

function output()
{
    $input = input();
    echo $input;
}
