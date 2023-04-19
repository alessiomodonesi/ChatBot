<?php

require "/chatbot/app/model/message.php"; 

header('Content-type: application/json');

$message = new Message();

$response = $message->requestResponse($_POST['message']);

echo $response;


?>