const ui = new UI;
const ls = new LocalStorage;
const lsWeather = ls.getFromLocalStorage();
const weather = new Weather(lsWeather.city, lsWeather.unit);
const btnChange = document.getElementById('btnChange');
const locationInput = document.getElementById('locationInput');
const chkFaren = document.getElementById('chkFaren');
const chkCels = document.getElementById('chkCels');
getApiWeather();
btnChange.addEventListener('click', (e) => {
	let city, units;	
	if(/[A-Za-z\s]+/.test(locationInput.value)) {
		
		city = locationInput.value;
		units = chkCels ? chkCels.value : chkFaren.value;
		ls.storeToLocalStorage(city, units);
		weather.setCityAndUnits(city, units);
		getApiWeather();
		$('#locUnitModal').modal('hide')
	}	
	else {
		ui.showAlert('That doesn\'t look like a valid city, please try again!');
		$('#locUnitModal').modal('hide')
	}  	
});
function getApiWeather() {
	weather.getWeather()
	.then(data => {
		if (data.cod == 200) {
			ui.showWeather(data);
		}
		else if (data.cod == 503) {
			ui.showAlert("Looks like you've made too many requests. Wait a little and try again.");
		}
		else {
			ui.showAlert('Looks like something went wrong. :( Try again later.');
		}
	});
}

