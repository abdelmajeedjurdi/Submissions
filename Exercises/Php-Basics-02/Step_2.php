<?php
function greaterFn($num){
    if ($num > 30){
        return "is greater than 30";
    }elseif($num > 20){
        return " is greater than 20";
    }elseif($num > 10){
        return " is greater than 10";
    }else{
        return "is less than 10";
    }
    }
echo greaterFn(4);
?>