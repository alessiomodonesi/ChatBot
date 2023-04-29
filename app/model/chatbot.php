<?php

if (php_sapi_name() === 'cli')
    require(getcwd() . "/vendor/autoload.php");
else
    require("../../vendor/autoload.php");

use Orhanerday\OpenAi\OpenAi;

class ChatBot
{
    private function getKey()
    {
        if (php_sapi_name() === 'cli')
            return file_get_contents("../.key");
        else
            return file_get_contents("http://localhost/.key");
    }

    private function init()
    {
        $open_ai = new OpenAi($this->getKey());
        return $open_ai;
    }

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
