<?php

if (php_sapi_name() === 'cli')
    require getcwd() . "/vendor/autoload.php";
else
    require "../../vendor/autoload.php";

use Orhanerday\OpenAi\OpenAi;

class ChatBot
{
    // private $open_ai_key = getenv('OPENAI_API_KEY');
    private $open_ai_key = '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';

    public function requestResponse($messages)
    {
        $open_ai = new OpenAi($this->open_ai_key);

        $chat = $open_ai->chat([
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
