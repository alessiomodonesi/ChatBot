<?php
echo "Scrivi qualcosa\n";
$handle = fopen("php://stdin", "r");
$input = fgets($handle);
echo "Hai scritto questo: " . $input;
?>