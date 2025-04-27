<?php

$conn =pg_connect("host=localhost user=postgres password=postgres dbname=postgres");

if(!$conn){
    echo "Neuspješno povezivanje";
}else{
    echo "";
}