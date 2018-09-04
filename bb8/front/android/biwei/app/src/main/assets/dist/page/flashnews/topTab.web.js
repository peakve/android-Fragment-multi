// { "framework": "Vue"} 

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 555);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
var deviceHeight = weex.config.env.deviceHeight;

exports.default = {
    data: function data() {
        return {
            jLPosition: "left:30px;width:82px;",
            navIndex: 2,
            sortBy: '', // 筛选的条件
            Activity: [],
            Delivery: [],
            delivery_mode: null, // 选中的配送方式
            support_ids: [], // 选中的商铺活动列表
            filterNum: 0, // 所选中的所有样式的集合
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 114 + fringeHeight + 'px' };
    },
    mounted: function mounted() {
        this.initJLine();
        //this.Activity=[{id:"111",name:'看门'},{id:"112",name:'看门'}];
        //this.Activity.forEach((item, index) => {
        //this.support_ids[index] = {status: false, id: item.id};
        // });
        //this.Delivery=[{id:'2341',text:'看见1'},{id:'2342',text:'看见2'},{id:'2343',text:'看见3'}];
    },


    methods: {
        initJLine: function initJLine() {
            //if(!this.$refs.actJC) return;
            //let l = this.$refs.actJC.$el.offsetLeft;
            //let w = this.$refs.actJC.$el.offsetWidth;
            //this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
        },

        chooseChannel: function chooseChannel(idx, event) {
            this.navIndex = idx;
            //modal.toast({ message: idx+'--',  duration: 1 });
            if (idx == 0) {
                //modal.toast({ message: '点击了标签页',  duration: 1 });
                this.$emit("listenToChildEvent", "favorite");
                this.$router.push('/favorite');
            } else if (idx == 1) {
                this.$emit("listenToChildEvent", "article");
                this.$router.push('/hotArticle');
            } else if (idx == 2) {
                this.$emit("listenToChildEvent", "default");
                this.$router.push('/information');
            } else if (idx == 3) {
                this.$emit("listenToChildEvent", "default_en");
                this.$router.push('/globalmedia');
            } else if (idx == 4) {
                this.$emit("listenToChildEvent", "ex_notice");
                this.$router.push('/exchangenotice');
            } else if (idx == 5) {
                this.$emit("listenToChildEvent", "ex_twitter");
                this.$router.push('/exchangetwitter');
            } else if (idx == 6) {
                this.$emit("listenToChildEvent", "bv");
                this.$router.push('/voice');
            } else if (idx == 7) {
                this.$emit("listenToChildEvent", "newcoin");
                this.$router.push('/newcoin');
            } else if (idx == 8) {
                this.$emit("listenToChildEvent", "research_report");
                this.$router.push('/policy');
            }

            var el = this.$refs['t' + idx];
            var result = dom.getComponentRect(el, function (option) {
                if (option.size.left > 420) {
                    dom.scrollToElement(el, { offset: -option.size.left / 2 });
                }
            });
        }

    }
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_topTab_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_topTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_topTab_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_topTab_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_topTab_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_b21de360_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_topTab_vue__ = __webpack_require__(270);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b21de360"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_topTab_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_b21de360_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_topTab_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\page\\flashnews\\topTab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b21de360", Component.options)
  } else {
    hotAPI.reload("data-v-b21de360", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-b21de360]{\r\n    position: fixed;\r\n    top: 114px; \r\n    left: 0;right: 0;\r\n    height: 74px;\r\n    z-index: 10;\r\n    background-color: #fafafa;\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: #d9d9d9;\n}\n.scroller[data-v-b21de360]{\r\n    height: 74px;\r\n    padding-right: 50px;\r\n    flex-direction: row;\n}\n.tab-i[data-v-b21de360]{\r\n    flex-flow: column;\r\n    align-items: center;\r\n    width: 165px;\n}\n.tab-ia[data-v-b21de360]{\r\n    flex-flow: column;\r\n    align-items: center;\r\n    width: 90px;\n}\n.i-c[data-v-b21de360]{\r\n    padding-top:20px;\r\n    padding-bottom:21px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    font-size: 25px;\r\n    color:#999;\n}\n.c-act[data-v-b21de360]{\r\n    color:black;\n}\n.j-uline[data-v-b21de360]{\r\n    align-items: center;\r\n    width: 125px;\r\n    height: 2px;\r\n    background-color: black;\n}\n.j-ulinea[data-v-b21de360]{\r\n    align-items: center;\r\n    width: 50px;\r\n    height: 2px;\r\n    background-color: black;\n}\n.more[data-v-b21de360]{\r\n    position: absolute;\r\n    top:0;\r\n    right:0;\r\n    height: 52px;\r\n    width: 50px;\r\n    background-color: #fafafa;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    opacity: 0.6;\r\n    box-shadow:-6px -4px 4px #fafafa;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper", style: _vm.isIpx() ? "wipx" : "" },
    [
      _c(
        "scroller",
        {
          staticClass: "scroller",
          attrs: {
            "scroll-direction": "horizontal",
            loadmoreoffset: "750px",
            "show-scrollbar": "false"
          }
        },
        [
          _c("div", { staticClass: "tab-ia" }, [
            _c(
              "text",
              {
                ref: "t0",
                class: ["i-c", _vm.navIndex == 0 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(0)
                  }
                }
              },
              [_vm._v("关注")]
            ),
            _vm._v(" "),
            _vm.navIndex == 0
              ? _c("div", { staticClass: "j-ulinea" })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-ia" }, [
            _c(
              "text",
              {
                ref: "t1",
                class: ["i-c", _vm.navIndex == 1 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(1)
                  }
                }
              },
              [_vm._v("热点")]
            ),
            _vm._v(" "),
            _vm.navIndex == 1
              ? _c("div", { staticClass: "j-ulinea" })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-ia" }, [
            _c(
              "text",
              {
                ref: "t2",
                class: ["i-c", _vm.navIndex == 2 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(2)
                  }
                }
              },
              [_vm._v("资讯")]
            ),
            _vm._v(" "),
            _vm.navIndex == 2
              ? _c("div", { staticClass: "j-ulinea" })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-i" }, [
            _c(
              "text",
              {
                ref: "t3",
                class: ["i-c", _vm.navIndex == 3 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(3)
                  }
                }
              },
              [_vm._v("全球媒体")]
            ),
            _vm._v(" "),
            _vm.navIndex == 3 ? _c("div", { staticClass: "j-uline" }) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-i" }, [
            _c(
              "text",
              {
                ref: "t4",
                class: ["i-c", _vm.navIndex == 4 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(4)
                  }
                }
              },
              [_vm._v("交易所公告")]
            ),
            _vm._v(" "),
            _vm.navIndex == 4 ? _c("div", { staticClass: "j-uline" }) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-i" }, [
            _c(
              "text",
              {
                ref: "t5",
                class: ["i-c", _vm.navIndex == 5 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(5)
                  }
                }
              },
              [_vm._v("交易所推特")]
            ),
            _vm._v(" "),
            _vm.navIndex == 5 ? _c("div", { staticClass: "j-uline" }) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-i" }, [
            _c(
              "text",
              {
                ref: "t6",
                class: ["i-c", _vm.navIndex == 6 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(6)
                  }
                }
              },
              [_vm._v("大V声音")]
            ),
            _vm._v(" "),
            _vm.navIndex == 6 ? _c("div", { staticClass: "j-uline" }) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-i" }, [
            _c(
              "text",
              {
                ref: "t7",
                class: ["i-c", _vm.navIndex == 7 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(7)
                  }
                }
              },
              [_vm._v("新币时讯")]
            ),
            _vm._v(" "),
            _vm.navIndex == 7 ? _c("div", { staticClass: "j-uline" }) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tab-i" }, [
            _c(
              "text",
              {
                ref: "t8",
                class: ["i-c", _vm.navIndex == 8 ? "c-act" : ""],
                on: {
                  click: function($event) {
                    _vm.chooseChannel(8)
                  }
                }
              },
              [_vm._v("监管政策")]
            ),
            _vm._v(" "),
            _vm.navIndex == 8 ? _c("div", { staticClass: "j-uline" }) : _vm._e()
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b21de360", esExports)
  }
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("e06f2060", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b21de360\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./topTab.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b21de360\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./topTab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
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


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var App = __webpack_require__(162);
App.el = '#root';
new Vue(App);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

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

var listToStyles = __webpack_require__(40)

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

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
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
      styles = listToStyles(parentId, newList)
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
  var css = remove ? '' : obj.css

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
  var css = obj.css
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


/***/ })

/******/ });