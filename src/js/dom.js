const dom = () => {
	const locationName = document.querySelector(".current .name");
	const locationTemp = document.querySelector(".current .temp");
	const locationFeelsLike = document.querySelector(".current .feels-like");
	const locationHumidity = document.querySelector(".current .humidity");
	const locationWind = document.querySelector(".current .wind");

	return {
		locationName,
		locationTemp,
		locationFeelsLike,
		locationHumidity,
		locationWind,
	};
};

export default dom();
