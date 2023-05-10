<?php
require(getcwd() . "/vendor/autoload.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPOffice\PHPOffice\PHPSpreadsheet;
use PHPMailer\PHPMailer\Exception;
//stampa una stringa "You: " e legge l'input dell'utente dallo standard input.
//e restituisce la stringa letta dall'utente.
function setInput()
{
    echo "You: ";
    $handle = fopen("php://stdin", "r");
    return fgets($handle);
}
//accetta un array di messaggi e li organizza in una struttura di dati che rappresenta la cronologia della conversazione 
//tra l'utente e l'assistente virtuale. La funzione crea un array di messaggi,
// dove ogni messaggio contiene un ruolo ('user' o 'assistant') e il contenuto del messaggio.
// Infine, la funzione stampa la rappresentazione JSON dell'array di messaggi.
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
//accetta una stringa e aggiunge una nuova riga ogni volta che incontra il carattere ";" e "`". 
//e restituisce la stringa indentata.
function indent($message)
{
    $message = str_replace(';', ";\n", $message);
    return str_replace('`', "\n", $message);
}

//funzione per generare il nome casuale della prenotazione
function createFile() {
    $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    $name = '';
    for ($i = 0; $i < 16; $i++) {
        $name .= $characters[rand(0, strlen($characters) - 1)];
    }
    $file = fopen($name . '.txt', 'w');
    fclose($file);
    return $name;
}


function saveMessageOnFile($message, $path){
    $file = fopen($path , 'a');
    fwrite($file, $message);
    fclose($file);
}

function SendEmail($email, $password)
    {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        //$mail->Username = "sandwech.amministrazione.test@gmail.com";
        //$mail->Password = "";
        $mail->SMTPSecure = "tls";
        $mail->Port = 587;

        //$mail->setFrom("sandwech.amministrazione.test@gmail.com");
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = "Prova PHPMailSender";
        $mail->Body = "ecco la password : " . $password . "";

        if (!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
            
            return $mail->ErrorInfo;
        } else {
            //echo 'Message has been sent';
            return true;
        }
    }
