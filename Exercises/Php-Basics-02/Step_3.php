<?php
$a = 10;
$b = 99;
echo "\nBefore swapping:  ". $a . ',' . $b;
list($a, $b) = array($b, $a);
echo "\nAfter swapping:  ". $a . ',' . $b."\n";
?>