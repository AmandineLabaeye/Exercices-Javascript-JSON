<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 21/01/2019
 * Time: 11:27
 */

if (isset($_GET["ville"])) {

    $Ville = filter_var($_GET["ville"], FILTER_SANITIZE_STRING);

    $curl = curl_init();

    curl_setopt_array($curl, array(

        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "api.openweathermap.org/data/2.5/weather?q=$Ville,fr&lang=fr_fr&APPID=1bd6dca5500c78b80984292d39a8a25b&units=metric",
        CURLOPT_USERAGENT => "weather",
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => array(

            "item1" => "value",
            "item2" => "value2",

        )
    ));

    $resp = curl_exec($curl);

    curl_close($curl);

    Echo $resp;

}