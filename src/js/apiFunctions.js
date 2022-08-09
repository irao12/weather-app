async function getWeatherData(location) {
	try {
		let url = "https://api.openweathermap.org/data/2.5/forecast?q=";
		url += location;
		url += "&APPID=5189e4bc5795290189cb87a5a3ee5d01";
		const response = await fetch(url);
		const weatherData = await response.json();

		return weatherData;
	} catch (error) {
		console.log(error);
	}
}

const weatherData = getWeatherData("London");
weatherData.then((data) => {
	console.log(data);
});
