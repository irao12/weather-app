const dom = () => {
	const locationName = document.querySelector(".current .name");

	const weatherIcon = document.querySelector(".weather-icon");
	const weatherDetails = document.querySelector(".weather-details");
	const locationTemp = document.querySelector(".current .temp");
	const locationFeelsLike = document.querySelector(".current .feels-like");
	const locationHumidity = document.querySelector(".current .humidity");
	const locationWind = document.querySelector(".current .wind");

	const searchButton = document.querySelector(".search-button");
	const searchInput = document.querySelector(".search-bar");

	return {
		locationName,
		weatherIcon,
		weatherDetails,
		locationTemp,
		locationFeelsLike,
		locationHumidity,
		locationWind,

		searchButton,
		searchInput,
	};
};

export default dom();