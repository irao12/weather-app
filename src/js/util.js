function kelvinToCelsius(kelvin) {
	return kelvin - 273.15;
}

function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function kelvinToFahrenheit(kelvin) {
	const inCelsius = kelvinToCelsius(kelvin);
	return celsiusToFahrenheit(inCelsius);
}

export default { kelvinToCelsius, kelvinToFahrenheit };
