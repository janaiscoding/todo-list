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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-white: #EEEEEE; /* content background,header text,sidebar text*/\n    --primary-purple: #18122B; /* header background */\n    --purple-background: #393053;\n    --primary-green: #51894D; /* add buttons */\n    --primary-red: #EB455F; /* remove/cancel buttons */\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\nbody {\n    background-color: var(--primary-white);\n    font-family: 'Roboto', sans-serif;\n    color: var(--primary-purple);\n    line-height: 1.6;\n    letter-spacing: 1px;\n}\n\n/* HEADER */\n.header-wrapper {\n    display:flex;\n    height: 10vh;\n    background-color: var(--purple-background);\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n\n.logo {\n    color:var(--primary-white);\n    font-weight: 700;\n    font-size: 2rem;\n}\n.contact-link,\n.footer-link{\n    color: var(--primary-white);\n    font-weight: 700;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin-right: 100px;\n}\n.footer-link{\n    font-weight: 500;\n    font-size: 1rem;\n}\n.contact-link:hover{\n    border-bottom: 2px solid var(--primary-white);\n}\n/* MAIN CONTENT */\n\n.main {\n    display:grid;\n    height: 85vh;\n    grid-template-columns: 300px 1fr;\n}\n\n/* SIDEBAR & PROJECTS */\n.sidebar{\n    grid-column: 1/2;\n    background-color: var(--primary-white);\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    padding: 30px 20px;\n}\n.predefined-lists{\n    margin-bottom: 25px;\n}\n\n.proj {\n    display:flex;\n    justify-content: space-between;\n    font-weight: 200;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.lists-title {\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: var(--primary-purple);\n    padding-left: 20px;   \n}\n\n.proj:hover{\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n.proj-title:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.open-project-modal{\n    display:block;\n    padding-left: 20px;\n    margin-top: 15px;\n    font-weight: 200;\n    color: var(--primary-purple);\n    border-radius: 5px;\n}\n\n.open-project-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n\n/* SPACE FOR TO DO'S */\n.content {\n    grid-column: 2/3;\n    padding: 30px 50px;\n}\n\n.title-wrapper{\n    display:flex;\n    justify-content: center;\n    color: var(--primary-purple);\n}\n\n.title{\n    padding: 0px 20px;\n    font-weight: 700;\n    font-size: 3rem;\n    border-bottom: 3px solid var(--primary-purple);\n}\n.task-title {\n    display:flex;\n    font-weight: 700;\n    font-size: 2rem;\n    color: var(--primary-purple);\n    padding-left: 5%;\n}\n\n/* CARD STYLING*/\n.card {\n    /* display: flex;\n    justify-content: space-between;\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n    align-items: center;\n    align-content: center; */\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n}\n\n.task-name{\n    font-weight: 600;\n    color:var(--primary-purple);\n}\n.description{\n    color:var(--primary-purple);    \n    font-style: italic;\n}\n.card-wrapper-two{\n    grid-column: 3/4;\n}\n.card:hover{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.card-wrapper-one {\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n}\n.card-wrapper-two{\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n    justify-content: flex-end;\n}\n.description {\n    padding: 0px 10px;\n}\n.priority-High{\n    color:var(--primary-red);\n}\n.priority-Low{\n    color:var(--primary-green);\n}\ni {\n    align-self: center;\n    justify-self: center;\n}\ni:hover{\n    cursor: pointer;\n}\n\n/* MODAL & MODAL CONTENT */\n.modal {\n    display:none;\n    position: relative;\n    z-index: 1;\n    background-color: #2e2b2b2d;\n    color: var(--primary-purple);\n    border-radius: 20px;\n    padding: 10px 20px 10px 5%;\n}\n.project-modal{\n    display:none;\n    padding: 10px 20px 10px 5%;\n}\n.open-modal{\n    font-weight: 200;\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    padding: 10px 20px 10px 5%;\n    display:block;\n}\n.open-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 20px;\n}\n\n.input-project {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n}\n.add-project{\n    margin-right:20px;\n}\n.add-task,\n.close-modal,\n.add-project,\n.close-project-modal{\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: 100px;\n}\n\n.add-task:hover,\n.add-project:hover {\n  background-color: #51894d90;\n}\n.close-modal:hover,\n.close-project-modal:hover {\n    background-color: var(--primary-red);\n    color:var(--primary-white);\n  }\n\n/*footer */\n.footer{ \n    display: flex;\n    width: 100%;\n    height: 5vh;\n    background-color: var(--purple-background);\n    color: var(--primary-white);\n    justify-content: center;\n    align-items: center;\n}\n\n/* global settings */\na,\na:visited {\n    text-decoration: none;\n}\nli {\n    list-style-type: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary-white: #EEEEEE; /* content background,header text,sidebar text*/\n    --primary-purple: #18122B; /* header background */\n    --purple-background: #393053;\n    --primary-green: #51894D; /* add buttons */\n    --primary-red: #EB455F; /* remove/cancel buttons */\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\nbody {\n    background-color: var(--primary-white);\n    font-family: 'Roboto', sans-serif;\n    color: var(--primary-purple);\n    line-height: 1.6;\n    letter-spacing: 1px;\n}\n\n/* HEADER */\n.header-wrapper {\n    display:flex;\n    height: 10vh;\n    background-color: var(--purple-background);\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n\n.logo {\n    color:var(--primary-white);\n    font-weight: 700;\n    font-size: 2rem;\n}\n.contact-link,\n.footer-link{\n    color: var(--primary-white);\n    font-weight: 700;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin-right: 100px;\n}\n.footer-link{\n    font-weight: 500;\n    font-size: 1rem;\n}\n.contact-link:hover{\n    border-bottom: 2px solid var(--primary-white);\n}\n/* MAIN CONTENT */\n\n.main {\n    display:grid;\n    height: 85vh;\n    grid-template-columns: 300px 1fr;\n}\n\n/* SIDEBAR & PROJECTS */\n.sidebar{\n    grid-column: 1/2;\n    background-color: var(--primary-white);\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    padding: 30px 20px;\n}\n.predefined-lists{\n    margin-bottom: 25px;\n}\n\n.proj {\n    display:flex;\n    justify-content: space-between;\n    font-weight: 200;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.lists-title {\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: var(--primary-purple);\n    padding-left: 20px;   \n}\n\n.proj:hover{\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n.proj-title:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.open-project-modal{\n    display:block;\n    padding-left: 20px;\n    margin-top: 15px;\n    font-weight: 200;\n    color: var(--primary-purple);\n    border-radius: 5px;\n}\n\n.open-project-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n\n/* SPACE FOR TO DO'S */\n.content {\n    grid-column: 2/3;\n    padding: 30px 50px;\n}\n\n.title-wrapper{\n    display:flex;\n    justify-content: center;\n    color: var(--primary-purple);\n}\n\n.title{\n    padding: 0px 20px;\n    font-weight: 700;\n    font-size: 3rem;\n    border-bottom: 3px solid var(--primary-purple);\n}\n.task-title {\n    display:flex;\n    font-weight: 700;\n    font-size: 2rem;\n    color: var(--primary-purple);\n    padding-left: 5%;\n}\n\n/* CARD STYLING*/\n.card {\n    /* display: flex;\n    justify-content: space-between;\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n    align-items: center;\n    align-content: center; */\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n}\n\n.task-name{\n    font-weight: 600;\n    color:var(--primary-purple);\n}\n.description{\n    color:var(--primary-purple);    \n    font-style: italic;\n}\n.card-wrapper-two{\n    grid-column: 3/4;\n}\n.card:hover{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.card-wrapper-one {\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n}\n.card-wrapper-two{\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n    justify-content: flex-end;\n}\n.description {\n    padding: 0px 10px;\n}\n.priority-High{\n    color:var(--primary-red);\n}\n.priority-Low{\n    color:var(--primary-green);\n}\ni {\n    align-self: center;\n    justify-self: center;\n}\ni:hover{\n    cursor: pointer;\n}\n\n/* MODAL & MODAL CONTENT */\n.modal {\n    display:none;\n    position: relative;\n    z-index: 1;\n    background-color: #2e2b2b2d;\n    color: var(--primary-purple);\n    border-radius: 20px;\n    padding: 10px 20px 10px 5%;\n}\n.project-modal{\n    display:none;\n    padding: 10px 20px 10px 5%;\n}\n.open-modal{\n    font-weight: 200;\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    padding: 10px 20px 10px 5%;\n    display:block;\n}\n.open-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 20px;\n}\n\n.input-project {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n}\n.add-project{\n    margin-right:20px;\n}\n.add-task,\n.close-modal,\n.add-project,\n.close-project-modal{\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: 100px;\n}\n\n.add-task:hover,\n.add-project:hover {\n  background-color: #51894d90;\n}\n.close-modal:hover,\n.close-project-modal:hover {\n    background-color: var(--primary-red);\n    color:var(--primary-white);\n  }\n\n/*footer */\n.footer{ \n    display: flex;\n    width: 100%;\n    height: 5vh;\n    background-color: var(--purple-background);\n    color: var(--primary-white);\n    justify-content: center;\n    align-items: center;\n}\n\n/* global settings */\na,\na:visited {\n    text-decoration: none;\n}\nli {\n    list-style-type: none;\n}\n\n"],"sourceRoot":""}]);
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
            if(project.title !== 'Inbox' &&
            project.title !== 'Workout'){ //Except the Default,
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
    const workoutProject = document.querySelector('.workout-project');
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
    workoutProject.addEventListener('click', ()=> {
        UI.openProject('Workout')
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
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Workout'))
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox',new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Weather App', 'Learn working with API', 'High', '2023-03-25'))
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox',new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Clear my room', 'Clothes+Dust', 'Low', '2023-03-20'))
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Workout',new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('30 min Cardio', 'Running + Jumping Jacks', 'High', '2023-03-20'))
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Workout',new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Stretching', '15 min stretching', 'Low', '2023-03-25'))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSx5QkFBeUIseUJBQXlCLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sU0FBUyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFX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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ1M7QUFDTTtBQUNOO0FBQ25COztBQUVyQjtBQUNBLDhDQUE4QyxpRUFBZTs7QUFFN0Q7QUFDQSxtRUFBa0IsS0FBSyw4REFBTztBQUM5QixtRUFBa0IsS0FBSyw4REFBTztBQUM5QixnRUFBZSxhQUFhLDJEQUFJO0FBQ2hDLGdFQUFlLGFBQWEsMkRBQUk7QUFDaEMsZ0VBQWUsZUFBZSwyREFBSTtBQUNsQyxnRUFBZSxlQUFlLDJEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LXdoaXRlOiAjRUVFRUVFOyAvKiBjb250ZW50IGJhY2tncm91bmQsaGVhZGVyIHRleHQsc2lkZWJhciB0ZXh0Ki9cXG4gICAgLS1wcmltYXJ5LXB1cnBsZTogIzE4MTIyQjsgLyogaGVhZGVyIGJhY2tncm91bmQgKi9cXG4gICAgLS1wdXJwbGUtYmFja2dyb3VuZDogIzM5MzA1MztcXG4gICAgLS1wcmltYXJ5LWdyZWVuOiAjNTE4OTREOyAvKiBhZGQgYnV0dG9ucyAqL1xcbiAgICAtLXByaW1hcnktcmVkOiAjRUI0NTVGOyAvKiByZW1vdmUvY2FuY2VsIGJ1dHRvbnMgKi9cXG59XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXItd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtYmFja2dyb3VuZCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbi5jb250YWN0LWxpbmssXFxuLmZvb3Rlci1saW5re1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuLmZvb3Rlci1saW5re1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5jb250YWN0LWxpbms6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG59XFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi8qIFNJREVCQVIgJiBQUk9KRUNUUyAqL1xcbi5zaWRlYmFye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG59XFxuLnByZWRlZmluZWQtbGlzdHN7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5wcm9qIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmxpc3RzLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgICBcXG59XFxuXFxuLnByb2o6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvai10aXRsZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5vcGVuLXByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3Blbi1wcm9qZWN0LW1vZGFsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBTUEFDRSBGT1IgVE8gRE8nUyAqL1xcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbn1cXG5cXG4udGl0bGUtd3JhcHBlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbn1cXG5cXG4vKiBDQVJEIFNUWUxJTkcqL1xcbi5jYXJkIHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlIDEwcHggNSU7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlIDEwcHggNSU7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbi50YXNrLW5hbWV7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuLmRlc2NyaXB0aW9ue1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXB1cnBsZSk7ICAgIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5jYXJkLXdyYXBwZXItdHdve1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4uY2FyZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NDU0NTI1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uY2FyZC13cmFwcGVyLW9uZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcbi5wcmlvcml0eS1IaWdoe1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXJlZCk7XFxufVxcbi5wcmlvcml0eS1Mb3d7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5pIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuaTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNT0RBTCAmIE1PREFMIENPTlRFTlQgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmIyYjJkO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLnByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxufVxcbi5vcGVuLW1vZGFse1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcbi5vcGVuLW1vZGFsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmlucHV0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5hZGQtcHJvamVjdHtcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxufVxcbi5hZGQtdGFzayxcXG4uY2xvc2UtbW9kYWwsXFxuLmFkZC1wcm9qZWN0LFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ5ZDk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDIxMywgMjE3LCAyMTcsIC41KSAwIDJweCA1cHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzBmMTExMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLFxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxufVxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtcHJvamVjdC1tb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICB9XFxuXFxuLypmb290ZXIgKi9cXG4uZm9vdGVyeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGdsb2JhbCBzZXR0aW5ncyAqL1xcbmEsXFxuYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QixFQUFFLCtDQUErQztJQUN6RSx5QkFBeUIsRUFBRSxzQkFBc0I7SUFDakQsNEJBQTRCO0lBQzVCLHdCQUF3QixFQUFFLGdCQUFnQjtJQUMxQyxzQkFBc0IsRUFBRSwwQkFBMEI7QUFDdEQ7QUFDQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFD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QUN6QixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLDBCQUEwQjtFQUM1Qjs7QUFFRixVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LXdoaXRlOiAjRUVFRUVFOyAvKiBjb250ZW50IGJhY2tncm91bmQsaGVhZGVyIHRleHQsc2lkZWJhciB0ZXh0Ki9cXG4gICAgLS1wcmltYXJ5LXB1cnBsZTogIzE4MTIyQjsgLyogaGVhZGVyIGJhY2tncm91bmQgKi9cXG4gICAgLS1wdXJwbGUtYmFja2dyb3VuZDogIzM5MzA1MztcXG4gICAgLS1wcmltYXJ5LWdyZWVuOiAjNTE4OTREOyAvKiBhZGQgYnV0dG9ucyAqL1xcbiAgICAtLXByaW1hcnktcmVkOiAjRUI0NTVGOyAvKiByZW1vdmUvY2FuY2VsIGJ1dHRvbnMgKi9cXG59XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXItd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtYmFja2dyb3VuZCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbi5jb250YWN0LWxpbmssXFxuLmZvb3Rlci1saW5re1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuLmZvb3Rlci1saW5re1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5jb250YWN0LWxpbms6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG59XFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi8qIFNJREVCQVIgJiBQUk9KRUNUUyAqL1xcbi5zaWRlYmFye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG59XFxuLnByZWRlZmluZWQtbGlzdHN7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5wcm9qIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmxpc3RzLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgICBcXG59XFxuXFxuLnByb2o6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucHJvai10aXRsZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5vcGVuLXByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3Blbi1wcm9qZWN0LW1vZGFsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBTUEFDRSBGT1IgVE8gRE8nUyAqL1xcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xcbn1cXG5cXG4udGl0bGUtd3JhcHBlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG4udGFzay10aXRsZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbn1cXG5cXG4vKiBDQVJEIFNUWUxJTkcqL1xcbi5jYXJkIHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlIDEwcHggNSU7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlIDEwcHggNSU7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbi50YXNrLW5hbWV7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuLmRlc2NyaXB0aW9ue1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXB1cnBsZSk7ICAgIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5jYXJkLXdyYXBwZXItdHdve1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4uY2FyZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NDU0NTI1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uY2FyZC13cmFwcGVyLW9uZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcbi5wcmlvcml0eS1IaWdoe1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXJlZCk7XFxufVxcbi5wcmlvcml0eS1Mb3d7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktZ3JlZW4pO1xcbn1cXG5pIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuaTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNT0RBTCAmIE1PREFMIENPTlRFTlQgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmIyYjJkO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLnByb2plY3QtbW9kYWx7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxufVxcbi5vcGVuLW1vZGFse1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcbi5vcGVuLW1vZGFsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmlucHV0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5hZGQtcHJvamVjdHtcXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XFxufVxcbi5hZGQtdGFzayxcXG4uY2xvc2UtbW9kYWwsXFxuLmFkZC1wcm9qZWN0LFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ5ZDk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDIxMywgMjE3LCAyMTcsIC41KSAwIDJweCA1cHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzBmMTExMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyLFxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxufVxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtcHJvamVjdC1tb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICB9XFxuXFxuLypmb290ZXIgKi9cXG4uZm9vdGVyeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIGdsb2JhbCBzZXR0aW5ncyAqL1xcbmEsXFxuYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJe1xuICAgIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKXtcbiAgICAgICAgVUkubG9hZFByb2plY3RzKCkvL0xvYWQgYWxsIHByb2plY3RzIGZyb20gU3RvcmFnZS5cbiAgICAgICAgVUkub3BlblByb2plY3QoJ0luYm94JykvL0Fsd2F5cyBvcGVuICdJbmJveCcgKERlZmF1bHQpIG9uIHBhZ2UtbG9hZC5cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCl7XG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS8vRmV0Y2ggdGhlIExpc3QgZnJvbSBTdG9yYWdlLlxuICAgICAgICAuZ2V0UHJvamVjdHMoKSAvL0dldCBhbGwgdGhlIFByb2plY3RzIGZyb20gTGlzdC5cbiAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHsgLy9PbiBFYWNoIFByb2plY3QsXG4gICAgICAgICAgICBpZihwcm9qZWN0LnRpdGxlICE9PSAnSW5ib3gnICYmXG4gICAgICAgICAgICBwcm9qZWN0LnRpdGxlICE9PSAnV29ya291dCcpeyAvL0V4Y2VwdCB0aGUgRGVmYXVsdCxcbiAgICAgICAgICAgICAgICBVSS5jcmVhdGVQcm9qZWN0KHByb2plY3QudGl0bGUpIC8vQ3JlYXRlIEhUTUwgY29udGVudC5cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgICAgIFVJLmhhbmRsZU1haW5Qcm9qQnRucygpIC8vSW5pdGlhbGl6ZSB0aGUgUHJvamVjdCBCdXR0b25zLlxuICAgIH1cblxuICAgc3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSl7IC8vTE9BRFMgVEFTS1MgRlJPTSBTVE9SQUdFXG4gICAgIFVJLmhhbmRsZU1haW5UYXNrQnRucygpXG4gICAgIFVJLmNsZWFyVGFza3MoKVxuICAgICBsZXQgY3VycmVudFByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgbGV0IGN1cnJlbnRUYXNrcyA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2tzKClcbiAgICAgY3VycmVudFRhc2tzLmZvckVhY2goKHRhc2spID0+IFVJLmNyZWF0ZVRhc2sodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbix0YXNrLnByaW9yaXR5LHRhc2suZHVlRGF0ZSkpXG4gICAgfVxuICAgIC8vQUREIE5FVyBDT05URU5UIFRPIFNUT1JBR0VcbiAgIHN0YXRpYyBhZGRQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuICAgIGlmKHByb2plY3ROYW1lID09PSAnJyApe1xuICAgICAgICAgcmV0dXJuXG4gICAgfSBcbiAgICBpZihTdG9yYWdlLmdldFRvZG9MaXN0KCkuY29udGFpbnMocHJvamVjdE5hbWUpKXtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpXG4gICAgVUkuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgVUkuY2xlYXJQcm9qZWN0cygpO1xuICAgIFVJLmxvYWRQcm9qZWN0cygpO1xuICAgfSAgICAgXG5cbiAgIHN0YXRpYyBhZGRUYXNrKCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlOyBcbiAgICBpZiAodGl0bGUgPT09ICcnIHx8IGRhdGUgPT09ICcnKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBTdG9yYWdlLmFkZFRhc2socHJvamVjdE5hbWUsIG5ldyBUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUpKTtcbiAgICBVSS5jcmVhdGVUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUpXG4gICB9XG5cbiAgIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0TmFtZSl7IC8vIE9QRU4gVEhFIENMSUNLRUQgUFJPSkVDVFxuICAgIGNvbnN0IHByb2plY3RUaXRsZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIHByb2plY3RUaXRsZURPTS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG59XG5cblxuICAgLy9ERUxFVEUgQ09OVEVOVCBGUk9NIFNUT1JBR0VcblxuICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpe1xuICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICB9XG5cbiAgIHN0YXRpYyBkZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrVG9EZWxldGUpeyBcbiAgICBTdG9yYWdlLmRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsdGFza1RvRGVsZXRlKTtcbiAgIH1cbiAgIC8vQ0xFQVIgSFRNTCBDT05URU5UIFxuXG4gICBzdGF0aWMgY2xlYXJQcm9qZWN0cygpe1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxpc3RzJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MPVwiXCI7XG4gICB9XG5cbiAgIHN0YXRpYyBjbGVhclRhc2tzKCl7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgLy8gQlVUVE9OUyBQUk9KRUNUK1RBU0tcbiAgIHN0YXRpYyBoYW5kbGVNYWluUHJvakJ0bnMoKXtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1wcm9qZWN0Jyk7IC8vU2VsZWN0IERlZmF1bHQgUHJvamVjdChhbHJlYWR5IGluIEhUTUwpLlxuICAgIGNvbnN0IHdvcmtvdXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtvdXQtcHJvamVjdCcpO1xuICAgIGNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7IC8vU2VsZWN0IE9wZW4gTW9kYWwgQnV0dG9uXG4gICAgY29uc3QgY2xvc2VQcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcHJvamVjdC1tb2RhbCcpOyAvL1NlbGVjdCBDbG9zZSBNb2RhbCBCdXR0b25cbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7IC8vU2VsZWN0IEFkZCBQcm9qZWN0IEJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wcm9qZWN0Jyk7IC8vU2VsZWN0IERlbGV0ZSBQcm9qZWN0IEJ1dHRvblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otbmFtZScpOyAvL1NlbGVjdCBQcm9qZWN0IC0gb24tY2xpY2sgRXZlbnQgXG5cbiAgICBvcGVuUHJvak1vZGFsLm9uY2xpY2sgPSBVSS5vcGVuUHJvamVjdE1vZGFsO1xuICAgIGNsb3NlUHJvak1vZGFsLm9uY2xpY2sgPSBVSS5jbG9zZVByb2plY3RNb2RhbDtcblxuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL0F2b2lkIEZvcm0ncyBkZWZhdWx0IGJlaGF2aW91ci5cbiAgICAgICAgVUkuYWRkUHJvamVjdCgpOyAvL0NhbGxzIEZ1bmN0aW9uIC0+IEFkZCBQcm9qZWN0LlxuICAgICAgICBVSS5jbG9zZVByb2plY3RNb2RhbCgpOyAvL0Nsb3NlcyBGb3JtLlxuICAgIH0pXG5cbiAgICBkZWxldGVQcm9qZWN0QnRucy5mb3JFYWNoKChidXR0b24pID0+IC8vU2VsZWN0IEFsbCBCdXR0b25zLlxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAvL0ZpbmQgY2xpY2tlZCBCdXR0b24uXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDsgLy9GaW5kIFNlbGVjdGVkIFByb2plY3RcbiAgICAgICAgVUkuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7IC8vRGVsZXRlIFByb2plY3QuXG4gICAgICAgIFVJLmNsZWFyUHJvamVjdHMoKTsgLy9DbGVhciBTaWRlYmFyLlxuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTsgLy9SZWxvYWQgZXhpc3RpbmcgUHJvamVjdHMgZnJvbSBTdG9yYWdlLlxuICAgIH0pKVxuXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vRmluZCBjbGlja2VkIFByb2plY3QuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDsgLy9TZWxlY3QgUHJvamVjdC5cbiAgICAgICAgVUkub3BlblByb2plY3QocHJvamVjdE5hbWUpOyAvL09wZW4gUHJvamVjdCdzIFRhc2tzLlxuICAgIH0pKVxuICAgIC8vRGVmYXVsdCBwcm9qZWN0IGZ1bmN0aW9uIChXaXRob3V0IHRoaXMsIGl0IHNlZW1zIHRoYXQgbXkgZnVuY3Rpb25zIGFyZSByZXBlYXRpbmcgdHdpY2UpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgICBVSS5vcGVuUHJvamVjdCgnSW5ib3gnKVxuICAgIH0pXG4gICAgd29ya291dFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ1dvcmtvdXQnKVxuICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZU1haW5UYXNrQnRucygpe1xuICAgICAgICBjb25zdCBvcGVuVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwnKS8vb3BlbiBhZGQgdGFzayBtb2RhbCBcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKS8vY2xvc2UgYWRkIHRhc2sgbW9kYWwgXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKS8vYWRkIGEgbmV3IHRhc2tcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRhc2snKS8vZGVsZXRlIGFuIGV4aXN0aW5nIHRhc2tcblxuICAgICAgICBvcGVuVGFza01vZGFsLm9uY2xpY2sgPSBVSS5vcGVuVGFza01vZGFsO1xuICAgICAgICBjbG9zZVRhc2tNb2RhbC5vbmNsaWNrID0gVUkuY2xvc2VUYXNrTW9kYWw7XG4gXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBVSS5hZGRUYXNrKClcbiAgICAgICAgICAgIFVJLmNsb3NlVGFza01vZGFsKClcbiAgICAgICAgfSlcblxuICAgICAgICBkZWxldGVUYXNrQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUb0RlbGV0ZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0RlbGV0ZSlcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lclRleHRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgICAgICAgICBVSS5kZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrVG9EZWxldGUpXG4gICAgICAgICAgICAgICAgVUkuY2xlYXJUYXNrcygpXG4gICAgICAgICAgICAgICAgVUkubG9hZFRhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgfVxuICAgIC8vIENSRUFURSBIVE1MIENPTlRFTlQgLSBQUk9KRUNUICsgVEFTS1xuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTsgLy9TZWxlY3QgU2lkZWJhclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJwcm9qXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInByb2otbmFtZSBwcm9qLXRpdGxlXCI+JHt0aXRsZX08L2xpPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGRlbGV0ZS1wcm9qZWN0XCI+PC9pPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9IFxuXG4gICBzdGF0aWMgY3JlYXRlVGFzayhuYW1lLGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUpe1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyLW9uZVwiPlxuICAgICAgICA8cCBjbGFzcz1cInRhc2stbmFtZVwiPiR7bmFtZX08L3A+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXItdHdvXCI+XG4gICAgICAgIDxwIGNsYXNzPVwicHJpb3JpdHktJHtwcmlvcml0eX1cIj4ke3ByaW9yaXR5fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L3A+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGVsZXRlLXRhc2tcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIFVJLmhhbmRsZU1haW5UYXNrQnRucygpXG4gICB9XG5cbiAgICAvL01PREFMIE9QRU4vQ0xPU0UgLSBQUk9KRUNUICsgVEFTS1xuICAgIHN0YXRpYyBvcGVuUHJvamVjdE1vZGFsKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgIHN0YXRpYyBjbG9zZVByb2plY3RNb2RhbCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWUgPSBcIlwiXG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbiAgICBjb25zdCBvcGVuUHJvak1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcHJvamVjdC1tb2RhbCcpO1xuICAgICAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9XCJub25lXCI7XG4gICAgICAgIG9wZW5Qcm9qTW9kYWwuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgfVxuXG4gICBzdGF0aWMgb3BlblRhc2tNb2RhbCgpe1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tb2RhbCcpXG4gICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBvcGVuVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICB9XG5cbiAgIHN0YXRpYyBjbG9zZVRhc2tNb2RhbCgpe1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tb2RhbCcpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gXCJcIlxuICAgICAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9XCJub25lXCI7XG4gICAgICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgfVxufVxuXG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBuZXcgVG9kb0xpc3QoKSxcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSlcbiAgICAgIClcbiAgXG4gICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgICApXG4gIFxuICAgICAgdG9kb0xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICApXG4gICAgICApXG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKHRhc2spXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmRlbGV0ZVRhc2sodGFza05hbWUpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG59ICAiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdXb3Jrb3V0JykpXG4gIH1cblxuICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VGl0bGUpXG4gIH1cblxuICBjb250YWlucyhwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5ld1Byb2plY3QudGl0bGUpKVxuICAgICAgcmV0dXJuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZVxuICAgIClcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH1cbiAgXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIH1cbiAgXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbiAgXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgY29udGFpbnModGFza3RpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2t0aXRsZSlcbiAgICB9XG4gIFxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLnRpdGxlKSkgcmV0dXJuXG4gICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICB9XG4gIFxuICAgIGRlbGV0ZVRhc2sodGFza3RpdGxlKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRhc2t0aXRsZSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7IFxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gICAgXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL0Z1bGwgYXBwIGZ1bmN0aW9uYWJpbGl0eSBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZXBhZ2UpXG5cbi8vRGVmYXVsdCBDb250ZW50XG5TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ0luYm94JykpXG5TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ1dvcmtvdXQnKSlcblN0b3JhZ2UuYWRkVGFzaygnSW5ib3gnLG5ldyBUYXNrKCdXZWF0aGVyIEFwcCcsICdMZWFybiB3b3JraW5nIHdpdGggQVBJJywgJ0hpZ2gnLCAnMjAyMy0wMy0yNScpKVxuU3RvcmFnZS5hZGRUYXNrKCdJbmJveCcsbmV3IFRhc2soJ0NsZWFyIG15IHJvb20nLCAnQ2xvdGhlcytEdXN0JywgJ0xvdycsICcyMDIzLTAzLTIwJykpXG5TdG9yYWdlLmFkZFRhc2soJ1dvcmtvdXQnLG5ldyBUYXNrKCczMCBtaW4gQ2FyZGlvJywgJ1J1bm5pbmcgKyBKdW1waW5nIEphY2tzJywgJ0hpZ2gnLCAnMjAyMy0wMy0yMCcpKVxuU3RvcmFnZS5hZGRUYXNrKCdXb3Jrb3V0JyxuZXcgVGFzaygnU3RyZXRjaGluZycsICcxNSBtaW4gc3RyZXRjaGluZycsICdMb3cnLCAnMjAyMy0wMy0yNScpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9