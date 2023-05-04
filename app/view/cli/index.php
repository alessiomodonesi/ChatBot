<?php

require(getcwd() . "/app/model/chatbot.php");
require(getcwd() . "/app/model/filter.php");
require(getcwd() . "/app/model/functions.php");

// Crea un nuovo oggetto ChatBot e Filter
$chatbot = new ChatBot();
$filter = new Filter();

// Crea una nuova array vuota per contenere la cronologia della chat
$history = array();

while (true) :
    // Richiama la funzione setInput() per impostare l'input dell'utente
    $input = setInput();

    // Verifica se il messaggio dell'utente contiene parole non consentite
    if ($filter->checkString($input)) {
        $response = "Ehy, il messaggio inserito non è consentito";
    } else {
        // Crea un array per il messaggio dell'utente e richiede una risposta dal ChatBot
        $message = [
            [
                "role" => "user",
                "content" => $input
            ]
        ];
        // Aggiunge il messaggio dell'utente e la risposta alla cronologia della chat
        $response = indent($chatbot->requestResponse($message));
    }
    // Stampa la risposta del ChatBot
    array_push($history, $input, $response);
    echo "Bot: " . $response . "\n";
endwhile;
