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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_html_elements_loadHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-html-elements/loadHTML */ \"./src/page-html-elements/loadHTML.js\");\n/* harmony import */ var _page_html_elements_loadHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-html-elements/loadHeader */ \"./src/page-html-elements/loadHeader.js\");\n/* harmony import */ var _page_html_elements_makeSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-html-elements/makeSidebar */ \"./src/page-html-elements/makeSidebar.js\");\n//1. factories or constructors/classes to generate todos\n\n\n\n\n(0,_page_html_elements_loadHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_page_html_elements_loadHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_page_html_elements_makeSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n// const one = createToDo('test', 'description','tomorrow','very high','false');\n// console.log(one);\n// const projectOne = blankProject('')\n// console.log(projectOne);\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/page-html-elements/loadHTML.js":
/*!********************************************!*\
  !*** ./src/page-html-elements/loadHTML.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHTML),\n/* harmony export */   \"makeSidebar\": () => (/* binding */ makeSidebar)\n/* harmony export */ });\n//select full html \nconst HTMLBody = document.querySelector('body');\n\nfunction loadHTML() {\n   //create website wrapper\n   const mainDiv = document.createElement('main');\n   mainDiv.classList.add('main-content');\n   //1.header wrapper\n   const headerWrapper = document.createElement('header');\n   headerWrapper.classList.add('header-wrapper');\n   //2. sidebar wrapper\n   const sidebarWrapper = document.createElement('div');\n   sidebarWrapper.classList.add('sidebar-wrapper');\n   //3. main wrapper\n   const contentWrapper = document.createElement('div');\n   contentWrapper.classList.add('content-wrapper');\n   //3. footer wrapper\n   const footerWrapper = document.createElement('footer');\n   footerWrapper.classList.add('footer-wrapper');\n  \n   HTMLBody.insertAdjacentElement(\"afterbegin\",mainDiv);\n   mainDiv.append(headerWrapper,sidebarWrapper,contentWrapper,footerWrapper); \n}\n\n\nfunction makeSidebar() {\n   const takeSidebar = document.querySelector('.sidebar-wrapper')\n}\n\n//# sourceURL=webpack://todo-list/./src/page-html-elements/loadHTML.js?");

/***/ }),

/***/ "./src/page-html-elements/loadHeader.js":
/*!**********************************************!*\
  !*** ./src/page-html-elements/loadHeader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeHeader)\n/* harmony export */ });\nfunction makeHeader(){\n\n    const takeHeader = document.querySelector('.header-wrapper');\n    \n    const nav = document.createElement('nav');\n    nav.classList.add('nav-bar');\n    \n    const logoTitle = document.createElement('div');\n    logoTitle.innerText = \"Your best To-do List\";\n    logoTitle.classList.add('logo');\n    \n    const createProject = document.createElement('button');\n    createProject.innerText = \"New Project\";\n    createProject.classList.add('project-button');\n    \n    const createToDoElement = document.createElement('button');\n    createToDoElement.innerText = \"New To Do\";\n    createToDoElement.classList.add('to-do-button');\n    \n    const contactMe = document.createElement('button');\n    contactMe.innerText = \"Contact me\";\n    contactMe.classList.add(\"contact-button\");\n    \n    nav.append(logoTitle, createProject, createToDoElement, contactMe);\n    takeHeader.append(nav);\n    }\n    \n\n//# sourceURL=webpack://todo-list/./src/page-html-elements/loadHeader.js?");

/***/ }),

/***/ "./src/page-html-elements/makeSidebar.js":
/*!***********************************************!*\
  !*** ./src/page-html-elements/makeSidebar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeSidebar)\n/* harmony export */ });\nfunction makeSidebar() {\n    const takeSidebar = document.querySelector('.sidebar-wrapper');\n\n    const sidebarTabs = document.createElement('ul');\n    sidebarTabs.classList.add(\"sidebar-list\");\n\n    const homeTab = document.createElement('li');\n    homeTab.innerText = \"Home\";\n    homeTab.id = \"home-tab\";\n\n    const todayTab = document.createElement('li');\n    todayTab.innerText = \"Today\";\n    todayTab.id = \"today-tab\";\n\n    const weekTab = document.createElement('li');\n    weekTab.innerText = \"This Week\";\n    weekTab.id = \"week-tab\";\n\n    const monthTab = document.createElement('li');\n    monthTab.innerText = \"This Month\";\n    monthTab.id = \"month-tab\";\n\n    const projectsTab = document.createElement('li');\n    projectsTab.innerText = \"Projects\";\n    projectsTab.id = \"projects-tab\";\n\n    sidebarTabs.append(homeTab,todayTab,weekTab,projectsTab);\n    takeSidebar.append(sidebarTabs);\n }\n\n//# sourceURL=webpack://todo-list/./src/page-html-elements/makeSidebar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;