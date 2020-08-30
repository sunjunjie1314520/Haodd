"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/main.js?{"page":"pages%2Findex%2FHome"} ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_Home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/Home.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            const promise = this.constructor\n            return this.then(\n              value => promise.resolve(callback()).then(() => value),\n              reason => promise.resolve(callback()).then(() => {\n                throw reason\n              })\n            )\n          }\n        }\n        _pages_index_Home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_Home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/Home'\n        _pages_index_Home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_Home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQUc7QUFDWCxRQUFRLDBFQUFHO0FBQ1gsUUFBUSwwRUFBRztBQUNYLGdCQUFnQiwwRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9Ib21lLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKFxuICAgICAgICAgICAgICB2YWx1ZSA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgICAgICAgICAgIHJlYXNvbiA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L0hvbWUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/main.js?{"type":"appStyle"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/uni-app/Haodd/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "din",
      "src": "url('~@/static/fonts/DIN_Alternate_Bold.ttf')",
      "fontWeight": "normal"
    }
  ],
  "ico-close": {
    "width": "30upx"
  },
  "font": {
    "fontFamily": "din"
  },
  "app-bar": {
    "float": "left",
    "width": 100
  },
  "status-bar": {
    "backgroundColor": "#111118"
  },
  "app": {
    "float": "left",
    "width": 100,
    "position": "relative",
    "backgroundColor": "#111118"
  },
  "pub-flex-center": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "fixed-bottom": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx"
  },
  "w": {
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx",
    "float": "left",
    "width": 100
  },
  "bg-one": {
    "background": "#f7f7f7"
  },
  "bg-two": {
    "background": "#f5f5f5"
  },
  "bg-three": {
    "background": "#f9fbfc"
  },
  "bg-four": {
    "background": "#f3f8fc"
  },
  "bg-five": {
    "background": "#f8f8f8"
  },
  "bg-six": {
    "background": "#111118"
  },
  "fl": {
    "float": "left"
  },
  "fr": {
    "float": "right"
  },
  "mt20": {
    "marginTop": "20upx"
  },
  "mt40": {
    "marginTop": "40upx"
  },
  "mt60": {
    "marginTop": "60upx"
  },
  "placeholder-class": {
    "color": "rgba(255,255,255,0.6)"
  },
  "hover-class": {
    "background": "0 0",
    "opacity": 1
  },
  "select-active": {
    "color": "#bebebe"
  },
  "pub-img-back": {
    "background": "#e5e5e5"
  },
  "icon-return": {
    "height": 100,
    "width": "100upx"
  },
  "pub-select": {
    "height": 100
  },
  "flex-center": {
    "height": 100,
    "display": "flex",
    "alignItems": "center"
  },
  "flex-page": {
    "display": "flex",
    "flexDirection": "column"
  },
  "pub-null": {
    "height": "150upx",
    "float": "left",
    "width": 100
  },
  "pub-button-null": {
    "height": "130upx",
    "float": "left",
    "width": 100
  },
  "pub-button-null1": {
    "height": "100upx",
    "float": "left",
    "width": 100
  },
  "pub-button": {
    "float": "left",
    "width": 100
  },
  "pub-fixed-button": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "background": "#f7f7f7",
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx",
    "zIndex": 99
  },
  "fast-button": {
    "float": "left",
    "width": 100,
    "marginTop": "200upx",
    "paddingTop": 0,
    "paddingRight": "60upx",
    "paddingBottom": 0,
    "paddingLeft": "60upx"
  },
  "pub-upload": {
    "float": "left",
    "width": 100
  },
  "pub-send": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "paddingTop": "15upx",
    "paddingRight": "28upx",
    "paddingBottom": "15upx",
    "paddingLeft": "28upx",
    "display": "flex",
    "justifyContent": "space-between"
  },
  "ui-button": {
    "border": ".5px solid theme-color",
    "borderRadius": "60upx",
    "fontSize": "28upx",
    "height": "60upx",
    "paddingTop": 0,
    "paddingRight": "20upx",
    "paddingBottom": 0,
    "paddingLeft": "20upx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "minWidth": "142upx"
  },
  "ico-play": {
    "position": "absolute",
    "left": 50,
    "top": 50,
    "transform": "translate(-50%,-50%)",
    "cursor": "pointer",
    "width": "79upx",
    "height": "79upx",
    "zIndex": 1
  },
  "fabu-post": {
    "paddingTop": "15upx",
    "paddingRight": "30upx",
    "paddingBottom": "15upx",
    "paddingLeft": "30upx",
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "pub-comment": {
    "paddingTop": "15upx",
    "paddingRight": "30upx",
    "paddingBottom": "15upx",
    "paddingLeft": "30upx",
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "background": "#fff",
    "boxShadow": "0 -5upx 24upx rgba(192,192,192,.26)"
  },
  "pub-comment-null": {
    "height": "100upx",
    "float": "left",
    "width": 100
  },
  "pub-search1": {
    "float": "left",
    "width": 100,
    "height": "80upx",
    "borderRadius": "10upx",
    "display": "flex",
    "marginTop": "20upx"
  },
  "alert-jubao": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "top": 0,
    "background": "rgba(0,0,0,.6)",
    "zIndex": 99
  },
  "report-page": {
    "float": "left",
    "width": 100,
    "paddingTop": "28upx",
    "paddingRight": "28upx",
    "paddingBottom": "28upx",
    "paddingLeft": "28upx"
  },
  "process-wrapper": {
    "marginTop": "60upx",
    "float": "left",
    "width": 100
  },
  "register-page": {
    "float": "left",
    "width": 100,
    "height": 100,
    "background": "#111118"
  },
  "set-info": {
    "height": 100,
    "float": "left",
    "width": 100,
    "paddingBottom": "30upx"
  },
  "login-page": {
    "height": 100,
    "backgroundColor": "#111118",
    "position": "relative",
    "overflow": "hidden",
    "paddingTop": 28
  },
  "footer": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "boxShadow": "0 -4upx 6upx rgba(0,0,0,.2)",
    "zIndex": 9,
    "backgroundColor": "rgba(0,0,0,0.9)"
  },
  "video-tabs": {
    "height": 100,
    "position": "relative"
  },
  "task-tabs": {
    "float": "left",
    "width": 100,
    "paddingTop": 0,
    "paddingRight": "38upx",
    "paddingBottom": 0,
    "paddingLeft": "38upx",
    "backgroundColor": "#111118"
  },
  "center-tabs": {
    "float": "left",
    "width": 100,
    "minHeight": 100,
    "paddingBottom": "30upx",
    "background": "#111118"
  },
  "set-page": {
    "float": "left",
    "width": 100,
    "height": 100,
    "background": "#111118"
  },
  "shop-tabs": {
    "float": "left",
    "width": 100
  },
  "shop-sort": {
    "float": "left",
    "width": 100,
    "paddingTop": "25upx",
    "paddingRight": 0,
    "paddingBottom": "25upx",
    "paddingLeft": 0,
    "backgroundColor": "#1e1e27"
  },
  "shop-keys-tabs": {
    "float": "left",
    "width": 100,
    "overflowY": "auto"
  },
  "out-link": {
    "float": "left",
    "width": 100,
    "paddingTop": "40upx",
    "paddingRight": 0,
    "paddingBottom": "40upx",
    "paddingLeft": 0
  },
  "product": {
    "paddingTop": "30upx",
    "paddingRight": "15upx",
    "paddingBottom": "30upx",
    "paddingLeft": "15upx",
    "float": "left",
    "width": 100
  },
  "modify-user": {
    "float": "left",
    "width": 100,
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "setpass-page": {
    "float": "left",
    "width": 100,
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "binddata-page": {
    "float": "left",
    "width": 100,
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "pub-etc": {
    "textAlign": "center",
    "color": "#ffffff",
    "paddingTop": "150upx",
    "paddingRight": 0,
    "paddingBottom": "150upx",
    "paddingLeft": 0
  },
  "my-task": {
    "float": "left",
    "width": 100,
    "marginTop": "30upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "my-code": {
    "float": "left",
    "width": 100,
    "paddingTop": "30upx"
  },
  "grade": {
    "float": "left",
    "width": 100,
    "paddingTop": "60upx"
  },
  "center-box-img": {
    "marginTop": "20upx"
  },
  "transaction": {
    "float": "left",
    "width": 100,
    "paddingTop": "30upx"
  },
  "agent-page": {
    "float": "left",
    "width": 100,
    "height": 100,
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx"
  },
  "alert-box": {
    "zIndex": 3,
    "position": "fixed",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "backgroundColor": "rgba(0,0,0,0.8)",
    "display": "block"
  },
  "reel-page": {
    "float": "left",
    "width": 100
  },
  "team-page": {
    "float": "left",
    "width": 100
  },
  "opening-page": {
    "float": "left",
    "width": 100,
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "shop-keys-search": {
    "float": "left",
    "width": 100,
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "forget-page": {
    "float": "left",
    "width": 100,
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "invitation": {
    "width": 100
  },
  "header": {
    "width": 100,
    "height": "86upx",
    "position": "relative",
    "backgroundColor": "#ffffff"
  },
  "container": {
    "width": 100,
    "minHeight": "calc(100vh - 86upx)"
  },
  "customer": {
    "width": 100,
    "paddingTop": "38upx",
    "paddingRight": "89upx",
    "paddingBottom": "56upx",
    "paddingLeft": "89upx",
    "boxSizing": "border-box"
  },
  "settlement": {
    "width": 100
  },
  "button1": {
    "width": 100,
    "paddingTop": "50upx",
    "paddingRight": "48upx",
    "paddingBottom": "50upx",
    "paddingLeft": "48upx",
    "boxSizing": "border-box",
    "float": "left"
  }
}

/***/ }),
/* 4 */
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.nvue?vue&type=template&id=7ba5938e&scoped=true&mpType=page */ 5);\n/* harmony import */ var _Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./Home.nvue?vue&type=style&index=0&id=7ba5938e&scoped=true&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./Home.nvue?vue&type=style&index=0&id=7ba5938e&scoped=true&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7ba5938e\",\n  \"3ee69988\",\n  false,\n  _Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/Home.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9Ib21lLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JhNTkzOGUmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0hvbWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTU5MzhlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL0hvbWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTU5MzhlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2JhNTkzOGVcIixcbiAgXCIzZWU2OTk4OFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9Ib21lLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?vue&type=template&id=7ba5938e&scoped=true&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Home.nvue?vue&type=template&id=7ba5938e&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_template_id_7ba5938e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?vue&type=template&id=7ba5938e&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "list",
    {
      ref: "list",
      staticClass: ["zhi_index04"],
      attrs: {
        pagingEnabled: true,
        offsetAccuracy: _vm.videoStyle.height,
        showScrollbar: false,
        loadmoreoffset: _vm.loadMoreHeight
      },
      on: { loadmore: _vm.Jiazai, scroll: _vm.Scroll }
    },
    [
      _vm._l(_vm.lie, function(l, i) {
        return _c(
          "cell",
          {
            key: i,
            staticStyle: { position: "relative" },
            style: _vm.videoStyle,
            appendAsTree: true,
            attrs: { append: "tree" },
            on: {
              disappear: function($event) {
                _vm.Disappear($event, i)
              },
              appear: _vm.onappear
            }
          },
          [
            _vm.index == i
              ? _c("u-video", {
                  ref: "video_" + i,
                  refInFor: true,
                  style: _vm.videoStyle,
                  attrs: {
                    id: "video_" + i,
                    loop: true,
                    src: l.shipin,
                    controls: "false",
                    enableProgressGesture: false,
                    showCenterPlayBtn: false,
                    objectFit: _vm.$xitong.platform == "ios" ? "fill" : "cover"
                  },
                  on: { play: _vm.panduanpofang, timeupdate: _vm.Timeupdate }
                })
              : _vm._e(),
            !l.fengmian && _vm.suo == 0
              ? _c("u-image", {
                  staticClass: ["zhi_index05"],
                  style: _vm.videoStyle,
                  attrs: { src: l.tu, mode: "aspectFill" }
                })
              : _vm._e(),
            _c("div", { staticClass: ["zhi_index06"] }, [
              _vm.so.zhuangtai == 20
                ? _c(
                    "div",
                    { staticClass: ["zhi_xiashipin5"] },
                    [
                      _c("u-image", {
                        staticClass: ["zhi_xiashipin6"],
                        attrs: {
                          src:
                            "https://limitao.myuan.cn/gongyong/shangchuan/tu/12/2020/02/pKQlORFbeeF38KhRfFsFSKSRfQ3AEJ.png"
                        }
                      }),
                      _c("u-text", { staticClass: ["zhi_index07"] }, [
                        _vm._v(_vm._s(l.chengshi))
                      ]),
                      _c("u-text", { staticClass: ["zhi_index07"] }, [
                        _vm._v("距离" + _vm._s(l.juli) + "km")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              l.huiyuan
                ? _c("u-text", { staticClass: ["zhi_index08"] }, [
                    _vm._v(_vm._s(l.huiyuan.nicheng))
                  ])
                : _vm._e(),
              _c("div", { staticClass: ["zhi_xiashipin7"] }, [
                _c("u-text", { staticClass: ["zhi_index09"] }, [
                  _vm._v(_vm._s(l.guanjianzi))
                ]),
                _c("u-text", { staticClass: ["zhi_index10"] }, [
                  _vm._v(_vm._s(l.ming))
                ])
              ])
            ]),
            _c("div", { staticClass: ["zhi_xiashipin10"] }, [
              _c(
                "view",
                { staticClass: ["zhi_index13"] },
                [
                  _c(
                    "view",
                    [
                      _c("u-image", {
                        staticClass: ["text-center"],
                        staticStyle: {
                          width: "90upx",
                          height: "90upx",
                          borderRadius: "45upx",
                          marginTop: "8px"
                        },
                        attrs: { mode: "aspectFill", src: l.touxiang }
                      })
                    ],
                    1
                  ),
                  l.guanzhu == 0
                    ? _c("u-image", {
                        staticStyle: {
                          position: "absolute",
                          color: "#FF0000",
                          left: "25upx",
                          bottom: "10upx",
                          width: "20px",
                          height: "20px"
                        },
                        attrs: {
                          src:
                            "https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/05/GEjhN9te3FDZuaHAH3AFdEfaHJt3Ej.png"
                        },
                        on: {
                          click: function($event) {
                            _vm.guanzhu(l.guanzhu)
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _c(
                "div",
                {
                  staticClass: ["zhi_index18"],
                  on: {
                    click: function($event) {
                      _vm.dianzan(l.yidianzan)
                    }
                  }
                },
                [
                  l.yidianzan == 1
                    ? _c("u-image", {
                        staticClass: ["zhi_index19"],
                        attrs: {
                          src:
                            "https://limitao.myuan.cn/gongyong/shangchuan/tu/38/2020/06/zal2uON0lr5AAQzmn06Z70A4Cy74Mu.png"
                        }
                      })
                    : _c("u-image", {
                        staticClass: ["zhi_index19"],
                        attrs: {
                          src:
                            "https://limitao.myuan.cn/gongyong/shangchuan/tu/38/2020/06/eG6VESJXIV3wSpzxYeJW1y1xJeiEAX.png"
                        }
                      }),
                  _c("u-text", { staticClass: ["zhi_index21"] }, [
                    _vm._v(_vm._s(l.yidianzanshu))
                  ])
                ],
                1
              ),
              _c(
                "div",
                { staticClass: ["zhi_index18"] },
                [
                  _c("u-image", {
                    staticClass: ["zhi_index19"],
                    attrs: {
                      src:
                        "https://limitao.myuan.cn/gongyong/shangchuan/tu/38/2020/06/d88Vjd4tpt4NoJAjAi74A7TLvz8dOt.png"
                    }
                  }),
                  _c("u-text", { staticClass: ["zhi_index21"] }, [
                    _vm._v("200")
                  ])
                ],
                1
              ),
              _c(
                "div",
                { staticClass: ["zhi_index20"] },
                [
                  _c("u-image", {
                    staticClass: ["zhi_index19"],
                    attrs: {
                      src:
                        "https://limitao.myuan.cn/gongyong/shangchuan/tu/38/2020/06/P1ThsrpLLFl9Qqq7dG8g8Rr8t1HdFf.png"
                    }
                  }),
                  _c("u-text", { staticClass: ["zhi_index21"] }, [_vm._v("30")])
                ],
                1
              ),
              _c(
                "div",
                { staticClass: ["zhi_index23"] },
                [
                  _c("u-image", {
                    staticClass: ["zhi_xiashipin23", "zhi_index22"],
                    attrs: {
                      src:
                        "https://limitao.myuan.cn/gongyong/shangchuan/tu/12/2020/02/YhqQ8G8f5YYNqQ5k8ob8881b5H9gMH.png"
                    }
                  })
                ],
                1
              )
            ]),
            _vm.index == i
              ? _c("progress", {
                  staticClass: ["zhi_index24"],
                  attrs: {
                    percent: _vm.bofangjindu,
                    strokeWidth: "1",
                    activeColor: "#FFFFFF",
                    backgroundColor: "rgba(226, 226, 226, 0.3)"
                  }
                })
              : _vm._e()
          ],
          1
        )
      }),
      _c("div", { staticClass: ["zhi_index00"] }, [
        _c("div", { style: { height: _vm.statusBarHeight } }),
        _c("div", { staticClass: ["zhi_index01"] }, [
          _c(
            "view",
            { staticClass: ["zhi_index11"] },
            [
              _c("u-image", {
                staticClass: ["zhi_index12"],
                attrs: {
                  src:
                    "https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/06/YJ1gSNoXObmy17T1Y41SUyM4No1ynm.png"
                }
              })
            ],
            1
          ),
          _c("div", { staticClass: ["zhi_index02"] }, [
            _c(
              "div",
              {
                staticClass: ["dibu3"],
                class: { dibu1: _vm.so.zhuangtai == 1 },
                on: {
                  click: function($event) {
                    _vm.qiehuan(1)
                  }
                }
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["dibu"],
                    class: { dibu1: _vm.so.zhuangtai == 1 }
                  },
                  [_vm._v("推荐")]
                ),
                _c("div", { class: { dibu2: _vm.so.zhuangtai == 1 } })
              ]
            ),
            _c(
              "div",
              {
                staticClass: ["dibu3"],
                class: { dibu1: _vm.so.zhuangtai == 10 },
                on: {
                  click: function($event) {
                    _vm.qiehuan(10)
                  }
                }
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["dibu"],
                    class: { dibu1: _vm.so.zhuangtai == 10 }
                  },
                  [_vm._v("关注")]
                ),
                _c("div", { class: { dibu2: _vm.so.zhuangtai == 10 } })
              ]
            ),
            _c(
              "div",
              {
                staticClass: ["dibu3"],
                class: { dibu1: _vm.so.zhuangtai == 20 },
                on: {
                  click: function($event) {
                    _vm.qiehuan(20)
                  }
                }
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["dibu"],
                    class: { dibu1: _vm.so.zhuangtai == 20 }
                  },
                  [_vm._v("同城")]
                ),
                _c("div", { class: { dibu2: _vm.so.zhuangtai == 20 } })
              ]
            )
          ])
        ])
      ])
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Home.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThhLENBQWdCLDBkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./index.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar deviceInfo = uni.getSystemInfoSync();if (deviceInfo.brand == 'Xiaomi') {deviceInfo.windowHeight += 1;}var that;var _default = { data: function data() {return { statusBarHeight: deviceInfo.statusBarHeight + 'px', loadMoreHeight: deviceInfo.windowHeight * 2, // 触发 loadmore 事件所需要的垂直偏移距离 加载到剩余2\t 继续加载\n      videoStyle: { width: \"750rpx\", height: deviceInfo.windowHeight + 'px' }, so: { jingdu: '', weidu: '', ye: 1, jitiao: 5, zhuangtai: 1, id: \"\" }, shuju: _index.default, lie: [], index: 0, bofangjindu: 0, appear: '', kebofang: 1, suo: 0 };}, onShow: function onShow() {that = this;this.kebofang = 1;that.Jiazai();if (this.lie[this.index]) {uni.createVideoContext(\"video_\".concat(this.index), this).play();this.$set(this.lie[this.index], 'fengmian', false);}}, onHide: function onHide() {that = this;that.kebofang = 0;if (this.lie[this.index]) {uni.createVideoContext(\"video_\".concat(this.index), this).pause();}}, methods: { dianzan: function dianzan(e) {if (e == 0) {this.lie[this.index].yidianzan = 1;this.lie[this.index].yidianzanshu = Number(this.lie[this.index].yidianzanshu) + 1;} else {this.lie[this.index].yidianzan = 0;this.lie[this.index].yidianzanshu = Number(this.lie[this.index].yidianzanshu) - 1;}}, guanzhu: function guanzhu(e) {if (e == 0) {this.lie[this.index].guanzhu = 1;uni.showToast({ title: '关注成功', duration: 1500 });} else {this.lie[this.index].guanzhu = 0;}},\n\n    panduanpofang: function panduanpofang() {\n      if (that.kebofang == 0) {\n        uni.createVideoContext(\"video_\".concat(this.index), this).pause();\n      }\n    },\n    onappear: function onappear(e) {\n      this.appear = e.direction;\n    },\n\n    Timeupdate: function Timeupdate(e) {\n      if (e.detail.currentTime > 0 && !this.lie[this.index].fengmian) {\n        this.$set(this.lie[this.index], 'fengmian', true);\n      }\n      this.bofangjindu = parseInt(e.detail.currentTime / e.detail.duration * 100);\n    },\n    Disappear: function Disappear(e, i) {var _this = this;\n      this.a = 0;\n      if (that.suo == 1) {\n        return false;\n      }\n      if (this.appear == e.direction && deviceInfo.platform == 'android') {\n        this.$set(this.lie[this.index], 'fengmian', false);\n        this.index = e.direction == 'up' ? i + 1 : i - 1;\n        setTimeout(function () {\n          uni.createVideoContext(\"video_\".concat(_this.index), _this).play();\n        }, 300);\n      }\n    },\n    Scroll: function Scroll(e) {var _this2 = this;\n      this.a = 0;\n      if (deviceInfo.platform == 'ios') {\n        var i = Math.abs(e.contentOffset.y / deviceInfo.windowHeight);\n        if (i != this.index) {\n          this.$set(this.lie[this.index], 'fengmian', false);\n          this.index = i;\n          setTimeout(function () {\n            uni.createVideoContext(\"video_\".concat(_this2.index), _this2).play();\n          }, 300);\n        }\n      }\n    },\n\n    Jiazai: function Jiazai() {\n      this.lie = this.shuju.lie;\n      if (this.lie.length > 0) {\n        setTimeout(function () {\n          uni.createVideoContext(\"video_\".concat(that.index), that).play();\n        }, 500);\n      }\n    },\n    qiehuan: function qiehuan(zhuangtai) {\n      that.Jiazai();\n      this.so.zhuangtai = zhuangtai;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvSG9tZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQSw4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBLHlDQUdBLG1DQUNBLDZCQUNBLENBQ0EsUyxlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0Esa0RBREEsRUFFQSwyQ0FGQSxFQUVBO0FBQ0Esb0JBQ0EsZUFEQSxFQUVBLHNDQUZBLEVBSEEsRUFPQSxNQUNBLFVBREEsRUFFQSxTQUZBLEVBR0EsS0FIQSxFQUlBLFNBSkEsRUFLQSxZQUxBLEVBTUEsTUFOQSxFQVBBLEVBZUEscUJBZkEsRUFnQkEsT0FoQkEsRUFpQkEsUUFqQkEsRUFrQkEsY0FsQkEsRUFtQkEsVUFuQkEsRUFvQkEsV0FwQkEsRUFxQkEsTUFyQkEsR0F1QkEsQ0F6QkEsRUEwQkEsTUExQkEsb0JBMEJBLENBQ0EsWUFDQSxrQkFDQSxjQUNBLDJCQUNBLGlFQUNBLG1EQUNBLENBRUEsQ0FuQ0EsRUFvQ0EsTUFwQ0Esb0JBb0NBLENBQ0EsWUFDQSxrQkFDQSwyQkFDQSxrRUFDQSxDQUNBLENBMUNBLEVBMkNBLFdBQ0EsT0FEQSxtQkFDQSxDQURBLEVBQ0EsQ0FDQSxhQUNBLG1DQUdBLGtGQUNBLENBTEEsTUFLQSxDQUNBLG1DQUNBLGtGQUNBLENBQ0EsQ0FYQSxFQVlBLE9BWkEsbUJBWUEsQ0FaQSxFQVlBLENBQ0EsYUFDQSxpQ0FDQSxnQkFDQSxhQURBLEVBRUEsY0FGQSxJQUlBLENBTkEsTUFNQSxDQUNBLGlDQUNBLENBQ0EsQ0F0QkE7O0FBd0JBLGlCQXhCQSwyQkF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVCQTtBQTZCQSxZQTdCQSxvQkE2QkEsQ0E3QkEsRUE2QkE7QUFDQTtBQUNBLEtBL0JBOztBQWlDQSxjQWpDQSxzQkFpQ0EsQ0FqQ0EsRUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdENBO0FBdUNBLGFBdkNBLHFCQXVDQSxDQXZDQSxFQXVDQSxDQXZDQSxFQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0E7QUFDQSxLQW5EQTtBQW9EQSxVQXBEQSxrQkFvREEsQ0FwREEsRUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsS0FoRUE7O0FBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0EsS0F6RUE7QUEwRUE7QUFDQTtBQUNBO0FBQ0EsS0E3RUEsRUEzQ0EsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdFx0PGxpc3QgOnBhZ2luZ0VuYWJsZWQ9XCJ0cnVlXCIgICBjbGFzcz1cInpoaV9pbmRleDA0XCIgOm9mZnNldC1hY2N1cmFjeT1cInZpZGVvU3R5bGUuaGVpZ2h0XCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiAgQGxvYWRtb3JlPVwiSmlhemFpXCIgcmVmPVwibGlzdFwiIDpsb2FkbW9yZW9mZnNldD1cImxvYWRNb3JlSGVpZ2h0XCIgQHNjcm9sbD1cIlNjcm9sbFwiID5cclxuXHRcdFx0PGNlbGwgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtcIiA6c3R5bGU9XCJ2aWRlb1N0eWxlXCIgIHYtZm9yPVwiKGwsaSkgaW4gbGllXCIgOmtleT0naScgIEBkaXNhcHBlYXI9XCJEaXNhcHBlYXIoJGV2ZW50LGkpXCIgIEBhcHBlYXI9XCJvbmFwcGVhclwiICAgPlxyXG5cdFx0XHQgICA8dmlkZW8gOnN0eWxlPVwidmlkZW9TdHlsZVwiIHYtaWY9XCJpbmRleD09aVwiIEBwbGF5PSdwYW5kdWFucG9mYW5nJyBAdGltZXVwZGF0ZT1cIlRpbWV1cGRhdGVcIiA6aWQ9XCJgdmlkZW9fJHtpfWBcIiA6cmVmPVwiYHZpZGVvXyR7aX1gXCIgOmxvb3A9XCJ0cnVlXCIgOnNyYz1cImwuc2hpcGluXCIgY29udHJvbHM9XCJmYWxzZVwiIDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCIgIDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cImZhbHNlXCIgOm9iamVjdEZpdD1cIiR4aXRvbmcucGxhdGZvcm09PSdpb3MnPydmaWxsJzonY292ZXInXCIgLz5cclxuXHRcdFx0ICAgPGltYWdlIDpzcmM9XCJsLnR1XCIgdi1pZj1cIiFsLmZlbmdtaWFuICYmIHN1bz09MCBcIiA6c3R5bGU9XCJ2aWRlb1N0eWxlXCIgIGNsYXNzPVwiemhpX2luZGV4MDVcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+ICAgXHJcblx0XHRcdFx0PGRpdiAgY2xhc3M9XCJ6aGlfaW5kZXgwNlwiPiAgXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiemhpX3hpYXNoaXBpbjUgXCIgdi1pZj0nc28uemh1YW5ndGFpPT0yMCcgPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ6aGlfeGlhc2hpcGluNlwiIHNyYz1cImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3R1LzEyLzIwMjAvMDIvcEtRbE9SRmJlZUYzOEtoUmZGc0ZTS1NSZlEzQUVKLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiemhpX2luZGV4MDdcIj57e2wuY2hlbmdzaGl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ6aGlfaW5kZXgwN1wiPui3neemu3t7bC5qdWxpfX1rbTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ6aGlfaW5kZXgwOCBcIiAgdi1pZj0nbC5odWl5dWFuJyA+e3tsLmh1aXl1YW4ubmljaGVuZ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInpoaV94aWFzaGlwaW43XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0ICBjbGFzcz1cInpoaV9pbmRleDA5XCI+e3tsLmd1YW5qaWFueml9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgIGNsYXNzPVwiemhpX2luZGV4MTBcIj57e2wubWluZ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHJcblx0XHRcdFx0IDxkaXYgY2xhc3M9XCJ6aGlfeGlhc2hpcGluMTBcIiA+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInpoaV9pbmRleDEzXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3ID5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSAgIG1vZGU9XCJhc3BlY3RGaWxsXCIgOnNyYz1cImwudG91eGlhbmdcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgIHN0eWxlPVwid2lkdGg6IDkwdXB4O2hlaWdodDogOTB1cHg7Ym9yZGVyLXJhZGl1czogNDV1cHg7bWFyZ2luLXRvcDogOHB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PGltYWdlICB2LWlmPVwibC5ndWFuemh1PT0wXCIgIEBjbGljaz1cImd1YW56aHUobC5ndWFuemh1KVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2NvbG9yOiAjRkYwMDAwOyBsZWZ0OiAyNXVweDtib3R0b206MTB1cHg7d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4OyBcIiAgc3JjPVwiaHR0cHM6Ly9saW1pdGFvLm15dWFuLmNuL2dvbmd5b25nL3NoYW5nY2h1YW4vdHUvMzMvMjAyMC8wNS9HRWpoTjl0ZTNGRFp1YUhBSDNBRmRFZmFISnQzRWoucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ6aGlfaW5kZXgxOFwiIEBjbGljaz1cImRpYW56YW4obC55aWRpYW56YW4pXCIgPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImwueWlkaWFuemFuPT0xXCIgc3JjPVwiaHR0cHM6Ly9saW1pdGFvLm15dWFuLmNuL2dvbmd5b25nL3NoYW5nY2h1YW4vdHUvMzgvMjAyMC8wNi96YWwydU9OMGxyNUFBUXptbjA2WjcwQTRDeTc0TXUucG5nXCIgY2xhc3M9XCJ6aGlfaW5kZXgxOVwiID48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1lbHNlIHNyYz1cImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3R1LzM4LzIwMjAvMDYvZUc2VkVTSlhJVjN3U3B6eFllSlcxeTF4SmVpRUFYLnBuZ1wiIGNsYXNzPVwiemhpX2luZGV4MTlcIiA+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ6aGlfaW5kZXgyMVwiPnt7bC55aWRpYW56YW5zaHV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInpoaV9pbmRleDE4XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSAgc3JjPVwiaHR0cHM6Ly9saW1pdGFvLm15dWFuLmNuL2dvbmd5b25nL3NoYW5nY2h1YW4vdHUvMzgvMjAyMC8wNi9kODhWamQ0dHB0NE5vSkFqQWk3NEE3VEx2ejhkT3QucG5nXCIgY2xhc3M9XCJ6aGlfaW5kZXgxOVwiID48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ6aGlfaW5kZXgyMVwiPjIwMDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiAgY2xhc3M9XCJ6aGlfaW5kZXgyMFwiID5cclxuXHRcdFx0XHRcdFx0PGltYWdlICBzcmM9XCJodHRwczovL2xpbWl0YW8ubXl1YW4uY24vZ29uZ3lvbmcvc2hhbmdjaHVhbi90dS8zOC8yMDIwLzA2L1AxVGhzcnBMTEZsOVFxcTdkRzhnOFJyOHQxSGRGZi5wbmdcIiBjbGFzcz1cInpoaV9pbmRleDE5XCIgPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInpoaV9pbmRleDIxXCI+MzA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCIgemhpX2luZGV4MjNcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlICBjbGFzcz1cInpoaV94aWFzaGlwaW4yMyB6aGlfaW5kZXgyMlwiIHNyYz1cImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3R1LzEyLzIwMjAvMDIvWWhxUThHOGY1WVlOcVE1azhvYjg4ODFiNUg5Z01ILnBuZ1wiID48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHByb2dyZXNzICB2LWlmPVwiaW5kZXg9PWlcIiA6cGVyY2VudD1cImJvZmFuZ2ppbmR1XCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGFjdGl2ZUNvbG9yPVwiI0ZGRkZGRlwiIGJhY2tncm91bmRDb2xvcj1cInJnYmEoMjI2LCAyMjYsIDIyNiwgMC4zKVwiIGNsYXNzPVwiemhpX2luZGV4MjRcIi8+XHJcblx0XHRcdDwvY2VsbD5cdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiemhpX2luZGV4MDBcIiA+XHJcblx0XHRcdFx0PGRpdiA6c3R5bGU9XCJ7aGVpZ2h0OnN0YXR1c0JhckhlaWdodH1cIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiemhpX2luZGV4MDFcIiA+XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiemhpX2luZGV4MTFcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiemhpX2luZGV4MTJcIiBzcmM9XCJodHRwczovL2xpbWl0YW8ubXl1YW4uY24vZ29uZ3lvbmcvc2hhbmdjaHVhbi90dS8zMy8yMDIwLzA2L1lKMWdTTm9YT2JteTE3VDFZNDFTVXlNNE5vMXlubS5wbmdcIiA+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ6aGlfaW5kZXgwMlwiID5cclxuXHRcdFx0XHRcdFx0PGRpdiBAY2xpY2s9XCJxaWVodWFuKDEpXCIgOmNsYXNzPVwie2RpYnUxOnNvLnpodWFuZ3RhaT09MX1cIiAgY2xhc3M9XCJkaWJ1M1wiICA+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkaWJ1XCIgOmNsYXNzPVwie2RpYnUxOnNvLnpodWFuZ3RhaT09MX1cIj7mjqjojZA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiAgIDpjbGFzcz1cIntkaWJ1Mjpzby56aHVhbmd0YWk9PTF9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cInFpZWh1YW4oMTApXCIgOmNsYXNzPVwie2RpYnUxOnNvLnpodWFuZ3RhaT09MTB9XCIgY2xhc3M9XCJkaWJ1M1wiID5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRpYnVcIiAgOmNsYXNzPVwie2RpYnUxOnNvLnpodWFuZ3RhaT09MTB9XCI+5YWz5rOoPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgIDpjbGFzcz1cIntkaWJ1Mjpzby56aHVhbmd0YWk9PTEwfVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBAY2xpY2s9XCJxaWVodWFuKDIwKVwiIDpjbGFzcz1cIntkaWJ1MTpzby56aHVhbmd0YWk9PTIwfVwiIGNsYXNzPVwiZGlidTNcIiA+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkaWJ1XCIgIDpjbGFzcz1cIntkaWJ1MTpzby56aHVhbmd0YWk9PTIwfVwiPuWQjOWfjjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2ICA6Y2xhc3M9XCJ7ZGlidTI6c28uemh1YW5ndGFpPT0yMH1cIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcdFx0XHJcblx0XHQ8L2xpc3Q+XHRcclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBkZXZpY2VJbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkgICBcclxuXHRpbXBvcnQgY2Fuc2h1IGZyb20gJy4vaW5kZXguanMnXHJcblx0XHJcblx0aWYoZGV2aWNlSW5mby5icmFuZD09J1hpYW9taScpe1xyXG5cdFx0ZGV2aWNlSW5mby53aW5kb3dIZWlnaHQrPTFcclxuXHR9XHJcblx0dmFyIHRoYXQ7XHRcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6ZGV2aWNlSW5mby5zdGF0dXNCYXJIZWlnaHQrJ3B4JywgXHJcblx0XHRcdFx0bG9hZE1vcmVIZWlnaHQ6IGRldmljZUluZm8ud2luZG93SGVpZ2h0ICogMiwgLy8g6Kem5Y+RIGxvYWRtb3JlIOS6i+S7tuaJgOmcgOimgeeahOWeguebtOWBj+enu+i3neemuyDliqDovb3liLDliankvZkyXHQg57un57ut5Yqg6L29XHJcblx0XHRcdFx0dmlkZW9TdHlsZTp7XHJcblx0XHRcdFx0XHR3aWR0aDpcIjc1MHJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OmRldmljZUluZm8ud2luZG93SGVpZ2h0KydweCcsXHJcblx0XHRcdFx0fSxcdFx0XHRcdFx0XHJcblx0XHRcdFx0c286IHtcclxuXHRcdFx0XHRcdGppbmdkdTogJycsXHJcblx0XHRcdFx0XHR3ZWlkdTogJycsXHJcblx0XHRcdFx0XHR5ZToxLFxyXG5cdFx0XHRcdFx0aml0aWFvOjUsXHJcblx0XHRcdFx0XHR6aHVhbmd0YWk6MSxcclxuXHRcdFx0XHRcdGlkOlwiXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzaHVqdTogY2Fuc2h1LFxyXG5cdFx0XHRcdGxpZTpbXSxcdFx0XHRcclxuXHRcdFx0XHRpbmRleDowLFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0Ym9mYW5namluZHU6MCxcclxuXHRcdFx0XHRhcHBlYXI6JycsXHJcblx0XHRcdFx0a2Vib2Zhbmc6MSxcclxuXHRcdFx0XHRzdW86MCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcdFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHR0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhpcy5rZWJvZmFuZz0xO1xyXG5cdFx0XHR0aGF0LkppYXphaSgpXHJcblx0XHRcdGlmKHRoaXMubGllW3RoaXMuaW5kZXhdKXtcclxuXHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuaW5kZXh9YCx0aGlzKS5wbGF5KClcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmxpZVt0aGlzLmluZGV4XSwnZmVuZ21pYW4nLGZhbHNlKSAgXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCl7XHJcblx0XHRcdHRoYXQ9dGhpcztcclxuXHRcdFx0dGhhdC5rZWJvZmFuZz0wO1xyXG5cdFx0XHRpZih0aGlzLmxpZVt0aGlzLmluZGV4XSl7XHRcdFx0XHJcblx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dChgdmlkZW9fJHt0aGlzLmluZGV4fWAsdGhpcykucGF1c2UoKVxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRkaWFuemFuKGUpe1xyXG5cdFx0XHRcdGlmKGU9PTApe1xyXG5cdFx0XHRcdFx0dGhpcy5saWVbdGhpcy5pbmRleF0ueWlkaWFuemFuPTFcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmxpZVt0aGlzLmluZGV4XS55aWRpYW56YW5zaHU9IE51bWJlcih0aGlzLmxpZVt0aGlzLmluZGV4XS55aWRpYW56YW5zaHUpICsgMVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5saWVbdGhpcy5pbmRleF0ueWlkaWFuemFuPTBcclxuXHRcdFx0XHRcdHRoaXMubGllW3RoaXMuaW5kZXhdLnlpZGlhbnphbnNodT0gTnVtYmVyKHRoaXMubGllW3RoaXMuaW5kZXhdLnlpZGlhbnphbnNodSktMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z3VhbnpodShlKXtcclxuXHRcdFx0XHRpZihlPT0wKXtcclxuXHRcdFx0XHRcdHRoaXMubGllW3RoaXMuaW5kZXhdLmd1YW56aHU9MVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHQgICAgdGl0bGU6ICflhbPms6jmiJDlip8nLFxyXG5cdFx0XHRcdFx0ICAgIGR1cmF0aW9uOiAxNTAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMubGllW3RoaXMuaW5kZXhdLmd1YW56aHU9MFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHBhbmR1YW5wb2ZhbmcoKXtcclxuXHRcdFx0XHRpZih0aGF0LmtlYm9mYW5nPT0wKXtcclxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoYHZpZGVvXyR7dGhpcy5pbmRleH1gLHRoaXMpLnBhdXNlKClcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0b25hcHBlYXIgKGUpIHtcclxuXHRcdFx0IHRoaXMuYXBwZWFyPWUuZGlyZWN0aW9uO1xyXG5cdFx0XHR9LFx0XHRcclxuXHJcblx0XHRcdFRpbWV1cGRhdGUoZSl7XHRcdFxyXG5cdFx0XHRcdGlmKGUuZGV0YWlsLmN1cnJlbnRUaW1lPjAgJiYgIXRoaXMubGllW3RoaXMuaW5kZXhdLmZlbmdtaWFuKXtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5saWVbdGhpcy5pbmRleF0sJ2ZlbmdtaWFuJyx0cnVlKSAgXHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0XHR0aGlzLmJvZmFuZ2ppbmR1PXBhcnNlSW50KGUuZGV0YWlsLmN1cnJlbnRUaW1lL2UuZGV0YWlsLmR1cmF0aW9uKjEwMClcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0RGlzYXBwZWFyKGUsaSl7XHJcblx0XHRcdFx0dGhpcy5hPTA7XHRcclxuXHRcdFx0XHRpZih0aGF0LnN1bz09MSl7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKCB0aGlzLmFwcGVhcj09ZS5kaXJlY3Rpb24gJiYgZGV2aWNlSW5mby5wbGF0Zm9ybT09J2FuZHJvaWQnKXtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmxpZVt0aGlzLmluZGV4XSwnZmVuZ21pYW4nLGZhbHNlKVx0XHJcblx0XHRcdFx0XHR0aGlzLmluZGV4PShlLmRpcmVjdGlvbj09J3VwJyk/aSsxOmktMTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuaW5kZXh9YCx0aGlzKS5wbGF5KClcclxuXHRcdFx0XHRcdH0sMzAwKVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRTY3JvbGwoZSl7XHJcblx0XHRcdFx0dGhpcy5hPTA7XHJcblx0XHRcdFx0aWYoZGV2aWNlSW5mby5wbGF0Zm9ybT09J2lvcycpe1x0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgaT1NYXRoLmFicyhlLmNvbnRlbnRPZmZzZXQueS9kZXZpY2VJbmZvLndpbmRvd0hlaWdodClcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihpIT10aGlzLmluZGV4KXtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMubGllW3RoaXMuaW5kZXhdLCdmZW5nbWlhbicsZmFsc2UpXHRcdFxyXG5cdFx0XHRcdFx0XHR0aGlzLmluZGV4PWlcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dChgdmlkZW9fJHt0aGlzLmluZGV4fWAsdGhpcykucGxheSgpXHJcblx0XHRcdFx0XHRcdH0sMzAwKVx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdEppYXphaTogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR0aGlzLmxpZT10aGlzLnNodWp1LmxpZVxyXG5cdFx0XHRcdGlmKHRoaXMubGllLmxlbmd0aD4wKXtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dChgdmlkZW9fJHt0aGF0LmluZGV4fWAsdGhhdCkucGxheSgpXHJcblx0XHRcdFx0XHR9LDUwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHFpZWh1YW46IGZ1bmN0aW9uKHpodWFuZ3RhaSkge1xyXG5cdFx0XHRcdHRoYXQuSmlhemFpKCk7XHJcblx0XHRcdFx0dGhpcy5zby56aHVhbmd0YWk9emh1YW5ndGFpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdFxyXG5cdC5tYXhUeFB1c2hlcnt3aWR0aDo3NTB1cHg7YmFja2dyb3VuZC1jb2xvcjojMTExMTExO3Bvc2l0aW9uOiBmaXhlZDt9XHJcblx0LnpoaV94aWFzaGlwaW4xMCB7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAxNXVweDtib3R0b206IDYwcHg7d2lkdGg6IDEwMHVweDt6LWluZGV4OiA5OTthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyO31cclxuXHQubmVpcm9uZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDA7fVxyXG5cdC56aGlfeGlhc2hpcGluNyB7d2lkdGg6IDQ4MHVweDtjb2xvcjogI0ZFRkVGRTtsaW5lLWhlaWdodDogNDB1cHg7fVxyXG5cdC56aGlfeGlhc2hpcGluNSB7cGFkZGluZy1yaWdodDogMTV1cHg7ZmxleC1kaXJlY3Rpb246IHJvdzthbGlnbi1pdGVtczogY2VudGVyO2NvbG9yOiAjNDY2MzlCO3BhZGRpbmctYm90dG9tOiAxNXVweDt9XHJcblx0LnpoaV94aWFzaGlwaW42IHt3aWR0aDogMzZ1cHg7aGVpZ2h0OiAzNHVweDt9XHJcblx0LnpoaV9pbmRleDAwe3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDA7bGVmdDogMDsgcmlnaHQ6IDA7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwLjYpLCByZ2JhKDAsMCwwLDApKTt9XHJcblx0LnpoaV9pbmRleDAxe3BhZGRpbmctdG9wOiAzMHVweDsgZmxleC1kaXJlY3Rpb246IHJvdzthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyO31cclxuXHQuemhpX2luZGV4MDJ7ZmxleC1kaXJlY3Rpb246IHJvdzt3aWR0aDoyNTBweDthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO31cclxuXHQuemhpX2luZGV4MDR7d2lkdGg6NzUwdXB4O2ZsZXg6IDE7YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDt9XHJcblx0LnpoaV9pbmRleDA1e3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7bGVmdDogMDt9XHJcblx0LnpoaV9pbmRleDA2e3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAzMHVweDtib3R0b206IDE1MHVweDt9XHJcblx0LnpoaV9pbmRleDA3e2NvbG9yOiAjRkZGRkZGO2ZvbnQtc2l6ZTogMTRweDtwYWRkaW5nLWxlZnQ6IDEwdXB4O31cclxuXHQuemhpX2luZGV4MDh7cGFkZGluZy1ib3R0b206MjB1cHg7Y29sb3I6ICNGRkZGRkY7fVxyXG5cdC56aGlfaW5kZXgwOXtsaW5lLWhlaWdodDogNTB1cHg7Y29sb3I6I0ZGMDAwMDtmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG5cdC56aGlfaW5kZXgxMHtsaW5lLWhlaWdodDogNTB1cHg7Y29sb3I6ICNGRkZGRkY7Zm9udC1zaXplOiAxNXB4O31cclxuXHQuemhpX2luZGV4MTF7cG9zaXRpb246YWJzb2x1dGUgO2xlZnQ6IDIwcHg7dG9wOiAzNXVweDt9XHJcblx0LnpoaV9pbmRleDEye3dpZHRoOiA0MHVweDtoZWlnaHQ6IDQwdXB4O31cclxuXHQuemhpX2luZGV4MTN7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6IDkwdXB4O2hlaWdodDogMTQwdXB4O31cclxuXHQuemhpX2luZGV4MTR7d2lkdGg6IDkwdXB4O2hlaWdodDogOTB1cHg7Ym9yZGVyLXJhZGl1czogNDV1cHg7bWFyZ2luLXRvcDogOHB4O31cclxuXHQuemhpX2luZGV4MTV7cG9zaXRpb246IGFic29sdXRlO3RvcDogNHB4O2xlZnQ6IDdweDsgd2lkdGg6IDY4dXB4O2hlaWdodDogMzZ1cHg7YWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNGRjAwMDAgO2JvcmRlci1yYWRpdXM6IDMwdXB4O31cclxuXHQuemhpX2luZGV4MTZ7cG9zaXRpb246IGFic29sdXRlO2NvbG9yOiAjRkYwMDAwOyBsZWZ0OiAyNXVweDtib3R0b206MTB1cHg7d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O31cclxuXHQuemhpX2luZGV4MTd7Y29sb3I6ICNGRkZGRkY7Zm9udC1zaXplOiAyMnVweDt9XHJcblx0LnpoaV9pbmRleDE4e3dpZHRoOiA3MHVweDtoZWlnaHQ6IDE1MHVweDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG5cdC56aGlfaW5kZXgxOXt3aWR0aDogNTZ1cHg7aGVpZ2h0OiA1NnVweDt9XHJcblx0LnpoaV9pbmRleDIwe3dpZHRoOiA3MHVweDtoZWlnaHQ6IDE4MHVweDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxyXG5cdC56aGlfaW5kZXgyMXtjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDE2cHg7cGFkZGluZy10b3A6IDRweDt9XHJcblx0LnpoaV9pbmRleDIye3dpZHRoOiAxMDB1cHg7aGVpZ2h0OjEwMHVweDt9XHJcblx0LnpoaV9pbmRleDIze3BhZGRpbmctYm90dG9tOiA0NnVweDt9XHJcblx0LnpoaV9pbmRleDI0e3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDEwcHg7bGVmdDogMHB4O3dpZHRoOiA3NTB1cHg7fVxyXG5cdFxyXG5cdC5kaWJ1MSB7Zm9udC13ZWlnaHQ6IGJvbGQ7Zm9udC1zaXplOiAzOHVweDtjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O31cclxuXHQuZGlidTN7cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDogMzBweDt9XHJcblx0LmRpYnUye3Bvc2l0aW9uOmFic29sdXRlIDt3aWR0aDogMzBweDtoZWlnaHQ6IDJweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO2JvdHRvbTogMDtsZWZ0OiAycHg7Ym9yZGVyLXJhZGl1czogNHVweDt9XHJcblx0LmRpYnV7Y29sb3I6ICNkY2RjZGM7Zm9udC1zaXplOiAzMnVweDt9XHJcblx0XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _ref;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var data = [{\n  \"id\": \"1654\",\n  \"danyuan\": \"33\",\n  \"ming\": \" 520\",\n  \"shunxu\": \"0\",\n  \"fenlei_yiji\": \"0\",\n  \"fenlei_erji\": \"0\",\n  \"leixing\": \"0\",\n  \"xinpin\": \"0\",\n  \"remai\": \"0\",\n  \"tuijian\": \"0\",\n  \"tu\": \"https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/05/suq14cCgIID9616CIGjWe1J1Jw99QC.jpg\",\n  \"zhuangtai\": \"1\",\n  \"shijian\": \"1590110580\",\n  \"gengxinshijian\": \"1591344499\",\n  \"hyid\": \"1001691042\",\n  \"shipin\": \"https://limitao.myuan.cn/gongyong/shangchuan/yinpin/33/2020/05/Ef1BgzZVA2bF79H67lA67b15L7J10A.mp4\",\n  \"bofang\": \"0\",\n  \"dianzan\": \"12\",\n  \"jingdu\": null,\n  \"weidu\": null,\n  \"shengfen\": \"\",\n  \"yidianzanshu\": \"87\",\n  \"guanzhu\": \"0\",\n  \"chengshi\": \"\",\n  \"yidianzan\": \"0\",\n  \"juli\": \"10\",\n  \"quxian\": \"\",\n  \"dizhi\": null,\n  \"guanjianzi\": \"\",\n  \"touxiang\": \"http://7niu.zhiwi.cn/Q18Twfqi3W58nI5JZLkv4Ili8X4JwP.jpg\",\n  \"fenxiangshu\": \"13\" },\n{\n  \"id\": \"1636\",\n  \"danyuan\": \"33\",\n  \"ming\": \"我来啦我来啦,下班后的嚣张小姐姐来 啦排银行小姐姐下班抖一抖,快乐天 天有\",\n  \"shunxu\": \"0\",\n  \"fenlei_yiji\": \"285\",\n  \"fenlei_erji\": \"0\",\n  \"leixing\": \"0\",\n  \"xinpin\": \"0\",\n  \"remai\": \"0\",\n  \"tuijian\": \"0\",\n  \"juli\": \"10\",\n  \"tu\": \"https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/05/q46h53D5TBd9Cu1a42RCUA2RR91drA.jpg\",\n  \"touxiang\": \"http://7niu.zhiwi.cn/Q18Twfqi3W58nI5JZLkv4Ili8X4JwP.jpg\",\n  \"zhuangtai\": \"1\",\n  \"shijian\": \"1588056138\",\n  \"gengxinshijian\": \"1590146533\",\n  \"hyid\": \"1000691574\",\n  \"shipin\": \"http://7niu.zhiwi.cn/SCe1Lc3KLQ1bQ33UAKMLmUKmta8t3k.mp4\",\n  \"bofang\": \"0\",\n  \"dianzan\": \"32\",\n  \"jingdu\": \"0.0000000000\",\n  \"weidu\": \"0.0000000000\",\n  \"shengfen\": \"山西省\",\n  \"guanzhu\": \"1\",\n  \"chengshi\": \"阳泉市\",\n  \"quxian\": \"郊区\",\n  \"yidianzan\": \"1\",\n  \"yidianzanshu\": \"1\",\n  \"dizhi\": \"\",\n  \"guanjianzi\": \"\",\n  \"fenxiangshu\": \"3\" }, (_ref = {\n\n  \"id\": \"1638\",\n  \"danyuan\": \"33\",\n  \"ming\": \"侠西五干年“地球最古老柏 树”动拔、枯而不代、据说一很 树枝都价介値连城大好河山十起打卡 国创作的原声一航拍中国\",\n  \"shunxu\": \"0\",\n  \"fenlei_yiji\": \"285\",\n  \"fenlei_erji\": \"0\",\n  \"leixing\": \"0\",\n  \"xinpin\": \"0\",\n  \"guanzhu\": \"0\",\n  \"juli\": \"10\",\n  \"remai\": \"0\",\n  \"yidianzanshu\": \"2\",\n  \"tuijian\": \"0\",\n  \"tu\": \"https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/05/CvQsUHuqqM8hqmAqLV5tgspt4u9QHh.jpg\",\n  \"touxiang\": \"http://7niu.zhiwi.cn/Q18Twfqi3W58nI5JZLkv4Ili8X4JwP.jpg\",\n  \"zhuangtai\": \"1\",\n  \"shijian\": \"1588842343\",\n  \"gengxinshijian\": \"1589972045\",\n  \"hyid\": \"1000691574\",\n  \"shipin\": \"https://limitao.myuan.cn/gongyong/shangchuan/yinpin/33/2020/05/kiWKkG17OY0522ySS50SiL2NBWNi01.mp4\",\n  \"bofang\": \"0\",\n  \"dianzan\": \"26\" }, _defineProperty(_ref, \"guanzhu\",\n\"0\"), _defineProperty(_ref,\n\"jingdu\", \"112.9510630000\"), _defineProperty(_ref,\n\"weidu\", \"28.1546840000\"), _defineProperty(_ref,\n\"shengfen\", \"河北省\"), _defineProperty(_ref,\n\"chengshi\", \"秦皇岛市\"), _defineProperty(_ref, \"juli\",\n\"10\"), _defineProperty(_ref,\n\"yidianzan\", \"1\"), _defineProperty(_ref,\n\"quxian\", \"北戴河区\"), _defineProperty(_ref,\n\"dizhi\", \"地图位置\"), _defineProperty(_ref,\n\"guanjianzi\", \"#长沙#\"), _defineProperty(_ref,\n\"fenxiangshu\", \"7\"), _ref),\n{\n  \"id\": \"1634\",\n  \"danyuan\": \"33\",\n  \"ming\": \"可恶的小眼神!排解锁人脸运镜术 时开-雨厂音乐情花厂\",\n  \"shunxu\": \"0\",\n  \"fenlei_yiji\": \"285\",\n  \"yidianzanshu\": \"55\",\n  \"fenlei_erji\": \"0\",\n  \"leixing\": \"0\",\n  \"juli\": \"10\",\n  \"guanzhu\": \"0\",\n  \"xinpin\": \"0\",\n  \"remai\": \"0\",\n  \"tuijian\": \"0\",\n  \"tu\": \"https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/05/CF4664h6q64v7Vzvx6M4moveznuZv4.jpg\",\n  \"touxiang\": \"http://7niu.zhiwi.cn/Q18Twfqi3W58nI5JZLkv4Ili8X4JwP.jpg\",\n  \"zhuangtai\": \"1\",\n  \"shijian\": \"1587986151\",\n  \"gengxinshijian\": \"1590227086\",\n  \"hyid\": \"1001690666\",\n  \"shipin\": \"https://limitao.myuan.cn/gongyong/shangchuan/yinpin/33/2020/05/E1n1us3N3511hzbt5thh3c137tU15T.mp4\",\n  \"bofang\": \"0\",\n  \"dianzan\": \"30\",\n  \"jingdu\": \"104.7573430000\",\n  \"weidu\": \"31.4603790000\",\n  \"shengfen\": \"\",\n  \"chengshi\": \"\",\n  \"quxian\": \"\",\n  \"dizhi\": \"漫时光茶坊\",\n  \"yidianzan\": \"1\",\n  \"guanjianzi\": \"\",\n  \"fenxiangshu\": \"6\" },\n{\n  \"id\": \"1643\",\n  \"danyuan\": \"33\",\n  \"ming\": \"、枯而不代、据说一很树枝都价介値连城大好河山十起打卡 国创作的原声一航拍中国\",\n  \"shunxu\": \"0\",\n  \"fenlei_yiji\": \"285\",\n  \"fenlei_erji\": \"0\",\n  \"juli\": \"10\",\n  \"leixing\": \"0\",\n  \"yidianzanshu\": \"15\",\n  \"xinpin\": \"0\",\n  \"remai\": \"0\",\n  \"guanzhu\": \"0\",\n  \"tuijian\": \"0\",\n  \"tu\": \"https://limitao.myuan.cn/gongyong/shangchuan/tu/33/2020/05/RIh4Uau1uaPgedxinFpLIZnSaGaliz.png\",\n  \"zhuangtai\": \"1\",\n  \"shijian\": \"1589548873\",\n  \"gengxinshijian\": \"1589972733\",\n  \"hyid\": \"1001691042\",\n  \"shipin\": \"https://limitao.myuan.cn/gongyong/shangchuan/yinpin/33/2020/05/GW0w1a4AsbzZAE3C6b449WC0hq6wWB.mp4\",\n  \"touxiang\": \"http://7niu.zhiwi.cn/Q18Twfqi3W58nI5JZLkv4Ili8X4JwP.jpg\",\n  \"bofang\": \"0\",\n  \"yidianzan\": \"1\",\n  \"dianzan\": \"20\",\n  \"jingdu\": \"0.0000000000\",\n  \"weidu\": \"0.0000000000\",\n  \"shengfen\": \"\",\n  \"chengshi\": \"\",\n  \"quxian\": \"\",\n  \"dizhi\": \"\",\n  \"guanjianzi\": \"\",\n  \"fenxiangshu\": \"0\" }];\n\n\nuni.getSystemInfo({\n  success: function success(e) {\n    Vue.prototype.$xitong = e;\n    Vue.prototype.windowWidth = e.windowWidth;\n    Vue.prototype.windowHeight = e.windowHeight;\n    Vue.prototype.StatusBar = e.statusBarHeight;\n    if (e.platform == 'android') {\n      Vue.prototype.CustomBar = e.statusBarHeight + 50;\n    } else {\n      Vue.prototype.CustomBar = e.statusBarHeight + 45;\n    };\n\n\n    if (e.platform == 'android') {\n      Vue.prototype.CustomBar = e.statusBarHeight + 40;\n    } else {\n      Vue.prototype.CustomBar = e.statusBarHeight + 45;\n    };\n\n\n\n\n  } });\n\n\nmodule.exports = {\n  lie: data };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiZGF0YSIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiZSIsIlZ1ZSIsInByb3RvdHlwZSIsIiR4aXRvbmciLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsIlN0YXR1c0JhciIsInN0YXR1c0JhckhlaWdodCIsInBsYXRmb3JtIiwiQ3VzdG9tQmFyIiwibW9kdWxlIiwiZXhwb3J0cyIsImxpZSJdLCJtYXBwaW5ncyI6Im1OQUFBLElBQUlBLElBQUksR0FBQyxDQUFDO0FBQ1QsUUFBTSxNQURHO0FBRVQsYUFBVyxJQUZGO0FBR1QsVUFBUSxNQUhDO0FBSVQsWUFBVSxHQUpEO0FBS1QsaUJBQWUsR0FMTjtBQU1ULGlCQUFlLEdBTk47QUFPVCxhQUFXLEdBUEY7QUFRVCxZQUFVLEdBUkQ7QUFTVCxXQUFTLEdBVEE7QUFVVCxhQUFXLEdBVkY7QUFXVCxRQUFNLCtGQVhHO0FBWVQsZUFBYSxHQVpKO0FBYVQsYUFBVyxZQWJGO0FBY1Qsb0JBQWtCLFlBZFQ7QUFlVCxVQUFRLFlBZkM7QUFnQlQsWUFBVSxtR0FoQkQ7QUFpQlQsWUFBVSxHQWpCRDtBQWtCVCxhQUFXLElBbEJGO0FBbUJULFlBQVUsSUFuQkQ7QUFvQlQsV0FBUyxJQXBCQTtBQXFCVCxjQUFZLEVBckJIO0FBc0JULGtCQUFlLElBdEJOO0FBdUJULGFBQVUsR0F2QkQ7QUF3QlQsY0FBWSxFQXhCSDtBQXlCVCxlQUFZLEdBekJIO0FBMEJULFVBQU8sSUExQkU7QUEyQlQsWUFBVSxFQTNCRDtBQTRCVCxXQUFTLElBNUJBO0FBNkJULGdCQUFjLEVBN0JMO0FBOEJULGNBQVkseURBOUJIO0FBK0JULGlCQUFlLElBL0JOLEVBQUQ7QUFnQ047QUFDRixRQUFNLE1BREo7QUFFRixhQUFXLElBRlQ7QUFHRixVQUFRLHVDQUhOO0FBSUYsWUFBVSxHQUpSO0FBS0YsaUJBQWUsS0FMYjtBQU1GLGlCQUFlLEdBTmI7QUFPRixhQUFXLEdBUFQ7QUFRRixZQUFVLEdBUlI7QUFTRixXQUFTLEdBVFA7QUFVRixhQUFXLEdBVlQ7QUFXRixVQUFPLElBWEw7QUFZRixRQUFNLCtGQVpKO0FBYUQsY0FBWSx5REFiWDtBQWNGLGVBQWEsR0FkWDtBQWVGLGFBQVcsWUFmVDtBQWdCRixvQkFBa0IsWUFoQmhCO0FBaUJGLFVBQVEsWUFqQk47QUFrQkYsWUFBVSx5REFsQlI7QUFtQkYsWUFBVSxHQW5CUjtBQW9CRixhQUFXLElBcEJUO0FBcUJGLFlBQVUsY0FyQlI7QUFzQkYsV0FBUyxjQXRCUDtBQXVCRixjQUFZLEtBdkJWO0FBd0JGLGFBQVUsR0F4QlI7QUF5QkYsY0FBWSxLQXpCVjtBQTBCRixZQUFVLElBMUJSO0FBMkJGLGVBQVksR0EzQlY7QUE0QkYsa0JBQWUsR0E1QmI7QUE2QkYsV0FBUyxFQTdCUDtBQThCRixnQkFBYyxFQTlCWjtBQStCRixpQkFBZSxHQS9CYixFQWhDTTs7QUFpRVIsUUFBTSxNQWpFRTtBQWtFUixhQUFXLElBbEVIO0FBbUVSLFVBQVEsMERBbkVBO0FBb0VSLFlBQVUsR0FwRUY7QUFxRVIsaUJBQWUsS0FyRVA7QUFzRVIsaUJBQWUsR0F0RVA7QUF1RVIsYUFBVyxHQXZFSDtBQXdFUixZQUFVLEdBeEVGO0FBeUVSLGFBQVUsR0F6RUY7QUEwRVIsVUFBTyxJQTFFQztBQTJFUixXQUFTLEdBM0VEO0FBNEVSLGtCQUFlLEdBNUVQO0FBNkVSLGFBQVcsR0E3RUg7QUE4RVIsUUFBTSwrRkE5RUU7QUErRVAsY0FBWSx5REEvRUw7QUFnRlIsZUFBYSxHQWhGTDtBQWlGUixhQUFXLFlBakZIO0FBa0ZSLG9CQUFrQixZQWxGVjtBQW1GUixVQUFRLFlBbkZBO0FBb0ZSLFlBQVUsbUdBcEZGO0FBcUZSLFlBQVUsR0FyRkY7QUFzRlIsYUFBVyxJQXRGSDtBQXVGRSxHQXZGRjtBQXdGUixRQXhGUSxFQXdGRSxnQkF4RkY7QUF5RlIsT0F6RlEsRUF5RkMsZUF6RkQ7QUEwRlIsVUExRlEsRUEwRkksS0ExRko7QUEyRlIsVUEzRlEsRUEyRkksTUEzRko7QUE0RkQsSUE1RkM7QUE2RlIsV0E3RlEsRUE2RkksR0E3Rko7QUE4RlIsUUE5RlEsRUE4RkUsTUE5RkY7QUErRlIsT0EvRlEsRUErRkMsTUEvRkQ7QUFnR1IsWUFoR1EsRUFnR00sTUFoR047QUFpR1IsYUFqR1EsRUFpR08sR0FqR1A7QUFrR047QUFDRixRQUFNLE1BREo7QUFFRixhQUFXLElBRlQ7QUFHRixVQUFRLDRCQUhOO0FBSUYsWUFBVSxHQUpSO0FBS0YsaUJBQWUsS0FMYjtBQU1GLGtCQUFlLElBTmI7QUFPRixpQkFBZSxHQVBiO0FBUUYsYUFBVyxHQVJUO0FBU0YsVUFBTyxJQVRMO0FBVUYsYUFBVSxHQVZSO0FBV0YsWUFBVSxHQVhSO0FBWUYsV0FBUyxHQVpQO0FBYUYsYUFBVyxHQWJUO0FBY0YsUUFBTSwrRkFkSjtBQWVELGNBQVkseURBZlg7QUFnQkYsZUFBYSxHQWhCWDtBQWlCRixhQUFXLFlBakJUO0FBa0JGLG9CQUFrQixZQWxCaEI7QUFtQkYsVUFBUSxZQW5CTjtBQW9CRixZQUFVLG1HQXBCUjtBQXFCRixZQUFVLEdBckJSO0FBc0JGLGFBQVcsSUF0QlQ7QUF1QkYsWUFBVSxnQkF2QlI7QUF3QkYsV0FBUyxlQXhCUDtBQXlCRixjQUFZLEVBekJWO0FBMEJGLGNBQVksRUExQlY7QUEyQkYsWUFBVSxFQTNCUjtBQTRCRixXQUFTLE9BNUJQO0FBNkJGLGVBQVksR0E3QlY7QUE4QkYsZ0JBQWMsRUE5Qlo7QUErQkYsaUJBQWUsR0EvQmIsRUFsR007QUFrSU47QUFDRixRQUFNLE1BREo7QUFFRixhQUFXLElBRlQ7QUFHRixVQUFRLHdDQUhOO0FBSUYsWUFBVSxHQUpSO0FBS0YsaUJBQWUsS0FMYjtBQU1GLGlCQUFlLEdBTmI7QUFPRixVQUFPLElBUEw7QUFRRixhQUFXLEdBUlQ7QUFTRixrQkFBZSxJQVRiO0FBVUYsWUFBVSxHQVZSO0FBV0YsV0FBUyxHQVhQO0FBWUYsYUFBVSxHQVpSO0FBYUYsYUFBVyxHQWJUO0FBY0YsUUFBTSwrRkFkSjtBQWVGLGVBQWEsR0FmWDtBQWdCRixhQUFXLFlBaEJUO0FBaUJGLG9CQUFrQixZQWpCaEI7QUFrQkYsVUFBUSxZQWxCTjtBQW1CRixZQUFVLG1HQW5CUjtBQW9CRCxjQUFZLHlEQXBCWDtBQXFCRixZQUFVLEdBckJSO0FBc0JGLGVBQVksR0F0QlY7QUF1QkYsYUFBVyxJQXZCVDtBQXdCRixZQUFVLGNBeEJSO0FBeUJGLFdBQVMsY0F6QlA7QUEwQkYsY0FBWSxFQTFCVjtBQTJCRixjQUFZLEVBM0JWO0FBNEJGLFlBQVUsRUE1QlI7QUE2QkYsV0FBUyxFQTdCUDtBQThCRixnQkFBYyxFQTlCWjtBQStCRixpQkFBZSxHQS9CYixFQWxJTSxDQUFUOzs7QUFvS0FDLEdBQUcsQ0FBQ0MsYUFBSixDQUFrQjtBQUNqQkMsU0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVk7QUFDcEJDLE9BQUcsQ0FBQ0MsU0FBSixDQUFjQyxPQUFkLEdBQXVCSCxDQUF2QjtBQUNBQyxPQUFHLENBQUNDLFNBQUosQ0FBY0UsV0FBZCxHQUEyQkosQ0FBQyxDQUFDSSxXQUE3QjtBQUNBSCxPQUFHLENBQUNDLFNBQUosQ0FBY0csWUFBZCxHQUE0QkwsQ0FBQyxDQUFDSyxZQUE5QjtBQUNBSixPQUFHLENBQUNDLFNBQUosQ0FBY0ksU0FBZCxHQUEwQk4sQ0FBQyxDQUFDTyxlQUE1QjtBQUNBLFFBQUlQLENBQUMsQ0FBQ1EsUUFBRixJQUFjLFNBQWxCLEVBQTZCO0FBQzVCUCxTQUFHLENBQUNDLFNBQUosQ0FBY08sU0FBZCxHQUEwQlQsQ0FBQyxDQUFDTyxlQUFGLEdBQW9CLEVBQTlDO0FBQ0EsS0FGRCxNQUVPO0FBQ05OLFNBQUcsQ0FBQ0MsU0FBSixDQUFjTyxTQUFkLEdBQTBCVCxDQUFDLENBQUNPLGVBQUYsR0FBb0IsRUFBOUM7QUFDQTs7O0FBR0QsUUFBSVAsQ0FBQyxDQUFDUSxRQUFGLElBQWMsU0FBbEIsRUFBNkI7QUFDNUJQLFNBQUcsQ0FBQ0MsU0FBSixDQUFjTyxTQUFkLEdBQTBCVCxDQUFDLENBQUNPLGVBQUYsR0FBb0IsRUFBOUM7QUFDQSxLQUZELE1BRU87QUFDTk4sU0FBRyxDQUFDQyxTQUFKLENBQWNPLFNBQWQsR0FBMEJULENBQUMsQ0FBQ08sZUFBRixHQUFvQixFQUE5QztBQUNBOzs7OztBQUtELEdBdEJnQixFQUFsQjs7O0FBeUJBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsS0FBRyxFQUFFaEIsSUFEVSxFQUFqQiIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRhdGE9W3tcclxuXHRcImlkXCI6IFwiMTY1NFwiLFxyXG5cdFwiZGFueXVhblwiOiBcIjMzXCIsXHJcblx0XCJtaW5nXCI6IFwiIDUyMFwiLFxyXG5cdFwic2h1bnh1XCI6IFwiMFwiLFxyXG5cdFwiZmVubGVpX3lpamlcIjogXCIwXCIsXHJcblx0XCJmZW5sZWlfZXJqaVwiOiBcIjBcIixcclxuXHRcImxlaXhpbmdcIjogXCIwXCIsXHJcblx0XCJ4aW5waW5cIjogXCIwXCIsXHJcblx0XCJyZW1haVwiOiBcIjBcIixcclxuXHRcInR1aWppYW5cIjogXCIwXCIsXHJcblx0XCJ0dVwiOiBcImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3R1LzMzLzIwMjAvMDUvc3VxMTRjQ2dJSUQ5NjE2Q0lHaldlMUoxSnc5OVFDLmpwZ1wiLFxyXG5cdFwiemh1YW5ndGFpXCI6IFwiMVwiLFxyXG5cdFwic2hpamlhblwiOiBcIjE1OTAxMTA1ODBcIixcclxuXHRcImdlbmd4aW5zaGlqaWFuXCI6IFwiMTU5MTM0NDQ5OVwiLFxyXG5cdFwiaHlpZFwiOiBcIjEwMDE2OTEwNDJcIixcclxuXHRcInNoaXBpblwiOiBcImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3lpbnBpbi8zMy8yMDIwLzA1L0VmMUJnelpWQTJiRjc5SDY3bEE2N2IxNUw3SjEwQS5tcDRcIixcclxuXHRcImJvZmFuZ1wiOiBcIjBcIixcclxuXHRcImRpYW56YW5cIjogXCIxMlwiLFxyXG5cdFwiamluZ2R1XCI6IG51bGwsXHJcblx0XCJ3ZWlkdVwiOiBudWxsLFxyXG5cdFwic2hlbmdmZW5cIjogXCJcIixcclxuXHRcInlpZGlhbnphbnNodVwiOlwiODdcIixcclxuXHRcImd1YW56aHVcIjpcIjBcIixcclxuXHRcImNoZW5nc2hpXCI6IFwiXCIsXHJcblx0XCJ5aWRpYW56YW5cIjpcIjBcIixcclxuXHRcImp1bGlcIjpcIjEwXCIsXHJcblx0XCJxdXhpYW5cIjogXCJcIixcclxuXHRcImRpemhpXCI6IG51bGwsXHJcblx0XCJndWFuamlhbnppXCI6IFwiXCIsXHJcblx0XCJ0b3V4aWFuZ1wiOiBcImh0dHA6Ly83bml1LnpoaXdpLmNuL1ExOFR3ZnFpM1c1OG5JNUpaTGt2NElsaThYNEp3UC5qcGdcIixcclxuXHRcImZlbnhpYW5nc2h1XCI6IFwiMTNcIlxyXG59LCB7XHJcblx0XCJpZFwiOiBcIjE2MzZcIixcclxuXHRcImRhbnl1YW5cIjogXCIzM1wiLFxyXG5cdFwibWluZ1wiOiBcIuaIkeadpeWVpuaIkeadpeWVpizkuIvnj63lkI7nmoTlmqPlvKDlsI/lp5Dlp5DmnaUg5ZWm5o6S6ZO26KGM5bCP5aeQ5aeQ5LiL54+t5oqW5LiA5oqWLOW/q+S5kOWkqSDlpKnmnIlcIixcclxuXHRcInNodW54dVwiOiBcIjBcIixcclxuXHRcImZlbmxlaV95aWppXCI6IFwiMjg1XCIsXHJcblx0XCJmZW5sZWlfZXJqaVwiOiBcIjBcIixcclxuXHRcImxlaXhpbmdcIjogXCIwXCIsXHJcblx0XCJ4aW5waW5cIjogXCIwXCIsXHJcblx0XCJyZW1haVwiOiBcIjBcIixcclxuXHRcInR1aWppYW5cIjogXCIwXCIsXHJcblx0XCJqdWxpXCI6XCIxMFwiLFxyXG5cdFwidHVcIjogXCJodHRwczovL2xpbWl0YW8ubXl1YW4uY24vZ29uZ3lvbmcvc2hhbmdjaHVhbi90dS8zMy8yMDIwLzA1L3E0Nmg1M0Q1VEJkOUN1MWE0MlJDVUEyUlI5MWRyQS5qcGdcIixcclxuXHRcdFwidG91eGlhbmdcIjogXCJodHRwOi8vN25pdS56aGl3aS5jbi9RMThUd2ZxaTNXNThuSTVKWkxrdjRJbGk4WDRKd1AuanBnXCIsXHJcblx0XCJ6aHVhbmd0YWlcIjogXCIxXCIsXHJcblx0XCJzaGlqaWFuXCI6IFwiMTU4ODA1NjEzOFwiLFxyXG5cdFwiZ2VuZ3hpbnNoaWppYW5cIjogXCIxNTkwMTQ2NTMzXCIsXHJcblx0XCJoeWlkXCI6IFwiMTAwMDY5MTU3NFwiLFxyXG5cdFwic2hpcGluXCI6IFwiaHR0cDovLzduaXUuemhpd2kuY24vU0NlMUxjM0tMUTFiUTMzVUFLTUxtVUttdGE4dDNrLm1wNFwiLFxyXG5cdFwiYm9mYW5nXCI6IFwiMFwiLFxyXG5cdFwiZGlhbnphblwiOiBcIjMyXCIsXHJcblx0XCJqaW5nZHVcIjogXCIwLjAwMDAwMDAwMDBcIixcclxuXHRcIndlaWR1XCI6IFwiMC4wMDAwMDAwMDAwXCIsXHJcblx0XCJzaGVuZ2ZlblwiOiBcIuWxseilv+ecgVwiLFxyXG5cdFwiZ3VhbnpodVwiOlwiMVwiLFxyXG5cdFwiY2hlbmdzaGlcIjogXCLpmLPms4nluIJcIixcclxuXHRcInF1eGlhblwiOiBcIumDiuWMulwiLFxyXG5cdFwieWlkaWFuemFuXCI6XCIxXCIsXHJcblx0XCJ5aWRpYW56YW5zaHVcIjpcIjFcIixcclxuXHRcImRpemhpXCI6IFwiXCIsXHJcblx0XCJndWFuamlhbnppXCI6IFwiXCIsXHJcblx0XCJmZW54aWFuZ3NodVwiOiBcIjNcIlxyXG59LCB7XHJcblx0XCJpZFwiOiBcIjE2MzhcIixcclxuXHRcImRhbnl1YW5cIjogXCIzM1wiLFxyXG5cdFwibWluZ1wiOiBcIuS+oOilv+S6lOW5suW5tOKAnOWcsOeQg+acgOWPpOiAgeafjyDmoJHigJ3liqjmi5TjgIHmnq/ogIzkuI3ku6PjgIHmja7or7TkuIDlvogg5qCR5p6d6YO95Lu35LuL5YCk6L+e5Z+O5aSn5aW95rKz5bGx5Y2B6LW35omT5Y2hIOWbveWIm+S9nOeahOWOn+WjsOS4gOiIquaLjeS4reWbvVwiLFxyXG5cdFwic2h1bnh1XCI6IFwiMFwiLFxyXG5cdFwiZmVubGVpX3lpamlcIjogXCIyODVcIixcclxuXHRcImZlbmxlaV9lcmppXCI6IFwiMFwiLFxyXG5cdFwibGVpeGluZ1wiOiBcIjBcIixcclxuXHRcInhpbnBpblwiOiBcIjBcIixcclxuXHRcImd1YW56aHVcIjpcIjBcIixcclxuXHRcImp1bGlcIjpcIjEwXCIsXHJcblx0XCJyZW1haVwiOiBcIjBcIixcclxuXHRcInlpZGlhbnphbnNodVwiOlwiMlwiLFxyXG5cdFwidHVpamlhblwiOiBcIjBcIixcclxuXHRcInR1XCI6IFwiaHR0cHM6Ly9saW1pdGFvLm15dWFuLmNuL2dvbmd5b25nL3NoYW5nY2h1YW4vdHUvMzMvMjAyMC8wNS9DdlFzVUh1cXFNOGhxbUFxTFY1dGdzcHQ0dTlRSGguanBnXCIsXHJcblx0XHRcInRvdXhpYW5nXCI6IFwiaHR0cDovLzduaXUuemhpd2kuY24vUTE4VHdmcWkzVzU4bkk1SlpMa3Y0SWxpOFg0SndQLmpwZ1wiLFxyXG5cdFwiemh1YW5ndGFpXCI6IFwiMVwiLFxyXG5cdFwic2hpamlhblwiOiBcIjE1ODg4NDIzNDNcIixcclxuXHRcImdlbmd4aW5zaGlqaWFuXCI6IFwiMTU4OTk3MjA0NVwiLFxyXG5cdFwiaHlpZFwiOiBcIjEwMDA2OTE1NzRcIixcclxuXHRcInNoaXBpblwiOiBcImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3lpbnBpbi8zMy8yMDIwLzA1L2tpV0trRzE3T1kwNTIyeVNTNTBTaUwyTkJXTmkwMS5tcDRcIixcclxuXHRcImJvZmFuZ1wiOiBcIjBcIixcclxuXHRcImRpYW56YW5cIjogXCIyNlwiLFxyXG5cdFwiZ3VhbnpodVwiOlwiMFwiLFxyXG5cdFwiamluZ2R1XCI6IFwiMTEyLjk1MTA2MzAwMDBcIixcclxuXHRcIndlaWR1XCI6IFwiMjguMTU0Njg0MDAwMFwiLFxyXG5cdFwic2hlbmdmZW5cIjogXCLmsrPljJfnnIFcIixcclxuXHRcImNoZW5nc2hpXCI6IFwi56em55qH5bKb5biCXCIsXHJcblx0XCJqdWxpXCI6XCIxMFwiLFxyXG5cdFwieWlkaWFuemFuXCI6XCIxXCIsXHJcblx0XCJxdXhpYW5cIjogXCLljJfmiLTmsrPljLpcIixcclxuXHRcImRpemhpXCI6IFwi5Zyw5Zu+5L2N572uXCIsXHJcblx0XCJndWFuamlhbnppXCI6IFwiI+mVv+aymSNcIixcclxuXHRcImZlbnhpYW5nc2h1XCI6IFwiN1wiXHJcbn0sIHtcclxuXHRcImlkXCI6IFwiMTYzNFwiLFxyXG5cdFwiZGFueXVhblwiOiBcIjMzXCIsXHJcblx0XCJtaW5nXCI6IFwi5Y+v5oG255qE5bCP55y856WeIeaOkuino+mUgeS6uuiEuOi/kOmVnOacryDml7blvIAt6Zuo5Y6C6Z+z5LmQ5oOF6Iqx5Y6CXCIsXHJcblx0XCJzaHVueHVcIjogXCIwXCIsXHJcblx0XCJmZW5sZWlfeWlqaVwiOiBcIjI4NVwiLFxyXG5cdFwieWlkaWFuemFuc2h1XCI6XCI1NVwiLFxyXG5cdFwiZmVubGVpX2VyamlcIjogXCIwXCIsXHJcblx0XCJsZWl4aW5nXCI6IFwiMFwiLFxyXG5cdFwianVsaVwiOlwiMTBcIixcclxuXHRcImd1YW56aHVcIjpcIjBcIixcclxuXHRcInhpbnBpblwiOiBcIjBcIixcclxuXHRcInJlbWFpXCI6IFwiMFwiLFxyXG5cdFwidHVpamlhblwiOiBcIjBcIixcclxuXHRcInR1XCI6IFwiaHR0cHM6Ly9saW1pdGFvLm15dWFuLmNuL2dvbmd5b25nL3NoYW5nY2h1YW4vdHUvMzMvMjAyMC8wNS9DRjQ2NjRoNnE2NHY3Vnp2eDZNNG1vdmV6bnVadjQuanBnXCIsXHJcblx0XHRcInRvdXhpYW5nXCI6IFwiaHR0cDovLzduaXUuemhpd2kuY24vUTE4VHdmcWkzVzU4bkk1SlpMa3Y0SWxpOFg0SndQLmpwZ1wiLFxyXG5cdFwiemh1YW5ndGFpXCI6IFwiMVwiLFxyXG5cdFwic2hpamlhblwiOiBcIjE1ODc5ODYxNTFcIixcclxuXHRcImdlbmd4aW5zaGlqaWFuXCI6IFwiMTU5MDIyNzA4NlwiLFxyXG5cdFwiaHlpZFwiOiBcIjEwMDE2OTA2NjZcIixcclxuXHRcInNoaXBpblwiOiBcImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3lpbnBpbi8zMy8yMDIwLzA1L0UxbjF1czNOMzUxMWh6YnQ1dGhoM2MxMzd0VTE1VC5tcDRcIixcclxuXHRcImJvZmFuZ1wiOiBcIjBcIixcclxuXHRcImRpYW56YW5cIjogXCIzMFwiLFxyXG5cdFwiamluZ2R1XCI6IFwiMTA0Ljc1NzM0MzAwMDBcIixcclxuXHRcIndlaWR1XCI6IFwiMzEuNDYwMzc5MDAwMFwiLFxyXG5cdFwic2hlbmdmZW5cIjogXCJcIixcclxuXHRcImNoZW5nc2hpXCI6IFwiXCIsXHJcblx0XCJxdXhpYW5cIjogXCJcIixcclxuXHRcImRpemhpXCI6IFwi5ryr5pe25YWJ6Iy25Z2KXCIsXHJcblx0XCJ5aWRpYW56YW5cIjpcIjFcIixcclxuXHRcImd1YW5qaWFuemlcIjogXCJcIixcclxuXHRcImZlbnhpYW5nc2h1XCI6IFwiNlwiXHJcbn0sIHtcclxuXHRcImlkXCI6IFwiMTY0M1wiLFxyXG5cdFwiZGFueXVhblwiOiBcIjMzXCIsXHJcblx0XCJtaW5nXCI6IFwi44CB5p6v6ICM5LiN5Luj44CB5o2u6K+05LiA5b6I5qCR5p6d6YO95Lu35LuL5YCk6L+e5Z+O5aSn5aW95rKz5bGx5Y2B6LW35omT5Y2hIOWbveWIm+S9nOeahOWOn+WjsOS4gOiIquaLjeS4reWbvVwiLFxyXG5cdFwic2h1bnh1XCI6IFwiMFwiLFxyXG5cdFwiZmVubGVpX3lpamlcIjogXCIyODVcIixcclxuXHRcImZlbmxlaV9lcmppXCI6IFwiMFwiLFxyXG5cdFwianVsaVwiOlwiMTBcIixcclxuXHRcImxlaXhpbmdcIjogXCIwXCIsXHJcblx0XCJ5aWRpYW56YW5zaHVcIjpcIjE1XCIsXHJcblx0XCJ4aW5waW5cIjogXCIwXCIsXHJcblx0XCJyZW1haVwiOiBcIjBcIixcclxuXHRcImd1YW56aHVcIjpcIjBcIixcclxuXHRcInR1aWppYW5cIjogXCIwXCIsXHJcblx0XCJ0dVwiOiBcImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3R1LzMzLzIwMjAvMDUvUkloNFVhdTF1YVBnZWR4aW5GcExJWm5TYUdhbGl6LnBuZ1wiLFxyXG5cdFwiemh1YW5ndGFpXCI6IFwiMVwiLFxyXG5cdFwic2hpamlhblwiOiBcIjE1ODk1NDg4NzNcIixcclxuXHRcImdlbmd4aW5zaGlqaWFuXCI6IFwiMTU4OTk3MjczM1wiLFxyXG5cdFwiaHlpZFwiOiBcIjEwMDE2OTEwNDJcIixcclxuXHRcInNoaXBpblwiOiBcImh0dHBzOi8vbGltaXRhby5teXVhbi5jbi9nb25neW9uZy9zaGFuZ2NodWFuL3lpbnBpbi8zMy8yMDIwLzA1L0dXMHcxYTRBc2J6WkFFM0M2YjQ0OVdDMGhxNndXQi5tcDRcIixcclxuXHRcdFwidG91eGlhbmdcIjogXCJodHRwOi8vN25pdS56aGl3aS5jbi9RMThUd2ZxaTNXNThuSTVKWkxrdjRJbGk4WDRKd1AuanBnXCIsXHJcblx0XCJib2ZhbmdcIjogXCIwXCIsXHJcblx0XCJ5aWRpYW56YW5cIjpcIjFcIixcclxuXHRcImRpYW56YW5cIjogXCIyMFwiLFxyXG5cdFwiamluZ2R1XCI6IFwiMC4wMDAwMDAwMDAwXCIsXHJcblx0XCJ3ZWlkdVwiOiBcIjAuMDAwMDAwMDAwMFwiLFxyXG5cdFwic2hlbmdmZW5cIjogXCJcIixcclxuXHRcImNoZW5nc2hpXCI6IFwiXCIsXHJcblx0XCJxdXhpYW5cIjogXCJcIixcclxuXHRcImRpemhpXCI6IFwiXCIsXHJcblx0XCJndWFuamlhbnppXCI6IFwiXCIsXHJcblx0XCJmZW54aWFuZ3NodVwiOiBcIjBcIlxyXG59XVxyXG5cclxudW5pLmdldFN5c3RlbUluZm8oeyAgXHJcblx0c3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG5cdFx0VnVlLnByb3RvdHlwZS4keGl0b25nID1lO1x0XHRcdFx0XHJcblx0XHRWdWUucHJvdG90eXBlLndpbmRvd1dpZHRoID1lLndpbmRvd1dpZHRoO1xyXG5cdFx0VnVlLnByb3RvdHlwZS53aW5kb3dIZWlnaHQgPWUud2luZG93SGVpZ2h0O1xyXG5cdFx0VnVlLnByb3RvdHlwZS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRpZiAoZS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcdFx0XHRcdFx0XHRcclxuXHRcdFx0VnVlLnByb3RvdHlwZS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xyXG5cdFx0fSBlbHNlIHtcdFx0XHRcdFx0XHJcblx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA0NTtcclxuXHRcdH07XHRcdFxyXG5cclxuXHJcblx0XHRpZiAoZS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcdFx0XHRcdFx0XHJcblx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA0MDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFZ1ZS5wcm90b3R5cGUuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA0NTtcclxuXHRcdH07XHRcclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbGllOiBkYXRhXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?vue&type=style&index=0&id=7ba5938e&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_style_index_0_id_7ba5938e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./Home.nvue?vue&type=style&index=0&id=7ba5938e&scoped=true&lang=css&mpType=page */ 11);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_style_index_0_id_7ba5938e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_style_index_0_id_7ba5938e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_style_index_0_id_7ba5938e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_style_index_0_id_7ba5938e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Home_nvue_vue_type_style_index_0_id_7ba5938e_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.nvue?vue&type=style&index=0&id=7ba5938e&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "maxTxPusher": {
    "width": "750upx",
    "backgroundColor": "#111111",
    "position": "fixed"
  },
  "zhi_xiashipin10": {
    "position": "absolute",
    "right": "15upx",
    "bottom": "60",
    "width": "100upx",
    "zIndex": 99,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "neirong": {
    "position": "absolute",
    "top": 0
  },
  "zhi_xiashipin7": {
    "width": "480upx",
    "color": "#FEFEFE",
    "lineHeight": "40upx"
  },
  "zhi_xiashipin5": {
    "paddingRight": "15upx",
    "flexDirection": "row",
    "alignItems": "center",
    "color": "#46639B",
    "paddingBottom": "15upx"
  },
  "zhi_xiashipin6": {
    "width": "36upx",
    "height": "34upx"
  },
  "zhi_index00": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "backgroundImage": "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))"
  },
  "zhi_index01": {
    "paddingTop": "30upx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "zhi_index02": {
    "flexDirection": "row",
    "width": "250",
    "alignItems": "center",
    "justifyContent": "space-around"
  },
  "zhi_index04": {
    "width": "750upx",
    "flex": 1,
    "backgroundColor": "#000000"
  },
  "zhi_index05": {
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "zhi_index06": {
    "position": "absolute",
    "left": "30upx",
    "bottom": "150upx"
  },
  "zhi_index07": {
    "color": "#FFFFFF",
    "fontSize": "14",
    "paddingLeft": "10upx"
  },
  "zhi_index08": {
    "paddingBottom": "20upx",
    "color": "#FFFFFF"
  },
  "zhi_index09": {
    "lineHeight": "50upx",
    "color": "#FF0000",
    "fontSize": "16",
    "fontWeight": "bold"
  },
  "zhi_index10": {
    "lineHeight": "50upx",
    "color": "#FFFFFF",
    "fontSize": "15"
  },
  "zhi_index11": {
    "position": "absolute",
    "left": "20",
    "top": "35upx"
  },
  "zhi_index12": {
    "width": "40upx",
    "height": "40upx"
  },
  "zhi_index13": {
    "position": "relative",
    "width": "90upx",
    "height": "140upx"
  },
  "zhi_index14": {
    "width": "90upx",
    "height": "90upx",
    "borderRadius": "45upx",
    "marginTop": "8"
  },
  "zhi_index15": {
    "position": "absolute",
    "top": "4",
    "left": "7",
    "width": "68upx",
    "height": "36upx",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#FF0000",
    "borderRadius": "30upx"
  },
  "zhi_index16": {
    "position": "absolute",
    "color": "#FF0000",
    "left": "25upx",
    "bottom": "10upx",
    "width": "20",
    "height": "20"
  },
  "zhi_index17": {
    "color": "#FFFFFF",
    "fontSize": "22upx"
  },
  "zhi_index18": {
    "width": "70upx",
    "height": "150upx",
    "justifyContent": "center",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "zhi_index19": {
    "width": "56upx",
    "height": "56upx"
  },
  "zhi_index20": {
    "width": "70upx",
    "height": "180upx",
    "justifyContent": "center",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "zhi_index21": {
    "color": "#FFFFFF",
    "fontSize": "16",
    "paddingTop": "4"
  },
  "zhi_index22": {
    "width": "100upx",
    "height": "100upx"
  },
  "zhi_index23": {
    "paddingBottom": "46upx"
  },
  "zhi_index24": {
    "position": "absolute",
    "bottom": "10",
    "left": "0",
    "width": "750upx"
  },
  "dibu1": {
    "fontWeight": "bold",
    "fontSize": "38upx",
    "color": "#FFFFFF"
  },
  "dibu3": {
    "position": "relative",
    "height": "30"
  },
  "dibu2": {
    "position": "absolute",
    "width": "30",
    "height": "2",
    "backgroundColor": "#FFFFFF",
    "bottom": 0,
    "left": "2",
    "borderRadius": "4upx"
  },
  "dibu": {
    "color": "#dcdcdc",
    "fontSize": "32upx"
  }
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);