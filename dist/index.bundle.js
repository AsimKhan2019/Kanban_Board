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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCw2QkFBNkIscUJBQXFCLHNCQUFzQixLQUFLLFdBQVcsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsMkNBQTJDLEtBQUssV0FBVyw0QkFBNEIsS0FBSyxlQUFlLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUssbUJBQW1CLHNCQUFzQix3REFBd0Qsb0NBQW9DLDJDQUEyQyxLQUFLLDZCQUE2QixxQkFBcUIsNEJBQTRCLEtBQUssZ0JBQWdCLG9CQUFvQixxQ0FBcUMsZ0NBQWdDLDBCQUEwQiwwQ0FBMEMsMEJBQTBCLHNCQUFzQixLQUFLLHVCQUF1QiwyQ0FBMkMsb0JBQW9CLHlCQUF5QixnQkFBZ0Isc0JBQXNCLEtBQUssMkJBQTJCLHVCQUF1QixtQ0FBbUMsS0FBSyxpQ0FBaUMscUJBQXFCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxjQUFjLHFCQUFxQixLQUFLLHNCQUFzQixtQ0FBbUMsb0JBQW9CLGdCQUFnQix5QkFBeUIsS0FBSyxzQkFBc0Isb0JBQW9CLHNCQUFzQixxQkFBcUIsOEJBQThCLEtBQUssc0JBQXNCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLHVCQUF1QixnQ0FBZ0MsMkJBQTJCLDRCQUE0QixtQ0FBbUMsS0FBSyw0QkFBNEIscUNBQXFDLEtBQUssb0JBQW9CLDJKQUEySixvQkFBb0IsNkJBQTZCLEtBQUssZ0JBQWdCLG9CQUFvQixvQkFBb0Isb0JBQW9CLHFDQUFxQyxLQUFLLGtCQUFrQixvQkFBb0IsMEJBQTBCLG9DQUFvQyxvQkFBb0IsS0FBSywrQkFBK0IsbUJBQW1CLGdDQUFnQyx5QkFBeUIsb0JBQW9CLG1CQUFtQixLQUFLLG1CQUFtQixvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLHNCQUFzQiwyQ0FBMkMsaUNBQWlDLG1CQUFtQixvQkFBb0IsaUJBQWlCLHFCQUFxQixhQUFhLHdCQUF3QixLQUFLLG9DQUFvQyxpQkFBaUIscUJBQXFCLGtCQUFrQixnQ0FBZ0MsMEJBQTBCLEtBQUssMENBQTBDLHVCQUF1QixLQUFLLHFCQUFxQiwySkFBMkosbUJBQW1CLDZCQUE2QixtQ0FBbUMsS0FBSyxnQkFBZ0IseUJBQXlCLHNCQUFzQixnQ0FBZ0Msd0JBQXdCLGdCQUFnQixzQkFBc0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsd0NBQXdDLG1DQUFtQyxLQUFLLHNCQUFzQixrQkFBa0IsNEJBQTRCLEtBQUssOEJBQThCLCtDQUErQyxzQkFBc0Isd0JBQXdCLDJCQUEyQix1QkFBdUIsd0JBQXdCLG1CQUFtQixLQUFLLG1DQUFtQyx5QkFBeUIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixLQUFLLGVBQWUsd0JBQXdCLEtBQUssa0JBQWtCLG9CQUFvQiw4QkFBOEIsdUJBQXVCLEtBQUsscUJBQXFCLHVCQUF1QixpQkFBaUIsS0FBSyxxQkFBcUIscUJBQXFCLHVCQUF1Qix5QkFBeUIsS0FBSyxnQkFBZ0IsdUJBQXVCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGdCQUFnQix3QkFBd0IsS0FBSyxzQkFBc0Isb0JBQW9CLG1CQUFtQixLQUFLLHNCQUFzQixtQkFBbUIsb0JBQW9CLEtBQUssMkJBQTJCLG1CQUFtQixnQ0FBZ0MseUJBQXlCLG9CQUFvQixtQkFBbUIsS0FBSyxnQkFBZ0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsc0JBQXNCLHNCQUFzQix1QkFBdUIsMENBQTBDLGdDQUFnQyxrQkFBa0IsS0FBSyx5QkFBeUIsa0JBQWtCLHlCQUF5QixLQUFLLG9CQUFvQixrQkFBa0IsMEJBQTBCLEtBQUssb0JBQW9CLGtCQUFrQixLQUFLLGdCQUFnQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxh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QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9JbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9JbnZvbHZlbWVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvSW52b2x2ZW1lbnRVSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9MYXVuY2hTZXJ2aWNlLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL01vZGFscy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9sYXVuY2hBUEkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvbGF1bmNoVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzFlMWUxZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gPiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJsdWUsIHllbGxvdyk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaXZhY3ktcG9saWN5ID4gYSB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAycHggOHB4IDJweCAjNDI0MjQyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1saW5rcyB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzID4gYSB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjgwO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1saW5rcyA+IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDk2ODg7XFxyXFxufVxcclxcblxcclxcbi5mYWIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaWEtbGlua3Mge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ3JpZC1nYXA6IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNkZmUxZTY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5pbWdIZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3NwYWNlbGF1bmNobm93LXByb2QtZWFzdC5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vbWVkaWEvbGF1bmNoZXJfaW1hZ2VzL2ZhbGNvbl85X2Jsb2NrX19pbWFnZV8yMDIxMDUwNjA2MDgzMS5qcGcnKTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiA3O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQge1xcclxcbiAgd2lkdGg6IDY3JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3NwYWNlbGF1bmNobm93LXByb2QtZWFzdC5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vbWVkaWEvbGF1bmNoZXJfaW1hZ2VzL2ZhbGNvbl85X2Jsb2NrX19pbWFnZV8yMDIxMDUwNjA2MDgzMS5qcGcnKTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDQlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogNjIuNCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHggMjVweCA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtaW1nIC5jb250ZW50IHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzNjdweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyAuY29udGVudCA+IGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY29sdW1uczogMjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQgdWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC12aXNpdG9yIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB3aWR0aDogMTg2cHg7XFxyXFxufVxcclxcblxcclxcbiN0eHQtY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLXNhdmUtY29tbWVudCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAycHggOHB4IDJweCAjNDI0MjQyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeS1wb2xpY3kge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlZGJ5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JB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QjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMWUxZTFlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyA+IHAge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYmx1ZSwgeWVsbG93KTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeS1wb2xpY3kgPiBhIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3MgPiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mYXMge1xcclxcbiAgY29sb3I6ICMwMDk2ODg7XFxyXFxufVxcclxcblxcclxcbi5tZWRpYS1saW5rcyB7XFxyXFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBncmlkLWdhcDogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2RmZTFlNjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDIwcHggI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3BhY2VsYXVuY2hub3ctcHJvZC1lYXN0Lm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9tZWRpYS9sYXVuY2hlcl9pbWFnZXMvZmFsY29uXzlfYmxvY2tfX2ltYWdlXzIwMjEwNTA2MDYwODMxLmpwZycpO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNsYXVuY2gtbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDc7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIC5sYXVuY2gtY2FyZCB7XFxyXFxuICB3aWR0aDogNjclO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIC5sYXVuY2gtY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3BhY2VsYXVuY2hub3ctcHJvZC1lYXN0Lm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9tZWRpYS9sYXVuY2hlcl9pbWFnZXMvZmFsY29uXzlfYmxvY2tfX2ltYWdlXzIwMjEwNTA2MDYwODMxLmpwZycpO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2Mi40JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweCAyNXB4IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcgLmNvbnRlbnQge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDM2N3B4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtaW1nIC5jb250ZW50ID4gaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW5zOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB1bCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LXZpc2l0b3Ige1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxODZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC1jb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNidG4tc2F2ZS1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5LXBvbGljeSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVkYnkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBMYXVuY2hVSSBmcm9tICcuL21vZHVsZXMvbGF1bmNoVUkuanMnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgTGF1bmNoVUkucmVuZGVyTGF1bmNoZXMoKTtcclxufSk7IiwiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vTW9kYWxzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIHtcclxuICBzdGF0aWMgY29tbWVudHNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXJ5NXV3cEZMa3ZyOFdSOVRKVkIvY29tbWVudHMnO1xyXG5cclxuICBzdGF0aWMgbGlrZXNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXJ5NXV3cEZMa3ZyOFdSOVRKVkIvbGlrZXMnO1xyXG5cclxuICBzdGF0aWMgZmV0Y2hDb21tZW50cyA9IGFzeW5jIChsYXVuY2hJZCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBbXTtcclxuICAgIGF3YWl0IGZldGNoKGAke0ludm9sdmVtZW50QVBJLmNvbW1lbnRzVVJMfT9pdGVtX2lkPSR7bGF1bmNoSWR9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIGpzb24uZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgY29tbWVudHMucHVzaChuZXcgQ29tbWVudChjLmNyZWF0aW9uX2RhdGUsIGMudXNlcm5hbWUsIGMuY29tbWVudCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBjb21tZW50cztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwb3N0Q29tbWVudCA9IGFzeW5jIChsYXVuY2hJZCwgbmV3Y29tbWVudCkgPT4ge1xyXG4gICAgYXdhaXQgZmV0Y2goSW52b2x2ZW1lbnRBUEkuY29tbWVudHNVUkwsIHtcclxuXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaXRlbV9pZDogbGF1bmNoSWQsXHJcbiAgICAgICAgdXNlcm5hbWU6IG5ld2NvbW1lbnQudXNlcm5hbWUsXHJcbiAgICAgICAgY29tbWVudDogbmV3Y29tbWVudC5jb21tZW50LFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmZXRjaEFsbExpa2VzID0gYXN5bmMgKCkgPT4gZmV0Y2goSW52b2x2ZW1lbnRBUEkubGlrZXNVUkwpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuXHJcbiAgc3RhdGljIHBvc3RMaWtlID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChJbnZvbHZlbWVudEFQSS5saWtlc1VSTCwge1xyXG5cclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBsYXVuY2hJZCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xyXG5cclxubGV0IGxpa2VzQXJyYXkgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50U2VydmljZSB7XHJcbiAgc3RhdGljIGdldENvbW1lbnRzID0gYXN5bmMgKGxhdW5jaElkKSA9PiBJbnZvbHZlbWVudEFQSS5mZXRjaENvbW1lbnRzKGxhdW5jaElkKVxyXG5cclxuICBzdGF0aWMgcG9zdENvbW1lbnQgPSBhc3luYyAobGF1bmNoSWQsIG5ld0NvbW1lbnQpID0+IHtcclxuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLnBvc3RDb21tZW50KGxhdW5jaElkLCBuZXdDb21tZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBbGxMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxpa2VzQXJyYXkgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5mZXRjaEFsbExpa2VzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0TGlrZXMgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcclxuICAgIGlmIChsaWtlc0FycmF5Lmxlbmd0aCA8IDEpIHsgYXdhaXQgdGhpcy5nZXRBbGxMaWtlcygpOyB9XHJcbiAgICBjb25zdCByZWNvcmQgPSBsaWtlc0FycmF5LmZpbmQoKGwpID0+IGwuaXRlbV9pZCA9PT0gbGF1bmNoSWQpO1xyXG4gICAgcmV0dXJuIChyZWNvcmQgIT0gbnVsbCkgPyByZWNvcmQubGlrZXMgOiAwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBvc3RMaWtlID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XHJcbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5wb3N0TGlrZShsYXVuY2hJZCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEludm9sdmVtZW50U2VydmljZSBmcm9tICcuL0ludm9sdmVtZW50U2VydmljZS5qcyc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuL01vZGFscy5qcyc7XHJcblxyXG5jb25zdCBnZXREZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRMaXN0Jyk7XHJcbmNvbnN0IGhpZGRlbkxhdW5jaElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdW5jaC1pZCcpO1xyXG5jb25zdCBjb21tZW50c0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvdW50Jyk7XHJcbmNvbnN0IHR4dG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHh0LXZpc2l0b3InKTtcclxuY29uc3QgdHh0Y29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eHQtY29tbWVudCcpO1xyXG5jb25zdCBidG5TYXZlQ29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2F2ZS1jb21tZW50Jyk7XHJcbmJ0blNhdmVDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4geyBhd2FpdCBJbnZvbHZlbWVudFVJLnBvc3RDb21tZW50KCk7IH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRVSSB7XHJcbiAgc3RhdGljIHJlbmRlckNvbW1lbnRzID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XHJcbiAgICBoaWRkZW5MYXVuY2hJZC52YWx1ZSA9IGxhdW5jaElkO1xyXG4gICAgZ2V0RGV0YWlscy5pbm5lckhUTUwgPSAnICc7XHJcbiAgICBhd2FpdCBJbnZvbHZlbWVudFNlcnZpY2UuZ2V0Q29tbWVudHMobGF1bmNoSWQpXHJcbiAgICAgIC50aGVuKChjb21tZW50cykgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRzQ291bnQuaW5uZXJUZXh0ID0gY29tbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfSAke2NvbW1lbnQuY29tbWVudH1gO1xyXG4gICAgICAgICAgZ2V0RGV0YWlscy5hcHBlbmQobGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbGVhckNvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgY29tbWVudHNDb3VudC5pbm5lclRleHQgPSAwO1xyXG4gICAgdHh0bmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgdHh0Y29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgaGlkZGVuTGF1bmNoSWQudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwb3N0Q29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGxhdW5jaElkID0gaGlkZGVuTGF1bmNoSWQudmFsdWU7XHJcbiAgICBhd2FpdCBJbnZvbHZlbWVudFNlcnZpY2UucG9zdENvbW1lbnQobGF1bmNoSWQsXHJcbiAgICAgIG5ldyBDb21tZW50KCcnLCB0eHRuYW1lLnZhbHVlLCB0eHRjb21tZW50LnZhbHVlKSk7XHJcbiAgICBJbnZvbHZlbWVudFVJLmNsZWFyQ29tbWVudHMoKTtcclxuICAgIEludm9sdmVtZW50VUkucmVuZGVyQ29tbWVudHMobGF1bmNoSWQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlckxpa2VzID0gKGVsZW1lbnQsIGxhdW5jaElkKSA9PiB7XHJcbiAgICBJbnZvbHZlbWVudFNlcnZpY2UuZ2V0TGlrZXMobGF1bmNoSWQpLnRoZW4oKGxpa2VzKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gbGlrZXM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwb3N0TGlrZSA9IChlbGVtZW50LCBsYXVuY2hJZCkgPT4ge1xyXG4gICAgSW52b2x2ZW1lbnRTZXJ2aWNlLnBvc3RMaWtlKGxhdW5jaElkKS50aGVuKCgpID0+IHtcclxuICAgICAgSW52b2x2ZW1lbnRVSS5yZW5kZXJMaWtlcyhlbGVtZW50LCBsYXVuY2hJZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59IiwiaW1wb3J0IExhdWNoQVBJIGZyb20gJy4vbGF1bmNoQVBJLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdW5jaFNlcnZpY2Uge1xyXG4gIHN0YXRpYyBMYXVuY2hMaXN0ID0gW107XHJcblxyXG4gIHN0YXRpYyBnZXRMYXVuY2hlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChMYXVuY2hTZXJ2aWNlLkxhdW5jaExpc3QubGVuZ3RoIDwgMSkge1xyXG4gICAgICBMYXVuY2hTZXJ2aWNlLkxhdW5jaExpc3QgPSBhd2FpdCBMYXVjaEFQSS5mZXRjaExhdW5jaGVzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExhdW5jaCA9IChsYXVuY2hJZCkgPT4gTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0LmZpbmQoKGwpID0+IGwuaWQgPT09IGxhdW5jaElkKVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGNyZWF0aW9uX2RhdGUsIHVzZXJuYW1lLCBjb21tZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0aW9uX2RhdGUgPSBjcmVhdGlvbl9kYXRlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXVuY2gge1xyXG4gIGxpa2VzO1xyXG5cclxuICBjb21tZW50cyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgbHNwX25hbWUsIG1pc3Npb25fdHlwZSwgcGFkLCBsb2NhdGlvbiwgaW1hZ2UpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxzcF9uYW1lID0gbHNwX25hbWU7XHJcbiAgICB0aGlzLm1pc3Npb25fdHlwZSA9IG1pc3Npb25fdHlwZTtcclxuICAgIHRoaXMucGFkID0gcGFkO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IExhdW5jaCB9IGZyb20gJy4vTW9kYWxzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdWNoQVBJIHtcclxuICBzdGF0aWMgbGF1bmNoQVBJVVJMID0gJ2h0dHBzOi8vbGwudGhlc3BhY2VkZXZzLmNvbS8yLjIuMC9sYXVuY2gvdXBjb21pbmcvP21vZGU9bGlzdCZzdGF0dXM9OCZvcmRlcmluZz13aW5kb3dfZW5kJztcclxuXHJcbiAgc3RhdGljIGZldGNoTGF1bmNoZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhdW5jaGVzJykgPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBsYXVuY2hBcnIgPSBbXTtcclxuICAgICAgYXdhaXQgZmV0Y2goTGF1Y2hBUEkubGF1bmNoQVBJVVJMKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIGpzb24ucmVzdWx0cy5mb3JFYWNoKChsKSA9PiB7XHJcbiAgICAgICAgICAgIGxhdW5jaEFyci5wdXNoKFxyXG4gICAgICAgICAgICAgIG5ldyBMYXVuY2gobC5pZCwgbC5uYW1lLCBsLmxzcF9uYW1lLCBsLm1pc3Npb25fdHlwZSwgbC5wYWQsIGwubG9jYXRpb24sIGwuaW1hZ2UpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGF1bmNoQXJyKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhdW5jaGVzJywgZGF0YVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF1bmNoZXMnKSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEludm9sdmVtZW50VUkgZnJvbSAnLi9JbnZvbHZlbWVudFVJLmpzJztcclxuaW1wb3J0IExhdW5jaFNlcnZpY2UgZnJvbSAnLi9MYXVuY2hTZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IGxhdW5jaENhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtY2FyZC50ZW1wbGF0ZScpO1xyXG5jb25zdCBsYXVuY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdW5jaC1saXN0Jyk7XHJcbmNvbnN0IGxhdW5jaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdW5jaC1tb2RhbCcpO1xyXG5jb25zdCBpbWcgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcubGF1bmNoLWltZycpO1xyXG5jb25zdCBoMSA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcbmNvbnN0IGxzcCA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5sc3AnKTtcclxuY29uc3QgbWlzc2lvbiA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5taXNzaW9uJyk7XHJcbmNvbnN0IHBhZCA9IGxhdW5jaE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5wYWQnKTtcclxuY29uc3QgbG9jYXRpb24gPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcclxuY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBMYXVuY2hVSS5jbG9zZU1vZGFsKCkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF1bmNoVUkge1xyXG4gIHN0YXRpYyByZW5kZXJMYXVuY2hlcyA9ICgpID0+IHtcclxuICAgIExhdW5jaFNlcnZpY2UuZ2V0TGF1bmNoZXMoKS50aGVuKChsYXVuY2hlcykgPT4ge1xyXG4gICAgICBsYXVuY2hlcy5mb3JFYWNoKChsYXVuY2gpID0+IHtcclxuICAgICAgICBjb25zdCBsYXVuY2hDYXJkID0gbGF1bmNoQ2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsYXVuY2hDYXJkLmNsYXNzTmFtZSA9ICdsYXVuY2gtY2FyZCc7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZ0hlYWRlciA9IGxhdW5jaENhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nSGVhZGVyJylbMF07XHJcbiAgICAgICAgaW1nSGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bGF1bmNoLmltYWdlfScpYDtcclxuXHJcbiAgICAgICAgY29uc3QgaDMgPSBsYXVuY2hDYXJkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMycpWzBdO1xyXG4gICAgICAgIGgzLmlubmVyVGV4dCA9IGxhdW5jaC5uYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Db21tZW50ID0gbGF1bmNoQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xyXG4gICAgICAgIGJ0bkNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IExhdW5jaFVJLnNob3dNb2RhbChsYXVuY2guaWQpOyB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuUmVzZXJ2ZSA9IGxhdW5jaENhcmQucXVlcnlTZWxlY3RvcignLnJlc2VydmUnKTtcclxuICAgICAgICBidG5SZXNlcnZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBMYXVuY2hVSS5zaG93TW9kYWwobGF1bmNoLmlkKTsgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpa2VzQ291bnQgPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5saWtlcyBzcGFuJyk7XHJcbiAgICAgICAgSW52b2x2ZW1lbnRVSS5yZW5kZXJMaWtlcyhsaWtlc0NvdW50LCBsYXVuY2guaWQpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VCdG4gPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5saWtlcyBpJyk7XHJcbiAgICAgICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEludm9sdmVtZW50VUkucG9zdExpa2UobGlrZXNDb3VudCwgbGF1bmNoLmlkKSk7XHJcblxyXG4gICAgICAgIGxhdW5jaExpc3QuYXBwZW5kQ2hpbGQobGF1bmNoQ2FyZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2hvd01vZGFsID0gKGxhdW5jaElkKSA9PiB7XHJcbiAgICBjb25zdCBsYXVuY2hkYXRhID0gTGF1bmNoU2VydmljZS5nZXRMYXVuY2gobGF1bmNoSWQpO1xyXG5cclxuICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2xhdW5jaGRhdGEuaW1hZ2V9JylgO1xyXG4gICAgaDEuaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5uYW1lO1xyXG5cclxuICAgIGxzcC5pbm5lclRleHQgPSBsYXVuY2hkYXRhLmxzcF9uYW1lO1xyXG4gICAgbWlzc2lvbi5pbm5lclRleHQgPSBsYXVuY2hkYXRhLm1pc3Npb25fdHlwZTtcclxuICAgIHBhZC5pbm5lclRleHQgPSBsYXVuY2hkYXRhLnBhZDtcclxuICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IGxhdW5jaGRhdGEubG9jYXRpb247XHJcblxyXG4gICAgSW52b2x2ZW1lbnRVSS5yZW5kZXJDb21tZW50cyhsYXVuY2hJZCk7XHJcbiAgICBsYXVuY2hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgSW52b2x2ZW1lbnRVSS5jbGVhckNvbW1lbnRzKCk7XHJcbiAgICBsYXVuY2hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==