/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(2);
// import './utils';



console.log('app.js is running!!');
console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* square */](3));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* add */](3, 2));
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["a" /* canDrink */](23) ? 'Yuss' : 'Nah');
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["c" /* isAdult */](23) ? 'Adult' : 'Kid');
console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* default */](3,3))
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["b" /* default */](89))


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
console.log('utils is running');

const square = x => x * x;
/* harmony export (immutable) */ __webpack_exports__["c"] = square;


const add = (a, b) => a + b;
/* harmony export (immutable) */ __webpack_exports__["a"] = add;


// const subtract = (a, b) => a - b;
// export default subtract;

/* harmony default export */ __webpack_exports__["b"] = ((a, b) => a - b);

// Named export
// export { square, add, subtract };

// Default export
// export { square, add, subtract as default };


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSeniorCitizen; });
const isAdult = x => x >= 18;
/* harmony export (immutable) */ __webpack_exports__["c"] = isAdult;


const canDrink = x => x >= 25;

const isSeniorCitizen = x => x >= 65;



// export default (x) => x >= 65;


/***/ })
/******/ ]);