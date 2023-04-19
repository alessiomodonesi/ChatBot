<?php

require "../../vendor/autoload.php";

use Orhanerday\OpenAi\OpenAi;

$open_ai_key = getenv('OPENAI_API_KEY');
echo "\nopenai key: " . $open_ai_key . "\n\n";
$open_ai = new OpenAi($open_ai_key);

$chat = $open_ai->chat([
    'model' => 'gpt-3.5-turbo',
    'messages' => [
        [
            "role" => "system",
            "content" => "You are a helpful assistant."
        ],
        [
            "role" => "user",
            "content" => "Who won the world series in 2020?"
        ],
        [
            "role" => "assistant",
            "content" => "The Los Angeles Dodgers won the World Series in 2020."
        ],
        [
            "role" => "user",
            "content" => "Where was it played?"
        ],
    ],
    'temperature' => 1.0,
    'max_tokens' => 4000,
    'frequency_penalty' => 0,
    'presence_penalty' => 0,
]);


echo $chat . "<br />";
$response = json_decode($chat);
echo ($response->choices[0]->message->content);