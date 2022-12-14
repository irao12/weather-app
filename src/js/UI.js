import getWeatherData from "./apiFunctions.js";
import dom from "./dom.js";
import util from "./util.js";
import { isBefore } from "date-fns";

function removeError() {
	dom.errorMessage.textContent = "";
	dom.errorMessage.classList.remove("active");
}

function displayError(text) {
	dom.errorMessage.classList.add("active");
	dom.errorMessage.textContent = text;
}

function showLoading() {
	dom.loadingScreen.classList.remove("inactive");
	dom.mainInfo.classList.add("inactive");
	dom.secondaryInfo.classList.add("inactive");
}

function removeLoading() {
	dom.loadingScreen.classList.add("inactive");
	dom.mainInfo.classList.remove("inactive");
	dom.secondaryInfo.classList.remove("inactive");
}

function displayWeatherIcon(weather, current, sunrise, sunset) {
	dom.weatherIcon.className = "weather-icon";
	let isDay;
	if (isBefore(current, sunrise)) isDay = false;
	else if (isBefore(current, sunset)) isDay = true;
	else isDay = false;

	switch (weather) {
		case "Drizzle":
			dom.weatherIcon.classList.add("light-rain");
			break;
		case "Rain":
			dom.weatherIcon.classList.add("rain");
			break;
		case "Thunderstorm":
			dom.weatherIcon.classList.add("thunder");
			break;
		case "Snow":
			dom.weatherIcon.classList.add("snow");
			break;
		case "Clouds":
			if (isDay) dom.weatherIcon.classList.add("cloudy-day");
			else dom.weatherIcon.classList.add("cloudy-night");
			break;
		case "Clear":
			if (isDay) dom.weatherIcon.classList.add("clear-day");
			else dom.weatherIcon.classList.add("clear-night");
			break;
		default:
			dom.weatherIcon.classList.add("wind");
	}
}

async function displayCurrentWeather(location) {
	try {
		showLoading();
		const weatherData = await getWeatherData(location);

		removeLoading();
		removeError();
		// change the location's name
		dom.locationName.textContent = weatherData.name;

		//change the weather icon to reflect the current weather
		const currWeather = weatherData.weather[0].main;
		const currDate = util.createDate(weatherData.dt);
		const sunriseDate = util.createDate(weatherData.sys.sunrise);
		const sunsetDate = util.createDate(weatherData.sys.sunset);
		displayWeatherIcon(currWeather, currDate, sunriseDate, sunsetDate);

		dom.weatherDetails.textContent = util.capitalize(
			weatherData.weather[0].description
		);

		// change the current temperature
		let temperature = weatherData.main.temp;
		temperature = util.kelvinToFahrenheit(temperature);
		dom.locationTemp.textContent = temperature.toFixed(0) + "\u00B0 F";

		// change the current feels like temperature
		let feelsLike = weatherData.main.feels_like;
		feelsLike = util.kelvinToFahrenheit(feelsLike);
		dom.locationFeelsLike.textContent =
			"Feels like " + feelsLike.toFixed(0) + "\u00B0 F";

		// change the current humidity
		const humidity = weatherData.main.humidity;
		dom.locationHumidity.textContent = `Humidity: ${humidity}%`;

		// change the current wind speed
		const wind = weatherData.wind.speed;
		dom.locationWind.textContent = `Wind speed: ${wind} meters/sec`;
	} catch (error) {
		displayError("* search was invalid");
		removeLoading();
		console.log(error);
	}
}

dom.searchButton.addEventListener("click", () => {
	const searchValue = dom.searchInput.value;
	if (!searchValue) {
		displayError("* please enter a location");
		return;
	}
	const formattedSearch = util.processSearch(searchValue);
	displayCurrentWeather(formattedSearch);
});

dom.searchInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		dom.searchButton.click();
	}
});

displayCurrentWeather("New+York");
