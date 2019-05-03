class Weather {
	constructor(city, unit) {
		this.location = city;
		this.unit = unit;	    	
	}
	async getWeather() {
		const weatherResponse = await fetch(`./php/getWeather.php?city=${this.location}&unit=${this.unit}`);
		const weatherData = await weatherResponse.json();
		return weatherData;
	}	
	setCityAndUnits(_city, _units) {
		this.location = _city;
		this.unit = _units;
	}
}
