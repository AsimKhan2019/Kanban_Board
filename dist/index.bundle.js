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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #fff;\r\n  color: #1e1e1e;\r\n  font-size: 14px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(blue, yellow);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.privacy-policy > a {\r\n  color: #009688;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #1e1e1e;\r\n  align-items: center;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  margin-bottom: 50px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-links {\r\n  font-family: 'Open Sans', sans-serif;\r\n  display: flex;\r\n  margin-right: 20px;\r\n  gap: 20px;\r\n  font-size: 19px;\r\n}\r\n\r\n.header-links > a {\r\n  color: #ffffff80;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.header-links > a:hover {\r\n  color: #009688;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n}\r\n\r\n.fas {\r\n  color: #009688;\r\n}\r\n\r\n.media-links {\r\n  border-left: 3px solid white;\r\n  display: flex;\r\n  gap: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.launch-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.launch-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  border: 4px solid #dfe1e6;\r\n  padding-bottom: 15px;\r\n  border-radius: 20px 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.launch-card:hover {\r\n  box-shadow: 0 0 20px 20px #ddd;\r\n}\r\n\r\n.imgHeader {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 250px;\r\n  background-size: cover;\r\n}\r\n\r\n.title {\r\n  padding: 10px;\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.template {\r\n  display: none;\r\n}\r\n\r\n#launch-modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(1px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 7;\r\n  overflow: auto;\r\n  top: 0;\r\n  padding-top: 80px;\r\n}\r\n\r\n#launch-modal .launch-card {\r\n  width: 67%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  background-color: #1e1e1e;\r\n  border-radius: 20px;\r\n}\r\n\r\n#launch-modal .launch-card:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.launch-img {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  font-size: 20px;\r\n  background-color: #009688;\r\n  font-weight: bold;\r\n  width: 4%;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  border: none;\r\n  margin-left: 62.4%;\r\n  border-radius: 15px 50px 25px 5px;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.close:hover {\r\n  color: #fff;\r\n  background-color: red;\r\n}\r\n\r\n.launch-img .content {\r\n  /* background-color: rgba(0, 0, 0, 0.5); */\r\n  padding: 10px;\r\n  margin-top: 367px;\r\n  padding-bottom: 35px;\r\n  margin-bottom: 0;\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n.launch-img .content > h1 {\r\n  text-align: center;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 100px;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  justify-content: center;\r\n  line-height: 1.5;\r\n}\r\n\r\n.details ul {\r\n  list-style: none;\r\n  columns: 2;\r\n}\r\n\r\n#comment ul {\r\n  display: block;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n\r\n.entry {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.entry form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n#txt-visitor {\r\n  padding: 10px;\r\n  width: 186px;\r\n}\r\n\r\n#txt-comment {\r\n  height: 50px;\r\n  padding: 10px;\r\n}\r\n\r\n#btn-save-comment {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 20px 0;\r\n  margin-top: 50px;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  background-color: #1e1e1e;\r\n  color: #fff;\r\n}\r\n\r\n.privacy-policy {\r\n  color: #fff;\r\n  margin-left: 100px;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin-right: 100px;\r\n}\r\n\r\n.createdby {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: #fff;\r\n  color: #1e1e1e;\r\n  font-size: 14px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(blue, yellow);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.privacy-policy > a {\r\n  color: #009688;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #1e1e1e;\r\n  align-items: center;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  margin-bottom: 50px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-links {\r\n  font-family: 'Open Sans', sans-serif;\r\n  display: flex;\r\n  margin-right: 20px;\r\n  gap: 20px;\r\n  font-size: 19px;\r\n}\r\n\r\n.header-links > a {\r\n  color: #ffffff80;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.header-links > a:hover {\r\n  color: #009688;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n}\r\n\r\n.fas {\r\n  color: #009688;\r\n}\r\n\r\n.media-links {\r\n  border-left: 3px solid white;\r\n  display: flex;\r\n  gap: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.launch-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.launch-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  border: 4px solid #dfe1e6;\r\n  padding-bottom: 15px;\r\n  border-radius: 20px 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.launch-card:hover {\r\n  box-shadow: 0 0 20px 20px #ddd;\r\n}\r\n\r\n.imgHeader {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 250px;\r\n  background-size: cover;\r\n}\r\n\r\n.title {\r\n  padding: 10px;\r\n  height: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.template {\r\n  display: none;\r\n}\r\n\r\n#launch-modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(1px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 7;\r\n  overflow: auto;\r\n  top: 0;\r\n  padding-top: 80px;\r\n}\r\n\r\n#launch-modal .launch-card {\r\n  width: 67%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  background-color: #1e1e1e;\r\n  border-radius: 20px;\r\n}\r\n\r\n#launch-modal .launch-card:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.launch-img {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  font-size: 20px;\r\n  background-color: #009688;\r\n  font-weight: bold;\r\n  width: 4%;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  border: none;\r\n  margin-left: 62.4%;\r\n  border-radius: 15px 50px 25px 5px;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.close:hover {\r\n  color: #fff;\r\n  background-color: red;\r\n}\r\n\r\n.launch-img .content {\r\n  /* background-color: rgba(0, 0, 0, 0.5); */\r\n  padding: 10px;\r\n  margin-top: 367px;\r\n  padding-bottom: 35px;\r\n  margin-bottom: 0;\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n.launch-img .content > h1 {\r\n  text-align: center;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 100px;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.details {\r\n  display: flex;\r\n  justify-content: center;\r\n  line-height: 1.5;\r\n}\r\n\r\n.details ul {\r\n  list-style: none;\r\n  columns: 2;\r\n}\r\n\r\n#comment ul {\r\n  display: block;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n\r\n.entry {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.entry form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n#txt-visitor {\r\n  padding: 10px;\r\n  width: 186px;\r\n}\r\n\r\n#txt-comment {\r\n  height: 50px;\r\n  padding: 10px;\r\n}\r\n\r\n#btn-save-comment {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 20px 0;\r\n  margin-top: 50px;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  background-color: #1e1e1e;\r\n  color: #fff;\r\n}\r\n\r\n.privacy-policy {\r\n  color: #fff;\r\n  margin-left: 100px;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin-right: 100px;\r\n}\r\n\r\n.createdby {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n"],"sourceRoot":""}]);
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
        commentsCount.innerText = comments.length;
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
    console.log(launchId)
    await _InvolvementService_js__WEBPACK_IMPORTED_MODULE_0__["default"].postComment(launchId,
      new _Modals_js__WEBPACK_IMPORTED_MODULE_1__.Comment('', txtname.value, txtcomment.value));
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
      InvolvementUI.renderLikes(element, launchId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxh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Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJxQzs7QUFFdEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFNO0FBQ3hCO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrQztBQUNBOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxJQUFJLHFFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsYUFBYTs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxnQ0FBZ0M7O0FBRXJGO0FBQ0EscURBQXFELGdDQUFnQzs7QUFFckY7QUFDQSxRQUFRLHFFQUF5QjtBQUNqQztBQUNBLGdEQUFnRCxrRUFBc0I7O0FBRXRFO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVCQUF1QixtRUFBdUI7O0FBRTlDLHdDQUF3QyxpQkFBaUI7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx3RUFBNEI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLElBQUksdUVBQTJCO0FBQy9CO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvSW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvSW52b2x2ZW1lbnRTZXJ2aWNlLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0ludm9sdmVtZW50VUkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvTGF1bmNoU2VydmljZS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9Nb2RhbHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvbGF1bmNoQVBJLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL2xhdW5jaFVJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMxZTFlMWU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvID4gcCB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChibHVlLCB5ZWxsb3cpO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5LXBvbGljeSA+IGEge1xcclxcbiAgY29sb3I6ICMwMDk2ODg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMnB4IDhweCAycHggIzQyNDI0MjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3Mge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1saW5rcyA+IGEge1xcclxcbiAgY29sb3I6ICNmZmZmZmY4MDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3MgPiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFiIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhcyB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGlhLWxpbmtzIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZGZlMWU2O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMjBweCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zcGFjZWxhdW5jaG5vdy1wcm9kLWVhc3QubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL21lZGlhL2xhdW5jaGVyX2ltYWdlcy9mYWxjb25fOV9ibG9ja19faW1hZ2VfMjAyMTA1MDYwNjA4MzEuanBnJyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogNztcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbiNsYXVuY2gtbW9kYWwgLmxhdW5jaC1jYXJkIHtcXHJcXG4gIHdpZHRoOiA2NyU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsYXVuY2gtbW9kYWwgLmxhdW5jaC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtaW1nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zcGFjZWxhdW5jaG5vdy1wcm9kLWVhc3QubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL21lZGlhL2xhdW5jaGVyX2ltYWdlcy9mYWxjb25fOV9ibG9ja19faW1hZ2VfMjAyMTA1MDYwNjA4MzEuanBnJyk7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiA0JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYyLjQlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4IDI1cHggNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyAuY29udGVudCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzY3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcgLmNvbnRlbnQgPiBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGNvbHVtbnM6IDI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbiN0eHQtdmlzaXRvciB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDE4NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LWNvbW1lbnQge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bi1zYXZlLWNvbW1lbnQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMnB4IDhweCAycHggIzQyNDI0MjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaXZhY3ktcG9saWN5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZWRieSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvSkFBb0o7RUFDcEosYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9KQUFvSjtFQUNwSixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzFlMWUxZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gPiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJsdWUsIHllbGxvdyk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaXZhY3ktcG9saWN5ID4gYSB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAycHggOHB4IDJweCAjNDI0MjQyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1saW5rcyB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzID4gYSB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjgwO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1saW5rcyA+IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDk2ODg7XFxyXFxufVxcclxcblxcclxcbi5mYWIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaWEtbGlua3Mge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ3JpZC1nYXA6IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNkZmUxZTY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5pbWdIZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3NwYWNlbGF1bmNobm93LXByb2QtZWFzdC5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vbWVkaWEvbGF1bmNoZXJfaW1hZ2VzL2ZhbGNvbl85X2Jsb2NrX19pbWFnZV8yMDIxMDUwNjA2MDgzMS5qcGcnKTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiA3O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQge1xcclxcbiAgd2lkdGg6IDY3JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3NwYWNlbGF1bmNobm93LXByb2QtZWFzdC5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vbWVkaWEvbGF1bmNoZXJfaW1hZ2VzL2ZhbGNvbl85X2Jsb2NrX19pbWFnZV8yMDIxMDUwNjA2MDgzMS5qcGcnKTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDQlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogNjIuNCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHggMjVweCA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtaW1nIC5jb250ZW50IHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzNjdweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyAuY29udGVudCA+IGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY29sdW1uczogMjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQgdWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC12aXNpdG9yIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB3aWR0aDogMTg2cHg7XFxyXFxufVxcclxcblxcclxcbiN0eHQtY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLXNhdmUtY29tbWVudCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAycHggOHB4IDJweCAjNDI0MjQyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeS1wb2xpY3kge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlZGJ5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExhdW5jaFVJIGZyb20gJy4vbW9kdWxlcy9sYXVuY2hVSS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBMYXVuY2hVSS5yZW5kZXJMYXVuY2hlcygpO1xufSk7IiwiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vTW9kYWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBUEkge1xuICBzdGF0aWMgY29tbWVudHNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXJ5NXV3cEZMa3ZyOFdSOVRKVkIvY29tbWVudHMnO1xuXG4gIHN0YXRpYyBsaWtlc1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xcnk1dXdwRkxrdnI4V1I5VEpWQi9saWtlcyc7XG5cbiAgc3RhdGljIGZldGNoQ29tbWVudHMgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcbiAgICBjb25zdCBjb21tZW50cyA9IFtdO1xuICAgIGF3YWl0IGZldGNoKGAke0ludm9sdmVtZW50QVBJLmNvbW1lbnRzVVJMfT9pdGVtX2lkPSR7bGF1bmNoSWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAganNvbi5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgY29tbWVudHMucHVzaChuZXcgQ29tbWVudChjLmNyZWF0aW9uX2RhdGUsIGMudXNlcm5hbWUsIGMuY29tbWVudCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjb21tZW50cztcbiAgfVxuXG4gIHN0YXRpYyBwb3N0Q29tbWVudCA9IGFzeW5jIChsYXVuY2hJZCwgbmV3Y29tbWVudCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKEludm9sdmVtZW50QVBJLmNvbW1lbnRzVVJMLCB7XG5cbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBsYXVuY2hJZCxcbiAgICAgICAgdXNlcm5hbWU6IG5ld2NvbW1lbnQudXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQ6IG5ld2NvbW1lbnQuY29tbWVudCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmZXRjaEFsbExpa2VzID0gYXN5bmMgKCkgPT4gZmV0Y2goSW52b2x2ZW1lbnRBUEkubGlrZXNVUkwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcblxuICBzdGF0aWMgcG9zdExpa2UgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcbiAgICBhd2FpdCBmZXRjaChJbnZvbHZlbWVudEFQSS5saWtlc1VSTCwge1xuXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogbGF1bmNoSWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XG5cbmxldCBsaWtlc0FycmF5ID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50U2VydmljZSB7XG4gIHN0YXRpYyBnZXRDb21tZW50cyA9IGFzeW5jIChsYXVuY2hJZCkgPT4gSW52b2x2ZW1lbnRBUEkuZmV0Y2hDb21tZW50cyhsYXVuY2hJZClcblxuICBzdGF0aWMgcG9zdENvbW1lbnQgPSBhc3luYyAobGF1bmNoSWQsIG5ld0NvbW1lbnQpID0+IHtcbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5wb3N0Q29tbWVudChsYXVuY2hJZCwgbmV3Q29tbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0QWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGlrZXNBcnJheSA9IGF3YWl0IEludm9sdmVtZW50QVBJLmZldGNoQWxsTGlrZXMoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMaWtlcyA9IGFzeW5jIChsYXVuY2hJZCkgPT4ge1xuICAgIGlmIChsaWtlc0FycmF5Lmxlbmd0aCA8IDEpIHsgYXdhaXQgdGhpcy5nZXRBbGxMaWtlcygpOyB9XG4gICAgY29uc3QgcmVjb3JkID0gbGlrZXNBcnJheS5maW5kKChsKSA9PiBsLml0ZW1faWQgPT09IGxhdW5jaElkKTtcbiAgICByZXR1cm4gKHJlY29yZCAhPSBudWxsKSA/IHJlY29yZC5saWtlcyA6IDA7XG4gIH1cblxuICBzdGF0aWMgcG9zdExpa2UgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5wb3N0TGlrZShsYXVuY2hJZCk7XG4gIH1cbn0iLCJpbXBvcnQgSW52b2x2ZW1lbnRTZXJ2aWNlIGZyb20gJy4vSW52b2x2ZW1lbnRTZXJ2aWNlLmpzJztcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuL01vZGFscy5qcyc7XG5cbmNvbnN0IGdldERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudExpc3QnKTtcbmNvbnN0IGhpZGRlbkxhdW5jaElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdW5jaC1pZCcpO1xuY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb3VudCcpO1xuY29uc3QgdHh0bmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eHQtdmlzaXRvcicpO1xuY29uc3QgdHh0Y29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eHQtY29tbWVudCcpO1xuY29uc3QgYnRuU2F2ZUNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNhdmUtY29tbWVudCcpO1xuYnRuU2F2ZUNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7IGF3YWl0IEludm9sdmVtZW50VUkucG9zdENvbW1lbnQoKTsgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50VUkge1xuICBzdGF0aWMgcmVuZGVyQ29tbWVudHMgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcbiAgICBoaWRkZW5MYXVuY2hJZC52YWx1ZSA9IGxhdW5jaElkO1xuICAgIGdldERldGFpbHMuaW5uZXJIVE1MID0gJyAnO1xuICAgIGF3YWl0IEludm9sdmVtZW50U2VydmljZS5nZXRDb21tZW50cyhsYXVuY2hJZClcbiAgICAgIC50aGVuKChjb21tZW50cykgPT4ge1xuICAgICAgICBjb21tZW50c0NvdW50LmlubmVyVGV4dCA9IGNvbW1lbnRzLmxlbmd0aDtcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsaS5pbm5lclRleHQgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX0gJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgICAgICBnZXREZXRhaWxzLmFwcGVuZChsaSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJDb21tZW50cyA9ICgpID0+IHtcbiAgICBjb21tZW50c0NvdW50LmlubmVyVGV4dCA9IDA7XG4gICAgdHh0bmFtZS52YWx1ZSA9ICcnO1xuICAgIHR4dGNvbW1lbnQudmFsdWUgPSAnJztcbiAgICBoaWRkZW5MYXVuY2hJZC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgc3RhdGljIHBvc3RDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxhdW5jaElkID0gaGlkZGVuTGF1bmNoSWQudmFsdWU7XG4gICAgY29uc29sZS5sb2cobGF1bmNoSWQpXG4gICAgYXdhaXQgSW52b2x2ZW1lbnRTZXJ2aWNlLnBvc3RDb21tZW50KGxhdW5jaElkLFxuICAgICAgbmV3IENvbW1lbnQoJycsIHR4dG5hbWUudmFsdWUsIHR4dGNvbW1lbnQudmFsdWUpKTtcbiAgICBJbnZvbHZlbWVudFVJLmNsZWFyQ29tbWVudHMoKTtcbiAgICBJbnZvbHZlbWVudFVJLnJlbmRlckNvbW1lbnRzKGxhdW5jaElkKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJMaWtlcyA9IChlbGVtZW50LCBsYXVuY2hJZCkgPT4ge1xuICAgIEludm9sdmVtZW50U2VydmljZS5nZXRMaWtlcyhsYXVuY2hJZCkudGhlbigobGlrZXMpID0+IHtcbiAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gbGlrZXM7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcG9zdExpa2UgPSAoZWxlbWVudCwgbGF1bmNoSWQpID0+IHtcbiAgICBJbnZvbHZlbWVudFNlcnZpY2UucG9zdExpa2UobGF1bmNoSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgSW52b2x2ZW1lbnRVSS5yZW5kZXJMaWtlcyhlbGVtZW50LCBsYXVuY2hJZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IExhdWNoQVBJIGZyb20gJy4vbGF1bmNoQVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF1bmNoU2VydmljZSB7XG4gIHN0YXRpYyBMYXVuY2hMaXN0ID0gW107XG5cbiAgc3RhdGljIGdldExhdW5jaGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChMYXVuY2hTZXJ2aWNlLkxhdW5jaExpc3QubGVuZ3RoIDwgMSkge1xuICAgICAgTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0ID0gYXdhaXQgTGF1Y2hBUEkuZmV0Y2hMYXVuY2hlcygpO1xuICAgIH1cbiAgICByZXR1cm4gTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0O1xuICB9XG5cbiAgc3RhdGljIGdldExhdW5jaCA9IChsYXVuY2hJZCkgPT4gTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0LmZpbmQoKGwpID0+IGwuaWQgPT09IGxhdW5jaElkKVxufSIsImV4cG9ydCBjbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoY3JlYXRpb25fZGF0ZSwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0aW9uX2RhdGUgPSBjcmVhdGlvbl9kYXRlO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2gge1xuICBsaWtlcztcblxuICBjb21tZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsc3BfbmFtZSwgbWlzc2lvbl90eXBlLCBwYWQsIGxvY2F0aW9uLCBpbWFnZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubHNwX25hbWUgPSBsc3BfbmFtZTtcbiAgICB0aGlzLm1pc3Npb25fdHlwZSA9IG1pc3Npb25fdHlwZTtcbiAgICB0aGlzLnBhZCA9IHBhZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG59IiwiaW1wb3J0IHsgTGF1bmNoIH0gZnJvbSAnLi9Nb2RhbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVjaEFQSSB7XG4gIHN0YXRpYyBsYXVuY2hBUElVUkwgPSAnaHR0cHM6Ly9sbC50aGVzcGFjZWRldnMuY29tLzIuMi4wL2xhdW5jaC91cGNvbWluZy8/bW9kZT1saXN0JnN0YXR1cz04Jm9yZGVyaW5nPXdpbmRvd19lbmQnO1xuXG4gIHN0YXRpYyBmZXRjaExhdW5jaGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF1bmNoZXMnKSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBsYXVuY2hBcnIgPSBbXTtcbiAgICAgIGF3YWl0IGZldGNoKExhdWNoQVBJLmxhdW5jaEFQSVVSTClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGpzb24ucmVzdWx0cy5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgICAgICBsYXVuY2hBcnIucHVzaChcbiAgICAgICAgICAgICAgbmV3IExhdW5jaChsLmlkLCBsLm5hbWUsIGwubHNwX25hbWUsIGwubWlzc2lvbl90eXBlLCBsLnBhZCwgbC5sb2NhdGlvbiwgbC5pbWFnZSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxhdW5jaEFycik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF1bmNoZXMnLCBkYXRhU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhdW5jaGVzJykpO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50VUkgZnJvbSAnLi9JbnZvbHZlbWVudFVJLmpzJztcbmltcG9ydCBMYXVuY2hTZXJ2aWNlIGZyb20gJy4vTGF1bmNoU2VydmljZS5qcyc7XG5cbmNvbnN0IGxhdW5jaENhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtY2FyZC50ZW1wbGF0ZScpO1xuY29uc3QgbGF1bmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtbGlzdCcpO1xuY29uc3QgbGF1bmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF1bmNoLW1vZGFsJyk7XG5jb25zdCBpbWcgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcubGF1bmNoLWltZycpO1xuY29uc3QgaDEgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuY29uc3QgbHNwID0gbGF1bmNoTW9kYWwucXVlcnlTZWxlY3RvcignLmxzcCcpO1xuY29uc3QgbWlzc2lvbiA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9uJyk7XG5jb25zdCBwYWQgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcucGFkJyk7XG5jb25zdCBsb2NhdGlvbiA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gTGF1bmNoVUkuY2xvc2VNb2RhbCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF1bmNoVUkge1xuICBzdGF0aWMgcmVuZGVyTGF1bmNoZXMgPSAoKSA9PiB7XG4gICAgTGF1bmNoU2VydmljZS5nZXRMYXVuY2hlcygpLnRoZW4oKGxhdW5jaGVzKSA9PiB7XG4gICAgICBsYXVuY2hlcy5mb3JFYWNoKChsYXVuY2gpID0+IHtcbiAgICAgICAgY29uc3QgbGF1bmNoQ2FyZCA9IGxhdW5jaENhcmRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGxhdW5jaENhcmQuY2xhc3NOYW1lID0gJ2xhdW5jaC1jYXJkJztcblxuICAgICAgICBjb25zdCBpbWdIZWFkZXIgPSBsYXVuY2hDYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ0hlYWRlcicpWzBdO1xuICAgICAgICBpbWdIZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtsYXVuY2guaW1hZ2V9JylgO1xuXG4gICAgICAgIGNvbnN0IGgzID0gbGF1bmNoQ2FyZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDMnKVswXTtcbiAgICAgICAgaDMuaW5uZXJUZXh0ID0gbGF1bmNoLm5hbWU7XG5cbiAgICAgICAgY29uc3QgYnRuQ29tbWVudCA9IGxhdW5jaENhcmQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcbiAgICAgICAgYnRuQ29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTGF1bmNoVUkuc2hvd01vZGFsKGxhdW5jaC5pZCk7IH0pO1xuXG4gICAgICAgIGNvbnN0IGJ0blJlc2VydmUgPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZlJyk7XG4gICAgICAgIGJ0blJlc2VydmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IExhdW5jaFVJLnNob3dNb2RhbChsYXVuY2guaWQpOyB9KTtcblxuICAgICAgICBjb25zdCBsaWtlc0NvdW50ID0gbGF1bmNoQ2FyZC5xdWVyeVNlbGVjdG9yKCcubGlrZXMgc3BhbicpO1xuICAgICAgICBJbnZvbHZlbWVudFVJLnJlbmRlckxpa2VzKGxpa2VzQ291bnQsIGxhdW5jaC5pZCk7XG4gICAgICAgIGNvbnN0IGxpa2VCdG4gPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5saWtlcyBpJyk7XG4gICAgICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBJbnZvbHZlbWVudFVJLnBvc3RMaWtlKGxpa2VzQ291bnQsIGxhdW5jaC5pZCkpO1xuXG4gICAgICAgIGxhdW5jaExpc3QuYXBwZW5kQ2hpbGQobGF1bmNoQ2FyZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93TW9kYWwgPSAobGF1bmNoSWQpID0+IHtcbiAgICBjb25zdCBsYXVuY2hkYXRhID0gTGF1bmNoU2VydmljZS5nZXRMYXVuY2gobGF1bmNoSWQpO1xuXG4gICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bGF1bmNoZGF0YS5pbWFnZX0nKWA7XG4gICAgaDEuaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5uYW1lO1xuXG4gICAgbHNwLmlubmVyVGV4dCA9IGxhdW5jaGRhdGEubHNwX25hbWU7XG4gICAgbWlzc2lvbi5pbm5lclRleHQgPSBsYXVuY2hkYXRhLm1pc3Npb25fdHlwZTtcbiAgICBwYWQuaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5wYWQ7XG4gICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5sb2NhdGlvbjtcblxuICAgIEludm9sdmVtZW50VUkucmVuZGVyQ29tbWVudHMobGF1bmNoSWQpO1xuICAgIGxhdW5jaE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgSW52b2x2ZW1lbnRVSS5jbGVhckNvbW1lbnRzKCk7XG4gICAgbGF1bmNoTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==