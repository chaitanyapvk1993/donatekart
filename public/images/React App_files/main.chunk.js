(this["webpackJsonpdonatekart"] = this["webpackJsonpdonatekart"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nhtml {\n  font-size: 62.5%; /* 16px x 62.5 = 10px = 1rem */\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  height: 100vh;\n  font-size: 1.6rem;\n  font-family: Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#root {\n  height: 100%;\n}\n\n/* Layout */\n.grid-container {\n  display: grid;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  grid-template-columns: 1fr;\n  grid-template-rows: 5rem 1fr 5rem;\n  height: 100%;\n}\n\n\n\n/* Common */\nh1 {\n  font-size: 1.8rem;\n  padding: 1rem 0;\n}\nh2 {\n  font-size: 1.6rem;\n  \n  padding: 1rem 0;\n  text-align: center;\n  color: blue;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\nli {\n  margin-top: 1rem;\n}\ninput,\nselect,\ntextarea,\nbutton {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border: 0.1rem #a4a4a4 solid;\n  font-size: 1.6rem;\n  font-family: Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.row.center {\n  justify-content: center;\n}\n.row.top {\n  align-items: flex-start;\n}\n.row.start {\n  justify-content: flex-start;\n}\n.col-1 {\n  flex: 1 1 25rem;\n}\n.col-2 {\n  flex: 2 1 50rem;\n}\n.col-3 {\n  flex: 32 1 75rem;\n}\n.min-30 {\n  min-width: 30rem;\n}\n.p-1 {\n  padding: 1rem;\n}\n/* Aside */\naside {\n  position: fixed;\n  width: 30rem;\n  height: 100%;\n  background-color: #efefef;\n  z-index: 1000;\n  transform: translateX(-30rem);\n  transition: all 0.5s;\n}\naside.open {\n  transform: translateX(0);\n}\nbutton.open-sidebar {\n  font-size: 3rem;\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.5rem;\n  background: none;\n  color: #ffffff;\n  cursor: pointer;\n}\nbutton.open-sidebar:hover {\n  border-color: #ffffff;\n}\naside ul {\n  padding: 0;\n  list-style: none;\n}\naside li {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\nbutton.close-sidebar {\n  padding: 0.3rem 0.8rem;\n}\n\n/* Image */\nimg {\n  border-radius: 0.5rem;\n}\nimg.small {\n  max-width: 5rem;\n  width: 100%;\n}\nimg.medium {\n  max-width: 29rem;\n  width: 100%;\n}\nimg.large {\n  width: 100%;\n}\n\n/* Card */\n.card {\n  border: 0.1rem #c0c0c0 solid;\n  background-color: #f8f8f8;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n.card-body {\n  padding: 1rem;\n}\n.card-body > * {\n  margin-bottom: 0.5rem;\n}\n.price {\n  font-size: 2rem;\n}\n/* Rating */\n.rating span {\n  color: #f0c040;\n  margin: 0.1rem;\n}\n.rating span:last-child {\n  color: #404040;\n}\n/* Alert */\n.loading {\n  display: block !important;\n}\n.success {\n  color: #20a020;\n}\n.danger {\n  color: #a02020;\n}\n.alert {\n  padding: 1rem;\n  border: 0.1rem solid transparent;\n  border-radius: 0.5rem;\n}\n.alert-info {\n  color: #2020a0;\n  background-color: #e0e0ff;\n}\n.alert-danger {\n  color: #a02020;\n  background-color: #ffe0e0;\n}\n.alert-success {\n  color: #20a020;\n  background-color: #eeffe0;\n}\n/* Form */\n.form {\n  max-width: 60rem;\n  margin: 0 auto;\n}\n.form > div {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n}\n.form label {\n  margin: 1rem 0;\n}\n/* Dropdown */\n.dropdown {\n  display: inline-block;\n  position: relative;\n}\n.dropdown-content {\n  position: absolute;\n  display: none;\n  right: 0;\n  min-width: 12rem;\n  padding: 1rem;\n  z-index: 1;\n  background-color: #203040;\n  margin: 0;\n  margin-top: 0.4rem;\n  border-radius: 0.5rem;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n/* Checkout Steps */\n.checkout-steps > div {\n  border-top: 0.3rem #c0c0c0 solid;\n  color: #c0c0c0;\n  flex: 1 1;\n  padding: 1rem;\n  font-weight: bold;\n}\n.checkout-steps > div.active {\n  border-top-color: #f08000;\n  color: #f08000;\n}\n/* Table */\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table tbody tr:nth-of-type(odd) {\n  background-color: #f4f4f4;\n}\n.table td,\n.table th {\n  text-align: left;\n  border: 0.1rem solid #e4e4e4;\n  padding: 0.5rem;\n}\n.table button {\n  margin: 0 0.2rem;\n}\n/* Carousel */\n.carousel .slide img {\n  max-width: 30rem;\n}\n\n/* Search */\n.search button {\n  border-radius: 0 0.5rem 0.5rem 0;\n  border-right: none;\n  margin-right: 0.5rem;\n}\n.search input {\n  border-radius: 0.5rem 0 0 0.5rem;\n  border-right: none;\n  margin-left: 0.5rem;\n}\n.active {\n  font-weight: bold;\n}\n\n/* Map */\n.full-container {\n  margin: -1rem;\n  height: calc(100% + 2rem);\n}\n\n/* Dashboard */\n\n.summary > li {\n  border: 0.1rem #c0c0c0 solid;\n  margin: 2rem;\n  border-radius: 0.5rem;\n  flex: 1 1 20rem;\n}\n.summary-title {\n  font-size: 2rem;\n  padding: 1rem;\n}\n.summary-body {\n  font-size: 4rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.summary-title.color1 {\n  background-color: #f0e0e0;\n}\n.summary-title.color2 {\n  background-color: #e0f0e0;\n}\n.summary-title.color3 {\n  background-color: #e0e0f0;\n}\n\n/* Chatbox */\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":";AACA;EACE,gBAAgB,EAAE,8BAA8B;EAChD,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,aAAa;EACb,iBAAiB;EACjB,yCAAyC;EACzC,mCAAmC;EACnC,kCAAkC;AACpC;AACA;EACE,YAAY;AACd;;AAEA,WAAW;AACX;EACE,aAAa;EACb;;;YAGU;EACV,0BAA0B;EAC1B,iCAAiC;EACjC,YAAY;AACd;;;;AAIA,WAAW;AACX;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,iBAAiB;;EAEjB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;AACA;;;;EAIE,aAAa;EACb,qBAAqB;EACrB,4BAA4B;EAC5B,iBAAiB;EACjB,yCAAyC;EACzC,mCAAmC;EACnC,kCAAkC;AACpC;;;AAGA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA,UAAU;AACV;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,6BAA6B;EAC7B,oBAAoB;AACtB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;AACA;EACE,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,WAAW;AACb;;AAEA,SAAS;AACT;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;AACjB;AACA,WAAW;AACX;EACE,cAAc;EACd,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA,UAAU;AACV;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,gCAAgC;EAChC,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA,SAAS;AACT;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA,aAAa;AACb;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,yBAAyB;EACzB,SAAS;EACT,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA,mBAAmB;AACnB;EACE,gCAAgC;EAChC,cAAc;EACd,SAAO;EACP,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA,UAAU;AACV;EACE,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;EAChB,4BAA4B;EAC5B,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA,aAAa;AACb;EACE,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,gCAAgC;EAChC,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;;AAEA,QAAQ;AACR;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA,cAAc;;AAEd;EACE,4BAA4B;EAC5B,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA,YAAY","sourcesContent":["\nhtml {\n  font-size: 62.5%; /* 16px x 62.5 = 10px = 1rem */\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  height: 100vh;\n  font-size: 1.6rem;\n  font-family: Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#root {\n  height: 100%;\n}\n\n/* Layout */\n.grid-container {\n  display: grid;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  grid-template-columns: 1fr;\n  grid-template-rows: 5rem 1fr 5rem;\n  height: 100%;\n}\n\n\n\n/* Common */\nh1 {\n  font-size: 1.8rem;\n  padding: 1rem 0;\n}\nh2 {\n  font-size: 1.6rem;\n  \n  padding: 1rem 0;\n  text-align: center;\n  color: blue;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\nli {\n  margin-top: 1rem;\n}\ninput,\nselect,\ntextarea,\nbutton {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border: 0.1rem #a4a4a4 solid;\n  font-size: 1.6rem;\n  font-family: Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.row.center {\n  justify-content: center;\n}\n.row.top {\n  align-items: flex-start;\n}\n.row.start {\n  justify-content: flex-start;\n}\n.col-1 {\n  flex: 1 1 25rem;\n}\n.col-2 {\n  flex: 2 1 50rem;\n}\n.col-3 {\n  flex: 32 1 75rem;\n}\n.min-30 {\n  min-width: 30rem;\n}\n.p-1 {\n  padding: 1rem;\n}\n/* Aside */\naside {\n  position: fixed;\n  width: 30rem;\n  height: 100%;\n  background-color: #efefef;\n  z-index: 1000;\n  transform: translateX(-30rem);\n  transition: all 0.5s;\n}\naside.open {\n  transform: translateX(0);\n}\nbutton.open-sidebar {\n  font-size: 3rem;\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.5rem;\n  background: none;\n  color: #ffffff;\n  cursor: pointer;\n}\nbutton.open-sidebar:hover {\n  border-color: #ffffff;\n}\naside ul {\n  padding: 0;\n  list-style: none;\n}\naside li {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\nbutton.close-sidebar {\n  padding: 0.3rem 0.8rem;\n}\n\n/* Image */\nimg {\n  border-radius: 0.5rem;\n}\nimg.small {\n  max-width: 5rem;\n  width: 100%;\n}\nimg.medium {\n  max-width: 29rem;\n  width: 100%;\n}\nimg.large {\n  width: 100%;\n}\n\n/* Card */\n.card {\n  border: 0.1rem #c0c0c0 solid;\n  background-color: #f8f8f8;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n.card-body {\n  padding: 1rem;\n}\n.card-body > * {\n  margin-bottom: 0.5rem;\n}\n.price {\n  font-size: 2rem;\n}\n/* Rating */\n.rating span {\n  color: #f0c040;\n  margin: 0.1rem;\n}\n.rating span:last-child {\n  color: #404040;\n}\n/* Alert */\n.loading {\n  display: block !important;\n}\n.success {\n  color: #20a020;\n}\n.danger {\n  color: #a02020;\n}\n.alert {\n  padding: 1rem;\n  border: 0.1rem solid transparent;\n  border-radius: 0.5rem;\n}\n.alert-info {\n  color: #2020a0;\n  background-color: #e0e0ff;\n}\n.alert-danger {\n  color: #a02020;\n  background-color: #ffe0e0;\n}\n.alert-success {\n  color: #20a020;\n  background-color: #eeffe0;\n}\n/* Form */\n.form {\n  max-width: 60rem;\n  margin: 0 auto;\n}\n.form > div {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n}\n.form label {\n  margin: 1rem 0;\n}\n/* Dropdown */\n.dropdown {\n  display: inline-block;\n  position: relative;\n}\n.dropdown-content {\n  position: absolute;\n  display: none;\n  right: 0;\n  min-width: 12rem;\n  padding: 1rem;\n  z-index: 1;\n  background-color: #203040;\n  margin: 0;\n  margin-top: 0.4rem;\n  border-radius: 0.5rem;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n/* Checkout Steps */\n.checkout-steps > div {\n  border-top: 0.3rem #c0c0c0 solid;\n  color: #c0c0c0;\n  flex: 1;\n  padding: 1rem;\n  font-weight: bold;\n}\n.checkout-steps > div.active {\n  border-top-color: #f08000;\n  color: #f08000;\n}\n/* Table */\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table tbody tr:nth-of-type(odd) {\n  background-color: #f4f4f4;\n}\n.table td,\n.table th {\n  text-align: left;\n  border: 0.1rem solid #e4e4e4;\n  padding: 0.5rem;\n}\n.table button {\n  margin: 0 0.2rem;\n}\n/* Carousel */\n.carousel .slide img {\n  max-width: 30rem;\n}\n\n/* Search */\n.search button {\n  border-radius: 0 0.5rem 0.5rem 0;\n  border-right: none;\n  margin-right: 0.5rem;\n}\n.search input {\n  border-radius: 0.5rem 0 0 0.5rem;\n  border-right: none;\n  margin-left: 0.5rem;\n}\n.active {\n  font-weight: bold;\n}\n\n/* Map */\n.full-container {\n  margin: -1rem;\n  height: calc(100% + 2rem);\n}\n\n/* Dashboard */\n\n.summary > li {\n  border: 0.1rem #c0c0c0 solid;\n  margin: 2rem;\n  border-radius: 0.5rem;\n  flex: 1 1 20rem;\n}\n.summary-title {\n  font-size: 2rem;\n  padding: 1rem;\n}\n.summary-body {\n  font-size: 4rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.summary-title.color1 {\n  background-color: #f0e0e0;\n}\n.summary-title.color2 {\n  background-color: #e0f0e0;\n}\n.summary-title.color3 {\n  background-color: #e0e0f0;\n}\n\n/* Chatbox */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/1-data.js":
/*!***********************!*\
  !*** ./src/1-data.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const data = {
  products: [{
    _id: '1',
    name: 'I am a Product',
    category: 'Shoes',
    image: '/images/p1.jpeg',
    price: 850
  }, {
    _id: '2',
    name: 'I am a Product',
    category: 'Shoes',
    image: '/images/p2.jpeg',
    price: 1500
  }, {
    _id: '3',
    name: 'I am a Product',
    category: 'Shoes',
    image: '/images/p3.jpeg',
    price: 2500
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _1_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1-data */ "./src/1-data.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/pratyushapv/Documents/DonateKart/donatekart/src/App.js";





function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "grid-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("header", {
      className: "row"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "row center",
          children: _1_data__WEBPACK_IMPORTED_MODULE_1__["default"].products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              className: "medium",
              src: product.image,
              alt: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
              children: product.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this)]
          }, product._id, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 19
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            children: "INR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            children: "USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/pratyushapv/Documents/DonateKart/donatekart/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/pratyushapv/Documents/DonateKart/donatekart/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/pratyushapv/Documents/DonateKart/donatekart/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/pratyushapv/Documents/DonateKart/donatekart/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/pratyushapv/Documents/DonateKart/donatekart/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map