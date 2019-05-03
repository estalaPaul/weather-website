<?php
    if (isset($_GET["city"]) && isset($_GET["unit"])) {
        $city = $_GET["city"];
        $unit = $_GET["unit"];
        $config = parse_ini_file('routetoconfigfile');
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, 'http://api.openweathermap.org/data/2.5/weather?q='.$city.'&units='.$unit.'&appid='.$config["clientId"]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $weather = curl_exec($ch);
        echo $weather;
    }
?>