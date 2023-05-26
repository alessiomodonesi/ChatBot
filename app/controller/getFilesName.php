<?php
require "../model/functions.php";
header('Content-type: application/json; charset=utf-8;');


echo json_encode(getFilesNames(), JSON_PRETTY_PRINT);
die();