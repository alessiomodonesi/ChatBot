<?php
// controllare se il file viene eseguito dalla riga di comando o tramite una richiesta HTTP 
//e richiede la libreria di caricamento appropriata di conseguenza
if (php_sapi_name() === 'cli')
    require(getcwd() . "/vendor/autoload.php");
else
    require("../../vendor/autoload.php");

use Orhanerday\OpenAi\OpenAi; //serve per interagire con il servizio OpenAI GPT-3.5

class ChatBot
{
    /*restituisce la chiave di autenticazione per accedere al servizio OpenAI.
    Se il codice viene eseguito tramite la riga di comando, la funzione legge la chiave dal file ".key" nella directory superiore. Altrimenti, 
    se viene eseguito attraverso una richiesta HTTP, legge la chiave dal server locale.*/
    private function getKey()
    {
        if (php_sapi_name() === 'cli')
            return file_get_contents("../.key");
        else
            return file_get_contents("http://localhost/.key");
    }

    //crea un'istanza dell'oggetto OpenAi usando la chiave restituita dalla funzione getKey.
    private function init()
    {
        $open_ai = new OpenAi($this->getKey());
        return $open_ai;
    }
    /*invia una richiesta al servizio OpenAI passando un array di messaggi,
     il modello di lingua da utilizzare, la temperatura di campionamento,
     il numero massimo di token, il penalty di frequenza e il penalty di presenza.*/
    public function requestResponse($messages)
    {
        $chat = $this->init()->chat([
            'model' => 'gpt-3.5-turbo',
            'messages' => $messages,
            'temperature' => 1.0,
            'max_tokens' => 4000,
            'frequency_penalty' => 0,
            'presence_penalty' => 0,
        ]);

        $response = json_decode($chat);
        return $response->choices[0]->message->content;
    }
}
