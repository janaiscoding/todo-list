/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-beige: #EEEEEE; /* content background,header text,sidebar text*/\n    --primary-white: #EEEEEE; /* sidebar */\n    --primary-brown: #18122B; /* header background */\n    --header-background: #393053;\n    --primary-grey: #2E2B2B; /* modal background */\n    --primary-green: #51894D; /* add buttons */\n    --primary-red: #EB455F; /* remove/cancel buttons */\n    --secondary-brown: #594545; /* content text */\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\nbody {\n    background-color: var(--primary-beige);\n    font-family: 'Roboto', sans-serif;\n    color: var(--secondary-brown);\n    line-height: 1.6;\n    letter-spacing: 1px;\n}\n\n/* HEADER */\n.header-wrapper {\n    display:flex;\n    height: 10vh;\n    background-color: var(--header-background);\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n.task-container{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.logo {\n    color:var(--primary-beige);\n    font-weight: 700;\n    font-size: 2rem;\n}\n.contact-link,\n.footer-link{\n    color: var(--primary-beige);\n    font-weight: 700;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin-right: 100px;\n}\n.footer-link{\n    font-weight: 500;\n    font-size: 1rem;\n}\n.contact-link:hover{\n    border-bottom: 2px solid var(--primary-beige);\n}\n/* MAIN CONTENT */\n\n.main {\n    display:grid;\n    height: 85vh;\n    grid-template-columns: 300px 1fr;\n}\n\n/* SIDEBAR & PROJECTS */\n.sidebar{\n    grid-column: 1/2;\n    background-color: var(--primary-beige);\n    color: var(--primary-grey);\n    font-size: 1.3rem;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    padding: 30px 20px;\n}\n.predefined-lists{\n    margin-bottom: 25px;\n}\n\n.proj {\n    display:flex;\n    justify-content: space-between;\n    font-weight: 200;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.lists-title {\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: var(--primary-brown);\n    padding-left: 20px;   \n}\n\n.proj:hover{\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n.proj-title:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.open-project-modal{\n    display:block;\n    padding-left: 20px;\n    margin-top: 15px;\n    font-weight: 200;\n    color: var(--primary-brown);\n    border-radius: 5px;\n}\n\n.open-project-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n\n/* SPACE FOR TO DO'S */\n.content {\n    grid-column: 2/3;\n    padding: 30px 50px;\n}\n\n.title-wrapper{\n    display:flex;\n    justify-content: center;\n    color: var(--primary-brown);\n}\n\n.title{\n    padding: 0px 20px;\n    font-weight: 700;\n    font-size: 3rem;\n    border-bottom: 3px solid var(--primary-brown);\n}\n.task-title {\n    display:flex;\n    font-weight: 700;\n    font-size: 2rem;\n    color: var(--primary-brown);\n    padding-left: 5%;\n}\n\n/* CARD STYLING*/\n.card {\n    /* display: flex;\n    justify-content: space-between;\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n    align-items: center;\n    align-content: center; */\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 10px 5% 10px 5%;\n    margin: 10px 20px;\n}\n\n.task-name{\n    font-weight: 600;\n    color:var(--primary-brown);\n}\n.description{\n    color:var(--primary-brown);    \n    font-style: italic;\n}\n.card-wrapper-two{\n    grid-column: 3/4;\n}\n.card:hover{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.card-wrapper-one {\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n}\n.card-wrapper-two{\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n    justify-content: flex-end;\n}\n.description {\n    padding: 0px 10px;\n}\n.priority-High{\n    color:var(--primary-red);\n}\n.priority-Low{\n    color:var(--primary-green);\n}\ni {\n    align-self: center;\n    justify-self: center;\n}\ni:hover{\n    cursor: pointer;\n}\n\n/* MODAL & MODAL CONTENT */\n.modal {\n    display:none;\n    position: relative;\n    z-index: 1;\n    background-color: #2e2b2b2d;\n    color: var(--primary-brown);\n    border-radius: 20px;\n    padding: 10px 20px 10px 5%;\n}\n.project-modal{\n    display:none;\n    padding: 10px 20px 10px 5%;\n}\n.open-modal{\n    font-weight: 200;\n    color: var(--primary-grey);\n    font-size: 1.3rem;\n    padding: 10px 20px 10px 5%;\n    display:block;\n}\n.open-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 20px;\n}\n\n.input-project {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n}\n.add-project{\n    margin-right:20px;\n}\n.add-task,\n.close-modal,\n.add-project,\n.close-project-modal{\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: 100px;\n}\n\n.add-task:hover,\n.add-project:hover {\n  background-color: #51894d90;\n}\n.close-modal:hover,\n.close-project-modal:hover {\n    background-color: var(--primary-red);\n    color:var(--primary-beige);\n  }\n\n/*footer */\n.footer{ \n    display: flex;\n    width: 100%;\n    height: 5vh;\n    background-color: var(--primary-brown);\n    color: var(--primary-beige);\n    justify-content: center;\n    align-items: center;\n}\n\n/* global settings */\na,\na:visited {\n    text-decoration: none;\n}\nli {\n    list-style-type: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary-beige: #EEEEEE; /* content background,header text,sidebar text*/\n    --primary-white: #EEEEEE; /* sidebar */\n    --primary-brown: #18122B; /* header background */\n    --header-background: #393053;\n    --primary-grey: #2E2B2B; /* modal background */\n    --primary-green: #51894D; /* add buttons */\n    --primary-red: #EB455F; /* remove/cancel buttons */\n    --secondary-brown: #594545; /* content text */\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\nbody {\n    background-color: var(--primary-beige);\n    font-family: 'Roboto', sans-serif;\n    color: var(--secondary-brown);\n    line-height: 1.6;\n    letter-spacing: 1px;\n}\n\n/* HEADER */\n.header-wrapper {\n    display:flex;\n    height: 10vh;\n    background-color: var(--header-background);\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n.task-container{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.logo {\n    color:var(--primary-beige);\n    font-weight: 700;\n    font-size: 2rem;\n}\n.contact-link,\n.footer-link{\n    color: var(--primary-beige);\n    font-weight: 700;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin-right: 100px;\n}\n.footer-link{\n    font-weight: 500;\n    font-size: 1rem;\n}\n.contact-link:hover{\n    border-bottom: 2px solid var(--primary-beige);\n}\n/* MAIN CONTENT */\n\n.main {\n    display:grid;\n    height: 85vh;\n    grid-template-columns: 300px 1fr;\n}\n\n/* SIDEBAR & PROJECTS */\n.sidebar{\n    grid-column: 1/2;\n    background-color: var(--primary-beige);\n    color: var(--primary-grey);\n    font-size: 1.3rem;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    padding: 30px 20px;\n}\n.predefined-lists{\n    margin-bottom: 25px;\n}\n\n.proj {\n    display:flex;\n    justify-content: space-between;\n    font-weight: 200;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.lists-title {\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: var(--primary-brown);\n    padding-left: 20px;   \n}\n\n.proj:hover{\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n.proj-title:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.open-project-modal{\n    display:block;\n    padding-left: 20px;\n    margin-top: 15px;\n    font-weight: 200;\n    color: var(--primary-brown);\n    border-radius: 5px;\n}\n\n.open-project-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n\n/* SPACE FOR TO DO'S */\n.content {\n    grid-column: 2/3;\n    padding: 30px 50px;\n}\n\n.title-wrapper{\n    display:flex;\n    justify-content: center;\n    color: var(--primary-brown);\n}\n\n.title{\n    padding: 0px 20px;\n    font-weight: 700;\n    font-size: 3rem;\n    border-bottom: 3px solid var(--primary-brown);\n}\n.task-title {\n    display:flex;\n    font-weight: 700;\n    font-size: 2rem;\n    color: var(--primary-brown);\n    padding-left: 5%;\n}\n\n/* CARD STYLING*/\n.card {\n    /* display: flex;\n    justify-content: space-between;\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n    align-items: center;\n    align-content: center; */\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 10px 5% 10px 5%;\n    margin: 10px 20px;\n}\n\n.task-name{\n    font-weight: 600;\n    color:var(--primary-brown);\n}\n.description{\n    color:var(--primary-brown);    \n    font-style: italic;\n}\n.card-wrapper-two{\n    grid-column: 3/4;\n}\n.card:hover{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.card-wrapper-one {\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n}\n.card-wrapper-two{\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n    justify-content: flex-end;\n}\n.description {\n    padding: 0px 10px;\n}\n.priority-High{\n    color:var(--primary-red);\n}\n.priority-Low{\n    color:var(--primary-green);\n}\ni {\n    align-self: center;\n    justify-self: center;\n}\ni:hover{\n    cursor: pointer;\n}\n\n/* MODAL & MODAL CONTENT */\n.modal {\n    display:none;\n    position: relative;\n    z-index: 1;\n    background-color: #2e2b2b2d;\n    color: var(--primary-brown);\n    border-radius: 20px;\n    padding: 10px 20px 10px 5%;\n}\n.project-modal{\n    display:none;\n    padding: 10px 20px 10px 5%;\n}\n.open-modal{\n    font-weight: 200;\n    color: var(--primary-grey);\n    font-size: 1.3rem;\n    padding: 10px 20px 10px 5%;\n    display:block;\n}\n.open-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 20px;\n}\n\n.input-project {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n}\n.add-project{\n    margin-right:20px;\n}\n.add-task,\n.close-modal,\n.add-project,\n.close-project-modal{\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: 100px;\n}\n\n.add-task:hover,\n.add-project:hover {\n  background-color: #51894d90;\n}\n.close-modal:hover,\n.close-project-modal:hover {\n    background-color: var(--primary-red);\n    color:var(--primary-beige);\n  }\n\n/*footer */\n.footer{ \n    display: flex;\n    width: 100%;\n    height: 5vh;\n    background-color: var(--primary-brown);\n    color: var(--primary-beige);\n    justify-content: center;\n    align-items: center;\n}\n\n/* global settings */\na,\na:visited {\n    text-decoration: none;\n}\nli {\n    list-style-type: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");





class UI{
    static loadHomepage(){
        UI.loadProjects()//Load all projects from Storage.
        UI.openProject('Inbox')//Always open 'Inbox' (Default) on page-load.
    }

    static loadProjects(){
        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList()//Fetch the List from Storage.
        .getProjects() //Get all the Projects from List.
        .forEach((project) => { //On Each Project,
            if(project.title !== 'Inbox'){ //Except the Default,
                UI.createProject(project.title) //Create HTML content.
            } 
        })
        UI.handleMainProjBtns() //Initialize the Project Buttons.
    }

   static loadTasks(projectName){ //LOADS TASKS FROM STORAGE
     UI.handleMainTaskBtns()
     UI.clearTasks()
     let currentProject = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList().getProject(projectName)
     let currentTasks = currentProject.getTasks()
     currentTasks.forEach((task) => UI.createTask(task.title, task.description,task.priority,task.dueDate))
    }
    //ADD NEW CONTENT TO STORAGE
   static addProject(){
    const projectName = document.getElementById('project').value;
    if(projectName === '' ){
         return
    } 
    if(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList().contains(projectName)){
        return
    }
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"](projectName))
    UI.createProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
   }     

   static addTask(){
    const projectName = document.querySelector('.title').textContent;

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value; 
    if (title === '' || date === '') {
        return
    }
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(projectName, new _createTask__WEBPACK_IMPORTED_MODULE_2__["default"](title,description,priority,date));
    UI.createTask(title,description,priority,date)
   }

   static openProject(projectName){ // OPEN THE CLICKED PROJECT
    const projectTitleDOM = document.querySelector('.title');
    projectTitleDOM.textContent = projectName;
    UI.loadTasks(projectName);
}


   //DELETE CONTENT FROM STORAGE

   static deleteProject(projectName){
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(projectName);
   }

   static deleteTask(currentProject, taskToDelete){ 
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(currentProject,taskToDelete);
   }
   //CLEAR HTML CONTENT 

   static clearProjects(){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML="";
   }

   static clearTasks(){
    const taskContainer = document.querySelector('.task-container')
    taskContainer.innerHTML = ''
    }

   // BUTTONS PROJECT+TASK
   static handleMainProjBtns(){
    const defaultProject = document.querySelector('.inbox-project'); //Select Default Project(already in HTML).
    const openProjModal = document.querySelector('.open-project-modal'); //Select Open Modal Button
    const closeProjModal = document.querySelector('.close-project-modal'); //Select Close Modal Button
    const addProjBtn = document.querySelector('.add-project'); //Select Add Project Button
    const deleteProjectBtns = document.querySelectorAll('.delete-project'); //Select Delete Project Button
    const allProjects = document.querySelectorAll('.proj-name'); //Select Project - on-click Event 

    openProjModal.onclick = UI.openProjectModal;
    closeProjModal.onclick = UI.closeProjectModal;

    addProjBtn.addEventListener('click', (e)=>{
        e.preventDefault(); //Avoid Form's default behaviour.
        UI.addProject(); //Calls Function -> Add Project.
        UI.closeProjectModal(); //Closes Form.
    })

    deleteProjectBtns.forEach((button) => //Select All Buttons.
        button.addEventListener('click', (e) => { //Find clicked Button.
        let projectName = e.currentTarget.parentElement.firstElementChild.innerHTML; //Find Selected Project
        UI.deleteProject(projectName); //Delete Project.
        UI.clearProjects(); //Clear Sidebar.
        UI.loadProjects(); //Reload existing Projects from Storage.
    }))

    allProjects.forEach((project) => 
    project.addEventListener('click', (e) => { //Find clicked Project.
        let projectName = e.currentTarget.textContent; //Select Project.
        UI.openProject(projectName); //Open Project's Tasks.
    }))
    //Default project function (Without this, it seems that my functions are repeating twice)
    defaultProject.addEventListener('click', () => { 
        UI.openProject('Inbox')
    })
    }

    static handleMainTaskBtns(){
        const openTaskModal = document.querySelector('.open-modal')//open add task modal 
        const closeTaskModal = document.querySelector('.close-modal')//close add task modal 
        const addTaskBtn = document.querySelector('.add-task')//add a new task
        const deleteTaskBtns = document.querySelectorAll('.delete-task')//delete an existing task

        openTaskModal.onclick = UI.openTaskModal;
        closeTaskModal.onclick = UI.closeTaskModal;
 
        addTaskBtn.addEventListener('click', (e) => {
            e.preventDefault()
            UI.addTask()
            UI.closeTaskModal()
        })

        deleteTaskBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                let taskToDelete = e.currentTarget.parentElement.parentElement.firstElementChild.innerText;
                console.log(taskToDelete)
                let currentProject = document.querySelector('.title').innerText
                console.log(currentProject)
                UI.deleteTask(currentProject, taskToDelete)
                UI.clearTasks()
                UI.loadTasks(currentProject)
            })
        })
     }
    // CREATE HTML CONTENT - PROJECT + TASK
    static createProject(title){
        const projectsContainer = document.querySelector('.js-lists'); //Select Sidebar
        projectsContainer.innerHTML += `<div class="proj">
        <li class="proj-name proj-title">${title}</li>
        <i class="fa-regular fa-circle-xmark delete-project"></i>
        </div>`;
        } 

   static createTask(name,description,priority,dueDate){
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML += `
    <div class="card">
    <div class="card-wrapper-one">
        <p class="task-name">${name}</p>
    </div>
    <p class="description">${description}</p>
    <div class="card-wrapper-two">
        <p class="priority-${priority}">${priority}</p>
        <p class="due-date">${dueDate}</p>
        <i class="fa-regular fa-circle-xmark delete-task"></i>
    </div>
    </div>
    `
    UI.handleMainTaskBtns()
   }

    //MODAL OPEN/CLOSE - PROJECT + TASK
    static openProjectModal(){
        const projectModal = document.querySelector('.project-modal');
        const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display = "block";
        openProjModal.style.display = "none";
    }

   static closeProjectModal(){
    document.getElementById('project').value = ""
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display ="none";
        openProjModal.style.display ="block";
   }

   static openTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    taskModal.style.display = "block"
    openTaskModal.style.display = 'none';
   }

   static closeTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    document.getElementById('title').value = "";
    document.getElementById('description').value = ""
        taskModal.style.display ="none";
        openTaskModal.style.display ="block";
   }
}



/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createList */ "./src/modules/createList.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");




class Storage {
    static saveTodoList(data) {
      localStorage.setItem('todoList', JSON.stringify(data))
    }
  
    static getTodoList() {
      const todoList = Object.assign(
        new _createList__WEBPACK_IMPORTED_MODULE_0__["default"](),
        JSON.parse(localStorage.getItem('todoList'))
      )
  
      todoList.setProjects(
        todoList
          .getProjects()
          .map((project) => Object.assign(new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
      )
  
      todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new _createTask__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
        )
      )
      return todoList
    }
  
    static addProject(project) {
      const todoList = Storage.getTodoList()
      todoList.addProject(project)
      Storage.saveTodoList(todoList)
    }
  
    static deleteProject(projectName) {
      const todoList = Storage.getTodoList()
      todoList.deleteProject(projectName)
      Storage.saveTodoList(todoList)
    }
  
    static addTask(projectName, task) {
      const todoList = Storage.getTodoList()
      todoList.getProject(projectName).addTask(task)
      Storage.saveTodoList(todoList)
    }
  
    static deleteTask(projectName, taskName) {
      const todoList = Storage.getTodoList()
      todoList.getProject(projectName).deleteTask(taskName)
      Storage.saveTodoList(todoList)
    }
}  

/***/ }),

/***/ "./src/modules/createList.js":
/*!***********************************!*\
  !*** ./src/modules/createList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");


class TodoList {
  constructor() {
    this.projects = []
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'))
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Workout'))
  }

  setProjects(projects) {
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  getProject(projectTitle) {
    return this.projects.find((project) => project.getTitle() === projectTitle)
  }

  contains(projectTitle) {
    return this.projects.some((project) => project.getTitle() === projectTitle)
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.title === newProject.title))
      return
    this.projects.push(newProject)
  }

  deleteProject(projectTitle) {
    const projectToDelete = this.projects.find(
      (project) => project.getTitle() === projectTitle
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
  }
}

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
      this.title = title
      this.tasks = []
    }
  
    setTitle(title) {
      this.title = title
    }
  
    getTitle() {
      return this.title
    }
  
    setTasks(tasks) {
      this.tasks = tasks
    }
  
    getTasks() {
      return this.tasks
    }
  
    getTask(tasktitle) {
      return this.tasks.find((task) => task.getTitle() === tasktitle)
    }
  
    contains(tasktitle) {
      return this.tasks.some((task) => task.getTitle() === tasktitle)
    }
  
    addTask(newTask) {
      if (this.tasks.find((task) => task.getTitle() === newTask.title)) return
      this.tasks.push(newTask)
    }
  
    deleteTask(tasktitle) {
      this.tasks = this.tasks.filter((task) => task.title !== tasktitle)
    }
}

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task { 
    constructor(title,description,priority,dueDate) {
        this.title = title
        this.description = description
        this.priority = priority
        this.dueDate = dueDate
    }

    setTitle(title) {
      this.title = title
    }
    
    getTitle() {
      return this.title
    }
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//Full app functionability 
document.addEventListener('DOMContentLoaded', _modules_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage)

//Default Content
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Inbox'))
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox',new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Clear my room', 'Clothes+Dust', 'High', '2023-03-20'))
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox',new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Weather App', 'Learn working with API', 'High', '2023-03-25'))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sNEJBQTRCLEdBQUcsV0FBVyxnRkFBZ0Ysd0JBQXdCLHVCQUF1Qix5QkFBeUIsYUFBYSx5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFNBQVMsT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxL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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ1M7QUFDTTtBQUNOO0FBQ25COztBQUVyQjtBQUNBLDhDQUE4QyxpRUFBZTs7QUFFN0Q7QUFDQSxtRUFBa0IsS0FBSyw4REFBTztBQUM5QixnRUFBZSxhQUFhLDJEQUFJO0FBQ2hDLGdFQUFlLGFBQWEsMkRBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktYmVpZ2U6ICNFRUVFRUU7IC8qIGNvbnRlbnQgYmFja2dyb3VuZCxoZWFkZXIgdGV4dCxzaWRlYmFyIHRleHQqL1xcbiAgICAtLXByaW1hcnktd2hpdGU6ICNFRUVFRUU7IC8qIHNpZGViYXIgKi9cXG4gICAgLS1wcmltYXJ5LWJyb3duOiAjMTgxMjJCOyAvKiBoZWFkZXIgYmFja2dyb3VuZCAqL1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjMzkzMDUzO1xcbiAgICAtLXByaW1hcnktZ3JleTogIzJFMkIyQjsgLyogbW9kYWwgYmFja2dyb3VuZCAqL1xcbiAgICAtLXByaW1hcnktZ3JlZW46ICM1MTg5NEQ7IC8qIGFkZCBidXR0b25zICovXFxuICAgIC0tcHJpbWFyeS1yZWQ6ICNFQjQ1NUY7IC8qIHJlbW92ZS9jYW5jZWwgYnV0dG9ucyAqL1xcbiAgICAtLXNlY29uZGFyeS1icm93bjogIzU5NDU0NTsgLyogY29udGVudCB0ZXh0ICovXFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJlaWdlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJyb3duKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxufVxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NDU0NTI1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubG9nbyB7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktYmVpZ2UpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbi5jb250YWN0LWxpbmssXFxuLmZvb3Rlci1saW5re1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iZWlnZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuLmZvb3Rlci1saW5re1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5jb250YWN0LWxpbms6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJlaWdlKTtcXG59XFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi8qIFNJREVCQVIgJiBQUk9KRUNUUyAqL1xcbi5zaWRlYmFye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJlaWdlKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcbi5wcmVkZWZpbmVkLWxpc3Rze1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4ucHJvaiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5saXN0cy10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1icm93bik7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgICBcXG59XFxuXFxuLnByb2o6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvai10aXRsZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5vcGVuLXByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnJvd24pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuLXByb2plY3QtbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNQQUNFIEZPUiBUTyBETydTICovXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1icm93bik7XFxufVxcblxcbi50aXRsZXtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktYnJvd24pO1xcbn1cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1icm93bik7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbi8qIENBUkQgU1RZTElORyovXFxuLmNhcmQge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLW5hbWV7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktYnJvd24pO1xcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktYnJvd24pOyAgICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTQ1NDUyNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmNhcmQtd3JhcHBlci1vbmUge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5jYXJkLXdyYXBwZXItdHdve1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG4ucHJpb3JpdHktSGlnaHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1yZWQpO1xcbn1cXG4ucHJpb3JpdHktTG93e1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuaSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbmk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTU9EQUwgJiBNT0RBTCBDT05URU5UICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJiMmIyZDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnJvd24pO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLnByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxufVxcbi5vcGVuLW1vZGFse1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmV5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG4ub3Blbi1tb2RhbDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5pbnB1dC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4uYWRkLXByb2plY3R7XFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcbn1cXG4uYWRkLXRhc2ssXFxuLmNsb3NlLW1vZGFsLFxcbi5hZGQtcHJvamVjdCxcXG4uY2xvc2UtcHJvamVjdC1tb2RhbHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWQ5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgyMTMsIDIxNywgMjE3LCAuNSkgMCAycHggNXB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMwZjExMTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMjlweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlcixcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbn1cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLXByb2plY3QtbW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktYmVpZ2UpO1xcbiAgfVxcblxcbi8qZm9vdGVyICovXFxuLmZvb3RlcnsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1icm93bik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJlaWdlKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGdsb2JhbCBzZXR0aW5ncyAqL1xcbmEsXFxuYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QixFQUFFLCtDQUErQztJQUN6RSx3QkFBd0IsRUFBRSxZQUFZO0lBQ3RDLHdCQUF3QixFQUFFLHNCQUFzQjtJQUNoRCw0QkFBNEI7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O0FBQzFCO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOzs7O0VBSUUsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLDBCQUEwQjtFQUM1Qjs7QUFFRixVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWJlaWdlOiAjRUVFRUVFOyAvKiBjb250ZW50IGJhY2tncm91bmQsaGVhZGVyIHRleHQsc2lkZWJhciB0ZXh0Ki9cXG4gICAgLS1wcmltYXJ5LXdoaXRlOiAjRUVFRUVFOyAvKiBzaWRlYmFyICovXFxuICAgIC0tcHJpbWFyeS1icm93bjogIzE4MTIyQjsgLyogaGVhZGVyIGJhY2tncm91bmQgKi9cXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzM5MzA1MztcXG4gICAgLS1wcmltYXJ5LWdyZXk6ICMyRTJCMkI7IC8qIG1vZGFsIGJhY2tncm91bmQgKi9cXG4gICAgLS1wcmltYXJ5LWdyZWVuOiAjNTE4OTREOyAvKiBhZGQgYnV0dG9ucyAqL1xcbiAgICAtLXByaW1hcnktcmVkOiAjRUI0NTVGOyAvKiByZW1vdmUvY2FuY2VsIGJ1dHRvbnMgKi9cXG4gICAgLS1zZWNvbmRhcnktYnJvd246ICM1OTQ1NDU7IC8qIGNvbnRlbnQgdGV4dCAqL1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZWlnZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1icm93bik7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXItd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbn1cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTQ1NDUyNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmxvZ28ge1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWJlaWdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uY29udGFjdC1saW5rLFxcbi5mb290ZXItbGlua3tcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYmVpZ2UpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcbi5mb290ZXItbGlua3tcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGFjdC1saW5rOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1iZWlnZSk7XFxufVxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn1cXG5cXG4vKiBTSURFQkFSICYgUFJPSkVDVFMgKi9cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZWlnZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZXkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbn1cXG4ucHJlZGVmaW5lZC1saXN0c3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubGlzdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnJvd24pO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgXFxufVxcblxcbi5wcm9qOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2otdGl0bGU6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ub3Blbi1wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJyb3duKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3Blbi1wcm9qZWN0LW1vZGFsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBTUEFDRSBGT1IgVE8gRE8nUyAqL1xcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbn1cXG5cXG4udGl0bGUtd3JhcHBlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnJvd24pO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJyb3duKTtcXG59XFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnJvd24pO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbn1cXG5cXG4vKiBDQVJEIFNUWUxJTkcqL1xcbi5jYXJkIHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlIDEwcHggNSU7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlIDEwcHggNSU7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbn1cXG5cXG4udGFzay1uYW1le1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWJyb3duKTtcXG59XFxuLmRlc2NyaXB0aW9ue1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWJyb3duKTsgICAgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0NTQ1MjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5jYXJkLXdyYXBwZXItb25lIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuLnByaW9yaXR5LUhpZ2h7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcmVkKTtcXG59XFxuLnByaW9yaXR5LUxvd3tcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcbmkge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5pOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMICYgTU9EQUwgQ09OVEVOVCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyYjJiMmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJyb3duKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxufVxcbi5wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ub3Blbi1tb2RhbHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuLm9wZW4tbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxuLmFkZC10YXNrLFxcbi5jbG9zZS1tb2RhbCxcXG4uYWRkLXByb2plY3QsXFxuLmNsb3NlLXByb2plY3QtbW9kYWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjEzLCAyMTcsIDIxNywgLjUpIDAgMnB4IDVweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMGYxMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG59XFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWJlaWdlKTtcXG4gIH1cXG5cXG4vKmZvb3RlciAqL1xcbi5mb290ZXJ7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYnJvd24pO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1iZWlnZSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBnbG9iYWwgc2V0dGluZ3MgKi9cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCl7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpLy9Mb2FkIGFsbCBwcm9qZWN0cyBmcm9tIFN0b3JhZ2UuXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdJbmJveCcpLy9BbHdheXMgb3BlbiAnSW5ib3gnIChEZWZhdWx0KSBvbiBwYWdlLWxvYWQuXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpe1xuICAgICAgICBTdG9yYWdlLmdldFRvZG9MaXN0KCkvL0ZldGNoIHRoZSBMaXN0IGZyb20gU3RvcmFnZS5cbiAgICAgICAgLmdldFByb2plY3RzKCkgLy9HZXQgYWxsIHRoZSBQcm9qZWN0cyBmcm9tIExpc3QuXG4gICAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7IC8vT24gRWFjaCBQcm9qZWN0LFxuICAgICAgICAgICAgaWYocHJvamVjdC50aXRsZSAhPT0gJ0luYm94Jyl7IC8vRXhjZXB0IHRoZSBEZWZhdWx0LFxuICAgICAgICAgICAgICAgIFVJLmNyZWF0ZVByb2plY3QocHJvamVjdC50aXRsZSkgLy9DcmVhdGUgSFRNTCBjb250ZW50LlxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICAgICAgVUkuaGFuZGxlTWFpblByb2pCdG5zKCkgLy9Jbml0aWFsaXplIHRoZSBQcm9qZWN0IEJ1dHRvbnMuXG4gICAgfVxuXG4gICBzdGF0aWMgbG9hZFRhc2tzKHByb2plY3ROYW1lKXsgLy9MT0FEUyBUQVNLUyBGUk9NIFNUT1JBR0VcbiAgICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgICAgVUkuY2xlYXJUYXNrcygpXG4gICAgIGxldCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICBsZXQgY3VycmVudFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVxuICAgICBjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4gVUkuY3JlYXRlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlKSlcbiAgICB9XG4gICAgLy9BREQgTkVXIENPTlRFTlQgVE8gU1RPUkFHRVxuICAgc3RhdGljIGFkZFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgaWYocHJvamVjdE5hbWUgPT09ICcnICl7XG4gICAgICAgICByZXR1cm5cbiAgICB9IFxuICAgIGlmKFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5jb250YWlucyhwcm9qZWN0TmFtZSkpe1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSlcbiAgICBVSS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgVUkubG9hZFByb2plY3RzKCk7XG4gICB9ICAgICBcblxuICAgc3RhdGljIGFkZFRhc2soKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7IFxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSkpO1xuICAgIFVJLmNyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSlcbiAgIH1cblxuICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKXsgLy8gT1BFTiBUSEUgQ0xJQ0tFRCBQUk9KRUNUXG4gICAgY29uc3QgcHJvamVjdFRpdGxlRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlRE9NLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbn1cblxuXG4gICAvL0RFTEVURSBDT05URU5UIEZST00gU1RPUkFHRVxuXG4gICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgIH1cblxuICAgc3RhdGljIGRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHRhc2tUb0RlbGV0ZSl7IFxuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCx0YXNrVG9EZWxldGUpO1xuICAgfVxuICAgLy9DTEVBUiBIVE1MIENPTlRFTlQgXG5cbiAgIHN0YXRpYyBjbGVhclByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUw9XCJcIjtcbiAgIH1cblxuICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAvLyBCVVRUT05TIFBST0pFQ1QrVEFTS1xuICAgc3RhdGljIGhhbmRsZU1haW5Qcm9qQnRucygpe1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXByb2plY3QnKTsgLy9TZWxlY3QgRGVmYXVsdCBQcm9qZWN0KGFscmVhZHkgaW4gSFRNTCkuXG4gICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTsgLy9TZWxlY3QgT3BlbiBNb2RhbCBCdXR0b25cbiAgICBjb25zdCBjbG9zZVByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJyk7IC8vU2VsZWN0IENsb3NlIE1vZGFsIEJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTsgLy9TZWxlY3QgQWRkIFByb2plY3QgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QnKTsgLy9TZWxlY3QgRGVsZXRlIFByb2plY3QgQnV0dG9uXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1uYW1lJyk7IC8vU2VsZWN0IFByb2plY3QgLSBvbi1jbGljayBFdmVudCBcblxuICAgIG9wZW5Qcm9qTW9kYWwub25jbGljayA9IFVJLm9wZW5Qcm9qZWN0TW9kYWw7XG4gICAgY2xvc2VQcm9qTW9kYWwub25jbGljayA9IFVJLmNsb3NlUHJvamVjdE1vZGFsO1xuXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vQXZvaWQgRm9ybSdzIGRlZmF1bHQgYmVoYXZpb3VyLlxuICAgICAgICBVSS5hZGRQcm9qZWN0KCk7IC8vQ2FsbHMgRnVuY3Rpb24gLT4gQWRkIFByb2plY3QuXG4gICAgICAgIFVJLmNsb3NlUHJvamVjdE1vZGFsKCk7IC8vQ2xvc2VzIEZvcm0uXG4gICAgfSlcblxuICAgIGRlbGV0ZVByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4gLy9TZWxlY3QgQWxsIEJ1dHRvbnMuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vRmluZCBjbGlja2VkIEJ1dHRvbi5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MOyAvL0ZpbmQgU2VsZWN0ZWQgUHJvamVjdFxuICAgICAgICBVSS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTsgLy9EZWxldGUgUHJvamVjdC5cbiAgICAgICAgVUkuY2xlYXJQcm9qZWN0cygpOyAvL0NsZWFyIFNpZGViYXIuXG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpOyAvL1JlbG9hZCBleGlzdGluZyBQcm9qZWN0cyBmcm9tIFN0b3JhZ2UuXG4gICAgfSkpXG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9GaW5kIGNsaWNrZWQgUHJvamVjdC5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50OyAvL1NlbGVjdCBQcm9qZWN0LlxuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0TmFtZSk7IC8vT3BlbiBQcm9qZWN0J3MgVGFza3MuXG4gICAgfSkpXG4gICAgLy9EZWZhdWx0IHByb2plY3QgZnVuY3Rpb24gKFdpdGhvdXQgdGhpcywgaXQgc2VlbXMgdGhhdCBteSBmdW5jdGlvbnMgYXJlIHJlcGVhdGluZyB0d2ljZSlcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdJbmJveCcpXG4gICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlTWFpblRhc2tCdG5zKCl7XG4gICAgICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tb2RhbCcpLy9vcGVuIGFkZCB0YXNrIG1vZGFsIFxuICAgICAgICBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpLy9jbG9zZSBhZGQgdGFzayBtb2RhbCBcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLy9hZGQgYSBuZXcgdGFza1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdGFzaycpLy9kZWxldGUgYW4gZXhpc3RpbmcgdGFza1xuXG4gICAgICAgIG9wZW5UYXNrTW9kYWwub25jbGljayA9IFVJLm9wZW5UYXNrTW9kYWw7XG4gICAgICAgIGNsb3NlVGFza01vZGFsLm9uY2xpY2sgPSBVSS5jbG9zZVRhc2tNb2RhbDtcbiBcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIFVJLmFkZFRhc2soKVxuICAgICAgICAgICAgVUkuY2xvc2VUYXNrTW9kYWwoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRlbGV0ZVRhc2tCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RvRGVsZXRlID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza1RvRGVsZXRlKVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgICAgIFVJLmRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHRhc2tUb0RlbGV0ZSlcbiAgICAgICAgICAgICAgICBVSS5jbGVhclRhc2tzKClcbiAgICAgICAgICAgICAgICBVSS5sb2FkVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICB9XG4gICAgLy8gQ1JFQVRFIEhUTUwgQ09OVEVOVCAtIFBST0pFQ1QgKyBUQVNLXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3QodGl0bGUpe1xuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXN0cycpOyAvL1NlbGVjdCBTaWRlYmFyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2pcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicHJvai1uYW1lIHByb2otdGl0bGVcIj4ke3RpdGxlfTwvbGk+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGVsZXRlLXByb2plY3RcIj48L2k+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH0gXG5cbiAgIHN0YXRpYyBjcmVhdGVUYXNrKG5hbWUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSl7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXItb25lXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGFzay1uYW1lXCI+JHtuYW1lfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlci10d29cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eS0ke3ByaW9yaXR5fVwiPiR7cHJpb3JpdHl9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImR1ZS1kYXRlXCI+JHtkdWVEYXRlfTwvcD5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS14bWFyayBkZWxldGUtdGFza1wiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgIH1cblxuICAgIC8vTU9EQUwgT1BFTi9DTE9TRSAtIFBST0pFQ1QgKyBUQVNLXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0TW9kYWwoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG9wZW5Qcm9qTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgc3RhdGljIGNsb3NlUHJvamVjdE1vZGFsKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSA9IFwiXCJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICAgICAgb3BlblByb2pNb2RhbC5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICB9XG5cbiAgIHN0YXRpYyBvcGVuVGFza01vZGFsKCl7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgIH1cblxuICAgc3RhdGljIGNsb3NlVGFza01vZGFsKCl7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSBcIlwiXG4gICAgICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICAgICAgb3BlblRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICB9XG59XG5cbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBzYXZlVG9kb0xpc3QoZGF0YSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuICBcbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKVxuICAgICAgKVxuICBcbiAgICAgIHRvZG9MaXN0LnNldFByb2plY3RzKFxuICAgICAgICB0b2RvTGlzdFxuICAgICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcbiAgICAgIClcbiAgXG4gICAgICB0b2RvTGlzdFxuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgICAgICBwcm9qZWN0LnNldFRhc2tzKFxuICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgIH1cbiAgXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdClcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpXG4gICAgfVxuICBcbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmFkZFRhc2sodGFzaylcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSlcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbn0gICIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1dvcmtvdXQnKSlcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKVxuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmV3UHJvamVjdC50aXRsZSkpXG4gICAgICByZXR1cm5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlXG4gICAgKVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuICBcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICBcbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrKHRhc2t0aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrdGl0bGUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2sudGl0bGUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza3RpdGxlKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHsgXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIH1cbiAgICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL0RPTVwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9TdG9yYWdlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvY3JlYXRlVGFza1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vRnVsbCBhcHAgZnVuY3Rpb25hYmlsaXR5IFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSlcblxuLy9EZWZhdWx0IENvbnRlbnRcblN0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdCgnSW5ib3gnKSlcblN0b3JhZ2UuYWRkVGFzaygnSW5ib3gnLG5ldyBUYXNrKCdDbGVhciBteSByb29tJywgJ0Nsb3RoZXMrRHVzdCcsICdIaWdoJywgJzIwMjMtMDMtMjAnKSlcblN0b3JhZ2UuYWRkVGFzaygnSW5ib3gnLG5ldyBUYXNrKCdXZWF0aGVyIEFwcCcsICdMZWFybiB3b3JraW5nIHdpdGggQVBJJywgJ0hpZ2gnLCAnMjAyMy0wMy0yNScpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9