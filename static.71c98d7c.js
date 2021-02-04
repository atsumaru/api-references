(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "https://atsumaru.github.io/api-references/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmlToComponent = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var apiList = _ref.apiList,
      overview = _ref.overview,
      changelog = _ref.changelog;
  return _react2.default.createElement(
    "div",
    null,
    (0, _htmlToComponent.htmlToComponent)(overview.contents),
    _react2.default.createElement(
      "h2",
      null,
      "\u63D0\u4F9B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"
    ),
    _react2.default.createElement(
      "table",
      null,
      _react2.default.createElement(
        "thead",
        null,
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "th",
            null,
            "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"
          ),
          _react2.default.createElement(
            "th",
            null,
            "\u6982\u8981"
          )
        )
      ),
      _react2.default.createElement(
        "tbody",
        null,
        apiList.map(function (api) {
          return _react2.default.createElement(
            "tr",
            { key: api.slug },
            _react2.default.createElement(
              "th",
              null,
              _react2.default.createElement(
                _reactStatic.Link,
                { key: api.slug, to: "/" + api.slug },
                api.title
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              (0, _htmlToComponent.htmlToComponent)(api.description)
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      "h2",
      null,
      "\u66F4\u65B0\u5C65\u6B74"
    ),
    (0, _htmlToComponent.htmlToComponent)(changelog.contents)
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlToComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(25);

var _htmr2 = _interopRequireDefault(_htmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/heading-has-content */
var htmlToComponent = exports.htmlToComponent = function htmlToComponent(html) {
  return (0, _htmr2.default)(html.replace(/&lt;/g, "&amp;lt;") /* htmrが二重unescapeしてしまうバグが有るため... */, {
    transform: {
      a: function a(props) {
        return _react2.default.createElement(_reactStatic.Link, _extends({}, props, { to: props.href }, props.href.match(/^https?:\/\//) ? { rel: "noopener", target: "_blank" } : {}));
      },
      h1: function h1(props) {
        return _react2.default.createElement("h1", _extends({}, props, { id: ("" + props.children).replace(/\s+/, "-") }));
      },
      h2: function h2(props) {
        return _react2.default.createElement("h2", _extends({}, props, { id: ("" + props.children).replace(/\s+/, "-") }));
      },
      h3: function h3(props) {
        return _react2.default.createElement("h3", _extends({}, props, { id: ("" + props.children).replace(/\s+/, "-") }));
      }
    }
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmlToComponent = __webpack_require__(7);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GITHUB_URL = "https://github.com/atsumaru/api-references";

var Theory = function Theory() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "\u524D\u63D0"
    ),
    "\u3053\u306EAPI\u3092\u5229\u7528\u3059\u308B\u969B\u306F\u3001API\u306E\u6D3B\u7528\u65B9\u6CD5\u306E\u30D2\u30F3\u30C8\u3084\u4F7F\u3044\u5206\u3051\u65B9\u306A\u3069\u306B\u3064\u3044\u3066\u307E\u3068\u3081\u305F",
    _react2.default.createElement(
      _reactStatic.Link,
      { to: "/common/theory" },
      "API\u306E\u30BB\u30AA\u30EA\u30FC"
    ),
    "\u3082\u5408\u308F\u305B\u3066\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"
  );
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var reference = _ref.reference;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      reference.navi
    ),
    _react2.default.createElement(
      "div",
      { className: "Reference__Header" },
      _react2.default.createElement(
        "h1",
        null,
        reference.title
      ),
      _react2.default.createElement(
        "a",
        { className: "Reference__EditButton", href: GITHUB_URL + "/blob/master/content/collections/apis/" + reference.slug + ".md" },
        "\u7DE8\u96C6"
      )
    ),
    reference.recommendTheory ? _react2.default.createElement(Theory, null) : null,
    (0, _htmlToComponent.htmlToComponent)(reference.contents)
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"
    ),
    _react2.default.createElement(
      "div",
      null,
      "\u79FB\u52D5\u3082\u3057\u304F\u306F\u524A\u9664\u3055\u308C\u305F\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002",
      _react2.default.createElement("br", null),
      "URL\u3084\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u9593\u9055\u3044\u304C\u306A\u3044\u304B\u3001\u518D\u5EA6\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002"
    )
  );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Your top level component

if (typeof document !== "undefined") {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById("root"));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(13);

__webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(15);

var _reactStaticRoutes = __webpack_require__(16);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _MainLayout = __webpack_require__(27);

var _MainLayout2 = _interopRequireDefault(_MainLayout);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _MainLayout2.default,
      null,
      _react2.default.createElement(_reactStaticRoutes2.default, null)
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("ress/ress.css");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("github-markdown-css/github-markdown.css");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(17);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(18);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(19);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

var _reactUniversalComponent = __webpack_require__(21);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/nicogame/jenkins/workspace/publish-github.com/target/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Reference',
  file: '/home/nicogame/jenkins/workspace/publish-github.com/target/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Reference', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Reference');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Reference';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/nicogame/jenkins/workspace/publish-github.com/target/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 2

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(22);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(23);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".Reference__Header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .Reference__Header > h1 {\n    flex-grow: 1; }\n\n.Reference__EditButton {\n  flex-shrink: 0;\n  display: block;\n  border: solid 1px #3399EE;\n  border-radius: 4px;\n  padding: .5rem 1rem;\n  margin-left: 1rem;\n  transition: opacity .2s ease-in-out; }\n  .Reference__EditButton:hover {\n    opacity: .75; }\n\n.Reference__Description {\n  font-size: .75rem; }\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _classnames = __webpack_require__(28);

var _classnames2 = _interopRequireDefault(_classnames);

var _favicon = __webpack_require__(29);

var _favicon2 = _interopRequireDefault(_favicon);

var _logo = __webpack_require__(30);

var _logo2 = _interopRequireDefault(_logo);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SITE_NAME = "ゲームアツマール APIリファレンス";

var Meta = function Meta(_ref) {
  var title = _ref.title;

  var titleText = (title ? title + " - " : "") + SITE_NAME;
  var description = "ゲームアツマールに投稿したゲームから利用可能なAPIのリファレンスです。";

  return _react2.default.createElement(
    _reactStatic.Head,
    null,
    _react2.default.createElement(
      "title",
      null,
      titleText
    ),
    _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    _react2.default.createElement("meta", { name: "description", content: description }),
    _react2.default.createElement("meta", { name: "keywords", content: "\u30B2\u30FC\u30E0\u30A2\u30C4\u30DE\u30FC\u30EB,RPG\u30C4\u30AF\u30FC\u30EBMV,\u81EA\u4F5C\u30B2\u30FC\u30E0,\u30A4\u30F3\u30C7\u30A3\u30FC\u30BA\u30B2\u30FC\u30E0,\u30B2\u30FC\u30E0,\u30D5\u30EA\u30FC\u30B2\u30FC\u30E0,\u540C\u4EBA\u30B2\u30FC\u30E0,\u7121\u6599,\u30CB\u30B3\u30CB\u30B3" }),
    _react2.default.createElement("meta", { property: "og:title", content: titleText }),
    _react2.default.createElement("meta", { property: "og:type", content: "website" }),
    _react2.default.createElement("meta", { property: "og:url", content: "https://site.nicovideo.jp/atsumaru/declaration/" }),
    _react2.default.createElement("meta", { property: "og:image", content: "https://site.nicovideo.jp/atsumaru/declaration/img/2018/img2.jpg" }),
    _react2.default.createElement("meta", { property: "og:site_name", content: "\u30B2\u30FC\u30E0\u30A2\u30C4\u30DE\u30FC\u30EB" }),
    _react2.default.createElement("meta", { property: "og:description", content: description }),
    _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    _react2.default.createElement("meta", { name: "twitter:site", content: "@nico_indiesgame" }),
    _react2.default.createElement("link", { rel: "icon", href: _favicon2.default })
  );
};

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "Header" },
    _react2.default.createElement(
      "nav",
      { className: "Header__Nav" },
      _react2.default.createElement(
        "a",
        { href: "http://www.nicovideo.jp/" },
        "\u30CB\u30B3\u30CB\u30B3"
      ),
      _react2.default.createElement(
        "a",
        { href: "https://game.nicovideo.jp/atsumaru/" },
        "\u30B2\u30FC\u30E0\u30A2\u30C4\u30DE\u30FC\u30EB"
      )
    )
  );
};

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "Footer" },
    _react2.default.createElement(
      "nav",
      { className: "Footer__Nav" },
      _react2.default.createElement(
        "a",
        { href: "https://game.nicovideo.jp/atsumaru/" },
        "\u30B2\u30FC\u30E0\u30A2\u30C4\u30DE\u30FC\u30EB \u306B\u623B\u308B"
      )
    ),
    _react2.default.createElement(
      "span",
      null,
      "\xA9DWANGO Co., Ltd."
    )
  );
};

var MainNavigationApiLink = function (_React$Component) {
  _inherits(MainNavigationApiLink, _React$Component);

  function MainNavigationApiLink(props, context) {
    _classCallCheck(this, MainNavigationApiLink);

    var _this = _possibleConstructorReturn(this, (MainNavigationApiLink.__proto__ || Object.getPrototypeOf(MainNavigationApiLink)).call(this, props, context));

    _this.state = { isOpen: props.defaultOpen || false };

    _this.onClickAngle = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      _this.setState({ isOpen: !_this.state.isOpen });
    };
    _this.onClickLink = function () {
      return _this.setState({ isOpen: true });
    };
    return _this;
  }

  _createClass(MainNavigationApiLink, [{
    key: "render",
    value: function render() {
      var api = this.props.api;
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactStatic.Link,
          {
            className: "MainNavigationItem",
            to: "/" + api.slug,
            title: api.description,
            onClick: this.onClickLink,
            exact: true
          },
          _react2.default.createElement(
            "span",
            { className: "MainNavigationItem__Text" },
            api.title
          ),
          api.children.length > 0 ? _react2.default.createElement("button", { className: "MainNavigationItem__Button", onClick: this.onClickAngle, "data-is-open": "" + isOpen }) : null
        ),
        _react2.default.createElement(
          "div",
          { className: "MainNavigationItem__Children", "aria-hidden": !isOpen },
          api.children.map(function (child) {
            return _react2.default.createElement(
              _reactStatic.Link,
              {
                className: (0, _classnames2.default)("MainNavigationItem", "MainNavigationItem--child"),
                key: child.slug,
                to: "/" + child.slug,
                title: child.description,
                exact: true
              },
              _react2.default.createElement(
                "span",
                { className: "MainNavigationItem__Text" },
                child.title
              )
            );
          })
        )
      );
    }
  }]);

  return MainNavigationApiLink;
}(_react2.default.Component);

var MainNavigation = function MainNavigation(_ref2) {
  var apiList = _ref2.apiList,
      path = _ref2.path;
  return _react2.default.createElement(
    "nav",
    { className: "MainNavigation" },
    _react2.default.createElement(
      "div",
      { className: "MainNavigation__LogoContainer" },
      _react2.default.createElement(
        _reactStatic.Link,
        { to: "/", className: "MainNavigation__Logo" },
        _react2.default.createElement("img", { src: _logo2.default, alt: "\u30B2\u30FC\u30E0\u30A2\u30C4\u30DE\u30FC\u30EB" }),
        "API\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"
      )
    ),
    _react2.default.createElement(
      _reactStatic.Link,
      { className: "MainNavigationItem", to: "/", exact: true },
      "\u6982\u8981"
    ),
    apiList.map(function (api) {
      return _react2.default.createElement(MainNavigationApiLink, { key: api.slug, api: api, defaultOpen: !!path.match(api.slug) });
    })
  );
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref3) {
  var _ref3$apiList = _ref3.apiList,
      apiList = _ref3$apiList === undefined ? [] : _ref3$apiList,
      _ref3$title = _ref3.title,
      title = _ref3$title === undefined ? "" : _ref3$title,
      _ref3$path = _ref3.path,
      path = _ref3$path === undefined ? "/" : _ref3$path,
      children = _ref3.children;
  return _react2.default.createElement(
    "div",
    { className: "MainLayout" },
    _react2.default.createElement(Meta, { title: title }),
    _react2.default.createElement(Header, null),
    _react2.default.createElement(
      "main",
      { className: "MainLayout__Body" },
      _react2.default.createElement(MainNavigation, { apiList: apiList, path: path }),
      _react2.default.createElement(
        "article",
        { className: "MainSection markdown-body" },
        children
      )
    ),
    _react2.default.createElement(Footer, null)
  );
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/favicon.cdb3578c.ico";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAABACAYAAADyM7XuAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAEKpJREFUeJzt3X2UVOV9B/DvnZed3WFfYEFeAlz2kRQEhQAxRhtFTWI0NTFaMEE4KvbYaNVTSGlCUpsGba21NGkAjzEJvvU0nrZAgi9R0pyTEI0t0NQXTAkY5IErKLC7sAs7szs7L7d/zO7szHLvnWde7p3Z2e/nnD1n773PfZ7f7rz8Zp57n+cBiIiIiIiIiIiIiIioimhuVBoOBG8E8BPF4huiifhqN+IgIiIa7XyVDoCIiIjcw0RPRERUwwKqBbfps1oAXJ21a/8S4539gxvhQHA5gLqBzUXZ584I1mG8P92UpgGdLck3Bo8tmtXY/MjdbSsHt5d8c39477uRqGJYz0YT8X7Vv4GIiGi0UU70AARyr7s/AGBd1vZjAFqsTrx2TAuuCDemG2zQcPHfjluYdXghgDsGN06ejicB+BVj2g6AiZ6IiMhG1XXd+33KSZ6IiIjyqLpET0REROVTSNd9jh90tf9hOBB8M2tX0+AvY3y+w6vGTWqLw0TcNNEWrLOoIe3Hr3Ri2686M9vt3XGnZp8E8ELWdqTgwAs08ca/esMMNbfZHQ8c33siaPz3cYcqYgB6yx6Ytd2GlA8P36kL8SKAxhLq7Rv4KVnyirFzzPOCrXbHtVOJrceeev3PsvdtXrvgsvMn+19yqnflxlNv5Wk6AsDxyVVGDxtS7s7e8ZUZH/7rNmhr7E7ohNn3tC95wKFOE0B3uQJUsMKQMuf1pQtxH4ClJdRZtteCOT00LvmRplm2BRJm1/vf+82c4bt1If4OwEWKzXzZkPKkLoQA8M+K51i+BrPavwDA1xXret2QcqNFHY8BCCvW4ar+2dfPS4VbLS/ZAoDWe3rLiZc3fcPLmLygC3EJgOWKxXcYUu4Ydv5YAKrDyo8bUj5eSHzDFZ3ou5LJZgAfsa5Ui8wJ1SvVc7Q9hj2/O6va7NvRRHy7auFyMEPNbammKWNtj3ccGAtgtochFeNy2Nw/4bl6H8zWoO1hrTtxzpuz349xs6cGbR+DAVeWGloZPT18RxBom2Zqtn+DLz2jxWT3QiqY1YP0YVTJ/9n0aTAn23+B0CLJCTaHLof63zD4RtwC4Avq0TmaDOB2xbJjAZyT6JFOMFXxek6NOQ/JcW22xwMn/+8y76Lx1FwAqxTLdgHYMWzfWADfUjz/LQAlJfqiu+6nBIIX2x2bFAjaf9ImIiIiz+R8ow8Hgq0A9KxdMpqIW3YXNvr8/gl+6w6BVr/f/ivbMKGgD03h/PffBQNacvrEUNPWBy+w+1bUN/WLu8rSvUxERFQrhmfqGwA8lbV9E9JD2M5xU9NY3NSUrzf1XP6Q1gugYXD7rhsm464blHos/QAeHPixMny4HxER0aiXr+u+q+wt+pEoe51E1YU9S0RUNTi8rkRakp9b6BxM9EQAAF+y0hFQ/rvu7xtYiQ5rTx6te2TiNNuCF65dA3+99Z32iUgEZjL9eAcb/aGmC+3vls2W6utE5F37RfA2bns/87txInZdOJBza8DT0UT8sFJDpUgx0RMRWTJTrg+BpvzyJfolg7+cTCY+cCp4/q23INjU5FRkkFqWBxDv+r1jot+0LSekjw/8DNoJ4LBqW3YCx/eeGBhCZ8l/5mipTYwq2qFe+Drth7Nr0eTh4fsOHIu3v9cxsr8YHNJMowsp2+NnNNPDaEY+rTsB3+v2w3K1pKk8ZpeK5z91EFqf/RVeX6T9mIfhkI2ix9GPFgOT4VT7OPkRw/du3vlSDg/f8ewr0VOuBOOhPVrKgFbpKGqH1pWA3yHRAzjjVSyjWfDwr/MVcZoEijzCa/Q0Eih1FRER0bkC2/RZmWlsfx450/ov3Z2WBZt8vpyZpi5cuwbn33pLZlux276w4JoFJl0/1HV/dt8TiMoXM9vPPzw0idrzr53C5hdPlD2GAi2D8yfYZrj74aqjxPN7AFzhcFxDcTNyLQVwb1ERFe5/Adxpsf8lAFMU67jaYt/XAVxbbFAFehbA+jxlWgBX+wh6LPath8WsfwUKoLTpmH9ZYvu1YAWsZy70yucB/EkF26cCBZA1jW29Zp+D/NBynlj++npXkns2zReAPzw0xl4LjMk5PmfG0HTPu/dZvS957oAh5Zv5i1WtpBvx60IsKHedDnqs/gZdCOXljA0pd1qcv7K0sArSXo3PI0PKYwAqes1VF6KSzVcFQ8qfVrJ9XYi2SrZPhWPXPRERUQ3LuRmvxe/HBXVDQ+RkPIaYOWLvBl6QNdyuL5qI76pkMEREREUoeQRJTqKfH2rA/FBmdlrc334MRly5x7PaZC8reQRAW4XiICIiKlbJY4s5vM5luhCXArg0a5eb69MbhpS/KOH8kC6EyhrJ/QCiBdR7SZHxjFYLHR6Hcj9/DhpS5h0jRVQuuhAtyL3hNQWPh0NeYfr080ytVaVsH/CTx48cPOJ2TG5ionffdVBfd7hUzwEoJdHXI7cnhCpj8cCPF54BwERPXhIA7GdC88B0U8PHTLVb1F7VUgDwXVcDclkA6VXfBl2KrCFES5rGIZJKz+YV0pxH8txx222IRtKzHc698CJ868EHHMvb+cbX1qKzMz1KbPp0Hd9cp5YjL5nTiPtvnZ7ZXv9vRzv64+YEh1OIiGgUGm13oQeWGO+sG9zYps9ajaxEv6g+bHWOpR0vvYwz3eml67u7LJewV7L9x9tgHDEAAPPmz1dO9HPbwpjbNhTvhq3vd/fHk0z0RDVCF6LwdbFrkC7EgwB0haImgK8ZUraXse0psJ5nYkQJVToAj3nSdX/7ihXYs3s3ACBUF0J9w9ANf8uW34LVa9Z4EQYRUS34NYCfKZZtBHBzqQ0OJPi1AO5C+hIfjSCBcCCY+ZR80hdoaPSp5f6Ez6/cyInjJzLf0odbfOWVyvUQEY12hpT/qQvxFIA7FIov1YW42ZBySzFtMcHXhgCA04MbX+2L/0/oc2uVTnxo+iJc4FZUNr7T4cMPf6/2AaP+zrlf6dn09qsDm/bLhhGRJ3QhboT9TVgxAH15qijHlL/LoJ6wBpem3If0DWQqChmNUoq/QPoy64cUym7ShfiFIaX1/OYWmOBriydd9+fPnImurqGlDBOJBCKR9JS141rHKddjFjB5T3xCw9loIm6/fiIRVZMQPLh0akh5vIhz+lGGJa/LyZCySxfiywBezFsYmARgI9Jz5Dtigq9NniT6x37w/bLUczYWKUs9REQjnSHlT3UhngFwu0Lx5boQWwwpt1sddDHBj9ipVWtJTqI3I6fPS+z7eWbbP+NiaGPUvnF/adkyRHvTvVazZxe/fPunPn0N2ttPAgDa2hx6y5Im+vcO9UT5xocQ0HMW2bluykOfaBv4veeD+1/bWnRQRETVaTWAa6DWhf+4LsSr2V34Lib49wD8PYAny1gnFSk30fd2t8X3/Htm29eqKyf67z66qSwBPfr495TKmfEUercfymzXLZgwPNFn32xwBAATPRHVlGK78L1I8AOXPKgKcGY89+10OBYGUJfn/CkAvli2aJzFAPxDgeeojG2ei/S3DlKzG8COEs6vh/qb954S2qEqUEQXfgjA9ahcgj+F9IyMdlyfL+EU8AeHNFNpCtxkld2fUShdiHlM9C4bWNt8Z7Hn60JcBe8SfZ8h5bpyVzqwljsTvbpdbjwONOIUcn17DdLTbU9SKLukuHAsFfwN3pDSALCyjDEUbEMlG/eALsQ8pPPGzQBmB5A7y9FSAPdWIrBSxQ92I/XU7zLb9Z+dAf9k9Zn9iIiqjPIUo4aUnboQd8O7OeTZRV9lhif37GOBaCK+c3AjHAgu8Da08jF74kj0xIe2+xIVCaMSjRIRGVJu14V4FsByF5thgq8iTsk9G7vuy6v4Sf7JbeWYbMUrni7ZSTXlzwF8Cmpd+IVggq8Sqsk9m2OiT505CdSlu781nx/a2KERHF2RGN7rHBrXPq11DPIscFewlJlCT//QRFP9ybhD6eEnIwJg8Gu9V2+c03ShOoFWRhyA0wQBjcWHQ1laKh1AAZp1IdrKWF8SwNkCz+k2pMzpodKFaAXQXEIcE0s4tyx0IRpR2S84rr6eXejCZ4KvAsUk92yOT/j4fw3dGKk1jkf90kcy2+tf2Iv1L+zNbB/auAzNDfluIC/M/vZD+PTmlUWdG3lm/+eyL0t45NX8RYjyWjXwU0njAAyfWfJv4F1czxhSrnSh3lcALHSh3qpRpi58JnhnQQ/bWgxgb95SDth1T0SjyWhZinwVgM8AKHSpbiZ4NWM8bKvkvvKqTvSxBJ9n2aaaGqY6POb9wASrNQI/+9H6oM/husquAzF0nnV13R8vP/26LjF5HqA5LK6USk6ElN4FVKighpRocCyiRZJ1qOI/oRbMnBzA1PH2z6NY3BxvFPkYGFJ26ELcA+A/FE+JIj1EjwneA20TA8Fgnuz77vEEUmV6Wx7e1C4AD2QOzvnkbQg1CgDQ6pzfGDa8/FuEgvlXlvP7tH40/ybTxx/0BxAOWtctTx+13J+uSANyh0MuRLqLo2bNM3241rT/QnJIM2c+b7F/zQ3NDWPq7RP9vd8/jc6zrr62vfz067r+2dfDDNjPNRI4/vYsD8MpmFnvQ3Kx85wkvjfPOr/gqWSf/1gDvnS5/RDg3e/0z9miuuq8BUPKLboQW5EeNp1PGMAhJnlv/NFH6yfdepXz2+I1606ip7c8A7lyEn00Ed+FdLIHAIz/+PIFUFyeccPLv1Vs0ozViSdLvpivBX2IJuKrB7fDgeBq1HiiJyIq0D0AroJaF/5mXYiLDCk56qPGjJbrVUSlqqnLDzQ6GFK2I53sVUwH8G0Xw6HK2M1ET6Smpi4/0OhhSLkF6ot63akL8Rk34yFP7AbwlwBmGFJemu9mvBWw+SYTe27do6mezuWalv+OwODiP4V/2nyl6Hqe2AfzjPV4+fprpyM413Ydgh8hd075g0oNEpVbMtZb6RCIhrkH6enOxyuUZRf+yLQbwBYAWwbWE8hwTPSdm2+3ncglHAh2ANCUbhVIJVVKAQDMM3GkumLWx2L2tyBGE/F2AO3KDRG5REsl1Z/wRB4wpGzXhVgF4F8Vik8H8I8A7nY3KioD2+Sereq67lM9/R/YHTOj8ZImDRit8g3jIKpC0fxFqBCGlD8C8Jxi8bt0Ia7OX4wqIKdb3pDy205JHihgHH04EGxB7kp3M+3KaqFGaOOm5mzbSXX0IdnRCy3oSw+ZS+Wszx5BVhe81hDoU423jA7Cg/WRBzQACNkdjGtmc7dpNtkd7z93JjMAwPHTScf/W8rEUaTfWAudJlVVO4C3FMset9jXW8D5dpdsDJQ2fetJAEcAQIud/RCS/Q6XrMwei52noP43lCoAp6lWTfi1SHJynjqsVoU6Bu/+BrdG8b8P717PjmJxs6W9O2X7OMXipuXruUR3A1gEtdfCd3QhLjOkrMT7LuVS+uZuR3nGnYGV7d5QKevXF6Duk/fZHDXP1okfZpJV3y+PIbbzmF1Vv4om4lcNbkx56BPbAXxhcPuD+18bSQuVEBERFUQXImBIWdJyrFXXdU9ERERppSZ5wK1Eb5q8GYmIiKgKFHKblgHgDqWSdeF6AJnrOrGf/dMfm5HT0wBA85mBxOT4vMFjyY5zRiJ9FUDHwO/Dr9c+gdwhdEREROTAk2vc4UBwJ4ArFYuLaCJ+2L1oiIiIRg9eoyciIqphTPRERERERERERERERERERETe+H8sKbvlsfrBeQAAAABJRU5ErkJggg=="

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.MainLayout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%; }\n\n.Header {\n  background-color: #252525; }\n  .Header::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 6px;\n    background-image: linear-gradient(to right, #c30d23 20%, #f8d62d 20%, #f8d62d 40%, #00913a 40%, #00913a 60%, #046eb8 60%, #046eb8 80%, #7403b8 80%); }\n\n.Header__Nav {\n  display: flex;\n  align-items: baseline;\n  padding: .5rem 1.5rem; }\n  .Header__Nav > a {\n    color: #FFF;\n    font-weight: bold; }\n    .Header__Nav > a:nth-child(n+2) {\n      margin-left: 1em; }\n\n.Footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 1rem 2rem;\n  color: #FFF;\n  font-size: .75rem;\n  background-color: #252525; }\n\n.Footer__Nav > a {\n  color: #FFF; }\n  .Footer__Nav > a::before {\n    content: '\\300B   '; }\n\n.MainNavigation {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  width: 18rem;\n  padding: 1rem 0;\n  background-color: #f8f8f8; }\n  @media (max-width: 768px) {\n    .MainNavigation {\n      width: 100%; } }\n\n.MainNavigation__LogoContainer {\n  padding: 0 1rem; }\n\n.MainNavigation__Logo {\n  display: block;\n  text-align: right;\n  font-size: .75rem;\n  font-weight: normal;\n  max-width: 18rem;\n  margin: 0 auto 1rem;\n  color: #000;\n  transition: opacity ease-in-out .2s; }\n  .MainNavigation__Logo:hover {\n    opacity: .75;\n    text-decoration: none; }\n  .MainNavigation__Logo > img {\n    display: block;\n    width: 100%; }\n\n.MainNavigationItem {\n  display: flex;\n  align-items: center;\n  padding: .6rem 1.5rem;\n  transition: background-color 0.2s ease; }\n  .MainNavigationItem[aria-current] {\n    font-weight: bold;\n    color: #FFF;\n    cursor: default;\n    background-color: #3399EE; }\n    .MainNavigationItem[aria-current]:hover {\n      background-color: #3399EE;\n      text-decoration: none; }\n\n.MainNavigationItem--child {\n  padding-left: 2.5rem; }\n\n.MainNavigationItem__Icon {\n  flex-shrink: 0;\n  margin-right: .25rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  fill: currentColor; }\n\n.MainNavigationItem__Text {\n  flex-grow: 1; }\n\n.MainNavigationItem__Button {\n  outline: 0; }\n  .MainNavigationItem__Button::after {\n    content: '';\n    display: block;\n    width: .75rem;\n    height: .75rem;\n    border-right: solid 4px currentColor;\n    border-bottom: solid 4px currentColor;\n    transform-origin: center center;\n    transform: rotate(-45deg);\n    transition: transform 0.2s ease; }\n  .MainNavigationItem__Button[data-is-open=\"true\"]::after {\n    transform: rotate(45deg) translateY(-4px); }\n\n.MainNavigationItem__Children {\n  background-color: rgba(200, 200, 192, 0.3); }\n\n.MainNavigationItem__Children[aria-hidden=\"true\"] {\n  display: none; }\n\n.MainLayout__Body {\n  flex-grow: 1;\n  display: flex; }\n  @media (max-width: 768px) {\n    .MainLayout__Body {\n      flex-direction: column; } }\n\n.MainSection {\n  width: 100%;\n  max-width: 60rem;\n  padding: 2rem 1.5rem 4rem; }\n  .MainSection > table {\n    max-width: 100%; }\n    .MainSection > table td:nth-child(1),\n    .MainSection > table th:nth-child(1) {\n      font-weight: bold;\n      word-break: keep-all; }\n  .MainSection .negative {\n    color: #FF5555; }\n  .MainSection.markdown-body {\n    line-height: 1.5; }\n  .MainSection.markdown-body a {\n    color: #3399EE; }\n  .MainSection.markdown-body h2 {\n    margin-top: 3em; }\n  .MainSection.markdown-body h3 {\n    margin-top: 2em; }\n  .MainSection.markdown-body td:nth-child(1) {\n    min-width: 7em; }\n  .MainSection.markdown-body ul li,\n  .MainSection.markdown-body ol li {\n    margin-top: 0.75rem; }\n  .MainSection.markdown-body img {\n    max-width: 60%;\n    max-height: 60vh; }\n    @media (max-width: 768px) {\n      .MainSection.markdown-body img {\n        max-width: 100%; } }\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: 'Noto Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px; }\n\nhtml,\nbody,\n#root {\n  margin: 0;\n  padding: 0;\n  height: 100%; }\n\na {\n  text-decoration: none;\n  color: #3399EE; }\n  a:hover {\n    text-decoration: underline; }\n\nimg {\n  max-width: 100%; }\n", ""]);

// exports


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.71c98d7c.js.map