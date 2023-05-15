<?php

require "../model/chatbot.php";
require "../model/functions.php";

header('Content-type: application/json');

if (isset($_GET['email']) && empty($_GET['email'])) {
    echo json_encode(["message" => "email is required"]);
    die();
}

$chatbot = new ChatBot();
$response = SendEmail($_GET['email']);

echo json_encode(["message" => $response]);
die();
