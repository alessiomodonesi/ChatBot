<?php

// controllare se il file viene eseguito dalla riga di comando o tramite una richiesta HTTP 
// e richiede la libreria di caricamento appropriata di conseguenza

if (php_sapi_name() === 'cli')
    require(getcwd() . "/vendor/autoload.php");
else
    require("../../vendor/autoload.php");

use Snipe\BanBuilder\CensorWords; // libreria per filtrare le parole offensive in un messaggio


class Filter
{
    protected $censor;

    // Il costruttore della classe Filter inizializza la libreria di censura 
    // e imposta i dizionari delle lingue inglese americana, inglese britannica e italiana.
    public function __construct()
    {
        $this->censor = new CensorWords;
        $languages = array('en-us', 'en-uk', 'it');
        $this->censor->setDictionary($languages);
    }

    // prende in input una stringa, la censura con la libreria e 
    // restituisce un valore booleano: true se sono state trovate parole offensive, false altrimenti.
    function checkString($message)
    {
        $response = $this->censor->censorString($message);
        if ($response['clean'] == $response['orig'])
            return false;
        else
            return true;
    }
}
