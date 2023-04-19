<?php

if (!empty($_POST['message'])) {
    $message = $_POST['message'];
    $response = "Hi, I'm your chatbot! How can I help you?";
    echo $response;
} else {
    $message = $_POST['message'];
    $response = "Type a message";
    echo $response;
}
