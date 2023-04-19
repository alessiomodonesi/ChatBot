<?php

if (isset($_POST['message'])) {
    $message = $_POST['message'];
    $response = "Hi, I'm your chatbot! How can I help you?";
    echo $response;
}
