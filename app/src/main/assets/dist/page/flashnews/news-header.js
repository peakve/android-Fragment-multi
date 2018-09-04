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
/******/ 	return __webpack_require__(__webpack_require__.s = 452);
/******/ })
/************************************************************************/
/******/ ({

/***/ 133:
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

var modal = weex.requireModule('modal');
var deviceHeight = weex.config.env.deviceHeight;

exports.default = {
    props: ['message'],
    data: function data() {
        return {
            wipx: {}
        };
    },


    watch: {
        message: function message(curVal, oldVal) {
            //modal.toast({message:'父组件传子组件'+curVal,duration:2});
        }
    },

    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
        //modal.toast({message:'刘海高度'+fringeHeight,duration:2});
    },


    methods: {
        searchImageClick: function searchImageClick() {
            var self = this;
            if (self.message == '' || self.message == null || self.message == 'default' || self.message == 'default_en' || self.message == 'research_report') {
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                var params = this.getParamsByJson({
                    Message: self.message
                });

                this.jumpUrl("/candy", params);
            } else if (self.message == 'ex_notice') {
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                var _params = this.getParamsByJson({
                    Message: self.message
                });

                this.jumpUrl("/serexchangeNotice", _params);
            } else if (self.message == 'ex_twitter') {
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                var _params2 = this.getParamsByJson({
                    Message: self.message
                });

                this.jumpUrl("/serexchangeTwitter", _params2);
            } else if (self.message == 'bv') {
                //modal.toast({message:'搜索按钮被点击了',duration:2});sernewcoin
                var _params3 = this.getParamsByJson({
                    Message: self.message
                });

                this.jumpUrl("/servoice", _params3);
            } else if (self.message == 'newcoin') {
                //modal.toast({message:'搜索按钮被点击了',duration:2});sernewcoin
                var _params4 = this.getParamsByJson({
                    Message: self.message
                });

                this.jumpUrl("/sernewcoin", _params4);
            } else if (self.message == 'article') {
                modal.toast({ message: '热点不支持搜索', duration: 2 });
            } else if (self.message == 'favorite') {
                modal.toast({ message: '关注不支持搜索', duration: 2 });
            }

            // let params = this.getParamsByJson({
            //     Message : self.message
            // });

            // this.jumpUrl("/candy" ,params);
        }
    }

};

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": 114,
    "zIndex": 10
  },
  "container": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 55,
    "backgroundColor": "#ffe45f",
    "width": 750,
    "height": 114
  },
  "null_div": {
    "width": 80,
    "height": 114,
    "marginLeft": 30
  },
  "flash_text": {
    "fontSize": "18wx",
    "color": "#655b22",
    "textAlign": "center"
  },
  "div_search_image": {
    "width": 80,
    "height": 114,
    "marginRight": 30
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30
  }
}

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["null_div"]
  }), _c('text', {
    staticClass: ["flash_text"]
  }, [_vm._v("快讯")]), _c('div', {
    staticClass: ["div_search_image"],
    on: {
      "click": _vm.searchImageClick
    }
  }, [_c('image', {
    staticClass: ["search_img"],
    attrs: {
      "src": _vm.get_img_path('search.png')
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(154)
)

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(169)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\news-header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ed47aaee"
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