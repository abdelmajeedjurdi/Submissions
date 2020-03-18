<?php
function sum_of_digits($nums) {
    $digits_sum = 0;
      for ($i = 0; $i < strlen($nums); $i++) {
             $digits_sum += $nums[$i];
               }
      return $digits_sum;
}
echo sum_of_digits("23415")."\n";
echo sum_of_digits("5001020")."\n";
echo sum_of_digits("987989")."\n";
echo sum_of_digits("7600092")."\n";
?>
