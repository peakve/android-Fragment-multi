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
/******/ 	return __webpack_require__(__webpack_require__.s = 435);
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

/***/ 134:
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

/***/ 148:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 114,
    "left": 0,
    "right": 0,
    "height": 74,
    "zIndex": 10,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": 1,
    "borderBottomColor": "#d9d9d9"
  },
  "scroller": {
    "height": 74,
    "paddingRight": 50,
    "flexDirection": "row"
  },
  "tab-i": {
    "flexFlow": "column",
    "alignItems": "center",
    "width": 165
  },
  "tab-ia": {
    "flexFlow": "column",
    "alignItems": "center",
    "width": 90
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
  },
  "more": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": 52,
    "width": 50,
    "backgroundColor": "#fafafa",
    "textAlign": "center",
    "paddingTop": 10,
    "opacity": 0.6,
    "boxShadow": "-6px -4px 4px #fafafa"
  }
}

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

/***/ 163:
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
    staticClass: ["tab-ia"]
  }, [_c('text', {
    ref: "t0",
    class: ['i-c', _vm.navIndex == 0 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(0)
      }
    }
  }, [_vm._v("关注")]), (_vm.navIndex == 0) ? _c('div', {
    staticClass: ["j-ulinea"]
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
  }, [_vm._v("热点")]), (_vm.navIndex == 1) ? _c('div', {
    staticClass: ["j-ulinea"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-ia"]
  }, [_c('text', {
    ref: "t2",
    class: ['i-c', _vm.navIndex == 2 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(2)
      }
    }
  }, [_vm._v("资讯")]), (_vm.navIndex == 2) ? _c('div', {
    staticClass: ["j-ulinea"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t3",
    class: ['i-c', _vm.navIndex == 3 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(3)
      }
    }
  }, [_vm._v("全球媒体")]), (_vm.navIndex == 3) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t4",
    class: ['i-c', _vm.navIndex == 4 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(4)
      }
    }
  }, [_vm._v("交易所公告")]), (_vm.navIndex == 4) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t5",
    class: ['i-c', _vm.navIndex == 5 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(5)
      }
    }
  }, [_vm._v("交易所推特")]), (_vm.navIndex == 5) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t6",
    class: ['i-c', _vm.navIndex == 6 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(6)
      }
    }
  }, [_vm._v("大V声音")]), (_vm.navIndex == 6) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t7",
    class: ['i-c', _vm.navIndex == 7 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(7)
      }
    }
  }, [_vm._v("新币时讯")]), (_vm.navIndex == 7) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t8",
    class: ['i-c', _vm.navIndex == 8 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(8)
      }
    }
  }, [_vm._v("监管政策")]), (_vm.navIndex == 8) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newsHeader = __webpack_require__(364);

var _newsHeader2 = _interopRequireDefault(_newsHeader);

var _topTab = __webpack_require__(365);

var _topTab2 = _interopRequireDefault(_topTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import topTab from '../home/topChannel.vue';
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');

exports.default = {
    components: {
        'home-header': _newsHeader2.default,
        'top-tab': _topTab2.default
    },

    data: function data() {
        return {
            data: 'default'
        };
    },
    created: function created() {
        var self = this;
        self.data = 'default';
    },


    methods: {
        showMsgFromChild: function showMsgFromChild(data) {
            //modal.toast({message : data,duration : 2});
            var self = this;
            self.data = data;
        }

    }

};

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header', {
    attrs: {
      "message": _vm.data
    }
  }), _c('top-tab', {
    on: {
      "listenToChildEvent": _vm.showMsgFromChild
    }
  }), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 364:
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


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(148)
)

/* script */
__vue_exports__ = __webpack_require__(134)

/* template */
var __vue_template__ = __webpack_require__(163)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\topTab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3edec5ae"
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(211)

/* template */
var __vue_template__ = __webpack_require__(325)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\flash-news.vue"
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