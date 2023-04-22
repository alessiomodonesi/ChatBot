<?php

if (php_sapi_name() === 'cli') :
    require __DIR__ . '/app/view/cli/index.php';
else :
    header("Location: /chatbot/public/index.php");
    exit;
endif;
