<?php
if (php_sapi_name() === 'cli')
    require(getcwd() . "/vendor/autoload.php");
else
    require("../../vendor/autoload.php");

use Snipe\BanBuilder\CensorWords;

class Filter{
    protected $censor;
    public function __construct(){
        $this->censor  = new CensorWords;
        $languages = array('en-us', 'en-uk', 'es', 'kr', 'fr', 'nl', 'no', 'de', 'fi', 'it', 'jp', 'cs');
        $this->censor->setDictionary($languages);
    }
    function checkString($message){
        $response = $this->censor->censorString($message);
        if($response['clean'] == $response['orig'])
            return false;
        else 
            return true;
    }
}
?>