<?php
require_once __DIR__ . '/../MODEL/filter.php';

$check = new Filter();
echo $check->checkString('SEI UN COGLIONE');
?>