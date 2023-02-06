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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\nbody {\n    font-family: 'LibertinusMonoMono';\n    font-weight: normal;\n    font-style: normal;\n    display:grid;\n    height: 100vh;\n    background-color: var(--website-background-color);  \n}\n\n:root {\n    --website-background-color: #EEEEEE;\n    --sidebar-background-color: #c65d7b;\n    --card-background-color: #f3f3f8e6;\n    --header-background-color: #f3f3f8e6;\n    --button-background-color: #C65D7B;\n\n    --text-color-content: rgb(62, 20, 20);\n    --sidebar-text-color: #FDF6EC;\n    --card-text-color: rgb(62, 20, 20);\n    --book-title-color: rgb(62, 20, 20);\n    --button-text-color: #FDF6EC;\n    --heading-text-color: #C65D7B;\n    --subtitle-text-color: #2C3639;\n    --user-text-color: #C65D7B;\n}\n\n.sidebar {\n    background-color: var(--sidebar-background-color);\n    color: var(--sidebar-text-color);\n    display: grid;\n    grid-column: 1 / 2;\n    align-items: center;\n    padding: 3vh 40px 0px 40px;\n}\n\n.sidebar-header,\n.communities {\n    margin-bottom: 3vh;\n}\n\n.privacy {\n    margin-bottom: 20vh;\n}\n\n.sidebar-header,   \n.home, \n.profile,\n.messages,\n.history,\n.tasks,\n.communities,\n.settings, \n.support,\n.privacy {\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    justify-self: left;\n}\n.profile-picture {\n    border-radius: 50%;\n}\n\n.sidebar .icon {\n    justify-self: self-start;\n    align-self: center;\n    padding-right: 30px;\n}\n\n.sidebar .title {\n    justify-self: start;\n    align-self: center;\n}\n\n.header-title {\n    font-size: 1.3rem;\n    color: var(--heading-text-color);\n}\n.right-wrapper {\n    grid-column: 2/5;\n    display: grid;\n    align-self: flex-start;\n}\n\n.header {\n    display: grid;\n    background-color: var(--header-background-color);\n    padding: 10px 0 3vh 0;\n}\n\n.header-first-row,\n.header-second-row {\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    align-items: center;\n    justify-items: center;  \n    justify-self: left;\n    padding: 10px 20px;\n}\n\n.header-first-row-left,\n.header-second-row-left {\n    display: grid;\n    grid-column: 1/2;\n    grid-template-columns: 100px 400px;\n    justify-self: left;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n}\n\nimg.search-icon,\nimg.profile-picture {\n    justify-self: right;\n} \ninput {\n    border: 1px solid black;\n}\n\n.header-first-row-right{\n    display: grid;\n    grid-column: 3/4;\n    grid-template-columns: 20px 30px 100px;\n    justify-self: right;\n    align-items: center;\n    gap: 20px;\n}\n/* hidden for when modal will be added\n.header-second-row-right{\n    display: grid;\n    grid-column: 3/4;\n    grid-template-columns: repeat(3,1fr);\n    justify-self: right;\n    align-items: center;\n    gap: 20px;\n} */ \n\n.content-container {\n    background-color: var(--content-background-color);\n    margin-top: 50px;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n}\n\n.library-space {\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr; \n    gap: 10px;\n    margin: 0px 20px;\n    grid-auto-rows: max-content;\n}\n\n.left-content-title {\n    display: grid;\n    align-self:flex-start;\n    grid-column: span 2;\n    justify-self: flex-start;\n    justify-items: flex-start;\n}\n\n.book {\n    display: grid;\n    padding: 20px;\n    height: 200px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    gap: 10px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    padding: 20px;\n    background-color: var(--card-background-color);\n    box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n}\n\n.right-content {\n    display: grid;\n    grid-column:3/4;\n    align-self: flex-start;\n    gap: 10px;\n    margin: 0px 20px;\n}\n\n.form-container {\n    display:grid;\n    gap: 10px;\n}\n\n.checkbox-wrapper {\n    vertical-align: middle;\n}\n\n/* font styles */\n.right-content-title,\n.left-content-title {\n    color: var(--text-color-content);\n    font-size: 1.5rem;\n    font-weight: 900;\n    font-style: italic;\n    padding: 10px 0px 10px 20px;\n    letter-spacing: 1px;\n}\n\n.greeting-text{\n    color: var(--text-color-content);\n    font-size: 0.9rem;\n    font-weight: 900;\n    letter-spacing: 1px;\n}\n\n.sidebar-title {\n    color: var(--sidebar-text-color);\n    font-size: 1.8rem;\n    align-self: center;\n    padding-right: 10px;\n    font-weight: 900;   \n    letter-spacing: 1px;\n}\n\n.sidebar .title {\n    color: var(--sidebar-text-color);\n    font-weight: 600;\n    font-size: 1.2rem;\n    letter-spacing: 1px;\n}\n.subtitle {\n    font-weight: bold;\n    letter-spacing: 1px;\n    color: var(--subtitle-text-color);\n    font-weight: 500;\n    opacity: 70%;\n    font-size: 0.8rem;\n}\n\n.book-title {\n    color: var(--book-title-color);\n    font-weight: 900;\n    font-style: italic;\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n}\n\n.book-author,\n.book-pages,\nlabel {\n    color: var(--card-text-color);\n    font-weight: 500;\n    font-size: 1.2rem;\n    line-height: 1.3rem;\n    letter-spacing: 1px;\n    padding-bottom: 10px;\n}\n\n.status,\n.remove-book,\n.clear-inputs {\n    justify-self: flex-end;\n    margin-bottom: 10px;  \n    max-width: fit-content;\n}\n.buttons-wrapper > button {\n    justify-content: center;\n    margin-right: 20px;\n}\n.remove-book {\n    margin-bottom: 20px;\n}\na.user-name-bio,\na.user-name {\n    color: var(--user-text-color);\n    font-weight: 600;\n    font-size: 1.2rem;\n    letter-spacing: 1px;\n}\n\n/* all hovers */\nbutton:hover,\n.user-name:hover,\n.user-name-bio:hover,\n.user-name:hover{\n    transform: scale(1.02);\n    cursor: pointer;\n}\n\na,\na:visited {\n    text-decoration: none;\n}\n\n/* all box effects, shadows and styles */\n\n.header {\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n\n.sidebar {\n    box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n}\n\n.book {\n    background-color: var(--card-background-color);\n    box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n}\n\nbutton {\n  background-color: var(--button-background-color);\n  box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n  border-radius: 4px;\n  border-style: none;\n  color: var(--button-text-color);\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  padding: 8px 15px 8px;\n  text-align: center;\n}\n\nbutton:hover,\nbutton:focus {\n  opacity: .75;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,kCAAkC;IAClC,oCAAoC;IACpC,kCAAkC;;IAElC,qCAAqC;IACrC,6BAA6B;IAC7B,kCAAkC;IAClC,mCAAmC;IACnC,4BAA4B;IAC5B,6BAA6B;IAC7B,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,iDAAiD;IACjD,gCAAgC;IAChC,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;;;;;;;;;IAUI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gDAAgD;IAChD,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,kCAAkC;IAClC,kBAAkB;IAClB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;;IAEI,mBAAmB;AACvB;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,sCAAsC;IACtC,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;AACA;;;;;;;;GAQG;;AAEH;IACI,iDAAiD;IACjD,gBAAgB;IAChB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,SAAS;IACT,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,qCAAqC;IACrC,aAAa;IACb,8CAA8C;IAC9C,+EAA+E;AACnF;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,gBAAgB;AAChB;;IAEI,gCAAgC;IAChC,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;;;IAGI,6BAA6B;IAC7B,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;IAGI,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;;IAEI,6BAA6B;IAC7B,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA,eAAe;AACf;;;;IAII,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA,wCAAwC;;AAExC;IACI,wCAAwC;AAC5C;;AAEA;IACI,+EAA+E;AACnF;;AAEA;IACI,8CAA8C;IAC9C,+EAA+E;AACnF;;AAEA;EACE,gDAAgD;EAChD,+EAA+E;EAC/E,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;AACd","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\nbody {\n    font-family: 'LibertinusMonoMono';\n    font-weight: normal;\n    font-style: normal;\n    display:grid;\n    height: 100vh;\n    background-color: var(--website-background-color);  \n}\n\n:root {\n    --website-background-color: #EEEEEE;\n    --sidebar-background-color: #c65d7b;\n    --card-background-color: #f3f3f8e6;\n    --header-background-color: #f3f3f8e6;\n    --button-background-color: #C65D7B;\n\n    --text-color-content: rgb(62, 20, 20);\n    --sidebar-text-color: #FDF6EC;\n    --card-text-color: rgb(62, 20, 20);\n    --book-title-color: rgb(62, 20, 20);\n    --button-text-color: #FDF6EC;\n    --heading-text-color: #C65D7B;\n    --subtitle-text-color: #2C3639;\n    --user-text-color: #C65D7B;\n}\n\n.sidebar {\n    background-color: var(--sidebar-background-color);\n    color: var(--sidebar-text-color);\n    display: grid;\n    grid-column: 1 / 2;\n    align-items: center;\n    padding: 3vh 40px 0px 40px;\n}\n\n.sidebar-header,\n.communities {\n    margin-bottom: 3vh;\n}\n\n.privacy {\n    margin-bottom: 20vh;\n}\n\n.sidebar-header,   \n.home, \n.profile,\n.messages,\n.history,\n.tasks,\n.communities,\n.settings, \n.support,\n.privacy {\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    justify-self: left;\n}\n.profile-picture {\n    border-radius: 50%;\n}\n\n.sidebar .icon {\n    justify-self: self-start;\n    align-self: center;\n    padding-right: 30px;\n}\n\n.sidebar .title {\n    justify-self: start;\n    align-self: center;\n}\n\n.header-title {\n    font-size: 1.3rem;\n    color: var(--heading-text-color);\n}\n.right-wrapper {\n    grid-column: 2/5;\n    display: grid;\n    align-self: flex-start;\n}\n\n.header {\n    display: grid;\n    background-color: var(--header-background-color);\n    padding: 10px 0 3vh 0;\n}\n\n.header-first-row,\n.header-second-row {\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    align-items: center;\n    justify-items: center;  \n    justify-self: left;\n    padding: 10px 20px;\n}\n\n.header-first-row-left,\n.header-second-row-left {\n    display: grid;\n    grid-column: 1/2;\n    grid-template-columns: 100px 400px;\n    justify-self: left;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n}\n\nimg.search-icon,\nimg.profile-picture {\n    justify-self: right;\n} \ninput {\n    border: 1px solid black;\n}\n\n.header-first-row-right{\n    display: grid;\n    grid-column: 3/4;\n    grid-template-columns: 20px 30px 100px;\n    justify-self: right;\n    align-items: center;\n    gap: 20px;\n}\n/* hidden for when modal will be added\n.header-second-row-right{\n    display: grid;\n    grid-column: 3/4;\n    grid-template-columns: repeat(3,1fr);\n    justify-self: right;\n    align-items: center;\n    gap: 20px;\n} */ \n\n.content-container {\n    background-color: var(--content-background-color);\n    margin-top: 50px;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n}\n\n.library-space {\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr; \n    gap: 10px;\n    margin: 0px 20px;\n    grid-auto-rows: max-content;\n}\n\n.left-content-title {\n    display: grid;\n    align-self:flex-start;\n    grid-column: span 2;\n    justify-self: flex-start;\n    justify-items: flex-start;\n}\n\n.book {\n    display: grid;\n    padding: 20px;\n    height: 200px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n}\n\nform {\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    gap: 10px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    padding: 20px;\n    background-color: var(--card-background-color);\n    box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n}\n\n.right-content {\n    display: grid;\n    grid-column:3/4;\n    align-self: flex-start;\n    gap: 10px;\n    margin: 0px 20px;\n}\n\n.form-container {\n    display:grid;\n    gap: 10px;\n}\n\n.checkbox-wrapper {\n    vertical-align: middle;\n}\n\n/* font styles */\n.right-content-title,\n.left-content-title {\n    color: var(--text-color-content);\n    font-size: 1.5rem;\n    font-weight: 900;\n    font-style: italic;\n    padding: 10px 0px 10px 20px;\n    letter-spacing: 1px;\n}\n\n.greeting-text{\n    color: var(--text-color-content);\n    font-size: 0.9rem;\n    font-weight: 900;\n    letter-spacing: 1px;\n}\n\n.sidebar-title {\n    color: var(--sidebar-text-color);\n    font-size: 1.8rem;\n    align-self: center;\n    padding-right: 10px;\n    font-weight: 900;   \n    letter-spacing: 1px;\n}\n\n.sidebar .title {\n    color: var(--sidebar-text-color);\n    font-weight: 600;\n    font-size: 1.2rem;\n    letter-spacing: 1px;\n}\n.subtitle {\n    font-weight: bold;\n    letter-spacing: 1px;\n    color: var(--subtitle-text-color);\n    font-weight: 500;\n    opacity: 70%;\n    font-size: 0.8rem;\n}\n\n.book-title {\n    color: var(--book-title-color);\n    font-weight: 900;\n    font-style: italic;\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n}\n\n.book-author,\n.book-pages,\nlabel {\n    color: var(--card-text-color);\n    font-weight: 500;\n    font-size: 1.2rem;\n    line-height: 1.3rem;\n    letter-spacing: 1px;\n    padding-bottom: 10px;\n}\n\n.status,\n.remove-book,\n.clear-inputs {\n    justify-self: flex-end;\n    margin-bottom: 10px;  \n    max-width: fit-content;\n}\n.buttons-wrapper > button {\n    justify-content: center;\n    margin-right: 20px;\n}\n.remove-book {\n    margin-bottom: 20px;\n}\na.user-name-bio,\na.user-name {\n    color: var(--user-text-color);\n    font-weight: 600;\n    font-size: 1.2rem;\n    letter-spacing: 1px;\n}\n\n/* all hovers */\nbutton:hover,\n.user-name:hover,\n.user-name-bio:hover,\n.user-name:hover{\n    transform: scale(1.02);\n    cursor: pointer;\n}\n\na,\na:visited {\n    text-decoration: none;\n}\n\n/* all box effects, shadows and styles */\n\n.header {\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n\n.sidebar {\n    box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n}\n\n.book {\n    background-color: var(--card-background-color);\n    box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n}\n\nbutton {\n  background-color: var(--button-background-color);\n  box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;\n  border-radius: 4px;\n  border-style: none;\n  color: var(--button-text-color);\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  padding: 8px 15px 8px;\n  text-align: center;\n}\n\nbutton:hover,\nbutton:focus {\n  opacity: .75;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0xpYmVydGludXNNb25vTW9ubyc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13ZWJzaXRlLWJhY2tncm91bmQtY29sb3IpOyAgXFxufVxcblxcbjpyb290IHtcXG4gICAgLS13ZWJzaXRlLWJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiAjYzY1ZDdiO1xcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmOGU2O1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y4ZTY7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICNDNjVEN0I7XFxuXFxuICAgIC0tdGV4dC1jb2xvci1jb250ZW50OiByZ2IoNjIsIDIwLCAyMCk7XFxuICAgIC0tc2lkZWJhci10ZXh0LWNvbG9yOiAjRkRGNkVDO1xcbiAgICAtLWNhcmQtdGV4dC1jb2xvcjogcmdiKDYyLCAyMCwgMjApO1xcbiAgICAtLWJvb2stdGl0bGUtY29sb3I6IHJnYig2MiwgMjAsIDIwKTtcXG4gICAgLS1idXR0b24tdGV4dC1jb2xvcjogI0ZERjZFQztcXG4gICAgLS1oZWFkaW5nLXRleHQtY29sb3I6ICNDNjVEN0I7XFxuICAgIC0tc3VidGl0bGUtdGV4dC1jb2xvcjogIzJDMzYzOTtcXG4gICAgLS11c2VyLXRleHQtY29sb3I6ICNDNjVEN0I7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogM3ZoIDQwcHggMHB4IDQwcHg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcixcXG4uY29tbXVuaXRpZXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XFxufVxcblxcbi5wcml2YWN5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aDtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyLCAgIFxcbi5ob21lLCBcXG4ucHJvZmlsZSxcXG4ubWVzc2FnZXMsXFxuLmhpc3RvcnksXFxuLnRhc2tzLFxcbi5jb21tdW5pdGllcyxcXG4uc2V0dGluZ3MsIFxcbi5zdXBwb3J0LFxcbi5wcml2YWN5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG4ucHJvZmlsZS1waWN0dXJlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2lkZWJhciAuaWNvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc2VsZi1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAudGl0bGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctdGV4dC1jb2xvcik7XFxufVxcbi5yaWdodC13cmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweCAwIDN2aCAwO1xcbn1cXG5cXG4uaGVhZGVyLWZpcnN0LXJvdyxcXG4uaGVhZGVyLXNlY29uZC1yb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgIFxcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmhlYWRlci1maXJzdC1yb3ctbGVmdCxcXG4uaGVhZGVyLXNlY29uZC1yb3ctbGVmdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNDAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmltZy5zZWFyY2gtaWNvbixcXG5pbWcucHJvZmlsZS1waWN0dXJlIHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59IFxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItZmlyc3Qtcm93LXJpZ2h0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMzBweCAxMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiBoaWRkZW4gZm9yIHdoZW4gbW9kYWwgd2lsbCBiZSBhZGRlZFxcbi5oZWFkZXItc2Vjb25kLXJvdy1yaWdodHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufSAqLyBcXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxufVxcblxcbi5saWJyYXJ5LXNwYWNlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5sZWZ0LWNvbnRlbnQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmJvb2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDEwcHggMzZweCAwcHgsIHJnYigwIDAgMCAvIDYlKSAwcHggMHB4IDBweCAxcHg7XFxufVxcblxcbi5yaWdodC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46My80O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4IDIwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtd3JhcHBlciB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qIGZvbnQgc3R5bGVzICovXFxuLnJpZ2h0LWNvbnRlbnQtdGl0bGUsXFxuLmxlZnQtY29udGVudC10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWNvbnRlbnQpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDIwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5ncmVldGluZy10ZXh0e1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7ICAgXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5zaWRlYmFyIC50aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLnN1YnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zdWJ0aXRsZS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgb3BhY2l0eTogNzAlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmJvb2stdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tYm9vay10aXRsZS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5ib29rLWF1dGhvcixcXG4uYm9vay1wYWdlcyxcXG5sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jYXJkLXRleHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zdGF0dXMsXFxuLnJlbW92ZS1ib29rLFxcbi5jbGVhci1pbnB1dHMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5idXR0b25zLXdyYXBwZXIgPiBidXR0b24ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4ucmVtb3ZlLWJvb2sge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5hLnVzZXItbmFtZS1iaW8sXFxuYS51c2VyLW5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0tdXNlci10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi8qIGFsbCBob3ZlcnMgKi9cXG5idXR0b246aG92ZXIsXFxuLnVzZXItbmFtZTpob3ZlcixcXG4udXNlci1uYW1lLWJpbzpob3ZlcixcXG4udXNlci1uYW1lOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBhbGwgYm94IGVmZmVjdHMsIHNoYWRvd3MgYW5kIHN0eWxlcyAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDEwcHggMzZweCAwcHgsIHJnYigwIDAgMCAvIDYlKSAwcHggMHB4IDBweCAxcHg7XFxufVxcblxcbi5ib29rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMTBweCAzNnB4IDBweCwgcmdiKDAgMCAwIC8gNiUpIDBweCAwcHggMHB4IDFweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDEwcHggMzZweCAwcHgsIHJnYigwIDAgMCAvIDYlKSAwcHggMHB4IDBweCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBwYWRkaW5nOiA4cHggMTVweCA4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgb3BhY2l0eTogLjc1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlEQUFp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Q2pDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUEsZUFBZTtBQUNmOzs7O0lBSUksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBLHdDQUF3Qzs7QUFFeEM7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsK0VBQStFO0FBQ25GOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELCtFQUErRTtFQUMvRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJlcnRpbnVzTW9ub01vbm8nO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2Vic2l0ZS1iYWNrZ3JvdW5kLWNvbG9yKTsgIFxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0td2Vic2l0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcjogI2M2NWQ3YjtcXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjhlNjtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmOGU2O1xcbiAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjQzY1RDdCO1xcblxcbiAgICAtLXRleHQtY29sb3ItY29udGVudDogcmdiKDYyLCAyMCwgMjApO1xcbiAgICAtLXNpZGViYXItdGV4dC1jb2xvcjogI0ZERjZFQztcXG4gICAgLS1jYXJkLXRleHQtY29sb3I6IHJnYig2MiwgMjAsIDIwKTtcXG4gICAgLS1ib29rLXRpdGxlLWNvbG9yOiByZ2IoNjIsIDIwLCAyMCk7XFxuICAgIC0tYnV0dG9uLXRleHQtY29sb3I6ICNGREY2RUM7XFxuICAgIC0taGVhZGluZy10ZXh0LWNvbG9yOiAjQzY1RDdCO1xcbiAgICAtLXN1YnRpdGxlLXRleHQtY29sb3I6ICMyQzM2Mzk7XFxuICAgIC0tdXNlci10ZXh0LWNvbG9yOiAjQzY1RDdCO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDN2aCA0MHB4IDBweCA0MHB4O1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIsXFxuLmNvbW11bml0aWVzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcbn1cXG5cXG4ucHJpdmFjeSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciwgICBcXG4uaG9tZSwgXFxuLnByb2ZpbGUsXFxuLm1lc3NhZ2VzLFxcbi5oaXN0b3J5LFxcbi50YXNrcyxcXG4uY29tbXVuaXRpZXMsXFxuLnNldHRpbmdzLCBcXG4uc3VwcG9ydCxcXG4ucHJpdmFjeSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnI7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNpZGViYXIgLmljb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGViYXIgLnRpdGxlIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLXRleHQtY29sb3IpO1xcbn1cXG4ucmlnaHQtd3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAzdmggMDtcXG59XFxuXFxuLmhlYWRlci1maXJzdC1yb3csXFxuLmhlYWRlci1zZWNvbmQtcm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICBcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5oZWFkZXItZmlyc3Qtcm93LWxlZnQsXFxuLmhlYWRlci1zZWNvbmQtcm93LWxlZnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDQwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5pbWcuc2VhcmNoLWljb24sXFxuaW1nLnByb2ZpbGUtcGljdHVyZSB7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufSBcXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLWZpcnN0LXJvdy1yaWdodHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDMwcHggMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLyogaGlkZGVuIGZvciB3aGVuIG1vZGFsIHdpbGwgYmUgYWRkZWRcXG4uaGVhZGVyLXNlY29uZC1yb3ctcmlnaHR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn0gKi8gXFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbn1cXG5cXG4ubGlicmFyeS1zcGFjZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgXFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubGVmdC1jb250ZW50LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5ib29rIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM2KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAxMHB4IDM2cHggMHB4LCByZ2IoMCAwIDAgLyA2JSkgMHB4IDBweCAwcHggMXB4O1xcbn1cXG5cXG4ucmlnaHQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOjMvNDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAyMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKiBmb250IHN0eWxlcyAqL1xcbi5yaWdodC1jb250ZW50LXRpdGxlLFxcbi5sZWZ0LWNvbnRlbnQtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAyMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uZ3JlZXRpbmctdGV4dHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItY29udGVudCk7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uc2lkZWJhci10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwOyAgIFxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uc2lkZWJhciAudGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc3VidGl0bGUtdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5ib29rLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWJvb2stdGl0bGUtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uYm9vay1hdXRob3IsXFxuLmJvb2stcGFnZXMsXFxubGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc3RhdHVzLFxcbi5yZW1vdmUtYm9vayxcXG4uY2xlYXItaW5wdXRzIHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4uYnV0dG9ucy13cmFwcGVyID4gYnV0dG9uIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLnJlbW92ZS1ib29rIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuYS51c2VyLW5hbWUtYmlvLFxcbmEudXNlci1uYW1lIHtcXG4gICAgY29sb3I6IHZhcigtLXVzZXItdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4vKiBhbGwgaG92ZXJzICovXFxuYnV0dG9uOmhvdmVyLFxcbi51c2VyLW5hbWU6aG92ZXIsXFxuLnVzZXItbmFtZS1iaW86aG92ZXIsXFxuLnVzZXItbmFtZTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogYWxsIGJveCBlZmZlY3RzLCBzaGFkb3dzIGFuZCBzdHlsZXMgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAxMHB4IDM2cHggMHB4LCByZ2IoMCAwIDAgLyA2JSkgMHB4IDBweCAwcHggMXB4O1xcbn1cXG5cXG4uYm9vayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDEwcHggMzZweCAwcHgsIHJnYigwIDAgMCAvIDYlKSAwcHggMHB4IDBweCAxcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAxMHB4IDM2cHggMHB4LCByZ2IoMCAwIDAgLyA2JSkgMHB4IDBweCAwcHggMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG9wYWNpdHk6IC43NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=