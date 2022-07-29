"use strict";
(self["webpackChunkkanban_board"] = self["webpackChunkkanban_board"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #fff;\r\n  color: #1e1e1e;\r\n  font-size: 14px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(blue, yellow);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.privacy-policy > a {\r\n  color: #009688;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #1e1e1e;\r\n  align-items: center;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  margin-bottom: 50px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-links {\r\n  font-family: 'Open Sans', sans-serif;\r\n  display: flex;\r\n  margin-right: 20px;\r\n  gap: 20px;\r\n  font-size: 19px;\r\n}\r\n\r\n.header-links > a {\r\n  color: #ffffff80;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.header-links > a:hover {\r\n  color: #009688;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n}\r\n\r\n.fas {\r\n  color: #009688;\r\n}\r\n\r\n.media-links {\r\n  border-left: 3px solid white;\r\n  display: flex;\r\n  gap: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.launch-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.launch-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  border: 4px solid #dfe1e6;\r\n  padding-bottom: 15px;\r\n  border-radius: 20px 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.launch-card:hover {\r\n  box-shadow: 0 0 20px 20px #ddd;\r\n}\r\n\r\n.imgHeader {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 250px;\r\n  background-size: cover;\r\n}\r\n\r\n.title {\r\n  padding: 10px;\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.template {\r\n  display: none;\r\n}\r\n\r\n#launch-modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(1px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 7;\r\n  overflow: auto;\r\n  top: 0;\r\n  padding-top: 80px;\r\n}\r\n\r\n#launch-modal .launch-card {\r\n  width: 67%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  background-color: #1e1e1e;\r\n  border-radius: 20px;\r\n}\r\n\r\n#launch-modal .launch-card:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.launch-img {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  font-size: 20px;\r\n  background-color: #009688;\r\n  font-weight: bold;\r\n  width: 4%;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  border: none;\r\n  margin-left: 62.4%;\r\n  border-radius: 15px 50px 25px 5px;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.close:hover {\r\n  color: #fff;\r\n  background-color: red;\r\n}\r\n\r\n.launch-img .content {\r\n  /* background-color: rgba(0, 0, 0, 0.5); */\r\n  padding: 10px;\r\n  margin-top: 367px;\r\n  padding-bottom: 35px;\r\n  margin-bottom: 0;\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n.launch-img .content > h1 {\r\n  text-align: center;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 100px;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  justify-content: center;\r\n  line-height: 1.5;\r\n}\r\n\r\n.details ul {\r\n  list-style: none;\r\n  columns: 2;\r\n}\r\n\r\n#comment ul {\r\n  display: block;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n\r\n.entry {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.entry form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n#txt-visitor {\r\n  padding: 10px;\r\n  width: 186px;\r\n}\r\n\r\n#txt-comment {\r\n  height: 50px;\r\n  padding: 10px;\r\n}\r\n\r\n#btn-save-comment {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 20px 0;\r\n  margin-top: 50px;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  background-color: #1e1e1e;\r\n  color: #fff;\r\n}\r\n\r\n.privacy-policy {\r\n  color: #fff;\r\n  margin-left: 100px;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin-right: 100px;\r\n}\r\n\r\n.createdby {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iDAAiD;EACjD,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,4BAA4B;EAC5B,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oJAAoJ;EACpJ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,0BAA0B;EAC1B,YAAY;EACZ,aAAa;EACb,UAAU;EACV,cAAc;EACd,MAAM;EACN,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oJAAoJ;EACpJ,YAAY;EACZ,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,SAAS;EACT,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,0CAA0C;EAC1C,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,mCAAmC;EACnC,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":["body {\r\n  background-color: #fff;\r\n  color: #1e1e1e;\r\n  font-size: 14px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(blue, yellow);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.privacy-policy > a {\r\n  color: #009688;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #1e1e1e;\r\n  align-items: center;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  margin-bottom: 50px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-links {\r\n  font-family: 'Open Sans', sans-serif;\r\n  display: flex;\r\n  margin-right: 20px;\r\n  gap: 20px;\r\n  font-size: 19px;\r\n}\r\n\r\n.header-links > a {\r\n  color: #ffffff80;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.header-links > a:hover {\r\n  color: #009688;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n}\r\n\r\n.fas {\r\n  color: #009688;\r\n}\r\n\r\n.media-links {\r\n  border-left: 3px solid white;\r\n  display: flex;\r\n  gap: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.launch-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.launch-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  border: 4px solid #dfe1e6;\r\n  padding-bottom: 15px;\r\n  border-radius: 20px 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.launch-card:hover {\r\n  box-shadow: 0 0 20px 20px #ddd;\r\n}\r\n\r\n.imgHeader {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 250px;\r\n  background-size: cover;\r\n}\r\n\r\n.title {\r\n  padding: 10px;\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.template {\r\n  display: none;\r\n}\r\n\r\n#launch-modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(1px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 7;\r\n  overflow: auto;\r\n  top: 0;\r\n  padding-top: 80px;\r\n}\r\n\r\n#launch-modal .launch-card {\r\n  width: 67%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  background-color: #1e1e1e;\r\n  border-radius: 20px;\r\n}\r\n\r\n#launch-modal .launch-card:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.launch-img {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  font-size: 20px;\r\n  background-color: #009688;\r\n  font-weight: bold;\r\n  width: 4%;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  border: none;\r\n  margin-left: 62.4%;\r\n  border-radius: 15px 50px 25px 5px;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.close:hover {\r\n  color: #fff;\r\n  background-color: red;\r\n}\r\n\r\n.launch-img .content {\r\n  /* background-color: rgba(0, 0, 0, 0.5); */\r\n  padding: 10px;\r\n  margin-top: 367px;\r\n  padding-bottom: 35px;\r\n  margin-bottom: 0;\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n.launch-img .content > h1 {\r\n  text-align: center;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 100px;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  justify-content: center;\r\n  line-height: 1.5;\r\n}\r\n\r\n.details ul {\r\n  list-style: none;\r\n  columns: 2;\r\n}\r\n\r\n#comment ul {\r\n  display: block;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n\r\n.entry {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.entry form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n#txt-visitor {\r\n  padding: 10px;\r\n  width: 186px;\r\n}\r\n\r\n#txt-comment {\r\n  height: 50px;\r\n  padding: 10px;\r\n}\r\n\r\n#btn-save-comment {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 20px 0;\r\n  margin-top: 50px;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  background-color: #1e1e1e;\r\n  color: #fff;\r\n}\r\n\r\n.privacy-policy {\r\n  color: #fff;\r\n  margin-left: 100px;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin-right: 100px;\r\n}\r\n\r\n.createdby {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_launchUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/launchUI.js */ "./src/modules/launchUI.js");



window.addEventListener('load', async () => {
  _modules_launchUI_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderLaunches();
});

/***/ }),

/***/ "./src/modules/InvolvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/InvolvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementAPI)
/* harmony export */ });
/* harmony import */ var _Modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.js */ "./src/modules/Modals.js");


class InvolvementAPI {
  static commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1ry5uwpFLkvr8WR9TJVB/comments';

  static likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1ry5uwpFLkvr8WR9TJVB/likes';

  static fetchComments = async (launchId) => {
    const comments = [];
    await fetch(`${InvolvementAPI.commentsURL}?item_id=${launchId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        json.forEach((c) => {
          comments.push(new _Modals_js__WEBPACK_IMPORTED_MODULE_0__.Comment(c.creation_date, c.username, c.comment));
        });
      });
    return comments;
  }

  static postComment = async (launchId, newcomment) => {
    await fetch(InvolvementAPI.commentsURL, {

      method: 'POST',
      body: JSON.stringify({
        item_id: launchId,
        username: newcomment.username,
        comment: newcomment.comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static fetchAllLikes = async () => fetch(InvolvementAPI.likesURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })

  static postLike = async (launchId) => {
    await fetch(InvolvementAPI.likesURL, {

      method: 'POST',
      body: JSON.stringify({
        item_id: launchId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}

/***/ }),

/***/ "./src/modules/InvolvementService.js":
/*!*******************************************!*\
  !*** ./src/modules/InvolvementService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementService)
/* harmony export */ });
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/modules/InvolvementAPI.js");


let likesArray = [];

class InvolvementService {
  static getComments = async (launchId) => _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchComments(launchId)

  static getCommentsCount = (comments) => comments.length

  static postComment = async (launchId, newComment) => {
    await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].postComment(launchId, newComment);
  }

  static getAllLikes = async () => {
    likesArray = await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchAllLikes();
  }

  static getLikes = async (launchId) => {
    if (likesArray.length < 1) { await this.getAllLikes(); }
    const record = likesArray.find((l) => l.item_id === launchId);
    return (record != null) ? record.likes : 0;
  }

  static postLike = async (launchId) => {
    await _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].postLike(launchId);
  }
}

/***/ }),

/***/ "./src/modules/InvolvementUI.js":
/*!**************************************!*\
  !*** ./src/modules/InvolvementUI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementUI)
/* harmony export */ });
/* harmony import */ var _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementService.js */ "./src/modules/InvolvementService.js");
/* harmony import */ var _Modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modals.js */ "./src/modules/Modals.js");



const getDetails = document.querySelector('.commentList');
const hiddenLaunchId = document.getElementById('launch-id');
const commentsCount = document.querySelector('.comments-count');
const txtname = document.getElementById('txt-visitor');
const txtcomment = document.getElementById('txt-comment');
const btnSaveComment = document.getElementById('btn-save-comment');
btnSaveComment.addEventListener('click', async () => { await InvolvementUI.postComment(); });

class InvolvementUI {
  static renderComments = async (launchId) => {
    hiddenLaunchId.value = launchId;
    getDetails.innerHTML = ' ';
    await _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(launchId)
      .then((comments) => {
        commentsCount.innerText = _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCommentsCount(comments);
        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.innerText = `${comment.creation_date} ${comment.username} ${comment.comment}`;
          getDetails.append(li);
        });
      });
  }

  static clearComments = () => {
    commentsCount.innerText = 0;
    txtname.value = '';
    txtcomment.value = '';
    hiddenLaunchId.value = '';
  }

  static postComment = async () => {
    const launchId = hiddenLaunchId.value;
    if (txtname.value !== '' && txtcomment.value !== '') {
      await _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__["default"].postComment(launchId,
        new _Modals_js__WEBPACK_IMPORTED_MODULE_1__.Comment('', txtname.value, txtcomment.value));
    }

    InvolvementUI.clearComments();
    InvolvementUI.renderComments(launchId);
  }

  static renderLikes = (element, launchId) => {
    _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLikes(launchId).then((likes) => {
      element.innerText = likes;
    });
  }

  static postLike = (element, launchId) => {
    _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__["default"].postLike(launchId).then(() => {
      element.innerText = parseInt(element.innerText, 10) + 1;
    });
  };
}

/***/ }),

/***/ "./src/modules/LaunchService.js":
/*!**************************************!*\
  !*** ./src/modules/LaunchService.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LaunchService)
/* harmony export */ });
/* harmony import */ var _launchAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launchAPI.js */ "./src/modules/launchAPI.js");


class LaunchService {
  static LaunchList = [];

  static getLaunches = async () => {
    if (LaunchService.LaunchList.length < 1) {
      LaunchService.LaunchList = await _launchAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchLaunches();
    }
    return LaunchService.LaunchList;
  }

  static getLaunch = (launchId) => LaunchService.LaunchList.find((l) => l.id === launchId)

  static getLauchCount = (launches) => launches.length
}

/***/ }),

/***/ "./src/modules/Modals.js":
/*!*******************************!*\
  !*** ./src/modules/Modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment),
/* harmony export */   "Launch": () => (/* binding */ Launch)
/* harmony export */ });
class Comment {
  constructor(creation_date, username, comment) {
    this.creation_date = creation_date;
    this.username = username;
    this.comment = comment;
  }
}

class Launch {
  likes;

  comments = [];

  constructor(id, name, lsp_name, mission_type, pad, location, image) {
    this.id = id;
    this.name = name;
    this.lsp_name = lsp_name;
    this.mission_type = mission_type;
    this.pad = pad;
    this.location = location;
    this.image = image;
  }
}

/***/ }),

/***/ "./src/modules/launchAPI.js":
/*!**********************************!*\
  !*** ./src/modules/launchAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LauchAPI)
/* harmony export */ });
/* harmony import */ var _Modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.js */ "./src/modules/Modals.js");


class LauchAPI {
  static launchAPIURL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';

  static fetchLaunches = async () => {
    if (localStorage.getItem('launches') == null) {
      const launchArr = [];
      await fetch(LauchAPI.launchAPIURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          json.results.forEach((l) => {
            launchArr.push(
              new _Modals_js__WEBPACK_IMPORTED_MODULE_0__.Launch(l.id, l.name, l.lsp_name, l.mission_type, l.pad, l.location, l.image),
            );
          });
        });

      const dataString = JSON.stringify(launchArr);
      localStorage.setItem('launches', dataString);
    }
    return JSON.parse(localStorage.getItem('launches'));
  }
}

/***/ }),

/***/ "./src/modules/launchUI.js":
/*!*********************************!*\
  !*** ./src/modules/launchUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LaunchUI)
/* harmony export */ });
/* harmony import */ var _InvolvementUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementUI.js */ "./src/modules/InvolvementUI.js");
/* harmony import */ var _LaunchService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaunchService.js */ "./src/modules/LaunchService.js");



const launchCardTemplate = document.querySelector('.launch-card.template');
const launchCount = document.querySelector('.launch-count');
const launchList = document.querySelector('.launch-list');
const launchModal = document.getElementById('launch-modal');
const img = launchModal.querySelector('.launch-img');
const h1 = launchModal.querySelector('h1');
const lsp = launchModal.querySelector('.lsp');
const mission = launchModal.querySelector('.mission');
const pad = launchModal.querySelector('.pad');
const location = launchModal.querySelector('.location');
const btnClose = document.querySelector('.close');
btnClose.addEventListener('click', () => LaunchUI.closeModal());

class LaunchUI {
  static renderLaunches = () => {
    _LaunchService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLaunches().then((launches) => {
      launchCount.innerText = _LaunchService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLauchCount(launches);
      launches.forEach((launch) => {
        const launchCard = launchCardTemplate.cloneNode(true);
        launchCard.className = 'launch-card';

        const imgHeader = launchCard.getElementsByClassName('imgHeader')[0];
        imgHeader.style.backgroundImage = `url('${launch.image}')`;

        const h3 = launchCard.getElementsByTagName('h3')[0];
        h3.innerText = launch.name;

        const btnComment = launchCard.querySelector('.comment');
        btnComment.addEventListener('click', () => { LaunchUI.showModal(launch.id); });

        const btnReserve = launchCard.querySelector('.reserve');
        btnReserve.addEventListener('click', () => { LaunchUI.showModal(launch.id); });

        const likesCount = launchCard.querySelector('.likes span');
        _InvolvementUI_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderLikes(likesCount, launch.id);
        const likeBtn = launchCard.querySelector('.likes i');
        likeBtn.addEventListener('click', () => _InvolvementUI_js__WEBPACK_IMPORTED_MODULE_0__["default"].postLike(likesCount, launch.id));

        launchList.appendChild(launchCard);
      });
    });
  }

  static showModal = (launchId) => {
    const launchdata = _LaunchService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLaunch(launchId);

    img.style.backgroundImage = `url('${launchdata.image}')`;
    h1.innerText = launchdata.name;

    lsp.innerText = launchdata.lsp_name;
    mission.innerText = launchdata.mission_type;
    pad.innerText = launchdata.pad;
    location.innerText = launchdata.location;

    _InvolvementUI_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderComments(launchId);
    launchModal.style.display = 'block';
  }

  static closeModal = () => {
    _InvolvementUI_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearComments();
    launchModal.style.display = 'none';
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxh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RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJxQzs7QUFFdEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFNO0FBQ3hCO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrQztBQUNBOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLElBQUkscUVBQXlCO0FBQzdCLDhCQUE4Qix1RUFBMkI7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELGFBQWE7O0FBRS9EO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsZ0NBQWdDOztBQUVyRjtBQUNBLHFEQUFxRCxnQ0FBZ0M7O0FBRXJGO0FBQ0EsUUFBUSxxRUFBeUI7QUFDakM7QUFDQSxnREFBZ0Qsa0VBQXNCOztBQUV0RTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1QkFBdUIsbUVBQXVCOztBQUU5Qyx3Q0FBd0MsaUJBQWlCO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksd0VBQTRCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVFQUEyQjtBQUMvQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0ludm9sdmVtZW50U2VydmljZS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9JbnZvbHZlbWVudFVJLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0xhdW5jaFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvTW9kYWxzLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL2xhdW5jaEFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9sYXVuY2hVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMWUxZTFlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyA+IHAge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYmx1ZSwgeWVsbG93KTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeS1wb2xpY3kgPiBhIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3MgPiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mYXMge1xcclxcbiAgY29sb3I6ICMwMDk2ODg7XFxyXFxufVxcclxcblxcclxcbi5tZWRpYS1saW5rcyB7XFxyXFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBncmlkLWdhcDogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2RmZTFlNjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDIwcHggI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3BhY2VsYXVuY2hub3ctcHJvZC1lYXN0Lm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9tZWRpYS9sYXVuY2hlcl9pbWFnZXMvZmFsY29uXzlfYmxvY2tfX2ltYWdlXzIwMjEwNTA2MDYwODMxLmpwZycpO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNsYXVuY2gtbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDc7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIC5sYXVuY2gtY2FyZCB7XFxyXFxuICB3aWR0aDogNjclO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIC5sYXVuY2gtY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3BhY2VsYXVuY2hub3ctcHJvZC1lYXN0Lm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9tZWRpYS9sYXVuY2hlcl9pbWFnZXMvZmFsY29uXzlfYmxvY2tfX2ltYWdlXzIwMjEwNTA2MDYwODMxLmpwZycpO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2Mi40JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweCAyNXB4IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcgLmNvbnRlbnQge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDM2N3B4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtaW1nIC5jb250ZW50ID4gaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW5zOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB1bCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LXZpc2l0b3Ige1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxODZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC1jb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNidG4tc2F2ZS1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5LXBvbGljeSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVkYnkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFD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XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMxZTFlMWU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvID4gcCB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChibHVlLCB5ZWxsb3cpO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5LXBvbGljeSA+IGEge1xcclxcbiAgY29sb3I6ICMwMDk2ODg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMnB4IDhweCAycHggIzQyNDI0MjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3Mge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1saW5rcyA+IGEge1xcclxcbiAgY29sb3I6ICNmZmZmZmY4MDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3MgPiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhcyB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGlhLWxpbmtzIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZGZlMWU2O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMjBweCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zcGFjZWxhdW5jaG5vdy1wcm9kLWVhc3QubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL21lZGlhL2xhdW5jaGVyX2ltYWdlcy9mYWxjb25fOV9ibG9ja19faW1hZ2VfMjAyMTA1MDYwNjA4MzEuanBnJyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogNztcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbiNsYXVuY2gtbW9kYWwgLmxhdW5jaC1jYXJkIHtcXHJcXG4gIHdpZHRoOiA2NyU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsYXVuY2gtbW9kYWwgLmxhdW5jaC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtaW1nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zcGFjZWxhdW5jaG5vdy1wcm9kLWVhc3QubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL21lZGlhL2xhdW5jaGVyX2ltYWdlcy9mYWxjb25fOV9ibG9ja19faW1hZ2VfMjAyMTA1MDYwNjA4MzEuanBnJyk7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiA0JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYyLjQlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4IDI1cHggNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyAuY29udGVudCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzY3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcgLmNvbnRlbnQgPiBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGNvbHVtbnM6IDI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbiN0eHQtdmlzaXRvciB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDE4NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LWNvbW1lbnQge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bi1zYXZlLWNvbW1lbnQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMnB4IDhweCAycHggIzQyNDI0MjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaXZhY3ktcG9saWN5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZWRieSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMYXVuY2hVSSBmcm9tICcuL21vZHVsZXMvbGF1bmNoVUkuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgTGF1bmNoVUkucmVuZGVyTGF1bmNoZXMoKTtcbn0pOyIsImltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuL01vZGFscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIHtcbiAgc3RhdGljIGNvbW1lbnRzVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzFyeTV1d3BGTGt2cjhXUjlUSlZCL2NvbW1lbnRzJztcblxuICBzdGF0aWMgbGlrZXNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXJ5NXV3cEZMa3ZyOFdSOVRKVkIvbGlrZXMnO1xuXG4gIHN0YXRpYyBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XG4gICAgY29uc3QgY29tbWVudHMgPSBbXTtcbiAgICBhd2FpdCBmZXRjaChgJHtJbnZvbHZlbWVudEFQSS5jb21tZW50c1VSTH0/aXRlbV9pZD0ke2xhdW5jaElkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGpzb24uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgIGNvbW1lbnRzLnB1c2gobmV3IENvbW1lbnQoYy5jcmVhdGlvbl9kYXRlLCBjLnVzZXJuYW1lLCBjLmNvbW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gY29tbWVudHM7XG4gIH1cblxuICBzdGF0aWMgcG9zdENvbW1lbnQgPSBhc3luYyAobGF1bmNoSWQsIG5ld2NvbW1lbnQpID0+IHtcbiAgICBhd2FpdCBmZXRjaChJbnZvbHZlbWVudEFQSS5jb21tZW50c1VSTCwge1xuXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogbGF1bmNoSWQsXG4gICAgICAgIHVzZXJuYW1lOiBuZXdjb21tZW50LnVzZXJuYW1lLFxuICAgICAgICBjb21tZW50OiBuZXdjb21tZW50LmNvbW1lbnQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZmV0Y2hBbGxMaWtlcyA9IGFzeW5jICgpID0+IGZldGNoKEludm9sdmVtZW50QVBJLmxpa2VzVVJMKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG5cbiAgc3RhdGljIHBvc3RMaWtlID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goSW52b2x2ZW1lbnRBUEkubGlrZXNVUkwsIHtcblxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGxhdW5jaElkLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xuXG5sZXQgbGlrZXNBcnJheSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudFNlcnZpY2Uge1xuICBzdGF0aWMgZ2V0Q29tbWVudHMgPSBhc3luYyAobGF1bmNoSWQpID0+IEludm9sdmVtZW50QVBJLmZldGNoQ29tbWVudHMobGF1bmNoSWQpXG5cbiAgc3RhdGljIGdldENvbW1lbnRzQ291bnQgPSAoY29tbWVudHMpID0+IGNvbW1lbnRzLmxlbmd0aFxuXG4gIHN0YXRpYyBwb3N0Q29tbWVudCA9IGFzeW5jIChsYXVuY2hJZCwgbmV3Q29tbWVudCkgPT4ge1xuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLnBvc3RDb21tZW50KGxhdW5jaElkLCBuZXdDb21tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBsaWtlc0FycmF5ID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZmV0Y2hBbGxMaWtlcygpO1xuICB9XG5cbiAgc3RhdGljIGdldExpa2VzID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XG4gICAgaWYgKGxpa2VzQXJyYXkubGVuZ3RoIDwgMSkgeyBhd2FpdCB0aGlzLmdldEFsbExpa2VzKCk7IH1cbiAgICBjb25zdCByZWNvcmQgPSBsaWtlc0FycmF5LmZpbmQoKGwpID0+IGwuaXRlbV9pZCA9PT0gbGF1bmNoSWQpO1xuICAgIHJldHVybiAocmVjb3JkICE9IG51bGwpID8gcmVjb3JkLmxpa2VzIDogMDtcbiAgfVxuXG4gIHN0YXRpYyBwb3N0TGlrZSA9IGFzeW5jIChsYXVuY2hJZCkgPT4ge1xuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLnBvc3RMaWtlKGxhdW5jaElkKTtcbiAgfVxufSIsImltcG9ydCBJbnZvbHZlbWVudFNlcnZpY2UgZnJvbSAnLi9JbnZvbHZlbWVudFNlcnZpY2UuanMnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vTW9kYWxzLmpzJztcblxuY29uc3QgZ2V0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50TGlzdCcpO1xuY29uc3QgaGlkZGVuTGF1bmNoSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF1bmNoLWlkJyk7XG5jb25zdCBjb21tZW50c0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvdW50Jyk7XG5jb25zdCB0eHRuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC12aXNpdG9yJyk7XG5jb25zdCB0eHRjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1jb21tZW50Jyk7XG5jb25zdCBidG5TYXZlQ29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2F2ZS1jb21tZW50Jyk7XG5idG5TYXZlQ29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHsgYXdhaXQgSW52b2x2ZW1lbnRVSS5wb3N0Q29tbWVudCgpOyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRVSSB7XG4gIHN0YXRpYyByZW5kZXJDb21tZW50cyA9IGFzeW5jIChsYXVuY2hJZCkgPT4ge1xuICAgIGhpZGRlbkxhdW5jaElkLnZhbHVlID0gbGF1bmNoSWQ7XG4gICAgZ2V0RGV0YWlscy5pbm5lckhUTUwgPSAnICc7XG4gICAgYXdhaXQgSW52b2x2ZW1lbnRTZXJ2aWNlLmdldENvbW1lbnRzKGxhdW5jaElkKVxuICAgICAgLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgICAgIGNvbW1lbnRzQ291bnQuaW5uZXJUZXh0ID0gSW52b2x2ZW1lbnRTZXJ2aWNlLmdldENvbW1lbnRzQ291bnQoY29tbWVudHMpO1xuICAgICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfSAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgICAgICAgIGdldERldGFpbHMuYXBwZW5kKGxpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbW1lbnRzQ291bnQuaW5uZXJUZXh0ID0gMDtcbiAgICB0eHRuYW1lLnZhbHVlID0gJyc7XG4gICAgdHh0Y29tbWVudC52YWx1ZSA9ICcnO1xuICAgIGhpZGRlbkxhdW5jaElkLnZhbHVlID0gJyc7XG4gIH1cblxuICBzdGF0aWMgcG9zdENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGF1bmNoSWQgPSBoaWRkZW5MYXVuY2hJZC52YWx1ZTtcbiAgICBpZiAodHh0bmFtZS52YWx1ZSAhPT0gJycgJiYgdHh0Y29tbWVudC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGF3YWl0IEludm9sdmVtZW50U2VydmljZS5wb3N0Q29tbWVudChsYXVuY2hJZCxcbiAgICAgICAgbmV3IENvbW1lbnQoJycsIHR4dG5hbWUudmFsdWUsIHR4dGNvbW1lbnQudmFsdWUpKTtcbiAgICB9XG5cbiAgICBJbnZvbHZlbWVudFVJLmNsZWFyQ29tbWVudHMoKTtcbiAgICBJbnZvbHZlbWVudFVJLnJlbmRlckNvbW1lbnRzKGxhdW5jaElkKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJMaWtlcyA9IChlbGVtZW50LCBsYXVuY2hJZCkgPT4ge1xuICAgIEludm9sdmVtZW50U2VydmljZS5nZXRMaWtlcyhsYXVuY2hJZCkudGhlbigobGlrZXMpID0+IHtcbiAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gbGlrZXM7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcG9zdExpa2UgPSAoZWxlbWVudCwgbGF1bmNoSWQpID0+IHtcbiAgICBJbnZvbHZlbWVudFNlcnZpY2UucG9zdExpa2UobGF1bmNoSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBwYXJzZUludChlbGVtZW50LmlubmVyVGV4dCwgMTApICsgMTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgTGF1Y2hBUEkgZnJvbSAnLi9sYXVuY2hBUEkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVuY2hTZXJ2aWNlIHtcbiAgc3RhdGljIExhdW5jaExpc3QgPSBbXTtcblxuICBzdGF0aWMgZ2V0TGF1bmNoZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKExhdW5jaFNlcnZpY2UuTGF1bmNoTGlzdC5sZW5ndGggPCAxKSB7XG4gICAgICBMYXVuY2hTZXJ2aWNlLkxhdW5jaExpc3QgPSBhd2FpdCBMYXVjaEFQSS5mZXRjaExhdW5jaGVzKCk7XG4gICAgfVxuICAgIHJldHVybiBMYXVuY2hTZXJ2aWNlLkxhdW5jaExpc3Q7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGF1bmNoID0gKGxhdW5jaElkKSA9PiBMYXVuY2hTZXJ2aWNlLkxhdW5jaExpc3QuZmluZCgobCkgPT4gbC5pZCA9PT0gbGF1bmNoSWQpXG5cbiAgc3RhdGljIGdldExhdWNoQ291bnQgPSAobGF1bmNoZXMpID0+IGxhdW5jaGVzLmxlbmd0aFxufSIsImV4cG9ydCBjbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoY3JlYXRpb25fZGF0ZSwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0aW9uX2RhdGUgPSBjcmVhdGlvbl9kYXRlO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2gge1xuICBsaWtlcztcblxuICBjb21tZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsc3BfbmFtZSwgbWlzc2lvbl90eXBlLCBwYWQsIGxvY2F0aW9uLCBpbWFnZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubHNwX25hbWUgPSBsc3BfbmFtZTtcbiAgICB0aGlzLm1pc3Npb25fdHlwZSA9IG1pc3Npb25fdHlwZTtcbiAgICB0aGlzLnBhZCA9IHBhZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG59IiwiaW1wb3J0IHsgTGF1bmNoIH0gZnJvbSAnLi9Nb2RhbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVjaEFQSSB7XG4gIHN0YXRpYyBsYXVuY2hBUElVUkwgPSAnaHR0cHM6Ly9sbC50aGVzcGFjZWRldnMuY29tLzIuMi4wL2xhdW5jaC91cGNvbWluZy8/bW9kZT1saXN0JnN0YXR1cz04Jm9yZGVyaW5nPXdpbmRvd19lbmQnO1xuXG4gIHN0YXRpYyBmZXRjaExhdW5jaGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF1bmNoZXMnKSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBsYXVuY2hBcnIgPSBbXTtcbiAgICAgIGF3YWl0IGZldGNoKExhdWNoQVBJLmxhdW5jaEFQSVVSTClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGpzb24ucmVzdWx0cy5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgICAgICBsYXVuY2hBcnIucHVzaChcbiAgICAgICAgICAgICAgbmV3IExhdW5jaChsLmlkLCBsLm5hbWUsIGwubHNwX25hbWUsIGwubWlzc2lvbl90eXBlLCBsLnBhZCwgbC5sb2NhdGlvbiwgbC5pbWFnZSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxhdW5jaEFycik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF1bmNoZXMnLCBkYXRhU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhdW5jaGVzJykpO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50VUkgZnJvbSAnLi9JbnZvbHZlbWVudFVJLmpzJztcbmltcG9ydCBMYXVuY2hTZXJ2aWNlIGZyb20gJy4vTGF1bmNoU2VydmljZS5qcyc7XG5cbmNvbnN0IGxhdW5jaENhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtY2FyZC50ZW1wbGF0ZScpO1xuY29uc3QgbGF1bmNoQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF1bmNoLWNvdW50Jyk7XG5jb25zdCBsYXVuY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdW5jaC1saXN0Jyk7XG5jb25zdCBsYXVuY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXVuY2gtbW9kYWwnKTtcbmNvbnN0IGltZyA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtaW1nJyk7XG5jb25zdCBoMSA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5jb25zdCBsc3AgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcubHNwJyk7XG5jb25zdCBtaXNzaW9uID0gbGF1bmNoTW9kYWwucXVlcnlTZWxlY3RvcignLm1pc3Npb24nKTtcbmNvbnN0IHBhZCA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5wYWQnKTtcbmNvbnN0IGxvY2F0aW9uID0gbGF1bmNoTW9kYWwucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG5jb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBMYXVuY2hVSS5jbG9zZU1vZGFsKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVuY2hVSSB7XG4gIHN0YXRpYyByZW5kZXJMYXVuY2hlcyA9ICgpID0+IHtcbiAgICBMYXVuY2hTZXJ2aWNlLmdldExhdW5jaGVzKCkudGhlbigobGF1bmNoZXMpID0+IHtcbiAgICAgIGxhdW5jaENvdW50LmlubmVyVGV4dCA9IExhdW5jaFNlcnZpY2UuZ2V0TGF1Y2hDb3VudChsYXVuY2hlcyk7XG4gICAgICBsYXVuY2hlcy5mb3JFYWNoKChsYXVuY2gpID0+IHtcbiAgICAgICAgY29uc3QgbGF1bmNoQ2FyZCA9IGxhdW5jaENhcmRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGxhdW5jaENhcmQuY2xhc3NOYW1lID0gJ2xhdW5jaC1jYXJkJztcblxuICAgICAgICBjb25zdCBpbWdIZWFkZXIgPSBsYXVuY2hDYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ0hlYWRlcicpWzBdO1xuICAgICAgICBpbWdIZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtsYXVuY2guaW1hZ2V9JylgO1xuXG4gICAgICAgIGNvbnN0IGgzID0gbGF1bmNoQ2FyZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDMnKVswXTtcbiAgICAgICAgaDMuaW5uZXJUZXh0ID0gbGF1bmNoLm5hbWU7XG5cbiAgICAgICAgY29uc3QgYnRuQ29tbWVudCA9IGxhdW5jaENhcmQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcbiAgICAgICAgYnRuQ29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTGF1bmNoVUkuc2hvd01vZGFsKGxhdW5jaC5pZCk7IH0pO1xuXG4gICAgICAgIGNvbnN0IGJ0blJlc2VydmUgPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZlJyk7XG4gICAgICAgIGJ0blJlc2VydmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IExhdW5jaFVJLnNob3dNb2RhbChsYXVuY2guaWQpOyB9KTtcblxuICAgICAgICBjb25zdCBsaWtlc0NvdW50ID0gbGF1bmNoQ2FyZC5xdWVyeVNlbGVjdG9yKCcubGlrZXMgc3BhbicpO1xuICAgICAgICBJbnZvbHZlbWVudFVJLnJlbmRlckxpa2VzKGxpa2VzQ291bnQsIGxhdW5jaC5pZCk7XG4gICAgICAgIGNvbnN0IGxpa2VCdG4gPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5saWtlcyBpJyk7XG4gICAgICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBJbnZvbHZlbWVudFVJLnBvc3RMaWtlKGxpa2VzQ291bnQsIGxhdW5jaC5pZCkpO1xuXG4gICAgICAgIGxhdW5jaExpc3QuYXBwZW5kQ2hpbGQobGF1bmNoQ2FyZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93TW9kYWwgPSAobGF1bmNoSWQpID0+IHtcbiAgICBjb25zdCBsYXVuY2hkYXRhID0gTGF1bmNoU2VydmljZS5nZXRMYXVuY2gobGF1bmNoSWQpO1xuXG4gICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bGF1bmNoZGF0YS5pbWFnZX0nKWA7XG4gICAgaDEuaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5uYW1lO1xuXG4gICAgbHNwLmlubmVyVGV4dCA9IGxhdW5jaGRhdGEubHNwX25hbWU7XG4gICAgbWlzc2lvbi5pbm5lclRleHQgPSBsYXVuY2hkYXRhLm1pc3Npb25fdHlwZTtcbiAgICBwYWQuaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5wYWQ7XG4gICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5sb2NhdGlvbjtcblxuICAgIEludm9sdmVtZW50VUkucmVuZGVyQ29tbWVudHMobGF1bmNoSWQpO1xuICAgIGxhdW5jaE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgSW52b2x2ZW1lbnRVSS5jbGVhckNvbW1lbnRzKCk7XG4gICAgbGF1bmNoTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==