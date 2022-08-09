import getWeatherData from "./apiFunctions.js";
import dom from "./dom.js";
import util from "./util.js";

async function displayCurrentWeather(location) {
	const weatherData = await getWeatherData(location);
	console.log(weatherData);
	dom.locationName.textContent = weatherData.name;

	let temperature = weatherData.main.temp;
	temperature = util.kelvinToFahrenheit(temperature);
	dom.locationTemp.textContent = temperature.toFixed(0) + "\u00B0 F";

	let feelsLike = weatherData.main.feels_like;
	feelsLike = util.kelvinToFahrenheit(feelsLike);
	dom.locationFeelsLike.textContent =
		"Feels like " + feelsLike.toFixed(0) + "\u00B0 F";

	const humidity = weatherData.main.humidity;
	dom.locationHumidity.textContent = `Humidity: ${humidity}%`;

	const wind = weatherData.wind.speed;
	dom.locationWind.textContent = `Wind speed: ${wind} meters/sec`;
}

displayCurrentWeather("11377");
