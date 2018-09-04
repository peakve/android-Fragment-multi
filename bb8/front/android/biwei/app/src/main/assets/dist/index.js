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
/******/ 	return __webpack_require__(__webpack_require__.s = 397);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(1);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(13);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(22).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiURL = undefined;

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*var stream = weex.requireModule('stream');
var modal = weex.requireModole('modal');*/

var apiURL = {

    //测试本机地址
    //baseurl: 'http://192.168.3.118:8888/web/',
    //开发地址
    baseurl: 'https://www.51bb8.com/web/',

    //路径地址
    basepath: 'http://192.168.3.178:8080/dist/',

    //开发地区获取地址(包括测试)
    basishost: 'http://192.168.1.235:8085',

    //生产地区获取地址
    //basishost: 'http://www.awakenpay.com/',

    //开发图片上传下载地址(包括测试)
    basisimg: 'http://192.168.1.235:8000',

    //生产图片上传下载地址
    //basisimg: 'http://www.awakenpay.com/',
    webSocketUrl: ''
};

exports.apiURL = apiURL;


function getHostPort() {
    // var hostname = typeof CURRENT_IP === 'string' ? CURRENT_IP : location.hostname
    // if (location) {
    //     var protocol = location.protocol + '//'
    //     var port = location.port ? ':' + location.port : ''
    //         //TODO
    //     port = ':8888'
    //     var url = protocol + hostname + port
    // } else {
    //     var url = 'http://' + hostname + ':8888'
    //     return url
    // }

    //生产地址
    // return 'www.awakenpay.com'

    //测试本机地址
    return '192.168.3.158:8888';
}
exports.getParameterByName = function (name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

function getBaseUrl(bundleUrl, isnav, images) {

    var rootpath = images;
    if (!rootpath) {
        rootpath = "dist";
        // rootpath = "merchant/dist"
    }
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = getHostPort();
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        console.log(matches);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        console.log("host:" + host);
        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && isnav) {
            nativeBase = 'http://' + host + '/index.html?page=./dist/';
        } else {
            nativeBase = 'http://' + host + '/' + rootpath + '/';
        }
    }

    return nativeBase;
}

exports.getBaseUrl = function (bundleUrl, isnav, images) {
    return getBaseUrl(bundleUrl, isnav, images);
};
exports.getImagesBaseUrl = function (config) {
    var bundleUrl = config.bundleUrl;
    var base = getBaseUrl(bundleUrl, false, 'images');
    return base;
};
exports.getBaseImg = function () {
    var baseImgUrl = apiURL.basisimg;
    return baseImgUrl;
};

function getHostPort() {
    // var hostname = typeof CURRENT_IP === 'string' ? CURRENT_IP : location.hostname
    // if (location) {
    //     var protocol = location.protocol + '//'
    //     var port = location.port ? ':' + location.port : ''
    //         //TODO
    //     port = ':8888'
    //     var url = protocol + hostname + port
    // } else {
    //     var url = 'http://' + hostname + ':8888'
    //     return url
    // }

    //生产地址
    // return 'www.awakenpay.com'

    //测试本机地址
    return '192.168.3.158:8888';
}
exports.getParameterByName = function (name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

function getBaseUrl(bundleUrl, isnav, images) {

    var rootpath = images;
    if (!rootpath) {
        rootpath = "dist";
        // rootpath = "merchant/dist"
    }
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = getHostPort();
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        console.log(matches);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        console.log("host:" + host);
        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && isnav) {
            nativeBase = 'http://' + host + '/index.html?page=./dist/';
        } else {
            nativeBase = 'http://' + host + '/' + rootpath + '/';
        }
    }

    return nativeBase;
}

exports.getBaseUrl = function (bundleUrl, isnav, images) {
    return getBaseUrl(bundleUrl, isnav, images);
};

function toParams(obj) {
    var param = "";
    for (var name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name]);
        }
    }
    return param.substring(1);
}

function getData(url, callback) {
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    stream.fetch({
        method: 'GET',
        url: url,
        type: 'json'
    }, function (ret) {
        if (!ret.ok) {
            modal.toast({ message: '网络有问题，连不上', duration: 1 });
            console.log("request failed");
        } else {
            callback(ret.data);
        }
    });
}

function postData(url, data, callback) {
    //comm.onLoadingStart();
    var stream = weex.requireModule('stream');
    var modal = weex.requireModule('modal');
    stream.fetch({
        method: 'POST',
        url: url,
        type: 'json',
        body: data,
        headers: { 'Content-Type': 'application/json' }
    }, function (ret) {
        if (!ret.ok) {
            modal.toast({ message: '网络有问题，连不上', duration: 1 });
            //modal.toast({ message: ret.status + ret.statusText, duration: 1 });
            console.log("request failed");
        } else {
            callback(ret.data);
        }
    });
}

//新闻资讯列表
exports.requireNewsList = function (data, callback) {
    postData(apiURL.baseurl + 'api/news/list', data, callback);
};

//热门新闻
exports.requireHotNewsList = function (data, callback) {
    postData(apiURL.baseurl + 'api/news/hotnews', data, callback);
};

//聚合页面列表
exports.requireAlertFocusList = function (data, callback) {
    postData(apiURL.baseurl + 'api/member/list', data, callback);
};

//聚合页面简介
exports.requireAlertFocusDesc = function (data, callback) {
    postData(apiURL.baseurl + 'api/member/info', data, callback);
};

//新闻搜索
exports.requireSearchNews = function (data, callback) {
    postData(apiURL.baseurl + 'api/news/q', data, callback);
};

//关注
exports.requireFollow = function (data, callback) {
    postData(apiURL.baseurl + 'api/subscribe/subscribeMember', data, callback);
};

//关注列表
exports.requireFollowList = function (data, callback) {
    postData(apiURL.baseurl + 'api/subscribe/subscribeMemberList', data, callback);
};

//登录
exports.requireLogin = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/login', data, callback);
};
//退出
exports.requireLogout = function (callback) {
    getData(apiURL.baseurl + 'api/user/logout', callback);
};
//发送验证码
exports.requireSignUpValidate = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/signUpValidate', data, callback);
};
//注册
exports.requireSignUp = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/signUp', data, callback);
};
//个人中心
exports.requireUserInfo = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/info', data, callback);
};
//发送修改密码验证码
exports.requireSendModifyPwdCode = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/sendModifyPwdCode', data, callback);
};
//个人中心
exports.requireModifyPwd = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/modifyPwd', data, callback);
};

//文章内容界面
exports.requireArticalContent = function (data, callback) {
    postData(apiURL.baseurl + 'api/news/viewNews', data, callback);
};
//文章内容界面
exports.requireCandyContent = function (data, callback) {
    postData(apiURL.baseurl + 'api/activity/view', data, callback);
};
//翻译
exports.requireTranslate = function (data, callback) {
    postData(apiURL.baseurl + 'api/news/translate', data, callback);
};
//修改用户名
exports.requireModifyInfo = function (data, callback) {
    postData(apiURL.baseurl + 'api/user/modifyInfo', data, callback);
};

//糖果 空投 注册邀请
exports.requireActivityList = function (data, callback) {
    postData(apiURL.baseurl + 'api/activity/list', data, callback);
};

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(80);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports) {



/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(46);
__webpack_require__(69);
__webpack_require__(70);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
module.exports = __webpack_require__(26).f('iterator');


/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 74 */
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
/* 75 */
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
/* 76 */
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
/* 77 */
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

var Utils = {
  UrlParser: _urlParse2.default,
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
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
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

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return { left: '750px', top: '0px', height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px' };
      } else if (animationType === 'model') {
        return { top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px', left: '0px', height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px' };
      }
      return {};
    }
  }
}; /**
    * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
    * Created by Tw93 on 17/11/01
    */

exports.default = Utils;

/***/ }),
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Tw93 on 2016/10/29.
 */

var GIF = exports.GIF = 'https://img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif';
var BLACK_GIF = exports.BLACK_GIF = 'https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif';
var PART = exports.PART = 'https://gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif';

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(82)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(83)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-loading\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e5fb31d0"
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(79);

var _utils = __webpack_require__(77);

var _utils2 = _interopRequireDefault(_utils);

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
//
//
//
//
//
//
//
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
  props: {
    show: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    interval: {
      type: [Number, String],
      default: 0
    },
    needMask: {
      type: Boolean,
      default: false
    },
    maskStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showLoading: false,
      tid: 0
    };
  },
  watch: {
    show: function show() {
      this.setShow();
    }
  },
  computed: {
    loading: function loading() {
      var loading = {};
      switch (this.type) {
        case 'trip':
          loading = {
            url: _type.GIF,
            class: 'trip-loading'
          };
          break;
        default:
          loading = {
            url: _type.BLACK_GIF,
            class: 'default-loading'
          };
      }
      return loading;
    },
    topPosition: function topPosition() {
      return (_utils2.default.env.getPageHeight() - 200) / 2;
    }
  },
  created: function created() {
    this.setShow();
  },

  methods: {
    maskClicked: function maskClicked() {
      this.needMask && this.$emit('wxcLoadingMaskClicked', {});
    },
    setShow: function setShow() {
      var _this = this;

      var interval = this.interval,
          show = this.show,
          showLoading = this.showLoading;

      var stInterval = parseInt(interval);
      clearTimeout(this.tid);
      if (show) {
        if (showLoading) {
          return;
        }
        if (stInterval === 0) {
          this.showLoading = true;
        } else {
          this.tid = setTimeout(function () {
            _this.showLoading = true;
          }, stInterval);
        }
      } else {
        this.showLoading = false;
      }
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
  "loading-need-mask": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "wxc-loading": {
    "position": "fixed",
    "left": 287,
    "top": 500,
    "zIndex": 9999
  },
  "loading-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": 20,
    "width": 175,
    "height": 175,
    "backgroundColor": "rgba(0,0,0,0.8)"
  },
  "trip-loading": {
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "loading-trip-image": {
    "height": 75,
    "width": 75
  },
  "loading-text": {
    "color": "#ffffff",
    "fontSize": 24,
    "lineHeight": 30,
    "height": 30,
    "marginTop": 8,
    "textOverflow": "ellipsis",
    "width": 140,
    "textAlign": "center"
  }
}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.showLoading && _vm.needMask && 'loading-need-mask'],
    style: _vm.maskStyle,
    on: {
      "click": _vm.maskClicked
    }
  }, [(_vm.showLoading) ? _c('div', {
    staticClass: ["wxc-loading"],
    style: {
      top: _vm.topPosition + 'px'
    }
  }, [_c('div', {
    class: ['loading-box', _vm.loading.class],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('image', {
    staticClass: ["loading-trip-image"],
    attrs: {
      "src": _vm.loading.url,
      "resize": "contain",
      "quality": "original"
    }
  }), (_vm.loadingText) ? _c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 84 */
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
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(88) });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(110);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)

/* script */
__vue_exports__ = __webpack_require__(93)

/* template */
var __vue_template__ = __webpack_require__(98)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\login\\loginHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-41cdd1be"
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(95)
)

/* script */
__vue_exports__ = __webpack_require__(94)

/* template */
var __vue_template__ = __webpack_require__(97)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\pcenterHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b368c94"
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcIcon = __webpack_require__(100);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

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
//
//
//
//
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
var event = weex.requireModule('event');
exports.default = {
    components: { WxcIcon: _wxcIcon2.default },
    props: ["data"],
    data: function data() {
        return {};
    },
    created: function created() {},

    computed: {
        isIPhoneX: function isIPhoneX() {
            return _util2.default.env.isIPhoneX();
        }
    },
    methods: {
        closeBack: function closeBack() {
            //  modal.toast({ message:this.data.title});
            if (this.data.title == '登录' || this.data.title == '修改用户名' || this.data.title == '修改密码') {
                if (event.dismissViewController("") != undefined) {
                    event.dismissViewController("");
                }
            } else {
                this.jumpBack();
            }
        }
    }
};

/***/ }),
/* 94 */
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


exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "login_header": {
    "marginTop": 70
  },
  "ipx_login_header": {
    "marginTop": 120
  },
  "close_out": {
    "width": 750,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": 50,
    "backgroundColor": "#FFFFFF"
  },
  "login_text": {
    "fontSize": 35
  },
  "close_content": {
    "position": "absolute",
    "left": 40,
    "width": 60,
    "height": 60
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {})
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["close_out"],
    class: [_vm.isIPhoneX ? 'ipx_login_header' : 'login_header']
  }, [_c('image', {
    staticClass: ["close_content"],
    attrs: {
      "resize": "cover",
      "src": _vm.get_img_path('wx_close.png')
    },
    on: {
      "click": function($event) {
        _vm.closeBack()
      }
    }
  }), _c('div', {
    staticClass: ["login_title"]
  }, [_c('text', {
    staticClass: ["login_text", "color1"]
  }, [_vm._v(_vm._s(_vm.data.title))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 99 */
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

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(103);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  less: '\uE6A5',
  'more_unfold': '\uE6A6',
  back: '\uE697',
  more: '\uE6A7',
  add: '\uE6B9',
  subtract: '\uE6FE',
  close: '\uE69A',
  cry: '\uE69C',
  delete: '\uE69D',
  help: '\uE6A3',
  refresh: '\uE6AA',
  search: '\uE6AC',
  success: '\uE6B1',
  warning: '\uE6B6',
  wrong: '\uE6B7',
  clock: '\uE6BB',
  scanning: '\uE6EC',
  filter: '\uE6F1',
  map: '\uE715',
  play: '\uE719'
};

/***/ }),
/* 102 */
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(107)
)

/* script */
__vue_exports__ = __webpack_require__(105)

/* template */
var __vue_template__ = __webpack_require__(109)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-icon\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57175e39"
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
/* 104 */
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _type = __webpack_require__(101);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
//
//
//
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
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('//at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';
      }
      return (0, _extends3.default)({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  },
  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name
      });
    }
  }
};

/***/ }),
/* 106 */
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
/* 107 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),
/* 108 */
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
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(112)
)

/* script */
__vue_exports__ = __webpack_require__(111)

/* template */
var __vue_template__ = __webpack_require__(113)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-afe7483c"
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(77);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
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

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "height": 100,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": 24,
    "paddingRight": 24,
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": 24
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": 30,
    "paddingTop": 30
  },
  "has-desc": {
    "paddingBottom": 18,
    "paddingTop": 18
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": 1
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": 1
  },
  "cell-label-text": {
    "fontSize": 30,
    "color": "#666666",
    "width": 188,
    "marginRight": 10
  },
  "cell-arrow-icon": {
    "width": 22,
    "height": 22
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": 30,
    "lineHeight": 40
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": 24,
    "lineHeight": 30,
    "marginTop": 4
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(41);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(27);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(114);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(41);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(38);
var invoke = __webpack_require__(178);
var html = __webpack_require__(42);
var cel = __webpack_require__(30);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(27)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 120 */
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
/* 121 */
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
/* 122 */
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(174);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.isstartwith = function (str, prefix) {
    var index = str.indexOf(prefix);
    console.log('startIndex:' + index);
    return index == 0; //index为0则表明str以prefix开头;若不包含prefix则index为-1
};
exports.isendwith = function (str, suffix) {
    var index = str.indexOf(suffix);
    console.log('endIndex:' + index);
    return index == str.length - suffix.length;
};

exports.showFormat = function (millsecords, format) {
    if (!format) {
        format = "yyyy-MM-dd HH:mm:ss";
    }
    return new Date(millsecords).pattern(format);
};

/***/ }),
/* 126 */
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
/* 127 */
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

exports.default = {
  props: ['body', 'name', 'mine'],
  computed: {
    messageClassNames: function messageClassNames() {
      var classBase = 'message';
      if (this.mine) {
        classBase += '-mine';
      }
      return [classBase];
    },
    bodyClassNames: function bodyClassNames() {
      var classBase = 'body';
      if (this.mine) {
        classBase += '-mine';
      }
      return [classBase];
    },
    nameWithSuffix: function nameWithSuffix() {
      if (this.mine) {
        return '';
      } else {
        return this.name + ': ';
      }
    }
  }
};

/***/ }),
/* 128 */
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

exports.default = {
    props: ["imageList"],
    data: function data() {
        return {};
    },

    methods: {
        onchange: function onchange(event) {}
    }
};

/***/ }),
/* 129 */
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

var modal = weex.requireModule('modal');
var apis = __webpack_require__(37);
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;

exports.default = {
    props: ['memberId'],
    data: function data() {
        return {
            data: {},
            wipx: {},
            favorite: false,
            name: '',
            type: ''
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
        //modal.toast({message:self.memberId,duration:1});
        apis.requireAlertFocusDesc({ memberId: self.memberId }, function (res) {
            if (res.respond.ok) {
                self.data = res.data;
                self.favorite = res.data.favorite;
                self.name = res.data.name;
                self.type = res.data.type;
                //modal.toast({message:(self.name+self.type),duration:1});
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        gethref: function gethref(url) {
            if (!url) {
                return url;
            } else if (url.indexOf("http") == 0) {
                return url;
            } else {
                return 'http://www.51bb8.com/bfile/dfile' + url;
            }
        },


        backImageClick: function backImageClick(params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        followTextClick: function followTextClick() {
            var self = this;
            if (!self.favorite) {
                apis.requireFollow({
                    "data": [{
                        "id": self.memberId, //id必填
                        "name": self.name,
                        "type": self.type // member的type
                    }],
                    "flag": true // 必填，true关注，false取关
                }, function (res) {
                    if (res.respond.msg == '未登录') {
                        modal.toast({ message: '请先登录再添加关注', duration: 2 });
                        return;
                    }
                    if (res.respond.ok) {
                        self.favorite = !self.favorite;
                        modal.toast({ message: '添加关注成功', duration: 1 });
                    } else {
                        modal.toast({ message: '添加关注失败', duration: 1 });
                    }
                });
            } else {
                apis.requireFollow({
                    "data": [{
                        "id": self.memberId, //id必填
                        "name": self.name,
                        "type": self.type // member的type
                    }],
                    "flag": false // 必填，true关注，false取关
                }, function (res) {
                    if (res.respond.msg == '未登录') {
                        modal.toast({ message: '请先登录', duration: 2 });
                        return;
                    }
                    if (res.respond.ok) {
                        self.favorite = !self.favorite;
                        modal.toast({ message: '取消关注成功', duration: 1 });
                    } else {
                        modal.toast({ message: '取消关注失败', duration: 1 });
                    }
                });
            }
        }

    }
};

/***/ }),
/* 130 */
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true,
            isShowLoading: false
        };
    },
    created: function created() {
        //modal.toast({message:"糖果页面",duration:1});
        var self = this;
        //var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        //self.wipx = {top : (114+fringeHeight)+'px'};
        self.page = 1;
        apis.requireActivityList({
            "page": self.page,
            "size": self.size,
            "category": "", // airdrop:空投，candy：糖果 invitation:注册邀请,不写表示三种都有
            "sort": "publishTime", // 排序字段
            "order": -1 // -1：倒序，1：正序
        }, function (res) {
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.isShow = false;
                self.itemsList = res.list;
                self.isShowLoading = true;
            } else {
                self.isShow = false;
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    computed: {
        isIPhoneX: function isIPhoneX() {
            return _util2.default.env.isIPhoneX();
        }
    },

    methods: {
        goAlertContent: function goAlertContent(articalId, category) {
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/candyDetail", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireActivityList({
                "page": self.page,
                "size": self.size,
                "category": "", // airdrop:空投，candy：糖果 invitation:注册邀请,不写表示三种都有
                "sort": "publishTime", // 排序字段
                "order": -1 // -1：倒序，1：正序
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireActivityList({
                "page": self.page,
                "size": self.size,
                "category": "", // airdrop:空投，candy：糖果 invitation:注册邀请,不写表示三种都有
                "sort": "publishTime", // 排序字段
                "order": -1 // -1：倒序，1：正序
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var navigator = weex.requireModule('navigator');
exports.default = {
    data: function data() {
        return {
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        //在这里iPhoneX刘海高度60px,不需要再计算
        // var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        // self.wipx = {top : fringeHeight+'px'};
        // modal.toast({message:'刘海高度'+fringeHeight,duration:2});
    },


    computed: {
        isIPhoneX: function isIPhoneX() {
            return _util2.default.env.isIPhoneX();
        }
    },

    methods: {
        backImageClick: function backImageClick(params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        }

    }
};

/***/ }),
/* 133 */
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
/* 134 */
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
/* 135 */
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
/* 136 */
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

exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["newGoods", "hotGoods", "head", "hasMore", "goods"],
    data: function data() {
        return {};
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7';
            var url = weex.config.bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        }
    }
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(124);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(123);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            jLPosition: "left:30px;width:82px;",
            navIndex: 1,
            sortBy: '', // 筛选的条件
            Activity: [],
            Delivery: [],
            delivery_mode: null, // 选中的配送方式
            support_ids: [], // 选中的商铺活动列表
            filterNum: 0 // 所选中的所有样式的集合

        };
    },
    mounted: function mounted() {
        var _this = this;

        this.initJLine();
        this.Activity = [{ id: "111", name: '看门' }, { id: "112", name: '看门' }];
        this.Activity.forEach(function (item, index) {
            _this.support_ids[index] = { status: false, id: item.id };
        });
        this.Delivery = [{ id: '2341', text: '看见1' }, { id: '2342', text: '看见2' }, { id: '2343', text: '看见3' }];
    },

    methods: {
        initJLine: function initJLine() {
            if (!this.$refs.actJC) return;
            var l = this.$refs.actJC.$el.offsetLeft;
            var w = this.$refs.actJC.$el.offsetWidth;
            this.jLPosition = ["left:", l + 30, "px;", "width:", w - 60, "px;"].join("");
        },

        chooseChannel: function chooseChannel(idx, event) {
            this.navIndex = idx;
            modal.toast({ message: idx + '--', duration: 1 });
            if (idx == 0) {
                this.$router.push('/flashnews');
            } else if (idx == 1) {
                this.$router.push('/home');
            } else {
                this.$router.push({ name: 'bbtop', params: { "symbol": idx } });
            }

            var el = this.$refs['t' + idx];
            var result = dom.getComponentRect(el, function (option) {
                if (option.size.left > 420) {
                    dom.scrollToElement(el, { offset: -option.size.left / 2 });
                }
            });

            //     const _target = event.target;
            //     const result = dom.getComponentRect(_target, option => {

            //     modal.toast({ message: option,  duration: 1 })
            //         // console.log('getComponentRect:', option)
            //         // this.size = option.size


            //          //  modal.toast({ message: _target,  duration: 1 })
            //     // modal.toast({ message: _target.offsetLeft+"---",  duration: 1 })
            //     // console.log(_target);
            // //    if(_target.dataset.act !== "j-c") return;
            //     let l = _target.offsetLeft || option.size.left;
            //     let w =  _target.offsetWidth || option.size.width;
            //     //  console.log(l+'-'+w);
            //     // modal.toast({ message: 'top'+l,  duration: 1 })

            //     if(w<=0) return;

            // //      let ll = this.$refs.actJC.$el.offsetLeft;
            // //    let lw = this.$refs.actJC.$el.offsetWidth;
            // //    console.log(ll+'-'+lw);

            //     this.jLPosition = {"left:":(l+30)+"px;","width:":(w-60)+"px;"};

            //     // animation.transition(this.$refs.jcLine, {
            //     //     styles: {
            //     //        left : l+30+"px",
            //     //         width : w-60+"px"
            //     //     },
            //     //     duration: 300, //ms
            //     //     timingFunction: 'ease',
            //     //     delay: 0 //ms
            //     // }, function () {
            //     //     //console.log(l);
            //     //     modal.toast({ message: l });
            //     // });

            //     this.$router.push({ name: 'bbtop', params: { "symbol": l }})

            //     // this.$router.push({ path: '/home/bbtop/', params: { "symbol": l }})
            //     // this.$router.push('/bbtop');


            //     //  this.$router.push({ path: '/bb'});

            //     // modal.toast({ message: l,  duration: 1 })
            //     })
        },
        chooseType: function chooseType(type) {
            var _this2 = this;

            return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (_this2.sortBy !== type) {
                                    _this2.sortBy = type;
                                    //food选项中头部标题发生改变，需要特殊处理
                                    if (type == 'food') {
                                        _this2.foodTitle = '分类';
                                    } else {
                                        //将foodTitle 和 headTitle 进行同步
                                        _this2.foodTitle = _this2.headTitle;
                                    }
                                } else {
                                    //再次点击相同选项时收回列表
                                    _this2.sortBy = '';
                                    if (type == 'food') {
                                        //将foodTitle 和 headTitle 进行同步
                                        _this2.foodTitle = _this2.headTitle;
                                    }
                                }
                                //只有点击清空按钮才清空数据，否则一直保持原有状

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        },

        clearSelect: function clearSelect() {},
        confirmSelectFun: function confirmSelectFun() {
            //状态改变时，因为子组件进行了监听，会重新获取数据进行筛选
            // this.confirmStatus = !this.confirmStatus;
            this.sortBy = '';
        },
        selectDeliveryMode: function selectDeliveryMode(id) {}

    }
};

/***/ }),
/* 139 */
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
/* 140 */
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
/* 141 */
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
/* 142 */
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
/* 143 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 114,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "wrapperipx": {
    "position": "fixed",
    "top": 174,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  },
  "candy_layout": {
    "width": 750,
    "height": 330,
    "paddingTop": 20,
    "paddingLeft": 20,
    "paddingRight": 30,
    "paddingBottom": 30,
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef"
  },
  "candy_img": {
    "position": "absolute",
    "top": 20,
    "left": 30,
    "width": 690,
    "height": 240
  },
  "category_img": {
    "position": "absolute",
    "top": 40,
    "left": 30,
    "width": 123,
    "height": 40
  },
  "candy_title": {
    "position": "absolute",
    "width": 690,
    "height": 55,
    "top": 205,
    "left": 30,
    "backgroundColor": "rgba(0,0,0,0.6)",
    "paddingTop": 10,
    "paddingLeft": 10,
    "color": "#FFFFFF",
    "fontSize": "12wx"
  },
  "candy_time_read": {
    "position": "absolute",
    "width": 690,
    "height": 30,
    "top": 280,
    "left": 30
  },
  "candy_time_read_layout": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row"
  },
  "candy_time": {
    "fontSize": "12wx",
    "color": "#787878"
  },
  "candy_read": {
    "fontSize": "12wx",
    "color": "#787878"
  }
}

/***/ }),
/* 144 */
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
/* 145 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingBottom": 10,
    "paddingTop": 26,
    "width": 750
  },
  "tlt": {
    "textAlign": "center",
    "color": "#333333",
    "width": 750,
    "padding": 10,
    "fontSize": 30
  },
  "gb-box": {
    "padding": 16,
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between"
  },
  "i-gd": {
    "width": 350,
    "height": 510,
    "marginBottom": 20
  },
  "gd-img": {
    "width": 350,
    "height": 350,
    "backgroundColor": "#f4f4f4"
  },
  "gd-tlt": {
    "fontSize": 28,
    "color": "#333333",
    "width": 350,
    "marginTop": 15,
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "gd-info": {
    "display": "block",
    "fontSize": 28,
    "width": 350,
    "height": 65,
    "paddingLeft": 10,
    "paddingRight": 10,
    "paddingTop": 15,
    "paddingBottom": 15,
    "color": "#9F8A60",
    "backgroundColor": "#F1ECE2",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "gd-price": {
    "fontSize": 28,
    "width": 350,
    "marginTop": 10,
    "color": "#b4282d",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 146 */
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
/* 147 */
/***/ (function(module, exports) {

module.exports = {
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
/* 148 */
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
/* 149 */
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
    "paddingRight": 50,
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
  },
  "more": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": 52,
    "width": 80,
    "backgroundColor": "#fafafa",
    "textAlign": "center",
    "paddingTop": 10,
    "opacity": 0.96,
    "boxShadow": "-6px -4px 4px #fafafa"
  }
}

/***/ }),
/* 150 */
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
  "wrapperipx": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": 174,
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
  "containeripx": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 115,
    "backgroundColor": "#ffe45f",
    "width": 750,
    "height": 174
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30
  },
  "back_click": {
    "width": 100,
    "height": 114
  },
  "back_clickipx": {
    "width": 100,
    "height": 174
  },
  "flash_text": {
    "fontSize": "18wx",
    "color": "#655b22",
    "textAlign": "center"
  },
  "div_search_image": {
    "width": 100,
    "height": 114
  },
  "div_search_imageipx": {
    "width": 100,
    "height": 174
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30
  }
}

/***/ }),
/* 151 */
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
/* 152 */
/***/ (function(module, exports) {

module.exports = {
  "alertfocus_whole": {
    "width": 750,
    "height": 447
  },
  "back_click": {
    "position": "absolute",
    "width": 100,
    "height": 100,
    "left": 25,
    "top": 55
  },
  "follow_click": {
    "position": "absolute",
    "width": 100,
    "height": 100,
    "left": 600,
    "top": 55
  },
  "follow_text": {
    "fontSize": "14wx",
    "borderWidth": 1,
    "borderColor": "#FFFFFF",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderRadius": 5,
    "color": "#FFFFFF"
  },
  "back_img": {
    "position": "absolute",
    "width": 40,
    "height": 40,
    "left": 0,
    "top": 0
  },
  "typical_image": {
    "position": "absolute",
    "top": 140,
    "left": 315,
    "width": 120,
    "height": 120
  },
  "typical_name": {
    "position": "absolute",
    "top": 285,
    "fontSize": 35,
    "color": "#FFFFFF",
    "width": 750,
    "textAlign": "center"
  },
  "article_hits": {
    "position": "absolute",
    "fontSize": 25,
    "color": "#FFFFFF",
    "top": 380,
    "width": 750,
    "textAlign": "center"
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = {
  "message": {
    "padding": 16,
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start"
  },
  "message-mine": {
    "padding": 16,
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-end"
  },
  "body": {
    "padding": 20,
    "borderRadius": 12,
    "color": "#333333",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#dddddd"
  },
  "body-mine": {
    "padding": 20,
    "borderRadius": 12,
    "color": "#333333",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "backgroundColor": "#ddffdd"
  }
}

/***/ }),
/* 154 */
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
/* 155 */
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
/* 156 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "image": {
    "width": 750,
    "height": 430
  },
  "slider": {
    "width": 750,
    "height": 430
  },
  "frame": {
    "width": 750,
    "height": 430,
    "position": "relative"
  },
  "indicator": {
    "width": 750,
    "height": 40,
    "itemColor": "white",
    "itemSelectedColor": "#b4282d",
    "itemSize": 12,
    "position": "absolute",
    "bottom": 10,
    "right": 0
  }
}

/***/ }),
/* 157 */
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
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.isIPhoneX ? 'wrapperipx' : 'wrapper']
  }, [_c('list', [(_vm.isShowLoading) ? _c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1) : _vm._e(), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["candy_layout"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_c('image', {
      staticClass: ["candy_img"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member ? item.member.logo : ''),
        "resize": "cover"
      }
    }), (item.category == 'candy') ? _c('image', {
      staticClass: ["category_img"],
      attrs: {
        "src": "/assets/images/candy.png"
      }
    }) : _vm._e(), (item.category == 'airdrop') ? _c('image', {
      staticClass: ["category_img"],
      attrs: {
        "src": "/assets/images/Airdrop.png"
      }
    }) : _vm._e(), (item.category == 'invitation') ? _c('image', {
      staticClass: ["category_img"],
      attrs: {
        "src": "/assets/images/Registration_invitation.png"
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["candy_title"]
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["candy_time_read"]
    }, [_c('div', {
      staticClass: ["candy_time_read_layout"]
    }, [_c('text', {
      staticClass: ["candy_time"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))]), _c('text', {
      staticClass: ["candy_read"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])
  }), (_vm.isShowLoading) ? _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)]) : _vm._e()], 2), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 159 */
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
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["gb-box"]
  }, _vm._l((_vm.goods), function(i) {
    return _c('div', {
      staticClass: ["i-gd"],
      on: {
        "click": function($event) {
          _vm.jumpWeb(i.url)
        }
      }
    }, [_c('image', {
      staticClass: ["gd-img"],
      attrs: {
        "resize": "cover",
        "src": i.img
      }
    }), _c('div', {
      staticClass: ["gd-div"]
    }, [_c('text', {
      staticClass: ["gd-info"]
    }, [_vm._v(_vm._s(i.info))]), _c('text', {
      staticClass: ["gd-tlt"]
    }, [_vm._v(_vm._s(i.tlt))]), _c('text', {
      staticClass: ["gd-price"]
    }, [_vm._v("¥" + _vm._s(i.price))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 161 */
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
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_vm._m(0), _c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v("币行情")]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scan"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["notice"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 163 */
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
/* 164 */
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
    ref: "t0",
    class: ['i-c', _vm.navIndex == 0 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(0)
      }
    }
  }, [_vm._v("自选")]), (_vm.navIndex == 0) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t1",
    class: ['i-c', _vm.navIndex == 1 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(1)
      }
    }
  }, [_vm._v("市值")]), (_vm.navIndex == 1) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t2",
    class: ['i-c', _vm.navIndex == 2 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(2)
      }
    }
  }, [_vm._v("涨幅")]), (_vm.navIndex == 2) ? _c('div', {
    staticClass: ["j-uline"]
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
  }, [_vm._v("bb8")]), (_vm.navIndex == 3) ? _c('div', {
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
  }, [_vm._v("币安")]), (_vm.navIndex == 4) ? _c('div', {
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
  }, [_vm._v("Gate.io")]), (_vm.navIndex == 5) ? _c('div', {
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
  }, [_vm._v("火币Pro")]), (_vm.navIndex == 6) ? _c('div', {
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
  }, [_vm._v("OKEx")]), (_vm.navIndex == 7) ? _c('div', {
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
  }, [_vm._v("Bittrex")]), (_vm.navIndex == 8) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t9",
    class: ['i-c', _vm.navIndex == 9 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(9)
      }
    }
  }, [_vm._v("Bitfinex")]), (_vm.navIndex == 9) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t10",
    class: ['i-c', _vm.navIndex == 10 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(10)
      }
    }
  }, [_vm._v("火币Pro")]), (_vm.navIndex == 10) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  })]), _c('text', {
    staticClass: ["more", "iconfont"]
  }, [_vm._v("")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.isIPhoneX ? 'wrapperipx' : 'wrapper']
  }, [_c('div', {
    class: [_vm.isIPhoneX ? 'containeripx' : 'container']
  }, [_c('div', {
    class: [_vm.isIPhoneX ? 'back_clickipx' : 'back_click'],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": "/assets/images/Return.png"
    }
  })]), _c('text', {
    staticClass: ["flash_text"]
  }, [_vm._v("糖果")]), _c('div', {
    class: [_vm.isIPhoneX ? 'div_search_imageipx' : 'div_search_image']
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 166 */
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
/* 167 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["alertfocus_whole"]
  }, [_c('image', {
    staticClass: ["alertfocus_whole"],
    attrs: {
      "src": _vm.get_img_path('integration_bg.png')
    }
  }), _c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return_W.png')
    }
  })]), ((_vm.type == 'bv')) ? _c('div', {
    staticClass: ["follow_click"],
    on: {
      "click": _vm.followTextClick
    }
  }, [_c('text', {
    staticClass: ["follow_text"]
  }, [_vm._v(_vm._s(_vm.favorite ? '已关注' : '关注'))])]) : _vm._e(), _c('image', {
    staticClass: ["typical_image"],
    attrs: {
      "src": _vm.gethref(_vm.data.logo ? _vm.data.logo : _vm.data.profileImageUrl),
      "resize": "cover"
    }
  }), _c('text', {
    staticClass: ["typical_name"]
  }, [_vm._v(_vm._s(_vm.data.screeName ? _vm.data.screeName : _vm.data.name))]), _c('text', {
    staticClass: ["article_hits"]
  }, [_vm._v(_vm._s(_vm.data.newsCount) + " 文章     |     " + _vm._s(_vm.data.readCount) + " 阅读")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.messageClassNames
  }, [_c('text', {
    class: _vm.bodyClassNames
  }, [_vm._v(_vm._s(_vm.nameWithSuffix) + _vm._s(_vm.body))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 169 */
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
/* 170 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_vm._m(0), _c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v("用户中心")]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scan"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["notice"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "5000",
      "infinite": "true"
    },
    on: {
      "change": _vm.onchange
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 172 */
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
/* 173 */
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(175), __esModule: true };

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(38);
var call = __webpack_require__(180);
var isArrayIter = __webpack_require__(179);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(186);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(119).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(27)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(7);
var dP = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(2);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(115);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(11);
var global = __webpack_require__(0);
var ctx = __webpack_require__(38);
var classof = __webpack_require__(115);
var $export = __webpack_require__(14);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(41);
var anInstance = __webpack_require__(176);
var forOf = __webpack_require__(177);
var speciesConstructor = __webpack_require__(118);
var task = __webpack_require__(119).set;
var microtask = __webpack_require__(182)();
var newPromiseCapabilityModule = __webpack_require__(114);
var perform = __webpack_require__(116);
var userAgent = __webpack_require__(185);
var promiseResolve = __webpack_require__(117);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(183)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(18)($Promise, PROMISE);
__webpack_require__(184)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(181)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(14);
var core = __webpack_require__(7);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(118);
var promiseResolve = __webpack_require__(117);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(114);
var perform = __webpack_require__(116);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(191);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 192 */
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
/* 193 */
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
/* 194 */
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
/* 195 */
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
/* 196 */
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
/* 197 */
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
/* 198 */
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
/* 199 */
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
/* 200 */,
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = __webpack_require__(344);

var _controller2 = _interopRequireDefault(_controller);

var _message = __webpack_require__(358);

var _message2 = _interopRequireDefault(_message);

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

exports.default = {
  data: {
    chatController: null,
    userName: '',
    messages: [],
    msgText: ''
  },

  components: { Message: _message2.default },
  methods: {
    send: function send() {
      if (this.msgText) {
        this.messages.push({
          key: id++,
          body: this.msgText,
          name: this.userName
        });
        chatController.send(this.msgText);
        this.msgText = '';
      }
    },
    receive: function receive() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$name = _ref.name,
          name = _ref$name === undefined ? 'No name' : _ref$name,
          _ref$message = _ref.message,
          message = _ref$message === undefined ? '' : _ref$message;

      if (name !== chatController.name) {
        this.messages.push({
          key: id++,
          body: message,
          name: name
        });
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.userName = 'User-' + Math.floor(Math.random() * 10);
    this.chatController = new _controller2.default({
      socket: weex.requireModule('webSocket')
    });
    this.chatController.signIn(userName);
    var id = 0;
    this.chatController.on('received', function (data) {
      _this.receive(data);
    });
  }
};

/***/ }),
/* 202 */,
/* 203 */
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


var modal = weex.requireModule('modal');
exports.default = {
    computed: {},
    data: function data() {
        return {
            pIndexKey: 'home'
        };
    },
    mounted: function mounted() {},

    methods: {
        isActive: function isActive(_c) {
            return this.pIndexKey === _c ? 'bar-active' : '';
        },
        tabTo: function tabTo(_key) {
            if (this.pIndexKey === _key) return;
            this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            });
        }
    }
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceWidth = weex.config.env.deviceWidth;
var deviceHeight = weex.config.env.deviceHeight;
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            articalId: '',
            category: '',
            title: '',
            data: {},
            url: apis.apiURL.baseurl + 'page/news/view?id=',
            getHeight: 1248,
            webview_style: { width: '750px', height: '1248px' },
            isShow: true,
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.category = params.Category;
        self.articalId = params.ArticalId;
        // self.articalId = this.$route.query.ArticalId;
        // self.category = this.$route.query.Category;
        //modal.toast({message:"屏幕宽度"+deviceWidth+"屏幕高度"+deviceHeight,duration:1});
        //modal.toast({message:"文章id"+self.articalId,duration:2});
        self.getHeight = parseInt(750 * deviceHeight / deviceWidth - 114);
        self.webview_style = { width: '750px', height: self.getHeight + 'px' };
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
        //modal.toast({message:self.webview_style,duration:2});
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
        } else if (self.category == 'candy') {
            self.title = "糖果";
        } else if (self.category == 'airdrop') {
            self.title = "空投";
        } else if (self.category == 'invitation') {
            self.title = "注册邀请";
        }

        apis.requireArticalContent({
            "id": self.articalId
        }, function (res) {
            if (res.respond.ok) {
                if (res.data != null || res.data != "") {
                    self.data = res.data;
                    //modal.toast({message:(res.data.title),duration:1});
                }
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        backImageClick: function backImageClick(params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        shareImageClick: function shareImageClick() {
            var self = this;
            var banner = self.data.banner ? self.data.banner : self.data.member ? self.data.member.logo : '';
            event.share(self.url + self.articalId, self.data.title, banner);
        },

        onPageStart: function onPageStart() {
            var self = this;
            self.isShow = true;
        },

        onPageFinish: function onPageFinish() {
            var self = this;
            self.isShow = false;
        }
    }
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alertheader = __webpack_require__(360);

var _alertheader2 = _interopRequireDefault(_alertheader);

var _alerttab = __webpack_require__(361);

var _alerttab2 = _interopRequireDefault(_alerttab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    data: function data() {
        return {
            category: '',
            memberId: '',
            source: ''
        };
    },


    components: {
        'alertfocus-header': _alertheader2.default,
        'alertfocus-tab': _alerttab2.default
    },

    created: function created() {
        var self = this;
        // self.category = this.$route.query.Category;
        // self.memberId = this.$route.query.MemberId;
        // self.source = this.$route.query.Source;
        //modal.toast({ message: (self.memberId), duration: 1 })
        var params = this.getParams();
        self.category = params.Category;
        self.memberId = params.MemberId;
        //self.source = params.Source;
    },
    mounted: function mounted() {
        // const modal = weex.requireModule('modal');
        //  modal.toast({ message: JSON.stringify(this.getParams()), duration: 10 })
        //     // modal.toast({ message: "11111112222", duration: 10 })
        // 
    },


    methods: {}
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceWidth = weex.config.env.deviceWidth;
var deviceHeight = weex.config.env.deviceHeight;
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            articalId: '',
            category: '',
            title: '',
            data: {},
            url: apis.apiURL.baseurl + 'page/activity/view?id=',
            shareUrl: apis.apiURL.baseurl + 'page/share/activity?id=',
            getHeight: 1248,
            webview_style: { width: '750px', height: '1248px' },
            isShow: true,
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.category = params.Category;
        self.articalId = params.ArticalId;
        // self.articalId = this.$route.query.ArticalId;
        // self.category = this.$route.query.Category;
        //modal.toast({message:"屏幕宽度"+deviceWidth+"屏幕高度"+deviceHeight,duration:1});
        //modal.toast({message:"文章id"+self.articalId,duration:2});
        self.getHeight = parseInt(750 * deviceHeight / deviceWidth - 114);
        self.webview_style = { width: '750px', height: self.getHeight + 'px' };
        //var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        //self.wipx = {top : fringeHeight+'px'};
        //modal.toast({message:self.webview_style,duration:2});
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
        } else if (self.category == 'candy') {
            self.title = "糖果";
        } else if (self.category == 'airdrop') {
            self.title = "空投";
        } else if (self.category == 'invitation') {
            self.title = "注册邀请";
        }

        apis.requireCandyContent({
            "data": self.articalId
        }, function (res) {
            if (res.respond.ok) {
                if (res.data != null || res.data != "") {
                    self.data = res.data;
                    //modal.toast({message:(res.data.title),duration:1});
                }
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    computed: {
        isIPhoneX: function isIPhoneX() {
            return _util2.default.env.isIPhoneX();
        }
    },

    methods: {
        backImageClick: function backImageClick(params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        shareImageClick: function shareImageClick() {
            var self = this;
            var banner = self.data.banner ? self.data.banner : self.data.member ? self.data.member.logo : '';
            event.share(self.shareUrl + self.articalId, self.data.title, banner);
        },

        onPageStart: function onPageStart() {
            var self = this;
            self.isShow = true;
        },

        onPageFinish: function onPageFinish() {
            var self = this;
            self.isShow = false;
        }
    }
};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _candyHeader = __webpack_require__(363);

var _candyHeader2 = _interopRequireDefault(_candyHeader);

var _candyContent = __webpack_require__(362);

var _candyContent2 = _interopRequireDefault(_candyContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = {
    components: {
        'candy-header': _candyHeader2.default,
        'candy-content': _candyContent2.default
    },

    data: function data() {
        return {};
    },
    created: function created() {},


    methods: {}
};

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireNewsList({
            "category": "ex_notice", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "ex_notice", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "ex_notice", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            translates: [{
                "key": "zh",
                "label": ""
            }],
            translateShow: false,
            translateClick: 0,
            translateList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireNewsList({
            "category": "ex_twitter", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "ex_twitter", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "ex_twitter", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        },

        getTranslation: function getTranslation(id, index) {
            var self = this;
            apis.requireTranslate({ "id": id }, function (res) {
                if (!res.respond.ok) {
                    //console.log(res);
                    return false;
                }

                if (!res.data.translates) {
                    // return false;
                    res.data.translates = self.translates;
                }

                self.itemsList[index].translates = res.data.translates;
                self.translateShow = true;
                //console.log("翻译"+res.data.translates[0].label+"index:"+index);
                //console.log("translates:::"+JSON.stringify(self.list[index].translates));

                self.translateList.push(id);
                self.translateClick = self.translateClick + 1;
                //modal.toast({message:res.data.translates[0].label,duration:1});
            });
        },
        isExistsTranlate: function isExistsTranlate(id) {
            var self = this;
            //console.log(JSON.stringify(self.translateList));

            for (var i = 0; i < this.translateList.length; i++) {
                var item = this.translateList[i];
                if (item == id) {
                    //console.log("显示标签"+item);
                    return true;
                }
            }

            return false;
        }
    }
};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcResult = __webpack_require__(342);

var _wxcResult2 = _interopRequireDefault(_wxcResult);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var event = weex.requireModule('event');
var globalEvent = weex.requireModule('globalEvent');
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, WxcResult: _wxcResult2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            images: [],
            translates: [{
                "key": "zh",
                "label": ""
            }],
            translateShow: false,
            translateClick: 0,
            translateList: [],
            wipx: { top: 276 },
            isShow: true,
            isWxcResultShow: false,
            type: 'noGoods',
            customSet: {},
            isExistList: false,
            isLogin: false
        };
    },
    created: function created() {
        var self = this;
        this.customSet = { noGoods: { button: '点击登录', desc: null, content: '只有登录了，才能看到关注的内容哦' } };
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireFollowList({
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.msg == '未登录') {
                self.isWxcResultShow = true;
                self.isExistList = false;
                return;
            }

            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.isWxcResultShow = false;
                self.isExistList = true;
                self.itemsList = res.list;
            } else {
                self.isWxcResultShow = false;
                self.isExistList = true;
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });

        globalEvent.addEventListener("login", function (e) {
            self.isLogin = e.ok;
            if (self.isLogin) {
                self.refreshLoginState();
            } else {
                //  self.resData = {account:"---",phone:"---",lastLoginTime:"---",email:"---",registTime:"---",pwd:"---"};
            }
        });
    },


    methods: {
        wxcResultButtonClicked: function wxcResultButtonClicked(e) {
            //modal.toast({message:'点击了登录',duration:1});
            event.openURL(apis.apiURL.basepath + "index.js");
        },


        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireFollowList({
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.msg == '未登录') {
                    self.isWxcResultShow = true;
                    self.isExistList = false;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    return;
                }

                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.isWxcResultShow = false;
                    self.isExistList = true;
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.isWxcResultShow = false;
                    self.isExistList = true;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireFollowList({
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.msg == '未登录') {
                    self.isWxcResultShow = true;
                    self.isExistList = false;
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    return;
                }

                if (res.respond.ok) {
                    self.isWxcResultShow = false;
                    self.isExistList = true;
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.isWxcResultShow = false;
                    self.isExistList = true;
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        },

        getTranslation: function getTranslation(id, index) {
            var self = this;
            apis.requireTranslate({ "id": id }, function (res) {
                if (!res.respond.ok) {
                    //console.log(res);
                    return false;
                }

                if (!res.data.translates) {
                    // return false;
                    res.data.translates = self.translates;
                }

                self.itemsList[index].translates = res.data.translates;
                self.translateShow = true;
                //console.log("翻译"+res.data.translates[0].label+"index:"+index);
                //console.log("translates:::"+JSON.stringify(self.list[index].translates));

                self.translateList.push(id);
                self.translateClick = self.translateClick + 1;
                //modal.toast({message:res.data.translates[0].label,duration:1});
            });
        },
        isExistsTranlate: function isExistsTranlate(id) {
            var self = this;
            //console.log(JSON.stringify(self.translateList));

            for (var i = 0; i < this.translateList.length; i++) {
                var item = this.translateList[i];
                if (item == id) {
                    //console.log("显示标签"+item);
                    return true;
                }
            }

            return false;
        },


        refreshLoginState: function refreshLoginState() {
            self.isShow = true;
            self.page = 1;
            apis.requireFollowList({
                "page": self.page,
                "size": self.size
            }, function (res) {
                self.isShow = false;
                if (res.respond.msg == '未登录') {
                    self.isWxcResultShow = true;
                    self.isExistList = false;
                    return;
                }

                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.isWxcResultShow = false;
                    self.isExistList = true;
                    self.itemsList = res.list;
                } else {
                    self.isWxcResultShow = false;
                    self.isExistList = true;
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 211 */
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
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 5,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            category: '',
            memberId: '',
            source: '',
            translates: [{
                "key": "zh",
                "label": ""
            }],
            translateShow: false,
            translateClick: 0,
            translateList: [],
            wipx: {},
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        self.category = this.$route.query.Category;
        self.memberId = this.$route.query.MemberId;
        //self.source = this.$route.query.Source;
        //modal.toast({message:"传值"+self.memberId,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 521 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireAlertFocusList({
            "memberId": self.memberId,
            "page": self.page,
            "size": self.size,
            "category": self.category
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                self.itemsList = res.list;
                //modal.toast({message:(self.itemsList[0].title),duration:1});
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 5,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            category: '',
            memberId: '',
            source: '',
            wipx: {},
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        self.category = this.$route.query.Category;
        self.memberId = this.$route.query.MemberId;
        //modal.toast({message:"传值"+self.memberId,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 521 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireAlertFocusList({
            "memberId": self.memberId,
            "page": self.page,
            "size": self.size,
            "category": self.category
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                self.itemsList = res.list;
                //modal.toast({message:(self.itemsList[0].title),duration:1});
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 5,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            category: '',
            memberId: '',
            source: '',
            translates: [{
                "key": "zh",
                "label": ""
            }],
            translateShow: false,
            translateClick: 0,
            translateList: [],
            wipx: {},
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        self.category = this.$route.query.Category;
        self.memberId = this.$route.query.MemberId;
        //modal.toast({message:"传值"+self.category,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 521 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireAlertFocusList({
            "memberId": self.memberId,
            "page": self.page,
            "size": self.size,
            "category": self.category
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                self.itemsList = res.list;
                //modal.toast({message:(self.itemsList[0].title),duration:1});
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        },

        getTranslation: function getTranslation(id, index) {
            var self = this;
            apis.requireTranslate({ "id": id }, function (res) {
                if (!res.respond.ok) {
                    //console.log(res);
                    return false;
                }

                if (!res.data.translates) {
                    // return false;
                    res.data.translates = self.translates;
                }

                self.itemsList[index].translates = res.data.translates;
                self.translateShow = true;
                //console.log("翻译"+res.data.translates[0].label+"index:"+index);
                //console.log("translates:::"+JSON.stringify(self.list[index].translates));

                self.translateList.push(id);
                self.translateClick = self.translateClick + 1;
                //modal.toast({message:res.data.translates[0].label,duration:1});
            });
        },
        isExistsTranlate: function isExistsTranlate(id) {
            var self = this;
            //console.log(JSON.stringify(self.translateList));

            for (var i = 0; i < this.translateList.length; i++) {
                var item = this.translateList[i];
                if (item == id) {
                    //console.log("显示标签"+item);
                    return true;
                }
            }

            return false;
        }
    }
};

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 5,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            category: '',
            memberId: '',
            source: '',
            translates: [{
                "key": "zh",
                "label": ""
            }],
            translateShow: false,
            translateClick: 0,
            translateList: [],
            wipx: {},
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        self.category = this.$route.query.Category;
        self.memberId = this.$route.query.MemberId;
        //modal.toast({message:"传值"+self.memberId,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 521 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireAlertFocusList({
            "memberId": self.memberId,
            "page": self.page,
            "size": self.size,
            "category": self.category
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                self.itemsList = res.list;
                //modal.toast({message:(self.itemsList[0].title),duration:1});
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireAlertFocusList({
                "memberId": self.memberId,
                "page": self.page,
                "size": self.size,
                "category": self.category
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        },

        getTranslation: function getTranslation(id, index) {
            var self = this;
            apis.requireTranslate({ "id": id }, function (res) {
                if (!res.respond.ok) {
                    //console.log(res);
                    return false;
                }

                if (!res.data.translates) {
                    // return false;
                    res.data.translates = self.translates;
                }

                self.itemsList[index].translates = res.data.translates;
                self.translateShow = true;
                //console.log("翻译"+res.data.translates[0].label+"index:"+index);
                //console.log("translates:::"+JSON.stringify(self.list[index].translates));

                self.translateList.push(id);
                self.translateClick = self.translateClick + 1;
                //modal.toast({message:res.data.translates[0].label,duration:1});
            });
        },
        isExistsTranlate: function isExistsTranlate(id) {
            var self = this;
            //console.log(JSON.stringify(self.translateList));

            for (var i = 0; i < this.translateList.length; i++) {
                var item = this.translateList[i];
                if (item == id) {
                    //console.log("显示标签"+item);
                    return true;
                }
            }

            return false;
        }
    }
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireNewsList({
            "category": "default_en", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "default_en", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "default_en", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var stream = weex.requireModule('stream');
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireHotNewsList({
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireHotNewsList({
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireHotNewsList({
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var stream = weex.requireModule('stream');
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.page = 1;
        self.isShow = true;
        apis.requireNewsList({
            "category": "default", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "default", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "default", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireNewsList({
            "category": "newcoin", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.self
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "newcoin", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "newcoin", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 20,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireNewsList({
            "category": "research_report", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "research_report", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "research_report", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            message: 'ex_notice',
            searchHolder: '',
            keywords: '',
            isSearch: false,
            isShow: false,
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.message = params.Message;
        if (self.message == '' || self.message == null) {
            self.message = 'ex_notice';
        }
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
    },


    methods: {
        onChange: function onChange(e) {
            //modal.toast({message:"input控件输入字符"+e.value,duration:1});
            if (!e.value) {
                return;
            }
            this.keywords = e.value;
        },

        backImageClick: function backImageClick() {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        searchImageClick: function searchImageClick() {
            var self = this;
            self.page = 1;
            self.isSearch = true;
            self.isShow = true;
            if (self.keywords == '' || self.keywords == null) {
                modal.toast({ message: "请输入关键字", duration: 2 });
            } else {
                apis.requireSearchNews({
                    "query": self.keywords,
                    "category": self.message,
                    "highlight": false,
                    "page": self.page
                }, function (res) {
                    self.isShow = false;
                    if (res.respond.ok) {
                        //modal.toast({message:(res.list[0].title),duration:1});
                        self.itemsList = res.list;
                        if (self.itemsList == '' || self.itemsList == null) {
                            self.isSearch = false;
                            modal.toast({ message: "暂无数据", duration: 1 });
                        }
                    } else {
                        modal.toast({ message: '网络请求失败', duration: 1 });
                    }
                });
            }
        },

        goAlertFocus: function goAlertFocus(category, memberId, source) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            message: 'ex_notice',
            searchHolder: '',
            keywords: '',
            isSearch: false,
            isShow: false,
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.message = params.Message;
        if (self.message == '' || self.message == null) {
            self.message = 'ex_notice';
        }
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
    },


    methods: {
        onChange: function onChange(e) {
            //modal.toast({message:"input控件输入字符"+e.value,duration:1});
            if (!e.value) {
                return;
            }
            this.keywords = e.value;
        },

        backImageClick: function backImageClick() {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        searchImageClick: function searchImageClick() {
            var self = this;
            self.page = 1;
            self.isSearch = true;
            self.isShow = true;
            if (self.keywords == '' || self.keywords == null) {
                modal.toast({ message: "请输入关键字", duration: 2 });
            } else {
                apis.requireSearchNews({
                    "query": self.keywords,
                    "category": self.message,
                    "highlight": false,
                    "page": self.page
                }, function (res) {
                    self.isShow = false;
                    if (res.respond.ok) {
                        //modal.toast({message:(res.list[0].title),duration:1});
                        self.itemsList = res.list;
                        if (self.itemsList == '' || self.itemsList == null) {
                            self.isSearch = false;
                            modal.toast({ message: "暂无数据", duration: 1 });
                        }
                    } else {
                        modal.toast({ message: '网络请求失败', duration: 1 });
                    }
                });
            }
        },

        goAlertFocus: function goAlertFocus(category, memberId, source) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;

exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            message: '',
            searchHolder: '',
            keywords: '',
            isSearch: false,
            isShow: false,
            wipx: { top: 40 }
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.message = params.Message;
        if (self.message == '' || self.message == null) {
            self.message = 'default';
        }
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
    },


    methods: {
        onChange: function onChange(e) {
            //modal.toast({message:"input控件输入字符"+e.value,duration:1});
            if (!e.value) {
                return;
            }
            this.keywords = e.value;
        },

        backImageClick: function backImageClick() {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        searchImageClick: function searchImageClick() {
            var self = this;
            self.page = 1;
            self.isSearch = true;
            self.isShow = true;
            if (self.keywords == '' || self.keywords == null) {
                modal.toast({ message: "请输入关键字", duration: 2 });
            } else {
                apis.requireSearchNews({
                    "query": self.keywords,
                    "category": self.message,
                    "highlight": false,
                    "page": self.page
                }, function (res) {
                    self.isShow = false;
                    if (res.respond.ok) {
                        //modal.toast({message:(res.list[0].title),duration:1});
                        self.itemsList = res.list;
                        if (self.itemsList == '' || self.itemsList == null) {
                            self.isSearch = false;
                            modal.toast({ message: "暂无数据", duration: 1 });
                        }
                    } else {
                        modal.toast({ message: '网络请求失败', duration: 1 });
                    }
                });
            }
        },

        goAlertFocus: function goAlertFocus(category, memberId, source) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            message: 'ex_notice',
            searchHolder: '',
            keywords: '',
            isSearch: false,
            isShow: false,
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.message = params.Message;
        if (self.message == '' || self.message == null) {
            self.message = 'ex_notice';
        }
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
    },


    methods: {
        onChange: function onChange(e) {
            //modal.toast({message:"input控件输入字符"+e.value,duration:1});
            if (!e.value) {
                return;
            }
            this.keywords = e.value;
        },

        backImageClick: function backImageClick() {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        searchImageClick: function searchImageClick() {
            var self = this;
            self.page = 1;
            self.isSearch = true;
            self.isShow = true;
            if (self.keywords == '' || self.keywords == null) {
                modal.toast({ message: "请输入关键字", duration: 2 });
            } else {
                apis.requireSearchNews({
                    "query": self.keywords,
                    "category": self.message,
                    "highlight": false,
                    "page": self.page
                }, function (res) {
                    self.isShow = false;
                    if (res.respond.ok) {
                        //modal.toast({message:(res.list[0].title),duration:1});
                        self.itemsList = res.list;
                        if (self.itemsList == '' || self.itemsList == null) {
                            self.isSearch = false;
                            modal.toast({ message: "暂无数据", duration: 1 });
                        }
                    } else {
                        modal.toast({ message: '网络请求失败', duration: 1 });
                    }
                });
            }
        },

        goAlertFocus: function goAlertFocus(category, memberId, source) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page >= res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            message: 'ex_notice',
            searchHolder: '',
            keywords: '',
            isSearch: false,
            isShow: false,
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        var params = this.getParams();
        self.message = params.Message;
        if (self.message == '' || self.message == null) {
            self.message = 'ex_notice';
        }
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: fringeHeight + 'px' };
    },


    methods: {
        onChange: function onChange(e) {
            //modal.toast({message:"input控件输入字符"+e.value,duration:1});
            if (!e.value) {
                return;
            }
            this.keywords = e.value;
        },

        backImageClick: function backImageClick() {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        searchImageClick: function searchImageClick() {
            var self = this;
            self.page = 1;
            self.isSearch = true;
            self.isShow = true;
            if (self.keywords == '' || self.keywords == null) {
                modal.toast({ message: "请输入关键字", duration: 2 });
            } else {
                apis.requireSearchNews({
                    "query": self.keywords,
                    "category": self.message,
                    "highlight": false,
                    "page": self.page
                }, function (res) {
                    self.isShow = false;
                    if (res.respond.ok) {
                        //modal.toast({message:(res.list[0].title),duration:1});
                        self.itemsList = res.list;
                        if (self.itemsList == '' || self.itemsList == null) {
                            self.isSearch = false;
                            modal.toast({ message: "暂无数据", duration: 1 });
                        }
                    } else {
                        modal.toast({ message: '网络请求失败', duration: 1 });
                    }
                });
            }
        },

        goAlertFocus: function goAlertFocus(category, memberId, source) {
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        goAlertContent: function goAlertContent(articalId, category) {
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            var params = this.getParamsByJson({
                ArticalId: articalId,
                Category: category
            });

            this.jumpUrl("/alertcontent", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireSearchNews({
                "query": self.keywords,
                "category": self.message,
                "highlight": false,
                "page": self.page
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page >= res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 226 */
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

var modal = weex.requireModule('modal');
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;

exports.default = {
    data: function data() {
        return {
            memberId: '',
            data: { desc: "" },
            wipx: {}
        };
    },
    created: function created() {
        var self = this;
        self.memberId = this.$route.query.MemberId;
        //modal.toast({message:"简介"+self.memberId,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 521 + fringeHeight + 'px' };

        apis.requireAlertFocusDesc({ memberId: self.memberId }, function (res) {
            if (res.respond.ok) {
                self.data = res.data;
                //modal.toast({message:(self.data.newsCount),duration:1});
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {}
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var apis = __webpack_require__(37);
var deviceHeight = weex.config.env.deviceHeight;
exports.default = {
    components: { WxcLoading: _wxcLoading2.default },

    data: function data() {
        return {
            page: 1,
            size: 6,
            refreshDisplay: 'hide',
            refreshText: ' ↓ 下拉刷新 ',
            loadingDisplay: 'hide',
            loadingText: '加载更多',
            itemsList: [],
            images: [],
            translates: [{
                "key": "zh",
                "label": ""
            }],
            translateShow: false,
            translateClick: 0,
            translateList: [],
            wipx: { top: 276 },
            isShow: true
        };
    },
    created: function created() {
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = { top: 188 + fringeHeight + 'px' };
        self.isShow = true;
        self.page = 1;
        apis.requireNewsList({
            "category": "bv", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
            "page": self.page,
            "size": self.size
        }, function (res) {
            self.isShow = false;
            if (res.respond.ok) {
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            } else {
                modal.toast({ message: '网络请求失败', duration: 1 });
            }
        });
    },


    methods: {
        goAlertFocus: function goAlertFocus(category, memberId, source) {
            var params = this.getParamsByJson({
                Category: category,
                MemberId: memberId
                //Source : source
            });

            this.jumpUrl("/alertfocus", params);
        },

        refreshData: function refreshData(event) {
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText = '正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category": "bv", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '刷新成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = ' ↓ 下拉刷新 ';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }
            });
        },

        loadingData: function loadingData(event) {
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category": "bv", //这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page": self.page,
                "size": self.size
            }, function (res) {
                if (res.respond.ok) {
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText = '加载更多';
                    modal.toast({ message: '加载成功', duration: 1 });
                } else {
                    self.refreshDisplay = 'hide';
                    self.refreshText = '加载更多';
                    modal.toast({ message: '网络请求失败', duration: 1 });
                }

                if (self.page > res.lastPage) {
                    modal.toast({ message: '没有更多', duration: 1 });
                }
            });
        },

        getTranslation: function getTranslation(id, index) {
            var self = this;
            apis.requireTranslate({ "id": id }, function (res) {
                if (!res.respond.ok) {
                    //console.log(res);
                    return false;
                }

                if (!res.data.translates) {
                    // return false;
                    res.data.translates = self.translates;
                }

                self.itemsList[index].translates = res.data.translates;
                self.translateShow = true;
                //console.log("翻译"+res.data.translates[0].label+"index:"+index);
                //console.log("translates:::"+JSON.stringify(self.list[index].translates));

                self.translateList.push(id);
                self.translateClick = self.translateClick + 1;
                //modal.toast({message:res.data.translates[0].label,duration:1});
            });
        },
        isExistsTranlate: function isExistsTranlate(id) {
            var self = this;
            //console.log(JSON.stringify(self.translateList));

            for (var i = 0; i < this.translateList.length; i++) {
                var item = this.translateList[i];
                if (item == id) {
                    //console.log("显示标签"+item);
                    return true;
                }
            }

            return false;
        }
    }
};

/***/ }),
/* 228 */
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
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(78);

var _util2 = _interopRequireDefault(_util);

var _refresh = __webpack_require__(126);

var _refresh2 = _interopRequireDefault(_refresh);

var _YXSlider = __webpack_require__(359);

var _YXSlider2 = _interopRequireDefault(_YXSlider);

var _homeBlock = __webpack_require__(368);

var _homeBlock2 = _interopRequireDefault(_homeBlock);

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
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
exports.default = {
    components: {
        'refresher': _refresh2.default,
        'yx-slider': _YXSlider2.default,
        'block1': _homeBlock2.default
    },
    data: function data() {
        return {
            banners: [{ src: "http://www.awakenpay.com/xfile/download?path=ad/2017527/adv_two.png" }, { src: "http://www.awakenpay.com/xfile/download?path=ad/2017728/%E8%B4%B7%E5%BE%97%E6%9B%B4%E5%A4%9A.jpg" }, { src: "http://www.awakenpay.com/xfile/download?path=ad/2017527/adv_four.png" }, { src: "http://www.awakenpay.com/xfile/download?path=ad/2017830/iosAPP%E4%B8%8A%E7%BA%BF.jpg" }],
            goodsList: [],
            showLoading: 'hide'
        };
    },
    created: function created() {

        // this.GET('api/home/pullGoods', res => {
        //     let result = res.data.result;
        //     this.goodsList = result['goods'];
        // })
        this.goodsList = [{ url: "dd", info: "BTC--ETH", tlt: "xxxxBTC", price: "2.1" }, { url: "dd", info: "BTC--ETH", tlt: "xxxxBTC", price: "2.1" }, { url: "dd", info: "BTC--ETH", tlt: "xxxxBTC", price: "2.1" }, { url: "dd", info: "BTC--ETH", tlt: "xxxxBTC", price: "2.1" }];
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            var url = this.$getConfig().bundleUrl;
            console.log(_util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url));
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        },
        onloading: function onloading() {
            var _this = this;

            modal.toast({ message: 'loading', duration: 0.3 });
            this.showLoading = 'show';
            setTimeout(function () {
                // this.goodsList.push(...this.recommend.goods1);
                _this.showLoading = 'hide';
            }, 300);
        },
        onloadmore: function onloadmore() {
            setTimeout(function () {
                // this.goodsList.push(...this.recommend.goods1);
            }, 100);
        },
        loadingDown: function loadingDown() {
            this.goodsList = [];
            // this.goodsList.push(...this.recommend.goods2);
            // this.goodsList.push(...this.recommend.goods1);
        }
    }
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = __webpack_require__(367);

var _header2 = _interopRequireDefault(_header);

var _topChannel = __webpack_require__(369);

var _topChannel2 = _interopRequireDefault(_topChannel);

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
        'top-channel': _topChannel2.default
    },
    data: function data() {
        return {
            YXBanners: [],
            goodsList: [],
            showLoading: 'hide'
        };
    },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 231 */
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

exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcButton = __webpack_require__(85);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _loginHeader = __webpack_require__(91);

var _loginHeader2 = _interopRequireDefault(_loginHeader);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, loginHeader: _loginHeader2.default, WxcButton: _wxcButton2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            userNumber: '',
            userPassword: '',
            data: { title: "登录" },
            isshow: false,
            isShowLoad: false,
            loginData: {},
            interval: 0,
            type: 'default',
            loadingText: '加载中'
        };
    },
    computed: {
        textStyle: function textStyle() {
            var fontSize = this.fontSize,
                color = this.color;

            var customStyle = {};
            if (fontSize) {
                customStyle.fontSize = fontSize;
            }
            if (color) {
                customStyle.color = color;
            }
            return {
                fontSize: fontSize, color: color
            };
        },
        isIPhoneX: function isIPhoneX() {
            return _util2.default.env.isIPhoneX();
        },
        user: function user() {
            return { userId: "fengfeng", created: "20180215", karma: "xfjdllgmmdd", about: "42523252" };
        }
    },
    created: function created() {
        this.isshow = true;
    },
    mounted: function mounted() {},

    methods: {
        onchangeUserNumber: function onchangeUserNumber(event) {
            this.userNumber = event.value;
        },
        onchangeUserPassword: function onchangeUserPassword(event) {
            this.userPassword = event.value;
        },
        /*找回密码*/
        findPassword: function findPassword() {
            this.$router.push({ path: "/modifySendCode", query: { "title": "忘记密码" } });
        },
        openProtocol: function openProtocol() {
            this.$router.push({ path: "/loginDisclaimer", query: { "title": "免责申明" } });
        },
        /*注册*/
        register: function register() {
            this.$router.push({ path: '/home' });
            // this.$vm('toast').$emit('toast','Hello,注册暂时未开发，后续我们会进行完善。');  
        },
        //获取cookie
        getCookie: function getCookie(cname) {
            var name = cname + "=";
            var ca = weex.document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        /*处理登录*/
        login: function login() {
            var self = this;

            if (this.userNumber.length < 1) {
                modal.toast({ message: '请输入手机号' });
                return;
            } else if (this.userPassword.length < 1) {
                modal.toast({ message: '请输入密码' });
                return;
            }
            self.isShowLoad = true;
            apis.requireLogin({
                "account": self.userNumber,
                "password": self.userPassword

            }, function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    modal.toast({ message: '登录成功', duration: 0.5 });
                    self.loginData = res.data;
                    event.isLoginGlobalEvent("login", true);
                    event.dismissViewController("");
                    //    modal.toast({message:weex.document.cookie,duration:1});
                    // console.log("ooo")
                    // console.log("ooo"+weex.document.cookie)
                    // //  self.getCookie("bb8_login_token");
                    // console.log("getCookie"+ self.getCookie("bb8_login_token"));
                    //  modal.toast({ message: self.getCookie("bb8_login_token")});
                    // if(event.dismissViewController("") != undefined){
                    //     event.isLoginGlobalEvent("login",true);
                    //     // event.dismissViewController("");

                    // }
                    console.log(res.data);
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        }
    }
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcButton = __webpack_require__(85);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _loginHeader = __webpack_require__(91);

var _loginHeader2 = _interopRequireDefault(_loginHeader);

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
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, WxcButton: _wxcButton2.default, loginHeader: _loginHeader2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            username: '',
            vCode: '',
            data: { title: "修改用户名" },
            isShowLoad: false,
            interval: 0,
            type: 'default',
            loadingText: '加载中'
        };
    },
    computed: {
        textStyle: function textStyle() {
            var fontSize = this.fontSize,
                color = this.color;

            var customStyle = {};
            if (fontSize) {
                customStyle.fontSize = fontSize;
            }
            if (color) {
                customStyle.color = color;
            }
            return {
                fontSize: fontSize, color: color
            };
        }
    },
    created: function created() {},

    methods: {
        /*修改信息*/
        modifyInfo: function modifyInfo() {
            var self = this;
            if (this.username.length < 1) {
                modal.toast({ message: '请输入用户名' });
                return;
            }
            var validationPhone = /^(?!_)(?!.*?_$)^(?!(\d+)$)[\u4e00-\u9fff\w]{3,12}$/;
            if (!validationPhone.test(this.username)) {
                modal.toast({ message: '用户名格式有误' });
                return false;
            }

            self.isShowLoad = true;
            apis.requireModifyInfo({
                "account": self.username
            }, function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    modal.toast({ message: "修改成功", duration: 0.5 });
                    event.dismissViewController("");
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        }

    }
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcButton = __webpack_require__(85);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _loginHeader = __webpack_require__(91);

var _loginHeader2 = _interopRequireDefault(_loginHeader);

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
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, WxcButton: _wxcButton2.default, loginHeader: _loginHeader2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            userName: '',
            mobileNo: '',
            userPwd: '',
            nextUserPwd: '',
            vCode: '',
            data: { title: "登录密码设置" },
            isShowLoad: false,
            loginData: {},
            interval: 0,
            type: 'default',
            loadingText: '加载中'
        };
    },
    computed: {
        textStyle: function textStyle() {
            var fontSize = this.fontSize,
                color = this.color;

            var customStyle = {};
            if (fontSize) {
                customStyle.fontSize = fontSize;
            }
            if (color) {
                customStyle.color = color;
            }
            return {
                fontSize: fontSize, color: color
            };
        }
    },
    created: function created() {
        this.mobileNo = this.$route.query.mobileNo;
        this.vCode = this.$route.query.vCode;
    },

    methods: {
        /*修改密码*/
        getModifyPwd: function getModifyPwd() {
            var self = this;
            if (this.userPwd.length < 1) {
                modal.toast({ message: '请输入密码' });
                return;
            }
            var validationPwd = /^.{6,16}$/;
            if (!validationPwd.test(this.userPwd)) {
                modal.alert({
                    message: "密码：6~16个字符，区分大小写",
                    duration: 0.3,
                    okTitle: "确定"
                }, function (e) {});
                return false;
            }
            if (this.nextUserPwd != this.userPwd) {
                modal.toast({ message: '输入的2次密码不同' });
                return;
            }
            self.isShowLoad = true;
            apis.requireModifyPwd({
                "emailOrPhone": self.mobileNo,
                "password": self.userPwd,
                "confirmPassword": self.nextUserPwd,
                "validateCode": self.vCode
            }, function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    modal.toast({ message: '设置成功', duration: 0.5 });
                    self.$router.push("/login");
                    // self.loginData = res.data;
                    console.log(res.data);
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        }
    }
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcButton = __webpack_require__(85);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _loginHeader = __webpack_require__(91);

var _loginHeader2 = _interopRequireDefault(_loginHeader);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, WxcButton: _wxcButton2.default, loginHeader: _loginHeader2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            mobileNo: '',
            vCode: '',
            data: { title: "修改密码" },
            isShowLoad: false,
            interval: 0,
            type: 'default',
            loadingText: '加载中',
            datatime: {
                time: 60,
                timetext: '发送验证码',
                judgetime: true
            }
        };
    },
    computed: {
        textStyle: function textStyle() {
            var fontSize = this.fontSize,
                color = this.color;

            var customStyle = {};
            if (fontSize) {
                customStyle.fontSize = fontSize;
            }
            if (color) {
                customStyle.color = color;
            }
            return {
                fontSize: fontSize, color: color
            };
        }
    },
    created: function created() {
        if (this.$route.query.title != undefined) {
            this.data.title = this.$route.query.title;
        }
    },

    methods: {
        /*发送验证码*/
        sendCode: function sendCode() {
            var self = this;
            if (this.mobileNo.length < 1) {
                modal.toast({ message: '请输入手机号或邮箱' });
                return;
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            var validationMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!validationPhone.test(this.mobileNo) && !validationMail.test(this.mobileNo)) {
                modal.toast({ message: '手机号或邮箱格式有误' });
                return false;
            }

            if (self.datatime.judgetime) {
                self.isShowLoad = true;
                apis.requireSendModifyPwdCode({
                    "emailOrPhone": self.mobileNo
                }, function (res) {
                    self.isShowLoad = false;
                    if (res.respond.ok) {
                        self.datatime.judgetime = false;
                        self.datatime.timetext = '60秒';
                        var timer = setInterval(function () {
                            self.datatime.time = self.datatime.time - 1;
                            if (self.datatime.time > 0) {
                                if ((self.datatime.time + '').length != 1) {
                                    self.datatime.timetext = self.datatime.time + '秒';
                                } else {
                                    self.datatime.timetext = '0' + self.datatime.time + '秒';
                                }
                            } else {
                                self.datatime.judgetime = true;
                                clearInterval(timer);
                                self.datatime.timetext = '重新发送';
                                self.datatime.time = 60;
                            }
                        }, 1000);
                    } else {
                        modal.toast({ message: res.respond.msg, duration: 1 });
                    }
                });
            }
        },
        /*进入设置密码页面*/
        goModifyPwd: function goModifyPwd() {
            if (this.mobileNo.length < 1) {
                modal.toast({ message: '请输入手机号' });
                return;
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            var validationMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!validationPhone.test(this.mobileNo) && !validationMail.test(this.mobileNo)) {
                modal.toast({ message: '手机号或邮箱格式有误' });
                return false;
            }
            if (this.vCode.length < 1) {
                modal.toast({ message: '请输入验证码' });
                return;
            }
            if (this.$router) {
                this.$router.push({ path: "/modifyPwd", query: { "mobileNo": this.mobileNo, "vCode": this.vCode } });
            }
        }
    }
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcButton = __webpack_require__(85);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _loginHeader = __webpack_require__(91);

var _loginHeader2 = _interopRequireDefault(_loginHeader);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, WxcButton: _wxcButton2.default, loginHeader: _loginHeader2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            userName: '',
            mobileNo: '',
            userPwd: '',
            nextUserPwd: '',
            vCode: '',
            data: { title: "注册" },
            isShowLoad: false,
            loginData: {},
            interval: 0,
            type: 'default',
            loadingText: '加载中',
            datatime: {
                time: 60,
                timetext: '发送验证码',
                judgetime: true
            }
        };
    },
    computed: {
        textStyle: function textStyle() {
            var fontSize = this.fontSize,
                color = this.color;

            var customStyle = {};
            if (fontSize) {
                customStyle.fontSize = fontSize;
            }
            if (color) {
                customStyle.color = color;
            }
            return {
                fontSize: fontSize, color: color
            };
        },
        userId: function userId() {
            return 'fengfeng';
        },
        user: function user() {
            return { userId: "fengfeng", created: "20180215", karma: "xfjdllgmmdd", about: "42523252" };
        }
    },
    created: function created() {},

    methods: {
        onchangeUserNumber: function onchangeUserNumber(event) {},
        onchangeUserPassword: function onchangeUserPassword(event) {
            this.userPassword = event.value;
        },
        /*发送验证码*/
        sendCode: function sendCode() {
            var self = this;
            if (this.userName.length < 1) {
                modal.toast({ message: '请输入用户名' });
                return;
            }
            if (this.mobileNo.length < 1) {
                modal.toast({ message: '请输入手机号或邮箱' });
                return;
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            var validationMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!validationPhone.test(this.mobileNo) && !validationMail.test(this.mobileNo)) {
                modal.toast({ message: '手机号或邮箱格式有误' });
                return false;
            }
            var validationName = /^(?!_)(?!.*?_$)^(?!(\d+)$)[\u4e00-\u9fff\w]{3,12}$/;
            if (!validationName.test(this.userName)) {

                modal.alert({
                    message: "用户名：3-12个字符 ，可使用汉字、字母、数字、下划线，不能为纯数字，且首末字符不能为下划线",
                    duration: 0.3,
                    okTitle: "确定"
                }, function (e) {});
                return false;
            }

            if (self.datatime.judgetime) {
                self.isShowLoad = true;
                apis.requireSignUpValidate({
                    "account": self.userName,
                    "emailOrPhone": self.mobileNo
                }, function (res) {
                    self.isShowLoad = false;
                    if (res.respond.ok) {
                        self.datatime.judgetime = false;
                        self.datatime.timetext = '60秒';
                        var timer = setInterval(function () {
                            self.datatime.time = self.datatime.time - 1;
                            if (self.datatime.time > 0) {
                                if ((self.datatime.time + '').length != 1) {
                                    self.datatime.timetext = self.datatime.time + '秒';
                                } else {
                                    self.datatime.timetext = '0' + self.datatime.time + '秒';
                                }
                            } else {
                                self.datatime.judgetime = true;
                                clearInterval(timer);
                                self.datatime.timetext = '重新发送';
                                self.datatime.time = 60;
                            }
                        }, 1000);
                    } else {
                        modal.toast({ message: res.respond.msg, duration: 1 });
                    }
                });
            }
        },
        /*处理登录*/
        register: function register() {
            var self = this;
            if (this.userName.length < 1) {
                modal.toast({ message: '请输入用户名' });
                return;
            }if (this.mobileNo.length < 1) {
                modal.toast({ message: '请输入手机号或邮箱' });
                return;
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            var validationMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!validationPhone.test(this.mobileNo) && !validationMail.test(this.mobileNo)) {
                modal.toast({ message: '手机号或邮箱格式有误' });
                return false;
            }
            var validationName = /^(?!_)(?!.*?_$)^(?!(\d+)$)[\u4e00-\u9fff\w]{3,12}$/;
            if (!validationName.test(this.userName)) {

                modal.alert({
                    message: "用户名：3-12个字符 ，可使用汉字、字母、数字、下划线，不能为纯数字，且首末字符不能为下划线",
                    duration: 0.3,
                    okTitle: "确定"
                }, function (e) {});
                return false;
            }
            if (this.userPwd.length < 1) {
                modal.toast({ message: '请输入密码' });
                return;
            }

            // var validationPwd = /^(?!^\d+$)[\@A-Za-z\d\!\#\$\%\^\&\*\.\~]{6,16}$/;
            var validationPwd = /^.{6,16}$/;
            if (!validationPwd.test(this.userPwd)) {
                // modal.toast({ message: '密码格式有误'})
                modal.alert({
                    message: "密码：6~16个字符，区分大小写",
                    duration: 0.3,
                    okTitle: "确定"
                }, function (e) {});
                return false;
            }
            if (this.nextUserPwd != this.userPwd) {
                modal.toast({ message: '输入的2次密码不同' });
                return;
            }
            if (this.vCode.length < 1) {
                modal.toast({ message: '请输入验证码' });
                return;
            }
            self.isShowLoad = true;
            apis.requireSignUp({
                "account": self.userName,
                "emailOrPhone": self.mobileNo,
                "password": self.userPwd,
                "confirmPassword": self.nextUserPwd,
                "validateCode": self.vCode
            }, function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    modal.toast({ message: '注册成功', duration: 0.5 });
                    event.isLoginGlobalEvent("login", true);
                    event.dismissViewController("");
                    // self.loginData = res.data;
                    console.log(res.data);
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        }
    }
};

/***/ }),
/* 237 */
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
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCell = __webpack_require__(90);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _pcenterHeader = __webpack_require__(92);

var _pcenterHeader2 = _interopRequireDefault(_pcenterHeader);

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

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, pcenterHeader: _pcenterHeader2.default, WxcCell: _wxcCell2.default },
    data: function data() {
        return {
            textone: '51BB8财经（币唯app），领先的数字货币行情及资讯智能服务平台。 对接全球300+交易所，实时监控3000多种数字货币行情变化，基于大数据处理建立海量行情的智投模型；聚合全球区块链领域24h最新资讯，提供新闻舆情AI分析及智选推送服务，帮助用户挖掘数据价值、甄别权威信息，辅助投资决策。'
            // texttwo:'对接全球各大交易所，上千种数字货币全天候行情监控，实时数据更新，并提供多时间维度及全网/交易所数据切换，满足不同用户的个性化需求。',
            // textthree:'基于分布式存储和网格计算等大数据处理，对海量数字货币行情进行实时分析，帮助用户快速把握重大行情、紧抓市场热点。',
            // textfour:'汇聚全球区块链领域24小时即时要闻、行业动态、监管政策，为行业机构及用户提供海量资讯信息聚合服务。',
        };
    },
    computed: {},
    created: function created() {
        var self = this;
    },

    methods: {}
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCell = __webpack_require__(90);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _pcenterHeader = __webpack_require__(92);

var _pcenterHeader2 = _interopRequireDefault(_pcenterHeader);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var globalEvent = weex.requireModule('globalEvent');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, pcenterHeader: _pcenterHeader2.default, WxcCell: _wxcCell2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            infoInData: "http://www.51bb8.com"
        };
    },
    computed: {},
    created: function created() {
        var self = this;
    },

    methods: {
        wxcCellClicked: function wxcCellClicked(e) {},
        goDisclaimer: function goDisclaimer() {
            event.openURL(apis.apiURL.basepath + "index.js?#/disclaimer", "免责声明", "push");
        },
        goAboutUs: function goAboutUs() {
            event.openURL(apis.apiURL.basepath + "index.js?#/aboutUs", "关于我们", "push");
        }
    }
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCell = __webpack_require__(90);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _pcenterHeader = __webpack_require__(92);

var _pcenterHeader2 = _interopRequireDefault(_pcenterHeader);

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
//
//
//
//
//

var apis = __webpack_require__(37);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, pcenterHeader: _pcenterHeader2.default, WxcCell: _wxcCell2.default },
    data: function data() {
        return {
            titleone: '在您使用本网站各项服务之前，请仔细阅读本声明的所有条款。凡以任何方式登陆浏览本网站内容或直接、间接使用本网站内容者，视为无条件接受本声明。',
            titletwo: '风险提示：本网站承诺提供专业资讯服务，但不承诺投资者获取收益，也不与投资者约定分享投资收益或分担投资损失。市场有风险，投资需谨慎。',
            textone: '一、本网站依法提供数字货币行情资讯业务。如有发现任何机构或个人冒用本网站或本网站工作人员在网络上非法从事投资咨询业务，请及时与本网站联系，本网站保留对侵权机构或个人追究法律责任的权利。',
            texttwo: '二、本网站的内容受法律法规及国际条约的保护。除法律另有规定或本网站与第三方另有约定外，本网站提供的所有资料以及相关软件程序的知识产权均归属本网站所有。',
            textthree: '三、任何机构或者个人使用本网站，均应遵守有关法律法规、国际条约及本声明，不得破坏本网站运行安全，不得利用本网站进行任何违法活动，不得损害本网站的合法权益。',
            textfour: '四、未经本网站书面许可，任何机构或个人不得以向他人出售牟利为目的使用本网站的任何内容，此种使用包括但不限于拷贝、下载、存贮、通过硬盘拷贝或电子抓取系统获取、发送、转换、出租、演示、转载、复制、修改、销售、传播、出版或任何其它形式的散发。',
            textfive: '五、 本网站对所提供的内容力求准确、完整和及时，但并不对其准确性、完整性和及时性做出任何保证。对任何因直接或间接使用本网站内容而造成的损失，包括但不限于因有关内容不准确、不完整而导致的损失，本网站不承担任何法律责任。本网站亦不保证所设置的外部链接的准确性和完整性，该外部链接指向的任何网页内容，本网站对其合法性概不负责，亦不承担任何法律责任。',
            textsix: '六、 权利人认为本网站所提供的信息存储空间、搜索或链接服务存储、搜索或链接的内容所涉及的作品侵犯了其信息网络传播权或者被删除、改变了自己的权利管理电子信息的，可依法向本网站提交书面通知。权利人应对通知书的真实性负责，并承担由于通知书内容不真实所导致的全部法律责任。',
            textseven: '七、 本声明受相关法律及国际条约的约束并依据其解释。如出现纠纷，双方应友好协商，协商不成，任何一方可提请本网站所在地人民法院诉讼解决。在法律允许的最大范围内，本条款最终解释权归本网站享有。'

        };
    },
    computed: {},
    created: function created() {
        var self = this;
    },

    methods: {}
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(90);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _pcenterHeader = __webpack_require__(92);

var _pcenterHeader2 = _interopRequireDefault(_pcenterHeader);

var _loginHeader = __webpack_require__(91);

var _loginHeader2 = _interopRequireDefault(_loginHeader);

var _util = __webpack_require__(78);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apis = __webpack_require__(37); //
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var event = weex.requireModule('event');
exports.default = {
  components: { WxcLoading: _wxcLoading2.default, loginHeader: _loginHeader2.default, WxcCell: _wxcCell2.default },
  data: function data() {
    return {
      data: { title: "免责声明" },
      titleone: '在您使用本网站各项服务之前，请仔细阅读本声明的所有条款。凡以任何方式登陆浏览本网站内容或直接、间接使用本网站内容者，视为无条件接受本声明。',
      titletwo: '风险提示：本网站承诺提供专业资讯服务，但不承诺投资者获取收益，也不与投资者约定分享投资收益或分担投资损失。市场有风险，投资需谨慎。',
      textone: '一、本网站依法提供数字货币行情资讯业务。如有发现任何机构或个人冒用本网站或本网站工作人员在网络上非法从事投资咨询业务，请及时与本网站联系，本网站保留对侵权机构或个人追究法律责任的权利。',
      texttwo: '二、本网站的内容受法律法规及国际条约的保护。除法律另有规定或本网站与第三方另有约定外，本网站提供的所有资料以及相关软件程序的知识产权均归属本网站所有。',
      textthree: '三、任何机构或者个人使用本网站，均应遵守有关法律法规、国际条约及本声明，不得破坏本网站运行安全，不得利用本网站进行任何违法活动，不得损害本网站的合法权益。',
      textfour: '四、未经本网站书面许可，任何机构或个人不得以向他人出售牟利为目的使用本网站的任何内容，此种使用包括但不限于拷贝、下载、存贮、通过硬盘拷贝或电子抓取系统获取、发送、转换、出租、演示、转载、复制、修改、销售、传播、出版或任何其它形式的散发。',
      textfive: '五、 本网站对所提供的内容力求准确、完整和及时，但并不对其准确性、完整性和及时性做出任何保证。对任何因直接或间接使用本网站内容而造成的损失，包括但不限于因有关内容不准确、不完整而导致的损失，本网站不承担任何法律责任。本网站亦不保证所设置的外部链接的准确性和完整性，该外部链接指向的任何网页内容，本网站对其合法性概不负责，亦不承担任何法律责任。',
      textsix: '六、 权利人认为本网站所提供的信息存储空间、搜索或链接服务存储、搜索或链接的内容所涉及的作品侵犯了其信息网络传播权或者被删除、改变了自己的权利管理电子信息的，可依法向本网站提交书面通知。权利人应对通知书的真实性负责，并承担由于通知书内容不真实所导致的全部法律责任。',
      textseven: '七、 本声明受相关法律及国际条约的约束并依据其解释。如出现纠纷，双方应友好协商，协商不成，任何一方可提请本网站所在地人民法院诉讼解决。在法律允许的最大范围内，本条款最终解释权归本网站享有。'

    };
  },
  computed: {},
  created: function created() {
    var self = this;
  },

  methods: {}
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCell = __webpack_require__(90);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _pcenterHeader = __webpack_require__(92);

var _pcenterHeader2 = _interopRequireDefault(_pcenterHeader);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var common = __webpack_require__(125);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var globalEvent = weex.requireModule('globalEvent');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, pcenterHeader: _pcenterHeader2.default, WxcCell: _wxcCell2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            userNumber: '',
            userPassword: '',
            data: { title: "" },
            isShowLoad: false,
            resData: { account: "---", phone: "---", lastLoginTime: "---", email: "---", registTime: "---", pwd: "---" },
            interval: 0,
            type: 'default',
            loadingText: '加载中',
            isLogin: false,
            cellStyle: {
                height: "110px"
            },
            loginStyle: {
                height: "160px"
            }
        };
    },
    computed: {},
    created: function created() {
        var self = this;

        if (this.$getConfig().isLogin != undefined) {
            this.isLogin = this.$getConfig().isLogin;
        }
        // if (apis.getParameterByName('isLogin', this.bundleUrl) != undefined){
        //      modal.toast({message:"getParameterByName",duration:1});
        //     this.isLogin = apis.getParameterByName('isLogin', this.bundleUrl);
        // }
        if (self.isLogin) {
            self.userInfo();
        }
        globalEvent.addEventListener("login", function (e) {
            self.isLogin = e.ok;
            if (self.isLogin) {
                self.userInfo();
            } else {
                //  self.resData = {account:"---",phone:"---",lastLoginTime:"---",email:"---",registTime:"---",pwd:"---"};
            }
        });
    },

    methods: {
        userInfo: function userInfo() {
            var self = this;
            self.isShowLoad = true;
            apis.requireUserInfo({}, function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    self.resData = res.data;
                    self.resData.pwd = "******";
                    if (res.data.email == null) {
                        self.resData.email = "---";
                    }
                    if (res.data.phone == null) {
                        self.resData.phone = res.data.email;
                    }
                    if (res.data.lastLoginTime != null) {

                        self.resData.lastLoginTime = _util2.default.formatDate(res.data.lastLoginTime);
                    }
                    if (res.data.registTime != null) {

                        self.resData.registTime = _util2.default.formatDate(res.data.registTime);
                    }
                    console.log(res.data);
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        },


        modifyPassword: function modifyPassword() {
            // this.$router.push({path:"/modifySendCode",query:{"title":"修改密码"}})
            if (this.isLogin) {
                event.openURL(apis.apiURL.basepath + "index.js?#/modifySendCode");
            } else {
                modal.toast({ message: "未登录", duration: 0.5 });
            }
        },
        modifyInfo: function modifyInfo() {
            if (this.isLogin) {
                event.openURL(apis.apiURL.basepath + "index.js?#/modifyInfo");
            } else {
                modal.toast({ message: "未登录", duration: 0.5 });
            }
        },
        goDisclaimer: function goDisclaimer() {
            event.openURL(apis.apiURL.basepath + "index.js?#/disclaimer", "免责声明", "push");
        },
        goAboutUs: function goAboutUs() {
            event.openURL(apis.apiURL.basepath + "index.js?#/aboutUs", "关于我们", "push");
        },
        wxcCellClicked: function wxcCellClicked(e) {
            console.log(e);
            event.openURL(apis.apiURL.basepath + "index.js?#/contactUs", "联系我们", "push");
        },
        goUserInfo: function goUserInfo(e) {
            event.openURL(apis.apiURL.basepath + "index.js?#/personalInfo", "我的信息", "push");
        },
        goSettingPage: function goSettingPage(e) {
            event.openController("SettingViewController");
        },
        goLogin: function goLogin() {
            event.openURL(apis.apiURL.basepath + "index.js");
        },
        valedateExit: function valedateExit() {
            var self = this;
            modal.confirm({
                message: "确定退出当前账号？",
                okTitle: "确定",
                cancelTitle: "取消"
            }, function (e) {
                if (e == "确定") {
                    self.exitLogin();
                }
            });
        },
        exitLogin: function exitLogin() {
            var self = this;
            self.isShowLoad = true;
            apis.requireLogout(function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    event.isLoginGlobalEvent("login", false);
                    event.openURL(apis.apiURL.basepath + "index.js");
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        }
    }
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcCell = __webpack_require__(90);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcLoading = __webpack_require__(45);

var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

var _pcenterHeader = __webpack_require__(92);

var _pcenterHeader2 = _interopRequireDefault(_pcenterHeader);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var apis = __webpack_require__(37);
var common = __webpack_require__(125);
var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var globalEvent = weex.requireModule('globalEvent');
exports.default = {
    components: { WxcLoading: _wxcLoading2.default, pcenterHeader: _pcenterHeader2.default, WxcCell: _wxcCell2.default },
    data: function data() {
        return {
            fontSize: '15px',
            color: '#292b32',
            userNumber: '',
            userPassword: '',
            data: { title: "" },
            isShowLoad: false,
            resData: { account: "---", phone: "---", lastLoginTime: "---", email: "---", registTime: "---", pwd: "---" },
            interval: 0,
            type: 'default',
            loadingText: '加载中',
            isLogin: true,
            cellStyle: {
                height: "160px"
            }
        };
    },
    computed: {},
    created: function created() {
        var self = this;
        self.userInfo();
        globalEvent.addEventListener("login", function (e) {
            self.isLogin = e.ok;
            if (self.isLogin) {
                self.userInfo();
            }
        });
    },

    methods: {
        userInfo: function userInfo() {
            var self = this;
            self.isShowLoad = true;
            apis.requireUserInfo({}, function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    self.resData = res.data;
                    self.resData.pwd = "******";
                    if (res.data.email == null) {
                        self.resData.email = "---";
                    }
                    if (res.data.phone == null) {
                        self.resData.phone = res.data.email;
                    }
                    if (res.data.lastLoginTime != null) {

                        self.resData.lastLoginTime = _util2.default.formatDate(res.data.lastLoginTime);
                    }
                    if (res.data.registTime != null) {

                        self.resData.registTime = _util2.default.formatDate(res.data.registTime);
                    }
                    console.log(res.data);
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        },


        modifyPassword: function modifyPassword() {
            // this.$router.push({path:"/modifySendCode",query:{"title":"修改密码"}})
            if (this.isLogin) {
                event.openURL(apis.apiURL.basepath + "index.js?#/modifySendCode");
            } else {
                modal.toast({ message: "未登录", duration: 0.5 });
            }
        },
        modifyInfo: function modifyInfo() {
            if (this.isLogin) {
                event.openURL(apis.apiURL.basepath + "index.js?#/modifyInfo");
            } else {
                modal.toast({ message: "未登录", duration: 0.5 });
            }
        },
        wxcCellClicked: function wxcCellClicked(e) {
            console.log(e);
            event.openURL(apis.apiURL.basepath + "index.js?#/contactUs", "联系我们", "push");
        },
        goLogin: function goLogin() {
            event.openURL(apis.apiURL.basepath + "index.js");
        },
        valedateExit: function valedateExit() {
            var self = this;
            modal.confirm({
                message: "确定退出当前账号？",
                okTitle: "确定",
                cancelTitle: "取消"
            }, function (e) {
                if (e == "确定") {
                    self.exitLogin();
                }
            });
        },
        exitLogin: function exitLogin() {
            var self = this;
            self.isShowLoad = true;
            apis.requireLogout(function (res) {
                self.isShowLoad = false;
                if (res.respond.ok) {
                    event.isLoginGlobalEvent("login", false);
                    event.openURL(apis.apiURL.basepath + "index.js");
                } else {
                    modal.toast({ message: res.respond.msg, duration: 1 });
                }
            });
        }
    }
};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserHeader = __webpack_require__(372);

var _UserHeader2 = _interopRequireDefault(_UserHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { UserHeader: _UserHeader2.default },
  computed: {
    userId: function userId() {
      // if (this.$route && this.$route.params) {
      //   return this.$route.params.id
      // }
      return 'fengfeng';
    },
    user: function user() {
      // return this.$store.state.users[this.userId]
      return { userId: "fengfeng", created: "20180215", karma: "xfjdllgmmdd", about: "42523252" };
    }
  },

  created: function created() {
    //   this.$store.dispatch('FETCH_USER', { id: this.userId })
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

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "search_header": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 50,
    "widows": 750,
    "height": 114,
    "backgroundColor": "#ffe45f"
  },
  "back_click": {
    "width": 80,
    "height": 114
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30,
    "marginTop": 8
  },
  "input": {
    "width": 500,
    "height": 50,
    "borderWidth": 2,
    "borderColor": "#655B22",
    "borderRadius": 5,
    "paddingLeft": 20,
    "fontSize": "12wx",
    "backgroundColor": "#FFFFFF"
  },
  "div_search_image": {
    "width": 80,
    "height": 114
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30,
    "marginTop": 8
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 700,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 700,
    "fontSize": "15wx"
  },
  "source_time": {
    "width": 700,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 246 */
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
/* 247 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#ffffff",
    "alignItems": "stretch"
  },
  "title": {
    "padding": 16,
    "fontSize": 48,
    "textAlign": "center"
  },
  "list": {
    "alignItems": "stretch",
    "justifyContent": "flex-end",
    "border": "2px #ddd solid"
  },
  "form-group": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "stretch"
  },
  "msg-input": {
    "flex": 1,
    "padding": 16,
    "height": 72,
    "backgroundColor": "#eeeeee",
    "fontSize": 32,
    "border": "#000 1px solid",
    "width": 600
  },
  "button": {
    "flex": 0,
    "padding": 16,
    "height": 72,
    "fontSize": 36,
    "color": "#333333",
    "textAlign": "center",
    "paddingTop": 10,
    "paddingBottom": 10,
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "backgroundColor": "#dddddd",
    "opacity:focus": 0.7
  }
}

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = {
  "about_out": {
    "width": 750,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "bb8_logo": {
    "width": 450,
    "height": 102,
    "marginTop": 120,
    "marginBottom": 100
  },
  "main_centent": {
    "paddingTop": 20,
    "paddingLeft": 40,
    "paddingRight": 30
  },
  "text_one": {
    "color": "#3a3a3a",
    "fontSize": 28,
    "lineHeight": 55
  },
  "phone_image": {
    "width": 55,
    "height": 55,
    "marginRight": 20
  },
  "default_image": {
    "width": 90,
    "height": 90,
    "marginRight": 30
  },
  "personal_center": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "exit_btn_out": {
    "paddingTop": 10,
    "paddingBottom": 10,
    "paddingRight": 20,
    "paddingLeft": 20,
    "borderRadius": 10,
    "marginTop": 15,
    "borderColor": "#000000",
    "borderWidth": 1
  },
  "exit_btn": {
    "fontSize": 30
  },
  "user_name": {
    "fontSize": 30,
    "marginTop": 15
  },
  "personal_header": {
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 80,
    "paddingBottom": 80
  },
  "personal_out": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "user_logo": {
    "width": 120,
    "height": 120
  }
}

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 521,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 450,
    "marginRight": 20,
    "marginTop": 5,
    "marginLeft": 20
  },
  "title_sourece_time_match": {
    "flexDirection": "column",
    "width": 700,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "text_title_match": {
    "width": 700,
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 65,
    "marginTop": 5
  },
  "translate_result": {
    "width": 700,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "text_abstract": {
    "marginTop": 10,
    "fontSize": 23
  },
  "text_abstract_match": {
    "marginTop": 10,
    "width": 700,
    "fontSize": "12wx"
  },
  "source_time": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_time_match": {
    "width": 700,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 32,
    "height": 32,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 140
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = {
  "label_out": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "label_out_text": {
    "width": 220,
    "fontSize": 28
  },
  "personal_out": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": 750
  },
  "personal_center": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "personal_info": {
    "width": 750,
    "marginTop": 20,
    "marginBottom": 200
  },
  "phone_image": {
    "width": 40,
    "height": 40,
    "marginRight": 20
  }
}

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "search_header": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 50,
    "widows": 750,
    "height": 114,
    "backgroundColor": "#ffe45f"
  },
  "back_click": {
    "width": 80,
    "height": 114
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30,
    "marginTop": 8
  },
  "input": {
    "width": 500,
    "height": 50,
    "borderWidth": 2,
    "borderColor": "#655B22",
    "borderRadius": 5,
    "paddingLeft": 20,
    "fontSize": "12wx",
    "backgroundColor": "#FFFFFF"
  },
  "div_search_image": {
    "width": 80,
    "height": 114
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30,
    "marginTop": 8
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 480,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 480,
    "fontSize": "15wx"
  },
  "source_time": {
    "width": 480,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120,
    "marginRight": 30
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 10
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 470,
    "marginTop": 5,
    "marginRight": 10,
    "marginLeft": 10
  },
  "text_title": {
    "fontSize": "15wx"
  },
  "source_time": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 140
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 10
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 470,
    "marginTop": 5,
    "marginRight": 10,
    "marginLeft": 10
  },
  "text_title": {
    "fontSize": "15wx"
  },
  "source_time": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 140
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 10
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 470,
    "marginTop": 5,
    "marginRight": 10,
    "marginLeft": 10
  },
  "text_title": {
    "fontSize": "15wx"
  },
  "source_time": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 140
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 480,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 480,
    "fontSize": "15wx"
  },
  "source_time": {
    "width": 480,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120,
    "marginRight": 30
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = {
  "small_text": {
    "fontSize": 24
  },
  "login_footer_default": {
    "width": 750,
    "position": "fixed",
    "bottom": 50,
    "left": 0,
    "right": 0,
    "zIndex": 10,
    "textAlign": "center",
    "fontSize": 18
  },
  "login_footer": {
    "width": 750,
    "position": "fixed",
    "bottom": 150,
    "left": 0,
    "right": 0,
    "zIndex": 10,
    "textAlign": "center",
    "fontSize": 18
  },
  "btn_login": {
    "backgroundColor": "#ffe45f",
    "marginTop": 50
  },
  "login_out": {
    "width": 750,
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": 50
  },
  "bb8_logo": {
    "width": 120,
    "height": 58,
    "marginTop": 120,
    "marginBottom": 160
  },
  "default_bb8_logo": {
    "width": 120,
    "height": 58,
    "marginTop": 100,
    "marginBottom": 130
  },
  "login_bb8": {
    "width": 240,
    "height": 50
  },
  "login_title": {
    "paddingTop": 30
  },
  "input_wrapper": {
    "width": 650,
    "marginLeft": 100,
    "marginRight": 100,
    "marginBottom": 40
  },
  "input": {
    "height": 85,
    "width": 650,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_img": {
    "position": "absolute",
    "top": 19,
    "left": 18,
    "width": 45,
    "height": 45
  },
  "input_login": {
    "height": 85,
    "width": 650,
    "borderRadius": 10,
    "marginTop": 80
  },
  "input_login_text": {
    "height": 85,
    "width": 650,
    "textAlign": "center",
    "lineHeight": 85,
    "fontSize": 30
  },
  "login_text": {
    "fontSize": 30
  },
  "input_forget": {
    "position": "absolute",
    "left": 30
  },
  "input_register_out": {
    "position": "absolute",
    "right": 10,
    "height": 40,
    "fontSize": 24
  },
  "input_register": {
    "fontSize": 30
  },
  "register_out": {
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "footer_out": {
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "login_bb8_out": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginBottom": 50
  }
}

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "search_header": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 50,
    "widows": 750,
    "height": 114,
    "backgroundColor": "#ffe45f"
  },
  "back_click": {
    "width": 80,
    "height": 114
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30,
    "marginTop": 8
  },
  "input": {
    "width": 500,
    "height": 50,
    "borderWidth": 2,
    "borderColor": "#655B22",
    "borderRadius": 5,
    "paddingLeft": 20,
    "fontSize": "12wx",
    "backgroundColor": "#FFFFFF"
  },
  "div_search_image": {
    "width": 80,
    "height": 114
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30,
    "marginTop": 8
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 550,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 550,
    "fontSize": "14wx"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 550,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "source_time": {
    "width": 550,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120
  },
  "typical_name": {
    "fontSize": "16wx",
    "marginTop": 10,
    "width": 120
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = {
  "hint_out": {
    "width": 650,
    "justifyContent": "flex-start"
  },
  "hint_text": {
    "fontSize": 25,
    "color": "#BCC1C4"
  },
  "login_header": {
    "marginTop": 120
  },
  "register_footer": {
    "width": 100,
    "position": "fixed",
    "bottom": 30,
    "textAlign": "center"
  },
  "btn_register": {
    "backgroundColor": "#ffe45f",
    "marginTop": 50
  },
  "register_out": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": 100
  },
  "bb8_logo": {
    "width": 450,
    "height": 102,
    "marginTop": 150,
    "marginBottom": 150
  },
  "register_title": {
    "paddingTop": 30,
    "marginBottom": 100
  },
  "input_wrapper": {
    "width": 650,
    "marginLeft": 100,
    "marginRight": 100,
    "marginBottom": 40
  },
  "send_code_out": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "input_code_out": {
    "width": 450,
    "marginRight": 30
  },
  "input_code_btn": {
    "width": 170,
    "textAlign": "center"
  },
  "input": {
    "height": 85,
    "width": 650,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_code": {
    "height": 85,
    "width": 450,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_img": {
    "position": "absolute",
    "top": 19,
    "left": 18,
    "width": 45,
    "height": 45
  },
  "input_register": {
    "height": 85,
    "width": 650,
    "borderRadius": 10,
    "marginTop": 60
  },
  "input_register_text": {
    "height": 85,
    "width": 650,
    "textAlign": "center",
    "lineHeight": 85,
    "fontSize": 30
  },
  "register_text": {
    "fontSize": 30
  },
  "send_code": {
    "borderRadius": 10,
    "height": 85,
    "lineHeight": 85,
    "width": 170,
    "textAlign": "center",
    "fontSize": 30
  },
  "input_forget": {
    "position": "absolute",
    "left": 30
  }
}

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = {
  "main_out": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "main_centent": {
    "paddingTop": 20,
    "paddingLeft": 40,
    "paddingRight": 30
  },
  "text_one": {
    "color": "#3a3a3a",
    "fontSize": 28,
    "lineHeight": 55
  },
  "phone_image": {
    "width": 55,
    "height": 55,
    "marginRight": 20
  },
  "default_image": {
    "width": 90,
    "height": 90,
    "marginRight": 30
  },
  "personal_center": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "exit_btn_out": {
    "paddingTop": 10,
    "paddingBottom": 10,
    "paddingRight": 20,
    "paddingLeft": 20,
    "borderRadius": 10,
    "marginTop": 15,
    "borderColor": "#000000",
    "borderWidth": 1
  },
  "exit_btn": {
    "fontSize": 30
  },
  "user_name": {
    "fontSize": 30,
    "marginTop": 15
  },
  "personal_header": {
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 80,
    "paddingBottom": 80
  },
  "personal_out": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "user_logo": {
    "width": 120,
    "height": 120
  }
}

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "search_header": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 50,
    "widows": 750,
    "height": 114,
    "backgroundColor": "#ffe45f"
  },
  "back_click": {
    "width": 80,
    "height": 114
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30,
    "marginTop": 8
  },
  "input": {
    "width": 500,
    "height": 50,
    "borderWidth": 2,
    "borderColor": "#655B22",
    "borderRadius": 5,
    "paddingLeft": 20,
    "fontSize": "12wx",
    "backgroundColor": "#FFFFFF"
  },
  "div_search_image": {
    "width": 80,
    "height": 114
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30,
    "marginTop": 8
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 550,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 550,
    "fontSize": "14wx"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 550,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "random_image_div": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginTop": 20
  },
  "random_image": {
    "width": 172,
    "height": 172,
    "marginRight": 10,
    "marginBottom": 10
  },
  "source_time": {
    "width": 550,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120
  },
  "typical_name": {
    "fontSize": "16wx",
    "marginTop": 10,
    "width": 120
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 266 */,
/* 267 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 550,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 550,
    "fontSize": "14wx"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 550,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "source_time": {
    "width": 550,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120
  },
  "typical_name": {
    "fontSize": "16wx",
    "marginTop": 10,
    "width": 120
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = {
  "cell_login": {
    "fontSize": 40
  },
  "personal_info": {
    "width": 750,
    "marginTop": 20,
    "marginBottom": 200
  },
  "phone_image": {
    "width": 50,
    "height": 50,
    "marginRight": 20
  },
  "default_image": {
    "width": 90,
    "height": 90,
    "marginRight": 30
  },
  "personal_center": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "exit_btn_out": {
    "paddingTop": 10,
    "paddingBottom": 10,
    "paddingRight": 20,
    "paddingLeft": 20,
    "borderRadius": 10,
    "marginTop": 15,
    "borderColor": "#000000",
    "borderWidth": 1
  },
  "exit_btn": {
    "fontSize": 30
  },
  "user_name": {
    "fontSize": 30,
    "marginTop": 15
  },
  "personal_header": {
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 80,
    "paddingBottom": 80
  },
  "personal_out": {
    "width": 750,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "user_logo": {
    "width": 120,
    "height": 120
  }
}

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 270 */,
/* 271 */
/***/ (function(module, exports) {

module.exports = {
  "main_out": {
    "width": 750
  },
  "main_centent": {
    "paddingTop": 20,
    "paddingLeft": 40,
    "paddingRight": 30
  },
  "text_one": {
    "color": "#3a3a3a",
    "fontSize": 28,
    "lineHeight": 55
  },
  "phone_image": {
    "width": 55,
    "height": 55,
    "marginRight": 20
  },
  "default_image": {
    "width": 90,
    "height": 90,
    "marginRight": 30
  },
  "personal_center": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "exit_btn_out": {
    "paddingTop": 10,
    "paddingBottom": 10,
    "paddingRight": 20,
    "paddingLeft": 20,
    "borderRadius": 10,
    "marginTop": 15,
    "borderColor": "#000000",
    "borderWidth": 1
  },
  "exit_btn": {
    "fontSize": 30
  },
  "user_name": {
    "fontSize": 30,
    "marginTop": 15
  },
  "personal_header": {
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 80,
    "paddingBottom": 80
  },
  "personal_out": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "user_logo": {
    "width": 120,
    "height": 120
  }
}

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": 90,
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": 1,
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#fafafa"
  },
  "w-ipx": {
    "height": 140
  },
  "bar-item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": 22,
    "paddingTop": 2
  },
  "bar-ic": {
    "color": "#666666",
    "textAlign": "center",
    "paddingTop": 14,
    "fontSize": 38
  },
  "bar-active": {
    "color": "#b4282d"
  },
  "i-notice": {
    "position": "absolute",
    "top": 10,
    "right": 30,
    "height": 30,
    "width": 30,
    "borderRadius": 100,
    "fontSize": 26,
    "lineHeight": 30,
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#ff0000"
  },
  "notice-dot": {
    "position": "absolute",
    "top": 15,
    "right": 40,
    "height": 15,
    "width": 15,
    "borderRadius": 100,
    "backgroundColor": "#ff0000"
  }
}

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = {
  "login_header": {
    "marginTop": 120
  },
  "register_footer": {
    "width": 100,
    "position": "fixed",
    "bottom": 30,
    "textAlign": "center"
  },
  "btn_register": {
    "backgroundColor": "#ffe45f",
    "marginTop": 50
  },
  "register_out": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": 100
  },
  "bb8_logo": {
    "width": 450,
    "height": 102,
    "marginTop": 150,
    "marginBottom": 150
  },
  "register_title": {
    "paddingTop": 30,
    "marginBottom": 100
  },
  "input_wrapper": {
    "width": 650,
    "marginLeft": 100,
    "marginRight": 100,
    "marginBottom": 40
  },
  "send_code_out": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "input_code_out": {
    "width": 450,
    "marginRight": 30
  },
  "input_code_btn": {
    "width": 170,
    "textAlign": "center"
  },
  "input": {
    "height": 85,
    "width": 650,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_code": {
    "height": 85,
    "width": 450,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_img": {
    "position": "absolute",
    "top": 19,
    "left": 18,
    "width": 45,
    "height": 45
  },
  "input_register": {
    "height": 85,
    "width": 650,
    "borderRadius": 10,
    "marginTop": 60
  },
  "input_register_text": {
    "height": 85,
    "width": 650,
    "textAlign": "center",
    "lineHeight": 85,
    "fontSize": 30
  },
  "register_text": {
    "fontSize": 30
  },
  "send_code": {
    "borderRadius": 10,
    "height": 85,
    "lineHeight": 85,
    "width": 170,
    "textAlign": "center",
    "fontSize": 30
  },
  "input_forget": {
    "position": "absolute",
    "left": 30
  }
}

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = {
  "login_text": {
    "fontSize": 35
  },
  "footer_null": {
    "height": 60
  },
  "label_out": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "width": 750
  },
  "label_out_more": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "label_out_text": {
    "width": 220,
    "fontSize": 27
  },
  "my_module_out": {
    "width": 750,
    "backgroundColor": "#FFFFFF",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "my_module_content": {
    "width": 600,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "paddingTop": 50,
    "paddingBottom": 50
  },
  "module_item": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "alignContent": "center"
  },
  "module_image": {
    "width": 50,
    "height": 50
  },
  "line_gary": {
    "width": 500,
    "height": 1,
    "backgroundColor": "#808080"
  },
  "cell_login": {
    "fontSize": 40
  },
  "personal_info": {
    "width": 750,
    "marginTop": 20,
    "marginBottom": 200
  },
  "phone_image": {
    "width": 40,
    "height": 40,
    "marginRight": 20
  },
  "default_image": {
    "width": 90,
    "height": 90,
    "marginRight": 30
  },
  "personal_center": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1
  },
  "contact_us": {
    "width": 750,
    "borderTopColor": "#E2E2E2",
    "borderTopWidth": 1,
    "marginTop": 20
  },
  "exit_btn_out": {
    "paddingTop": 10,
    "paddingBottom": 10,
    "paddingRight": 20,
    "paddingLeft": 20,
    "borderRadius": 10,
    "marginTop": 15,
    "borderColor": "#000000",
    "borderWidth": 1
  },
  "exit_btn": {
    "fontSize": 30
  },
  "user_name": {
    "fontSize": 30,
    "marginTop": 15
  },
  "personal_header": {
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 80,
    "paddingBottom": 50
  },
  "personal_out": {
    "width": 750,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "user_logo": {
    "width": 120,
    "height": 120
  },
  "desc_text": {
    "flex": 1,
    "color": "#808080",
    "fontSize": 24,
    "textAlign": "right",
    "paddingRight": 50
  }
}

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = {
  "hint_out": {
    "width": 650,
    "justifyContent": "flex-start"
  },
  "hint_text": {
    "fontSize": 25,
    "color": "#BCC1C4"
  },
  "login_header": {
    "marginTop": 120
  },
  "register_footer": {
    "width": 100,
    "position": "fixed",
    "bottom": 30,
    "textAlign": "center"
  },
  "btn_register": {
    "backgroundColor": "#ffe45f",
    "marginTop": 50
  },
  "register_out": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": 100
  },
  "bb8_logo": {
    "width": 450,
    "height": 102,
    "marginTop": 150,
    "marginBottom": 150
  },
  "register_title": {
    "paddingTop": 30,
    "marginBottom": 100
  },
  "input_wrapper": {
    "width": 650,
    "marginLeft": 100,
    "marginRight": 100,
    "marginBottom": 40
  },
  "send_code_out": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "input_code_out": {
    "width": 450,
    "marginRight": 30
  },
  "input_code_btn": {
    "width": 170,
    "textAlign": "center"
  },
  "input": {
    "height": 85,
    "width": 650,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_code": {
    "height": 85,
    "width": 450,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_img": {
    "position": "absolute",
    "top": 19,
    "left": 18,
    "width": 45,
    "height": 45
  },
  "input_register": {
    "height": 85,
    "width": 650,
    "borderRadius": 10,
    "marginTop": 60
  },
  "input_register_text": {
    "height": 85,
    "width": 650,
    "textAlign": "center",
    "lineHeight": 85,
    "fontSize": 30
  },
  "register_text": {
    "fontSize": 30
  },
  "send_code": {
    "borderRadius": 10,
    "height": 85,
    "lineHeight": 85,
    "width": 170,
    "textAlign": "center",
    "fontSize": 30
  },
  "input_forget": {
    "position": "absolute",
    "left": 30
  }
}

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
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
  "cell-button": {
    "paddingBottom": 18
  },
  "slogan": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "backgroundColor": "#ffffff"
  },
  "i-slg": {
    "height": 66,
    "fontSize": 26,
    "paddingTop": 16,
    "flex": 1,
    "textAlign": "center",
    "color": "#b4282d"
  }
}

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "search_header": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 50,
    "widows": 750,
    "height": 114,
    "backgroundColor": "#ffe45f"
  },
  "back_click": {
    "width": 80,
    "height": 114
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30,
    "paddingTop": 8
  },
  "input": {
    "width": 500,
    "height": 55,
    "borderWidth": 2,
    "borderColor": "#655B22",
    "borderRadius": 5,
    "paddingLeft": 20,
    "fontSize": "12wx",
    "backgroundColor": "#FFFFFF"
  },
  "div_search_image": {
    "width": 80,
    "height": 114
  },
  "search_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30,
    "marginTop": 8
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 10
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 470,
    "marginTop": 5,
    "marginRight": 10,
    "marginLeft": 10
  },
  "text_title": {
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "source_time": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 140
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = {
  "login_header": {
    "marginTop": 120
  },
  "register_footer": {
    "width": 100,
    "position": "fixed",
    "bottom": 30,
    "textAlign": "center"
  },
  "btn_register": {
    "backgroundColor": "#ffe45f",
    "marginTop": 50
  },
  "register_out": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": 100
  },
  "bb8_logo": {
    "width": 450,
    "height": 102,
    "marginTop": 150,
    "marginBottom": 150
  },
  "register_title": {
    "paddingTop": 30,
    "marginBottom": 100
  },
  "input_wrapper": {
    "width": 650,
    "marginLeft": 100,
    "marginRight": 100,
    "marginBottom": 40
  },
  "send_code_out": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "input_code_out": {
    "width": 450,
    "marginRight": 30
  },
  "input_code_btn": {
    "width": 170,
    "textAlign": "center"
  },
  "input": {
    "height": 85,
    "width": 650,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_code": {
    "height": 85,
    "width": 450,
    "paddingLeft": 90,
    "paddingTop": 15,
    "paddingBottom": 15,
    "borderColor": "#eeeeef",
    "borderRadius": 10,
    "outline": "none"
  },
  "input_img": {
    "position": "absolute",
    "top": 19,
    "left": 18,
    "width": 45,
    "height": 45
  },
  "input_register": {
    "height": 85,
    "width": 650,
    "borderRadius": 10,
    "marginTop": 60
  },
  "input_register_text": {
    "height": 85,
    "width": 650,
    "textAlign": "center",
    "lineHeight": 85,
    "fontSize": 30
  },
  "register_text": {
    "fontSize": 30
  },
  "send_code": {
    "borderRadius": 10,
    "height": 85,
    "lineHeight": 85,
    "width": 170,
    "textAlign": "center",
    "fontSize": 30
  },
  "input_forget": {
    "position": "absolute",
    "left": 30
  }
}

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 550,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 550,
    "fontSize": "14wx"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 550,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "random_image_div": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginTop": 20
  },
  "random_image": {
    "width": 172,
    "height": 172,
    "marginRight": 10,
    "marginBottom": 10
  },
  "source_time": {
    "width": 550,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120
  },
  "typical_name": {
    "fontSize": "16wx",
    "marginTop": 10,
    "width": 120
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = {
  "user-info": {
    "paddingTop": 60,
    "paddingLeft": 80,
    "paddingRight": 60
  },
  "user-name": {
    "fontSize": 72,
    "fontWeight": "bold",
    "marginBottom": 60
  },
  "loading-text": {
    "fontFamily": "Verdana, Geneva, sans-serif",
    "fontSize": 44,
    "color": "#BBBBBB"
  },
  "meta-label": {
    "fontFamily": "Verdana, Geneva, sans-serif",
    "fontSize": 32,
    "marginBottom": 15,
    "color": "#333333"
  },
  "user-about": {
    "marginTop": 20,
    "fontSize": 28,
    "color": "#666666"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "fbs": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": 1000,
    "marginBottom": -1000
  },
  "scroller": {
    "marginBottom": 90
  },
  "ml-ipx": {
    "marginBottom": 140
  },
  "cell-button": {
    "marginBottom": 18
  },
  "header": {
    "height": 380
  },
  "h-ipx": {
    "height": 420
  },
  "header-bg": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": 500,
    "width": 750
  },
  "bg2": {
    "top": 500
  },
  "bg3": {
    "top": 1000
  },
  "i-photo": {
    "position": "absolute",
    "bottom": 60,
    "left": 30,
    "height": 130,
    "width": 130,
    "borderRadius": 130
  },
  "i-name": {
    "position": "absolute",
    "bottom": 120,
    "left": 190,
    "height": 50,
    "width": 300,
    "fontSize": 38,
    "color": "#ffffff"
  },
  "b-tlt": {
    "position": "absolute",
    "bottom": 70,
    "left": 190,
    "height": 40,
    "width": 350,
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "i-tag": {
    "width": 30,
    "height": 30,
    "fontSize": 24,
    "paddingTop": 2,
    "marginRight": 6,
    "borderRadius": 4
  },
  "tag-e": {
    "width": 32,
    "height": 32
  },
  "tag-v8": {
    "color": "#ffffff",
    "backgroundColor": "#b29e75",
    "textAlign": "center"
  },
  "txt-tag": {
    "color": "#b4a078",
    "flex": 1,
    "height": 40,
    "fontSize": 28,
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "b-qrcode": {
    "position": "absolute",
    "bottom": 80,
    "right": 40,
    "height": 80,
    "width": 80,
    "borderRadius": 70,
    "textAlign": "center",
    "fontSize": 40,
    "paddingTop": 18,
    "color": "#ffffff",
    "backgroundColor": "rgba(255,255,255,0.3)"
  },
  "s-box": {
    "paddingLeft": 26,
    "backgroundColor": "#ffffff"
  },
  "box-tlt": {
    "height": 94
  },
  "box-txt": {
    "fontSize": 26,
    "paddingTop": 34,
    "color": "#333333"
  },
  "i-box-in": {
    "position": "absolute",
    "top": 34,
    "right": 30,
    "color": "#333333"
  },
  "box-line": {
    "height": 132,
    "display": "flex",
    "paddingRight": 30,
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "i-box-l": {
    "width": 130,
    "height": 132
  },
  "i-box-icon": {
    "fontSize": 50,
    "textAlign": "center",
    "paddingTop": 15,
    "height": 79,
    "paddingBottom": 10,
    "color": "#666666"
  },
  "i-box-tlt": {
    "fontSize": 26,
    "textAlign": "center",
    "color": "#666666"
  },
  "line-serve": {
    "paddingTop": 20,
    "height": 150
  },
  "border-bottom": {
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0,0,0,0.15)"
  },
  "i-c-orange": {
    "color": "#ff744d"
  },
  "i-c-yellow": {
    "color": "#f6a121"
  },
  "i-c-blue": {
    "color": "#689de5"
  }
}

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 700,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 700,
    "fontSize": "15wx"
  },
  "source_time": {
    "width": 700,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 550,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 550,
    "fontSize": "14wx"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 550,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "random_image_div": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginTop": 20
  },
  "random_image": {
    "width": 172,
    "height": 172,
    "marginRight": 10,
    "marginBottom": 10
  },
  "source_time": {
    "width": 550,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 120,
    "height": 120
  },
  "typical_name": {
    "fontSize": "16wx",
    "marginTop": 10,
    "width": 120
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  },
  "login_botton": {
    "position": "absolute",
    "top": 500,
    "left": 250
  },
  "wxc-demo": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0
  }
}

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "zIndex": 101
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30
  },
  "back_click": {
    "width": 80,
    "height": 114
  },
  "div_share_image": {
    "width": 80,
    "height": 114
  },
  "share_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30
  },
  "w-ipx": {
    "height": 154,
    "paddingTop": 84
  },
  "container": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 55,
    "backgroundColor": "#ffe45f",
    "width": 750,
    "height": 114
  },
  "flash_text": {
    "fontSize": "18wx",
    "color": "#655b22",
    "textAlign": "center"
  },
  "content": {
    "backgroundColor": "#FFFFFF"
  }
}

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 188,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "text_refresh": {
    "fontSize": "12wx"
  },
  "text_laoding": {
    "fontSize": "12wx"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "flex-end",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8e1ef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 10
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 470,
    "marginTop": 5,
    "marginRight": 10,
    "marginLeft": 10
  },
  "text_title": {
    "width": 480,
    "fontSize": "15wx"
  },
  "source_time": {
    "width": 480,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_set_color": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "grey_color": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#787878",
    "fontSize": "14wx"
  },
  "source": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "color": "#36a0ff",
    "fontSize": "14wx"
  },
  "time_hit": {
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row"
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 20,
    "height": 20,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 140
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "zIndex": 101
  },
  "wrapperipx": {
    "position": "fixed",
    "top": 132,
    "left": 0,
    "right": 0,
    "zIndex": 101
  },
  "back_img": {
    "width": 35,
    "height": 35,
    "marginLeft": 30
  },
  "back_click": {
    "width": 100,
    "height": 114
  },
  "back_clickipx": {
    "width": 100,
    "height": 174
  },
  "div_share_image": {
    "width": 100,
    "height": 114
  },
  "div_share_imageipx": {
    "width": 100,
    "height": 174
  },
  "share_img": {
    "width": 35,
    "height": 35,
    "marginRight": 30
  },
  "container": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 55,
    "backgroundColor": "#ffe45f",
    "width": 750,
    "height": 114
  },
  "containeripx": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 115,
    "backgroundColor": "#ffe45f",
    "width": 750,
    "height": 174
  },
  "flash_text": {
    "fontSize": "18wx",
    "color": "#655b22",
    "textAlign": "center"
  },
  "content": {
    "backgroundColor": "#FFFFFF"
  }
}

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 521,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 480,
    "marginTop": 5,
    "marginRight": 10
  },
  "title_sourece_time_match": {
    "flexDirection": "column",
    "width": 700,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 480,
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "text_title_match": {
    "width": 700,
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 700,
    "fontSize": 25,
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "text_abstract": {
    "marginTop": 10,
    "width": 480,
    "fontSize": "12wx"
  },
  "text_abstract_match": {
    "marginTop": 10,
    "width": 700,
    "fontSize": "12wx"
  },
  "source_time": {
    "width": 480,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_time_match": {
    "width": 700,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 32,
    "height": 32,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 120,
    "paddingRight": 30
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 521,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 480,
    "marginTop": 5,
    "marginRight": 10
  },
  "title_sourece_time_match": {
    "flexDirection": "column",
    "width": 700,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 480,
    "fontSize": 25,
    "fontWeight": "700"
  },
  "text_title_match": {
    "width": 700,
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 73,
    "marginTop": 5
  },
  "translate_result": {
    "width": 700,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "text_abstract": {
    "marginTop": 10,
    "width": 480,
    "fontSize": "12wx"
  },
  "text_abstract_match": {
    "marginTop": 10,
    "width": 700,
    "fontSize": "12wx"
  },
  "source_time": {
    "width": 480,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_time_match": {
    "width": 700,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 32,
    "height": 32,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 120,
    "paddingRight": 30
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 521,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "refreshOut": {
    "width": 750,
    "paddingTop": 10,
    "paddingBottom": 10,
    "alignItems": "center"
  },
  "indicator": {
    "width": 35,
    "height": 35,
    "color": "#808080",
    "marginBottom": 30
  },
  "information_content": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8eaef",
    "paddingTop": 30,
    "paddingBottom": 30,
    "paddingRight": 20,
    "paddingLeft": 20
  },
  "title_sourece_time": {
    "flexDirection": "column",
    "width": 480,
    "marginTop": 5,
    "marginRight": 10
  },
  "title_sourece_time_match": {
    "flexDirection": "column",
    "width": 700,
    "marginTop": 5,
    "marginRight": 10
  },
  "text_title": {
    "width": 480,
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "text_title_match": {
    "width": 700,
    "fontSize": "14wx",
    "fontWeight": "700"
  },
  "translate_text": {
    "fontSize": "14wx",
    "paddingTop": 5,
    "paddingBottom": 5,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 5,
    "width": 65,
    "marginTop": 5
  },
  "translate_result": {
    "width": 700,
    "fontSize": "14wx",
    "marginTop": 10,
    "backgroundColor": "#ededed"
  },
  "text_abstract": {
    "marginTop": 10,
    "width": 480,
    "fontSize": "12wx"
  },
  "text_abstract_match": {
    "marginTop": 10,
    "width": 700,
    "fontSize": "12wx"
  },
  "source_time": {
    "width": 480,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "source_time_match": {
    "width": 700,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": 25
  },
  "time_ago": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginRight": 10
  },
  "clock_image": {
    "width": 32,
    "height": 32,
    "marginRight": 5
  },
  "text_time_ago": {
    "color": "#787878",
    "fontSize": "12wx"
  },
  "content_image": {
    "width": 250,
    "height": 120,
    "paddingRight": 30
  },
  "loadingOut": {
    "flexDirection": "row",
    "width": 750,
    "padding": 30,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "load_indicator": {
    "width": 35,
    "height": 35,
    "color": "#454545",
    "marginRight": 10
  }
}

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 521,
    "left": 0,
    "right": 0
  },
  "synopsis_text": {
    "paddingTop": 20,
    "paddingBottom": 20,
    "paddingLeft": 20,
    "paddingRight": 20,
    "fontSize": 25,
    "color": "#000000"
  }
}

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = {
  "main-list": {
    "position": "fixed",
    "top": 168,
    "bottom": 90,
    "left": 0,
    "right": 0
  }
}

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["search_header"]
  }, [_c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return.png')
    }
  })]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": _vm.searchHolder,
      "placeholder": "请输入关键字"
    },
    on: {
      "input": _vm.onChange
    }
  }), _c('div', {
    staticClass: ["div_search_image"],
    on: {
      "click": _vm.searchImageClick
    }
  }, [_c('image', {
    staticClass: ["search_img"],
    attrs: {
      "src": _vm.get_img_path('search.png')
    }
  })])]), _c('list', [(_vm.isSearch) ? _c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1) : _vm._e(), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v("来源:" + _vm._s(item.source))]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('Time.png'),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('click.png')
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "次点击")])])])])])])])
  }), (_vm.isSearch) ? _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)]) : _vm._e()], 2), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 297 */
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
/* 298 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.messages), function(msg) {
    return _c('cell', {
      key: msg.key,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('message', {
      attrs: {
        "body": msg.body,
        "name": msg.name,
        "mine": _vm.userName === msg.name
      }
    })], 1)
  })), _c('div', {
    staticClass: ["form-group"]
  }, [_c('input', {
    staticClass: ["msg-input"],
    attrs: {
      "type": "text",
      "value": (_vm.msgText)
    },
    on: {
      "input": function($event) {
        _vm.msgText = $event.target.attr.value
      }
    }
  }), _c('text', {
    staticClass: ["button"],
    attrs: {
      "value": "send",
      "type": "primary"
    },
    on: {
      "click": _vm.send
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('candy-header'), _c('candy-content')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('scroller', [_c('pcenterHeader'), _c('div', {
    staticClass: ["about_out"]
  }, [_c('image', {
    staticClass: ["bb8_logo"],
    attrs: {
      "resize": "cover",
      "src": _vm.get_img_path('bb8_logo.png')
    }
  }), _c('div', {
    staticClass: ["main_centent"]
  }, [_c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textone))])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('alertfocus-header', {
    attrs: {
      "memberId": _vm.memberId
    }
  }), _c('alertfocus-tab', {
    attrs: {
      "category": _vm.category,
      "memberId": _vm.memberId,
      "source": _vm.source
    }
  }), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 302 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": item.banner,
        "resize": "cover"
      }
    }), _c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["text_abstract"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.abs))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_gray"]
  }, [_c('scroller', [_c('pcenterHeader'), _c('div', {
    staticClass: ["personal_out"]
  }, [_c('div', {
    staticClass: ["personal_center"]
  }, [_c('wxc-cell', {
    attrs: {
      "desc": "3046951607",
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("交易所/新币对接")])])]), _c('wxc-cell', {
    attrs: {
      "desc": "1143758324",
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("广告合作")])])]), _c('wxc-cell', {
    attrs: {
      "desc": "2818392801",
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("商务合作")])])]), _c('wxc-cell', {
    attrs: {
      "desc": "2026927046",
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("51BB8客服")])])]), _c('wxc-cell', {
    attrs: {
      "desc": "service@51bb8.com",
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('mailbox.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("联系邮箱")])])]), _c('wxc-cell', {
    attrs: {
      "desc": "http://www.51bb8.com",
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('network.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("官方网址")])])]), _c('div', {
    staticClass: ["personal_info"]
  }, [_c('wxc-cell', {
    attrs: {
      "title": "关于我们",
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.goAboutUs()
      }
    }
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('about_us.png')
    },
    slot: "label"
  })]), _c('wxc-cell', {
    attrs: {
      "title": "免责声明",
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.goDisclaimer()
      }
    }
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('declare.png')
    },
    slot: "label"
  })])], 1)], 1)])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["search_header"]
  }, [_c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return.png')
    }
  })]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": _vm.searchHolder,
      "placeholder": "请输入关键字"
    },
    on: {
      "input": _vm.onChange
    }
  }), _c('div', {
    staticClass: ["div_search_image"],
    on: {
      "click": _vm.searchImageClick
    }
  }, [_c('image', {
    staticClass: ["search_img"],
    attrs: {
      "src": _vm.get_img_path('search.png')
    }
  })])]), _c('list', [(_vm.isSearch) ? _c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1) : _vm._e(), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v("来源:" + _vm._s(item.source))]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('Time.png'),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('click.png')
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "次点击")])])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member.logo),
        "resize": "cover"
      }
    })])])
  }), (_vm.isSearch) ? _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)]) : _vm._e()], 2), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header'), _c('top-channel'), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId)
        }
      }
    }, [_vm._v(_vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member ? item.member.logo : ''),
        "resize": "cover"
      }
    })])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member.logo),
        "resize": "cover"
      }
    })])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime ? item.ctime : '')))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member ? item.member.logo : ''),
        "resize": "cover"
      }
    })])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member.logo),
        "resize": "cover"
      }
    })])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('loginHeader', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isshow),
      expression: "isshow"
    }],
    attrs: {
      "data": _vm.data
    }
  }), _c('div', {
    staticClass: ["login_out", "bg_white"]
  }, [_c('image', {
    class: [_vm.isIPhoneX ? 'bb8_logo' : 'default_bb8_logo'],
    attrs: {
      "resize": "cover",
      "src": _vm.get_img_path('login_biwei.png')
    }
  }), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "onchange": "onchangeUserNumber",
      "type": "text",
      "placeholder": "请输入用户名/手机号/邮箱",
      "value": "",
      "value": (_vm.userNumber)
    },
    on: {
      "input": function($event) {
        _vm.userNumber = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('mobile.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "onchange": "onchangeUserPassword",
      "type": "password",
      "placeholder": "请输入密码",
      "value": "",
      "value": (_vm.userPassword)
    },
    on: {
      "input": function($event) {
        _vm.userPassword = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('password.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('div', {
    staticClass: ["input_register_out"]
  }, [_c('div', {
    staticClass: ["register_out"]
  }, [_c('text', {
    staticClass: ["input_register", "color1"],
    on: {
      "click": function($event) {
        _vm.jump('/register')
      }
    }
  }, [_vm._v("注册 /")]), _c('text', {
    staticClass: ["input_register", "color1"],
    on: {
      "click": function($event) {
        _vm.findPassword()
      }
    }
  }, [_vm._v(" 忘记密码?")])])])]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('div', {
    staticClass: ["input_login", "bg"],
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_c('text', {
    staticClass: ["input_login_text", "color1"]
  }, [_vm._v("登录")])])]), _c('div', {
    class: [_vm.isIPhoneX ? 'login_footer' : 'login_footer_default']
  }, [_c('div', {
    staticClass: ["login_bb8_out"]
  }, [_c('image', {
    staticClass: ["login_bb8"],
    attrs: {
      "resize": "cover",
      "src": _vm.get_img_path('login_bb8.png')
    }
  })]), _c('div', {
    staticClass: ["footer_out"],
    on: {
      "click": function($event) {
        _vm.openProtocol()
      }
    }
  }, [_c('text', {
    staticClass: ["color2", "small_text"]
  }, [_vm._v("登录及同意")]), _c('text', {
    staticClass: ["color1", "small_text"]
  }, [_vm._v("《51BB8财经免责声明》")])])])]), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["search_header"]
  }, [_c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return.png')
    }
  })]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": _vm.searchHolder,
      "placeholder": "请输入关键字"
    },
    on: {
      "input": _vm.onChange
    }
  }), _c('div', {
    staticClass: ["div_search_image"],
    on: {
      "click": _vm.searchImageClick
    }
  }, [_c('image', {
    staticClass: ["search_img"],
    attrs: {
      "src": _vm.get_img_path('search.png')
    }
  })])]), _c('list', [(_vm.isSearch) ? _c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1) : _vm._e(), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["typical_image_name"]
    }, [_c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.member.logo),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["typical_name"]
    }, [_vm._v(_vm._s(item.member.name != null ? item.member.name : item.member.screeName))])]), _c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"]
    }, [_vm._v(_vm._s(item.content))]), _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["source_time"]
    }, [_c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v("来源:" + _vm._s(item.member.screeName != null ? item.member.screeName : item.member.name) + "@" + _vm._s(item.source))]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('Time.png'),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('click.png')
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "次点击")])])])])])])])
  }), (_vm.isSearch) ? _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)]) : _vm._e()], 2), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('loginHeader', {
    attrs: {
      "data": _vm.data
    }
  }), _c('div', {
    staticClass: ["register_out", "bg_white"]
  }, [_c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名",
      "value": "",
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        _vm.username = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('icon_head.png')
    }
  })]), _vm._m(0), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('div', {
    staticClass: ["input_register", "bg"],
    on: {
      "click": function($event) {
        _vm.modifyInfo()
      }
    }
  }, [_c('text', {
    staticClass: ["input_register_text", "color1"]
  }, [_vm._v("确定")])])])]), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["hint_out"]
  }, [_c('text', {
    staticClass: ["hint_text"]
  }, [_vm._v("提示：用户名（3-12个字符 ，可使用字母、数字、汉字、下划线，不能为纯数字，且首末字符不能为下划线）")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('scroller', [_c('pcenterHeader'), _c('div', {
    staticClass: ["main_out"]
  }, [_c('div', {
    staticClass: ["main_centent"]
  }, [_c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.titleone))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.titletwo))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textone))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.texttwo))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textthree))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textfour))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textfive))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textsix))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textseven))])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["search_header"]
  }, [_c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return.png')
    }
  })]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": _vm.searchHolder,
      "placeholder": "请输入关键字"
    },
    on: {
      "input": _vm.onChange
    }
  }), _c('div', {
    staticClass: ["div_search_image"],
    on: {
      "click": _vm.searchImageClick
    }
  }, [_c('image', {
    staticClass: ["search_img"],
    attrs: {
      "src": _vm.get_img_path('search.png')
    }
  })])]), _c('list', [(_vm.isSearch) ? _c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1) : _vm._e(), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["typical_image_name"]
    }, [_c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.member.logo),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["typical_name"]
    }, [_vm._v(_vm._s(item.member.name != null ? item.member.name : item.member.screeName))])]), _c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"]
    }, [_vm._v(_vm._s(item.content))]), (item.source != 'weibo') ? _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]) : _vm._e(), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["random_image_div"]
    }, _vm._l((_vm.images), function(image) {
      return _c('image', {
        staticClass: ["random_image"],
        attrs: {
          "src": image.picture
        }
      })
    })), _c('div', {
      staticClass: ["source_time"]
    }, [_c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v("来源:" + _vm._s(item.member.screeName != null ? item.member.screeName : item.member.name) + "@" + _vm._s(item.source))]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('Time.png'),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('click.png')
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "次点击")])])])])])])])
  }), (_vm.isSearch) ? _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)]) : _vm._e()], 2), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 315 */,
/* 316 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["typical_image_name"]
    }, [_c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.member.logo),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["typical_name"]
    }, [_vm._v(_vm._s(item.member.name != null ? item.member.name : item.member.screeName))])]), _c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"]
    }, [_vm._v(_vm._s(item.content))]), _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.member.screeName != null ? item.member.screeName : item.member.name) + "@" + _vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header'), _c('navtab'), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_gray"]
  }, [_c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('pcenterHeader'), _c('div', {
    staticClass: ["personal_out"]
  }, [_c('div', {
    staticClass: ["personal_info"]
  }, [_c('wxc-cell', {
    attrs: {
      "label": "邮箱",
      "title": _vm.resData.email,
      "hasTopBorder": false
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "用户名",
      "title": _vm.resData.account,
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.modifyInfo()
      }
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "注册时间",
      "title": _vm.resData.registTime,
      "hasTopBorder": false
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "最后登录时间",
      "title": _vm.resData.lastLoginTime,
      "hasTopBorder": false
    }
  }), _c('wxc-cell', {
    attrs: {
      "label": "密码",
      "title": _vm.resData.pwd,
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.modifyPassword()
      }
    }
  })], 1)])], 1), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 319 */,
/* 320 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('scroller', [_c('loginHeader', {
    attrs: {
      "data": _vm.data
    }
  }), _c('div', {
    staticClass: ["main_out"]
  }, [_c('div', {
    staticClass: ["main_centent"]
  }, [_c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.titleone))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.titletwo))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textone))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.texttwo))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textthree))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textfour))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textfive))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textsix))]), _c('text', {
    staticClass: ["text_one"]
  }, [_vm._v(_vm._s(_vm.textseven))])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('home')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('home')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('home')]
  }, [_vm._v("币行情")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('topic')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.pIndexKey == 'topic' ? 'bar-active' : '']
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.pIndexKey == 'topic' ? 'bar-active' : '']
  }, [_vm._v("全球行情")]), _c('text', {
    staticClass: ["notice-dot"]
  })]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('bnews')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('bnews')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('bnews')]
  }, [_vm._v("早知道")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('my')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('my')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('my')]
  }, [_vm._v("个人")]), _c('text', {
    staticClass: ["i-notice"]
  }, [_vm._v("2")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('loginHeader', {
    attrs: {
      "data": _vm.data
    }
  }), _c('div', {
    staticClass: ["register_out", "bg_white"]
  }, [_c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "text",
      "placeholder": "请输入用户名",
      "value": "",
      "value": (_vm.userName)
    },
    on: {
      "input": function($event) {
        _vm.userName = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('icon_head.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "nubmer",
      "placeholder": "请输入手机号/邮箱",
      "value": "",
      "value": (_vm.mobileNo)
    },
    on: {
      "input": function($event) {
        _vm.mobileNo = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('mobile.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "value": "",
      "value": (_vm.userPwd)
    },
    on: {
      "input": function($event) {
        _vm.userPwd = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('password.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "password",
      "placeholder": "请重新输入密码",
      "value": "",
      "value": (_vm.nextUserPwd)
    },
    on: {
      "input": function($event) {
        _vm.nextUserPwd = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('password.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper", "send_code_out"]
  }, [_c('div', {
    staticClass: ["input_code_out"]
  }, [_c('input', {
    staticClass: ["input_code", "bg_gray"],
    attrs: {
      "type": "nubmer",
      "placeholder": "请输入验证码",
      "value": "",
      "value": (_vm.vCode)
    },
    on: {
      "input": function($event) {
        _vm.vCode = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('correct.png')
    }
  })]), _c('div', {
    staticClass: ["input_code_btn"],
    on: {
      "click": function($event) {
        _vm.sendCode()
      }
    }
  }, [_c('text', {
    staticClass: ["send_code"],
    class: [_vm.datatime.judgetime ? 'send_btn_on' : 'send_btn_off']
  }, [_vm._v(_vm._s(_vm.datatime.timetext))])])]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('div', {
    staticClass: ["input_register", "bg"],
    on: {
      "click": function($event) {
        _vm.register()
      }
    }
  }, [_c('text', {
    staticClass: ["input_register_text", "color1"]
  }, [_vm._v("注册")])])])]), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_gray"]
  }, [_c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('pcenterHeader'), _c('div', {
    staticClass: ["personal_out"]
  }, [(_vm.isLogin) ? _c('div', {
    staticClass: ["personal_header", "bg_white"]
  }, [_c('image', {
    staticClass: ["user_logo"],
    attrs: {
      "resize": "cover",
      "src": _vm.get_img_path('icon_user_img.png')
    }
  }), _c('text', {
    staticClass: ["color1", "user_name"]
  }, [_vm._v(_vm._s(_vm.resData.phone))]), _c('div', {
    staticClass: ["exit_btn_out"],
    on: {
      "click": function($event) {
        _vm.valedateExit()
      }
    }
  }, [_c('text', {
    staticClass: ["exit_btn", "color1"]
  }, [_vm._v("退出登录")])])]) : _vm._e(), (_vm.isLogin) ? _c('div', {
    staticClass: ["my_module_out"]
  }, [_c('div', {
    staticClass: ["line_gary"]
  }), _c('div', {
    staticClass: ["my_module_content"]
  }, [_c('div', {
    staticClass: ["module_item"]
  }, [_c('image', {
    staticClass: ["module_image"],
    attrs: {
      "src": _vm.get_img_path('wx_optional.png')
    }
  }), _c('text', {
    staticClass: ["exit_btn", "color1"]
  }, [_vm._v("自选")])]), _c('div', {
    staticClass: ["module_item"]
  }, [_c('image', {
    staticClass: ["module_image"],
    attrs: {
      "src": _vm.get_img_path('wx_attention.png')
    }
  }), _c('text', {
    staticClass: ["exit_btn", "color1"]
  }, [_vm._v("关注")])]), _c('div', {
    staticClass: ["module_item"]
  }, [_c('image', {
    staticClass: ["module_image"],
    attrs: {
      "src": _vm.get_img_path('wx_asset.png')
    }
  }), _c('text', {
    staticClass: ["exit_btn", "color1"]
  }, [_vm._v("资产")])]), _c('div', {
    staticClass: ["module_item"]
  }, [_c('image', {
    staticClass: ["module_image"],
    attrs: {
      "src": _vm.get_img_path('wx_mailbox.png')
    }
  }), _c('text', {
    staticClass: ["exit_btn", "color1"]
  }, [_vm._v("信箱")])])])]) : _vm._e(), _c('div', {
    staticClass: ["personal_center"]
  }, [(!_vm.isLogin) ? _c('wxc-cell', {
    attrs: {
      "hasArrow": true,
      "hasTopBorder": false,
      "cellStyle": _vm.loginStyle
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.goLogin()
      }
    }
  }, [_c('text', {
    staticClass: ["login_text"],
    slot: "title"
  }, [_vm._v("登录")]), _c('image', {
    staticClass: ["default_image"],
    attrs: {
      "src": _vm.get_img_path('user_logo.png')
    },
    slot: "label"
  })]) : _vm._e(), (_vm.isLogin) ? _c('wxc-cell', {
    attrs: {
      "title": "我的信息",
      "hasArrow": true,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.goUserInfo
    }
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('pinfo.png')
    },
    slot: "label"
  })]) : _vm._e(), _c('div', {
    staticClass: ["contact_us"]
  }, [_c('wxc-cell', {
    attrs: {
      "hasTopBorder": false
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("交易所/新币对接")]), _c('text', {
    staticClass: ["desc_text"]
  }, [_vm._v("3046951607")])])]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("广告合作")]), _c('text', {
    staticClass: ["desc_text"]
  }, [_vm._v("1143758324")])])]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("商务合作")]), _c('text', {
    staticClass: ["desc_text"]
  }, [_vm._v("2818392801")])])]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('qq.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("51BB8客服")]), _c('text', {
    staticClass: ["desc_text"]
  }, [_vm._v("2026927046")])])]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('mailbox.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("联系邮箱")]), _c('text', {
    staticClass: ["desc_text"]
  }, [_vm._v("service@51bb8.com")])])]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false
    }
  }, [_c('div', {
    staticClass: ["label_out"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('network.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("官方网址")]), _c('text', {
    staticClass: ["desc_text"]
  }, [_vm._v("http://www.51bb8.com")])])]), _c('div', {
    staticClass: ["personal_info"]
  }, [_c('wxc-cell', {
    attrs: {
      "hasArrow": true,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.goAboutUs()
      }
    }
  }, [_c('div', {
    staticClass: ["label_out_more"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('about_us.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("关于我们")])])]), _c('wxc-cell', {
    attrs: {
      "hasArrow": true,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.goDisclaimer()
      }
    }
  }, [_c('div', {
    staticClass: ["label_out_more"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('declare.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("免责声明")])])]), _c('wxc-cell', {
    attrs: {
      "hasArrow": true,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.goSettingPage
    }
  }, [_c('div', {
    staticClass: ["label_out_more"],
    slot: "label"
  }, [_c('image', {
    staticClass: ["phone_image"],
    attrs: {
      "src": _vm.get_img_path('setup.png')
    }
  }), _c('text', {
    staticClass: ["label_out_text"]
  }, [_vm._v("设置")])])])], 1)], 1)], 1)]), _c('div', {
    staticClass: ["footer_null"]
  })], 1), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('loginHeader', {
    attrs: {
      "data": _vm.data
    }
  }), _c('div', {
    staticClass: ["register_out", "bg_white"]
  }, [_c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "text",
      "placeholder": "请输入手机号/邮箱",
      "value": "",
      "value": (_vm.mobileNo)
    },
    on: {
      "input": function($event) {
        _vm.mobileNo = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('mobile.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper", "send_code_out"]
  }, [_c('div', {
    staticClass: ["input_code_out"]
  }, [_c('input', {
    staticClass: ["input_code", "bg_gray"],
    attrs: {
      "type": "nubmer",
      "placeholder": "请输入手机/邮箱验证码",
      "value": "",
      "value": (_vm.vCode)
    },
    on: {
      "input": function($event) {
        _vm.vCode = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('correct.png')
    }
  })]), _c('div', {
    staticClass: ["input_code_btn"],
    on: {
      "click": function($event) {
        _vm.sendCode()
      }
    }
  }, [_c('text', {
    staticClass: ["send_code"],
    class: [_vm.datatime.judgetime ? 'send_btn_on' : 'send_btn_off']
  }, [_vm._v(_vm._s(_vm.datatime.timetext))])])]), _vm._m(0), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('div', {
    staticClass: ["input_register", "bg"],
    on: {
      "click": function($event) {
        _vm.goModifyPwd()
      }
    }
  }, [_c('text', {
    staticClass: ["input_register_text", "color1"]
  }, [_vm._v("下一步")])])])]), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["hint_out"]
  }, [_c('text', {
    staticClass: ["hint_text"]
  }, [_vm._v("提示：输入验证码后，重新设置登录密码")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 325 */
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
/* 326 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")]), _c('txt', [_vm._v("111111112222222333333333")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    class: ['main-list', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : ''],
    attrs: {
      "offsetAccuracy": "300",
      "loadmoreoffset": "300"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('div', {
    staticClass: ["cell-button"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://m.you.163.com/act/pub/DxDpYNfbBd.html')
      }
    }
  }, [_c('yx-slider', {
    attrs: {
      "imageList": _vm.banners
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('block1', {
    attrs: {
      "goods": _vm.goodsList
    }
  })], 1), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.showLoading
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator"]
  }, [_vm._v("...")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["search_header"]
  }, [_c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return.png')
    }
  })]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": _vm.searchHolder,
      "placeholder": "请输入关键字"
    },
    on: {
      "input": _vm.onChange
    }
  }), _c('div', {
    staticClass: ["div_search_image"],
    on: {
      "click": _vm.searchImageClick
    }
  }, [_c('image', {
    staticClass: ["search_img"],
    attrs: {
      "src": _vm.get_img_path('search.png')
    }
  })])]), _c('list', [(_vm.isSearch) ? _c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1) : _vm._e(), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v("来源:" + _vm._s(item.source))]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('Time.png'),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('image', {
      staticClass: ["clock_image"],
      attrs: {
        "src": _vm.get_img_path('click.png')
      }
    }), _c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "次点击")])])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member ? item.member.logo : ''),
        "resize": "cover"
      }
    })])])
  }), (_vm.isSearch) ? _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)]) : _vm._e()], 2), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper", "bg_white"]
  }, [_c('loginHeader', {
    attrs: {
      "data": _vm.data
    }
  }), _c('div', {
    staticClass: ["register_out", "bg_white"]
  }, [_c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "password",
      "placeholder": "设置登录密码，6-16个字符，字母和数字组合",
      "value": "",
      "value": (_vm.userPwd)
    },
    on: {
      "input": function($event) {
        _vm.userPwd = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('password.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('input', {
    staticClass: ["input", "bg_gray"],
    attrs: {
      "type": "password",
      "placeholder": "确认登录密码",
      "value": "",
      "value": (_vm.nextUserPwd)
    },
    on: {
      "input": function($event) {
        _vm.nextUserPwd = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["input_img"],
    attrs: {
      "src": _vm.get_img_path('password.png')
    }
  })]), _c('div', {
    staticClass: ["input_wrapper"]
  }, [_c('div', {
    staticClass: ["input_register", "bg"],
    on: {
      "click": function($event) {
        _vm.getModifyPwd()
      }
    }
  }, [_c('text', {
    staticClass: ["input_register_text", "color1"]
  }, [_vm._v("确定")])])])]), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShowLoad,
      "type": _vm.type,
      "loadingText": _vm.loadingText,
      "interval": _vm.interval
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["typical_image_name"]
    }, [_c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.member.logo),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["typical_name"]
    }, [_vm._v(_vm._s(item.member.name != null ? item.member.name : item.member.screeName))])]), _c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"]
    }, [_vm._v(_vm._s(item.content))]), (item.source != 'weibo') ? _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]) : _vm._e(), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["random_image_div"]
    }, _vm._l((_vm.images), function(image) {
      return _c('image', {
        staticClass: ["random_image"],
        attrs: {
          "src": image.picture
        }
      })
    })), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.member.screeName != null ? item.member.screeName : item.member.name) + "@" + _vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('UserHeader'), _c('image', {
    staticClass: ["header-bg"],
    attrs: {
      "resize": "cover",
      "src": "http://cdn.zwwill.com/yanxuan/imgs/bg5.png"
    }
  }), _c('image', {
    staticClass: ["header-bg", "bg2"],
    attrs: {
      "resize": "cover",
      "src": "http://cdn.zwwill.com/yanxuan/imgs/bg5.png"
    }
  }), _c('image', {
    staticClass: ["header-bg", "bg3"],
    attrs: {
      "resize": "cover",
      "src": "http://cdn.zwwill.com/yanxuan/imgs/bg5.png"
    }
  }), _c('scroller', {
    class: ['scroller', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : ''],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    class: ['header', _vm.isIpx && _vm.isIpx() ? 'h-ipx' : '']
  }, [_c('image', {
    staticClass: ["i-photo"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/885e3901d0a3501362530435d76bebb3.jpg"
    }
  }), _c('text', {
    staticClass: ["i-name"]
  }, [_vm._v(_vm._s(_vm.userId))]), _vm._m(0), _c('text', {
    staticClass: ["b-qrcode", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["fbs"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["box-line", "line-serve", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://id.163.com/gj/m/')
      }
    }
  }, [_vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)]), _c('div', {
    staticClass: ["box-line", "line-serve", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://gj.reg.163.com/faq/')
      }
    }
  }, [_vm._m(7), _vm._m(8), _vm._m(9), _vm._m(10)]), _c('div', {
    staticClass: ["box-line", "line-serve"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('http%3A%2F%2Fm.you.163.com%2Fhelp%23%2F%3F_k%3Dyn4ucc')
      }
    }
  }, [_vm._m(11), _vm._m(12), _vm._m(13), _vm._m(14)])]), _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_vm._m(15), _c('div', {
    staticClass: ["box-line", "line-serve"]
  }, [_c('div', {
    staticClass: ["i-box-l"],
    on: {
      "click": function($event) {
        _vm.jumpNative('http://cdn.zwwill.com/justdo8/jsbundles/index.js')
      }
    }
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"],
    staticStyle: {
      color: "#00ad00"
    }
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("Just Do 8")])])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b-tlt"]
  }, [_c('image', {
    staticClass: ["i-tag", "tag-e"],
    attrs: {
      "resize": "contain",
      "src": "http://yanxuan.nosdn.127.net/3dc6e876620bb84a5dac3deb6ecd4916.png"
    }
  }), _c('text', {
    staticClass: ["i-tag", "tag-v8", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt-tag"]
  }, [_vm._v("bb8智能投顾22")]), _c('image', {
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "resize": "cover",
      "src": "/assets/images/b.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("我的订单")]), _c('text', {
    staticClass: ["i-box-in", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["box-line"]
  }, [_c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("待付款")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("待发货")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("已发货")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("待评价")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("退换/售后")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("我的服务")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("拼团订单")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("邀请好友")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("优惠券")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("优先购")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("礼品卡")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("会员")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("足迹")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("收藏")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("客服")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("帮助")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"],
    staticStyle: {
      color: "#f00"
    }
  }, [_vm._v("Weex项目外链「可能一去无回，慎入」")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [(!_vm.isExistList) ? _c('div', {
    staticClass: ["wxc-demo"]
  }, [_c('wxc-result', {
    attrs: {
      "type": _vm.type,
      "paddingTop": "232",
      "customSet": _vm.customSet,
      "show": _vm.isWxcResultShow
    },
    on: {
      "wxcResultButtonClicked": _vm.wxcResultButtonClicked
    }
  })], 1) : _vm._e(), (_vm.isExistList) ? _c('list', [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["typical_image_name"]
    }, [_c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.member.logo),
        "resize": "cover"
      }
    }), _c('text', {
      staticClass: ["typical_name"]
    }, [_vm._v(_vm._s(item.member.name != null ? item.member.name : item.member.screeName))])]), _c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"]
    }, [_vm._v(_vm._s(item.content))]), (item.source != 'weibo') ? _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]) : _vm._e(), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["random_image_div"]
    }, _vm._l((_vm.images), function(image) {
      return _c('image', {
        staticClass: ["random_image"],
        attrs: {
          "src": image.picture
        }
      })
    })), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.member.screeName != null ? item.member.screeName : item.member.name) + "@" + _vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["back_click"],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": _vm.get_img_path('Return.png')
    }
  })]), _c('text', {
    staticClass: ["flash_text"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["div_share_image"],
    on: {
      "click": _vm.shareImageClick
    }
  }, [_c('image', {
    staticClass: ["share_img"],
    attrs: {
      "src": _vm.get_img_path('share.png')
    }
  })])]), _c('div', {
    staticClass: ["content"]
  }, [_c('web', {
    ref: "webview",
    style: _vm.webview_style,
    attrs: {
      "src": _vm.url + _vm.articalId
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish
    }
  })], 1), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time"]
    }, [_c('text', {
      staticClass: ["text_title"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["source_time"]
    }, [_c('div', {
      staticClass: ["source_set_color"]
    }, [_c('text', {
      staticClass: ["grey_color"]
    }, [_vm._v("来源:")]), _c('text', {
      staticClass: ["source"],
      on: {
        "click": function($event) {
          _vm.goAlertFocus(item.category, item.member.memberId, item.source)
        }
      }
    }, [_vm._v(_vm._s(item.source))])]), _c('div', {
      staticClass: ["time_hit"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])]), _c('image', {
      staticClass: ["content_image"],
      attrs: {
        "src": _vm.gethref(item.banner ? item.banner : item.member.logo),
        "resize": "cover"
      }
    })])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text_laoding"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.isIPhoneX ? 'wrapperipx' : 'wrapper']
  }, [_c('div', {
    class: [_vm.isIPhoneX ? 'containeripx' : 'container']
  }, [_c('div', {
    class: [_vm.isIPhoneX ? 'back_clickipx' : 'back_click'],
    on: {
      "click": _vm.backImageClick
    }
  }, [_c('image', {
    staticClass: ["back_img"],
    attrs: {
      "src": "/assets/images/Return.png"
    }
  })]), _c('text', {
    staticClass: ["flash_text"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    class: [_vm.isIPhoneX ? 'div_share_imageipx' : 'div_share_image'],
    on: {
      "click": _vm.shareImageClick
    }
  }, [_c('image', {
    staticClass: ["share_img"],
    attrs: {
      "src": "/assets/images/share.png"
    }
  })])]), _c('div', {
    staticClass: ["content"]
  }, [_c('web', {
    ref: "webview",
    style: _vm.webview_style,
    attrs: {
      "src": _vm.url + _vm.articalId
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish
    }
  })], 1), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time_match"]
    }, [_c('text', {
      staticClass: ["text_abstract_match"]
    }, [_vm._v(_vm._s(item.content))]), (item.source != 'weibo') ? _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]) : _vm._e(), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["source_time_match"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time_match"]
    }, [_c('text', {
      staticClass: ["text_abstract_match"]
    }, [_vm._v(_vm._s(item.content))]), _c('text', {
      staticClass: ["translate_text"],
      on: {
        "click": function($event) {
          _vm.getTranslation(item.id, index)
        }
      }
    }, [_vm._v("翻译")]), (_vm.translateClick && item.translates && _vm.isExistsTranlate(item.id)) ? _c('text', {
      staticClass: ["translate_result"]
    }, [_vm._v(_vm._s(item.translates[0].label))]) : _vm._e(), _c('div', {
      staticClass: ["source_time_match"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime)))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('refresh', {
    staticClass: ["refreshOut"],
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "refresh": _vm.refreshData
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["text_refresh"]
  }, [_vm._v(_vm._s(_vm.refreshText))])], 1), _vm._l((_vm.itemsList), function(item, index) {
    return _c('cell', {
      key: item.id,
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": index
      }
    }, [_c('div', {
      staticClass: ["information_content"]
    }, [_c('div', {
      staticClass: ["title_sourece_time_match"]
    }, [_c('text', {
      staticClass: ["text_title_match"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["text_abstract_match"],
      on: {
        "click": function($event) {
          _vm.goAlertContent(item.id, item.category)
        }
      }
    }, [_vm._v(_vm._s(item.abs))]), _c('div', {
      staticClass: ["source_time_match"]
    }, [_c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(_vm.timeAgo(item.publishTime ? item.publishTime : item.ctime ? item.ctime : '')))])]), _c('div', {
      staticClass: ["time_ago"]
    }, [_c('text', {
      staticClass: ["text_time_ago"]
    }, [_vm._v(_vm._s(item.hits) + "阅读")])])])])])])
  }), _c('wxc-loading', {
    attrs: {
      "show": _vm.isShow,
      "loadingText": "加载中..."
    }
  }), _c('loading', {
    attrs: {
      "display": _vm.loadingDisplay
    },
    on: {
      "loading": _vm.loadingData
    }
  }, [_c('div', {
    staticClass: ["loadingOut"]
  }, [_c('loading-indicator', {
    staticClass: ["load_indicator"]
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.loadingText))])], 1)])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: _vm.isIpx() ? 'wipx' : ''
  }, [_c('text', {
    staticClass: ["synopsis_text"]
  }, [_vm._v(_vm._s(_vm.data.desc))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main-list"]
  }, [_c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")]), _c('text', [_vm._v("The Times 03/Jan/2009 Chancellor on brink of second bailout for banks")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(357);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/11/4.
 */

exports.default = {
  errorPage: {
    pic: 'https://img.alicdn.com/tfs/TB17blphfDH8KJjy1XcXXcpdXXa-320-320.png',
    content: '抱歉出错了，我们正在全力解决中',
    button: '再试一次',
    title: '出错啦'
  },
  noGoods: {
    pic: 'https://img.alicdn.com/tfs/TB1mPWEeOqAXuNjy1XdXXaYcVXa-320-320.png',
    content: '主人，这里什么都没有找到',
    button: '再试一次',
    title: '暂无商品'
  },
  noNetwork: {
    pic: 'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',
    content: '哎呀，没有网络了......',
    button: '刷新一下',
    title: '无网络'
  },
  errorLocation: {
    pic: 'https://img.alicdn.com/tfs/TB1zXXahhrI8KJjy0FpXXb5hVXa-320-320.png',
    content: '哎呀，定位失败了......',
    button: '刷新一下',
    title: '定位失败'
  }
};

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(347);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(348);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(350);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(349);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(356);

var _events2 = _interopRequireDefault(_events);

var _action = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const wsURL = `ws://${WEBSOCKET_HOST}:8181`;


var ChatController = function (_EventEmitter) {
    (0, _inherits3.default)(ChatController, _EventEmitter);

    function ChatController() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            socket = _ref.socket;

        (0, _classCallCheck3.default)(this, ChatController);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ChatController.__proto__ || Object.getPrototypeOf(ChatController)).call(this));

        _this.name = null;
        _this.socket = socket;
        _this.openSocket();
        return _this;
    }

    (0, _createClass3.default)(ChatController, [{
        key: 'signIn',
        value: function signIn(name) {
            this.name = name;
        }
    }, {
        key: 'signOut',
        value: function signOut() {
            this.name = null;
        }
    }, {
        key: 'send',
        value: function send(message) {
            var data = JSON.stringify({
                name: this.name,
                message: message
            });
            console.log(data);
            this.socket.send(data);
        }
    }, {
        key: 'receiveString',
        value: function receiveString(str) {
            this.emit('received', str);
        }
    }, {
        key: 'receive',
        value: function receive(data) {
            if (data) {
                console.log(data);
                this.emit('received', JSON.parse(data));
            }
        }
    }, {
        key: 'openSocket',
        value: function openSocket() {
            var _this2 = this;

            var wsUrl = _action.apiURL.webSocketUrl;
            this.socket.WebSocket(wsUrl, 'echo-protocol');
            this.socket.onmessage = function (_ref2) {
                var data = _ref2.data;
                return _this2.receive(data);
            };
            this.socket.onopen = function (options) {
                return console.log('opened connection');
            };
            this.socket.onerror = function (_ref3) {
                var data = _ref3.data;
                return console.error(data);
            };
        }
    }, {
        key: 'closeSocket',
        value: function closeSocket() {
            this.socket.close();
        }
    }, {
        key: 'signedIn',
        get: function get() {
            return this.name !== null;
        }
    }]);
    return ChatController;
}(_events2.default);

exports.default = ChatController;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(351), __esModule: true };

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(352), __esModule: true };

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(71);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(346);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(345);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(354);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(355);
module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(38)(Function.call, __webpack_require__(59).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(32) });


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(14);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(353).set });


/***/ }),
/* 356 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(374)
)

/* script */
__vue_exports__ = __webpack_require__(373)

/* template */
var __vue_template__ = __webpack_require__(375)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\node_modules\\_weex-ui@0.4.1@weex-ui\\packages\\wxc-result\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-197b985d"
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
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(153)
)

/* script */
__vue_exports__ = __webpack_require__(127)

/* template */
var __vue_template__ = __webpack_require__(168)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\chat\\message.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d2f73d10"
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
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(156)
)

/* script */
__vue_exports__ = __webpack_require__(128)

/* template */
var __vue_template__ = __webpack_require__(171)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\components\\YXSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f820d1fe"
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
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(152)
)

/* script */
__vue_exports__ = __webpack_require__(129)

/* template */
var __vue_template__ = __webpack_require__(167)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\alertheader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b6647caa"
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
/* 361 */
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


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(143)
)

/* script */
__vue_exports__ = __webpack_require__(131)

/* template */
var __vue_template__ = __webpack_require__(158)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\candy-content.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a08af53"
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
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(150)
)

/* script */
__vue_exports__ = __webpack_require__(132)

/* template */
var __vue_template__ = __webpack_require__(165)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\candy-header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-45d839a3"
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
/* 364 */
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
/* 365 */
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
/* 366 */
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
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(147)
)

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(162)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3948fd76"
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
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(145)
)

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(160)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\home-block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c8decea"
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
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(149)
)

/* script */
__vue_exports__ = __webpack_require__(138)

/* template */
var __vue_template__ = __webpack_require__(164)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\topChannel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3f86d026"
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
/* 370 */
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
/* 371 */
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
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(155)
)

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(170)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\user\\UserHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f636d1b8"
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
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(343);

var _type2 = _interopRequireDefault(_type);

var _utils = __webpack_require__(77);

var _utils2 = _interopRequireDefault(_utils);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    type: {
      type: String,
      default: 'errorPage'
    },
    show: {
      type: Boolean,
      default: true
    },
    wrapStyle: Object,
    paddingTop: {
      type: [Number, String],
      default: 232
    },
    customSet: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    resultType: function resultType() {
      var type = this.type,
          customSet = this.customSet;

      var allTypes = _utils2.default.isEmptyObject(customSet) ? _type2.default : _utils2.default.mergeDeep(_type2.default, customSet);
      var types = allTypes['errorPage'];
      if (['errorPage', 'noGoods', 'noNetwork', 'errorLocation'].indexOf(type) > -1) {
        types = allTypes[type];
      }
      return types;
    },
    setPaddingTop: function setPaddingTop() {
      var paddingTop = this.paddingTop;
      return paddingTop + 'px';
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // web上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    onClick: function onClick() {
      var type = this.type;
      this.$emit('wxcResultButtonClicked', { type: type });
    }
  }
};

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "wxc-result": {
    "width": 750,
    "flex": 1,
    "alignItems": "center",
    "backgroundColor": "#f2f3f4"
  },
  "result-image": {
    "width": 320,
    "height": 320
  },
  "result-content": {
    "marginTop": 36,
    "alignItems": "center"
  },
  "content-text": {
    "fontSize": 30,
    "color": "#A5A5A5",
    "height": 42,
    "lineHeight": 42,
    "textAlign": "center"
  },
  "content-desc": {
    "marginTop": 10
  },
  "result-button": {
    "marginTop": 60,
    "borderWidth": 1,
    "borderColor": "#979797",
    "backgroundColor": "#FFFFFF",
    "borderRadius": 6,
    "width": 240,
    "height": 72,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button-text": {
    "color": "#666666",
    "fontSize": 30
  }
}

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wrap"],
    style: _vm.wrapStyle
  }, [_c('div', {
    staticClass: ["wxc-result"],
    style: {
      paddingTop: _vm.setPaddingTop
    }
  }, [_c('image', {
    staticClass: ["result-image"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.resultType.pic
    }
  }), (_vm.resultType.content) ? _c('div', {
    staticClass: ["result-content"]
  }, [_c('text', {
    staticClass: ["content-text"]
  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
    staticClass: ["content-text", "content-desc"]
  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.button) ? _c('div', {
    staticClass: ["result-button"],
    on: {
      "touchend": _vm.handleTouchEnd,
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 存储localStorage
 */
var setStore = exports.setStore = function setStore(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
var getStore = exports.getStore = function getStore(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
var removeStore = exports.removeStore = function removeStore(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
};

/**
 * 获取style样式
 */
var getStyle = exports.getStyle = function getStyle(element, attr) {
    var NumberMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'int';

    var target = void 0;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
};

/**
 * 页面到达底部，加载更多
 */
var loadMore = exports.loadMore = function loadMore(element, callback) {
    var windowHeight = window.screen.height;
    var height = void 0;
    var setTop = void 0;
    var paddingBottom = void 0;
    var marginBottom = void 0;
    var requestFram = void 0;
    var oldScrollTop = void 0;

    document.body.addEventListener('scroll', function () {
        loadMore();
    }, false);
    //运动开始时获取元素 高度 和 offseTop, pading, margin
    element.addEventListener('touchstart', function () {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom = getStyle(element, 'paddingBottom');
        marginBottom = getStyle(element, 'marginBottom');
    }, { passive: true });

    //运动过程中保持监听 scrollTop 的值判断是否到达底部
    element.addEventListener('touchmove', function () {
        loadMore();
    }, { passive: true });

    //运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
    element.addEventListener('touchend', function () {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    }, { passive: true });

    var moveEnd = function moveEnd() {
        requestFram = requestAnimationFrame(function () {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                loadMore();
                moveEnd();
            } else {
                cancelAnimationFrame(requestFram);
                //为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
                height = element.offsetHeight;
                loadMore();
            }
        });
    };

    var loadMore = function loadMore() {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    };
};

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
var showBack = exports.showBack = function showBack(callback) {
    var requestFram = void 0;
    var oldScrollTop = void 0;

    document.addEventListener('scroll', function () {
        showBackFun();
    }, false);
    document.addEventListener('touchstart', function () {
        showBackFun();
    }, { passive: true });

    document.addEventListener('touchmove', function () {
        showBackFun();
    }, { passive: true });

    document.addEventListener('touchend', function () {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    }, { passive: true });

    var moveEnd = function moveEnd() {
        requestFram = requestAnimationFrame(function () {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                moveEnd();
            } else {
                cancelAnimationFrame(requestFram);
            }
            showBackFun();
        });
    };

    //判断是否达到目标点
    var showBackFun = function showBackFun() {
        if (document.body.scrollTop > 500) {
            callback(true);
        } else {
            callback(false);
        }
    };
};

/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
var animate = exports.animate = function animate(element, target) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
    var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ease-out';
    var callback = arguments[4];

    clearInterval(element.timer);

    //判断不同参数的情况
    if (duration instanceof Function) {
        callback = duration;
        duration = 400;
    } else if (duration instanceof String) {
        mode = duration;
        duration = 400;
    }

    //判断不同参数的情况
    if (mode instanceof Function) {
        callback = mode;
        mode = 'ease-out';
    }

    //获取dom样式
    var attrStyle = function attrStyle(attr) {
        if (attr === "opacity") {
            return Math.round(getStyle(element, attr, 'float') * 100);
        } else {
            return getStyle(element, attr);
        }
    };
    //根字体大小，需要从此将 rem 改成 px 进行运算
    var rootSize = parseFloat(document.documentElement.style.fontSize);

    var unit = {};
    var initState = {};

    //获取目标属性单位和初始样式值
    Object.keys(target).forEach(function (attr) {
        if (/[^\d^\.]+/gi.test(target[attr])) {
            unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
        } else {
            unit[attr] = 'px';
        }
        initState[attr] = attrStyle(attr);
    });

    //去掉传入的后缀单位
    Object.keys(target).forEach(function (attr) {
        if (unit[attr] == 'rem') {
            target[attr] = Math.ceil(parseInt(target[attr]) * rootSize);
        } else {
            target[attr] = parseInt(target[attr]);
        }
    });

    var flag = true; //假设所有运动到达终点
    var remberSpeed = {}; //记录上一个速度值,在ease-in模式下需要用到
    element.timer = setInterval(function () {
        Object.keys(target).forEach(function (attr) {
            var iSpeed = 0; //步长
            var status = false; //是否仍需运动
            var iCurrent = attrStyle(attr) || 0; //当前元素属性址
            var speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
            var intervalTime = void 0; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
            switch (mode) {
                case 'ease-out':
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
                    break;
                case 'linear':
                    speedBase = initState[attr];
                    intervalTime = duration * 20 / 400;
                    break;
                case 'ease-in':
                    var oldspeed = remberSpeed[attr] || 0;
                    iSpeed = oldspeed + (target[attr] - initState[attr]) / duration;
                    remberSpeed[attr] = iSpeed;
                    break;
                default:
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
            }
            if (mode !== 'ease-in') {
                iSpeed = (target[attr] - speedBase) / intervalTime;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            }
            //判断是否达步长之内的误差距离，如果到达说明到达目标点
            switch (mode) {
                case 'ease-out':
                    status = iCurrent != target[attr];
                    break;
                case 'linear':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                case 'ease-in':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                default:
                    status = iCurrent != target[attr];
            }

            if (status) {
                flag = false;
                //opacity 和 scrollTop 需要特殊处理
                if (attr === "opacity") {
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
                    element.style.opacity = (iCurrent + iSpeed) / 100;
                } else if (attr === 'scrollTop') {
                    element.scrollTop = iCurrent + iSpeed;
                } else {
                    element.style[attr] = iCurrent + iSpeed + 'px';
                }
            } else {
                flag = true;
            }

            if (flag) {
                clearInterval(element.timer);
                if (callback) {
                    callback();
                }
            }
        });
    }, 20);
};

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_USERINFO = exports.GET_USERINFO = 'GET_USERINFO';
var RECORD_USERINFO = exports.RECORD_USERINFO = 'RECORD_USERINFO';
var RETSET_NAME = exports.RETSET_NAME = 'RETSET_NAME';

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.host = host;
exports.https = https;
exports.timeAgo = timeAgo;
exports.unescape = unescape;
function host(url) {
  if (!url) return '';
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  var parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

function https(url) {
  var env = weex.config.env || WXEnvironment;
  if (env.platform === 'iOS' && typeof url === 'string') {
    return url.replace(/^http\:/, 'https:');
  }
  return url;
}

function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

function unescape(text) {
  var res = text || '';[['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
    res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
  });

  return res;
}

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(78);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator');

exports.default = {
    data: function data() {
        return {
            rpx: 1,
            apiDomain: '',
            android: weex.config.env.platform.toLowerCase() == 'android',
            ios: weex.config.env.platform.toLowerCase() == 'ios',
            web: weex.config.env.platform.toLowerCase() == 'web'
        };
    },
    created: function created() {
        var self = this;
        var env = weex.config.env;
        var rWidth = env.deviceWidth;
        env.deviceWidth > 828 && (rWidth = env.deviceWidth / 3 * 2);
        self.rpx = 750 / rWidth;
        //self.apiDomain='http://xiazhou.me/example/xiazhou-weex';
        if (!self.web) {
            self.apiDomain = 'http://192.168.31.241:8080'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
        }
    },

    methods: {
        jumpBack: function jumpBack() {
            if (this.$router) {
                this.$router.back(-1);
            }
        },
        jump: function jump(to) {
            console.log("jump>>" + to);
            if (this.$router) {
                this.$router.push(to);
            }
        },
        jumpWeb: function jumpWeb(_url) {
            var url = _util2.default.setBundleUrl(weex.config.bundleUrl, 'page/webview.js?weburl=' + _url);

            console.log("jumpweb>>" + url);
            navigator.push({
                url: url,
                animated: "true"
            });
        },

        //children router 
        jumpUrl: function jumpUrl(_url, params) {
            var bundleUrl = weex.config.bundleUrl;
            var url = bundleUrl.substring(0, bundleUrl.lastIndexOf('?'));

            console.log("jumpUrl>>" + url);
            if (params) {
                url = url + "?" + params;
            }
            url += "#" + _url;
            // const modal = weex.requireModule('modal');
            // modal.toast({ message: url, duration: 10 })
            navigator.push({
                url: url,
                animated: "true"
            }, function (event) {
                // modal.toast({ message: 'callback: ' + event })
            });
        },
        getParamsByJson: function getParamsByJson(json) {
            var str = "";
            for (var val in json) {
                str += "&" + val + "=" + json[val];
            }
            return str.substring(1);
        },
        getParams: function getParams() {
            var str = weex.config.bundleUrl;
            str = str.substring(str.lastIndexOf('?') + 1, str.lastIndexOf('#'));
            var temp = {};
            if (!str) {
                return temp;
            }
            if (str.indexOf('=') < 0) {
                temp[str] = "";
                return temp;
            }
            var arr = str.split('&');
            arr.forEach(function (item) {
                var w = item.match(/([^=]*)=(.*)/);
                temp[w[1]] = w[2];
            });
            return temp;
        },
        getParameterByName: function getParameterByName(name, url) {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        isIpx: function isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        get_img_path: function get_img_path(img_name) {
            var self = this;
            var img_path = '';

            if (self.web) {
                img_path = './assets/images/' + img_name;
            } else if (self.android) {
                img_name = img_name.substr(0, img_name.lastIndexOf('.'));
                img_path = 'local:///' + img_name;
            } else {
                //img_path = `../images/${img_name}`
                img_path = 'assets://' + img_name;
            }

            return img_path;
        },
        GET: function GET(api, callback) {
            stream.sendHttp({
                method: 'GET',
                url: url
            }, function (ret) {
                var retdata = JSON.parse(ret);
                callback(retdata);
            });
        },
        POST: function POST(url, data, callback) {
            stream.fetch({
                method: 'POST',
                url: url,
                type: 'json',
                body: data,
                headers: { 'Content-Type': 'application/json' }
            }, function (ret) {
                console.log(ret);
                if (!ret.ok) {
                    modal.toast({ message: '网络有问题，连不上', duration: 1 });
                    // modal.toast({ message: 'callback: ' + event })
                    console.log("request failed");
                    // callback("0");
                } else {
                    if (ret.data.response.ok) {
                        callback(ret.data);
                    } else {
                        modal.toast({ message: ret.data.response.message, duration: 1 });
                        console.log(ret.data);
                        // callback("0");
                    }
                }
            });
        },


        getiPhonexFringeHeight: function getiPhonexFringeHeight(deviceHeight) {
            return 88 * deviceHeight / 1624;
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
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
                }
            }
            return fmt;
        },

        formatDate: function formatDate(time) {
            var date = new Date(time);
            return this.formatDatePattern(date, "yyyy-MM-dd hh:mm");
        },

        timeAgo: function timeAgo(time) {
            var between = (Date.now() - Number(time)) / 1000;
            if (between < 2 * 60) {
                return '刚刚';
            } else if (between < 3600) {
                return this.pluralize(~~(between / 60), ' 分钟');
            } else if (between < 86400) {
                return this.pluralize(~~(between / 3600), ' 小时');
            } else if (between < 30 * 86400) {
                return this.pluralize(~~(between / 86400), ' 天');
            } else {
                return this.pluralize(~~(between / 86400), ' 天');
            }
        },

        pluralize: function pluralize(time, label) {
            if (time === 1) {
                return time + label;
            }
            return time + label + '前';
        },

        gethref: function gethref(url) {
            if (!url) {
                return url;
            }
            if (url.indexOf("http") == 0) {
                return url;
            } else {
                return 'http://www.51bb8.com/bfile/dfile' + url;
            }
        }
    }
};

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueRouter = __webpack_require__(402);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = __webpack_require__(479);

var _home2 = _interopRequireDefault(_home);

var _bbtop = __webpack_require__(473);

var _bbtop2 = _interopRequireDefault(_bbtop);

var _homeOptional = __webpack_require__(477);

var _homeOptional2 = _interopRequireDefault(_homeOptional);

var _UserView = __webpack_require__(515);

var _UserView2 = _interopRequireDefault(_UserView);

var _chat = __webpack_require__(407);

var _chat2 = _interopRequireDefault(_chat);

var _bnews = __webpack_require__(495);

var _bnews2 = _interopRequireDefault(_bnews);

var _newlist = __webpack_require__(499);

var _newlist2 = _interopRequireDefault(_newlist);

var _flashNews = __webpack_require__(434);

var _flashNews2 = _interopRequireDefault(_flashNews);

var _login = __webpack_require__(484);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(493);

var _register2 = _interopRequireDefault(_register);

var _personal = __webpack_require__(510);

var _personal2 = _interopRequireDefault(_personal);

var _personalInfo = __webpack_require__(512);

var _personalInfo2 = _interopRequireDefault(_personalInfo);

var _favorite = __webpack_require__(432);

var _favorite2 = _interopRequireDefault(_favorite);

var _hotArticle = __webpack_require__(446);

var _hotArticle2 = _interopRequireDefault(_hotArticle);

var _information = __webpack_require__(448);

var _information2 = _interopRequireDefault(_information);

var _globalMedia = __webpack_require__(444);

var _globalMedia2 = _interopRequireDefault(_globalMedia);

var _exchangeNotice = __webpack_require__(428);

var _exchangeNotice2 = _interopRequireDefault(_exchangeNotice);

var _exchangeTwitter = __webpack_require__(430);

var _exchangeTwitter2 = _interopRequireDefault(_exchangeTwitter);

var _policy = __webpack_require__(453);

var _policy2 = _interopRequireDefault(_policy);

var _newcoin = __webpack_require__(450);

var _newcoin2 = _interopRequireDefault(_newcoin);

var _voice = __webpack_require__(468);

var _voice2 = _interopRequireDefault(_voice);

var _candy = __webpack_require__(426);

var _candy2 = _interopRequireDefault(_candy);

var _candyDetail = __webpack_require__(423);

var _candyDetail2 = _interopRequireDefault(_candyDetail);

var _searchInformation = __webpack_require__(459);

var _searchInformation2 = _interopRequireDefault(_searchInformation);

var _searchExchangeNotice = __webpack_require__(455);

var _searchExchangeNotice2 = _interopRequireDefault(_searchExchangeNotice);

var _searchExchangeTwitter = __webpack_require__(457);

var _searchExchangeTwitter2 = _interopRequireDefault(_searchExchangeTwitter);

var _searchVoice = __webpack_require__(463);

var _searchVoice2 = _interopRequireDefault(_searchVoice);

var _searchNewcoin = __webpack_require__(461);

var _searchNewcoin2 = _interopRequireDefault(_searchNewcoin);

var _alertfocus = __webpack_require__(418);

var _alertfocus2 = _interopRequireDefault(_alertfocus);

var _synopsis = __webpack_require__(465);

var _synopsis2 = _interopRequireDefault(_synopsis);

var _focusDetail = __webpack_require__(436);

var _focusDetail2 = _interopRequireDefault(_focusDetail);

var _focusDetail3 = __webpack_require__(438);

var _focusDetail4 = _interopRequireDefault(_focusDetail3);

var _focusDetail5 = __webpack_require__(440);

var _focusDetail6 = _interopRequireDefault(_focusDetail5);

var _focusDetail7 = __webpack_require__(442);

var _focusDetail8 = _interopRequireDefault(_focusDetail7);

var _alertcontent = __webpack_require__(416);

var _alertcontent2 = _interopRequireDefault(_alertcontent);

var _modifySendCode = __webpack_require__(491);

var _modifySendCode2 = _interopRequireDefault(_modifySendCode);

var _modifyPwd = __webpack_require__(489);

var _modifyPwd2 = _interopRequireDefault(_modifyPwd);

var _aboutUs = __webpack_require__(501);

var _aboutUs2 = _interopRequireDefault(_aboutUs);

var _contactUs = __webpack_require__(503);

var _contactUs2 = _interopRequireDefault(_contactUs);

var _disclaimer = __webpack_require__(505);

var _disclaimer2 = _interopRequireDefault(_disclaimer);

var _loginDisclaimer = __webpack_require__(507);

var _loginDisclaimer2 = _interopRequireDefault(_loginDisclaimer);

var _modifyInfo = __webpack_require__(487);

var _modifyInfo2 = _interopRequireDefault(_modifyInfo);

var _tmp = __webpack_require__(481);

var _tmp2 = _interopRequireDefault(_tmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import kline from './page/home/bbkline.vue'
//import kline from './page/home/bbkline.1.vue'

Vue.use(_vueRouter2.default);

// Story view factory
// function createBbView(type) {
//     return {
//         name: `bb-view-${type}`,
//         render(createElement) {
//             return createElement(bbtop, { props: { type } })
//         }
//     }
// }


// const ViewHome = r => require.ensure([], () => r(require('./page/home/home.vue')), 'ViewHome')
// const ViewMy = r => require.ensure([], () => r(require('./page/home/home.vue')), 'ViewMy')
// const bbtop = r => require.ensure([], () => r(require('./page/home/bbtop.vue')), 'bbtop')
// const homeOptional = r => require.ensure([], () => r(require('./page/home/home-optional.vue')), 'homeOptional')
// const kline = r => require.ensure([], () => r(require('./page/home/bbkline.vue')), 'kline')


/**
 * Created by zwwill on 2017/8/29.
 */

exports.default = new _vueRouter2.default({
    // mode: 'abstract',
    routes: [{ path: '/', redirect: '/login' }, { path: '/tmp', name: "tmp", component: _tmp2.default }, {
        path: '/home',
        component: _home2.default,
        children: [{ path: '/bbtop/:symbol', name: "bbtop", component: _bbtop2.default }, { path: '/chat', component: _chat2.default }, { path: '/dd', component: _homeOptional2.default }]
    }, {
        path: '/bnews',
        component: _bnews2.default,
        children: [{ path: '', component: _newlist2.default }]
    },
    // {　 path: '/bbtop/:symbol', name: "bbtop", component: bbtop },
    // { path: '/bb', component: bbtop },
    { path: '/my', component: _UserView2.default }, {
        path: '/flashnews',
        component: _flashNews2.default,
        children: [{ path: '/favorite', component: _favorite2.default }, { path: '/hotArticle', component: _hotArticle2.default }, { path: '/information', component: _information2.default }, { path: '/globalmedia', name: "globalmedia", component: _globalMedia2.default }, { path: '/exchangenotice', name: "exchangenotice", component: _exchangeNotice2.default }, { path: '/exchangetwitter', name: "exchangetwitter", component: _exchangeTwitter2.default }, { path: '/policy', name: "policy", component: _policy2.default }, { path: '/newcoin', name: "newcoin", component: _newcoin2.default }, { path: '/voice', name: "voice", component: _voice2.default }],
        redirect: '/information'
    }, {
        path: '/alertfocus',
        name: 'alertfocus',
        component: _alertfocus2.default,
        children: [{ path: '/synopsis', name: "synopsis", component: _synopsis2.default }, { path: '/focusDetail', name: "focusDetail", component: _focusDetail2.default }, { path: '/focusDetail1', name: "focusDetail1", component: _focusDetail4.default }, { path: '/focusDetail2', name: "focusDetail2", component: _focusDetail6.default }, { path: '/focusDetail3', name: "focusDetail3", component: _focusDetail8.default }]
    }, { path: '/alertcontent', name: "alertcontent", component: _alertcontent2.default }, { path: '/candy', name: "candy", component: _candy2.default }, { path: '/candyDetail', name: "candyDetail", component: _candyDetail2.default }, { path: '/login', component: _login2.default }, { path: '/register', component: _register2.default }, { path: '/pcenter', component: _personal2.default }, { path: '/modifySendCode', component: _modifySendCode2.default }, { path: '/modifyPwd', component: _modifyPwd2.default }, { path: '/aboutUs', component: _aboutUs2.default }, { path: '/contactUs', component: _contactUs2.default }, { path: '/disclaimer', component: _disclaimer2.default }, { path: '/loginDisclaimer', component: _loginDisclaimer2.default }, { path: '/modifyInfo', component: _modifyInfo2.default }, { path: '/personalInfo', component: _personalInfo2.default }, { path: '/serinformation', component: _searchInformation2.default }, { path: '/serexchangeNotice', component: _searchExchangeNotice2.default }, { path: '/serexchangeTwitter', component: _searchExchangeTwitter2.default }, { path: '/serexchangeTwitter', component: _searchExchangeTwitter2.default }, { path: '/servoice', component: _searchVoice2.default }, { path: '/sernewcoin', component: _searchNewcoin2.default }]
});

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(403);

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = __webpack_require__(399);

var _actions2 = _interopRequireDefault(_actions);

var _mutations = __webpack_require__(401);

var _mutations2 = _interopRequireDefault(_mutations);

var _getters = __webpack_require__(400);

var _getters2 = _interopRequireDefault(_getters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vuex is auto installed on the web
// import Vue from 'vue'
if (WXEnvironment.platform !== 'Web') {
    Vue.use(_vuex2.default);
}

var state = {
    userInfo: {}, //用户信息
    geohash: '31.22299,121.36025' //地址geohash值

    // state?: S;
    // getters?: GetterTree<S, S>;
    // actions?: ActionTree<S, S>;
    // mutations?: MutationTree<S>;
    // modules?: ModuleTree<S>;
    // plugins?: Plugin<S>[];
    // strict?: boolean;
};exports.default = new _vuex2.default.Store({
    state: state,
    getters: _getters2.default,
    actions: _actions2.default,
    mutations: _mutations2.default
});

/***/ }),
/* 382 */
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED': function ROUTE_CHANGED (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  var storeUnwatch = store.watch(
    function (state) { return state[moduleName]; },
    function (route) {
      var fullPath = route.fullPath;
      if (fullPath === currentPath) {
        return
      }
      if (currentPath != null) {
        isTimeTraveling = true
        router.push(route)
      }
      currentPath = fullPath
    },
    { sync: true }
  )

  // sync store on router navigation
  var afterEachUnHook = router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit(moduleName + '/ROUTE_CHANGED', { to: to, from: from })
  })

  return function unsync () {
    // On unsync, remove router hook
    if (afterEachUnHook != null) {
      afterEachUnHook()
    }

    // On unsync, remove store watch
    if (storeUnwatch != null) {
      storeUnwatch()
    }

    // On unsync, unregister Module with store
    store.unregisterModule(moduleName)
  }
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}



/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(519)
)
__vue_styles__.push(__webpack_require__(520)
)
__vue_styles__.push(__webpack_require__(521)
)

/* script */
__vue_exports__ = __webpack_require__(518)

/* template */
var __vue_template__ = __webpack_require__(522)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32a77749"
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
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

var baseUrl = '';
var routerMode = 'hash';
var imgBaseUrl = void 0;

if ("production".NODE_ENV == 'development') {
    exports.imgBaseUrl = imgBaseUrl = '';
} else if ("production".NODE_ENV == 'production') {
    exports.baseUrl = baseUrl = '';
    exports.imgBaseUrl = imgBaseUrl = '';
}

exports.baseUrl = baseUrl;
exports.routerMode = routerMode;
exports.imgBaseUrl = imgBaseUrl;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(124);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _asyncToGenerator2 = __webpack_require__(123);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _env = __webpack_require__(395);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fetch';
    var dataStr, requestConfig, response, responseJson;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    // let fetch = async(url = '', data = {}, type = 'GET', method = 'fetch') => {
                    type = type.toUpperCase();
                    url = _env.baseUrl + url;

                    if (type == 'GET') {
                        dataStr = ''; //数据拼接字符串

                        Object.keys(data).forEach(function (key) {
                            dataStr += key + '=' + data[key] + '&';
                        });

                        if (dataStr !== '') {
                            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                            url = url + '?' + dataStr;
                        }
                    }

                    if (!(window.fetch && method == 'fetch')) {
                        _context.next = 21;
                        break;
                    }

                    requestConfig = {
                        credentials: 'include',
                        method: type,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        mode: "cors",
                        cache: "force-cache"
                    };


                    if (type == 'POST') {
                        Object.defineProperty(requestConfig, 'body', {
                            value: JSON.stringify(data)
                        });
                    }

                    _context.prev = 6;
                    _context.next = 9;
                    return fetch(url, requestConfig);

                case 9:
                    response = _context.sent;
                    _context.next = 12;
                    return response.json();

                case 12:
                    responseJson = _context.sent;
                    return _context.abrupt('return', responseJson);

                case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](6);
                    throw new Error(_context.t0);

                case 19:
                    _context.next = 22;
                    break;

                case 21:
                    return _context.abrupt('return', new Promise(function (resolve, reject) {
                        var requestObj = void 0;
                        if (window.XMLHttpRequest) {
                            requestObj = new XMLHttpRequest();
                        } else {
                            requestObj = new ActiveXObject();
                        }

                        var sendData = '';
                        if (type == 'POST') {
                            sendData = JSON.stringify(data);
                        }

                        requestObj.open(type, url, true);
                        requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        requestObj.send(sendData);

                        requestObj.onreadystatechange = function () {
                            if (requestObj.readyState == 4) {
                                if (requestObj.status == 200) {
                                    var obj = requestObj.response;
                                    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
                                        obj = JSON.parse(obj);
                                    }
                                    resolve(obj);
                                } else {
                                    reject(requestObj);
                                }
                            }
                        };
                    }));

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[6, 16]]);
}));

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(383);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(380);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(381);

var _store2 = _interopRequireDefault(_store);

var _vuexRouterSync = __webpack_require__(382);

var _filters = __webpack_require__(378);

var filters = _interopRequireWildcard(_filters);

var _mixins = __webpack_require__(379);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FastClick from 'fastclick'


// import 'font-awesome/css/font-awesome.css';
//import 'animate.css/animate.css'; // get animate.css
// import 'bulma/css/bulma.css'

// import 'bulma'

// import jquery from 'jquery'

// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// Vue.use(VueSocketio, socketio('http://socketserver.com:1923'), store);

// import * as dd from './assets/js/kline';
// Vue.use(dd);
// import VueECharts from 'vue-echarts/components/ECharts.vue'
// Vue.component('chart', VueECharts)

//300s
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body)
//     }, false)
// }

// sync the router with the vuex store.
// this registers `store.state.route`
// import weexVueRouter from 'weex-vue-router'
// Vue.use(weexVueRouter, { router, weex })


/**
 * Created by zwwill on 2017/8/28.
 */
(0, _vuexRouterSync.sync)(_store2.default, _router2.default);

// register global utility filters.
Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key]);
});

// register global mixins.
Vue.mixin(_mixins2.default);

Vue.config.productionTip = false;

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router: _router2.default }, _App2.default));

var path = '/';

//TODO
var bundleUrl = weex.config.bundleUrl;
if (bundleUrl) {
    var idx = bundleUrl.indexOf("#");
    if (idx > 0) {
        var burl = bundleUrl.slice(idx + 1);

        if (burl.indexOf("#") > 0) {

            burl = burl.slice(0, burl.indexOf("#"));
        }

        path = burl;
    }
}
console.info(11111111);
console.info(weex.config.bundleUrl);
console.info(path);
console.info(11111111);
_router2.default.push(path);

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = undefined;

var _fetch = __webpack_require__(396);

var _fetch2 = _interopRequireDefault(_fetch);

var _mUtils = __webpack_require__(376);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取用户信息
 */

var getUser = exports.getUser = function getUser() {
  return (0, _fetch2.default)('/v1/user', { user_id: (0, _mUtils.getStore)('user_id') });
};

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(124);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(123);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getData = __webpack_require__(398);

var _mutationTypes = __webpack_require__(377);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getUserInfo: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
            var commit = _ref.commit,
                state = _ref.state;
            var res;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _getData.getUser)();

                        case 2:
                            res = _context.sent;

                            commit(_mutationTypes.GET_USERINFO, res);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getUserInfo(_x) {
            return _ref2.apply(this, arguments);
        }

        return getUserInfo;
    }()
};

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _RECORD_USERINFO$RETS;

var _mutationTypes = __webpack_require__(377);

var _mUtils = __webpack_require__(376);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_RECORD_USERINFO$RETS = {}, (0, _defineProperty3.default)(_RECORD_USERINFO$RETS, _mutationTypes.RECORD_USERINFO, function (state, info) {
    state.userInfo = info;
    state.login = true;
    (0, _mUtils.setStore)('user_id', info.user_id);
}), (0, _defineProperty3.default)(_RECORD_USERINFO$RETS, _mutationTypes.RETSET_NAME, function (state, username) {
    state.userInfo = Object.assign({}, state.userInfo, { username: username });
}), _RECORD_USERINFO$RETS);

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v2.8.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("production".NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if ("production".NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production".NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if ("production".NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if ("production".NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if ("production".NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("production".NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if ("production".NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if ("production".NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if ("production".NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if ("production".NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if ("production".NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if ("production".NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if ("production".NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if ("production".NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production".NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if ("production".NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production".NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.8.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v2.5.0
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ("production".NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if ("production".NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ("production".NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ("production".NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if ("production".NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ("production".NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "production".NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ("production".NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ("production".NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ("production".NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ("production".NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("production".NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("production".NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ("production".NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ("production".NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ("production".NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ("production".NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("production".NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("production".NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.5.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(247)
)

/* script */
__vue_exports__ = __webpack_require__(201)

/* template */
var __vue_template__ = __webpack_require__(298)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\chat\\chat.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0cd29637"
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
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(273)
)

/* script */
__vue_exports__ = __webpack_require__(203)

/* template */
var __vue_template__ = __webpack_require__(321)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\components\\tabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5ffd6cc2"
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
/* 415 */,
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(288)
)

/* script */
__vue_exports__ = __webpack_require__(204)

/* template */
var __vue_template__ = __webpack_require__(334)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\alertcontent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cc77af6a"
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
/* 417 */,
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(205)

/* template */
var __vue_template__ = __webpack_require__(301)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\alertfocus.vue"
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


/***/ }),
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(290)
)

/* script */
__vue_exports__ = __webpack_require__(206)

/* template */
var __vue_template__ = __webpack_require__(336)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\candy-detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-db962532"
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
/* 424 */,
/* 425 */,
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(207)

/* template */
var __vue_template__ = __webpack_require__(299)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\candy.vue"
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


/***/ }),
/* 427 */,
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(257)
)

/* script */
__vue_exports__ = __webpack_require__(208)

/* template */
var __vue_template__ = __webpack_require__(309)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\exchange-notice.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2d852704"
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
/* 429 */,
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(267)
)

/* script */
__vue_exports__ = __webpack_require__(209)

/* template */
var __vue_template__ = __webpack_require__(316)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\exchange-twitter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-416b1477"
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
/* 431 */,
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(287)
)

/* script */
__vue_exports__ = __webpack_require__(210)

/* template */
var __vue_template__ = __webpack_require__(333)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\favorite.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c4c22c6c"
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
/* 433 */,
/* 434 */
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


/***/ }),
/* 435 */,
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(250)
)

/* script */
__vue_exports__ = __webpack_require__(212)

/* template */
var __vue_template__ = __webpack_require__(302)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\focus-detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-14ec3b14"
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
/* 437 */,
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(293)
)

/* script */
__vue_exports__ = __webpack_require__(213)

/* template */
var __vue_template__ = __webpack_require__(339)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\focus-detail1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eeb68d66"
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
/* 439 */,
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(292)
)

/* script */
__vue_exports__ = __webpack_require__(214)

/* template */
var __vue_template__ = __webpack_require__(338)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\focus-detail2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ee9a5e64"
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
/* 441 */,
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(291)
)

/* script */
__vue_exports__ = __webpack_require__(215)

/* template */
var __vue_template__ = __webpack_require__(337)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\focus-detail3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ee7e2f62"
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
/* 443 */,
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(289)
)

/* script */
__vue_exports__ = __webpack_require__(216)

/* template */
var __vue_template__ = __webpack_require__(335)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\global-media.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d8b73130"
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
/* 445 */,
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(256)
)

/* script */
__vue_exports__ = __webpack_require__(217)

/* template */
var __vue_template__ = __webpack_require__(308)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\hot-article.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2d0f3890"
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
/* 447 */,
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(254)
)

/* script */
__vue_exports__ = __webpack_require__(218)

/* template */
var __vue_template__ = __webpack_require__(306)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\information.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2874666e"
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
/* 449 */,
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(286)
)

/* script */
__vue_exports__ = __webpack_require__(219)

/* template */
var __vue_template__ = __webpack_require__(332)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\newcoin.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a683581a"
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
/* 451 */,
/* 452 */,
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(255)
)

/* script */
__vue_exports__ = __webpack_require__(220)

/* template */
var __vue_template__ = __webpack_require__(307)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\policy.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-29c4f7e0"
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
/* 454 */,
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(253)
)

/* script */
__vue_exports__ = __webpack_require__(221)

/* template */
var __vue_template__ = __webpack_require__(304)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\search-exchange-notice.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-223124cb"
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
/* 456 */,
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(260)
)

/* script */
__vue_exports__ = __webpack_require__(222)

/* template */
var __vue_template__ = __webpack_require__(311)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\search-exchange-twitter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3b8260e0"
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
/* 458 */,
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(281)
)

/* script */
__vue_exports__ = __webpack_require__(223)

/* template */
var __vue_template__ = __webpack_require__(328)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\search-information.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6fdc5fb5"
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
/* 460 */,
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(245)
)

/* script */
__vue_exports__ = __webpack_require__(224)

/* template */
var __vue_template__ = __webpack_require__(296)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\search-newcoin.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-01a7ee8c"
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
/* 462 */,
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(265)
)

/* script */
__vue_exports__ = __webpack_require__(225)

/* template */
var __vue_template__ = __webpack_require__(314)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\search-voice.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3f08e17b"
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
/* 464 */,
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(294)
)

/* script */
__vue_exports__ = __webpack_require__(226)

/* template */
var __vue_template__ = __webpack_require__(340)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\synopsis.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f7f50c7c"
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
/* 466 */,
/* 467 */,
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(284)
)

/* script */
__vue_exports__ = __webpack_require__(227)

/* template */
var __vue_template__ = __webpack_require__(330)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\flashnews\\voice.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9e12b218"
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
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */
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


/***/ }),
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(280)
)

/* script */
__vue_exports__ = __webpack_require__(229)

/* template */
var __vue_template__ = __webpack_require__(327)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\home-optional.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6fb91cf4"
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
/* 478 */,
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(230)

/* template */
var __vue_template__ = __webpack_require__(305)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\home.vue"
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


/***/ }),
/* 480 */,
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(231)

/* template */
var __vue_template__ = __webpack_require__(326)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\home\\tmp.vue"
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


/***/ }),
/* 482 */,
/* 483 */,
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(259)
)
__vue_styles__.push(__webpack_require__(258)
)

/* script */
__vue_exports__ = __webpack_require__(232)

/* template */
var __vue_template__ = __webpack_require__(310)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\login\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-389e1051"
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
/* 485 */,
/* 486 */,
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(262)
)
__vue_styles__.push(__webpack_require__(261)
)

/* script */
__vue_exports__ = __webpack_require__(233)

/* template */
var __vue_template__ = __webpack_require__(312)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\login\\modifyInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3d758a50"
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
/* 488 */,
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(283)
)
__vue_styles__.push(__webpack_require__(282)
)

/* script */
__vue_exports__ = __webpack_require__(234)

/* template */
var __vue_template__ = __webpack_require__(329)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\login\\modifyPwd.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-750ac7ea"
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
/* 490 */,
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(279)
)
__vue_styles__.push(__webpack_require__(278)
)

/* script */
__vue_exports__ = __webpack_require__(235)

/* template */
var __vue_template__ = __webpack_require__(324)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\login\\modifySendCode.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-628a32b7"
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
/* 492 */,
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(275)
)
__vue_styles__.push(__webpack_require__(274)
)

/* script */
__vue_exports__ = __webpack_require__(236)

/* template */
var __vue_template__ = __webpack_require__(322)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\login\\register.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-605ddaeb"
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
/* 494 */,
/* 495 */
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


/***/ }),
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(295)
)

/* template */
var __vue_template__ = __webpack_require__(341)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\news\\newlist.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ffdee1ac"
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
/* 500 */,
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(249)
)
__vue_styles__.push(__webpack_require__(248)
)

/* script */
__vue_exports__ = __webpack_require__(238)

/* template */
var __vue_template__ = __webpack_require__(300)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\aboutUs.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f85858f"
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
/* 502 */,
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(252)
)
__vue_styles__.push(__webpack_require__(251)
)

/* script */
__vue_exports__ = __webpack_require__(239)

/* template */
var __vue_template__ = __webpack_require__(303)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\contactUs.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-207ce0e2"
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
/* 504 */,
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(264)
)
__vue_styles__.push(__webpack_require__(263)
)

/* script */
__vue_exports__ = __webpack_require__(240)

/* template */
var __vue_template__ = __webpack_require__(313)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\disclaimer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3e7489c7"
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
/* 506 */,
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(272)
)
__vue_styles__.push(__webpack_require__(271)
)

/* script */
__vue_exports__ = __webpack_require__(241)

/* template */
var __vue_template__ = __webpack_require__(320)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\loginDisclaimer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a5d97e8"
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
/* 508 */,
/* 509 */,
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(277)
)
__vue_styles__.push(__webpack_require__(276)
)

/* script */
__vue_exports__ = __webpack_require__(242)

/* template */
var __vue_template__ = __webpack_require__(323)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\personal.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6185d628"
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
/* 511 */,
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(269)
)
__vue_styles__.push(__webpack_require__(268)
)

/* script */
__vue_exports__ = __webpack_require__(243)

/* template */
var __vue_template__ = __webpack_require__(318)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\pcenter\\personalInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-44298cba"
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
/* 513 */,
/* 514 */,
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(285)
)

/* script */
__vue_exports__ = __webpack_require__(244)

/* template */
var __vue_template__ = __webpack_require__(331)
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
__vue_options__.__file = "D:\\work\\bb8-weex-change\\bb8-front\\src\\page\\user\\UserView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a4f59208"
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
/* 516 */,
/* 517 */,
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(78);

var _util2 = _interopRequireDefault(_util);

var _tabBar = __webpack_require__(414);

var _tabBar2 = _interopRequireDefault(_tabBar);

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

var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {};
    },

    components: {
        'tab-bar': _tabBar2.default
    },
    created: function created() {
        _util2.default.initIconFont();
    },

    methods: {
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 519 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 520 */
/***/ (function(module, exports) {

module.exports = {
  "app-wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "r-box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  }
}

/***/ }),
/* 521 */
/***/ (function(module, exports) {

module.exports = {
  "s10": {
    "fontSize": 10
  },
  "s11": {
    "fontSize": 11
  },
  "s12": {
    "fontSize": 12
  },
  "s14": {
    "fontSize": 14
  },
  "s16": {
    "fontSize": 16
  },
  "s18": {
    "fontSize": 18
  },
  "s20": {
    "fontSize": 20
  },
  "s22": {
    "fontSize": 22
  },
  "s24": {
    "fontSize": 24
  },
  "color": {
    "color": "#ffe45f"
  },
  "color1": {
    "color": "#292b32"
  },
  "color2": {
    "color": "#7f7f7f"
  },
  "bg": {
    "backgroundColor": "#ffe45f"
  },
  "bg1": {
    "backgroundColor": "#ff6149"
  },
  "bg2": {
    "backgroundColor": "#ff920a"
  },
  "bg_gray": {
    "backgroundColor": "#F5F5F5"
  },
  "bg_white": {
    "backgroundColor": "#FFFFFF"
  },
  "send_btn_on": {
    "backgroundColor": "#ffe45f",
    "color": "#292b32"
  },
  "send_btn_off": {
    "backgroundColor": "#EBECEE",
    "color": "#7f7f7f"
  }
}

/***/ }),
/* 522 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-wrapper"]
  }, [_c('router-view', {
    staticClass: ["r-box"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);