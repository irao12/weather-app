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

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions.js */ \"./src/js/apiFunctions.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n\r\n\r\n\r\n\r\nasync function displayCurrentWeather(location) {\r\n\tconst weatherData = await (0,_apiFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n\tconsole.log(weatherData);\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationName.textContent = weatherData.name;\r\n\r\n\tlet temperature = weatherData.main.temp;\r\n\ttemperature = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].kelvinToFahrenheit(temperature);\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationTemp.textContent = temperature.toFixed(0) + \"\\u00B0 F\";\r\n\r\n\tlet feelsLike = weatherData.main.feels_like;\r\n\tfeelsLike = _util_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].kelvinToFahrenheit(feelsLike);\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationFeelsLike.textContent =\r\n\t\t\"Feels like \" + feelsLike.toFixed(0) + \"\\u00B0 F\";\r\n\r\n\tconst humidity = weatherData.main.humidity;\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationHumidity.textContent = `Humidity: ${humidity}%`;\r\n\r\n\tconst wind = weatherData.wind.speed;\r\n\t_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locationWind.textContent = `Wind speed: ${wind} meters/sec`;\r\n}\r\n\r\ndisplayCurrentWeather(\"11377\");\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = () => {\r\n\tconst locationName = document.querySelector(\".current .name\");\r\n\tconst locationTemp = document.querySelector(\".current .temp\");\r\n\tconst locationFeelsLike = document.querySelector(\".current .feels-like\");\r\n\tconst locationHumidity = document.querySelector(\".current .humidity\");\r\n\tconst locationWind = document.querySelector(\".current .wind\");\r\n\r\n\treturn {\r\n\t\tlocationName,\r\n\t\tlocationTemp,\r\n\t\tlocationFeelsLike,\r\n\t\tlocationHumidity,\r\n\t\tlocationWind,\r\n\t};\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom());\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction kelvinToCelsius(kelvin) {\r\n\treturn kelvin - 273.15;\r\n}\r\n\r\nfunction celsiusToFahrenheit(celsius) {\r\n\treturn (celsius * 9) / 5 + 32;\r\n}\r\n\r\nfunction kelvinToFahrenheit(kelvin) {\r\n\tconst inCelsius = kelvinToCelsius(kelvin);\r\n\treturn celsiusToFahrenheit(inCelsius);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ kelvinToCelsius, kelvinToFahrenheit });\r\n\n\n//# sourceURL=webpack://starter-files/./src/js/util.js?");

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