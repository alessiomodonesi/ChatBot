<?php
require("../../vendor/autoload.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPOffice\PHPOffice\PHPSpreadsheet;
use PHPMailer\PHPMailer\Exception;

function SendEmail($user_email)
{
    $ini = parse_ini_file("../../../Chatbot.txt", true);

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->SMTPSecure = "tls";
    $mail->SMTPAuth = true;

    $mail->Username = "chatbot5fmarchesini@gmail.com";
    $mail->Password = $ini['password'];

    $mail->setFrom("chatbot5fmarchesini@gmail.com");
    $mail->addReplyTo("chatbot5fmarchesini@gmail.com");
    $mail->addAddress($user_email);

    $mail->Subject = 'Export Log Conversation';
    // $mail->msgHTML();
    $mail->Body = 'This is just a plain text message body';
    // $mail->addAttachment();

    if (!$mail->send())
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    else
        echo json_encode(["message" => "The email message was sent"]);

    return "Cose";
}