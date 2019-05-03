class UI {
	constructor() {
		this.location = document.getElementById('location');
		this.description = document.getElementById('description');
		this.degrees = document.getElementById('degrees');
		this.icon = document.getElementById('icon');
		this.humidity = document.getElementById('humidity');
		this.clouds = document.getElementById('clouds');
		this.wind = document.getElementById('wind');
	}
	showWeather(weatherData) {
			this.location.innerText = weatherData.name;
			this.description.innerText = weatherData.weather[0].main;
			this.degrees.innerText = `${weatherData.main.temp} °C`;
			this.icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
			this.humidity.textContent = `${weatherData.main.humidity}% humid`;
			this.clouds.innerText = `${weatherData.clouds.all}% cloudy`;
			this.wind.innerText = `${weatherData.wind.speed} meter/sec winds with an ${weatherData.wind.deg} degree angle`;
	}
	showAlert(message) {
		const alert = document.createElement('div');
		const parent = document.querySelector('.card-body');
		const title = document.getElementById('title');
		alert.className = 'alert alert-danger';
		alert.appendChild(document.createTextNode(message));
		parent.insertBefore(alert, title);
		setTimeout(3000, () => {
			this.clearAlert();	
		});
	}
	clearAlert() {
		const alert = document.querySelector('.alert');
		if (alert) {
			alert.remove();
		}
	}
}
