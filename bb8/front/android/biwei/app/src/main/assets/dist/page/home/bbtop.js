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
/******/ 	return __webpack_require__(__webpack_require__.s = 474);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(104)

/* template */
var __vue_template__ = __webpack_require__(108)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b27e132"
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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _type = __webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle;

      var mrBtnStyle = (0, _extends3.default)({}, _type.STYLE_MAP[type], btnStyle);
      return disabled ? (0, _extends3.default)({}, mrBtnStyle, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle;

      var mrTextStyle = (0, _extends3.default)({}, _type.TEXT_STYLE_MAP[type], textStyle);
      return disabled ? (0, _extends3.default)({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
}; //
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

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": 702,
    "height": 88,
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": 12
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": 36,
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 120:
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

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
exports.default = {
    props: [],
    data: function data() {
        return {
            refreshing: false,
            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [41, -96], delay: 200 }]
        };
    },

    methods: {
        loadingAni: function loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown: function loadingAniDown() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
            }
            this.$emit('loadingDown', {
                status: 'loadingDown'
            });
        },
        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function () {
                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
            }.bind(this));
        },
        onrefresh: function onrefresh(event) {
            var _this = this;

            //                console.log('is refreshing')
            //                modal.toast({ message: 'refresh', duration: 1 })

            this.loadingAni();
            this.refreshing = true;
            setTimeout(function () {
                _this.refreshing = false;
                _this.loadingAniDown();
            }, 1300);
        },
        onpullingdown: function onpullingdown(event) {}
    }
};

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = {
  "u-refresh": {
    "height": 170,
    "width": 750,
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center"
  },
  "loading-bg": {
    "position": "absolute",
    "left": 250,
    "marginTop": 40,
    "width": 250,
    "height": 120
  },
  "l-txt-box": {
    "height": 106,
    "width": 200,
    "overflow": "hidden"
  },
  "l-txt": {
    "height": 30,
    "width": 30,
    "fontSize": 25,
    "position": "absolute",
    "top": 105,
    "left": 87,
    "color": "#666666"
  }
}

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["u-refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('image', {
    staticClass: ["loading-bg"],
    attrs: {
      "resize": "contain",
      "src": "http://www.fintechawaken.com/img/logo.png"
    }
  }), _c('div', {
    staticClass: ["l-txt-box"]
  }, [_c('text', {
    ref: "lTxt1",
    staticClass: ["l-txt", "l-txt-1"]
  }, [_vm._v("炒")]), _c('text', {
    ref: "lTxt2",
    staticClass: ["l-txt", "l-txt-2"]
  }, [_vm._v("币")]), _c('text', {
    ref: "lTxt3",
    staticClass: ["l-txt", "l-txt-3"]
  }, [_vm._v("有")]), _c('text', {
    ref: "lTxt4",
    staticClass: ["l-txt", "l-txt-4"]
  }, [_vm._v("风")]), _c('text', {
    ref: "lTxt5",
    staticClass: ["l-txt", "l-txt-5"]
  }, [_vm._v("险")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(121)
)

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(122)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\components\\refresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b2cd34a"
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

/***/ 13:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcPopup = __webpack_require__(173);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _wxcButton = __webpack_require__(85);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // components: { ExternalLink },
  components: { WxcButton: _wxcButton2.default, WxcPopup: _wxcPopup2.default },
  props: {
    story: {
      type: Object,
      required: true
    },
    'no-comment': {
      type: [String, Boolean],
      default: false
    }
  },
  methods: {
    buttonClicked: function buttonClicked() {
      // this.isShow = true;
    }
  }
}; //
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

// import ExternalLink from './external-link.vue'

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(7);
var ctx = __webpack_require__(38);
var hide = __webpack_require__(5);
var has = __webpack_require__(1);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = {
  "cell-item": {
    "position": "relative",
    "paddingTop": 20,
    "paddingBottom": 25,
    "paddingLeft": 100,
    "paddingRight": 40
  },
  "story-score": {
    "position": "absolute",
    "width": 100,
    "textAlign": "center",
    "left": 0,
    "top": 20,
    "fontSize": 32,
    "fontWeight": "bold",
    "color": "#000000"
  },
  "story-link": {
    "marginBottom": 25,
    "width": 610
  },
  "story-title": {
    "fontSize": 33,
    "color": "#404040"
  },
  "small-text": {
    "color": "#BBBBBB",
    "fontSize": 22,
    "marginBottom": 0,
    "fontFamily": "Verdana, Geneva, sans-serif"
  },
  "link-text": {
    "textDecoration": "underline"
  },
  "text-group": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "text-cell": {
    "flexGrow": 0
  },
  "confirm_out": {
    "textAlign": "center",
    "marginRight": 5,
    "borderColor": "#EEEEEF",
    "borderRadius": 6,
    "paddingTop": 15,
    "paddingBottom": 15,
    "paddingLeft": 30,
    "paddingRight": 30,
    "backgroundColor:active": "#e5640d"
  },
  "compare_up": {
    "backgroundColor": "#008000"
  },
  "compare_down": {
    "backgroundColor": "rgb(156,9,9)"
  },
  "confirm": {
    "color": "#FFFFFF",
    "fontSize": 32
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-item"]
  }, [_c('text', {
    staticClass: ["story-score"]
  }, [_vm._v(_vm._s(_vm.story.sysmbol))]), _c('div', {
    staticClass: ["story-link"],
    attrs: {
      "url": _vm.story.url
    }
  }, [_c('text', {
    staticClass: ["story-title"]
  }, [_vm._v(_vm._s(_vm.story.title))])]), _c('div', {
    staticClass: ["text-group"]
  }, [_c('div', {
    staticClass: ["text-cell"]
  }, [_c('text', {
    staticClass: ["small-text", "link-text"]
  }, [_vm._v(_vm._s(_vm.story.price))])]), _c('div', {
    class: ['text-cell', 'confirm_out', _vm.story.compare > 0 ? 'compare_up' : 'compare_down']
  }, [_c('text', {
    staticClass: ["confirm"]
  }, [_vm._v(_vm._s(_vm.story.increase) + " ")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(192);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(193);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(1);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(196)
)

/* script */
__vue_exports__ = __webpack_require__(194)

/* template */
var __vue_template__ = __webpack_require__(198)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4b24012c"
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(197)
)

/* script */
__vue_exports__ = __webpack_require__(195)

/* template */
var __vue_template__ = __webpack_require__(199)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-645e33f0"
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

/***/ 194:
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

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _wxcOverlay = __webpack_require__(172);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    transformValue: function transformValue() {
      return this.getTransform(this.pos, this.width, this.height, true);
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor;

      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = (0, _extends3.default)({}, style, {
        top: -height + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = (0, _extends3.default)({}, style, {
        bottom: -height + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = (0, _extends3.default)({}, style, {
        left: -width + 'px'
      }));
      pos === 'right' && (style = (0, _extends3.default)({}, style, {
        right: -width + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, (0, _extends3.default)({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      var _transform = void 0;
      if (isWeb) {
        _size -= this.standOut;
      }
      bool && (_size = 0);
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": 750,
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": 750
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(13);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bbItem = __webpack_require__(366);

var _bbItem2 = _interopRequireDefault(_bbItem);

var _refresh = __webpack_require__(126);

var _refresh2 = _interopRequireDefault(_refresh);

var _util = __webpack_require__(78);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

//   import AppHeader from '../components/app-header.vue'
var modal = weex.requireModule('modal');
var websocket = weex.requireModule('webSocket');

var navigator = weex.requireModule('navigator');

exports.default = {
  components: {
    bbItem: _bbItem2.default, refresher: _refresh2.default
  },
  props: {
    symbol: {
      type: String,
      required: false,
      default: 'top'
    }
  },
  data: function data() {
    return {
      loading: true
    };
  },


  computed: {
    stories: function stories() {
      // return this.$store.getters.activeItems  this.symbol|
      var symbol = this.$route.params.symbol;
      modal.toast({ message: symbol, duration: 1 });
      return [{ sysmbol: "BTC", title: "BTC--ETH" + symbol, tlt: "xxxxBTC", price: "2424124.1", compare: 1, increase: "20.18%" }, { sysmbol: "EOS", title: "EOS--ETH" + symbol, tlt: "xxxxBTC", price: "515342.1", compare: 0, increase: "-31.34%" }, { sysmbol: "TRX", title: "TRX--ETH" + symbol, tlt: "xxxxBTC", price: "432.1", compare: 1, increase: "30.31%" }, { sysmbol: "BTM", title: "BTM--ETH" + symbol, tlt: "xxxxBTC", price: "532.1", compare: 1, increase: "40.51%" }];
    }
  },

  methods: {
    fetchListData: function fetchListData() {
      this.loading = true;
      // this.$store.dispatch('FETCH_LIST_DATA', {
      //   type: this.type
      // }).then(() => {
      //   this.loading = false
      // })
      // this.loading = false
    },
    loadMoreStories: function loadMoreStories() {
      this.loading = true;
      // this.$store.dispatch('LOAD_MORE_ITEMS').then(() => {
      //   this.loading = false
      // })
    },
    showbbDetail: function showbbDetail(t) {
      console.log('showbbDetail');
      // this.$router.push({ name: 'kline', params: { "symbol": 100 }})
      // this.$router.push({ name: 'kline1', params: { "symbol": 100 }})

      // this.jumpWeb('http://www.fintechawaken.com');
      console.info(t);
      //
      //  this.jumpWeb("https://block.cc/market.html?symbol=gate-io_BTM_ETH");
      // this.jumpWeb("http://192.168.3.193:8080/kline/examples/polling.html&title="+t);
      // let burl=util.setBundleUrl(this.$getConfig().bundleUrl,'page/bb/bbinfo.js');
      //  console.info(burl);

      this.jumpUrl('page/bb/binfo.js?title=' + t);

      console.info("jump line");
    },
    openWebSocket: function openWebSocket() {
      websocket.WebSocket('ws://echo.websocket.org', '');
      var self = this;
      self.onopeninfo = 'connecting...';
      websocket.onopen = function (e) {
        self.onopeninfo = 'websocket open';
      };
      websocket.onmessage = function (e) {
        self.onmessage = e.data;
      };
      websocket.onerror = function (e) {
        self.onerrorinfo = e.data;
      };
      websocket.onclose = function (e) {
        self.onopeninfo = '';
        self.onerrorinfo = e.code;
      };
    },

    close: function close(e) {
      websocket.close();
    },
    loadingDown: function loadingDown() {},
    onloading: function onloading() {}
  },

  created: function created() {
    this.fetchListData();
    // this.openWebSocket();
  }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(11) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = {
  "main-list": {
    "position": "fixed",
    "top": 168,
    "bottom": 90,
    "left": 0,
    "right": 0
  },
  "ml-ipx": {
    "top": 208,
    "bottom": 140
  },
  "story-cell": {
    "marginBottom": 3,
    "borderBottomWidth": 2,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "backgroundColor": "#FFFFFF",
    "backgroundColor:active": "#e5640d"
  },
  "loading": {
    "width": 750,
    "height": 120,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "loading-text": {
    "textAlign": "center",
    "fontSize": 40,
    "color": "#BBBBBB"
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(11);
var wksExt = __webpack_require__(26);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(61);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(60);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    class: ['main-list', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : ''],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('list', {
    staticClass: ["story-list"],
    attrs: {
      "loadmoreoffset": "50"
    },
    on: {
      "loadmore": _vm.loadMoreStories
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _vm._l((_vm.stories), function(story) {
    return _c('cell', {
      key: story.id,
      staticClass: ["story-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.showbbDetail(story.title)
        }
      }
    }, [_c('bbItem', {
      attrs: {
        "story": story
      }
    })], 1)
  }), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loading
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator"]
  }, [_vm._v("loading...")])])], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(11);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(35);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(52);
var setToStringTag = __webpack_require__(18);
var getPrototypeOf = __webpack_require__(55);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(54);
var enumBugKeys = __webpack_require__(22);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(42).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(51)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(22).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(142)
)

/* script */
__vue_exports__ = __webpack_require__(135)

/* template */
var __vue_template__ = __webpack_require__(157)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\bbItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0452d1aa"
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(41);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23)('wks');
var uid = __webpack_require__(13);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(71);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 46:
/***/ (function(module, exports) {



/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(56)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(31)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(246)
)

/* script */
__vue_exports__ = __webpack_require__(228)

/* template */
var __vue_template__ = __webpack_require__(297)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\bbtop.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03db9e8d"
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


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(75)
  , qs = __webpack_require__(74)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)))

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(57);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(32);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(18);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(16);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(1);
var toObject = __webpack_require__(40);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var defined = __webpack_require__(19);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(50);
var step = __webpack_require__(53);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(31)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(17);
var createDesc = __webpack_require__(12);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(24);
var has = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(46);
__webpack_require__(69);
__webpack_require__(70);
module.exports = __webpack_require__(7).Symbol;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
module.exports = __webpack_require__(26).f('iterator');


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(28);
var pIE = __webpack_require__(17);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(13)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(1);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(36).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(1);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(35);
var META = __webpack_require__(66).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(23);
var setToStringTag = __webpack_require__(18);
var uid = __webpack_require__(13);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(26);
var wksDefine = __webpack_require__(25);
var enumKeys = __webpack_require__(64);
var isArray = __webpack_require__(65);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(24);
var createDesc = __webpack_require__(12);
var _create = __webpack_require__(32);
var gOPNExt = __webpack_require__(67);
var $GOPD = __webpack_require__(59);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(16);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(36).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f = $propertyIsEnumerable;
  __webpack_require__(28).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(11)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof3 = __webpack_require__(29);

var _typeof4 = _interopRequireDefault(_typeof3);

var _urlParse = __webpack_require__(49);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator');


var Utils = {
    UrlParser: _urlParse2.default,

    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        // domModule.addRule('fontFace', {
        //     'fontFamily': "iconfont",
        //     'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        // });
    },
    getNameSpance: function getNameSpance(url) {
        var modal = weex.requireModule('modal');
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
            // modal.toast({ message: path + '//--', duration: 1 })
            // console.log(nativeBase);
        }

        // in Native
        // let base = nativeBase + (!!path ? path + '/' : '');
        // return base
        //for test
        return nativeBase;
    },
    setBundleUrl: function setBundleUrl(url, jsFile, isweb) {
        var modal = weex.requireModule('modal');
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            //路由
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/index') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
            // modal.toast({ message: path + '//--', duration: 1 })
            // console.log(nativeBase);
        }
        var h5Base = 'index.html?page=';
        // in Native
        var base = nativeBase;
        if (isweb) {
            if (path === 'web' || path === 'dist') {
                base = nativeBase + h5Base + '/dist/';
            } else {
                base = nativeBase + h5Base + '';
            }
            // console.log(base);
        } else if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        modal.toast({ message: newUrl + '--', duration: 1 });
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    },
    jump: function jump(to) {
        if (this.$router) {
            this.$router.push(to);
        }
    },
    jumpWeb: function jumpWeb(bundleUrl, _url) {
        var url = this.setBundleUrl(bundleUrl, '../webview.js?weburl=' + _url);

        console.log("jumpweb>>" + url);
        navigator.push({
            url: url,
            animated: true
        });
    },
    jumpUrl: function jumpUrl(bundleUrl, _url) {
        var url = this.setBundleUrl(bundleUrl, _url);
        console.log("jumpUrl>>" + url);
        navigator.push({
            url: url,
            animated: true
        });
    },
    _typeof: function _typeof(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
    isPlainObject: function isPlainObject(obj) {
        return Utils._typeof(obj) === 'object';
    },
    isString: function isString(obj) {
        return typeof obj === 'string';
    },
    isNonEmptyArray: function isNonEmptyArray() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
    },
    isObject: function isObject(item) {
        return item && (typeof item === 'undefined' ? 'undefined' : (0, _typeof4.default)(item)) === 'object' && !Array.isArray(item);
    },
    isEmptyObject: function isEmptyObject(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    },
    decodeIconFont: function decodeIconFont(text) {
        // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
        var regExp = /&#x[a-z|0-9]{4,5};?/g;
        if (regExp.test(text)) {
            return text.replace(new RegExp(regExp, 'g'), function (iconText) {
                var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
                return String.fromCharCode(replace);
            });
        } else {
            return text;
        }
    },
    mergeDeep: function mergeDeep(target) {
        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sources[_key - 1] = arguments[_key];
        }

        if (!sources.length) return target;
        var source = sources.shift();
        if (Utils.isObject(target) && Utils.isObject(source)) {
            for (var key in source) {
                if (Utils.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (0, _defineProperty3.default)({}, key, {}));
                    }
                    Utils.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, (0, _defineProperty3.default)({}, key, source[key]));
                }
            }
        }
        return Utils.mergeDeep.apply(Utils, [target].concat(sources));
    },
    appendProtocol: function appendProtocol(url) {
        if (/^\/\//.test(url)) {
            var bundleUrl = weex.config.bundleUrl;

            return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
        }
        return url;
    },
    encodeURLParams: function encodeURLParams(url) {
        var parsedUrl = new _urlParse2.default(url, true);
        return parsedUrl.toString();
    },
    goToH5Page: function goToH5Page(jumpUrl) {
        var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var Navigator = weex.requireModule('navigator');
        var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
        var url = Utils.appendProtocol(jumpUrlObj.toString());
        Navigator.push({
            url: Utils.encodeURLParams(url),
            animated: animated.toString()
        }, callback);
    },

    env: {
        isTaobao: function isTaobao() {
            var appName = weex.config.env.appName;

            return (/(tb|taobao|淘宝)/i.test(appName)
            );
        },
        isTrip: function isTrip() {
            var appName = weex.config.env.appName;

            return appName === 'LX';
        },
        isBoat: function isBoat() {
            var appName = weex.config.env.appName;

            return appName === 'Boat' || appName === 'BoatPlayground';
        },
        isWeb: function isWeb() {
            var platform = weex.config.env.platform;

            return (typeof window === 'undefined' ? 'undefined' : (0, _typeof4.default)(window)) === 'object' && platform.toLowerCase() === 'web';
        },
        isIOS: function isIOS() {
            var platform = weex.config.env.platform;

            return platform.toLowerCase() === 'ios';
        },

        /**
         * 是否为 iPhone X
         * @returns {boolean}
         */
        isIPhoneX: function isIPhoneX() {
            var deviceHeight = weex.config.env.deviceHeight;

            if (Utils.env.isWeb()) {
                return (typeof window === 'undefined' ? 'undefined' : (0, _typeof4.default)(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
            }
            return Utils.env.isIOS() && deviceHeight === 2436;
        },
        isAndroid: function isAndroid() {
            var platform = weex.config.env.platform;

            return platform.toLowerCase() === 'android';
        },
        isAlipay: function isAlipay() {
            var appName = weex.config.env.appName;

            return appName === 'AP';
        },
        isTmall: function isTmall() {
            var appName = weex.config.env.appName;

            return (/(tm|tmall|天猫)/i.test(appName)
            );
        },
        isAliWeex: function isAliWeex() {
            return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
        },
        supportsEB: function supportsEB() {
            var weexVersion = weex.config.env.weexVersion || '0';
            var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
            var expressionBinding = weex.requireModule('expressionBinding');
            return expressionBinding && expressionBinding.enableBinding && isHighWeex;
        },


        /**
         * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
         * @returns {boolean}
         */
        supportsEBForAndroid: function supportsEBForAndroid() {
            return Utils.env.isAndroid() && Utils.env.supportsEB();
        },


        /**
         * 判断IOS容器是否支持是否支持expressionBinding
         * @returns {boolean}
         */
        supportsEBForIos: function supportsEBForIos() {
            return Utils.env.isIOS() && Utils.env.supportsEB();
        },


        /**
         * 获取weex屏幕真实的设置高度，需要减去导航栏高度
         * @returns {Number}
         */
        getPageHeight: function getPageHeight() {
            var env = weex.config.env;

            var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
            return env.deviceHeight / env.deviceWidth * 750 - navHeight;
        }
    },

    /**
     * 版本号比较
     * @memberOf Utils
     * @param currVer {string}
     * @param promoteVer {string}
     * @returns {boolean}
     * @example
     *
     * const { Utils } = require('@ali/wx-bridge');
     * const { compareVersion } = Utils;
     * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
     */
    compareVersion: function compareVersion() {
        var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
        var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

        if (currVer === promoteVer) return true;
        var currVerArr = currVer.split('.');
        var promoteVerArr = promoteVer.split('.');
        var len = Math.max(currVerArr.length, promoteVerArr.length);
        for (var i = 0; i < len; i++) {
            var proVal = ~~promoteVerArr[i];
            var curVal = ~~currVerArr[i];
            if (proVal < curVal) {
                return true;
            } else if (proVal > curVal) {
                return false;
            }
        }
        return false;
    },

    /**
     * 分割数组
     * @param arr 被分割数组
     * @param size 分割数组的长度
     * @returns {Array}
     */
    arrayChunk: function arrayChunk() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

        var groups = [];
        if (arr && arr.length > 0) {
            groups = arr.map(function (e, i) {
                return i % size === 0 ? arr.slice(i, i + size) : null;
            }).filter(function (e) {
                return e;
            });
        }
        return groups;
    },
    truncateString: function truncateString(str, len) {
        var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var newLength = 0;
        var newStr = '';
        var singleChar = '';
        var chineseRegex = /[^\x00-\xff]/g;
        var strLength = str.replace(chineseRegex, '**').length;
        for (var i = 0; i < strLength; i++) {
            singleChar = str.charAt(i).toString();
            if (singleChar.match(chineseRegex) !== null) {
                newLength += 2;
            } else {
                newLength++;
            }
            if (newLength > len) {
                break;
            }
            newStr += singleChar;
        }

        if (hasDot && strLength > len) {
            newStr += '...';
        }
        return newStr;
    },

    //获取cookie、
    getCookie: function getCookie(name) {
        var arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return arr[2];else return null;
    },

    //设置cookie,增加到vue实例方便全局调用
    setCookie: function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },

    //删除cookie
    delCookie: function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },

    formatDate: function formatDate(time) {
        var date = new Date(time);
        return this.formatDatePattern(date, "yyyy-MM-dd hh:mm:ss");
    },

    formatDatePattern: function formatDatePattern(date, fmt) {
        if (!date) {
            return;
        }

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        var o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                var str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : this.padLeftZero(str));
            }
        }
        return fmt;
    },
    padLeftZero: function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
};

exports.default = Utils;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(102);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(28);
var pIE = __webpack_require__(17);
var toObject = __webpack_require__(40);
var IObject = __webpack_require__(39);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(88) });


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  normal: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  highlight: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EE9900',
    borderWidth: '1px'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  taobao: {
    color: '#FFFFFF'
  },
  fliggy: {
    color: '#3D3D3D'
  },
  normal: {
    color: '#3D3D3D'
  },
  highlight: {
    color: '#EE9900'
  }
};

/***/ })

/******/ });