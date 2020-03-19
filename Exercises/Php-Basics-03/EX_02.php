<?php 
    $x = 6;
    $factorial = 1;
    while ($x>0){
      $factorial *= $x;
      $x = $x - 1;
    } while ($x > 0);
    echo "Factorial of 6 = ".$factorial;
?>