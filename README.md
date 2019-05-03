# Weather Website

A website that shows the current weather in a specified city and in the specified units, saving these settings in local storage for future use.

## Usage

To use this website you only need to clone this and follow the next steps:

1. Go to [OpenWeatherMap](https://openweathermap.org/).
  1. Create an account.
  2. Obtain an API key. 
2. Create a .ini file with the value: `clientId = "API_KEY"`
3. Change the route in the file php/getWeather.php, line 5, so that it points to your .ini file. 
  1. ```php
  $config = parse_ini_file('routetoinifile');
  ```
  
## Disclaimers

This website was created for learning purposes. Feel free to use, distrubute and modify it as you see fit. 
