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

function createDate(unix) {
	return new Date(unix * 1000);
}

function capitalize(string) {
	const stringSeparated = string.split(" ");
	const stringSeparatedCapitalized = stringSeparated.map((word) => {
		return word[0].toUpperCase() + word.substring(1);
	});
	return stringSeparatedCapitalized.join(" ");
}

function processSearch(searchTerm) {
	searchTerm = searchTerm.trim();
	searchTerm = searchTerm.replace(/ +/g, "+");
	return searchTerm;
}

export default {
	kelvinToCelsius,
	kelvinToFahrenheit,
	createDate,
	capitalize,
	processSearch,
};
