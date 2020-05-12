<?php

header('Content-Type: application/json');

include "database.php";




$var1= [
    'type' => "line",
    'data'=> [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]


];

$var2 = [
    'type' => 'pie',
    'data' => [9000,4000,3200,2300],
    'names' => ["Marco","Giuseppe","Mattia","Alberto"]
];

$varFinal= [

  'grafico1' => $var1,
  'grafico2' => $var2
];


echo json_encode($varFinal);



 ?>
