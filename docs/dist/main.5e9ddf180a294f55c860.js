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

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Button = /*#__PURE__*/function () {\n  function Button(title) {\n    _classCallCheck(this, Button);\n\n    _defineProperty(this, \"title\", void 0);\n\n    this.title = title;\n  }\n\n  _createClass(Button, [{\n    key: \"render\",\n    value: function render() {\n      return \"<button type=\\\"button\\\" class=\\\"filter-btn\\\" data-filter=\\\"\".concat(this.title, \"\\\">\").concat(this.title, \"</button>\");\n    }\n  }]);\n\n  return Button;\n}();\n\n\n\n//# sourceURL=webpack://webpack_learning/./components/Button.js?");

/***/ }),

/***/ "./components/MenuItem.js":
/*!********************************!*\
  !*** ./components/MenuItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuItem)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar MenuItem = /*#__PURE__*/function () {\n  function MenuItem(_ref) {\n    var id = _ref.id,\n        title = _ref.title,\n        price = _ref.price,\n        category = _ref.category,\n        img = _ref.img,\n        desc = _ref.desc;\n\n    _classCallCheck(this, MenuItem);\n\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"title\", void 0);\n\n    _defineProperty(this, \"price\", void 0);\n\n    _defineProperty(this, \"category\", void 0);\n\n    _defineProperty(this, \"img\", void 0);\n\n    _defineProperty(this, \"desc\", void 0);\n\n    this.id = id;\n    this.title = title;\n    this.price = price;\n    this.desc = desc;\n    this.category = category;\n    this.img = img;\n  }\n\n  _createClass(MenuItem, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n    <article class=\\\"menu-item\\\">\\n    <img\\n      src=\\\"\".concat(this.img, \"\\\"\\n      alt=\\\"\").concat(this.title, \"\\\"\\n      width=\\\"400\\\"\\n      height=\\\"250\\\"\\n      class=\\\"photo\\\"\\n    />\\n    <div class=\\\"menu-item-content\\\">\\n      <div class=\\\"title\\\">\\n        <h2>\").concat(this.title, \"</h2>\\n        <div class=\\\"price\\\">$\").concat(this.price, \"</div>\\n      </div>\\n      <p>\").concat(this.desc, \"</p>\\n    </div>\\n  </article>\");\n    }\n  }]);\n\n  return MenuItem;\n}();\n\n\n\n//# sourceURL=webpack://webpack_learning/./components/MenuItem.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MenuItem */ \"./components/MenuItem.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./main.css\");\n\n\n\nvar menu = [new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 1,\n  title: \"buttermilk pancakes\",\n  category: \"breakfast\",\n  price: 15.99,\n  img: \"./img/item-1.jpeg\",\n  cook: \"John\",\n  desc: \"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed \"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 2,\n  title: \"diner double\",\n  category: \"lunch\",\n  price: 13.99,\n  img: \"./img/item-2.jpeg\",\n  desc: \"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats \"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 3,\n  title: \"godzilla milkshake\",\n  category: \"shakes\",\n  price: 6.99,\n  img: \"./img/item-3.jpeg\",\n  desc: \"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.\"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 4,\n  title: \"country delight\",\n  category: \"breakfast\",\n  price: 20.99,\n  img: \"./img/item-4.jpeg\",\n  desc: \"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, \"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 5,\n  title: \"egg attack\",\n  category: \"lunch\",\n  price: 22.99,\n  img: \"./img/item-5.jpeg\",\n  desc: \"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up \"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 6,\n  title: \"oreo dream\",\n  category: \"shakes\",\n  price: 18.99,\n  img: \"./img/item-6.jpeg\",\n  desc: \"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday\"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 7,\n  title: \"bacon overflow\",\n  category: \"breakfast\",\n  price: 8.99,\n  img: \"./img/item-7.jpeg\",\n  desc: \"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird \"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 8,\n  title: \"american classic\",\n  category: \"lunch\",\n  price: 12.99,\n  img: \"./img/item-8.jpeg\",\n  desc: \"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  \"\n}), new _components_MenuItem__WEBPACK_IMPORTED_MODULE_1__.default({\n  id: 9,\n  title: \"quarantine buddy\",\n  category: \"shakes\",\n  price: 16.99,\n  img: \"./img/item-9.jpeg\",\n  desc: \"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.\"\n})];\nvar buttonsContainer = document.querySelector(\"#filters-container\");\nvar menuContainer = document.querySelector(\"#menu\");\n\nfunction displayMenuItems(menuItems) {\n  if (menuItems.length > 0) {\n    var displayItems = menuItems.map(function (item) {\n      return item.render();\n    }).join(\"\");\n    menuContainer.innerHTML = displayItems;\n  } else {\n    menuContainer.style.justifyContent = \"center\";\n    menuContainer.innerHTML = \"<h1>Menu is empty.</h1>\";\n  }\n}\n\nfunction displayFilterButtons(menuItems) {\n  var categoriesBtns = [\"all\"];\n  var categories = menuItems.map(function (item) {\n    return item.category;\n  }).forEach(function (category) {\n    if (categoriesBtns.includes(category) === false) {\n      categoriesBtns.push(category);\n    }\n  }); //   let categories = [\"all\"].concat(\n  //     Array.from(new Set(menuItems.map((item) => item.category)))\n  //   );\n\n  categoriesBtns = categoriesBtns.map(function (category) {\n    return new _components_Button__WEBPACK_IMPORTED_MODULE_0__.default(category);\n  });\n  buttonsContainer.innerHTML = categoriesBtns.map(function (btn) {\n    return btn.render();\n  }).join(\"\");\n  var filterBtns = buttonsContainer.querySelectorAll(\".filter-btn\");\n  filterBtns.forEach(function (btn) {\n    btn.addEventListener(\"click\", function (event) {\n      var currentFilter = event.currentTarget;\n      var lastActiveFilter = buttonsContainer.querySelector(\".active\");\n\n      if (lastActiveFilter) {\n        lastActiveFilter.classList.remove(\"active\");\n      }\n\n      currentFilter.classList.add(\"active\");\n      var filterCondition = currentFilter.dataset.filter;\n      var filteredMenu = menu.filter(function (menuItem) {\n        switch (filterCondition) {\n          case \"all\":\n            return true;\n\n          case \"breakfast\":\n            return menuItem.category === \"breakfast\";\n\n          case \"lunch\":\n            return menuItem.category === \"lunch\";\n\n          case \"shakes\":\n            return menuItem.category === \"shakes\";\n\n          default:\n            return false;\n        }\n      });\n      displayMenuItems(filteredMenu);\n    });\n  });\n}\n\ndisplayMenuItems(menu);\ndisplayFilterButtons(menu);\n\n//# sourceURL=webpack://webpack_learning/./index.js?");

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_learning/./main.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_learning"] = self["webpackChunkwebpack_learning"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;