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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/main.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 53);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();

  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!*******************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages.json?{"type":"view"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/login/login', function () {return Vue.extend(__webpack_require__(/*! pages/login/login.vue?mpType=page */ 2).default);});
__definePage('pages/set/set', function () {return Vue.extend(__webpack_require__(/*! pages/set/set.vue?mpType=page */ 8).default);});
__definePage('pages/register/register', function () {return Vue.extend(__webpack_require__(/*! pages/register/register.vue?mpType=page */ 13).default);});
__definePage('pages/register/setinfo', function () {return Vue.extend(__webpack_require__(/*! pages/register/setinfo.vue?mpType=page */ 18).default);});
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 23).default);});

/***/ }),
/* 2 */
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/login/login.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=5b26a3ac&mpType=page */ 3);
/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/login/login.vue?vue&type=template&id=5b26a3ac&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=template&id=5b26a3ac&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5b26a3ac_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/login/login.vue?vue&type=template&id=5b26a3ac&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), style: _vm._$g(0, "s"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c(
                    "v-uni-text",
                    {
                      class: _vm._$g(4, "c"),
                      attrs: { _i: 4 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_vm._v("账号登录")]
                  ),
                  _c(
                    "v-uni-text",
                    {
                      class: _vm._$g(5, "c"),
                      attrs: { _i: 5 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_vm._v("验证码登录")]
                  )
                ],
                1
              ),
              _vm._$g(6, "i")
                ? _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                        [
                          _c("v-uni-input", {
                            attrs: {
                              type: "text",
                              "placeholder-class": "placeholder-class1",
                              value: "",
                              placeholder: "请输入您的手机号",
                              _i: 8
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                        [
                          _c("v-uni-input", {
                            attrs: {
                              type: "text",
                              "placeholder-class": "placeholder-class1",
                              value: "",
                              placeholder: "请输入密码",
                              _i: 10
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(12, "sc"),
                              attrs: { _i: 12 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [_vm._v("登录")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                        [
                          _c(
                            "v-uni-navigator",
                            {
                              staticClass: _vm._$g(14, "sc"),
                              attrs: { url: "../register/register", _i: 14 }
                            },
                            [_vm._v("忘记密码")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._$g(15, "i")
                ? _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                        [
                          _c("v-uni-input", {
                            attrs: {
                              type: "text",
                              "placeholder-class": "placeholder-class1",
                              value: "",
                              placeholder: "请输入您的手机号",
                              _i: 17
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                        [
                          _c("v-uni-input", {
                            staticClass: _vm._$g(19, "sc"),
                            attrs: {
                              type: "text",
                              "placeholder-class": "placeholder-class1",
                              value: "",
                              placeholder: "请输入密码",
                              _i: 19
                            }
                          }),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(20, "sc"),
                              attrs: { _i: 20 }
                            },
                            [_vm._v("获取验证码")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(22, "sc"),
                              attrs: { _i: 22 }
                            },
                            [_vm._v("登录")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [
                          _c(
                            "v-uni-navigator",
                            {
                              staticClass: _vm._$g(24, "sc"),
                              attrs: { url: "../register/register", _i: 24 }
                            },
                            [_vm._v("忘记密码")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
            [
              _c(
                "v-uni-navigator",
                { attrs: { url: "../register/register", _i: 26 } },
                [_vm._v("还没有账号？立即注册")]
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
            [
              _c("v-uni-image", {
                attrs: { src: _vm._$g(28, "a-src"), mode: "", _i: 28 }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 7 */
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


/***/ }),
/* 8 */
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/set/set.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.vue?vue&type=template&id=8205f4c8&mpType=page */ 9);
/* harmony import */ var _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.vue?vue&type=script&lang=js&mpType=page */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/set/set.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/set/set.vue?vue&type=template&id=8205f4c8&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./set.vue?vue&type=template&id=8205f4c8&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_template_id_8205f4c8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/set/set.vue?vue&type=template&id=8205f4c8&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), style: _vm._$g(0, "s"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                    [_vm._v("版本")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                        [_vm._v("1.0")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [_vm._v("用户名")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                        [_vm._v("198****5054")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [_vm._v("手机号")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                        [_vm._v("19871455054")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [_vm._v("设置登录密码")]
                  ),
                  _c("v-uni-view", {
                    staticClass: _vm._$g(17, "sc"),
                    attrs: { _i: 17 }
                  })
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [_vm._v("绑定提现资料")]
                  ),
                  _c("v-uni-view", {
                    staticClass: _vm._$g(20, "sc"),
                    attrs: { _i: 20 }
                  })
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                    [_vm._v("设置交易密码")]
                  ),
                  _c("v-uni-view", {
                    staticClass: _vm._$g(23, "sc"),
                    attrs: { _i: 23 }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                    [_vm._v("退出登录")]
                  ),
                  _c("v-uni-view", {
                    staticClass: _vm._$g(27, "sc"),
                    attrs: { _i: 27 }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/set/set.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./set.vue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_set_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/set/set.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 13 */
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/register.vue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=6f6d9236&mpType=page */ 14);
/* harmony import */ var _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js&mpType=page */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/register/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/register.vue?vue&type=template&id=6f6d9236&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=template&id=6f6d9236&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/register.vue?vue&type=template&id=6f6d9236&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), style: _vm._$g(0, "s"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c("v-uni-input", {
                    attrs: {
                      type: "number",
                      maxlength: "15",
                      value: "",
                      placeholder: "请输入手机号码",
                      _i: 4
                    }
                  })
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                [
                  _c("v-uni-input", {
                    attrs: {
                      type: "number",
                      maxlength: "6",
                      value: "",
                      placeholder: "请输入验证码",
                      _i: 6
                    }
                  }),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                    [_vm._v("获取验证码")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c("v-uni-input", {
                    attrs: {
                      type: "password",
                      maxlength: "20",
                      value: "",
                      placeholder: "请输入密码",
                      _i: 9
                    }
                  }),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                    [_vm._v("密码由6-20位数字和字母组成")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
            [
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(12, "sc"),
                  attrs: { _i: 12 },
                  on: {
                    click: function($event) {
                      return _vm.$handleViewEvent($event)
                    }
                  }
                },
                [_vm._v("确定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/register.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=script&lang=js&mpType=page */ 17);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/register.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 18 */
/*!*******************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/setinfo.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setinfo.vue?vue&type=template&id=5a7ecced&mpType=page */ 19);
/* harmony import */ var _setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setinfo.vue?vue&type=script&lang=js&mpType=page */ 21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/register/setinfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/setinfo.vue?vue&type=template&id=5a7ecced&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./setinfo.vue?vue&type=template&id=5a7ecced&mpType=page */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_template_id_5a7ecced_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/setinfo.vue?vue&type=template&id=5a7ecced&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), style: _vm._$g(0, "s"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c("v-uni-text", { attrs: { _i: 3 } }, [_vm._v("设置你的形象")]),
              _c("v-uni-text", { attrs: { _i: 4 } }, [
                _vm._v("让大家更好的认识你")
              ])
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c("v-uni-text", { attrs: { _i: 7 } }, [_vm._v("你的头像")]),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src: _vm._$g(9, "a-src"),
                          mode: "widthFix",
                          _i: 9
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                [
                  _c("v-uni-text", { attrs: { _i: 11 } }, [
                    _vm._v("取个名称吧")
                  ]),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [
                      _c("v-uni-input", {
                        attrs: {
                          type: "text",
                          value: "",
                          placeholder: "请输入名称",
                          _i: 13
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                [
                  _c("v-uni-text", { attrs: { _i: 15 } }, [_vm._v("出生日期")]),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [
                      _c("v-uni-input", {
                        attrs: {
                          type: "text",
                          value: "",
                          placeholder: "请选择日期",
                          _i: 17
                        }
                      }),
                      _c("v-uni-text", {
                        staticClass: _vm._$g(18, "sc"),
                        attrs: { _i: 18 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                [
                  _c("v-uni-text", { attrs: { _i: 20 } }, [_vm._v("你的性别")]),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                    [
                      _c(
                        "v-uni-view",
                        {
                          class: _vm._$g(22, "c"),
                          attrs: { _i: 22 },
                          on: {
                            click: function($event) {
                              return _vm.$handleViewEvent($event)
                            }
                          }
                        },
                        [
                          _c(
                            "v-uni-view",
                            {
                              staticClass: _vm._$g(23, "sc"),
                              attrs: { _i: 23 }
                            },
                            [
                              _c("v-uni-image", {
                                attrs: {
                                  src: _vm._$g(24, "a-src"),
                                  mode: "widthFix",
                                  _i: 24
                                }
                              })
                            ],
                            1
                          ),
                          _c("v-uni-text", { attrs: { _i: 25 } }, [
                            _vm._v("女生")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        {
                          class: _vm._$g(26, "c"),
                          attrs: { _i: 26 },
                          on: {
                            click: function($event) {
                              return _vm.$handleViewEvent($event)
                            }
                          }
                        },
                        [
                          _c(
                            "v-uni-view",
                            {
                              staticClass: _vm._$g(27, "sc"),
                              attrs: { _i: 27 }
                            },
                            [
                              _c("v-uni-image", {
                                attrs: {
                                  src: _vm._$g(28, "a-src"),
                                  mode: "widthFix",
                                  _i: 28
                                }
                              })
                            ],
                            1
                          ),
                          _c("v-uni-text", { attrs: { _i: 29 } }, [
                            _vm._v("男生")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                [_vm._v("下一步")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/setinfo.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./setinfo.vue?vue&type=script&lang=js&mpType=page */ 22);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_setinfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/register/setinfo.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 23 */
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/index.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 24);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 26);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 25 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _vm._$g(1, "i") ? _c("Home", { attrs: { _i: 1 } }) : _vm._e(),
      _vm._$g(2, "i") ? _c("Shop", { attrs: { _i: 2 } }) : _vm._e(),
      _vm._$g(3, "i") ? _c("Task", { attrs: { _i: 3 } }) : _vm._e(),
      _vm._$g(4, "i") ? _c("Center", { attrs: { _i: 4 } }) : _vm._e(),
      _c("Footer", {
        attrs: { _i: 5 },
        on: {
          change: function($event) {
            return _vm.$handleViewEvent($event)
          }
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 27);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _Footer = _interopRequireDefault(__webpack_require__(/*! ./Footer.vue */ 28));
var _Home = _interopRequireDefault(__webpack_require__(/*! ./Home.vue */ 33));
var _Shop = _interopRequireDefault(__webpack_require__(/*! ./Shop.vue */ 38));
var _Center = _interopRequireDefault(__webpack_require__(/*! ./Center.vue */ 43));
var _Task = _interopRequireDefault(__webpack_require__(/*! ./Task.vue */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {
    'Footer': _Footer.default,
    'Home': _Home.default,
    'Shop': _Shop.default,
    'Center': _Center.default,
    'Task': _Task.default } };exports.default = _default;

/***/ }),
/* 28 */
/*!***************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Footer.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=5aa9b291&scoped=true& */ 29);
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ 31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5aa9b291",
  null,
  false,
  _Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Footer.vue?vue&type=template&id=5aa9b291&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Footer.vue?vue&type=template&id=5aa9b291&scoped=true& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_template_id_5aa9b291_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Footer.vue?vue&type=template&id=5aa9b291&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            {
              class: _vm._$g(2, "c"),
              attrs: { _i: 2 },
              on: {
                click: function($event) {
                  return _vm.$handleViewEvent($event)
                }
              }
            },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(3, "sc"),
                attrs: { _i: 3 }
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [_vm._v("首页")]
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            {
              class: _vm._$g(5, "c"),
              attrs: { _i: 5 },
              on: {
                click: function($event) {
                  return _vm.$handleViewEvent($event)
                }
              }
            },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(6, "sc"),
                attrs: { _i: 6 }
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                [_vm._v("商城")]
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            {
              class: _vm._$g(8, "c"),
              attrs: { _i: 8 },
              on: {
                click: function($event) {
                  return _vm.$handleViewEvent($event)
                }
              }
            },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(9, "sc"),
                attrs: { _i: 9 }
              })
            ],
            1
          ),
          _c(
            "v-uni-view",
            {
              class: _vm._$g(10, "c"),
              attrs: { _i: 10 },
              on: {
                click: function($event) {
                  return _vm.$handleViewEvent($event)
                }
              }
            },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(11, "sc"),
                attrs: { _i: 11 }
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [_vm._v("任务中心")]
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            {
              class: _vm._$g(13, "c"),
              attrs: { _i: 13 },
              on: {
                click: function($event) {
                  return _vm.$handleViewEvent($event)
                }
              }
            },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(14, "sc"),
                attrs: { _i: 14 }
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                [_vm._v("我的")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Footer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Footer.vue?vue&type=script&lang=js& */ 32);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Footer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 33 */
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=18810f55&scoped=true& */ 34);
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ 36);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18810f55",
  null,
  false,
  _Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.vue?vue&type=template&id=18810f55&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Home.vue?vue&type=template&id=18810f55&scoped=true& */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_template_id_18810f55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.vue?vue&type=template&id=18810f55&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-video", {
        attrs: {
          src: "https://www.w3school.com.cn/i/movie.ogg",
          controls: true,
          loop: true,
          autoplay: true,
          _i: 1
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Home.vue?vue&type=script&lang=js& */ 37);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 38 */
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Shop.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop.vue?vue&type=template&id=20e711ec&scoped=true& */ 39);
/* harmony import */ var _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.vue?vue&type=script&lang=js& */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20e711ec",
  null,
  false,
  _Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/Shop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 39 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Shop.vue?vue&type=template&id=20e711ec&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Shop.vue?vue&type=template&id=20e711ec&scoped=true& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_template_id_20e711ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Shop.vue?vue&type=template&id=20e711ec&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "v-uni-swiper",
                {
                  staticClass: _vm._$g(3, "sc"),
                  attrs: {
                    "indicator-dots": _vm._$g(3, "a-indicator-dots"),
                    autoplay: _vm._$g(3, "a-autoplay"),
                    interval: _vm._$g(3, "a-interval"),
                    duration: _vm._$g(3, "a-duration"),
                    _i: 3
                  }
                },
                [
                  _c(
                    "v-uni-swiper-item",
                    { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://gw.alicdn.com/tfs/TB17emto4n1gK0jSZKPXXXvUXXa-1035-390.png_790x10000.jpg_.webp",
                          mode: "aspectFill",
                          _i: 5
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://gw.alicdn.com/imgextra/i4/1209780/O1CN01nM4jxa2M7I8QHfyTC_!!1209780-0-lubanu.jpg_790x10000Q75.jpg_.webp",
                          mode: "aspectFill",
                          _i: 7
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://gw.alicdn.com/imgextra/i1/1414079/O1CN01QMAlZt1g0EAE7soAi_!!1414079-0-lubanu.jpg_790x10000Q75.jpg_.webp",
                          mode: "aspectFill",
                          _i: 9
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(14, "a-src"), mode: "", _i: 14 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [_vm._v("YTC")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(18, "a-src"), mode: "", _i: 18 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(22, "a-src"), mode: "", _i: 22 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(26, "a-src"), mode: "", _i: 26 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(30, "a-src"), mode: "", _i: 30 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(34, "a-src"), mode: "", _i: 34 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(38, "a-src"), mode: "", _i: 38 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(42, "a-src"), mode: "", _i: 42 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(46, "a-src"), mode: "", _i: 46 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(50, "a-src"), mode: "", _i: 50 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
                    [_vm._v("天猫")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://img.alicdn.com/imgextra/i1/1770991118/TB2.8ggcpXXXXavXXXXXXXXXXXX_!!1770991118.jpg",
                          mode: "",
                          _i: 56
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(57, "sc"), attrs: { _i: 57 } },
                    [_vm._v("某某产品")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(59, "sc"), attrs: { _i: 59 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://img.alicdn.com/tps/i1/T1iT_5FgdeXXX9hhfo-80-80.jpg",
                          mode: "",
                          _i: 60
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                    [_vm._v("某某产品")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://img.alicdn.com/tps/i1/T1cXNsFD8eXXX9hhfo-80-80.jpg",
                          mode: "",
                          _i: 64
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(65, "sc"), attrs: { _i: 65 } },
                    [_vm._v("某某产品")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(66, "sc"), attrs: { _i: 66 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(67, "sc"), attrs: { _i: 67 } },
                    [
                      _c("v-uni-image", {
                        attrs: {
                          src:
                            "https://img.alicdn.com/tps/i1/T1EGIZFf8dXXX9hhfo-80-80.jpg",
                          mode: "",
                          _i: 68
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(69, "sc"), attrs: { _i: 69 } },
                    [_vm._v("某某产品")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Shop.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Shop.vue?vue&type=script&lang=js& */ 42);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Shop.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 43 */
/*!***************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Center.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Center.vue?vue&type=template&id=4b3fdc4b&scoped=true& */ 44);
/* harmony import */ var _Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Center.vue?vue&type=script&lang=js& */ 46);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b3fdc4b",
  null,
  false,
  _Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/Center.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 44 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Center.vue?vue&type=template&id=4b3fdc4b&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Center.vue?vue&type=template&id=4b3fdc4b&scoped=true& */ 45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_template_id_4b3fdc4b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 45 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Center.vue?vue&type=template&id=4b3fdc4b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("v-uni-view", { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } }),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c("v-uni-text", { attrs: { _i: 4 } }, [_vm._v("198****5054")]),
              _c("v-uni-text", { attrs: { _i: 5 } }, [
                _vm._v("用户id: 62391491 未实名 级别：L0")
              ]),
              _c("v-uni-text", { attrs: { _i: 6 } }, [
                _vm._v("达人级别：暂无 手续费：100%")
              ])
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
            [
              _c("v-uni-navigator", {
                staticClass: _vm._$g(8, "sc"),
                attrs: { url: "../set/set", _i: 8 }
              }),
              _c("v-uni-navigator", {
                staticClass: _vm._$g(9, "sc"),
                attrs: { url: "../set/set", _i: 9 }
              })
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [_vm._v("当前音豆")]
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [_vm._v("0.0000")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                    [_vm._v("个")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                    [_vm._v("+0.0000")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [_vm._v("加成活跃度")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                    [_vm._v("+0.0000")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                    [_vm._v("基础活跃度")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    [_vm._v("+0.0000")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                    [_vm._v("锁定音豆")]
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                    [_vm._v("+0.0000")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                    [_vm._v("HDC")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
            [_vm._v("最新公告")]
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
            [
              _c("v-uni-text", { attrs: { _i: 32 } }, [
                _vm._v("升级升级升级升级升级升级升级升级")
              ])
            ],
            1
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
            [_vm._v("更多")]
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                [_vm._v("常用工具")]
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(39, "a-src"), mode: "", _i: 39 }
                      }),
                      _c("v-uni-text", { attrs: { _i: 40 } }, [
                        _vm._v("收支明细")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(42, "a-src"), mode: "", _i: 42 }
                      }),
                      _c("v-uni-text", { attrs: { _i: 43 } }, [
                        _vm._v("经纪商")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(45, "a-src"), mode: "", _i: 45 }
                      }),
                      _c("v-uni-text", { attrs: { _i: 46 } }, [
                        _vm._v("我的团队")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(48, "a-src"), mode: "", _i: 48 }
                      }),
                      _c("v-uni-text", { attrs: { _i: 49 } }, [
                        _vm._v("我的卷轴")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
                [_vm._v("视频")]
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 55 } }, [
                        _vm._v("收支明细")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 57 } }, [
                        _vm._v("经纪商")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 59 } }, [
                        _vm._v("我的团队")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 61 } }, [
                        _vm._v("我的卷轴")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(64, "sc"), attrs: { _i: 64 } },
                [_vm._v("商城")]
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(65, "sc"), attrs: { _i: 65 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(66, "sc"), attrs: { _i: 66 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 67 } }, [
                        _vm._v("收货地址")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(68, "sc"), attrs: { _i: 68 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 69 } }, [
                        _vm._v("我的订单")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(70, "sc"), attrs: { _i: 70 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 71 } }, [
                        _vm._v("我是商家")
                      ])
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(72, "sc"), attrs: { _i: 72 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 73 } }, [
                        _vm._v("游戏中心")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 46 */
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Center.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Center.vue?vue&type=script&lang=js& */ 47);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Center.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 48 */
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Task.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=1d098cfb&scoped=true& */ 49);
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ 51);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d098cfb",
  null,
  false,
  _Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 49 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Task.vue?vue&type=template&id=1d098cfb&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Task.vue?vue&type=template&id=1d098cfb&scoped=true& */ 50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_template_id_1d098cfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 50 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Task.vue?vue&type=template&id=1d098cfb&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }, [
        _vm._v("消息")
      ]),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: _vm._$g(5, "a-src"), mode: "", _i: 5 }
                  })
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: _vm._$g(7, "a-src"), mode: "", _i: 7 }
                  })
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: _vm._$g(9, "a-src"), mode: "", _i: 9 }
                  })
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: _vm._$g(11, "a-src"), mode: "", _i: 11 }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [_vm._v("新手卷轴")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(18, "sc"),
                              attrs: { _i: 18 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(19, "sc"),
                              attrs: { _i: 19 }
                            },
                            [_vm._v("周期：30天 收益率：0.4333/天")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(20, "sc"),
                              attrs: { _i: 20 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(22, "sc"),
                              attrs: { _i: 22 }
                            },
                            [_vm._v("兑换")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 24 } }, [
                        _vm._v("基础活跃度：1")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 25 } }, [
                        _vm._v("当前拥有：0个")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 26 } }, [
                        _vm._v("购买上限：5个")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                    [_vm._v("青铜卷轴")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(31, "sc"),
                              attrs: { _i: 31 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(32, "sc"),
                              attrs: { _i: 32 }
                            },
                            [_vm._v("周期：30天 收益率：0.4333/天")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(33, "sc"),
                              attrs: { _i: 33 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(35, "sc"),
                              attrs: { _i: 35 }
                            },
                            [_vm._v("兑换")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 37 } }, [
                        _vm._v("基础活跃度：1")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 38 } }, [
                        _vm._v("当前拥有：0个")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 39 } }, [
                        _vm._v("购买上限：5个")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                    [_vm._v("青铜卷轴")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(44, "sc"),
                              attrs: { _i: 44 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(45, "sc"),
                              attrs: { _i: 45 }
                            },
                            [_vm._v("周期：30天 收益率：0.4333/天")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(46, "sc"),
                              attrs: { _i: 46 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(48, "sc"),
                              attrs: { _i: 48 }
                            },
                            [_vm._v("兑换")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 50 } }, [
                        _vm._v("基础活跃度：1")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 51 } }, [
                        _vm._v("当前拥有：0个")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 52 } }, [
                        _vm._v("购买上限：5个")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                    [_vm._v("青铜卷轴")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(57, "sc"),
                              attrs: { _i: 57 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(58, "sc"),
                              attrs: { _i: 58 }
                            },
                            [_vm._v("周期：30天 收益率：0.4333/天")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(59, "sc"),
                              attrs: { _i: 59 }
                            },
                            [_vm._v("兑换所需：10音豆")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(61, "sc"),
                              attrs: { _i: 61 }
                            },
                            [_vm._v("兑换")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 63 } }, [
                        _vm._v("基础活跃度：1")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 64 } }, [
                        _vm._v("当前拥有：0个")
                      ]),
                      _c("v-uni-text", { attrs: { _i: 65 } }, [
                        _vm._v("购买上限：5个")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 51 */
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Task.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Task.vue?vue&type=script&lang=js& */ 52);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/pages/index/Task.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 53 */
/*!*********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uni-app/Haodd/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 54);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 57).default
var update = add("590d8cfe", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 55 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Desktop/uni-app/Haodd/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 56);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 全局样式 */\nuni-swiper,uni-text,uni-view{line-height:1;box-sizing:border-box;font-size:30upx;color:#333;word-break:break-all}\nuni-rich-text{line-height:1.8}\nuni-input,uni-textarea{box-sizing:border-box;font-size:30upx;color:#333;line-height:1}\nuni-navigator{box-sizing:border-box}\nuni-checkbox{-webkit-transform:scale(.8);transform:scale(.8);padding:0;margin:0;box-sizing:border-box;line-height:1}\nuni-button{margin:0;padding:0;box-sizing:border-box}\n::-webkit-scrollbar{width:0;height:0;background-color:transparent}\nuni-image{vertical-align:top}\n.uni-page-refresh,uni-page-refresh{top:calc(45upx + 90upx)}\n.status-bar{height:var(--status-bar-height)}\n.status-bar.bg1{background:-webkit-linear-gradient(left,#1d0759,#3d1055)}\n.status-bar.fixed{position:fixed;left:0;right:0;top:0;z-index:10}\n.status-bar.fixed.white{background:#fff}\n.app{float:left;width:100%}\n.pub-flex-center,position relative{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.w{padding:0 30upx;float:left;width:100%}\n.bg-one{background:#f7f7f7}\n.bg-two{background:#f5f5f5}\n.bg-three{background:#f9fbfc}\n.bg-four{background:#f3f8fc}\n.bg-five{background:#f8f8f8}\n.fl{float:left}\n.fr{float:right}\n.mt20{margin-top:20upx}\n.mt40{margin-top:40upx}\n.mt60{margin-top:60upx}\n.placeholder-class{color:#c7c7c7}\n.placeholder-class1{color:#fff}\n.hover-class{background:0 0;opacity:1}\n.hover-class.active{-webkit-filter:blur(.5px);filter:blur(.5px)}\n.select-active{color:#bebebe}\n.pub-img-back{background:#e5e5e5}\n.icon-return{height:100%;width:100upx}\n.pub-select{height:100%}\n.pub-select .option{color:#bbb;display:block}\n.flex-center{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n.flex-page{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.flex-page .shrink{-webkit-flex-shrink:0;flex-shrink:0}\n.flex-page .grow{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.flex-page .grow .flex{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}\n.pub-null{height:150upx;float:left;width:100%}\n.pub-button .btn{height:88upx;line-height:88upx;background:#20bf6a;font-size:32upx;border-radius:6upx;display:block;color:#fff;font-size:32upx;text-align:center}\n.pub-fixed-button{position:fixed;left:0;right:0;bottom:0;background:#f7f7f7;padding:30upx 30upx;z-index:99}\n.pub-fixed-button.back{background:#fff}\n.pub-fixed-button.two{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.pub-fixed-button.two uni-text{width:49%}\n.pub-fixed-button uni-navigator,.pub-fixed-button uni-text{height:88upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6upx;font-size:32upx}\n.pub-fixed-button .btn{background:#20bf6a;color:#fff}\n.pub-fixed-button .btn.red{background:#e60012}\n.pub-fixed-button .fl{border:.5px solid #aaa;text-align:center;color:#626262;background:#fff}\n.fast-button{float:left;width:100%;margin-top:200upx;padding:0 60upx}\n.fast-button .ico-login{float:right;width:110upx;height:110upx;background-color:#20bf6a;border-radius:50%;box-shadow:0 10upx 36upx rgba(69,216,137,.36)}\n.fast-button .ico-login:active{background-color:#1ca55c}\n.pub-upload{float:left;width:100%}\n.pub-upload .ul{float:left;width:100%}\n.pub-upload .ul .li{width:215upx;height:210upx;overflow:hidden;border-radius:15upx;float:left;margin-left:25upx;position:relative;background:#f7f7f7}\n.pub-upload .ul .li:nth-child(3n+1){margin-left:0}\n.pub-upload .ul .li .delete{position:absolute;left:0;right:0;bottom:0;color:#fff;font-size:24upx;line-height:2}\n.pub-upload .ul .li:nth-child(n+4){margin-top:20upx}\n.pub-upload .ul .li uni-image{width:100%;height:100%;float:left}\n.pub-upload .ul .li uni-video{width:100%;height:100%;object-fit:cover;object-position:center center;float:left}\n.pub-upload .ul .li uni-text{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);color:#fff;text-align:center;font-size:24upx;line-height:1.6}\n.pub-list.full .ul .li{box-shadow:none;padding:26upx 0 0;border-top:.5px solid #f2f2f3;margin-top:0;border-radius:0}\n.pub-list.full .ul .li:first-child{border-top:none}\n.pub-list .ul{float:left;width:100%}\n.pub-list .ul .li{background:#fff;box-shadow:0 0 12upx rgba(0,0,0,.06);float:left;width:100%;padding:38upx 34upx 0;border-radius:12upx;margin-top:20upx}\n.pub-list .ul .li .detail{float:left;width:100%;height:100%}\n.pub-list .per-pic{float:left;width:100%}\n.pub-list .per-pic .pict{float:left;width:88upx;height:88upx;background:#f7f7f7;border-radius:50%;overflow:hidden}\n.pub-list .per-pic .pict uni-navigator{display:block;height:100%;width:100%;border-radius:50%;overflow:hidden}\n.pub-list .per-pic .pict uni-image{height:100%;width:100%}\n.pub-list .per-pic .text{float:left;margin-left:22upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;height:88upx;width:350upx}\n.pub-list .per-pic .text .h2{font-size:28upx;color:#0c0c0c}\n.pub-list .per-pic .text .span{font-size:24upx;color:#6d6d6d}\n.pub-list .per-pic .follow{border:.5px solid #20bf6a;color:#3ec87e;float:right;min-width:142upx;text-align:center;line-height:60upx;border-radius:50upx;padding:0 20upx;font-size:28upx}\n.pub-list .per-pic .follow.acti{border-color:#797979;color:#797979}\n.pub-list .per-pic .fr{height:88upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n.pub-list .per-pic .fr uni-text{display:block;width:142upx;height:60upx;border-radius:60upx;border:.5px solid #20bf6a;color:#20bf6a;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.pub-list .desc{float:left;width:100%;font-size:28upx;margin-top:30upx;line-height:1.6;margin-bottom:25upx;-webkit-line-clamp:2;display:-webkit-box;word-wrap:break-word;overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical}\n.pub-list .desc uni-text{display:block;line-height:1.6}\n.pub-list .desc.all{-webkit-line-clamp:initial}\n.pub-list .group{float:left;width:100%}\n.pub-list .group uni-swiper{display:block;width:100%;height:417upx}\n.pub-list .group .one{float:left;width:100%;position:relative;background:#f7f7f7;overflow:hidden;border-radius:15upx}\n.pub-list .group .one.video{height:450upx}\n.pub-list .group .one uni-image{width:100%;border-radius:15upx;height:100%}\n.pub-list .group .one uni-video{width:100%}\n.pub-list .group .two{float:left;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:0}\n.pub-list .group .two uni-image{width:100%;height:100%;float:left}\n.pub-list .group .two .item{border-radius:10upx;overflow:hidden;border:.5px solid #ccc}\n.pub-list .group .two.pict-1 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:380upx}\n.pub-list .group .two.pict-1 .img{border:.5px solid #000}\n.pub-list .group .two.pict-2 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:320upx}\n.pub-list .group .two.pict-2 .img1{margin-left:20upx}\n.pub-list .group .two.pict-3 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:234upx}\n.pub-list .group .two.pict-3 .img1{margin-left:14upx}\n.pub-list .group .two.pict-4{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group .two.pict-4 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:320upx}\n.pub-list .group .two.pict-4 .img1{margin-left:20upx}\n.pub-list .group .two.pict-5{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}\n.pub-list .group .two.pict-5 .item{width:30%;height:200upx;margin-left:2%}\n.pub-list .group .two.pict-5 .item:nth-child(3n+1){margin-left:0}\n.pub-list .group .two.pict-5 .item:nth-child(n+4){margin-top:15upx}\n.pub-list .group .two.pict-6{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group .two.pict-6 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:320upx}\n.pub-list .group .two.pict-6 .img1{margin-left:20upx}\n.pub-list .group .two.pict-7{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group .two.pict-7 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:320upx}\n.pub-list .group .two.pict-7 .img1{margin-left:20upx}\n.pub-list .group .two.pict-8{-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group .two.pict-8 .item{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;height:320upx}\n.pub-list .group .two.pict-8 .img1{margin-left:20upx}\n.pub-list .group .video{position:relative}\n.pub-list .group.picture-1 .one{height:412upx}\n.pub-list .group.picture-2 .one{width:48%!important;height:300upx;box-shadow:0 0 10upx rgba(0,0,0,.06)}\n.pub-list .group.picture-2 .one:nth-child(even){float:right}\n.pub-list .group.picture-2 .one:nth-child(n+3){margin-top:25upx}\n.pub-list .group.picture-3{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.pub-list .group.picture-3 .one{float:left;width:32%;height:200upx}\n.pub-list .group.picture-4{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.pub-list .group.picture-4 .one{float:left;width:32%;height:200upx}\n.pub-list .group.picture-5{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group.picture-5 .one{float:left;width:31%;height:200upx;margin-left:2%;border:.5px solid #e1e1e1}\n.pub-list .group.picture-5 .one:nth-child(3n+1){margin-left:0}\n.pub-list .group.picture-5 .one:nth-child(n+4){margin-top:15upx}\n.pub-list .group.picture-6{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group.picture-6 .one{float:left;width:32%;height:200upx}\n.pub-list .group.picture-7{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group.picture-7 .one{float:left;width:32%;height:200upx}\n.pub-list .group.picture-8{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}\n.pub-list .group.picture-8 .one{float:left;width:32%;height:200upx}\n.pub-search .box{background:#f2f2f3;border-radius:60upx;height:72upx}\n.pub-search .box uni-input{height:100%;width:calc(100% - 78upx);float:left;font-size:28upx}\n.pub-send{position:absolute;left:0;right:0;bottom:0;padding:15upx 28upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.pub-send uni-input{width:501upx;height:60upx;border-radius:6upx;background:#f2f2f3;font-size:26upx;padding:0 27upx}\n.pub-send uni-text{width:46upx;height:60upx}\n.fr uni-text{float:left}\n.ui-button{border:.5px solid #20bf6a;border-radius:60upx;font-size:28upx;height:60upx;padding:0 20upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#20bf6a;min-width:142upx}\n.ui-button.active{border:.5px solid #aaa;color:#797979}\n.ico-play{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer;width:79upx;height:79upx;z-index:1}\n.fabu-post{padding:15upx 30upx;position:fixed;left:0;right:0;bottom:0}\n.fabu-post .fatie{width:299upx;height:72upx;line-height:72upx;border-radius:50upx;background:#20bf6a;display:block;margin:0 auto;box-shadow:0 0 8upx rgba(150,150,150,.52);text-align:center}\n.fabu-post .fatie uni-text{color:#fff;font-size:32upx;line-height:31upx;background-size:30upx}\n.pub-comment{padding:15upx 30upx;position:fixed;left:0;right:0;bottom:0;background:#fff;box-shadow:0 -5upx 24upx rgba(192,192,192,.26)}\n.pub-comment .u{float:left;font-size:28upx;height:70upx;line-height:70upx}\n.pub-comment uni-input{font-size:28upx;width:553upx;height:72upx;background:#f2f2f3;padding:0 26upx;border-radius:6upx;float:left;margin-left:10upx}\n.pub-comment .btn{color:#20bf6a;float:right;height:70upx;line-height:70upx}\n.pub-comment-null{height:100upx;float:left;width:100%}\n.pub-search1{float:left;width:100%;height:80upx;border-radius:10upx;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:20upx}\n.pub-search1 .wrap{background:#f2f2f3;height:100%;float:left;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:flex}\n.pub-search1 uni-input{height:100%;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;border-radius:6upx}\n.pub-search1 .search-btn{border-radius:6upx;line-height:80upx;display:block;float:right;margin-left:15upx;background:#20bf6a;color:#fff;padding:0 25upx}\n.alert-jubao{position:fixed;left:0;right:0;bottom:0;top:0;background:rgba(0,0,0,.6);z-index:99}\n.alert-jubao .layout{background:#fff;position:absolute;left:0;right:0;bottom:0}\n.alert-jubao .layout .ul{float:left;width:100%;padding:38upx 0}\n.alert-jubao .layout .ul .li{float:left;margin-left:42upx;text-align:center}\n.alert-jubao .layout .ul .li uni-image{width:96upx;height:96upx}\n.alert-jubao .layout .ul .li uni-text{display:block;font-size:24upx;margin-top:14upx;color:#999}\n.alert-jubao .layout .cancel{float:left;width:100%;border-top:.5px solid #dcdcdc;text-align:center;font-size:28upx;color:#999;padding:34upx 0}\n.report-page{float:left;width:100%;padding:28upx 28upx}\n.report-page uni-textarea{height:264upx;background-color:#f4f4f4;border-radius:10upx;padding:28upx 30upx;font-size:26upx;width:100%}\n.report-page .btn{height:88upx;line-height:88upx;background:#20bf6a;color:#fff;border-radius:6upx;font-size:32upx;text-align:center;float:left;width:100%;margin-top:75upx}\n.process-wrapper{margin-top:60upx;float:left;width:100%}\n.process-wrapper .value{display:block;text-align:center;float:left;width:100%;margin-bottom:10upx}\n.process-wrapper .process{float:left;width:100%;height:30upx;border-radius:24upx;overflow:hidden;background-color:#e6e6e6}\n.process-wrapper .process uni-text{display:block;float:left;height:100%;background:#20bf6a}\n.register-page{float:left;width:100%}\n.register-page .ul{float:left;width:100%;margin-top:95upx;padding:0 26upx}\n.register-page .ul .li{float:left;width:100%;border-bottom:solid .5px #ebebeb;height:108upx;display:-webkit-box;display:-webkit-flex;display:flex}\n.register-page .ul .li uni-input{height:100%;text-align:left;float:left;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;padding-right:15upx}\n.register-page .ul .li .fr{color:#c6c6c6;line-height:108upx;-webkit-flex-shrink:0;flex-shrink:0}\n.register-page .button{float:left;width:100%;padding:0 102upx;margin-top:92upx}\n.register-page .button .btn{background-color:#aaa;height:99upx;border-radius:60upx;color:#fff;line-height:99upx;display:block;text-align:center;font-size:34upx}\n.set-info{height:100%;background-color:#fff}\n.set-info .title{float:left;width:100%;padding:96upx 66upx 0}\n.set-info .title uni-text{font-size:40upx;display:block;line-height:1.4;color:#893dfd}\n.set-info .ul{float:left;width:100%}\n.set-info .ul .li{float:left;width:100%;padding:0 63upx;margin-top:54upx}\n.set-info .ul .li>uni-text{display:block}\n.set-info .ul .li .pict{width:122upx;height:122upx;margin-top:51upx}\n.set-info .ul .li .pict uni-image{width:100%;height:100%}\n.set-info .ul .li .wrap{float:left;width:100%;margin-top:18upx;border-bottom:solid .5px #893dfd;height:70upx}\n.set-info .ul .li .wrap uni-input{height:100%;float:left;color:#893dfd;width:550upx}\n.set-info .ul .li .wrap .ico-down{float:right;width:70upx;height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAIAAAHwtMhpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4MUY1OERCRDdFNTExRUFCMzRCQ0ZFOTVCODhEODdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4MUY1OERDRDdFNTExRUFCMzRCQ0ZFOTVCODhEODdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzgxRjU4RDlEN0U1MTFFQUIzNEJDRkU5NUI4OEQ4N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzgxRjU4REFEN0U1MTFFQUIzNEJDRkU5NUI4OEQ4N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rPFBVAAADIElEQVR42mL8////i2t/GBgZBIRYGIGcuVEM//8zpCxnAAggxufXfv9nAAGg8J85kczK9u8AAojx798/86KZgEIMMKBm/Qmo4f+//yAwO/L//imvIFyAAGJ8dvUvA+M/oMr/YPVAU1lWlP7k5eME6vrPCDSV4e/ffyArJ3j94uFnA/L//PmfvoaRAWLYBPffM0P+QwBAADHumvzj7kFmoDEQjRBDGRjgjH8MjMyfX4FNY/jD0Ov/UUCA//8/uCOBLCaQrT8ZlNw/OqfzM4LcB5H6w9AX+JafV/jfv/+MjIz/fjGoun1xTOcBy/1ngFj/798/qEN+/+72f3Jg6vf/qAAggBi/v/r//vUfRrBzQE6EWfwfFlR//zFIa7OwTAj5LiDOxgh2NNwHcHVgnYxytu+YrGJ/A8WYmVmAiAWMgAwmFiiDlYnl69ffbtm8THYpfJoe3/79ZEAGwFCAGPz545eitRzMjKwgz9sn86h7vvvz5x+SOqCPGT5++pO7jZWBHSTCBHYTo32qkKbLd2BYMIBN+s/E8OnTp6J1LMwM7KAABgrAI8A+nVvF5c3f3yCTvr7/m7+FE2gSKERAYcHIgBZOR2Z86/J/8f/HL7gIJGABArRN9joNw0AcP9uJE0KLUARPwFqxdEXimw14Cj4mxOsg1KUvAEIMTFAWBiRgADZUwZSoC6hNS75s49gkJLT/ybJzd/+7+wV5r8H1SRh4dWwAVvNjAAbPijAMRFWTxom61/z9HYQgKOtZtubMDNeOsdF7t7y3uG5RRIALyDeths2zSC2WwwHlg6QdKfsp+B+R38UZVYLBzan/cuHaUxRbeffZDEGg8uhB0126ApFAMEgXtz9X9l1iEgWpVhx3WuzpKnFoTa4XJogr00jvk3HRHw2am2T1kAI1f/PzfN1Fn5127/msZlEH2fI594FAFMilMOxHjd3++sE84EqxkruSWBrdtZKHS2LbVEKoFywzSpyCUdjcYstHkmprPLCSTpRtSkVw2/56PIdpY1aO7DsMGjvxxp4L5v8sReBkd/oLoX9yxrr3nmDGwtKcRGisZkU/jQenbBn7XHsAAAAASUVORK5CYII=) center/26upx no-repeat}\n.set-info .ul .li .box{float:left;width:100%;margin-top:51upx}\n.set-info .ul .li .box .item{float:left;width:124rpx;position:relative;margin-right:100upx}\n.set-info .ul .li .box .item.active:after{content:'';position:absolute;width:40upx;height:40upx;right:0;top:50%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNEE3NkI3RDdFMzExRUE4NDEwQkRERjVENDlEOTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJCNEE3NkI4RDdFMzExRUE4NDEwQkRERjVENDlEOTJDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkI0QTc2QjVEN0UzMTFFQTg0MTBCRERGNUQ0OUQ5MkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkI0QTc2QjZEN0UzMTFFQTg0MTBCRERGNUQ0OUQ5MkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7wrLvtAAAPMUlEQVR42mJ8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) center top no-repeat;background-size:cover}\n.set-info .ul .li .box .item .gender{width:124upx;height:124upx;border-radius:50%;box-shadow:0 3upx 10upx rgba(0,0,0,.5)}\n.set-info .ul .li .box .item .gender uni-image{width:100%;height:100%}\n.set-info .ul .li .box .item uni-text{display:block;text-align:center;color:#893dfd;margin-top:10upx}\n.set-info .button{float:left;width:100%;margin-top:105upx;padding:0 105upx}\n.set-info .button .btn{height:96upx;background:-webkit-linear-gradient(left,#f570e5,#a15bfc);color:#fff;width:100%;display:block;border-radius:60upx;line-height:96upx;text-align:center}\n.login-page{height:100%;background-color:#0f0f0f;position:relative;overflow:hidden}\n.login-page .back{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;opacity:.4}\n.login-page .back.active{-webkit-filter:blur(.5px);filter:blur(.5px)}\n.login-page .back uni-image{width:100%;height:100%}\n.login-page .tabs-login{position:relative;z-index:2;float:left;width:100%}\n.login-page .tabs-login uni-text{float:left;text-align:center;width:50%;line-height:3;font-size:34upx;position:relative;color:rgba(255,255,255,.7)}\n.login-page .tabs-login uni-text:nth-child(2):before{content:'';position:absolute;width:.5px;height:40upx;background-color:#fff;left:0;top:50%;margin-top:-20upx}\n.login-page .tabs-login uni-text.active{position:relative;color:#fff}\n.login-page .tabs-login uni-text.active:after{content:'';position:absolute;width:60upx;height:6upx;background-color:#fff;position:absolute;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);bottom:0;border-radius:6upx}\n.login-page .ul{position:relative;z-index:2;margin-top:52upx;float:left;width:100%}\n.login-page .ul .li{float:left;width:100%;padding:0 95upx;margin-top:53upx}\n.login-page .ul .li .get-code{float:right;color:#fff;height:90upx;line-height:90upx}\n.login-page .ul .li uni-input{height:90upx;border-radius:60upx;background-color:rgba(255,255,255,.6);padding:0 30upx;color:#fff}\n.login-page .ul .li uni-input.short{width:400upx;float:left}\n.login-page .ul .li .button{height:90upx;border-radius:60upx;color:#893dfd;background-color:#fff;text-align:center;display:block;font-size:34upx;line-height:90upx}\n.login-page .ul .li .navig{float:right;color:#fff}\n.login-page .other-user{position:absolute;left:0;right:0;bottom:90upx;text-align:center;z-index:2;color:#fff;text-decoration:underline}\n.footer{position:fixed;left:0;right:0;bottom:0;box-shadow:0 -4upx 6upx rgba(0,0,0,.2);z-index:9;background-color:rgba(0,0,0,.9)}\n.footer .ul .li{float:left;width:20%;text-align:center;line-height:90upx}\n.footer .ul .li .ico,.footer .ul .li .span{color:#fff}\n.footer .ul .li .cirl{width:60upx;height:60upx;background-color:#ccc;display:block;margin:0 auto;border-radius:50%;margin-top:15upx}\n.video-tabs{height:100vh;position:relative}\n.video-tabs uni-video{height:100%;width:100%}\n.task-tabs{float:left;width:100%;padding:0 38upx}\n.task-tabs .title{float:left;width:100%;text-align:center;line-height:90upx;margin-top:var(--status-bar-height)}\n.task-tabs .notice{float:left;width:100%}\n.task-tabs .notice .ul{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n.task-tabs .notice .ul .li{width:145upx;height:80upx}\n.task-tabs .notice .ul .li uni-image{width:100%;height:100%}\n.task-tabs .list{float:left;width:100%;height:calc(100vh - 199upx - 90upx);overflow:hidden;overflow-y:auto;margin-top:30upx;padding-bottom:30upx}\n.task-tabs .list .ul .li{float:left;width:100%;padding:20upx 28upx;border-radius:26upx;margin-top:30upx}\n.task-tabs .list .ul .li:nth-of-type(1){margin-top:0}\n.task-tabs .list .ul .li .h2{color:#fff;font-weight:700}\n.task-tabs .list .ul .li .layout{float:left;width:100%;margin-top:25upx}\n.task-tabs .list .ul .li .layout .fl{width:470upx}\n.task-tabs .list .ul .li .layout .fl .span{color:#fff;display:block;line-height:1.5;font-size:24upx}\n.task-tabs .list .ul .li .layout .fr .span{color:#fff;border:solid .5px #fff;display:inline-block;padding:8upx 35upx;border-radius:30upx}\n.task-tabs .list .ul .li .activity{float:left;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:25upx}\n.task-tabs .list .ul .li .activity uni-text{color:#fff;font-size:26upx}\n.task-tabs .list .ul .bg1{background:-webkit-linear-gradient(left,#ded161,#ff6750)}\n.task-tabs .list .ul .bg2{background:-webkit-linear-gradient(left,#1791fb,#ff6750)}\n.task-tabs .list .ul .bg3{background:-webkit-linear-gradient(left,#ff3473,#ff6750)}\n.task-tabs .list .ul .bg4{background:-webkit-linear-gradient(left,#cb22b4,#ff6750)}\n.task-tabs .list .ul .bg5{background:-webkit-linear-gradient(left,#cb22b4,#ff6750)}\n.task-tabs .list .ul .bg6{background:-webkit-linear-gradient(left,#cb22b4,#ff6750)}\n.center-tabs{float:left;width:100%;min-height:100vh;padding-bottom:120upx}\n.center-tabs .user-layout{float:left;width:100%;background:-webkit-linear-gradient(left,#e6143b,#fd5d43);padding:calc(var(--status-bar-height) + 50upx) 30upx 40upx}\n.center-tabs .user-layout .pict{width:80upx;height:80upx;border-radius:50%;float:left;background-color:#ccc}\n.center-tabs .user-layout .text{width:480upx;float:left;margin-left:20upx}\n.center-tabs .user-layout .text uni-text{display:block;color:#fff;line-height:1.5}\n.center-tabs .user-layout .set{float:right}\n.center-tabs .user-layout .set .ico{float:left;background-color:#f1f1f1;margin-left:30upx}\n.center-tabs .user-layout .set .ico:nth-of-type(1){margin-left:0}\n.center-tabs .user-layout .set .ico.i1{background:url(data:image/png;base64,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) center top no-repeat;background-size:cover;width:36upx;height:36upx}\n.center-tabs .user-layout .set .ico.i2{background:url(data:image/png;base64,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) center top no-repeat;background-size:cover;width:40upx;height:40upx}\n.center-tabs .user-layout .dou{float:left;width:100%;margin-top:50upx}\n.center-tabs .user-layout .dou .h3{color:#fff;float:left;width:100%}\n.center-tabs .user-layout .dou .number{float:left;width:100%;margin-top:15upx}\n.center-tabs .user-layout .dou .number .sp1{color:#fff;font-size:46upx}\n.center-tabs .user-layout .dou .number .sp2{color:#fff}\n.center-tabs .liveness{float:left;width:100%;background-color:#fff}\n.center-tabs .liveness .ul .li{width:25%;text-align:center;float:left;padding:30upx 0}\n.center-tabs .liveness .ul .li .h2{display:block;color:#e6143b}\n.center-tabs .liveness .ul .li .p{display:block;margin-top:10upx;color:rgba(0,0,0,.6)}\n.center-tabs .scroll-new{float:left;width:100%;margin-top:20upx;background-color:#fff;padding:0 30upx}\n.center-tabs .scroll-new .h3{float:left;line-height:80upx;color:#f60}\n.center-tabs .scroll-new .content{width:480upx;float:left;margin-left:30upx}\n.center-tabs .scroll-new .content uni-text{float:left;width:100%;line-height:80upx}\n.center-tabs .scroll-new .more{color:#f60;line-height:80upx;float:right}\n.center-tabs .list-menu{float:left;width:100%;padding:0 30upx;margin-top:30upx}\n.center-tabs .list-menu .layout{background-color:#fff;border-radius:10upx;float:left;width:100%}\n.center-tabs .list-menu .layout .h3{display:block;line-height:80upx;padding:0 30upx;border-bottom:solid .5px #ccc}\n.center-tabs .list-menu-1 .layout .ul .li{float:left;padding:20upx 0;width:25%;text-align:center}\n.center-tabs .list-menu-1 .layout .ul .li uni-image{width:92upx;height:92upx}\n.center-tabs .list-menu-1 .layout .ul .li uni-text{display:block;margin-top:20upx}\n.center-tabs .list-menu-2 .layout .ul .li{float:left;padding:20upx 30upx;width:100%;border-top:solid .5px #f7f7f7}\n.center-tabs .list-menu-2 .layout .ul .li:first-child{border-top:none}\n.center-tabs .list-menu-2 .layout .ul .li uni-text{display:block;margin-top:20upx;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADjUlEQVR4Xu3ca1KrQBBAYVykLvK6SQtvUsZImAfd069jlb+kSOB8DDDEvG2+fv5t2/Z5+/X1zpK+mzdH27XHf7+9nw8QrCnjBcBj/PuWg2CBAQ8AjuKDYEH8/SWsAZzFB8ECBJYAeuKDQBmBFYCR+CBQRGABYCY+CJQQWADYNwUESkFHV2sFAASjpZSWtwQAAqWoI6u1BgCCkVoKy3oAAAKFsL2r9AIABL3FhJfzBAAEwnF7VucNAAh6qgku4xEACAQDt1blFQAIWuWE/u4ZAAiEIp+txjsAECgjiAAABIoIogAAgRKCSABAoIAgGgAQCCOICAAEggiiAgCBEILIAEAggCA6ABBcRJABAAguIMgCAASTCDIBAMEEgmwAQDCIICMAEAwgyAoABJ0IMgMAQQeC7ABA0EBQAQAIThBUAQCCFwgqAQDBAYJqAEDwhKAiABA8IKgKAAQ3BJUBgMDB18R1TFWoL1L662qqjwB3XWURAOBngCmJAAC/zzDlEADg7yVGKQQAOL7GLIMAAK9vMkogAMD5XWZ6BABoTzOkRgCANoDUM4YA6AOQFgEA+gGkRACAMQDpEABgHEAqBACYA5AGAQDmAaRAAIBrAMIjAMB1AKERAEAGQFgEAJADEBIBAGQBhEMAAADI74HCawz35JARQE5ruPj7pgNABkDI+AAoHh8A1wGEPfLvm84pYB5B+PiMAMXjA2AOQIojn1MA8b/3ANcA/RBSHfmMAP3hw83vj2waI0B7b6U88hkB2uFTH/kAaANIfeQD4BxAifjcBRwjKBMfAH8BlIoPgN8AysUHwA+AkvEB8B9A2fgAKB6/OoDSR371eQDi3wRUfBZA/Ie7n2oAiP8091EJAPEPZj6rACD+i2cfFQAQ/+TBV3YAxG889s4MgPjtzzyk/VAo8TviZ50JJH5n/IwAiD8QPxsA4g/GzwSA+BPxswAg/mT8DACIfyF+dADEvxg/MgDiC8SPCoD4QvEjAiC+YPxoAIgvHD8SAOIrxI8CgPhK8SMAIL5ifO8AiK8c3zMA4i+I7xUA8RfF9wiA+AvjewNA/MXxPQEgvkF8LwCIbxTfAwDiG8a3BkB84/iWAIjvIL4VAOI7iW8FYH/dGQQf27Z9Otp3Kd6K5f8GjiAgvhI3SwC9IwHxleJbngIeN+lsJCC+YnwvAF6NBMRXju8JwDMC4i+I7w3AHcF+pc/V/iIAX8z/AJCXjOG5AAAAAElFTkSuQmCC) right center/30upx no-repeat}\n.set-page{float:left;width:100%;height:100%}\n.set-page .ul{float:left;width:100%;margin-top:25upx;padding:0 20upx;background-color:#fff}\n.set-page .ul .li{float:left;width:100%;height:90upx;border-top:solid .5px #ccc;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADjUlEQVR4Xu3ca1KrQBBAYVykLvK6SQtvUsZImAfd069jlb+kSOB8DDDEvG2+fv5t2/Z5+/X1zpK+mzdH27XHf7+9nw8QrCnjBcBj/PuWg2CBAQ8AjuKDYEH8/SWsAZzFB8ECBJYAeuKDQBmBFYCR+CBQRGABYCY+CJQQWADYNwUESkFHV2sFAASjpZSWtwQAAqWoI6u1BgCCkVoKy3oAAAKFsL2r9AIABL3FhJfzBAAEwnF7VucNAAh6qgku4xEACAQDt1blFQAIWuWE/u4ZAAiEIp+txjsAECgjiAAABIoIogAAgRKCSABAoIAgGgAQCCOICAAEggiiAgCBEILIAEAggCA6ABBcRJABAAguIMgCAASTCDIBAMEEgmwAQDCIICMAEAwgyAoABJ0IMgMAQQeC7ABA0EBQAQAIThBUAQCCFwgqAQDBAYJqAEDwhKAiABA8IKgKAAQ3BJUBgMDB18R1TFWoL1L662qqjwB3XWURAOBngCmJAAC/zzDlEADg7yVGKQQAOL7GLIMAAK9vMkogAMD5XWZ6BABoTzOkRgCANoDUM4YA6AOQFgEA+gGkRACAMQDpEABgHEAqBACYA5AGAQDmAaRAAIBrAMIjAMB1AKERAEAGQFgEAJADEBIBAGQBhEMAAADI74HCawz35JARQE5ruPj7pgNABkDI+AAoHh8A1wGEPfLvm84pYB5B+PiMAMXjA2AOQIojn1MA8b/3ANcA/RBSHfmMAP3hw83vj2waI0B7b6U88hkB2uFTH/kAaANIfeQD4BxAifjcBRwjKBMfAH8BlIoPgN8AysUHwA+AkvEB8B9A2fgAKB6/OoDSR371eQDi3wRUfBZA/Ie7n2oAiP8091EJAPEPZj6rACD+i2cfFQAQ/+TBV3YAxG889s4MgPjtzzyk/VAo8TviZ50JJH5n/IwAiD8QPxsA4g/GzwSA+BPxswAg/mT8DACIfyF+dADEvxg/MgDiC8SPCoD4QvEjAiC+YPxoAIgvHD8SAOIrxI8CgPhK8SMAIL5ifO8AiK8c3zMA4i+I7xUA8RfF9wiA+AvjewNA/MXxPQEgvkF8LwCIbxTfAwDiG8a3BkB84/iWAIjvIL4VAOI7iW8FYH/dGQQf27Z9Otp3Kd6K5f8GjiAgvhI3SwC9IwHxleJbngIeN+lsJCC+YnwvAF6NBMRXju8JwDMC4i+I7w3AHcF+pc/V/iIAX8z/AJCXjOG5AAAAAElFTkSuQmCC) right center/30upx no-repeat}\n.set-page .ul .li:first-child{border-top:none}\n.set-page .ul .li .span{line-height:90upx}\n.set-page .ul .li .fr{padding-right:40upx}\n.set-page .ul .li .fr .sp1{line-height:90upx;display:block}\n.shop-tabs{float:left;width:100%}\n.shop-tabs .banner{background-color:#fcc}\n.shop-tabs .banner .ul .li{float:left}\n.shop-tabs .banner .ul .li uni-image{width:100%;float:left;height:100%}\n.shop-tabs .trade .ul .li{float:left;width:20%;text-align:center;padding:20upx 0}\n.shop-tabs .trade .ul .li .pict{width:80upx;height:80upx;border-radius:50%;margin:0 auto}\n.shop-tabs .trade .ul .li .pict uni-image{width:100%;height:100%}\n.shop-tabs .trade .ul .li .h2{display:block;margin-top:10upx}\n.product .ul .li{width:33.33%;text-align:center;float:left;margin-top:20upx;padding:0 15upx}\n.product .ul .li .pict{height:200upx}\n.product .ul .li .pict uni-image{width:100%;height:100%}\n.product .ul .li .h2{display:block;margin-top:20upx;font-size:34upx}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 57 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 58);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /([+-]?\d+(\.\d+)?)[r|u]px/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
	}
  return css.replace(/\{[\s\S]+?\}/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 58 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);