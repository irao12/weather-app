/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://starter-files/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isBefore)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isBefore\n * @category Common Helpers\n * @summary Is the first date before the second one?\n *\n * @description\n * Is the first date before the second one?\n *\n * @param {Date|Number} date - the date that should be before the other one to return true\n * @param {Date|Number} dateToCompare - the date to compare with\n * @returns {Boolean} the first date is before the second date\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Is 10 July 1989 before 11 February 1987?\n * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))\n * //=> false\n */\n\nfunction isBefore(dirtyDate, dirtyDateToCompare) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateToCompare);\n  return date.getTime() < dateToCompare.getTime();\n}\n\n//# sourceURL=webpack://starter-files/./node_modules/date-fns/esm/isBefore/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://starter-files/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions.js */ \"./src/js/apiFunctions.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isBefore/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction displayWeatherIcon(weather, current, sunrise, sunset) {\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.className = \"weather-icon\";\r\n\tlet isDay;\r\n\tif ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(current, sunrise)) isDay = false;\r\n\telse if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(current, sunset)) isDay = true;\r\n\telse isDay = false;\r\n\r\n\tswitch (weather) {\r\n\t\tcase \"Drizzle\":\r\n\t\t\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"light-rain\");\r\n\t\t\tbreak;\r\n\t\tcase \"Rain\":\r\n\t\t\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"rain\");\r\n\t\t\tbreak;\r\n\t\tcase \"Thunderstorm\":\r\n\t\t\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"thunder\");\r\n\t\t\tbreak;\r\n\t\tcase \"Snow\":\r\n\t\t\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"snow\");\r\n\t\t\tbreak;\r\n\t\tcase \"Clouds\":\r\n\t\t\tif (isDay) _dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"cloudy-day\");\r\n\t\t\telse _dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"cloudy-night\");\r\n\t\t\tbreak;\r\n\t\tcase \"Clear\":\r\n\t\t\tif (isDay) _dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"clear-day\");\r\n\t\t\telse _dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherIcon.classList.add(\"clear-night\");\r\n\t\t\tbreak;\r\n\t}\r\n}\r\n\r\nasync function displayCurrentWeather(location) {\r\n\tconst weatherData = await (0,_apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n\tconsole.log(weatherData);\r\n\t// change the location's name\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationName.textContent = weatherData.name;\r\n\r\n\t//change the weather icon to reflect the current weather\r\n\tconst currWeather = weatherData.weather[0].main;\r\n\tconst currDate = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createDate(weatherData.dt);\r\n\tconst sunriseDate = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createDate(weatherData.sys.sunrise);\r\n\tconst sunsetDate = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createDate(weatherData.sys.sunset);\r\n\tdisplayWeatherIcon(currWeather, currDate, sunriseDate, sunsetDate);\r\n\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].weatherDetails.textContent = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].capitalize(\r\n\t\tweatherData.weather[0].description\r\n\t);\r\n\r\n\t// change the current temperature\r\n\tlet temperature = weatherData.main.temp;\r\n\ttemperature = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].kelvinToFahrenheit(temperature);\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationTemp.textContent = temperature.toFixed(0) + \"\\u00B0 F\";\r\n\r\n\t// change the current feels like temperature\r\n\tlet feelsLike = weatherData.main.feels_like;\r\n\tfeelsLike = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].kelvinToFahrenheit(feelsLike);\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationFeelsLike.textContent =\r\n\t\t\"Feels like \" + feelsLike.toFixed(0) + \"\\u00B0 F\";\r\n\r\n\t// change the current humidity\r\n\tconst humidity = weatherData.main.humidity;\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationHumidity.textContent = `Humidity: ${humidity}%`;\r\n\r\n\t// change the current wind speed\r\n\tconst wind = weatherData.wind.speed;\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationWind.textContent = `Wind speed: ${wind} meters/sec`;\r\n}\r\n\r\n_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchButton.addEventListener(\"click\", () => {\r\n\tconst searchValue = _dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchInput.value;\r\n\tconst formattedSearch = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].processSearch(searchValue);\r\n\tconsole.log({ searchValue, formattedSearch });\r\n\tdisplayCurrentWeather(formattedSearch);\r\n});\r\n\r\n_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchInput.addEventListener(\"keypress\", (event) => {\r\n\tif (event.key === \"Enter\") {\r\n\t\tevent.preventDefault();\r\n\t\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchButton.click();\r\n\t}\r\n});\r\n\r\ndisplayCurrentWeather(\"New+York\");\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/UI.js?");

/***/ }),

/***/ "./src/js/apiFunctions.js":
/*!********************************!*\
  !*** ./src/js/apiFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeatherData(location) {\r\n\ttry {\r\n\t\tlet url = \"https://api.openweathermap.org/data/2.5/weather?q=\";\r\n\t\turl += location;\r\n\t\turl += \"&APPID=5189e4bc5795290189cb87a5a3ee5d01\";\r\n\t\tconst response = await fetch(url);\r\n\t\tconst weatherData = await response.json();\r\n\r\n\t\treturn weatherData;\r\n\t} catch (error) {\r\n\t\tconsole.log(error);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/apiFunctions.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = () => {\r\n\tconst locationName = document.querySelector(\".current .name\");\r\n\r\n\tconst weatherIcon = document.querySelector(\".weather-icon\");\r\n\tconst weatherDetails = document.querySelector(\".weather-details\");\r\n\tconst locationTemp = document.querySelector(\".current .temp\");\r\n\tconst locationFeelsLike = document.querySelector(\".current .feels-like\");\r\n\tconst locationHumidity = document.querySelector(\".current .humidity\");\r\n\tconst locationWind = document.querySelector(\".current .wind\");\r\n\r\n\tconst searchButton = document.querySelector(\".search-button\");\r\n\tconst searchInput = document.querySelector(\".search-bar\");\r\n\r\n\treturn {\r\n\t\tlocationName,\r\n\t\tweatherIcon,\r\n\t\tweatherDetails,\r\n\t\tlocationTemp,\r\n\t\tlocationFeelsLike,\r\n\t\tlocationHumidity,\r\n\t\tlocationWind,\r\n\r\n\t\tsearchButton,\r\n\t\tsearchInput,\r\n\t};\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom());\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions.js */ \"./src/js/apiFunctions.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI.js */ \"./src/js/UI.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/index.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction kelvinToCelsius(kelvin) {\r\n\treturn kelvin - 273.15;\r\n}\r\n\r\nfunction celsiusToFahrenheit(celsius) {\r\n\treturn (celsius * 9) / 5 + 32;\r\n}\r\n\r\nfunction kelvinToFahrenheit(kelvin) {\r\n\tconst inCelsius = kelvinToCelsius(kelvin);\r\n\treturn celsiusToFahrenheit(inCelsius);\r\n}\r\n\r\nfunction createDate(unix) {\r\n\treturn new Date(unix * 1000);\r\n}\r\n\r\nfunction capitalize(string) {\r\n\tconst stringSeparated = string.split(\" \");\r\n\tconst stringSeparatedCapitalized = stringSeparated.map((word) => {\r\n\t\treturn word[0].toUpperCase() + word.substring(1);\r\n\t});\r\n\treturn stringSeparatedCapitalized.join(\" \");\r\n}\r\n\r\nfunction processSearch(searchTerm) {\r\n\tsearchTerm = searchTerm.trim();\r\n\tsearchTerm = searchTerm.replace(/ +/g, \"+\");\r\n\treturn searchTerm;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n\tkelvinToCelsius,\r\n\tkelvinToFahrenheit,\r\n\tcreateDate,\r\n\tcapitalize,\r\n\tprocessSearch,\r\n});\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;