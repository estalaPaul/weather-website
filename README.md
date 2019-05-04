# Weather Website

A website that shows the current weather in a specified city and in the specified units, saving these settings in local storage for future use. Created using PHP, JavaScript, HTML, CSS and the OpenWeatherMap API.

## Usage

To use this website you only need to clone this repository and follow the next steps:

1. Go to [OpenWeatherMap](https://openweathermap.org/).
   - Create an account.
   - Obtain an API key. 
2. Create a .ini file with the value: `clientId = "API_KEY"`
3. Change the route in the file php/getWeather.php, line 5, so that it points to your .ini file. 
   - `$config = parse_ini_file('routetoinifile');`
   
## See Live

To see this website functioning, follow this [link](https://estalapaul.me/weather/).


## Disclaimers

This website was created for learning purposes. Feel free to use, distrubute and modify it as you see fit. 
