<?php

require "../model/chatbot.php";
require "../model/filter.php";
require "../model/functions.php";

header('Content-type: application/json');

$chatbot = new ChatBot();
$filter = new Filter();

$response = SendEmail();
echo ($response);
