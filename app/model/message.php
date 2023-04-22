<?php

require "../../vendor/autoload.php";

use Orhanerday\OpenAi\OpenAi;

class Message
{
    public function requestResponse($messages)
    {
        $open_ai_key = getenv('OPENAI_API_KEY');
        $open_ai = new OpenAi($open_ai_key);

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
