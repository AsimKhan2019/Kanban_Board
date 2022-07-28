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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #fff;\r\n  color: #1e1e1e;\r\n  font-size: 14px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(blue, yellow);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.privacy-policy > a {\r\n  color: #009688;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #1e1e1e;\r\n  align-items: center;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  margin-bottom: 50px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-links {\r\n  font-family: 'Open Sans', sans-serif;\r\n  display: flex;\r\n  margin-right: 20px;\r\n  gap: 20px;\r\n  font-size: 19px;\r\n}\r\n\r\n.header-links > a {\r\n  color: #ffffff80;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.header-links > a:hover {\r\n  color: #009688;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n}\r\n\r\n.media-links {\r\n  border-left: 3px solid white;\r\n  display: flex;\r\n  gap: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.launch-list {\r\n  /* display: grid;\r\n  grid-template-columns: 300px 300px 300px; */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.launch-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  border: 4px solid #dfe1e6;\r\n  padding-bottom: 15px;\r\n  border-radius: 20px 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.launch-card:hover {\r\n  box-shadow: 0 0 20px 20px #ddd;\r\n}\r\n\r\n.imgHeader {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 250px;\r\n  background-size: cover;\r\n}\r\n\r\n.title {\r\n  padding: 10px;\r\n  height: 100px;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.template {\r\n  display: none;\r\n}\r\n\r\n#launch-modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(1px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 7;\r\n  overflow: auto;\r\n  top: 0;\r\n  padding-top: 80px;\r\n}\r\n\r\n#launch-modal .launch-card {\r\n  width: 67%;\r\n  height: 120%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  background-color: #1e1e1e;\r\n  border-radius: 20px;\r\n\r\n  /* overflow-y: scroll; */\r\n}\r\n\r\n#launch-modal .launch-card:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.launch-img {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n\r\n  /* background-color: #1e1e1e;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px;\r\n  margin-left: 700px;\r\n  margin-top: 10px; */\r\n  font-size: 20px;\r\n\r\n  /* font-weight: bold; */\r\n  width: 4%;\r\n  cursor: pointer;\r\n  margin-left: 62%;\r\n}\r\n\r\n.launch-img .content {\r\n  /* background-color: rgba(0, 0, 0, 0.5); */\r\n  padding: 10px;\r\n  margin-top: 367px;\r\n  padding-bottom: 35px;\r\n  margin-bottom: 0;\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 64px;\r\n  margin-top: 89px;\r\n}\r\n\r\n.details ul {\r\n  list-style: none;\r\n  columns: 2;\r\n}\r\n\r\n#comment ul {\r\n  display: block;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n\r\n.entry {\r\n  margin-top: 15px;\r\n}\r\n\r\n.entry form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n#txt-visitor {\r\n  padding: 10px;\r\n  width: 186px;\r\n}\r\n\r\n#txt-comment {\r\n  height: 50px;\r\n  padding: 10px;\r\n}\r\n\r\n#btn-save-comment {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 20px 0;\r\n  margin-top: 50px;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  background-color: #1e1e1e;\r\n  color: #fff;\r\n}\r\n\r\n.privacy-policy {\r\n  color: #fff;\r\n  margin-left: 100px;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin-right: 100px;\r\n}\r\n\r\n.createdby {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: #fff;\r\n  color: #1e1e1e;\r\n  font-size: 14px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 100px;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(blue, yellow);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.privacy-policy > a {\r\n  color: #009688;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #1e1e1e;\r\n  align-items: center;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  margin-bottom: 50px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.header-links {\r\n  font-family: 'Open Sans', sans-serif;\r\n  display: flex;\r\n  margin-right: 20px;\r\n  gap: 20px;\r\n  font-size: 19px;\r\n}\r\n\r\n.header-links > a {\r\n  color: #ffffff80;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.header-links > a:hover {\r\n  color: #009688;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n}\r\n\r\n.media-links {\r\n  border-left: 3px solid white;\r\n  display: flex;\r\n  gap: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.launch-list {\r\n  /* display: grid;\r\n  grid-template-columns: 300px 300px 300px; */\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.launch-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  overflow: hidden;\r\n  border: 4px solid #dfe1e6;\r\n  padding-bottom: 15px;\r\n  border-radius: 20px 0;\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.launch-card:hover {\r\n  box-shadow: 0 0 20px 20px #ddd;\r\n}\r\n\r\n.imgHeader {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 250px;\r\n  background-size: cover;\r\n}\r\n\r\n.title {\r\n  padding: 10px;\r\n  height: 100px;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.comment,\r\n.reserve {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.template {\r\n  display: none;\r\n}\r\n\r\n#launch-modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(1px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 7;\r\n  overflow: auto;\r\n  top: 0;\r\n  padding-top: 80px;\r\n}\r\n\r\n#launch-modal .launch-card {\r\n  width: 67%;\r\n  height: 120%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  background-color: #1e1e1e;\r\n  border-radius: 20px;\r\n\r\n  /* overflow-y: scroll; */\r\n}\r\n\r\n#launch-modal .launch-card:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.launch-img {\r\n  background-image: url('https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg');\r\n  height: 50vh;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n\r\n  /* background-color: #1e1e1e;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px;\r\n  margin-left: 700px;\r\n  margin-top: 10px; */\r\n  font-size: 20px;\r\n\r\n  /* font-weight: bold; */\r\n  width: 4%;\r\n  cursor: pointer;\r\n  margin-left: 62%;\r\n}\r\n\r\n.launch-img .content {\r\n  /* background-color: rgba(0, 0, 0, 0.5); */\r\n  padding: 10px;\r\n  margin-top: 367px;\r\n  padding-bottom: 35px;\r\n  margin-bottom: 0;\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 64px;\r\n  margin-top: 89px;\r\n}\r\n\r\n.details ul {\r\n  list-style: none;\r\n  columns: 2;\r\n}\r\n\r\n#comment ul {\r\n  display: block;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n\r\n.entry {\r\n  margin-top: 15px;\r\n}\r\n\r\n.entry form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n#txt-visitor {\r\n  padding: 10px;\r\n  width: 186px;\r\n}\r\n\r\n#txt-comment {\r\n  height: 50px;\r\n  padding: 10px;\r\n}\r\n\r\n#btn-save-comment {\r\n  color: white;\r\n  background-color: #009688;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 20px 0;\r\n  margin-top: 50px;\r\n  box-shadow: 5px 2px 8px 2px #424242;\r\n  background-color: #1e1e1e;\r\n  color: #fff;\r\n}\r\n\r\n.privacy-policy {\r\n  color: #fff;\r\n  margin-left: 100px;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin-right: 100px;\r\n}\r\n\r\n.createdby {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n"],"sourceRoot":""}]);
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
      element.innerText = parseInt(element.innerText,10)+1;
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
      launchCount.innerText = launches.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCw2QkFBNkIscUJBQXFCLHNCQUFzQixLQUFLLFdBQVcsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsMkNBQTJDLEtBQUssV0FBVyw0QkFBNEIsS0FBSyxlQUFlLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUssbUJBQW1CLHNCQUFzQix3REFBd0Qsb0NBQW9DLDJDQUEyQyxLQUFLLDZCQUE2QixxQkFBcUIsNEJBQTRCLEtBQUssZ0JBQWdCLG9CQUFvQixxQ0FBcUMsZ0NBQWdDLDBCQUEwQiwwQ0FBMEMsMEJBQTBCLHNCQUFzQixLQUFLLHVCQUF1QiwyQ0FBMkMsb0JBQW9CLHlCQUF5QixnQkFBZ0Isc0JBQXNCLEtBQUssMkJBQTJCLHVCQUF1QixtQ0FBbUMsS0FBSyxpQ0FBaUMscUJBQXFCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxzQkFBc0IsbUNBQW1DLG9CQUFvQixnQkFBZ0IseUJBQXlCLEtBQUssc0JBQXNCLHVCQUF1QixnREFBZ0Qsc0JBQXNCLHNCQUFzQixxQkFBcUIsOEJBQThCLEtBQUssc0JBQXNCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLHVCQUF1QixnQ0FBZ0MsMkJBQTJCLDRCQUE0QixtQ0FBbUMsS0FBSyw0QkFBNEIscUNBQXFDLEtBQUssb0JBQW9CLDJKQUEySixvQkFBb0IsNkJBQTZCLEtBQUssZ0JBQWdCLG9CQUFvQixvQkFBb0IsS0FBSyxrQkFBa0Isb0JBQW9CLDBCQUEwQixvQ0FBb0Msb0JBQW9CLEtBQUssK0JBQStCLG1CQUFtQixnQ0FBZ0MseUJBQXlCLG9CQUFvQixtQkFBbUIsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUssdUJBQXVCLG9CQUFvQixzQkFBc0IsMkNBQTJDLGlDQUFpQyxtQkFBbUIsb0JBQW9CLGlCQUFpQixxQkFBcUIsYUFBYSx3QkFBd0IsS0FBSyxvQ0FBb0MsaUJBQWlCLG1CQUFtQixxQkFBcUIsa0JBQWtCLGdDQUFnQywwQkFBMEIsaUNBQWlDLE9BQU8sMENBQTBDLHVCQUF1QixLQUFLLHFCQUFxQiwySkFBMkosbUJBQW1CLDZCQUE2QixtQ0FBbUMsS0FBSyxnQkFBZ0IseUJBQXlCLHVDQUF1QyxtQkFBbUIsbUJBQW1CLG9CQUFvQix5QkFBeUIsd0JBQXdCLHdCQUF3QixnQ0FBZ0Msa0JBQWtCLHNCQUFzQix1QkFBdUIsS0FBSyw4QkFBOEIsK0NBQStDLHNCQUFzQix3QkFBd0IsMkJBQTJCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix3QkFBd0IsdUJBQXVCLEtBQUsscUJBQXFCLHVCQUF1QixpQkFBaUIsS0FBSyxxQkFBcUIscUJBQXFCLHVCQUF1Qix5QkFBeUIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGVBQWUsd0JBQXdCLEtBQUssc0JBQXNCLG9CQUFvQixtQkFBbUIsS0FBSyxzQkFBc0IsbUJBQW1CLG9CQUFvQixLQUFLLDJCQUEyQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixvQkFBb0IsbUJBQW1CLEtBQUssZ0JBQWdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHNCQUFzQixzQkFBc0IsdUJBQXVCLDBDQUEwQyxnQ0FBZ0Msa0JBQWtCLEtBQUsseUJBQXlCLGtCQUFrQix5QkFBeUIsS0FBSyxvQkFBb0Isa0JBQWtCLDBCQUEwQixLQUFLLG9CQUFvQixrQkFBa0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixnQ0FBZ0MsS0FBSyxXQUFXLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxVQUFVLE9BQU8sWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFB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QUFDQSxrQkFBa0IsOENBQU07QUFDeEI7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QitDO0FBQ0E7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxJQUFJLHFFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdDQUFnQztBQUNyRjtBQUNBO0FBQ0EscURBQXFELGdDQUFnQztBQUNyRjtBQUNBO0FBQ0EsUUFBUSxxRUFBeUI7QUFDakM7QUFDQSxnREFBZ0Qsa0VBQXNCO0FBQ3RFO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtRUFBdUI7QUFDOUM7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUEyQjtBQUMvQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0ludm9sdmVtZW50U2VydmljZS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9JbnZvbHZlbWVudFVJLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL0xhdW5jaFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8va2FuYmFuX2JvYXJkLy4vc3JjL21vZHVsZXMvTW9kYWxzLmpzIiwid2VicGFjazovL2thbmJhbl9ib2FyZC8uL3NyYy9tb2R1bGVzL2xhdW5jaEFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5fYm9hcmQvLi9zcmMvbW9kdWxlcy9sYXVuY2hVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMWUxZTFlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyA+IHAge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYmx1ZSwgeWVsbG93KTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeS1wb2xpY3kgPiBhIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3MgPiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tZWRpYS1saW5rcyB7XFxyXFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1saXN0IHtcXHJcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDMwMHB4IDMwMHB4OyAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZGZlMWU2O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMjBweCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zcGFjZWxhdW5jaG5vdy1wcm9kLWVhc3QubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL21lZGlhL2xhdW5jaGVyX2ltYWdlcy9mYWxjb25fOV9ibG9ja19faW1hZ2VfMjAyMTA1MDYwNjA4MzEuanBnJyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiA3O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQge1xcclxcbiAgd2lkdGg6IDY3JTtcXHJcXG4gIGhlaWdodDogMTIwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHJcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3NwYWNlbGF1bmNobm93LXByb2QtZWFzdC5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vbWVkaWEvbGF1bmNoZXJfaW1hZ2VzL2ZhbGNvbl85X2Jsb2NrX19pbWFnZV8yMDIxMDUwNjA2MDgzMS5qcGcnKTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4OyAqL1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxyXFxuICB3aWR0aDogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyAuY29udGVudCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzY3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNjRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDg5cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW5zOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB1bCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDNweDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LXZpc2l0b3Ige1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxODZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC1jb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNidG4tc2F2ZS1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5LXBvbGljeSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVkYnkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpREFBaUQ7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QUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMWUxZTFlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyA+IHAge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYmx1ZSwgeWVsbG93KTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeS1wb2xpY3kgPiBhIHtcXHJcXG4gIGNvbG9yOiAjMDA5Njg4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGlua3MgPiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxpbmtzID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwOTY4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tZWRpYS1saW5rcyB7XFxyXFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1saXN0IHtcXHJcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDMwMHB4IDMwMHB4OyAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sYXVuY2gtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZGZlMWU2O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMjBweCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zcGFjZWxhdW5jaG5vdy1wcm9kLWVhc3QubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL21lZGlhL2xhdW5jaGVyX2ltYWdlcy9mYWxjb25fOV9ibG9ja19faW1hZ2VfMjAyMTA1MDYwNjA4MzEuanBnJyk7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQsXFxyXFxuLnJlc2VydmUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbGF1bmNoLW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiA3O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQge1xcclxcbiAgd2lkdGg6IDY3JTtcXHJcXG4gIGhlaWdodDogMTIwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHJcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2xhdW5jaC1tb2RhbCAubGF1bmNoLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdW5jaC1pbWcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3NwYWNlbGF1bmNobm93LXByb2QtZWFzdC5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vbWVkaWEvbGF1bmNoZXJfaW1hZ2VzL2ZhbGNvbl85X2Jsb2NrX19pbWFnZV8yMDIxMDUwNjA2MDgzMS5qcGcnKTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4OyAqL1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxyXFxuICB3aWR0aDogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF1bmNoLWltZyAuY29udGVudCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzY3cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNjRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDg5cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW5zOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB1bCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDNweDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jdHh0LXZpc2l0b3Ige1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAxODZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3R4dC1jb21tZW50IHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNidG4tc2F2ZS1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDJweCA4cHggMnB4ICM0MjQyNDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5LXBvbGljeSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVkYnkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTGF1bmNoVUkgZnJvbSAnLi9tb2R1bGVzL2xhdW5jaFVJLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIExhdW5jaFVJLnJlbmRlckxhdW5jaGVzKCk7XG59KTsiLCJpbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi9Nb2RhbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBUEkge1xyXG4gIHN0YXRpYyBjb21tZW50c1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xcnk1dXdwRkxrdnI4V1I5VEpWQi9jb21tZW50cyc7XHJcblxyXG4gIHN0YXRpYyBsaWtlc1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xcnk1dXdwRkxrdnI4V1I5VEpWQi9saWtlcyc7XHJcblxyXG4gIHN0YXRpYyBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGxhdW5jaElkKSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IFtdO1xyXG4gICAgYXdhaXQgZmV0Y2goYCR7SW52b2x2ZW1lbnRBUEkuY29tbWVudHNVUkx9P2l0ZW1faWQ9JHtsYXVuY2hJZH1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAganNvbi5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICBjb21tZW50cy5wdXNoKG5ldyBDb21tZW50KGMuY3JlYXRpb25fZGF0ZSwgYy51c2VybmFtZSwgYy5jb21tZW50KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBvc3RDb21tZW50ID0gYXN5bmMgKGxhdW5jaElkLCBuZXdjb21tZW50KSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChJbnZvbHZlbWVudEFQSS5jb21tZW50c1VSTCwge1xyXG5cclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBsYXVuY2hJZCxcclxuICAgICAgICB1c2VybmFtZTogbmV3Y29tbWVudC51c2VybmFtZSxcclxuICAgICAgICBjb21tZW50OiBuZXdjb21tZW50LmNvbW1lbnQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZldGNoQWxsTGlrZXMgPSBhc3luYyAoKSA9PiBmZXRjaChJbnZvbHZlbWVudEFQSS5saWtlc1VSTClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG5cclxuICBzdGF0aWMgcG9zdExpa2UgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKEludm9sdmVtZW50QVBJLmxpa2VzVVJMLCB7XHJcblxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGxhdW5jaElkLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XHJcblxyXG5sZXQgbGlrZXNBcnJheSA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRTZXJ2aWNlIHtcclxuICBzdGF0aWMgZ2V0Q29tbWVudHMgPSBhc3luYyAobGF1bmNoSWQpID0+IEludm9sdmVtZW50QVBJLmZldGNoQ29tbWVudHMobGF1bmNoSWQpXHJcblxyXG4gIHN0YXRpYyBwb3N0Q29tbWVudCA9IGFzeW5jIChsYXVuY2hJZCwgbmV3Q29tbWVudCkgPT4ge1xyXG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkucG9zdENvbW1lbnQobGF1bmNoSWQsIG5ld0NvbW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFsbExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGlrZXNBcnJheSA9IGF3YWl0IEludm9sdmVtZW50QVBJLmZldGNoQWxsTGlrZXMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMaWtlcyA9IGFzeW5jIChsYXVuY2hJZCkgPT4ge1xyXG4gICAgaWYgKGxpa2VzQXJyYXkubGVuZ3RoIDwgMSkgeyBhd2FpdCB0aGlzLmdldEFsbExpa2VzKCk7IH1cclxuICAgIGNvbnN0IHJlY29yZCA9IGxpa2VzQXJyYXkuZmluZCgobCkgPT4gbC5pdGVtX2lkID09PSBsYXVuY2hJZCk7XHJcbiAgICByZXR1cm4gKHJlY29yZCAhPSBudWxsKSA/IHJlY29yZC5saWtlcyA6IDA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcG9zdExpa2UgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcclxuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLnBvc3RMaWtlKGxhdW5jaElkKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgSW52b2x2ZW1lbnRTZXJ2aWNlIGZyb20gJy4vSW52b2x2ZW1lbnRTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vTW9kYWxzLmpzJztcclxuXHJcbmNvbnN0IGdldERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudExpc3QnKTtcclxuY29uc3QgaGlkZGVuTGF1bmNoSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF1bmNoLWlkJyk7XHJcbmNvbnN0IGNvbW1lbnRzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtY291bnQnKTtcclxuY29uc3QgdHh0bmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eHQtdmlzaXRvcicpO1xyXG5jb25zdCB0eHRjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1jb21tZW50Jyk7XHJcbmNvbnN0IGJ0blNhdmVDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zYXZlLWNvbW1lbnQnKTtcclxuYnRuU2F2ZUNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7IGF3YWl0IEludm9sdmVtZW50VUkucG9zdENvbW1lbnQoKTsgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudFVJIHtcclxuICBzdGF0aWMgcmVuZGVyQ29tbWVudHMgPSBhc3luYyAobGF1bmNoSWQpID0+IHtcclxuICAgIGhpZGRlbkxhdW5jaElkLnZhbHVlID0gbGF1bmNoSWQ7XHJcbiAgICBnZXREZXRhaWxzLmlubmVySFRNTCA9ICcgJztcclxuICAgIGF3YWl0IEludm9sdmVtZW50U2VydmljZS5nZXRDb21tZW50cyhsYXVuY2hJZClcclxuICAgICAgLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICAgICAgY29tbWVudHNDb3VudC5pbm5lclRleHQgPSBjb21tZW50cy5sZW5ndGg7XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9ICR7Y29tbWVudC5jb21tZW50fWA7XHJcbiAgICAgICAgICBnZXREZXRhaWxzLmFwcGVuZChsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsZWFyQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb21tZW50c0NvdW50LmlubmVyVGV4dCA9IDA7XHJcbiAgICB0eHRuYW1lLnZhbHVlID0gJyc7XHJcbiAgICB0eHRjb21tZW50LnZhbHVlID0gJyc7XHJcbiAgICBoaWRkZW5MYXVuY2hJZC52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBvc3RDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbGF1bmNoSWQgPSBoaWRkZW5MYXVuY2hJZC52YWx1ZTtcclxuICAgIGF3YWl0IEludm9sdmVtZW50U2VydmljZS5wb3N0Q29tbWVudChsYXVuY2hJZCxcclxuICAgICAgbmV3IENvbW1lbnQoJycsIHR4dG5hbWUudmFsdWUsIHR4dGNvbW1lbnQudmFsdWUpKTtcclxuICAgIEludm9sdmVtZW50VUkuY2xlYXJDb21tZW50cygpO1xyXG4gICAgSW52b2x2ZW1lbnRVSS5yZW5kZXJDb21tZW50cyhsYXVuY2hJZCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyTGlrZXMgPSAoZWxlbWVudCwgbGF1bmNoSWQpID0+IHtcclxuICAgIEludm9sdmVtZW50U2VydmljZS5nZXRMaWtlcyhsYXVuY2hJZCkudGhlbigobGlrZXMpID0+IHtcclxuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBsaWtlcztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBvc3RMaWtlID0gKGVsZW1lbnQsIGxhdW5jaElkKSA9PiB7XHJcbiAgICBJbnZvbHZlbWVudFNlcnZpY2UucG9zdExpa2UobGF1bmNoSWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHBhcnNlSW50KGVsZW1lbnQuaW5uZXJUZXh0LDEwKSsxO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufSIsImltcG9ydCBMYXVjaEFQSSBmcm9tICcuL2xhdW5jaEFQSS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVuY2hTZXJ2aWNlIHtcclxuICBzdGF0aWMgTGF1bmNoTGlzdCA9IFtdO1xyXG5cclxuICBzdGF0aWMgZ2V0TGF1bmNoZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0Lmxlbmd0aCA8IDEpIHtcclxuICAgICAgTGF1bmNoU2VydmljZS5MYXVuY2hMaXN0ID0gYXdhaXQgTGF1Y2hBUEkuZmV0Y2hMYXVuY2hlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhdW5jaFNlcnZpY2UuTGF1bmNoTGlzdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMYXVuY2ggPSAobGF1bmNoSWQpID0+IExhdW5jaFNlcnZpY2UuTGF1bmNoTGlzdC5maW5kKChsKSA9PiBsLmlkID09PSBsYXVuY2hJZClcclxufSIsImV4cG9ydCBjbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoY3JlYXRpb25fZGF0ZSwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0aW9uX2RhdGUgPSBjcmVhdGlvbl9kYXRlO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2gge1xuICBsaWtlcztcblxuICBjb21tZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsc3BfbmFtZSwgbWlzc2lvbl90eXBlLCBwYWQsIGxvY2F0aW9uLCBpbWFnZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubHNwX25hbWUgPSBsc3BfbmFtZTtcbiAgICB0aGlzLm1pc3Npb25fdHlwZSA9IG1pc3Npb25fdHlwZTtcbiAgICB0aGlzLnBhZCA9IHBhZDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG59IiwiaW1wb3J0IHsgTGF1bmNoIH0gZnJvbSAnLi9Nb2RhbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXVjaEFQSSB7XG4gIHN0YXRpYyBsYXVuY2hBUElVUkwgPSAnaHR0cHM6Ly9sbC50aGVzcGFjZWRldnMuY29tLzIuMi4wL2xhdW5jaC91cGNvbWluZy8/bW9kZT1saXN0JnN0YXR1cz04Jm9yZGVyaW5nPXdpbmRvd19lbmQnO1xuXG4gIHN0YXRpYyBmZXRjaExhdW5jaGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF1bmNoZXMnKSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBsYXVuY2hBcnIgPSBbXTtcbiAgICAgIGF3YWl0IGZldGNoKExhdWNoQVBJLmxhdW5jaEFQSVVSTClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGpzb24ucmVzdWx0cy5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgICAgICBsYXVuY2hBcnIucHVzaChcbiAgICAgICAgICAgICAgbmV3IExhdW5jaChsLmlkLCBsLm5hbWUsIGwubHNwX25hbWUsIGwubWlzc2lvbl90eXBlLCBsLnBhZCwgbC5sb2NhdGlvbiwgbC5pbWFnZSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxhdW5jaEFycik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF1bmNoZXMnLCBkYXRhU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhdW5jaGVzJykpO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50VUkgZnJvbSAnLi9JbnZvbHZlbWVudFVJLmpzJztcclxuaW1wb3J0IExhdW5jaFNlcnZpY2UgZnJvbSAnLi9MYXVuY2hTZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IGxhdW5jaENhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtY2FyZC50ZW1wbGF0ZScpO1xyXG5jb25zdCBsYXVuY2hDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtY291bnQnKTtcclxuY29uc3QgbGF1bmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXVuY2gtbGlzdCcpO1xyXG5jb25zdCBsYXVuY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXVuY2gtbW9kYWwnKTtcclxuY29uc3QgaW1nID0gbGF1bmNoTW9kYWwucXVlcnlTZWxlY3RvcignLmxhdW5jaC1pbWcnKTtcclxuY29uc3QgaDEgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5jb25zdCBsc3AgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcubHNwJyk7XHJcbmNvbnN0IG1pc3Npb24gPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcubWlzc2lvbicpO1xyXG5jb25zdCBwYWQgPSBsYXVuY2hNb2RhbC5xdWVyeVNlbGVjdG9yKCcucGFkJyk7XHJcbmNvbnN0IGxvY2F0aW9uID0gbGF1bmNoTW9kYWwucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XHJcbmNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gTGF1bmNoVUkuY2xvc2VNb2RhbCgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdW5jaFVJIHtcclxuICBzdGF0aWMgcmVuZGVyTGF1bmNoZXMgPSAoKSA9PiB7XHJcbiAgICBMYXVuY2hTZXJ2aWNlLmdldExhdW5jaGVzKCkudGhlbigobGF1bmNoZXMpID0+IHtcclxuICAgICAgbGF1bmNoQ291bnQuaW5uZXJUZXh0ID0gbGF1bmNoZXMubGVuZ3RoO1xyXG4gICAgICBsYXVuY2hlcy5mb3JFYWNoKChsYXVuY2gpID0+IHtcclxuICAgICAgICBjb25zdCBsYXVuY2hDYXJkID0gbGF1bmNoQ2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsYXVuY2hDYXJkLmNsYXNzTmFtZSA9ICdsYXVuY2gtY2FyZCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1nSGVhZGVyID0gbGF1bmNoQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdIZWFkZXInKVswXTtcclxuICAgICAgICBpbWdIZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtsYXVuY2guaW1hZ2V9JylgO1xyXG5cclxuICAgICAgICBjb25zdCBoMyA9IGxhdW5jaENhcmQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gzJylbMF07XHJcbiAgICAgICAgaDMuaW5uZXJUZXh0ID0gbGF1bmNoLm5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkNvbW1lbnQgPSBsYXVuY2hDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50Jyk7XHJcbiAgICAgICAgYnRuQ29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgTGF1bmNoVUkuc2hvd01vZGFsKGxhdW5jaC5pZCk7IH0pO1xyXG5cclxuICAgICAgICBjb25zdCBidG5SZXNlcnZlID0gbGF1bmNoQ2FyZC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2ZScpO1xyXG4gICAgICAgIGJ0blJlc2VydmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IExhdW5jaFVJLnNob3dNb2RhbChsYXVuY2guaWQpOyB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlrZXNDb3VudCA9IGxhdW5jaENhcmQucXVlcnlTZWxlY3RvcignLmxpa2VzIHNwYW4nKTtcclxuICAgICAgICBJbnZvbHZlbWVudFVJLnJlbmRlckxpa2VzKGxpa2VzQ291bnQsIGxhdW5jaC5pZCk7XHJcbiAgICAgICAgY29uc3QgbGlrZUJ0biA9IGxhdW5jaENhcmQucXVlcnlTZWxlY3RvcignLmxpa2VzIGknKTtcclxuICAgICAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gSW52b2x2ZW1lbnRVSS5wb3N0TGlrZShsaWtlc0NvdW50LCBsYXVuY2guaWQpKTtcclxuXHJcbiAgICAgICAgbGF1bmNoTGlzdC5hcHBlbmRDaGlsZChsYXVuY2hDYXJkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93TW9kYWwgPSAobGF1bmNoSWQpID0+IHtcclxuICAgIGNvbnN0IGxhdW5jaGRhdGEgPSBMYXVuY2hTZXJ2aWNlLmdldExhdW5jaChsYXVuY2hJZCk7XHJcblxyXG4gICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7bGF1bmNoZGF0YS5pbWFnZX0nKWA7XHJcbiAgICBoMS5pbm5lclRleHQgPSBsYXVuY2hkYXRhLm5hbWU7XHJcblxyXG4gICAgbHNwLmlubmVyVGV4dCA9IGxhdW5jaGRhdGEubHNwX25hbWU7XHJcbiAgICBtaXNzaW9uLmlubmVyVGV4dCA9IGxhdW5jaGRhdGEubWlzc2lvbl90eXBlO1xyXG4gICAgcGFkLmlubmVyVGV4dCA9IGxhdW5jaGRhdGEucGFkO1xyXG4gICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gbGF1bmNoZGF0YS5sb2NhdGlvbjtcclxuXHJcbiAgICBJbnZvbHZlbWVudFVJLnJlbmRlckNvbW1lbnRzKGxhdW5jaElkKTtcclxuICAgIGxhdW5jaE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBJbnZvbHZlbWVudFVJLmNsZWFyQ29tbWVudHMoKTtcclxuICAgIGxhdW5jaE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9