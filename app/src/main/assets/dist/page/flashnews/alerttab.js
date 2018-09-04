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
/******/ 	return __webpack_require__(__webpack_require__.s = 421);
/******/ })
/************************************************************************/
/******/ ({

/***/ 130:
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

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
var deviceHeight = weex.config.env.deviceHeight;

exports.default = {
    props: ['category', 'memberId', 'source'],

    data: function data() {
        return {
            // jLPosition:"left:30px;width:82px;",
            // navIndex:0,
            // sortBy: '', // 筛选的条件
            // Activity:[],
            // Delivery:[],
            // delivery_mode: null, // 选中的配送方式
            // support_ids: [], // 选中的商铺活动列表
            // filterNum: 0, // 所选中的所有样式的集合
            title: "资讯",
            wipx: { top: '495px' }
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 447 + fringeHeight + 'px' };
        this.selectFocusDetail();
        if (self.category == 'default') {
            self.title = "快讯";
        } else if (self.category == 'default_en') {
            self.title = "全球媒体";
        } else if (self.category == 'ex_notice') {
            self.title = "交易所公告";
        } else if (self.category == 'ex_twitter') {
            self.title = "交易所推特";
        } else if (self.category == 'bv') {
            self.title = "大V声音";
        } else if (self.category == 'newcoin') {
            self.title = "新币时讯";
        } else if (self.category == 'research_report') {
            self.title = "监管政策";
        }
    },
    mounted: function mounted() {
        this.initJLine();
        // this.Activity=[{id:"111",name:'看门'},{id:"112",name:'看门'}];
        // this.Activity.forEach((item, index) => {
        // 	this.support_ids[index] = {status: false, id: item.id};
        // });
        // this.Delivery=[{id:'2341',text:'看见1'},{id:'2342',text:'看见2'},{id:'2343',text:'看见3'}];
        //modal.toast({message:self.msg,duration:1});
    },


    methods: {
        initJLine: function initJLine() {
            // if(!this.$refs.actJC) return;
            // let l = this.$refs.actJC.$el.offsetLeft;
            // let w = this.$refs.actJC.$el.offsetWidth;
            // this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
        },

        chooseChannel: function chooseChannel(idx, event) {
            var self = this;
            this.navIndex = idx;
            //modal.toast({ message: idx+'--',  duration: 1 });

            if (idx == 0) {
                this.selectFocusDetail();
            } else if (idx == 1) {
                this.$router.push({
                    path: '/synopsis',
                    query: {
                        MemberId: self.memberId
                    }
                });
            }
            var el = this.$refs['t' + idx];
            var result = dom.getComponentRect(el, function (option) {
                if (option.size.left > 420) {
                    dom.scrollToElement(el, { offset: -option.size.left / 2 });
                }
            });
        },

        selectFocusDetail: function selectFocusDetail() {
            var self = this;
            if (self.category == 'default' || self.category == 'default_en' || self.category == 'research_report') {
                this.$router.push({
                    path: '/focusDetail',
                    query: {
                        Category: self.category,
                        MemberId: self.memberId
                    }
                });
                // let params = this.getParamsByJson({
                //     Category:self.category,
                //     MemberId:self.memberId,
                //     //Source : source
                // });
                // this.jumpUrl("/focusDetail",params);
            } else if (self.category == 'ex_notice' || self.category == 'newcoin') {
                this.$router.push({
                    path: '/focusDetail1',
                    query: {
                        Category: self.category,
                        MemberId: self.memberId
                    }
                });
                // let params = this.getParamsByJson({
                //     Category:self.category,
                //     MemberId:self.memberId,
                //     //Source : source
                // });
                // this.jumpUrl("/focusDetail1",params);
            } else if (self.category == 'ex_twitter') {
                this.$router.push({
                    path: '/focusDetail2',
                    query: {
                        Category: self.category,
                        MemberId: self.memberId
                    }
                });
                // let params = this.getParamsByJson({
                //     Category:self.category,
                //     MemberId:self.memberId,
                //     //Source : source
                // });
                // this.jumpUrl("/focusDetail2",params);
            } else if (self.category == 'bv') {
                this.$router.push({
                    path: '/focusDetail3',
                    query: {
                        Category: self.category,
                        MemberId: self.memberId
                    }
                });
                // let params = this.getParamsByJson({
                //     Category:self.category,
                //     MemberId:self.memberId,
                //     //Source : source
                // });
                // this.jumpUrl("/focusDetail3",params);
            }
        }

    }
};

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 447,
    "left": 0,
    "right": 0,
    "height": 74,
    "zIndex": 10,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": 1,
    "borderBottomColor": "#d9d9d9"
  },
  "tab-i": {
    "width": 165,
    "flexFlow": "column",
    "alignItems": "center"
  },
  "tab-ia": {
    "width": 90,
    "flexFlow": "column",
    "alignItems": "center"
  },
  "scroller": {
    "height": 74,
    "flexDirection": "row"
  },
  "i-c": {
    "paddingTop": 20,
    "paddingBottom": 21,
    "paddingLeft": 20,
    "paddingRight": 20,
    "fontSize": 25,
    "color": "#999999"
  },
  "c-act": {
    "color": "#000000"
  },
  "j-uline": {
    "alignItems": "center",
    "width": 125,
    "height": 2,
    "backgroundColor": "#000000"
  },
  "j-ulinea": {
    "alignItems": "center",
    "width": 50,
    "height": 2,
    "backgroundColor": "#000000"
  }
}

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
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
    ref: "t0",
    class: ['i-c', _vm.navIndex == 0 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(0)
      }
    }
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.navIndex == 0) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-ia"]
  }, [_c('text', {
    ref: "t1",
    class: ['i-c', _vm.navIndex == 1 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(1)
      }
    }
  }, [_vm._v("简介")]), (_vm.navIndex == 1) ? _c('div', {
    staticClass: ["j-ulinea"]
  }) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(151)
)

/* script */
__vue_exports__ = __webpack_require__(130)

/* template */
var __vue_template__ = __webpack_require__(166)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\alerttab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-55f7b267"
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