class LocalStorage {
	getFromLocalStorage() {
		let city, unit;
		if (localStorage.getItem('city') === null || localStorage.getItem('unit') === null) {
			city = 'Gilbert';
			unit = 'metric';	
			this.storeToLocalStorage(city, unit);
		}
		else {
			city = localStorage.getItem('city');
			unit = localStorage.getItem('unit');
		}
		return {
			'city' : city,
			'unit' : unit 
		};  
	}
	storeToLocalStorage(city, unit) {
		localStorage.setItem('city', city);
		localStorage.setItem('unit', unit);
	}
}
