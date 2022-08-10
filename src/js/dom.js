const dom = () => {
	const loadingScreen = document.querySelector(".loading");
	const mainInfo = document.querySelector(".main-info");
	const secondaryInfo = document.querySelector(".secondary-info");

	const locationName = document.querySelector(".current .name");
	const weatherIcon = document.querySelector(".weather-icon");
	const weatherDetails = document.querySelector(".weather-details");
	const locationTemp = document.querySelector(".current .temp");
	const locationFeelsLike = document.querySelector(".current .feels-like");
	const locationHumidity = document.querySelector(".current .humidity");
	const locationWind = document.querySelector(".current .wind");

	const searchButton = document.querySelector(".search-button");
	const searchInput = document.querySelector(".search-bar");
	const errorMessage = document.querySelector(".error");

	return {
		loadingScreen,
		mainInfo,
		secondaryInfo,

		locationName,
		weatherIcon,
		weatherDetails,
		locationTemp,
		locationFeelsLike,
		locationHumidity,
		locationWind,

		searchButton,
		searchInput,
		errorMessage,
	};
};

export default dom();
