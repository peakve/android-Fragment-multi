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
/******/ 	return __webpack_require__(__webpack_require__.s = 496);
/******/ })
/************************************************************************/
/******/ ({

/***/ 139:
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

exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {}
};

/***/ }),

/***/ 140:
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

var dom = weex.requireModule('dom');
// dom.scrollToElement(el, { offset: 0 })
var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
//import bbtop from './bbtop.vue'
exports.default = {
    data: function data() {
        return {
            navIndex: 1,
            sortBy: '', // 筛选的条件
            Activity: [],
            Delivery: [],
            delivery_mode: null, // 选中的配送方式
            support_ids: [], // 选中的商铺活动列表
            filterNum: 0 // 所选中的所有样式的集合

        };
    },
    mounted: function mounted() {},

    methods: {
        initJLine: function initJLine() {},

        chooseTab: function chooseTab(idx, event) {
            this.navIndex = idx;
            modal.toast({ message: idx + '--', duration: 1 });
            if (idx == 0) {} else if (idx == 1) {
                // this.$router.push('/home')
            } else {
                    // this.$router.push({ name: 'bbtop', params: { "symbol": idx }})
                }
        }
    }
};

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 114,
    "left": 0,
    "right": 0,
    "height": 54,
    "zIndex": 10,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": 1,
    "borderBottomColor": "#d9d9d9"
  },
  "w-ipx": {
    "top": 154
  },
  "tab-i": {
    "flexFlow": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "scroller": {
    "height": 54,
    "flexDirection": "row"
  },
  "i-c": {
    "paddingTop": 10,
    "paddingLeft": 45,
    "paddingRight": 45,
    "paddingBottom": 6,
    "fontSize": 26,
    "color": "#333333"
  },
  "c-act": {
    "color": "#b4282d"
  },
  "j-uline": {
    "width": 80,
    "height": 4,
    "backgroundColor": "#b4282d"
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": 114,
    "paddingTop": 44,
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "zIndex": 101,
    "backgroundColor": "#fafafa",
    "opacity": 0.99
  },
  "w-ipx": {
    "height": 154,
    "paddingTop": 84
  },
  "scan": {
    "height": 80,
    "width": 96
  },
  "notice": {
    "height": 80,
    "width": 96
  },
  "ic": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": 32
  },
  "txt": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": 18
  },
  "search": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "flex": 1,
    "height": 60,
    "fontSize": 26,
    "paddingTop": 13,
    "backgroundColor": "#ededed",
    "borderRadius": 8
  }
}

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "loadmoreoffset": "750px",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "actJC",
    class: ['i-c', _vm.navIndex == 0 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseTab(0)
      }
    }
  }, [_vm._v("交易所公告")]), (_vm.navIndex == 0) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    class: ['i-c', _vm.navIndex == 1 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseTab(1)
      }
    }
  }, [_vm._v("交易所推特")]), (_vm.navIndex == 1) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    class: ['i-c', _vm.navIndex == 2 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseTab(2)
      }
    }
  }, [_vm._v("大V")]), (_vm.navIndex == 2) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    class: ['i-c', _vm.navIndex == 3 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseTab(3)
      }
    }
  }, [_vm._v("币谈")]), (_vm.navIndex == 3) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["scan"]
  }), _c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v("早知道")]), _c('div', {
    staticClass: ["notice"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = __webpack_require__(370);

var _header2 = _interopRequireDefault(_header);

var _navtab = __webpack_require__(371);

var _navtab2 = _interopRequireDefault(_navtab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//


exports.default = {
    components: {
        'home-header': _header2.default,
        'navtab': _navtab2.default
    },
    data: function data() {
        return {
            showLoading: 'hide'
        };
    },
    created: function created() {},

    methods: {}
};

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header'), _c('navtab'), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(146)
)

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(161)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\news\\header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2ea92a5e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(144)
)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(159)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\news\\navtab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1d79dd56"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(237)

/* template */
var __vue_template__ = __webpack_require__(317)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\news\\bnews.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });