/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/darkgreen-background.webp */ \"./src/images/darkgreen-background.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.background-pattern {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-repeat: repeat;\r\n  opacity: 0.5;\r\n  animation: animateBackground 1s linear forwards;\r\n}\r\n\r\n@keyframes animateBackground {\r\n  0% {\r\n    transform: scale(0.8) translate(0, 0);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1) translate(0, 0);\r\n  }\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 20vh;\r\n  display: grid;\r\n  text-align: center;\r\n  place-items: center; /* Center all items vertically and horizontally */\r\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\r\n  backdrop-filter: blur(5px);\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n}\r\n\r\nheader img {\r\n  width: 30%;\r\n  height: 90%;\r\n}\r\n\r\nheader ul {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  width: 100%;\r\n  gap: 1.5rem;\r\n  list-style: none;\r\n}\r\n\r\nheader li {\r\n  width: 100%;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 140%;\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-display li {\r\n  position: relative;\r\n  border-bottom: 2px solid rgba(3, 111, 173, 0.3);\r\n}\r\n\r\nheader ul li:hover {\r\n  background-color: rgb(7, 173, 118);\r\n  border-radius: 5px;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n#article-container {\r\n  display: grid;\r\n  gap: 3rem;\r\n  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));\r\n  align-items: center;\r\n  flex: 1;\r\n  margin: 5% 0;\r\n}\r\n\r\narticle {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5%;\r\n  align-items: center;\r\n  text-align: center;\r\n  justify-self: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  border: 2px solid rgb(0, 0, 0);\r\n  border-radius: 5px;\r\n  padding: 1%;\r\n}\r\n\r\narticle:hover {\r\n  border: 2px solid #fff;\r\n  transform: scale(1.05);\r\n}\r\n\r\narticle img {\r\n  position: relative;\r\n  height: 50%;\r\n  width: 100%;\r\n}\r\n\r\n.fa-heart {\r\n  color: #fff;\r\n}\r\n\r\n.fa-heart:active {\r\n  color: #f00;\r\n  animation: animate 1s linear normal;\r\n}\r\n\r\n@keyframes animate {\r\n  50% {\r\n    opacity: 1;\r\n    font-size: 60px;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    font-size: 80px;\r\n  }\r\n}\r\n\r\n.container-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.movie-btn {\r\n  background-color: rgb(82, 82, 82);\r\n  border: none;\r\n  color: inherit;\r\n  cursor: pointer;\r\n  font: inherit;\r\n  border-radius: 10px;\r\n  padding: 3%;\r\n}\r\n\r\n.movie-btn:hover {\r\n  background-color: rgb(7, 173, 118);\r\n  color: black;\r\n}\r\n\r\n.reservations-btn {\r\n  background-color: rgb(82, 82, 82);\r\n  border: none;\r\n  color: inherit;\r\n  font: inherit;\r\n  border-radius: 10px;\r\n  padding: 3%;\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden-class {\r\n  display: none;\r\n}\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  height: 10vh;\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: rgb(37, 37, 37);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-self: flex-end;\r\n  z-index: 20;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 30;\r\n  background: rgba(0, 0, 0, 0.9); /* Adjust the opacity as needed */\r\n  filter: blur(8px);\r\n}\r\n\r\n.overlay::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */\r\n  filter: blur(8px); /* Adjust the blur radius as needed */\r\n}\r\n\r\n/* POP-UP-------------------------------------------------------------------------------------> */\r\n\r\n#pop-up-container {\r\n  display: none;\r\n  position: fixed;\r\n  width: 90%;\r\n  height: 80vh;\r\n  border: 6px solid rgba(4, 80, 54, 0.5);\r\n  border-radius: 12px;\r\n  background-color: rgb(0, 0, 0);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  z-index: 50;\r\n}\r\n\r\n#pop-up-container::-webkit-scrollbar {\r\n  width: 5px;\r\n  background-color: rgba(4, 80, 54, 0.5);\r\n}\r\n\r\n#pop-up-container::-webkit-scrollbar-thumb {\r\n  border-radius: 4px;\r\n  background-color: rgb(7, 173, 118);\r\n}\r\n\r\n#pop-up-container .pop-up {\r\n  width: 100%;\r\n  height: 120%;\r\n}\r\n\r\n.fa-xmark {\r\n  width: 100%;\r\n  position: fixed;\r\n  font-size: 2.5rem;\r\n  color: rgb(7, 173, 118);\r\n  left: 90vw;\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.pop-up-content {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.movie-img img {\r\n  width: 100%;\r\n  height: 71vh;\r\n\r\n  /* object-fit: 100%; */\r\n}\r\n\r\n.desc {\r\n  color: rgb(7, 173, 118);\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-info h3 {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n\r\n.movie-details {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n.movie-details div {\r\n  width: 100%;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  font-size: 3vh;\r\n}\r\n\r\n.movie-comment-section {\r\n  width: 100%;\r\n  margin-top: 3vw;\r\n}\r\n\r\n.comments-display {\r\n  text-align: left;\r\n  border: 2px solid rgb(7, 173, 118);\r\n  margin-bottom: 5%;\r\n  margin-top: 5%;\r\n  width: 90%;\r\n  height: 600px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  list-style: none;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comments-display::-webkit-scrollbar {\r\n  width: 3px;\r\n  background-color: rgba(4, 80, 54, 0.5);\r\n}\r\n\r\n.comments-display::-webkit-scrollbar-thumb {\r\n  border-radius: 4px;\r\n  background-color: rgb(7, 173, 118);\r\n}\r\n\r\n.comment-li {\r\n  height: 50px;\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.add-comment {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n\r\n.comment-date {\r\n  width: 50%;\r\n  margin-right: 5px;\r\n}\r\n\r\n.comment-name {\r\n  width: 50%;\r\n  margin-right: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.comment-text {\r\n  flex-grow: 1;\r\n  padding-right: 5px;\r\n}\r\n\r\n.movie-comment-section h4 {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.input-area {\r\n  width: 100%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5%;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#name-of-commenter {\r\n  padding: 1rem;\r\n  height: 3rem;\r\n  width: 90%;\r\n  border-radius: 8px;\r\n}\r\n\r\n#datetime {\r\n  padding: 1rem;\r\n  height: 3rem;\r\n  width: 40%;\r\n}\r\n\r\n#comment {\r\n  padding: 1rem;\r\n  height: 60%;\r\n  width: 90%;\r\n  border-radius: 8px;\r\n}\r\n\r\n#comment-button {\r\n  height: 3rem;\r\n  width: 40%;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservationinput {\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  width: 90%;\r\n  border-radius: 8px;\r\n}\r\n\r\n.reservationinput:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.close-pop-up {\r\n  display: none;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 1.5rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 5%;\r\n  text-align: center;\r\n  background-color: white;\r\n  border-radius: 1px;\r\n  padding: 1%;\r\n}\r\n\r\n@media (max-width: 320px) {\r\n  .fa-xmark {\r\n    font-size: 2.5rem;\r\n    left: 80vw;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movie-cards.js */ \"./src/modules/movie-cards.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_people_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/people.js */ \"./src/modules/people.js\");\n\n\n// import locationInfo from './geolocation.js';\n\n// import { ResetReservations, postReservation, validation } from './modules/reservations.js';\n\n\nconst heightofContainer = document.querySelector('#article-container').clientHeight * 0.3;\nconst footerTop = () => {\n  const footer = document.querySelector('footer');\n  footer.style.top = `${heightofContainer}px`;\n};\nwindow.addEventListener('load', footerTop);\n\n// RENDERING CARDS\nconst fetchLocationAndMovieCards = async () => {\n  const locationDetails = await locationInfo();\n  console.log(locationDetails);\n  // Attach click event listener to fetch movie cards\n  _modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__.movieList1.forEach((btn) => { btn.addEventListener('click', () => { (0,_modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__.fetchMOviecards)('https://api.tvmaze.com/shows'); }); });\n  _modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__.movieList2.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      (0,_modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__.fetchMOviecards)('https://api.tvmaze.com/schedule/full');\n    });\n  });\n  _modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__.movieList3.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      (0,_modules_people_js__WEBPACK_IMPORTED_MODULE_3__.fetchPeople)('https://api.tvmaze.com/people');\n    });\n  });\n};\nwindow.addEventListener('DOMContentLoaded', () => {\n  console.log('initial movies have loaded');\n  (0,_modules_movie_cards_js__WEBPACK_IMPORTED_MODULE_1__.fetchMOviecards)('https://api.tvmaze.com/shows');\n});\n\n// Call the function to fetch location details and movie cards\nfetchLocationAndMovieCards();\n\nconst FORM = document.querySelector('form');\nFORM.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const numElements = FORM.elements.length;\n  console.log(numElements);\n\n  if (numElements === 3 && (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.validationcomments)(FORM)) {\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.postComment)();\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.ResetComments)(FORM);\n  } else if (numElements === 4 && validation(FORM)) {\n    postReservation();\n    ResetReservations(FORM);\n  }\n});\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '​' (57:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   }\\n| };\\n> ​\\n| export const ResetComments = (form) => {\\n|   const input = form.querySelector('input');\");\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   likeAnimation: () => (/* binding */ likeAnimation),\n/* harmony export */   loadLikes: () => (/* binding */ loadLikes),\n/* harmony export */   updateAPIlikes: () => (/* binding */ updateAPIlikes)\n/* harmony export */ });\nclass LikeObject {\n  constructor(itemid) {\n    this.item_id = itemid;\n  }\n}\nconst likeAnimation = (e) => {\n  const heart = e.target.closest('article').querySelector('.fa-heart');\n  heart.addEventListener('dblclick', () => {\n    heart.classList.add('active');\n    setTimeout(() => {\n      heart.classList.remove('active');\n    }, 1000);\n  });\n};\nconst updateAPIlikes = async (e) => {\n  if (e.target.classList.contains('fa-heart')) {\n    const id = e.target.closest('article').querySelector('.id').textContent;\n    const Likeobject = new LikeObject(id);\n    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/likes', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(Likeobject),\n    });\n    if (response.status === 201) {\n      console.log('Like has been updated');\n      const likecount = e.target.closest('article').querySelector('.count-likes');\n      const currentCount = parseInt(likecount.textContent, 10);\n      const newCount = currentCount + 1;\n      likecount.textContent = newCount;\n    }\n  }\n};\nconst loadLikes = async (movieCard) => {\n  const article = movieCard;\n  const articleid = article.querySelector('.id');\n  const idtextContent = articleid.textContent;\n  const getrequest = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/49RqYGIcArZ2U5ymFK37/likes');\n  const data = await getrequest.json();\n  if (getrequest.ok) {\n    console.log('Like have loaded');\n    const likecount = article.querySelector('.count-likes');\n    data.forEach((MOVIELIKE) => {\n      if (MOVIELIKE.item_id === idtextContent) {\n        likecount.textContent = MOVIELIKE.likes;\n      }\n    });\n  }\n};\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/movie-cards.js":
/*!************************************!*\
  !*** ./src/modules/movie-cards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchMOviecards: () => (/* binding */ fetchMOviecards),\n/* harmony export */   movieList1: () => (/* binding */ movieList1),\n/* harmony export */   movieList2: () => (/* binding */ movieList2),\n/* harmony export */   movieList3: () => (/* binding */ movieList3)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up.js */ \"./src/modules/pop-up.js\");\n/* harmony import */ var _moviesCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moviesCount.js */ \"./src/modules/moviesCount.js\");\n\n\n\n\nconst movieList1 = document.querySelectorAll('.movie-list1');\nconst movieList2 = document.querySelectorAll('.movie-list2');\nconst movieList3 = document.querySelectorAll('.movie-list3');\n\nconst fetchMOviecards = async (url) => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const movieCards = data.slice(0, 12);\n    const movieCardsContainer = document.querySelector('#article-container');\n    movieCardsContainer.innerHTML = '';\n\n    movieCards.forEach((movieCard) => {\n      const movieCardElement = document.createElement('article');\n      movieCardElement.classList.add('movie-item');\n\n      // Common properties for both types of movie cards\n      movieCardElement.innerHTML = `\n        <img class=\"usethisimage\" src=\"${movieCard.image?.medium}\" alt=\"img\" />\n        <h3>${movieCard.name}</h3>\n        <div class=\"movie-title flex-row\">\n          <div class=\"likes flex-column\">\n            <i class=\"fa-solid fa-heart\"></i>\n            <span><i class=\"count-likes\">0</i> likes</span>\n          </div>\n        </div>\n        <div class=\"container-btn\">\n          <button type=\"button\" class=\"movie-btn\">Comments</button>\n          <button type=\"button\" class=\"movie-btn reservations-btn\">Reservations</button>\n        </div>\n      `;\n\n      if (movieCard._embedded && movieCard._embedded.show) {\n        movieCardElement.innerHTML += `\n          <span class=\"hidden-class overview\">${movieCard._embedded.show.summary}</span>\n          <span class=\"hidden-class pop-up-API-image\">${movieCard._embedded.show.image.original}</span>\n          <span class=\"hidden-class language\">${movieCard._embedded.show.language}</span>\n          <span class=\"hidden-class release-date\">${movieCard._embedded.show.premiered}</span>\n          <span class=\"hidden-class type\">${movieCard._embedded.show.type}</span>\n          <span class=\"hidden-class country-showing\">${movieCard._embedded.show.webChannel.country.name}</span>\n          <span class=\"hidden-class genre\">${movieCard._embedded.show.genres[0]} ${movieCard._embedded.show.genres[1]} ${movieCard._embedded.show.genres[2]}</span>\n          <span class=\"hidden-class id\">${movieCard._embedded.show.id}</span>\n        `;\n        const newimage = `${movieCard._embedded.show.image.medium}`;\n        const imagecontainer = movieCardElement.querySelector('.usethisimage');\n        imagecontainer.src = newimage;\n      } else if (movieCard.birthday) {\n        movieCardElement.innerHTML += `\n          <span class=\"hidden-class birthday\">${movieCard.birthday ?? 'Birthday not available'}</span>\n          <span class=\"hidden-class pop-up-API-image\">${movieCard.image.original ?? movieCard.image?.medium}</span>\n          <span class=\"hidden-class origin\">${movieCard.country.name ?? 'Country not available'}</span>\n          <span class=\"hidden-class deathday\">${movieCard.deathday ?? 'Deathday not available'}</span>\n          <span class=\"hidden-class gender\">${movieCard.gender ?? 'Gender not available'}</span>\n          <span class=\"hidden-class id\">${movieCard.updated ?? 'ID not available'}</span>\n        `;\n      } else {\n        movieCardElement.innerHTML += `<span class=\"hidden-class overview \">${movieCard.summary}</span>\n        <span class=\"hidden-class pop-up-API-image \">${movieCard.image.original}</span>\n        <span class=\"hidden-class language \">${movieCard.language}</span>\n        <span class=\"hidden-class release-date \">${movieCard.premiered}</span>\n        <span class=\"hidden-class type \">${movieCard.type}</span>\n        <span class=\"hidden-class country-showing \">${movieCard.network.country?.name}</span>\n        <span class=\"hidden-class genre \">${movieCard.genres[0]} ${movieCard.genres[1]} ${movieCard.genres[2]}</span>\n        <span class=\"hidden-class id \">${movieCard.id}</span>`;\n      }\n\n      // Rest of the code remains the same...\n      const likeBtn = movieCardElement.querySelector('.fa-heart');\n      likeBtn.addEventListener('click', (e) => (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.updateAPIlikes)(e));\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.loadLikes)(movieCardElement);\n      const BUTTON = movieCardElement.querySelectorAll('.movie-btn');\n      (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_1__.handlepopup)(BUTTON);\n      movieCardsContainer.appendChild(movieCardElement);\n\n      (0,_moviesCount_js__WEBPACK_IMPORTED_MODULE_2__.moviesCount)();\n    });\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n};\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/movie-cards.js?");

/***/ }),

/***/ "./src/modules/moviesCount.js":
/*!************************************!*\
  !*** ./src/modules/moviesCount.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviesCount = () => {\n  const movies = document.querySelectorAll('.movie-item');\n  const count = movies.length;\n\n  // Check if the '.movies-counter' element exists, and create it if not\n  let moviesCountElement = document.querySelector('.movies-counter');\n  if (!moviesCountElement) {\n    moviesCountElement = document.createElement('div');\n    moviesCountElement.className = 'movies-counter';\n    document.body.appendChild(moviesCountElement);\n  }\n\n  moviesCountElement.innerHTML = `(${count})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesCount);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/moviesCount.js?");

/***/ }),

/***/ "./src/modules/people.js":
/*!*******************************!*\
  !*** ./src/modules/people.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPeople: () => (/* binding */ fetchPeople),\n/* harmony export */   fillPopupwithinfoforPeople: () => (/* binding */ fillPopupwithinfoforPeople),\n/* harmony export */   getPopupinfoforPeople: () => (/* binding */ getPopupinfoforPeople),\n/* harmony export */   handlepopupforPeople: () => (/* binding */ handlepopupforPeople),\n/* harmony export */   updatingpopupHtmlforPeople: () => (/* binding */ updatingpopupHtmlforPeople)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_comments_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pop-up.js */ \"./src/modules/pop-up.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './reservations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\nconst getPopupinfoforPeople = (e) => {\n  const article = e.target.closest('article');\n  const nameofperson = article.querySelector('h3').textContent;\n  const picture = article.querySelector('img');\n  const imagesource = picture.getAttribute('src');\n  const gender = article.querySelector('.gender').textContent;\n  const birthday = article.querySelector('.birthday').textContent;\n  const deathday = article.querySelector('.deathday').textContent;\n  const countryoforigin = article.querySelector('.country-of-origin').textContent;\n  const id = article.querySelector('.id').textContent;\n  return {\n    nameofperson,\n    imagesource,\n    gender,\n    birthday,\n    deathday,\n    countryoforigin,\n    id,\n  };\n};\n\nconst fillPopupwithinfoforPeople = (e) => {\n  if (e.target.classList.contains('movie-btn')) {\n    const hiddenPopupinfo = getPopupinfoforPeople(e);\n    const popupContainer = document.querySelector('#pop-up-container');\n    const movieNameElement = popupContainer.querySelector('#movie-name');\n    const movieInfo1Element = popupContainer.querySelector('.movie-info1');\n    const movieInfo2Element = popupContainer.querySelector('.movie-info2');\n    const movieInfo3Element = popupContainer.querySelector('.movie-info3');\n    const movieInfo4Element = popupContainer.querySelector('.movie-info4');\n    const movieImageConatiner = popupContainer.querySelector('.movie-img');\n    const movieImage = movieImageConatiner.querySelector('img');\n    const movieid = popupContainer.querySelector('.id-pop-up');\n\n    movieNameElement.textContent = hiddenPopupinfo.nameofperson;\n    movieInfo1Element.textContent = hiddenPopupinfo.gender;\n    movieid.textContent = hiddenPopupinfo.id; // error\n    movieInfo2Element.textContent = hiddenPopupinfo.countryoforigin;\n    movieImage.setAttribute('src', hiddenPopupinfo.imagesource);\n    movieInfo3Element.textContent = hiddenPopupinfo.birthday;\n    movieInfo4Element.textContent = hiddenPopupinfo.deathday;\n  }\n};\n\nconst updatingpopupHtmlforPeople = (e, Formi) => {\n  if (Formi.elements.length === 3) {\n    console.log('HTML UPDATED to reservations mode');\n    fillPopupwithinfoforPeople(e);\n    const popupContainer = document.querySelector('#pop-up-container');\n    const nameofsection = popupContainer.querySelector('h4');\n    nameofsection.textContent = 'Reservations:';\n    const form = popupContainer.querySelector('form');\n    const textarea = form.querySelector('textarea');\n    if (textarea) {\n      const firstInput = form.querySelector('#name-of-commenter');\n      const button = form.querySelector('button');\n      const regex = /^\\d{4}-\\d{2}-\\d{2}$/;\n      const newInput1 = document.createElement('input');\n      newInput1.addEventListener('input', () => {\n        if (regex.test(newInput1.value)) {\n          newInput1.style.border = '2px solid green';\n        } else {\n          newInput1.style.border = '2px solid red';\n          newInput1.reportValidity();\n          newInput1.setCustomValidity('please let date match this pattern YYYY-MM-DD !!!');\n        }\n      });\n      newInput1.type = 'text';\n      newInput1.name = '';\n      newInput1.id = 'date1';\n      newInput1.setAttribute('class', 'reservationinput');\n      newInput1.placeholder = 'start date';\n      newInput1.maxLength = 25;\n      newInput1.required = true;\n      const newInput2 = document.createElement('input');\n      newInput2.type = 'text';\n      newInput2.name = '';\n      newInput2.id = 'date2';\n      newInput2.setAttribute('class', 'reservationinput');\n      newInput2.placeholder = 'end date';\n      newInput2.maxLength = 25;\n      newInput2.required = true;\n      _comments_js__WEBPACK_IMPORTED_MODULE_0__.submit.textContent = 'Reserve';\n      newInput2.addEventListener('input', () => {\n        if (regex.test(newInput2.value)) {\n          newInput2.setCustomValidity('');\n          newInput2.style.border = '2px solid green';\n        } else {\n          newInput2.style.border = '2px solid red';\n          newInput2.reportValidity();\n          newInput2.setCustomValidity('please let date match this pattern YYYY-MM-DD !!!');\n        }\n      });\n      // Remove the textarea element\n      textarea.remove();\n\n      // Insert new input elements after the first input and before the button\n      form.insertBefore(newInput2, firstInput.nextSibling);\n      form.insertBefore(newInput1, firstInput.nextSibling);\n    }\n  }\n};\n\nconst handlepopupforPeople = (button) => {\n  button.forEach((btn) => {\n    const FORM = document.querySelector('form');\n    const numElements = FORM.elements.length;\n    btn.addEventListener('click', (e) => {\n      (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)();\n      (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_2__.centerModal)();\n      fillPopupwithinfoforPeople(e);\n      _pop_up_js__WEBPACK_IMPORTED_MODULE_2__.Xbutton.addEventListener('click', _pop_up_js__WEBPACK_IMPORTED_MODULE_2__.closePopup);\n\n      // Get the target element once to avoid redundant lookups\n      const targetElement = e.target;\n\n      if (targetElement.classList.contains('reservations-btn')) {\n        updatingpopupHtmlforPeople(e, FORM);\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './reservations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e);\n      } else {\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.revertChanges)(FORM);\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.loadComments)(e);\n      }\n    });\n  });\n};\n\nconst fetchPeople = async (url) => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const movieCards = data.slice(0, 9);\n    const movieCardsContainer = document.querySelector('#article-container');\n    movieCardsContainer.innerHTML = '';\n    console.log(movieCards);\n\n    movieCards.forEach((movieCard) => {\n      if (movieCard) {\n        const movieCardElement = document.createElement('article');\n        movieCardElement.classList.add('movie-item');\n        movieCardElement.innerHTML = `\n            <img class=\"usethisimage\" src=\"${movieCard.image.medium}\" alt=\"img\" />\n            <h3>${movieCard.name}</h3>\n            <div class=\"movie-title flex-row\">\n              <div class=\"likes flex-column\">\n                <i class=\"fa-solid fa-heart\"></i>\n                <span><i class=\"count-likes\">0</i> likes</span>\n              </div>\n            </div>\n            <div class=\"container-btn\">\n              <button type=\"button\" class=\"movie-btn\">Comments</button>\n              <button type=\"button\" class=\"movie-btn reservations-btn\">Reservations</button>\n            </div>\n            <span class=\"hidden-class gender \">${movieCard.gender}</span>\n            <span class=\"hidden-class pop-up-API-image \">${movieCard.image.original}</span>\n            <span class=\"hidden-class birthday \">${movieCard.birthday}</span>\n            <span class=\"hidden-class deathday \">${movieCard.deathday}</span>\n            <span class=\"hidden-class country-of-origin \">${movieCard.country.name}</span>\n            <span class=\"hidden-class id \">${movieCard.updated}</span>\n          `;\n        const likeBtn = movieCardElement.querySelector('.fa-heart');\n        likeBtn.addEventListener('click', (e) => (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.updateAPIlikes)(e));\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.loadLikes)(movieCardElement);\n        const BUTTON = movieCardElement.querySelectorAll('.movie-btn');\n        handlepopupforPeople(BUTTON);\n\n        movieCardsContainer.appendChild(movieCardElement);\n      } else {\n        console.error('Invalid movie card data:', movieCard);\n        console.log(movieCard);\n      }\n    });\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n};\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/people.js?");

/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Xbutton: () => (/* binding */ Xbutton),\n/* harmony export */   centerModal: () => (/* binding */ centerModal),\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   fillPopupwithinfo: () => (/* binding */ fillPopupwithinfo),\n/* harmony export */   getPopupinfo: () => (/* binding */ getPopupinfo),\n/* harmony export */   handlepopup: () => (/* binding */ handlepopup),\n/* harmony export */   movieBtn: () => (/* binding */ movieBtn),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_comments_js__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './reservations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst movieBtn = document.querySelectorAll('.movie-btn');\nconst popUpContainer = document.querySelector('#pop-up-container');\nconst openPopup = () => {\n  popUpContainer.style.display = 'block';\n  document.body.style.overflow = 'hidden'; // Remove scroll from the window\n  document.querySelector('.overlay').style.display = 'block';\n};\nconst closePopup = () => {\n  popUpContainer.style.display = 'none';\n  document.body.style.overflow = 'auto';\n  document.querySelector('.overlay').style.display = 'none';\n};\nconst Xbutton = popUpContainer.querySelector('#cancel-icon');\n// CENTERING MY POPUP...........................................\n\nfunction pxToVh(px) {\n  return (px / window.innerHeight) * 100;\n}\n\nfunction pxToVw(px) {\n  return (px / window.innerWidth) * 100;\n}\nfunction centerModal() {\n  const modalContent = document.querySelector('#pop-up-container');\n\n  const modalWidth = pxToVw(modalContent.offsetWidth);\n  const modalHeight = pxToVh(modalContent.offsetHeight);\n\n  const leftPosition = (100 - modalWidth) / 2;\n  const topPosition = (100 - modalHeight) / 2;\n\n  modalContent.style.left = `${leftPosition}vw`;\n  modalContent.style.top = `${topPosition}vh`;\n  modalContent.style.bottom = `${topPosition}vh`;\n  modalContent.style.right = `${leftPosition}vw`;\n}\n\n// POP-UP INFO..........................................\nconst getPopupinfo = (e) => {\n  const article = e.target.closest('article');\n  const movieTitle = article.querySelector('h3').textContent;\n  const movieImage = article.querySelector('img');\n  const imagesource = movieImage.getAttribute('src');\n  const overview = article.querySelector('.overview').textContent;\n  const language = article.querySelector('.language').textContent;\n  const releaseDate = article.querySelector('.release-date').textContent;\n  const type = article.querySelector('.type').textContent;\n  const countryshowing = article.querySelector('.country-showing').textContent;\n  const genre = article.querySelector('.genre').textContent;\n  const id = article.querySelector('.id').textContent;\n  const genreArray = genre.split(',');\n  return {\n    movieTitle,\n    imagesource,\n    overview,\n    language,\n    releaseDate,\n    type,\n    countryshowing,\n    genreArray,\n    id,\n  };\n};\n\nconst fillPopupwithinfo = (e) => {\n  if (e.target.classList.contains('movie-btn')) {\n    const hiddenPopupinfo = getPopupinfo(e);\n    const popupContainer = document.querySelector('#pop-up-container');\n    const movieNameElement = popupContainer.querySelector('#movie-name');\n    const movieInfo1Element = popupContainer.querySelector('.movie-info1');\n    const movieInfo2Element = popupContainer.querySelector('.movie-info2');\n    const movieInfo3Element = popupContainer.querySelector('.movie-info3');\n    const movieInfo4Element = popupContainer.querySelector('.movie-info4');\n    const movieImageConatiner = popupContainer.querySelector('.movie-img');\n    const movieImage = movieImageConatiner.querySelector('img');\n    const movieid = popupContainer.querySelector('.id-pop-up');\n\n    movieNameElement.textContent = hiddenPopupinfo.movieTitle;\n    movieInfo1Element.textContent = hiddenPopupinfo.overview;\n    movieid.textContent = hiddenPopupinfo.id;\n    movieInfo2Element.textContent = hiddenPopupinfo.language;\n    movieInfo3Element.textContent = hiddenPopupinfo.type;\n    movieImage.setAttribute('src', hiddenPopupinfo.imagesource);\n    movieInfo4Element.textContent = `${hiddenPopupinfo.genreArray[0]}, ${hiddenPopupinfo.genreArray[1]}, ${hiddenPopupinfo.genreArray[2]}`;\n  }\n};\n\nconst handlepopup = (button) => {\n  button.forEach((btn) => {\n    const FORM = document.querySelector('form');\n    const numElements = FORM.elements.length;\n    btn.addEventListener('click', (e) => {\n      openPopup();\n      centerModal();\n      fillPopupwithinfo(e);\n      Xbutton.addEventListener('click', closePopup);\n\n      const targetElement = e.target;\n\n      if (targetElement.classList.contains('reservations-btn')) {\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './reservations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e, FORM);\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './reservations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e);\n      } else {\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.revertChanges)(FORM);\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.loadComments)(e);\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/pop-up.js?");

/***/ }),

/***/ "./src/images/darkgreen-background.webp":
/*!**********************************************!*\
  !*** ./src/images/darkgreen-background.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"61ae6506aef1e14009ac.webp\";\n\n//# sourceURL=webpack://javascript-capstone/./src/images/darkgreen-background.webp?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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