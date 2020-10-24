<?php
    if (isset($_GET["city"]) && isset($_GET["unit"])) {
        $city = $_GET["city"];
        $unit = $_GET["unit"];
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q={$city}&units={$unit}&appid=");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $weather = curl_exec($ch);

        $code = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);

        if ($code == 403) {
            http_response_code(503);
        } else {
            header('Content-Type: application/json');
            echo $weather;
        }

        curl_close($ch);
    }
?>