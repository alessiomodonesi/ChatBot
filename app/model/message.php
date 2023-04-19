<?php

require "../../vendor/autoload.php";

use Orhanerday\OpenAi\OpenAi;

class Message
{
    public function requestResponse($messages)
    {
        $open_ai_key = getenv('OPENAI_API_KEY');
        echo "openai key: " . $open_ai_key . "<br />" . "<br />";
        $open_ai = new OpenAi($open_ai_key);

        $chat = $open_ai->chat([
            'model' => 'gpt-3.5-turbo',
            'messages' => $messages,
            'temperature' => 1.0,
            'max_tokens' => 4000,
            'frequency_penalty' => 0,
            'presence_penalty' => 0,
        ]);


        echo $chat . "<br />";
        $response = json_decode($chat);
        echo ($response->choices[0]->message->content);
        return $response->choices[0]->message->content;
    }
}
