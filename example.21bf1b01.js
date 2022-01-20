// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"J4Nk":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"awqi":[function(require,module,exports) {
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var l = require("object-assign"),
    n = 60103,
    p = 60106;

exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
    r = 60110,
    t = 60112;
exports.Suspense = 60113;
var u = 60115,
    v = 60116;

if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}

var x = "function" === typeof Symbol && Symbol.iterator;

function y(a) {
  if (null === a || "object" !== typeof a) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var A = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    B = {};

function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
  current: null
},
    H = Object.prototype.hasOwnProperty,
    I = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function J(a, b, c) {
  var e,
      d = {},
      k = null,
      h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
  return {
    $$typeof: n,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}

function K(a, b) {
  return {
    $$typeof: n,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var M = /\/+/g;

function N(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function O(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case n:
        case p:
          h = !0;
      }

  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}

function P(a, b, c) {
  if (null == a) return a;
  var e = [],
      d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}

function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }

  if (1 === a._status) return a._result;
  throw a._result;
}

var R = {
  current: null
};

function S() {
  var a = R.current;
  if (null === a) throw Error(z(321));
  return a;
}

var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: P,
  forEach: function (a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function (a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!L(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = l({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }

  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = J;

exports.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};

exports.isValidElement = L;

exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return S().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return S().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return S().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return S().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return S().useRef(a);
};

exports.useState = function (a) {
  return S().useState(a);
};

exports.version = "17.0.2";
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"5IvP":[function(require,module,exports) {
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"5IvP"}],"0X/y":[function(require,module,exports) {
/** @license React v0.20.2
 * scheduler-tracing.profiling.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var g=0,l=0;exports.__interactionsRef=null;exports.__subscriberRef=null;exports.__interactionsRef={current:new Set};exports.__subscriberRef={current:null};var m=null;m=new Set;function n(e){var d=!1,a=null;m.forEach(function(c){try{c.onInteractionTraced(e)}catch(b){d||(d=!0,a=b)}});if(d)throw a;}function p(e){var d=!1,a=null;m.forEach(function(c){try{c.onInteractionScheduledWorkCompleted(e)}catch(b){d||(d=!0,a=b)}});if(d)throw a;}
function q(e,d){var a=!1,c=null;m.forEach(function(b){try{b.onWorkScheduled(e,d)}catch(f){a||(a=!0,c=f)}});if(a)throw c;}function r(e,d){var a=!1,c=null;m.forEach(function(b){try{b.onWorkStarted(e,d)}catch(f){a||(a=!0,c=f)}});if(a)throw c;}function t(e,d){var a=!1,c=null;m.forEach(function(b){try{b.onWorkStopped(e,d)}catch(f){a||(a=!0,c=f)}});if(a)throw c;}function u(e,d){var a=!1,c=null;m.forEach(function(b){try{b.onWorkCanceled(e,d)}catch(f){a||(a=!0,c=f)}});if(a)throw c;}
exports.unstable_clear=function(e){var d=exports.__interactionsRef.current;exports.__interactionsRef.current=new Set;try{return e()}finally{exports.__interactionsRef.current=d}};exports.unstable_getCurrent=function(){return exports.__interactionsRef.current};exports.unstable_getThreadID=function(){return++l};
exports.unstable_subscribe=function(e){m.add(e);1===m.size&&(exports.__subscriberRef.current={onInteractionScheduledWorkCompleted:p,onInteractionTraced:n,onWorkCanceled:u,onWorkScheduled:q,onWorkStarted:r,onWorkStopped:t})};
exports.unstable_trace=function(e,d,a){var c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,b={__count:1,id:g++,name:e,timestamp:d},f=exports.__interactionsRef.current,k=new Set(f);k.add(b);exports.__interactionsRef.current=k;var h=exports.__subscriberRef.current;try{if(null!==h)h.onInteractionTraced(b)}finally{try{if(null!==h)h.onWorkStarted(k,c)}finally{try{var v=a()}finally{exports.__interactionsRef.current=f;try{if(null!==h)h.onWorkStopped(k,c)}finally{if(b.__count--,null!==h&&0===b.__count)h.onInteractionScheduledWorkCompleted(b)}}}}return v};
exports.unstable_unsubscribe=function(e){m.delete(e);0===m.size&&(exports.__subscriberRef.current=null)};
exports.unstable_wrap=function(e){function d(){var d=exports.__interactionsRef.current;exports.__interactionsRef.current=c;b=exports.__subscriberRef.current;try{try{if(null!==b)b.onWorkStarted(c,a)}finally{try{var h=e.apply(void 0,arguments)}finally{if(exports.__interactionsRef.current=d,null!==b)b.onWorkStopped(c,a)}}return h}finally{f||(f=!0,c.forEach(function(a){a.__count--;if(null!==b&&0===a.__count)b.onInteractionScheduledWorkCompleted(a)}))}}var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:
0,c=exports.__interactionsRef.current,b=exports.__subscriberRef.current;if(null!==b)b.onWorkScheduled(c,a);c.forEach(function(a){a.__count++});var f=!1;d.cancel=function(){b=exports.__subscriberRef.current;try{if(null!==b)b.onWorkCanceled(c,a)}finally{c.forEach(function(a){a.__count--;if(b&&0===a.__count)b.onInteractionScheduledWorkCompleted(a)})}};return d};

},{}],"Ks3F":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler-tracing.profiling.min.js');
} else {
  module.exports = require('./cjs/scheduler-tracing.development.js');
}
},{"./cjs/scheduler-tracing.profiling.min.js":"0X/y"}],"NgRO":[function(require,module,exports) {
/** @license React v17.0.2
 * react-dom.profiling.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler"),x=require("scheduler/tracing");function E(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(E(227));var ba=new Set,ca={};
function da(a,b){ea(a,b);ea(a+"Capture",b)}function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function qa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(pa,
qa);G[b]=new F(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(pa,qa);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(pa,qa);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){G[a]=new F(a,1,!1,a.toLowerCase(),null,!1,!1)});
G.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){G[a]=new F(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ra(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var sa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=60103,ua=60106,va=60107,wa=60108,ya=60114,za=60109,Aa=60110,Ba=60112,Ca=60113,Da=60120,Ea=60115,Fa=60116,Ga=60121,Ha=60128,Ia=60129,Ja=60130,Ka=60131;
if("function"===typeof Symbol&&Symbol.for){var H=Symbol.for;ta=H("react.element");ua=H("react.portal");va=H("react.fragment");wa=H("react.strict_mode");ya=H("react.profiler");za=H("react.provider");Aa=H("react.context");Ba=H("react.forward_ref");Ca=H("react.suspense");Da=H("react.suspense_list");Ea=H("react.memo");Fa=H("react.lazy");Ga=H("react.block");H("react.scope");Ha=H("react.opaque.id");Ia=H("react.debug_trace_mode");Ja=H("react.offscreen");Ka=H("react.legacy_hidden")}
var La="function"===typeof Symbol&&Symbol.iterator;function Ma(a){if(null===a||"object"!==typeof a)return null;a=La&&a[La]||a["@@iterator"];return"function"===typeof a?a:null}var Na;function Oa(a){if(void 0===Na)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Na=b&&b[1]||""}return"\n"+Na+a}var Pa=!1;
function Qa(a,b){if(!a||Pa)return"";Pa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Pa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Oa(a):""}
function Ra(a){switch(a.tag){case 5:return Oa(a.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return a=Qa(a.type,!1),a;case 11:return a=Qa(a.type.render,!1),a;case 22:return a=Qa(a.type._render,!1),a;case 1:return a=Qa(a.type,!0),a;default:return""}}
function Sa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case va:return"Fragment";case ua:return"Portal";case ya:return"Profiler";case wa:return"StrictMode";case Ca:return"Suspense";case Da:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Aa:return(a.displayName||"Context")+".Consumer";case za:return(a._context.displayName||"Context")+".Provider";case Ba:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Ea:return Sa(a.type);case Ga:return Sa(a._render);case Fa:b=a._payload;a=a._init;try{return Sa(a(b))}catch(c){}}return null}function Ta(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ua(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Va(a){var b=Ua(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wa(a){a._valueTracker||(a._valueTracker=Va(a))}function Xa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ua(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ya(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Za(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function $a(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ta(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ra(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Ta(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Ta(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Ya(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function eb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function fb(a,b){a=n({children:void 0},b);if(b=eb(b.children))a.children=b;return a}
function gb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ta(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function hb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(E(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(E(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(E(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Ta(c)}}
function kb(a,b){var c=Ta(b.value),d=Ta(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var pb,qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==mb.svg||"innerHTML"in a)a.innerHTML=b;else{pb=pb||document.createElement("div");pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var sb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tb=["Webkit","ms","Moz","O"];Object.keys(sb).forEach(function(a){tb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);sb[b]=sb[a]})});function ub(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||sb.hasOwnProperty(a)&&sb[a]?(""+b).trim():b+"px"}
function vb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ub(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var wb=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function xb(a,b){if(b){if(wb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(E(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(E(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(E(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(E(62));}}
function yb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function zb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var Ab=null,Bb=null,Cb=null;
function Db(a){if(a=Eb(a)){if("function"!==typeof Ab)throw Error(E(280));var b=a.stateNode;b&&(b=Fb(b),Ab(a.stateNode,a.type,b))}}function Gb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Hb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}function Ib(a,b){return a(b)}function Jb(a,b,c,d,e){return a(b,c,d,e)}function Kb(){}var Lb=Ib,Mb=!1,Nb=!1;function Ob(){if(null!==Bb||null!==Cb)Kb(),Hb()}
function Pb(a,b,c){if(Nb)return a(b,c);Nb=!0;try{return Lb(a,b,c)}finally{Nb=!1,Ob()}}
function Qb(a,b){var c=a.stateNode;if(null===c)return null;var d=Fb(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(E(231,b,typeof c));return c}var Rb=!1;if(fa)try{var Sb={};Object.defineProperty(Sb,"passive",{get:function(){Rb=!0}});window.addEventListener("test",Sb,Sb);window.removeEventListener("test",Sb,Sb)}catch(a){Rb=!1}function Tb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(p){this.onError(p)}}var Ub=!1,Vb=null,Wb=!1,Xb=null,Yb={onError:function(a){Ub=!0;Vb=a}};function Zb(a,b,c,d,e,f,g,h,k){Ub=!1;Vb=null;Tb.apply(Yb,arguments)}
function $b(a,b,c,d,e,f,g,h,k){Zb.apply(this,arguments);if(Ub){if(Ub){var l=Vb;Ub=!1;Vb=null}else throw Error(E(198));Wb||(Wb=!0,Xb=l)}}function ac(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function bc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function cc(a){if(ac(a)!==a)throw Error(E(188));}
function dc(a){var b=a.alternate;if(!b){b=ac(a);if(null===b)throw Error(E(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return cc(e),a;if(f===d)return cc(e),b;f=f.sibling}throw Error(E(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(E(189));}}if(c.alternate!==d)throw Error(E(190));}if(3!==c.tag)throw Error(E(188));return c.stateNode.current===c?a:b}function ec(a){a=dc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function fc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var gc,hc,ic,jc,kc=!1,lc=[],mc=null,nc=null,oc=null,pc=new Map,qc=new Map,rc=[],sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function uc(a,b){switch(a){case "focusin":case "focusout":mc=null;break;case "dragenter":case "dragleave":nc=null;break;case "mouseover":case "mouseout":oc=null;break;case "pointerover":case "pointerout":pc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":qc.delete(b.pointerId)}}
function vc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=tc(b,c,d,e,f),null!==b&&(b=Eb(b),null!==b&&hc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function wc(a,b,c,d,e){switch(b){case "focusin":return mc=vc(mc,a,b,c,d,e),!0;case "dragenter":return nc=vc(nc,a,b,c,d,e),!0;case "mouseover":return oc=vc(oc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;pc.set(f,vc(pc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,qc.set(f,vc(qc.get(f)||null,a,b,c,d,e)),!0}return!1}
function xc(a){var b=yc(a.target);if(null!==b){var c=ac(b);if(null!==c)if(b=c.tag,13===b){if(b=bc(c),null!==b){a.blockedOn=b;jc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){ic(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function zc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Ac(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Eb(c),null!==b&&hc(b),a.blockedOn=c,!1;b.shift()}return!0}function Bc(a,b,c){zc(a)&&c.delete(b)}
function Cc(){for(kc=!1;0<lc.length;){var a=lc[0];if(null!==a.blockedOn){a=Eb(a.blockedOn);null!==a&&gc(a);break}for(var b=a.targetContainers;0<b.length;){var c=Ac(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&lc.shift()}null!==mc&&zc(mc)&&(mc=null);null!==nc&&zc(nc)&&(nc=null);null!==oc&&zc(oc)&&(oc=null);pc.forEach(Bc);qc.forEach(Bc)}
function Dc(a,b){a.blockedOn===b&&(a.blockedOn=null,kc||(kc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cc)))}
function Ec(a){function b(b){return Dc(b,a)}if(0<lc.length){Dc(lc[0],a);for(var c=1;c<lc.length;c++){var d=lc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==mc&&Dc(mc,a);null!==nc&&Dc(nc,a);null!==oc&&Dc(oc,a);pc.forEach(b);qc.forEach(b);for(c=0;c<rc.length;c++)d=rc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<rc.length&&(c=rc[0],null===c.blockedOn);)xc(c),null===c.blockedOn&&rc.shift()}
function Fc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Gc={animationend:Fc("Animation","AnimationEnd"),animationiteration:Fc("Animation","AnimationIteration"),animationstart:Fc("Animation","AnimationStart"),transitionend:Fc("Transition","TransitionEnd")},Hc={},Ic={};
fa&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete Gc.animationend.animation,delete Gc.animationiteration.animation,delete Gc.animationstart.animation),"TransitionEvent"in window||delete Gc.transitionend.transition);function Jc(a){if(Hc[a])return Hc[a];if(!Gc[a])return a;var b=Gc[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ic)return Hc[a]=b[c];return a}
var Kc=Jc("animationend"),Lc=Jc("animationiteration"),Mc=Jc("animationstart"),Nc=Jc("transitionend"),Oc=new Map,Pc=new Map,Qc=["abort","abort",Kc,"animationEnd",Lc,"animationIteration",Mc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Nc,"transitionEnd","waiting","waiting"];function Rc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Pc.set(d,b);Oc.set(d,e);da(e,[d])}}var Sc=r.unstable_now;if(null==x.__interactionsRef||null==x.__interactionsRef.current)throw Error(E(302));Sc();var I=8;
function Tc(a){if(0!==(1&a))return I=15,1;if(0!==(2&a))return I=14,2;if(0!==(4&a))return I=13,4;var b=24&a;if(0!==b)return I=12,b;if(0!==(a&32))return I=11,32;b=192&a;if(0!==b)return I=10,b;if(0!==(a&256))return I=9,256;b=3584&a;if(0!==b)return I=8,b;if(0!==(a&4096))return I=7,4096;b=4186112&a;if(0!==b)return I=6,b;b=62914560&a;if(0!==b)return I=5,b;if(a&67108864)return I=4,67108864;if(0!==(a&134217728))return I=3,134217728;b=805306368&a;if(0!==b)return I=2,b;if(0!==(1073741824&a))return I=1,1073741824;
I=8;return a}function Uc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Vc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(E(358,a));}}
function Wc(a,b){var c=a.pendingLanes;if(0===c)return I=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=I=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Tc(k),e=I):(h&=f,0!==h&&(d=Tc(h),e=I))}else f=c&~g,0!==f?(d=Tc(f),e=I):0!==h&&(d=Tc(h),e=I);if(0===d)return 0;d=31-Xc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Tc(b);if(e<=I)return b;I=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Xc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Yc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Zc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=$c(24&~b),0===a?Zc(10,b):a;case 10:return a=$c(192&~b),0===a?Zc(8,b):a;case 8:return a=$c(3584&~b),0===a&&(a=$c(4186112&~b),0===a&&(a=512)),a;case 2:return b=$c(805306368&~b),0===b&&(b=268435456),b}throw Error(E(358,a));}function $c(a){return a&-a}function ad(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function bd(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Xc(b);a[b]=c}var Xc=Math.clz32?Math.clz32:cd,dd=Math.log,ed=Math.LN2;function cd(a){return 0===a?32:31-(dd(a)/ed|0)|0}var fd=r.unstable_UserBlockingPriority,gd=r.unstable_runWithPriority,hd=!0;function id(a,b,c,d){Mb||Kb();var e=jd,f=Mb;Mb=!0;try{Jb(e,a,b,c,d)}finally{(Mb=f)||Ob()}}function kd(a,b,c,d){gd(fd,jd.bind(null,a,b,c,d))}
function jd(a,b,c,d){if(hd){var e;if((e=0===(b&4))&&0<lc.length&&-1<sc.indexOf(a))a=tc(null,a,b,c,d),lc.push(a);else{var f=Ac(a,b,c,d);if(null===f)e&&uc(a,d);else{if(e){if(-1<sc.indexOf(a)){a=tc(f,a,b,c,d);lc.push(a);return}if(wc(f,a,b,c,d))return;uc(a,d)}ld(a,b,d,null,c)}}}}
function Ac(a,b,c,d){var e=zb(d);e=yc(e);if(null!==e){var f=ac(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=bc(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}ld(a,b,d,e,c);return null}var md=null,nd=null,od=null;
function pd(){if(od)return od;var a,b=nd,c=b.length,d,e="value"in md?md.value:md.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return od=e.slice(a,1<d?1-d:void 0)}function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function rd(){return!0}function sd(){return!1}
function td(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?rd:sd;this.isPropagationStopped=sd;return this}n(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=rd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=rd)},persist:function(){},isPersistent:rd});return b}
var ud={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=td(ud),wd=n({},ud,{view:0,detail:0}),xd=td(wd),yd,zd,Ad,Cd=n({},wd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==Ad&&(Ad&&"mousemove"===a.type?(yd=a.screenX-Ad.screenX,zd=a.screenY-Ad.screenY):zd=yd=0,Ad=a);return yd},movementY:function(a){return"movementY"in a?a.movementY:zd}}),Dd=td(Cd),Ed=n({},Cd,{dataTransfer:0}),Fd=td(Ed),Gd=n({},wd,{relatedTarget:0}),Hd=td(Gd),Id=n({},ud,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=td(Id),Kd=n({},ud,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Ld=td(Kd),Md=n({},ud,{data:0}),Nd=td(Md),Od={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Qd[a])?!!b[a]:!1}function Bd(){return Rd}
var Sd=n({},wd,{key:function(a){if(a.key){var b=Od[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Pd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(a){return"keypress"===a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Td=td(Sd),Ud=n({},Cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=td(Ud),Wd=n({},wd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),Xd=td(Wd),Yd=n({},ud,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=td(Yd),$d=n({},Cd,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),ae=td($d),be=[9,13,27,32],ce=fa&&"CompositionEvent"in window,de=null;fa&&"documentMode"in document&&(de=document.documentMode);var ee=fa&&"TextEvent"in window&&!de,fe=fa&&(!ce||de&&8<de&&11>=de),ge=String.fromCharCode(32),he=!1;
function ie(a,b){switch(a){case "keyup":return-1!==be.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function je(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ke=!1;function le(a,b){switch(a){case "compositionend":return je(b);case "keypress":if(32!==b.which)return null;he=!0;return ge;case "textInput":return a=b.data,a===ge&&he?null:a;default:return null}}
function me(a,b){if(ke)return"compositionend"===a||!ce&&ie(a,b)?(a=pd(),od=nd=md=null,ke=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return fe&&"ko"!==b.locale?null:b.data;default:return null}}
var ne={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!ne[a.type]:"textarea"===b?!0:!1}function pe(a,b,c,d){Gb(d);b=qe(b,"onChange");0<b.length&&(c=new vd("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var re=null,se=null;function te(a){ue(a,0)}function ve(a){var b=we(a);if(Xa(b))return a}
function xe(a,b){if("change"===a)return b}var ye=!1;if(fa){var ze;if(fa){var Ae="oninput"in document;if(!Ae){var Be=document.createElement("div");Be.setAttribute("oninput","return;");Ae="function"===typeof Be.oninput}ze=Ae}else ze=!1;ye=ze&&(!document.documentMode||9<document.documentMode)}function Ce(){re&&(re.detachEvent("onpropertychange",De),se=re=null)}function De(a){if("value"===a.propertyName&&ve(se)){var b=[];pe(b,se,a,zb(a));a=te;if(Mb)a(b);else{Mb=!0;try{Ib(a,b)}finally{Mb=!1,Ob()}}}}
function Ee(a,b,c){"focusin"===a?(Ce(),re=b,se=c,re.attachEvent("onpropertychange",De)):"focusout"===a&&Ce()}function Fe(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return ve(se)}function Ge(a,b){if("click"===a)return ve(b)}function He(a,b){if("input"===a||"change"===a)return ve(b)}function Ie(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var Je="function"===typeof Object.is?Object.is:Ie,Ke=Object.prototype.hasOwnProperty;
function Le(a,b){if(Je(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ke.call(b,c[d])||!Je(a[c[d]],b[c[d]]))return!1;return!0}function Me(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ne(a,b){var c=Me(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Me(c)}}function Oe(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Oe(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Pe(){for(var a=window,b=Ya();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Ya(a.document)}return b}function Qe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Re=fa&&"documentMode"in document&&11>=document.documentMode,Se=null,Te=null,Ue=null,Ve=!1;
function We(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Ve||null==Se||Se!==Ya(d)||(d=Se,"selectionStart"in d&&Qe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ue&&Le(Ue,d)||(Ue=d,d=qe(Te,"onSelect"),0<d.length&&(b=new vd("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Se)))}
Rc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Rc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Rc(Qc,2);for(var Xe="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ye=0;Ye<Xe.length;Ye++)Pc.set(Xe[Ye],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ze="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$e=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ze));
function af(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;$b(d,b,void 0,a);a.currentTarget=null}
function ue(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;af(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;af(e,h,l);f=k}}}if(Wb)throw a=Xb,Wb=!1,Xb=null,a;}
function K(a,b){var c=bf(b),d=a+"__bubble";c.has(d)||(cf(b,a,2,!1),c.add(d))}var df="_reactListening"+Math.random().toString(36).slice(2);function ef(a){a[df]||(a[df]=!0,ba.forEach(function(b){$e.has(b)||ff(b,!1,a,null);ff(b,!0,a,null)}))}
function ff(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&$e.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=bf(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),cf(f,a,e,b),g.add(h))}
function cf(a,b,c,d){var e=Pc.get(b);switch(void 0===e?2:e){case 0:e=id;break;case 1:e=kd;break;default:e=jd}c=e.bind(null,b,c,a);e=void 0;!Rb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function ld(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=yc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Pb(function(){var d=f,e=zb(c),g=[];
a:{var h=Oc.get(a);if(void 0!==h){var k=vd,t=a;switch(a){case "keypress":if(0===qd(c))break a;case "keydown":case "keyup":k=Td;break;case "focusin":t="focus";k=Hd;break;case "focusout":t="blur";k=Hd;break;case "beforeblur":case "afterblur":k=Hd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Fd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Xd;break;case Kc:case Lc:case Mc:k=Jd;break;case Nc:k=Zd;break;case "scroll":k=xd;break;case "wheel":k=ae;break;case "copy":case "cut":case "paste":k=Ld;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Vd}var z=0!==(b&4),B=!z&&"scroll"===a,u=z?null!==h?h+"Capture":null:h;z=[];for(var v=d,C;null!==
v;){C=v;var w=C.stateNode;5===C.tag&&null!==w&&(C=w,null!==u&&(w=Qb(v,u),null!=w&&z.push(gf(v,w,C))));if(B)break;v=v.return}0<z.length&&(h=new k(h,t,null,c,e),g.push({event:h,listeners:z}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(t=c.relatedTarget||c.fromElement)&&(yc(t)||t[hf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(t=c.relatedTarget||c.toElement,k=d,t=t?yc(t):null,null!==
t&&(B=ac(t),t!==B||5!==t.tag&&6!==t.tag))t=null}else k=null,t=d;if(k!==t){z=Dd;w="onMouseLeave";u="onMouseEnter";v="mouse";if("pointerout"===a||"pointerover"===a)z=Vd,w="onPointerLeave",u="onPointerEnter",v="pointer";B=null==k?h:we(k);C=null==t?h:we(t);h=new z(w,v+"leave",k,c,e);h.target=B;h.relatedTarget=C;w=null;yc(e)===d&&(z=new z(u,v+"enter",t,c,e),z.target=C,z.relatedTarget=B,w=z);B=w;if(k&&t)b:{z=k;u=t;v=0;for(C=z;C;C=jf(C))v++;C=0;for(w=u;w;w=jf(w))C++;for(;0<v-C;)z=jf(z),v--;for(;0<C-v;)u=
jf(u),C--;for(;v--;){if(z===u||null!==u&&z===u.alternate)break b;z=jf(z);u=jf(u)}z=null}else z=null;null!==k&&kf(g,h,k,z,!1);null!==t&&null!==B&&kf(g,B,t,z,!0)}}}a:{h=d?we(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var A=xe;else if(oe(h))if(ye)A=He;else{A=Fe;var m=Ee}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(A=Ge);if(A&&(A=A(a,d))){pe(g,A,c,e);break a}m&&m(a,h,d);"focusout"===a&&(m=h._wrapperState)&&
m.controlled&&"number"===h.type&&cb(h,"number",h.value)}m=d?we(d):window;switch(a){case "focusin":if(oe(m)||"true"===m.contentEditable)Se=m,Te=d,Ue=null;break;case "focusout":Ue=Te=Se=null;break;case "mousedown":Ve=!0;break;case "contextmenu":case "mouseup":case "dragend":Ve=!1;We(g,c,e);break;case "selectionchange":if(Re)break;case "keydown":case "keyup":We(g,c,e)}var J;if(ce)b:{switch(a){case "compositionstart":var M="onCompositionStart";break b;case "compositionend":M="onCompositionEnd";break b;
case "compositionupdate":M="onCompositionUpdate";break b}M=void 0}else ke?ie(a,c)&&(M="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(M="onCompositionStart");M&&(fe&&"ko"!==c.locale&&(ke||"onCompositionStart"!==M?"onCompositionEnd"===M&&ke&&(J=pd()):(md=e,nd="value"in md?md.value:md.textContent,ke=!0)),m=qe(d,M),0<m.length&&(M=new Nd(M,a,null,c,e),g.push({event:M,listeners:m}),J?M.data=J:(J=je(c),null!==J&&(M.data=J))));if(J=ee?le(a,c):me(a,c))d=qe(d,"onBeforeInput"),0<d.length&&(e=new Nd("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=J)}ue(g,b)})}function gf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function qe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Qb(a,c),null!=f&&d.unshift(gf(a,f,e)),f=Qb(a,b),null!=f&&d.push(gf(a,f,e)));a=a.return}return d}function jf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function kf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Qb(c,f),null!=k&&g.unshift(gf(c,k,h))):e||(k=Qb(c,f),null!=k&&g.push(gf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function lf(){}var mf=null,nf=null;function of(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function pf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var qf="function"===typeof setTimeout?setTimeout:void 0,rf="function"===typeof clearTimeout?clearTimeout:void 0;function sf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function tf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function uf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var vf=0;function wf(a){return{$$typeof:Ha,toString:a,valueOf:a}}var xf=Math.random().toString(36).slice(2),yf="__reactFiber$"+xf,zf="__reactProps$"+xf,hf="__reactContainer$"+xf,Af="__reactEvents$"+xf;
function yc(a){var b=a[yf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[hf]||c[yf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=uf(a);null!==a;){if(c=a[yf])return c;a=uf(a)}return b}a=c;c=a.parentNode}return null}function Eb(a){a=a[yf]||a[hf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function we(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(E(33));}function Fb(a){return a[zf]||null}
function bf(a){var b=a[Af];void 0===b&&(b=a[Af]=new Set);return b}var Bf=[],Cf=-1;function Df(a){return{current:a}}function L(a){0>Cf||(a.current=Bf[Cf],Bf[Cf]=null,Cf--)}function N(a,b){Cf++;Bf[Cf]=a.current;a.current=b}var Ef={},O=Df(Ef),Ff=Df(!1),Gf=Ef;
function Hf(a,b){var c=a.type.contextTypes;if(!c)return Ef;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function If(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Jf(){L(Ff);L(O)}function Kf(a,b,c){if(O.current!==Ef)throw Error(E(168));N(O,b);N(Ff,c)}
function Lf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(E(108,Sa(b)||"Unknown",e));return n({},c,d)}function Mf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Ef;Gf=O.current;N(O,a);N(Ff,Ff.current);return!0}
function Nf(a,b,c){var d=a.stateNode;if(!d)throw Error(E(169));c?(a=Lf(a,b,Gf),d.__reactInternalMemoizedMergedChildContext=a,L(Ff),L(O),N(O,a)):L(Ff);N(Ff,c)}
var Of=null,Pf=null,Qf="undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__,Rf=r.unstable_runWithPriority,Sf=r.unstable_scheduleCallback,Tf=r.unstable_cancelCallback,Uf=r.unstable_shouldYield,Vf=r.unstable_requestPaint,Wf=r.unstable_now,Xf=r.unstable_getCurrentPriorityLevel,Yf=r.unstable_ImmediatePriority,Zf=r.unstable_UserBlockingPriority,$f=r.unstable_NormalPriority,ag=r.unstable_LowPriority,bg=r.unstable_IdlePriority;
if(null==x.__interactionsRef||null==x.__interactionsRef.current)throw Error(E(302));var cg={},dg=void 0!==Vf?Vf:function(){},eg=null,fg=null,gg=!1,hg=Wf(),P=1E4>hg?Wf:function(){return Wf()-hg};function ig(){switch(Xf()){case Yf:return 99;case Zf:return 98;case $f:return 97;case ag:return 96;case bg:return 95;default:throw Error(E(332));}}function jg(a){switch(a){case 99:return Yf;case 98:return Zf;case 97:return $f;case 96:return ag;case 95:return bg;default:throw Error(E(332));}}
function kg(a,b){a=jg(a);return Rf(a,b)}function lg(a,b,c){a=jg(a);return Sf(a,b,c)}function mg(){if(null!==fg){var a=fg;fg=null;Tf(a)}ng()}function ng(){if(!gg&&null!==eg){gg=!0;var a=0;try{var b=eg;kg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});eg=null}catch(c){throw null!==eg&&(eg=eg.slice(a+1)),Sf(Yf,mg),c;}finally{gg=!1}}}var og=sa.ReactCurrentBatchConfig;
function pg(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var qg=Df(null),rg=null,sg=null,tg=null;function ug(){tg=sg=rg=null}function vg(a){var b=qg.current;L(qg);a.type._context._currentValue=b}function wg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}
function xg(a,b){rg=a;tg=sg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(yg=!0),a.firstContext=null)}function zg(a,b){if(tg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)tg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===sg){if(null===rg)throw Error(E(308));sg=b;rg.dependencies={lanes:0,firstContext:b,responders:null}}else sg=sg.next=b}return a._currentValue}var Ag=!1;
function Bg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Cg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Dg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function Eg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Fg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Gg(a,b,c,d){var e=a.updateQueue;Ag=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var p=a.alternate;if(null!==p){p=p.updateQueue;var y=p.lastBaseUpdate;y!==g&&(null===y?p.firstBaseUpdate=l:y.next=l,p.lastBaseUpdate=k)}}if(null!==f){y=e.baseState;g=0;p=l=k=null;do{h=f.lane;var q=f.eventTime;if((d&h)===h){null!==p&&(p=p.next={eventTime:q,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var D=a,t=f;h=b;q=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){y=D.call(q,y,h);break a}y=D;break a;case 3:D.flags=D.flags&-4097|64;case 0:D=t.payload;h="function"===typeof D?D.call(q,y,h):D;if(null===h||void 0===h)break a;y=n({},y,h);break a;case 2:Ag=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else q={eventTime:q,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===p?(l=p=q,k=y):p=p.next=q,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===p&&(k=y);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=p;Hg|=g;a.lanes=g;a.memoizedState=y}}function Ig(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(E(191,e));e.call(d)}}}var Jg=(new aa.Component).refs;
function Kg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Og={isMounted:function(a){return(a=a._reactInternals)?ac(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Lg(),e=Mg(a),f=Dg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Eg(a,f);Ng(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Lg(),e=Mg(a),f=Dg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Eg(a,f);Ng(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Lg(),d=Mg(a),e=Dg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Eg(a,e);Ng(a,d,c)}};function Pg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Le(c,d)||!Le(e,f):!0}
function Qg(a,b,c){var d=!1,e=Ef;var f=b.contextType;"object"===typeof f&&null!==f?f=zg(f):(e=If(b)?Gf:O.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Hf(a,e):Ef);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Og;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Rg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Og.enqueueReplaceState(b,b.state,null)}
function Sg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Jg;Bg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=zg(f):(f=If(b)?Gf:O.current,e.context=Hf(a,f));Gg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Kg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Og.enqueueReplaceState(e,e.state,null),Gg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Tg=Array.isArray;
function Ug(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(E(309));var d=c.stateNode}if(!d)throw Error(E(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Jg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(E(284));if(!c._owner)throw Error(E(290,a));}return a}
function Vg(a,b){if("textarea"!==a.type)throw Error(E(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Wg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Xg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Yg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Ug(a,b,c),d.return=a,d;d=Zg(c.type,c.key,c.props,null,a.mode,d);d.ref=Ug(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
$g(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function p(a,b,c,d,f){if(null===b||7!==b.tag)return b=ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function y(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Yg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case ta:return c=Zg(b.type,b.key,b.props,null,a.mode,c),c.ref=Ug(a,null,b),c.return=a,c;case ua:return b=$g(b,a.mode,c),b.return=a,b}if(Tg(b)||Ma(b))return b=ah(b,
a.mode,c,null),b.return=a,b;Vg(a,b)}return null}function q(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case ta:return c.key===e?c.type===va?p(a,b,c.props.children,d,e):k(a,b,c,d):null;case ua:return c.key===e?l(a,b,c,d):null}if(Tg(c)||Ma(c))return null!==e?null:p(a,b,c,d,null);Vg(a,c)}return null}function D(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case ta:return a=a.get(null===d.key?c:d.key)||null,d.type===va?p(b,a,d.props.children,e,d.key):k(b,a,d,e);case ua:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Tg(d)||Ma(d))return a=a.get(c)||null,p(b,a,d,e,null);Vg(b,d)}return null}function t(e,g,h,k){for(var l=null,u=null,m=g,v=g=0,B=null;null!==m&&v<h.length;v++){m.index>v?(B=m,m=null):B=m.sibling;var p=q(e,m,h[v],k);if(null===p){null===m&&(m=B);break}a&&m&&null===
p.alternate&&b(e,m);g=f(p,g,v);null===u?l=p:u.sibling=p;u=p;m=B}if(v===h.length)return c(e,m),l;if(null===m){for(;v<h.length;v++)m=y(e,h[v],k),null!==m&&(g=f(m,g,v),null===u?l=m:u.sibling=m,u=m);return l}for(m=d(e,m);v<h.length;v++)B=D(m,e,v,h[v],k),null!==B&&(a&&null!==B.alternate&&m.delete(null===B.key?v:B.key),g=f(B,g,v),null===u?l=B:u.sibling=B,u=B);a&&m.forEach(function(a){return b(e,a)});return l}function z(e,g,h,k){var l=Ma(h);if("function"!==typeof l)throw Error(E(150));h=l.call(h);if(null==
h)throw Error(E(151));for(var u=l=null,m=g,v=g=0,B=null,p=h.next();null!==m&&!p.done;v++,p=h.next()){m.index>v?(B=m,m=null):B=m.sibling;var t=q(e,m,p.value,k);if(null===t){null===m&&(m=B);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,v);null===u?l=t:u.sibling=t;u=t;m=B}if(p.done)return c(e,m),l;if(null===m){for(;!p.done;v++,p=h.next())p=y(e,p.value,k),null!==p&&(g=f(p,g,v),null===u?l=p:u.sibling=p,u=p);return l}for(m=d(e,m);!p.done;v++,p=h.next())p=D(m,e,v,p.value,k),null!==p&&(a&&null!==p.alternate&&
m.delete(null===p.key?v:p.key),g=f(p,g,v),null===u?l=p:u.sibling=p,u=p);a&&m.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===va&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case ta:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===va){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Ug(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===va?(d=ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Zg(f.type,f.key,f.props,null,a.mode,h),h.ref=Ug(a,d,f),h.return=a,a=h)}return g(a);case ua:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
$g(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Yg(f,a.mode,h),d.return=a,a=d),g(a);if(Tg(f))return t(a,d,f,h);if(Ma(f))return z(a,d,f,h);l&&Vg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(E(152,Sa(a.type)||"Component"));}return c(a,d)}}var bh=Wg(!0),ch=Wg(!1),dh={},eh=Df(dh),fh=Df(dh),gh=Df(dh);
function hh(a){if(a===dh)throw Error(E(174));return a}function ih(a,b){N(gh,b);N(fh,a);N(eh,dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=ob(b,a)}L(eh);N(eh,b)}function jh(){L(eh);L(fh);L(gh)}function kh(a){hh(gh.current);var b=hh(eh.current);var c=ob(b,a.type);b!==c&&(N(fh,a),N(eh,c))}function lh(a){fh.current===a&&(L(eh),L(fh))}var Q=Df(0);
function mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var nh=null,oh=null,ph=!1;
function qh(a,b){var c=rh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function sh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function th(a){if(ph){var b=oh;if(b){var c=b;if(!sh(a,b)){b=tf(c.nextSibling);if(!b||!sh(a,b)){a.flags=a.flags&-1025|2;ph=!1;nh=a;return}qh(nh,c)}nh=a;oh=tf(b.firstChild)}else a.flags=a.flags&-1025|2,ph=!1,nh=a}}function uh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;nh=a}
function vh(a){if(a!==nh)return!1;if(!ph)return uh(a),ph=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!pf(b,a.memoizedProps))for(b=oh;b;)qh(a,b),b=tf(b.nextSibling);uh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(E(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){oh=tf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}oh=null}}else oh=nh?tf(a.stateNode.nextSibling):null;return!0}
function wh(){oh=nh=null;ph=!1}var xh=[];function yh(){for(var a=0;a<xh.length;a++)xh[a]._workInProgressVersionPrimary=null;xh.length=0}var zh=sa.ReactCurrentDispatcher,Ah=sa.ReactCurrentBatchConfig,Bh=0,R=null,S=null,T=null,Ch=!1,Dh=!1;function Eh(){throw Error(E(321));}function Fh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Je(a[c],b[c]))return!1;return!0}
function Gh(a,b,c,d,e,f){Bh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;zh.current=null===a||null===a.memoizedState?Hh:Ih;a=c(d,e);if(Dh){f=0;do{Dh=!1;if(!(25>f))throw Error(E(301));f+=1;T=S=null;b.updateQueue=null;zh.current=Jh;a=c(d,e)}while(Dh)}zh.current=Kh;b=null!==S&&null!==S.next;Bh=0;T=S=R=null;Ch=!1;if(b)throw Error(E(300));return a}function Lh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Mh(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(E(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Nh(a,b){return"function"===typeof b?b(a):b}
function Oh(a){var b=Mh(),c=b.queue;if(null===c)throw Error(E(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((Bh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var p={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=p,f=d):h=h.next=p;R.lanes|=l;Hg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;Je(d,b.memoizedState)||(yg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Ph(a){var b=Mh(),c=b.queue;if(null===c)throw Error(E(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Je(f,b.memoizedState)||(yg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Qh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(Bh&a)===a)b._workInProgressVersionPrimary=d,xh.push(b);if(a)return c(b._source);xh.push(b);throw Error(E(350));}
function Rh(a,b,c,d){var e=U;if(null===e)throw Error(E(349));var f=b._getVersion,g=f(b._source),h=zh.current,k=h.useState(function(){return Qh(e,b,c)}),l=k[1],p=k[0];k=T;var y=a.memoizedState,q=y.refs,D=q.getSnapshot,t=y.source;y=y.subscribe;var z=R;a.memoizedState={refs:q,source:b,subscribe:d};h.useEffect(function(){q.getSnapshot=c;q.setSnapshot=l;var a=f(b._source);if(!Je(g,a)){a=c(b._source);Je(p,a)||(l(a),a=Mg(z),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Xc(h),t=1<<k;d[k]|=a;h&=~t}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=q.getSnapshot,c=q.setSnapshot;try{c(a(b._source));var d=Mg(z);e.mutableReadLanes|=d&e.pendingLanes}catch(C){c(function(){throw C;})}})},[b,d]);Je(D,c)&&Je(t,b)&&Je(y,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Nh,lastRenderedState:p},a.dispatch=l=Sh.bind(null,R,a),k.queue=a,k.baseQueue=null,p=Qh(e,b,c),k.memoizedState=k.baseState=p);return p}
function Th(a,b,c){var d=Mh();return Rh(d,a,b,c)}function Uh(a){var b=Lh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Nh,lastRenderedState:a};a=a.dispatch=Sh.bind(null,R,a);return[b.memoizedState,a]}
function Vh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Wh(a){var b=Lh();a={current:a};return b.memoizedState=a}function Xh(){return Mh().memoizedState}function Yh(a,b,c,d){var e=Lh();R.flags|=a;e.memoizedState=Vh(1|b,c,void 0,void 0===d?null:d)}
function Zh(a,b,c,d){var e=Mh();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Fh(d,g.deps)){Vh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Vh(1|b,c,f,d)}function $h(a,b){return Yh(516,4,a,b)}function ai(a,b){return Zh(516,4,a,b)}function bi(a,b){return Zh(4,2,a,b)}function ci(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function di(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Zh(4,2,ci.bind(null,b,a),c)}function ei(){}function fi(a,b){var c=Mh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Fh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function gi(a,b){var c=Mh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Fh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function hi(a,b){var c=ig();kg(98>c?98:c,function(){a(!0)});kg(97<c?97:c,function(){var c=Ah.transition;Ah.transition=1;try{a(!1),b()}finally{Ah.transition=c}})}
function Sh(a,b,c){var d=Lg(),e=Mg(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)Dh=Ch=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(Je(k,h))return}catch(l){}finally{}Ng(a,e,d)}}
var Kh={readContext:zg,useCallback:Eh,useContext:Eh,useEffect:Eh,useImperativeHandle:Eh,useLayoutEffect:Eh,useMemo:Eh,useReducer:Eh,useRef:Eh,useState:Eh,useDebugValue:Eh,useDeferredValue:Eh,useTransition:Eh,useMutableSource:Eh,useOpaqueIdentifier:Eh,unstable_isNewReconciler:!1},Hh={readContext:zg,useCallback:function(a,b){Lh().memoizedState=[a,void 0===b?null:b];return a},useContext:zg,useEffect:$h,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Yh(4,2,ci.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Yh(4,2,a,b)},useMemo:function(a,b){var c=Lh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Lh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Sh.bind(null,R,a);return[d.memoizedState,a]},useRef:Wh,useState:Uh,useDebugValue:ei,useDeferredValue:function(a){var b=Uh(a),c=b[0],d=b[1];$h(function(){var b=Ah.transition;
Ah.transition=1;try{d(a)}finally{Ah.transition=b}},[a]);return c},useTransition:function(){var a=Uh(!1),b=a[0];a=hi.bind(null,a[1]);Wh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Lh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Rh(d,a,b,c)},useOpaqueIdentifier:function(){if(ph){var a=!1,b=wf(function(){a||(a=!0,c("r:"+(vf++).toString(36)));throw Error(E(355));}),c=Uh(b)[1];0===(R.mode&2)&&(R.flags|=516,Vh(5,function(){c("r:"+(vf++).toString(36))},
void 0,null));return b}b="r:"+(vf++).toString(36);Uh(b);return b},unstable_isNewReconciler:!1},Ih={readContext:zg,useCallback:fi,useContext:zg,useEffect:ai,useImperativeHandle:di,useLayoutEffect:bi,useMemo:gi,useReducer:Oh,useRef:Xh,useState:function(){return Oh(Nh)},useDebugValue:ei,useDeferredValue:function(a){var b=Oh(Nh),c=b[0],d=b[1];ai(function(){var b=Ah.transition;Ah.transition=1;try{d(a)}finally{Ah.transition=b}},[a]);return c},useTransition:function(){var a=Oh(Nh)[0];return[Xh().current,
a]},useMutableSource:Th,useOpaqueIdentifier:function(){return Oh(Nh)[0]},unstable_isNewReconciler:!1},Jh={readContext:zg,useCallback:fi,useContext:zg,useEffect:ai,useImperativeHandle:di,useLayoutEffect:bi,useMemo:gi,useReducer:Ph,useRef:Xh,useState:function(){return Ph(Nh)},useDebugValue:ei,useDeferredValue:function(a){var b=Ph(Nh),c=b[0],d=b[1];ai(function(){var b=Ah.transition;Ah.transition=1;try{d(a)}finally{Ah.transition=b}},[a]);return c},useTransition:function(){var a=Ph(Nh)[0];return[Xh().current,
a]},useMutableSource:Th,useOpaqueIdentifier:function(){return Ph(Nh)[0]},unstable_isNewReconciler:!1},ii=r.unstable_now,ji=0,ki=-1;function li(a,b){if(0<=ki){var c=ii()-ki;a.actualDuration+=c;b&&(a.selfBaseDuration=c);ki=-1}}function mi(a){for(var b=a.child;b;)a.actualDuration+=b.actualDuration,b=b.sibling}var ni=sa.ReactCurrentOwner,yg=!1;function oi(a,b,c,d){b.child=null===a?ch(b,null,c,d):bh(b,a.child,c,d)}
function pi(a,b,c,d,e){c=c.render;var f=b.ref;xg(b,e);d=Gh(a,b,c,d,f,e);if(null!==a&&!yg)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,qi(a,b,e);b.flags|=1;oi(a,b,d,e);return b.child}
function ri(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!si(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ti(a,b,g,d,e,f);a=Zg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Le,c(e,d)&&a.ref===b.ref))return qi(a,b,f);b.flags|=1;a=Xg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ti(a,b,c,d,e,f){if(null!==a&&Le(a.memoizedProps,d)&&a.ref===b.ref)if(yg=!1,0!==(f&e))0!==(a.flags&16384)&&(yg=!0);else return b.lanes=a.lanes,qi(a,b,f);return ui(a,b,c,d,f)}
function vi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},wi(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},wi(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,xi(1073741824),b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},wi(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,wi(b,d);oi(a,b,e,c);return b.child}
function yi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function ui(a,b,c,d,e){var f=If(c)?Gf:O.current;f=Hf(b,f);xg(b,e);c=Gh(a,b,c,d,f,e);if(null!==a&&!yg)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,qi(a,b,e);b.flags|=1;oi(a,b,c,e);return b.child}
function zi(a,b,c,d,e){if(If(c)){var f=!0;Mf(b)}else f=!1;xg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Qg(b,c,d),Sg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=zg(l):(l=If(c)?Gf:O.current,l=Hf(b,l));var p=c.getDerivedStateFromProps,y="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate;y||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Rg(b,g,d,l);Ag=!1;var q=b.memoizedState;g.state=q;Gg(b,d,g,e);k=b.memoizedState;h!==d||q!==k||Ff.current||Ag?("function"===typeof p&&(Kg(b,c,p,d),k=b.memoizedState),(h=Ag||Pg(b,c,h,d,q,k,l))?(y||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;Cg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:pg(b.type,h);g.props=l;y=b.pendingProps;q=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=zg(k):(k=If(c)?Gf:O.current,k=Hf(b,k));var D=c.getDerivedStateFromProps;(p="function"===typeof D||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==y||q!==k)&&Rg(b,g,d,k);Ag=!1;q=b.memoizedState;g.state=q;Gg(b,d,g,e);var t=b.memoizedState;h!==y||q!==t||Ff.current||Ag?("function"===typeof D&&(Kg(b,c,D,d),t=b.memoizedState),(l=Ag||Pg(b,c,l,d,q,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&
g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=t),g.props=d,g.state=t,g.context=
k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.flags|=256),d=!1)}return Ai(a,b,c,d,f,e)}
function Ai(a,b,c,d,e,f){yi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Nf(b,c,!1),qi(a,b,f);d=b.stateNode;ni.current=b;if(g&&"function"!==typeof c.getDerivedStateFromError){var h=null;ki=-1}else h=d.render();b.flags|=1;null!==a&&g?(g=h,b.child=bh(b,a.child,null,f),b.child=bh(b,null,g,f)):oi(a,b,h,f);b.memoizedState=d.state;e&&Nf(b,c,!0);return b.child}
function Bi(a){var b=a.stateNode;b.pendingContext?Kf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Kf(a,b.context,!1);ih(a,b.containerInfo)}var Ci={dehydrated:null,retryLane:0};
function Di(a,b,c){var d=b.pendingProps,e=Q.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);N(Q,e&1);if(null===a){void 0!==d.fallback&&th(b);a=d.children;e=d.fallback;if(f)return a=Ei(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=Ci,a;if("number"===typeof d.unstable_expectedLoadTime)return a=Ei(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=Ci,b.lanes=33554432,xi(33554432),a;c=Fi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=Gi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=Ci,d;c=Hi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=Gi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===
e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=Ci,d;c=Hi(a,b,d.children,c);b.memoizedState=null;return c}function Ei(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b,a.mode&8&&(f.actualDuration=0,f.actualStartTime=-1,f.selfBaseDuration=0,f.treeBaseDuration=0)):f=Fi(b,e,0,null);c=ah(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function Hi(a,b,c,d){var e=a.child;a=e.sibling;c=Xg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function Gi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,b.mode&8&&(c.actualDuration=0,c.actualStartTime=-1,c.selfBaseDuration=g.selfBaseDuration,c.treeBaseDuration=g.treeBaseDuration),g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Xg(g,h);null!==a?d=Xg(a,d):(d=ah(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=
c;return d}function Ii(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);wg(a.return,b)}function Ji(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ki(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;oi(a,b,d.children,c);d=Q.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&Ii(a,c);else if(19===a.tag)Ii(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}N(Q,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ji(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ji(b,!0,c,null,f,b.lastEffect);break;case "together":Ji(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function qi(a,b,c){null!==a&&(b.dependencies=a.dependencies);ki=-1;Hg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(E(153));if(null!==b.child){a=b.child;c=Xg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Li,Mi,Ni,Oi;
Li=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Mi=function(){};
Ni=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;hh(eh.current);var f=null;switch(c){case "input":e=Za(a,e);d=Za(a,d);f=[];break;case "option":e=fb(a,e);d=fb(a,d);f=[];break;case "select":e=n({},e,{value:void 0});d=n({},d,{value:void 0});f=[];break;case "textarea":e=hb(a,e);d=hb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=lf)}xb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&K("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ha?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Oi=function(a,b,c,d){c!==d&&(b.flags|=4)};function Pi(a,b){if(!ph)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Qi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return If(b.type)&&Jf(),null;case 3:jh();L(Ff);L(O);yh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)vh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Mi(b);return null;case 5:lh(b);var e=hh(gh.current);c=b.type;if(null!==a&&null!=b.stateNode)Ni(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(E(166));return null}a=hh(eh.current);if(vh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[yf]=b;d[zf]=f;switch(c){case "dialog":K("cancel",d);K("close",d);break;case "iframe":case "object":case "embed":K("load",d);break;case "video":case "audio":for(a=0;a<Ze.length;a++)K(Ze[a],d);break;case "source":K("error",d);break;case "img":case "image":case "link":K("error",d);K("load",d);break;case "details":K("toggle",d);break;case "input":$a(d,f);K("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};K("invalid",d);break;case "textarea":jb(d,f),K("invalid",d)}xb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&K("scroll",d));switch(c){case "input":Wa(d);db(d,f,!0);break;case "textarea":Wa(d);lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
lf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===mb.html&&(a=nb(c));a===mb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[yf]=b;a[zf]=d;Li(a,b,!1,!1);b.stateNode=a;g=yb(c,d);switch(c){case "dialog":K("cancel",a);K("close",a);
e=d;break;case "iframe":case "object":case "embed":K("load",a);e=d;break;case "video":case "audio":for(e=0;e<Ze.length;e++)K(Ze[e],a);e=d;break;case "source":K("error",a);e=d;break;case "img":case "image":case "link":K("error",a);K("load",a);e=d;break;case "details":K("toggle",a);e=d;break;case "input":$a(a,d);e=Za(a,d);K("invalid",a);break;case "option":e=fb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=n({},d,{value:void 0});K("invalid",a);break;case "textarea":jb(a,d);e=
hb(a,d);K("invalid",a);break;default:e=d}xb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?vb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&qb(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&rb(a,k):"number"===typeof k&&rb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&K("scroll",a):null!=k&&ra(a,f,k,g))}switch(c){case "input":Wa(a);db(a,d,!1);
break;case "textarea":Wa(a);lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Ta(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?gb(a,!!d.multiple,f,!1):null!=d.defaultValue&&gb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=lf)}of(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Oi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(E(166));
c=hh(gh.current);hh(eh.current);vh(b)?(d=b.stateNode,c=b.memoizedProps,d[yf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[yf]=b,b.stateNode=d)}return null;case 13:L(Q);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,0!==(b.mode&8)&&mi(b),b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&vh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(Q.current&1))0===V&&(V=3);
else{if(0===V||3===V)V=4;null===U||0===(Hg&134217727)&&0===(Ri&134217727)||Si(U,W)}if(d||c)b.flags|=4;return null;case 4:return jh(),Mi(b),null===a&&ef(b.stateNode.containerInfo),null;case 10:return vg(b),null;case 17:return If(b.type)&&Jf(),null;case 19:L(Q);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Pi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=mh(a);if(null!==g){b.flags|=64;Pi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=
f,b.flags|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,g=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,a=f.alternate,null===a?(f.childLanes=0,f.lanes=g,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null,f.selfBaseDuration=0,f.treeBaseDuration=0):(f.childLanes=a.childLanes,f.lanes=a.lanes,f.child=a.child,f.memoizedProps=a.memoizedProps,f.memoizedState=a.memoizedState,
f.updateQueue=a.updateQueue,f.type=a.type,g=a.dependencies,f.dependencies=null===g?null:{lanes:g.lanes,firstContext:g.firstContext},f.selfBaseDuration=a.selfBaseDuration,f.treeBaseDuration=a.treeBaseDuration),c=c.sibling;N(Q,Q.current&1|2);return b.child}a=a.sibling}null!==d.tail&&P()>Ti&&(b.flags|=64,f=!0,Pi(d,!1),b.lanes=33554432,xi(33554432))}else{if(!f)if(a=mh(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Pi(d,!0),null===d.tail&&"hidden"===d.tailMode&&
!g.alternate&&!ph)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*P()-d.renderingStartTime>Ti&&1073741824!==c&&(b.flags|=64,f=!0,Pi(d,!1),b.lanes=33554432,xi(33554432));d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=P(),c.sibling=null,b=Q.current,N(Q,f?b&1|2:b&1),c):null;case 23:case 24:return Ui(),null!==a&&null!==
a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(E(156,b.tag));}
function Vi(a){switch(a.tag){case 1:If(a.type)&&Jf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,0!==(a.mode&8)&&mi(a),a):null;case 3:jh();L(Ff);L(O);yh();b=a.flags;if(0!==(b&64))throw Error(E(285));a.flags=b&-4097|64;return a;case 5:return lh(a),null;case 13:return L(Q),b=a.flags,b&4096?(a.flags=b&-4097|64,0!==(a.mode&8)&&mi(a),a):null;case 19:return L(Q),null;case 4:return jh(),null;case 10:return vg(a),null;case 23:case 24:return Ui(),null;default:return null}}
function Wi(a,b){try{var c="",d=b;do c+=Ra(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Xi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Yi="function"===typeof WeakMap?WeakMap:Map;function Zi(a,b,c){c=Dg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){$i||($i=!0,aj=d);Xi(a,b)};return c}
function bj(a,b,c){c=Dg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Xi(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===cj?cj=new Set([this]):cj.add(this),Xi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var dj="function"===typeof WeakSet?WeakSet:Set;
function ej(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fj(a,c)}else b.current=null}function gj(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:pg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&sf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(E(163));}
function hj(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(ij(c,a),jj(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:pg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Ig(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Ig(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&of(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:d=c.memoizedProps.onRender;e=ji;"function"===typeof d&&d(c.memoizedProps.id,null===b?"mount":"update",c.actualDuration,c.treeBaseDuration,
c.actualStartTime,e,a.memoizedInteractions);return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Ec(c))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(E(163));}
function kj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ub("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function lj(a,b){if(Pf&&"function"===typeof Pf.onCommitFiberUnmount)try{Pf.onCommitFiberUnmount(Of,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))ij(b,c);else{d=b;try{e()}catch(f){fj(d,f)}}c=c.next}while(c!==a)}break;case 1:ej(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){fj(b,
f)}break;case 5:ej(b);break;case 4:mj(a,b)}}function nj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function oj(a){return 5===a.tag||3===a.tag||4===a.tag}
function pj(a){a:{for(var b=a.return;null!==b;){if(oj(b))break a;b=b.return}throw Error(E(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(E(161));}c.flags&16&&(rb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||oj(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?qj(a,c,b):rj(a,c,b)}
function qj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=lf));else if(4!==d&&(a=a.child,null!==a))for(qj(a,b,c),a=a.sibling;null!==a;)qj(a,b,c),a=a.sibling}
function rj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(rj(a,b,c),a=a.sibling;null!==a;)rj(a,b,c),a=a.sibling}
function mj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(E(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(lj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(lj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function sj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[zf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&ab(c,d);yb(a,e);b=yb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?vb(c,h):"dangerouslySetInnerHTML"===g?qb(c,h):"children"===g?rb(c,h):ra(c,g,h,b)}switch(a){case "input":bb(c,d);break;case "textarea":kb(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?gb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?gb(c,!!d.multiple,d.defaultValue,!0):gb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(E(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Ec(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(tj=P(),kj(b.child,!0));uj(b);return;case 19:uj(b);return;case 17:return;case 23:case 24:kj(b,null!==b.memoizedState);return}throw Error(E(163));}
function uj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new dj);b.forEach(function(b){var d=vj.bind(null,a,b);c.has(b)||(!0!==b.__reactDoNotTraceInteractions&&(d=x.unstable_wrap(d)),c.add(b),b.then(d,d))})}}function wj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}
var xj=Math.ceil,yj=sa.ReactCurrentDispatcher,zj=sa.ReactCurrentOwner,X=0,U=null,Y=null,W=0,Aj=0,Bj=Df(0),V=0,Cj=null,Dj=0,Hg=0,Ri=0,Ej=0,Fj=null,tj=0,Ti=Infinity;function Gj(){Ti=P()+500}var Z=null,$i=!1,aj=null,cj=null,Hj=!1,Ij=null,Jj=90,Kj=0,Lj=[],Mj=[],Nj=null,Oj=0,Pj=null,Qj=null,Rj=-1,Sj=0,Tj=0,Uj=null,Vj=!1;function Lg(){return 0!==(X&48)?P():-1!==Rj?Rj:Rj=P()}
function Mg(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===ig()?1:2;0===Sj&&(Sj=Dj);if(0!==og.transition){0!==Tj&&(Tj=null!==Fj?Fj.pendingLanes:0);a=Sj;var b=4186112&~Tj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=ig();0!==(X&4)&&98===a?a=Zc(12,Sj):(a=Uc(a),a=Zc(a,Sj));return a}
function Ng(a,b,c){if(50<Oj)throw Oj=0,Pj=null,Error(E(185));a=Wj(a,b);if(null===a)return null;bd(a,b,c);a===U&&(Ri|=b,4===V&&Si(a,W));var d=ig();1===b?0!==(X&8)&&0===(X&48)?(Xj(a,b),Yj(a)):(Zj(a,c),Xj(a,b),0===X&&(Gj(),mg())):(0===(X&4)||98!==d&&99!==d||(null===Nj?Nj=new Set([a]):Nj.add(a)),Zj(a,c),Xj(a,b));Fj=a}
function Wj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Zj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Xc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Tc(k);var p=I;f[h]=10<=p?l+250:6<=p?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Wc(a,a===U?W:0);b=I;if(0===d)null!==c&&(c!==cg&&Tf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==cg&&Tf(c)}15===b?(c=Yj.bind(null,a),null===eg?(eg=[c],fg=Sf(Yf,ng)):eg.push(c),
c=cg):14===b?c=lg(99,Yj.bind(null,a)):(c=Vc(b),c=lg(c,ak.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function ak(a){Rj=-1;Tj=Sj=0;if(0!==(X&48))throw Error(E(327));var b=a.callbackNode;if(bk()&&a.callbackNode!==b)return null;var c=Wc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=ck();if(U!==a||W!==d)Gj(),dk(a,d),ek(a,d);d=fk(a);do try{gk();break}catch(h){hk(a,h)}while(1);ug();x.__interactionsRef.current=d;yj.current=f;X=e;null!==Y?e=0:(U=null,W=0,e=V);if(0!==(Dj&Ri))dk(a,0);else if(0!==e){2===e&&(X|=64,a.hydrate&&(a.hydrate=!1,sf(a.containerInfo)),c=Yc(a),0!==c&&(e=ik(a,c)));if(1===
e)throw b=Cj,dk(a,0),Si(a,c),Zj(a,P()),b;a.finishedWork=a.current.alternate;a.finishedLanes=c;switch(e){case 0:case 1:throw Error(E(345));case 2:jk(a);break;case 3:Si(a,c);if((c&62914560)===c&&(e=tj+500-P(),10<e)){if(0!==Wc(a,0))break;f=a.suspendedLanes;if((f&c)!==c){Lg();a.pingedLanes|=a.suspendedLanes&f;break}a.timeoutHandle=qf(jk.bind(null,a),e);break}jk(a);break;case 4:Si(a,c);if((c&4186112)===c)break;e=a.eventTimes;for(f=-1;0<c;){var g=31-Xc(c);d=1<<g;g=e[g];g>f&&(f=g);c&=~d}c=f;c=P()-c;c=(120>
c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*xj(c/1960))-c;if(10<c){a.timeoutHandle=qf(jk.bind(null,a),c);break}jk(a);break;case 5:jk(a);break;default:throw Error(E(329));}}Zj(a,P());return a.callbackNode===b?ak.bind(null,a):null}function Si(a,b){b&=~Ej;b&=~Ri;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Xc(b),d=1<<c;a[c]=-1;b&=~d}}
function Yj(a){if(0!==(X&48))throw Error(E(327));bk();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=ik(a,b);0!==(Dj&Ri)&&(b=Wc(a,b),c=ik(a,b))}else b=Wc(a,0),c=ik(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,sf(a.containerInfo)),b=Yc(a),0!==b&&(c=ik(a,b)));if(1===c)throw c=Cj,dk(a,0),Si(a,b),Zj(a,P()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;jk(a);Zj(a,P());return null}
function kk(){if(null!==Nj){var a=Nj;Nj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Zj(a,P())})}mg()}function lk(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(Gj(),mg())}}function mk(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(Gj(),mg())}}function wi(a,b){N(Bj,Aj);Aj|=b;Dj|=b}function Ui(){Aj=Bj.current;L(Bj)}
function dk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,rf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Jf();break;case 3:jh();L(Ff);L(O);yh();break;case 5:lh(d);break;case 4:jh();break;case 13:L(Q);break;case 19:L(Q);break;case 10:vg(d);break;case 23:case 24:Ui()}c=c.return}U=a;Y=Xg(a.current,null);W=Aj=Dj=b;V=0;Cj=null;Ej=Ri=Hg=0;Qj=null}
function hk(a,b){do{var c=Y;try{ug();zh.current=Kh;if(Ch){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ch=!1}Bh=0;T=S=R=null;Dh=!1;zj.current=null;if(null===c||null===c.return){V=1;Cj=b;Y=null;break}c.mode&8&&li(c,!0);a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,
h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=0!==(Q.current&1),q=g;do{var D;if(D=13===q.tag){var t=q.memoizedState;if(null!==t)D=null!==t.dehydrated?!0:!1;else{var z=q.memoizedProps;D=void 0===z.fallback?!1:!0!==z.unstable_avoidThisFallback?!0:y?!1:!0}}if(D){var B=q.updateQueue;if(null===B){var u=new Set;u.add(l);q.updateQueue=u}else B.add(l);if(0===(q.mode&2)){q.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var v=Dg(-1,1);v.tag=2;Eg(h,
v)}h.lanes|=1;break a}k=void 0;h=b;var C=f.pingCache;null===C?(C=f.pingCache=new Yi,k=new Set,C.set(l,k)):(k=C.get(l),void 0===k&&(k=new Set,C.set(l,k)));if(!k.has(h)){k.add(h);var w=nk.bind(null,f,l,h);l.then(w,w)}q.flags|=4096;q.lanes=b;break a}q=q.return}while(null!==q);k=Error((Sa(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==
V&&(V=2);k=Wi(k,h);q=g;do{switch(q.tag){case 3:f=k;q.flags|=4096;b&=-b;q.lanes|=b;var A=Zi(q,f,b);Fg(q,A);break a;case 1:f=k;var m=q.type,J=q.stateNode;if(0===(q.flags&64)&&("function"===typeof m.getDerivedStateFromError||null!==J&&"function"===typeof J.componentDidCatch&&(null===cj||!cj.has(J)))){q.flags|=4096;b&=-b;q.lanes|=b;var M=bj(q,f,b);Fg(q,M);break a}}q=q.return}while(null!==q)}ok(c)}catch(oa){b=oa;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function ck(){var a=yj.current;yj.current=Kh;return null===a?Kh:a}function fk(a){var b=x.__interactionsRef.current;x.__interactionsRef.current=a.memoizedInteractions;return b}function ik(a,b){var c=X;X|=16;var d=ck();if(U!==a||W!==b)dk(a,b),ek(a,b);b=fk(a);do try{pk();break}catch(e){hk(a,e)}while(1);ug();x.__interactionsRef.current=b;X=c;yj.current=d;if(null!==Y)throw Error(E(261));U=null;W=0;return V}function pk(){for(;null!==Y;)qk(Y)}function gk(){for(;null!==Y&&!Uf();)qk(Y)}
function qk(a){var b=a.alternate;0!==(a.mode&8)?(ki=ii(),0>a.actualStartTime&&(a.actualStartTime=ii()),b=rk(b,a,Aj),li(a,!0)):b=rk(b,a,Aj);a.memoizedProps=a.pendingProps;null===b?ok(a):Y=b;zj.current=null}
function ok(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){if(0===(b.mode&8))c=Qi(c,b,Aj);else{var d=b;ki=ii();0>d.actualStartTime&&(d.actualStartTime=ii());c=Qi(c,b,Aj);li(b,!1)}if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(Aj&1073741824)||0===(c.mode&4)){d=0;if(0!==(c.mode&8)){for(var e=c.actualDuration,f=c.selfBaseDuration,g=null===c.alternate||c.child!==c.alternate.child,h=c.child;null!==h;)d|=h.lanes|h.childLanes,g&&(e+=h.actualDuration),
f+=h.treeBaseDuration,h=h.sibling;13===c.tag&&null!==c.memoizedState&&(g=c.child,null!==g&&(f-=g.treeBaseDuration));c.actualDuration=e;c.treeBaseDuration=f}else for(e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=
b,a.lastEffect=b))}else{c=Vi(b);if(null!==c){c.flags&=2047;Y=c;return}if(0!==(b.mode&8)){li(b,!1);c=b.actualDuration;for(d=b.child;null!==d;)c+=d.actualDuration,d=d.sibling;b.actualDuration=c}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function jk(a){var b=ig();kg(99,sk.bind(null,a,b));return null}
function sk(a,b){do bk();while(null!==Ij);if(0!==(X&48))throw Error(E(327));var c=a.finishedWork,d=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(E(177));a.callbackNode=null;var e=c.lanes|c.childLanes,f=e,g=a.pendingLanes&~f;a.pendingLanes=f;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=f;a.mutableReadLanes&=f;a.entangledLanes&=f;f=a.entanglements;for(var h=a.eventTimes,k=a.expirationTimes;0<g;){var l=31-Xc(g),p=1<<l;f[l]=0;h[l]=-1;
k[l]=-1;g&=~p}null!==Nj&&0===(e&24)&&Nj.has(a)&&Nj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){f=X;X|=32;h=fk(a);zj.current=null;mf=hd;k=Pe();if(Qe(k)){if("selectionStart"in k)g={start:k.selectionStart,end:k.selectionEnd};else a:{g=(g=k.ownerDocument)&&g.defaultView||window;var y=g.getSelection&&g.getSelection();if(y&&0!==y.rangeCount){g=y.anchorNode;l=y.anchorOffset;p=y.focusNode;y=y.focusOffset;try{g.nodeType,
p.nodeType}catch(ib){g=null;break a}var q=0,D=-1,t=-1,z=0,B=0,u=k,v=null;b:for(;;){for(var C;;){u!==g||0!==l&&3!==u.nodeType||(D=q+l);u!==p||0!==y&&3!==u.nodeType||(t=q+y);3===u.nodeType&&(q+=u.nodeValue.length);if(null===(C=u.firstChild))break;v=u;u=C}for(;;){if(u===k)break b;v===g&&++z===l&&(D=q);v===p&&++B===y&&(t=q);if(null!==(C=u.nextSibling))break;u=v;v=u.parentNode}u=C}g=-1===D||-1===t?null:{start:D,end:t}}else g=null}g=g||{start:0,end:0}}else g=null;nf={focusedElem:k,selectionRange:g};hd=
!1;Uj=null;Vj=!1;Z=e;do try{tk()}catch(ib){if(null===Z)throw Error(E(330));fj(Z,ib);Z=Z.nextEffect}while(null!==Z);Uj=null;ji=ii();Z=e;do try{for(k=a;null!==Z;){var w=Z.flags;w&16&&rb(Z.stateNode,"");if(w&128){var A=Z.alternate;if(null!==A){var m=A.ref;null!==m&&("function"===typeof m?m(null):m.current=null)}}switch(w&1038){case 2:pj(Z);Z.flags&=-3;break;case 6:pj(Z);Z.flags&=-3;sj(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;sj(Z.alternate,Z);break;case 4:sj(Z.alternate,
Z);break;case 8:g=Z;mj(k,g);var J=g.alternate;nj(g);null!==J&&nj(J)}Z=Z.nextEffect}}catch(ib){if(null===Z)throw Error(E(330));fj(Z,ib);Z=Z.nextEffect}while(null!==Z);m=nf;A=Pe();w=m.focusedElem;k=m.selectionRange;if(A!==w&&w&&w.ownerDocument&&Oe(w.ownerDocument.documentElement,w)){null!==k&&Qe(w)&&(A=k.start,m=k.end,void 0===m&&(m=A),"selectionStart"in w?(w.selectionStart=A,w.selectionEnd=Math.min(m,w.value.length)):(m=(A=w.ownerDocument||document)&&A.defaultView||window,m.getSelection&&(m=m.getSelection(),
g=w.textContent.length,J=Math.min(k.start,g),k=void 0===k.end?J:Math.min(k.end,g),!m.extend&&J>k&&(g=k,k=J,J=g),g=Ne(w,J),l=Ne(w,k),g&&l&&(1!==m.rangeCount||m.anchorNode!==g.node||m.anchorOffset!==g.offset||m.focusNode!==l.node||m.focusOffset!==l.offset)&&(A=A.createRange(),A.setStart(g.node,g.offset),m.removeAllRanges(),J>k?(m.addRange(A),m.extend(l.node,l.offset)):(A.setEnd(l.node,l.offset),m.addRange(A))))));A=[];for(m=w;m=m.parentNode;)1===m.nodeType&&A.push({element:m,left:m.scrollLeft,top:m.scrollTop});
"function"===typeof w.focus&&w.focus();for(w=0;w<A.length;w++)m=A[w],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}hd=!!mf;nf=mf=null;a.current=c;Z=e;do try{for(w=a;null!==Z;){var M=Z.flags;M&36&&hj(w,Z.alternate,Z);if(M&128){A=void 0;var oa=Z.ref;if(null!==oa){var xa=Z.stateNode;switch(Z.tag){case 5:A=xa;break;default:A=xa}"function"===typeof oa?oa(A):oa.current=A}}Z=Z.nextEffect}}catch(ib){if(null===Z)throw Error(E(330));fj(Z,ib);Z=Z.nextEffect}while(null!==Z);Z=null;dg();x.__interactionsRef.current=
h;X=f}else a.current=c,ji=ii();if(M=Hj)Hj=!1,Ij=a,Kj=d,Jj=b;else for(Z=e;null!==Z;)oa=Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(xa=Z,xa.sibling=null,xa.stateNode=null),Z=oa;e=a.pendingLanes;if(0!==e){if(null!==Qj)for(oa=Qj,Qj=null,xa=0;xa<oa.length;xa++)uk(a,oa[xa],a.memoizedInteractions);Xj(a,e)}else cj=null;M||vk(a,d);1===e?a===Pj?Oj++:(Oj=0,Pj=a):Oj=0;c=c.stateNode;if(Pf&&"function"===typeof Pf.onCommitFiberRoot)try{Pf.onCommitFiberRoot(Of,c,b,64===(c.current.flags&64))}catch(ib){}Zj(a,P());if($i)throw $i=
!1,a=aj,aj=null,a;if(0!==(X&8))return null;mg();return null}function tk(){for(;null!==Z;){var a=Z.alternate;Vj||null===Uj||(0!==(Z.flags&8)?fc(Z,Uj)&&(Vj=!0):13===Z.tag&&wj(a,Z)&&fc(Z,Uj)&&(Vj=!0));var b=Z.flags;0!==(b&256)&&gj(a,Z);0===(b&512)||Hj||(Hj=!0,lg(97,function(){bk();return null}));Z=Z.nextEffect}}function bk(){if(90!==Jj){var a=97<Jj?97:Jj;Jj=90;return kg(a,wk)}return!1}function jj(a,b){Lj.push(b,a);Hj||(Hj=!0,lg(97,function(){bk();return null}))}
function ij(a,b){Mj.push(b,a);Hj||(Hj=!0,lg(97,function(){bk();return null}))}
function wk(){if(null===Ij)return!1;var a=Ij,b=Kj;Ij=null;Kj=0;if(0!==(X&48))throw Error(E(331));var c=X;X|=32;var d=fk(a),e=Mj;Mj=[];for(var f=0;f<e.length;f+=2){var g=e[f],h=e[f+1],k=g.destroy;g.destroy=void 0;if("function"===typeof k)try{k()}catch(p){if(null===h)throw Error(E(330));fj(h,p)}}e=Lj;Lj=[];for(f=0;f<e.length;f+=2){g=e[f];h=e[f+1];try{var l=g.create;g.destroy=l()}catch(p){if(null===h)throw Error(E(330));fj(h,p)}}for(e=a.current.firstEffect;null!==e;)l=e.nextEffect,e.nextEffect=null,
e.flags&8&&(e.sibling=null,e.stateNode=null),e=l;x.__interactionsRef.current=d;vk(a,b);X=c;mg();return!0}function xk(a,b,c){b=Wi(c,b);b=Zi(a,b,1);Eg(a,b);b=Lg();a=Wj(a,1);null!==a&&(bd(a,1,b),Zj(a,b),Xj(a,1))}
function fj(a,b){if(3===a.tag)xk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){xk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===cj||!cj.has(d))){a=Wi(b,a);var e=bj(c,a,1);Eg(c,e);e=Lg();c=Wj(c,1);if(null!==c)bd(c,1,e),Zj(c,e),Xj(c,1);else if("function"===typeof d.componentDidCatch&&(null===cj||!cj.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function nk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Lg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>P()-tj?dk(a,0):Ej|=c);Zj(a,b);Xj(a,c)}function vj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===ig()?1:2:(0===Sj&&(Sj=Dj),b=$c(62914560&~Sj),0===b&&(b=4194304)));c=Lg();a=Wj(a,b);null!==a&&(bd(a,b,c),Zj(a,c),Xj(a,b))}var rk;
rk=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||Ff.current)yg=!0;else if(0!==(c&d))yg=0!==(a.flags&16384)?!0:!1;else{yg=!1;switch(b.tag){case 3:Bi(b);wh();break;case 5:kh(b);break;case 1:If(b.type)&&Mf(b);break;case 4:ih(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;N(qg,e._currentValue);e._currentValue=d;break;case 12:0!==(c&b.childLanes)&&(b.flags|=4);d=b.stateNode;d.effectDuration=0;d.passiveEffectDuration=0;break;case 13:if(null!==
b.memoizedState){if(0!==(c&b.child.childLanes))return Di(a,b,c);N(Q,Q.current&1);b=qi(a,b,c);return null!==b?b.sibling:null}N(Q,Q.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ki(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);N(Q,Q.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,vi(a,b,c)}return qi(a,b,c)}else yg=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=
null,b.flags|=2);a=b.pendingProps;e=Hf(b,O.current);xg(b,c);e=Gh(null,b,d,a,e,c);b.flags|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(If(d)){var f=!0;Mf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;Bg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Kg(b,d,g,a);e.updater=Og;b.stateNode=e;e._reactInternals=b;Sg(b,d,a,c);b=Ai(null,b,d,!0,f,c)}else b.tag=0,oi(null,b,e,
c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=yk(e);a=pg(e,a);switch(f){case 0:b=ui(null,b,e,a,c);break a;case 1:b=zi(null,b,e,a,c);break a;case 11:b=pi(null,b,e,a,c);break a;case 14:b=ri(null,b,e,pg(e.type,a),d,c);break a}throw Error(E(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:pg(d,e),ui(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:pg(d,e),zi(a,b,d,e,c);case 3:Bi(b);d=b.updateQueue;if(null===a||null===d)throw Error(E(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;Cg(a,b);Gg(b,d,null,c);d=b.memoizedState.element;if(d===e)wh(),b=qi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)oh=tf(b.stateNode.containerInfo.firstChild),nh=b,f=ph=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],xh.push(f);c=ch(b,null,d,c);for(b.child=
c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else oi(a,b,d,c),wh();b=b.child}return b;case 5:return kh(b),null===a&&th(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,pf(d,e)?g=null:null!==f&&pf(d,f)&&(b.flags|=16),yi(a,b),oi(a,b,g,c),b.child;case 6:return null===a&&th(b),null;case 13:return Di(a,b,c);case 4:return ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=bh(b,null,d,c):oi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?
e:pg(d,e),pi(a,b,d,e,c);case 7:return oi(a,b,b.pendingProps,c),b.child;case 8:return oi(a,b,b.pendingProps.children,c),b.child;case 12:return b.flags|=4,d=b.stateNode,d.effectDuration=0,d.passiveEffectDuration=0,oi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;N(qg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=Je(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):
1073741823)|0,0===f){if(g.children===e.children&&!Ff.current){b=qi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Dg(-1,c&-c),l.tag=2,Eg(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);wg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=
null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}oi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,xg(b,c),e=zg(e,f.unstable_observedBits),d=d(e),b.flags|=1,oi(a,b,d,c),b.child;case 14:return e=b.type,f=pg(e,b.pendingProps),f=pg(e.type,f),ri(a,b,e,f,d,c);case 15:return ti(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:pg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=
2),b.tag=1,If(d)?(a=!0,Mf(b)):a=!1,xg(b,c),Qg(b,d,e),Sg(b,d,e,c),Ai(null,b,d,!0,a,c);case 19:return Ki(a,b,c);case 23:return vi(a,b,c);case 24:return vi(a,b,c)}throw Error(E(156,b.tag));};function xi(a){null===Qj?Qj=[a]:Qj.push(a)}
function uk(a,b,c){if(0<c.size){var d=a.pendingInteractionMap,e=d.get(b);null!=e?c.forEach(function(a){e.has(a)||a.__count++;e.add(a)}):(d.set(b,new Set(c)),c.forEach(function(a){a.__count++}));d=x.__subscriberRef.current;if(null!==d)d.onWorkScheduled(c,1E3*b+a.interactionThreadID)}}function Xj(a,b){uk(a,b,x.__interactionsRef.current)}
function ek(a,b){var c=new Set;a.pendingInteractionMap.forEach(function(a,d){0!==(b&d)&&a.forEach(function(a){return c.add(a)})});a.memoizedInteractions=c;if(0<c.size){var d=x.__subscriberRef.current;if(null!==d){a=1E3*b+a.interactionThreadID;try{d.onWorkStarted(c,a)}catch(e){lg(99,function(){throw e;})}}}}
function vk(a,b){var c=a.pendingLanes;try{var d=x.__subscriberRef.current;if(null!==d&&0<a.memoizedInteractions.size)d.onWorkStopped(a.memoizedInteractions,1E3*b+a.interactionThreadID)}catch(f){lg(99,function(){throw f;})}finally{var e=a.pendingInteractionMap;e.forEach(function(a,b){0===(c&b)&&(e.delete(b),a.forEach(function(a){a.__count--;if(null!==d&&0===a.__count)try{d.onInteractionScheduledWorkCompleted(a)}catch(k){lg(99,function(){throw k;})}}))})}}
function zk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;this.actualDuration=0;this.actualStartTime=-1;this.treeBaseDuration=this.selfBaseDuration=0}
function rh(a,b,c,d){return new zk(a,b,c,d)}function si(a){a=a.prototype;return!(!a||!a.isReactComponent)}function yk(a){if("function"===typeof a)return si(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Ba)return 11;if(a===Ea)return 14}return 2}
function Xg(a,b){var c=a.alternate;null===c?(c=rh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null,c.actualDuration=0,c.actualStartTime=-1);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:
{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;c.selfBaseDuration=a.selfBaseDuration;c.treeBaseDuration=a.treeBaseDuration;return c}
function Zg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)si(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case va:return ah(c.children,e,f,b);case Ia:g=8;e|=16;break;case wa:g=8;e|=1;break;case ya:return a=rh(12,c,b,e|8),a.elementType=ya,a.type=ya,a.lanes=f,a.stateNode={effectDuration:0,passiveEffectDuration:0},a;case Ca:return a=rh(13,c,b,e),a.type=Ca,a.elementType=Ca,a.lanes=f,a;case Da:return a=rh(19,c,b,e),a.elementType=Da,a.lanes=f,a;case Ja:return Fi(c,e,f,b);case Ka:return a=
rh(24,c,b,e),a.elementType=Ka,a.lanes=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case za:g=10;break a;case Aa:g=9;break a;case Ba:g=11;break a;case Ea:g=14;break a;case Fa:g=16;d=null;break a;case Ga:g=22;break a}throw Error(E(130,null==a?a:typeof a,""));}b=rh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function ah(a,b,c,d){a=rh(7,a,d,b);a.lanes=c;return a}function Fi(a,b,c,d){a=rh(23,a,d,b);a.elementType=Ja;a.lanes=c;return a}
function Yg(a,b,c){a=rh(6,a,null,b);a.lanes=c;return a}function $g(a,b,c){b=rh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ak(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=ad(0);this.expirationTimes=ad(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=ad(0);this.mutableSourceEagerHydrationData=null;this.interactionThreadID=
x.unstable_getThreadID();this.memoizedInteractions=new Set;this.pendingInteractionMap=new Map}function Bk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ua,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function Ck(a,b,c,d){var e=b.current,f=Lg(),g=Mg(e);a:if(c){c=c._reactInternals;b:{if(ac(c)!==c||1!==c.tag)throw Error(E(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(If(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(E(171));}if(1===c.tag){var k=c.type;if(If(k)){c=Lf(c,k,h);break a}}c=h}else c=Ef;null===b.context?b.context=c:b.pendingContext=c;b=Dg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Eg(e,b);Ng(e,g,f);return g}function Dk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Ek(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Fk(a,b){Ek(a,b);(a=a.alternate)&&Ek(a,b)}function Gk(){return null}
function Hk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new Ak(a,b,null!=c&&!0===c.hydrate);b=2===b?7:1===b?3:0;Qf&&(b|=8);b=rh(3,null,null,b);c.current=b;b.stateNode=c;Bg(b);a[hf]=c.current;ef(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
Hk.prototype.render=function(a){Ck(a,this._internalRoot,null,null)};Hk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;Ck(null,a,null,function(){b[hf]=null})};function Ik(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function Jk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Hk(a,0,b?{hydrate:!0}:void 0)}
function Kk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=Dk(g);h.call(a)}}Ck(b,g,a,e)}else{f=c._reactRootContainer=Jk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=Dk(g);k.call(a)}}mk(function(){Ck(b,g,a,e)})}return Dk(g)}gc=function(a){if(13===a.tag){var b=Lg();Ng(a,4,b);Fk(a,4)}};hc=function(a){if(13===a.tag){var b=Lg();Ng(a,67108864,b);Fk(a,67108864)}};
ic=function(a){if(13===a.tag){var b=Lg(),c=Mg(a);Ng(a,c,b);Fk(a,c)}};jc=function(a,b){return b()};
Ab=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Fb(d);if(!e)throw Error(E(90));Xa(d);bb(d,e)}}}break;case "textarea":kb(a,c);break;case "select":b=c.value,null!=b&&gb(a,!!c.multiple,b,!1)}};Ib=lk;
Jb=function(a,b,c,d,e){var f=X;X|=4;try{return kg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(Gj(),mg())}};Kb=function(){0===(X&49)&&(kk(),bk())};Lb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(Gj(),mg())}};function Lk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ik(b))throw Error(E(200));return Bk(a,b,null,c)}var Mk={Events:[Eb,we,Fb,Gb,Hb,bk,{current:!1}]},Nk={findFiberByHostInstance:yc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var Ok={bundleType:Nk.bundleType,version:Nk.version,rendererPackageName:Nk.rendererPackageName,rendererConfig:Nk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=ec(a);return null===a?null:a.stateNode},findFiberByHostInstance:Nk.findFiberByHostInstance||
Gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Pk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pk.isDisabled&&Pk.supportsFiber)try{Of=Pk.inject(Ok),Pf=Pk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mk;exports.createPortal=Lk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(E(188));throw Error(E(268,Object.keys(a)));}a=ec(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return kg(99,a.bind(null,b))}finally{X=c,mg()}};exports.hydrate=function(a,b,c){if(!Ik(b))throw Error(E(200));return Kk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!Ik(b))throw Error(E(200));return Kk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!Ik(a))throw Error(E(40));return a._reactRootContainer?(mk(function(){Kk(null,null,a,!1,function(){a._reactRootContainer=null;a[hf]=null})}),!0):!1};exports.unstable_batchedUpdates=lk;exports.unstable_createPortal=function(a,b){return Lk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Ik(c))throw Error(E(200));if(null==a||void 0===a._reactInternals)throw Error(E(38));return Kk(a,b,c,!1,d)};exports.version="17.0.2";

},{"react":"1n8/","object-assign":"J4Nk","scheduler":"MDSO","scheduler/tracing":"Ks3F"}],"wLSN":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.profiling.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.profiling.min.js":"NgRO"}],"vCxL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__read = __read;
exports.__rest = __rest;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
},{}],"wIHY":[function(require,module,exports) {
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
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });

    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }

      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}
},{}],"du5q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectReduce = reduce;
exports.default = objectReduce;

function reduce(obj, predicate
/*, initialValue*/
) {
  var args = [callback]; // `initialValue` is optional

  var hasInitialValue = 2 in arguments;
  hasInitialValue && args.push(arguments[2]);

  function callback(previousValue, currentKey, currentIndex, array) {
    // when `initialValue` is not provided then
    // `previousValue` is the value associated to the first key
    if (!hasInitialValue) {
      previousValue = obj[array[0]];
      hasInitialValue = true;
    }

    return predicate(previousValue, currentKey, obj[currentKey], currentIndex, array);
  }

  return Array.prototype.reduce.apply(Object.keys(obj), args);
}
},{}],"2gTp":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if ("production" !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;
},{}],"kohK":[function(require,module,exports) {
var global = arguments[3];
var define;
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
;
(function () {
  'use strict';
  /** Used to determine if values are of the language type `Object`. */

  var objectTypes = {
    'function': true,
    'object': true
  };
  /** Used as a reference to the global object. */

  var root = objectTypes[typeof window] && window || this;
  /** Backup possible global object. */

  var oldRoot = root;
  /** Detect free variable `exports`. */

  var freeExports = objectTypes[typeof exports] && exports;
  /** Detect free variable `module`. */

  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */

  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }
  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */


  var maxSafeInteger = Math.pow(2, 53) - 1;
  /** Regular expression to detect Opera. */

  var reOpera = /\bOpera/;
  /** Possible global object. */

  var thisBinding = this;
  /** Used for native method references. */

  var objectProto = Object.prototype;
  /** Used to check for own properties of an object. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /** Used to resolve the internal `[[Class]]` of values. */

  var toString = objectProto.toString;
  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */

  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */


  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4': '10 Technical Preview',
      '6.3': '8.1',
      '6.2': '8',
      '6.1': 'Server 2008 R2 / 7',
      '6.0': 'Server 2008 / Vista',
      '5.2': 'Server 2003 / XP 64-bit',
      '5.1': 'XP',
      '5.01': '2000 SP1',
      '5.0': '2000',
      '4.0': 'NT',
      '4.90': 'ME'
    }; // Detect Windows version from platform tokens.

    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) && (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    } // Correct character case and cleanup string.


    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(os.replace(/ ce$/i, ' CE').replace(/\bhpw/i, 'web').replace(/\bMacintosh\b/, 'Mac OS').replace(/_PowerPC\b/i, ' OS').replace(/\b(OS X) [^ \d]+/i, '$1').replace(/\bMac (OS X)\b/, '$1').replace(/\/(\d)/, ' $1').replace(/_/g, '.').replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, 'x86_64').replace(/\b(Windows Phone) OS\b/, '$1').replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1').split(' on ')[0]);
    return os;
  }
  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */


  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }
  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */


  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string);
  }
  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */


  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }
  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */


  function getClassOf(value) {
    return value == null ? capitalize(value) : toString.call(value).slice(8, -1);
  }
  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */


  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
  }
  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */


  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }
  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */


  function reduce(array, callback) {
    var accumulator = null;
    each(array, function (value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }
  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */


  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }
  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */


  function parse(ua) {
    /** The environment context object. */
    var context = root;
    /** Used to flag when a custom context is provided. */

    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String'; // Juggle arguments.

    if (isCustomContext) {
      context = ua;
      ua = null;
    }
    /** Browser navigator object. */


    var nav = context.navigator || {};
    /** Browser user agent string. */

    var userAgent = nav.userAgent || '';
    ua || (ua = userAgent);
    /** Used to flag when `thisBinding` is the [ModuleScope]. */

    var isModuleScope = isCustomContext || thisBinding == oldRoot;
    /** Used to detect if browser is like Chrome. */

    var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
    /** Internal `[[Class]]` value shortcuts. */

    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = isCustomContext && context.java ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';
    /** Detect Java environments. */

    var java = /\bJava/.test(javaClass) && context.java;
    /** Detect Rhino. */

    var rhino = java && getClassOf(context.environment) == enviroClass;
    /** A character to represent alpha. */

    var alpha = java ? 'a' : '\u03b1';
    /** A character to represent beta. */

    var beta = java ? 'b' : '\u03b2';
    /** Browser document object. */

    var doc = context.document || {};
    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */

    var opera = context.operamini || context.opera;
    /** Opera `[[Class]]`. */

    var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera['[[Class]]'] : getClassOf(opera)) ? operaClass : opera = null;
    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */

    var data;
    /** The CPU architecture. */

    var arch = ua;
    /** Platform description array. */

    var description = [];
    /** Platform alpha/beta indicator. */

    var prerelease = null;
    /** A flag to indicate that environment features should be used to resolve the platform. */

    var useFeatures = ua == userAgent;
    /** The browser/environment version. */

    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();
    /** A flag to indicate if the OS ends with "/ Version" */

    var isSpecialCasedOS;
    /* Detectable layout engines (order is important). */

    var layout = getLayout([{
      'label': 'EdgeHTML',
      'pattern': 'Edge'
    }, 'Trident', {
      'label': 'WebKit',
      'pattern': 'AppleWebKit'
    }, 'iCab', 'Presto', 'NetFront', 'Tasman', 'KHTML', 'Gecko']);
    /* Detectable browser names (order is important). */

    var name = getName(['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Electron', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon', {
      'label': 'Microsoft Edge',
      'pattern': '(?:Edge|Edg|EdgA|EdgiOS)'
    }, 'Midori', 'Nook Browser', 'PaleMoon', 'PhantomJS', 'Raven', 'Rekonq', 'RockMelt', {
      'label': 'Samsung Internet',
      'pattern': 'SamsungBrowser'
    }, 'SeaMonkey', {
      'label': 'Silk',
      'pattern': '(?:Cloud9|Silk-Accelerated)'
    }, 'Sleipnir', 'SlimBrowser', {
      'label': 'SRWare Iron',
      'pattern': 'Iron'
    }, 'Sunrise', 'Swiftfox', 'Vivaldi', 'Waterfox', 'WebPositive', {
      'label': 'Yandex Browser',
      'pattern': 'YaBrowser'
    }, {
      'label': 'UC Browser',
      'pattern': 'UCBrowser'
    }, 'Opera Mini', {
      'label': 'Opera Mini',
      'pattern': 'OPiOS'
    }, 'Opera', {
      'label': 'Opera',
      'pattern': 'OPR'
    }, 'Chromium', 'Chrome', {
      'label': 'Chrome',
      'pattern': '(?:HeadlessChrome)'
    }, {
      'label': 'Chrome Mobile',
      'pattern': '(?:CriOS|CrMo)'
    }, {
      'label': 'Firefox',
      'pattern': '(?:Firefox|Minefield)'
    }, {
      'label': 'Firefox for iOS',
      'pattern': 'FxiOS'
    }, {
      'label': 'IE',
      'pattern': 'IEMobile'
    }, {
      'label': 'IE',
      'pattern': 'MSIE'
    }, 'Safari']);
    /* Detectable products (order is important). */

    var product = getProduct([{
      'label': 'BlackBerry',
      'pattern': 'BB10'
    }, 'BlackBerry', {
      'label': 'Galaxy S',
      'pattern': 'GT-I9000'
    }, {
      'label': 'Galaxy S2',
      'pattern': 'GT-I9100'
    }, {
      'label': 'Galaxy S3',
      'pattern': 'GT-I9300'
    }, {
      'label': 'Galaxy S4',
      'pattern': 'GT-I9500'
    }, {
      'label': 'Galaxy S5',
      'pattern': 'SM-G900'
    }, {
      'label': 'Galaxy S6',
      'pattern': 'SM-G920'
    }, {
      'label': 'Galaxy S6 Edge',
      'pattern': 'SM-G925'
    }, {
      'label': 'Galaxy S7',
      'pattern': 'SM-G930'
    }, {
      'label': 'Galaxy S7 Edge',
      'pattern': 'SM-G935'
    }, 'Google TV', 'Lumia', 'iPad', 'iPod', 'iPhone', 'Kindle', {
      'label': 'Kindle Fire',
      'pattern': '(?:Cloud9|Silk-Accelerated)'
    }, 'Nexus', 'Nook', 'PlayBook', 'PlayStation Vita', 'PlayStation', 'TouchPad', 'Transformer', {
      'label': 'Wii U',
      'pattern': 'WiiU'
    }, 'Wii', 'Xbox One', {
      'label': 'Xbox 360',
      'pattern': 'Xbox'
    }, 'Xoom']);
    /* Detectable manufacturers. */

    var manufacturer = getManufacturer({
      'Apple': {
        'iPad': 1,
        'iPhone': 1,
        'iPod': 1
      },
      'Alcatel': {},
      'Archos': {},
      'Amazon': {
        'Kindle': 1,
        'Kindle Fire': 1
      },
      'Asus': {
        'Transformer': 1
      },
      'Barnes & Noble': {
        'Nook': 1
      },
      'BlackBerry': {
        'PlayBook': 1
      },
      'Google': {
        'Google TV': 1,
        'Nexus': 1
      },
      'HP': {
        'TouchPad': 1
      },
      'HTC': {},
      'Huawei': {},
      'Lenovo': {},
      'LG': {},
      'Microsoft': {
        'Xbox': 1,
        'Xbox One': 1
      },
      'Motorola': {
        'Xoom': 1
      },
      'Nintendo': {
        'Wii U': 1,
        'Wii': 1
      },
      'Nokia': {
        'Lumia': 1
      },
      'Oppo': {},
      'Samsung': {
        'Galaxy S': 1,
        'Galaxy S2': 1,
        'Galaxy S3': 1,
        'Galaxy S4': 1
      },
      'Sony': {
        'PlayStation': 1,
        'PlayStation Vita': 1
      },
      'Xiaomi': {
        'Mi': 1,
        'Redmi': 1
      }
    });
    /* Detectable operating systems (order is important). */

    var os = getOS(['Windows Phone', 'KaiOS', 'Android', 'CentOS', {
      'label': 'Chrome OS',
      'pattern': 'CrOS'
    }, 'Debian', {
      'label': 'DragonFly BSD',
      'pattern': 'DragonFly'
    }, 'Fedora', 'FreeBSD', 'Gentoo', 'Haiku', 'Kubuntu', 'Linux Mint', 'OpenBSD', 'Red Hat', 'SuSE', 'Ubuntu', 'Xubuntu', 'Cygwin', 'Symbian OS', 'hpwOS', 'webOS ', 'webOS', 'Tablet OS', 'Tizen', 'Linux', 'Mac OS X', 'Macintosh', 'Mac', 'Windows 98;', 'Windows ']);
    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */

    function getLayout(guesses) {
      return reduce(guesses, function (result, guess) {
        return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }
    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */


    function getManufacturer(guesses) {
      return reduce(guesses, function (result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)) && key;
      });
    }
    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */


    function getName(guesses) {
      return reduce(guesses, function (result, guess) {
        return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }
    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */


    function getOS(guesses) {
      return reduce(guesses, function (result, guess) {
        var pattern = guess.pattern || qualify(guess);

        if (!result && (result = RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }

        return result;
      });
    }
    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */


    function getProduct(guesses) {
      return reduce(guesses, function (result, guess) {
        var pattern = guess.pattern || qualify(guess);

        if (!result && (result = RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) || RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) || RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua))) {
          // Split by forward slash and append product version if needed.
          if ((result = String(guess.label && !RegExp(pattern, 'i').test(guess.label) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          } // Correct character case and cleanup string.


          guess = guess.label || guess;
          result = format(result[0].replace(RegExp(pattern, 'i'), guess).replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ').replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }

        return result;
      });
    }
    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */


    function getVersion(patterns) {
      return reduce(patterns, function (result, pattern) {
        return result || (RegExp(pattern + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }
    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */


    function toStringPlatform() {
      return this.description || '';
    }
    /*------------------------------------------------------------------------*/
    // Convert layout to an array so we can add extra details.


    layout && (layout = [layout]); // Detect Android products.
    // Browsers on Android devices typically provide their product IDS after "Android;"
    // up to "Build" or ") AppleWebKit".
    // Example:
    // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
    // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"

    if (/\bAndroid\b/.test(os) && !product && (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
      product = trim(data[1]) // Replace any language codes (eg. "en-US").
      .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null;
    } // Detect product names that contain their manufacturer's name.


    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    } else if (manufacturer && product) {
      product = product.replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ').replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
    } // Clean up Google TV.


    if (data = /\bGoogle TV\b/.exec(product)) {
      product = data[0];
    } // Detect simulators.


    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    } // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.


    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    } // Detect IE Mobile 11.


    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    } // Detect iOS.
    else if (/^iP/.test(product)) {
        name || (name = 'Safari');
        os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua)) ? ' ' + data[1].replace(/_/g, '.') : '');
      } // Detect Kubuntu.
      else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
          os = 'Kubuntu';
        } // Detect Android browsers.
        else if (manufacturer && manufacturer != 'Google' && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua)) {
            name = 'Android Browser';
            os = /\bAndroid\b/.test(os) ? os : 'Android';
          } // Detect Silk desktop/accelerated modes.
          else if (name == 'Silk') {
              if (!/\bMobi/i.test(ua)) {
                os = 'Android';
                description.unshift('desktop mode');
              }

              if (/Accelerated *= *true/i.test(ua)) {
                description.unshift('accelerated');
              }
            } // Detect UC Browser speed mode.
            else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
                description.push('speed mode');
              } // Detect PaleMoon identifying as Firefox.
              else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
                  description.push('identifying as Firefox ' + data[1]);
                } // Detect Firefox OS and products running Firefox.
                else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
                    os || (os = 'Firefox OS');
                    product || (product = data[1]);
                  } // Detect false positives for Firefox/Safari.
                  else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
                      // Escape the `/` for Firefox 1.
                      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
                        // Clear name of false positives.
                        name = null;
                      } // Reassign a generic name.


                      if ((data = product || manufacturer || os) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
                        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
                      }
                    } // Add Chrome version to description for Electron.
                    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
                        description.push('Chromium ' + data);
                      } // Detect non-Opera (Presto-based) versions (order is important).


    if (!version) {
      version = getVersion(['(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)', 'Version', qualify(name), '(?:Firefox|Minefield|NetFront)']);
    } // Detect stubborn layout engines.


    if (data = layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' || !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') || layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront') {
      layout = [data];
    } // Detect Windows Phone 7 desktop mode.


    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    } // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
        name = 'IE Mobile';
        os = 'Windows Phone 8.x';
        description.unshift('desktop mode');
        version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
      } // Detect IE 11 identifying as other browsers.
      else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
          if (name) {
            description.push('identifying as ' + name + (version ? ' ' + version : ''));
          }

          name = 'IE';
          version = data[1];
        } // Leverage environment features.


    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }

        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch (e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }

          if (!name) {
            name = 'Rhino';
          }
        } else if (typeof context.process == 'object' && !context.process.browser && (data = context.process)) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }

          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      } // Detect Adobe AIR.
      else if (getClassOf(data = context.runtime) == airRuntimeClass) {
          name = 'Adobe AIR';
          os = data.flash.system.Capabilities.os;
        } // Detect PhantomJS.
        else if (getClassOf(data = context.phantom) == phantomClass) {
            name = 'PhantomJS';
            version = (data = data.version || null) && data.major + '.' + data.minor + '.' + data.patch;
          } // Detect IE compatibility modes.
          else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
              // We're in compatibility mode when the Trident version + 4 doesn't
              // equal the document mode.
              version = [version, doc.documentMode];

              if ((data = +data[1] + 4) != version[1]) {
                description.push('IE ' + version[1] + ' mode');
                layout && (layout[1] = '');
                version[1] = data;
              }

              version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
            } // Detect IE 11 masking as other browsers.
            else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
                description.push('masking as ' + name + ' ' + version);
                name = 'IE';
                version = '11.0';
                layout = ['Trident'];
                os = 'Windows';
              }

      os = os && format(os);
    } // Detect prerelease phases.


    if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && 'a')) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') + (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    } // Detect Firefox Mobile.


    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
      name = 'Firefox Mobile';
    } // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
        version = version.replace(/\.[\d.]+/, '.x');
      } // Detect Xbox 360 and Xbox One.
      else if (/\bXbox\b/i.test(product)) {
          if (product == 'Xbox 360') {
            os = null;
          }

          if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
            description.unshift('mobile mode');
          }
        } // Add mobile postfix.
        else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os == 'Windows CE' || /Mobi/i.test(ua))) {
            name += ' Mobile';
          } // Detect IE platform preview.
          else if (name == 'IE' && useFeatures) {
              try {
                if (context.external === null) {
                  description.unshift('platform preview');
                }
              } catch (e) {
                description.unshift('embedded');
              }
            } // Detect BlackBerry OS version.
            // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
            else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data = (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] || version)) {
                data = [data, /BB10/.test(ua)];
                os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
                version = null;
              } // Detect Opera identifying/masking itself as another browser.
              // http://www.opera.com/support/kb/view/843/
              else if (this != forOwn && product != 'Wii' && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os) || name == 'IE' && (os && !/^Win/.test(os) && version > 5.5 || /\bWindows XP\b/.test(os) && version > 8 || version == 8 && !/\bTrident\b/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, '') + ';')) && data.name) {
                  // When "identifying", the UA contains both Opera and the other browser's name.
                  data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');

                  if (reOpera.test(name)) {
                    if (/\bIE\b/.test(data) && os == 'Mac OS') {
                      os = null;
                    }

                    data = 'identify' + data;
                  } // When "masking", the UA contains only the other browser's name.
                  else {
                      data = 'mask' + data;

                      if (operaClass) {
                        name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
                      } else {
                        name = 'Opera';
                      }

                      if (/\bIE\b/.test(data)) {
                        os = null;
                      }

                      if (!useFeatures) {
                        version = null;
                      }
                    }

                  layout = ['Presto'];
                  description.push(data);
                } // Detect WebKit Nightly and approximate Chrome/Safari versions.


    if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data]; // Nightly builds are postfixed with a "+".

      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      } // Clear incorrect browser versions.
      else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
          version = null;
        } // Use the full Chrome version when available.


      data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1]; // Detect Blink layout engine.

      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      } // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi


      if (!useFeatures || !likeChrome && !data[1]) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      } // Add the postfix of ".x" or "+" for approximate versions.


      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+')); // Obscure version for some Safari 1-2 releases.

      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
        description.unshift('headless');
      }
    } // Detect Opera desktop modes.


    if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');

      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }

      os = os.replace(RegExp(' *' + data + '$'), '');
    } // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
        description.unshift('desktop mode');
        name = 'Chrome Mobile';
        version = null;

        if (/\bOS X\b/.test(os)) {
          manufacturer = 'Apple';
          os = 'iOS 4.3+';
        } else {
          os = null;
        }
      } // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
      else if (/\bSRWare Iron\b/.test(name) && !version) {
          version = getVersion('Chrome');
        } // Strip incorrect OS versions.


    if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 && ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    } // Ensure OS does not include the browser name.


    if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
      os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
    } // Add layout engine.


    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    } // Combine contextual information.


    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    } // Append manufacturer to description.


    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    } // Append product to description.


    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    } // Parse the OS into an object.


    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': data && !isSpecialCasedOS ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function () {
          var version = this.version;
          return this.family + (version && !isSpecialCasedOS ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    } // Add browser/OS architecture.


    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }

      if (name && (/\bWOW64\b/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua))) {
        description.unshift('32-bit');
      }
    } // Chrome 39 and above on OS X is always 64-bit.
    else if (os && /^OS X/.test(os.family) && name == 'Chrome' && parseFloat(version) >= 39) {
        os.architecture = 64;
      }

    ua || (ua = null);
    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */

    var platform = {};
    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */

    platform.description = ua;
    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */

    platform.layout = layout && layout[0];
    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */

    platform.manufacturer = manufacturer;
    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */

    platform.name = name;
    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */

    platform.prerelease = prerelease;
    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */

    platform.product = product;
    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */

    platform.ua = ua;
    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */

    platform.version = name && version;
    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */

    platform.os = os || {
      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
       * "SuSE", "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function () {
        return 'null';
      }
    };
    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }

    if (platform.name) {
      description.unshift(name);
    }

    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }

    if (description.length) {
      platform.description = description.join(' ');
    }

    return platform;
  }
  /*--------------------------------------------------------------------------*/
  // Export platform.


  var platform = parse(); // Some AMD build optimizers, like r.js, check for condition patterns like the following:

  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform; // Define as an anonymous module so platform can be aliased through path mapping.

    define(function () {
      return platform;
    });
  } // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
      // Export for CommonJS support.
      forOwn(platform, function (value, key) {
        freeExports[key] = value;
      });
    } else {
      // Export to the global object.
      root.platform = platform;
    }
}).call(this);
},{}],"WrHh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _platform = _interopRequireDefault(require("platform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPlatformName = function getPlatformName() {
  var os = _platform.default.os.family || '';
  os = os.toLowerCase().replace(/ /g, '');

  if (/\bwin/.test(os)) {
    os = 'windows';
  } else if (/darwin|osx/.test(os)) {
    os = 'osx';
  } else if (/linux|freebsd|sunos|ubuntu|debian|fedora|redhat|suse/.test(os)) {
    os = 'linux';
  } else {
    os = 'other';
  }

  return os;
};

var getCharacter = function getCharacter(event) {
  if (event.which == null) {
    // NOTE: IE
    return String.fromCharCode(event.keyCode);
  } else if (event.which !== 0 && event.charCode !== 0) {
    // NOTE: the rest
    return String.fromCharCode(event.which);
  }

  return null;
};

var _default = {
  getPlatformName: getPlatformName,
  getCharacter: getCharacter
};
exports.default = _default;
},{"platform":"kohK"}],"Xyu5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = exports.isPlainObject = exports.isArray = exports.flatten = exports.findKey = exports.compact = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var isArray = function isArray(arr) {
  return Array.isArray(arr);
};

exports.isArray = isArray;

var isPlainObject = function isPlainObject(obj) {
  var isObject = _typeof(obj) === 'object' && obj !== null && !isArray(obj);
  if (!isObject || obj.toString && obj.toString() !== '[object Object]') return false;
  var proto = Object.getPrototypeOf(obj);

  if (proto === null) {
    return true;
  }

  var Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
};

exports.isPlainObject = isPlainObject;

var findKey = function findKey(obj, fn) {
  if (!isPlainObject(obj) && !isArray(obj)) return;
  var keys = Object.keys(obj);
  return keys.find(function (key) {
    return fn(obj[key]);
  });
};

exports.findKey = findKey;

var compact = function compact(arr) {
  return arr.filter(Boolean);
};

exports.compact = compact;

var flattenOnce = function flattenOnce(arr, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }

  return arr.reduce(function (acc, val) {
    if (isArray(val) && recurse) return acc.concat(flattenOnce(val, false));
    acc.push(val);
    return acc;
  }, []);
};

var flatten = function flatten(arr) {
  if (!isArray(arr)) throw new Error('flatten expects an array');
  return flattenOnce(arr);
};

exports.flatten = flatten;

var map = function map(itr, fn) {
  if (isArray(itr)) return itr.map(fn);
  var results = [];
  var keys = Object.keys(itr);
  var len = keys.length;

  for (var i = 0; i < len; i += 1) {
    var key = keys[i];
    results.push(fn(itr[key], key));
  }

  return results;
};

exports.map = map;
},{}],"g5I+":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"Edm1":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShortcuts = exports.default = exports.ShortcutProvider = exports.ShortcutContext = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _events = require("events");

var _justReduceObject = _interopRequireDefault(require("just-reduce-object"));

var _invariant = _interopRequireDefault(require("invariant"));

var _helpers = _interopRequireDefault(require("./helpers"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var warning = function warning(text) {
  if (process && "production" !== 'production') {
    console.warn(text);
  }
};

var ShortcutManager =
/** @class */
function (_super) {
  (0, _tslib.__extends)(ShortcutManager, _super);

  function ShortcutManager(keymap) {
    if (keymap === void 0) {
      keymap = {};
    }

    var _this = _super.call(this) || this;

    _this._platformName = _helpers.default.getPlatformName();

    _this._parseShortcutDescriptor = function (item) {
      if ((0, _utils.isPlainObject)(item)) {
        return item[_this._platformName];
      }

      return item;
    };

    _this._keymap = keymap;
    return _this;
  }

  ShortcutManager.prototype.addUpdateListener = function (callback) {
    (0, _invariant.default)(callback, 'addUpdateListener: callback argument is not defined or falsy');
    this.on(ShortcutManager.CHANGE_EVENT, callback);
  };

  ShortcutManager.prototype.removeUpdateListener = function (callback) {
    this.removeListener(ShortcutManager.CHANGE_EVENT, callback);
  };

  ShortcutManager.prototype.setKeymap = function (keymap) {
    (0, _invariant.default)(keymap, 'setKeymap: keymap argument is not defined or falsy.');
    this._keymap = keymap;
    this.emit(ShortcutManager.CHANGE_EVENT);
  };

  ShortcutManager.prototype.extendKeymap = function (keymap) {
    (0, _invariant.default)(keymap, 'extendKeymap: keymap argument is not defined or falsy.');
    this._keymap = Object.assign({}, this._keymap, keymap);
    this.emit(ShortcutManager.CHANGE_EVENT);
  };

  ShortcutManager.prototype.getAllShortcuts = function () {
    return this._keymap;
  };

  ShortcutManager.prototype.getAllShortcutsForPlatform = function (platformName) {
    var _transformShortcuts = function _transformShortcuts(shortcuts) {
      return (0, _justReduceObject.default)(shortcuts, function (result, keyName, keyValue) {
        var _keyValue = keyValue;

        if ((0, _utils.isPlainObject)(_keyValue)) {
          if (_keyValue[platformName]) {
            _keyValue = _keyValue[platformName];
          } else {
            result[keyName] = _transformShortcuts(_keyValue);
            return result;
          }
        }

        result[keyName] = _keyValue;
        return result;
      }, {});
    };

    return _transformShortcuts(this._keymap);
  };

  ShortcutManager.prototype.getAllShortcutsForCurrentPlatform = function () {
    return this.getAllShortcutsForPlatform(this._platformName);
  };

  ShortcutManager.prototype.getShortcuts = function (componentName) {
    (0, _invariant.default)(componentName, 'getShortcuts: name argument is not defined or falsy.');
    var cursor = this._keymap[componentName];

    if (!cursor) {
      warning("getShortcuts: There are no shortcuts with name ".concat(componentName, "."));
      return;
    }

    var shortcuts = (0, _utils.compact)((0, _utils.flatten)((0, _utils.map)(cursor, this._parseShortcutDescriptor)));
    return shortcuts;
  };

  ShortcutManager.prototype._parseShortcutKeyName = function (obj, keyName) {
    var _this = this;

    var result = (0, _utils.findKey)(obj, function (item) {
      var _item = item;

      if ((0, _utils.isPlainObject)(_item)) {
        _item = _item[_this._platformName];
      }

      if ((0, _utils.isArray)(_item)) {
        var index = _item.indexOf(keyName);

        if (index >= 0) {
          _item = _item[index];
        }
      }

      return _item === keyName;
    });
    return result;
  };

  ShortcutManager.prototype.findShortcutName = function (keyName, componentName) {
    (0, _invariant.default)(keyName, 'findShortcutName: keyName argument is not defined or falsy.');
    (0, _invariant.default)(componentName, 'findShortcutName: componentName argument is not defined or falsy.');
    var cursor = this._keymap[componentName];

    var result = this._parseShortcutKeyName(cursor, keyName);

    return result;
  };

  ShortcutManager.CHANGE_EVENT = 'shortcuts:update';
  return ShortcutManager;
}(_events.EventEmitter);

var shortcutManager = new ShortcutManager();

var ShortcutContext = _react.default.createContext(shortcutManager);

exports.ShortcutContext = ShortcutContext;

var useShortcuts = function useShortcuts() {
  return (0, _react.useContext)(ShortcutContext);
};

exports.useShortcuts = useShortcuts;

var ShortcutProvider = function ShortcutProvider(props) {
  var keymap = props.keymap,
      children = props.children;
  (0, _react.useEffect)(function () {
    shortcutManager.setKeymap(keymap);
  }, [keymap]);
  return _react.default.createElement(ShortcutContext.Provider, {
    value: shortcutManager
  }, children);
};

exports.ShortcutProvider = ShortcutProvider;
var _default = ShortcutManager;
exports.default = _default;
},{"tslib":"vCxL","react":"1n8/","events":"wIHY","just-reduce-object":"du5q","invariant":"2gTp","./helpers":"WrHh","./utils":"Xyu5","process":"g5I+"}],"amLf":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * binds an event to Combokeys
 *
 * can be a single key, a combination of keys separated with +,
 * an array of keys, or a sequence of keys separated by spaces
 *
 * be sure to list the modifier keys first to make sure that the
 * correct key ends up getting bound (the last key in the pattern)
 *
 * @param {string|Array} keys
 * @param {Function} callback
 * @param {string=} action - "keypress", "keydown", or "keyup"
 * @returns void
 */
module.exports = function (keys, callback, action) {
  var self = this

  keys = keys instanceof Array ? keys : [keys]
  self.bindMultiple(keys, callback, action)
  return self
}

},{}],"bCAK":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * binds multiple combinations to the same callback
 *
 * @param {Array} combinations
 * @param {Function} callback
 * @param {string|undefined} action
 * @returns void
 */
module.exports = function (combinations, callback, action) {
  var self = this

  for (var j = 0; j < combinations.length; ++j) {
    self.bindSingle(combinations[j], callback, action)
  }
}

},{}],"vxXX":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * unbinds an event to Combokeys
 *
 * the unbinding sets the callback function of the specified key combo
 * to an empty function and deletes the corresponding key in the
 * directMap dict.
 *
 * TODO: actually remove this from the callbacks dictionary instead
 * of binding an empty function
 *
 * the keycombo+action has to be exactly the same as
 * it was defined in the bind method
 *
 * @param {string|Array} keys
 * @param {string} action
 * @returns void
 */
module.exports = function (keys, action) {
  var self = this

  return self.bind(keys, function () {}, action)
}

},{}],"Kw0E":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * triggers an event that has already been bound
 *
 * @param {string} keys
 * @param {string=} action
 * @returns void
 */
module.exports = function (keys, action) {
  var self = this
  if (self.directMap[keys + ':' + action]) {
    self.directMap[keys + ':' + action]({}, keys)
  }
  return this
}

},{}],"tGU1":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * resets the library back to its initial state. This is useful
 * if you want to clear out the current keyboard shortcuts and bind
 * new ones - for example if you switch to another page
 *
 * @returns void
 */
module.exports = function () {
  var self = this
  self.callbacks = {}
  self.directMap = {}
  return this
}

},{}],"x1U3":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
* should we stop this event before firing off callbacks
*
* @param {Event} e
* @param {Element} element
* @return {boolean}
*/
module.exports = function (e, element) {
  // if the element has the class "combokeys" then no need to stop
  if ((' ' + element.className + ' ').indexOf(' combokeys ') > -1) {
    return false
  }

  var tagName = element.tagName.toLowerCase()

  // stop for input, select, and textarea
  return tagName === 'input' || tagName === 'select' || tagName === 'textarea' || element.isContentEditable
}

},{}],"OoTu":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * determines if the keycode specified is a modifier key or not
 *
 * @param {string} key
 * @returns {boolean}
 */
module.exports = function (key) {
  return key === 'shift' || key === 'ctrl' || key === 'alt' || key === 'meta'
}

},{}],"yzzG":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * handles a character key event
 *
 * @param {string} character
 * @param {Array} modifiers
 * @param {Event} e
 * @returns void
 */
module.exports = function (character, modifiers, e) {
  var self = this
  var callbacks
  var j
  var doNotReset = {}
  var maxLevel = 0
  var processedSequenceCallback = false
  var isModifier
  var ignoreThisKeypress

  callbacks = self.getMatches(character, modifiers, e)
  // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
  for (j = 0; j < callbacks.length; ++j) {
    if (callbacks[j].seq) {
      maxLevel = Math.max(maxLevel, callbacks[j].level)
    }
  }

  // loop through matching callbacks for this key event
  for (j = 0; j < callbacks.length; ++j) {
    // fire for all sequence callbacks
    // this is because if for example you have multiple sequences
    // bound such as "g i" and "g t" they both need to fire the
    // callback for matching g cause otherwise you can only ever
    // match the first one
    if (callbacks[j].seq) {
      // only fire callbacks for the maxLevel to prevent
      // subsequences from also firing
      //
      // for example 'a option b' should not cause 'option b' to fire
      // even though 'option b' is part of the other sequence
      //
      // any sequences that do not match here will be discarded
      // below by the resetSequences call
      if (callbacks[j].level !== maxLevel) {
        continue
      }

      processedSequenceCallback = true

      // keep a list of which sequences were matches for later
      doNotReset[callbacks[j].seq] = 1
      self.fireCallback(callbacks[j].callback, e, callbacks[j].combo, callbacks[j].seq)
      continue
    }

    // if there were no sequence matches but we are still here
    // that means this is a regular match so we should fire that
    if (!processedSequenceCallback) {
      self.fireCallback(callbacks[j].callback, e, callbacks[j].combo)
    }
  }

  // if the key you pressed matches the type of sequence without
  // being a modifier (ie "keyup" or "keypress") then we should
  // reset all sequences that were not matched by this event
  //
  // this is so, for example, if you have the sequence "h a t" and you
  // type "h e a r t" it does not match.  in this case the "e" will
  // cause the sequence to reset
  //
  // modifier keys are ignored because you can have a sequence
  // that contains modifiers such as "enter ctrl+space" and in most
  // cases the modifier key will be pressed before the next key
  //
  // also if you have a sequence such as "ctrl+b a" then pressing the
  // "b" key will trigger a "keypress" and a "keydown"
  //
  // the "keydown" is expected when there is a modifier, but the
  // "keypress" ends up matching the nextExpectedAction since it occurs
  // after and that causes the sequence to reset
  //
  // we ignore keypresses in a sequence that directly follow a keydown
  // for the same character
  ignoreThisKeypress = e.type === 'keypress' && self.ignoreNextKeypress
  isModifier = require('../../helpers/isModifier')
  if (e.type === self.nextExpectedAction && !isModifier(character) && !ignoreThisKeypress) {
    self.resetSequences(doNotReset)
  }

  self.ignoreNextKeypress = processedSequenceCallback && e.type === 'keydown'
}

},{"../../helpers/isModifier":"OoTu"}],"c0N/":[function(require,module,exports) {
module.exports = on
module.exports.on = on
module.exports.off = off

function on (element, event, callback, capture) {
  !element.addEventListener && (event = 'on' + event)
  ;(element.addEventListener || element.attachEvent).call(element, event, callback, capture)
  return callback
}

function off (element, event, callback, capture) {
  !element.removeEventListener && (event = 'on' + event)
  ;(element.removeEventListener || element.detachEvent).call(element, event, callback, capture)
  return callback
}

},{}],"uZhs":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * mapping of special keycodes to their corresponding keys
 *
 * everything in this dictionary cannot use keypress events
 * so it has to be here to map to the correct keycodes for
 * keyup/keydown events
 *
 * @type {Object}
 */
module.exports = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  20: 'capslock',
  27: 'esc',
  32: 'space',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  45: 'ins',
  46: 'del',
  91: 'meta',
  93: 'meta',
  173: 'minus',
  187: 'plus',
  189: 'minus',
  224: 'meta'
}

/**
 * loop through the f keys, f1 to f19 and add them to the map
 * programatically
 */
for (var i = 1; i < 20; ++i) {
  module.exports[111 + i] = 'f' + i
}

/**
 * loop through to map numbers on the numeric keypad
 */
for (i = 0; i <= 9; ++i) {
  module.exports[i + 96] = i
}

},{}],"Z5uo":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * mapping for special characters so they can support
 *
 * this dictionary is only used incase you want to bind a
 * keyup or keydown event to one of these keys
 *
 * @type {Object}
 */
module.exports = {
  106: '*',
  107: 'plus',
  109: 'minus',
  110: '.',
  111: '/',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: '`',
  219: '[',
  220: '\\',
  221: ']',
  222: "'"
}

},{}],"4org":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * takes the event and returns the key character
 *
 * @param {Event} e
 * @return {string}
 */
module.exports = function (e) {
  var SPECIAL_KEYS_MAP,
    SPECIAL_CHARACTERS_MAP
  SPECIAL_KEYS_MAP = require('./special-keys-map')
  SPECIAL_CHARACTERS_MAP = require('./special-characters-map')

  // for keypress events we should return the character as is
  if (e.type === 'keypress') {
    var character = String.fromCharCode(e.which)

    // if the shift key is not pressed then it is safe to assume
    // that we want the character to be lowercase.  this means if
    // you accidentally have caps lock on then your key bindings
    // will continue to work
    //
    // the only side effect that might not be desired is if you
    // bind something like 'A' cause you want to trigger an
    // event when capital A is pressed caps lock will no longer
    // trigger the event.  shift+a will though.
    if (!e.shiftKey) {
      character = character.toLowerCase()
    }

    return character
  }

  // for non keypress events the special maps are needed
  if (SPECIAL_KEYS_MAP[e.which] !== undefined) {
    return SPECIAL_KEYS_MAP[e.which]
  }

  if (SPECIAL_CHARACTERS_MAP[e.which] !== undefined) {
    return SPECIAL_CHARACTERS_MAP[e.which]
  }

  // if it is not in the special map

  // with keydown and keyup events the character seems to always
  // come in as an uppercase character whether you are pressing shift
  // or not.  we should make sure it is always lowercase for comparisons
  return String.fromCharCode(e.which).toLowerCase()
}

},{"./special-keys-map":"uZhs","./special-characters-map":"Z5uo"}],"k6Ou":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * takes a key event and figures out what the modifiers are
 *
 * @param {Event} e
 * @returns {Array}
 */
module.exports = function (e) {
  var modifiers = []

  if (e.shiftKey) {
    modifiers.push('shift')
  }

  if (e.altKey) {
    modifiers.push('alt')
  }

  if (e.ctrlKey) {
    modifiers.push('ctrl')
  }

  if (e.metaKey) {
    modifiers.push('meta')
  }

  return modifiers
}

},{}],"L4EI":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * handles a keydown event
 *
 * @param {Event} e
 * @returns void
 */
module.exports = function (e) {
  var self = this
  var characterFromEvent
  var eventModifiers

  // normalize e.which for key events
  // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
  if (typeof e.which !== 'number') {
    e.which = e.keyCode
  }
  characterFromEvent = require('../../helpers/characterFromEvent')
  var character = characterFromEvent(e)

  // no character found then stop
  if (character === undefined) {
    return
  }

  // need to use === for the character check because the character can be 0
  if (e.type === 'keyup' && self.ignoreNextKeyup === character) {
    self.ignoreNextKeyup = false
    return
  }

  eventModifiers = require('../../helpers/eventModifiers')
  self.handleKey(character, eventModifiers(e), e)
}

},{"../../helpers/characterFromEvent":"4org","../../helpers/eventModifiers":"k6Ou"}],"69o1":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
module.exports = function () {
  var self = this
  var on = require('./dom-event')
  var element = self.element

  self.eventHandler = require('./handleKeyEvent').bind(self)

  on(element, 'keypress', self.eventHandler)
  on(element, 'keydown', self.eventHandler)
  on(element, 'keyup', self.eventHandler)
}

},{"./dom-event":"c0N/","./handleKeyEvent":"L4EI"}],"jpx2":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * binds a single keyboard combination
 *
 * @param {string} combination
 * @param {Function} callback
 * @param {string=} action
 * @param {string=} sequenceName - name of sequence if part of sequence
 * @param {number=} level - what part of the sequence the command is
 * @returns void
 */
module.exports = function (combination, callback, action, sequenceName, level) {
  var self = this

  // store a direct mapped reference for use with Combokeys.trigger
  self.directMap[combination + ':' + action] = callback

  // make sure multiple spaces in a row become a single space
  combination = combination.replace(/\s+/g, ' ')

  var sequence = combination.split(' ')
  var info

  // if this pattern is a sequence of keys then run through this method
  // to reprocess each pattern one key at a time
  if (sequence.length > 1) {
    self.bindSequence(combination, sequence, callback, action)
    return
  }

  info = self.getKeyInfo(combination, action)

  // make sure to initialize array if this is the first time
  // a callback is added for this key
  self.callbacks[info.key] = self.callbacks[info.key] || []

  // remove an existing match if there is one
  self.getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level)

  // add this call back to the array
  // if it is a sequence put it at the beginning
  // if not put it at the end
  //
  // this is important because the way these are processed expects
  // the sequence ones to come first
  self.callbacks[info.key][sequenceName ? 'unshift' : 'push']({
    callback: callback,
    modifiers: info.modifiers,
    action: info.action,
    seq: sequenceName,
    level: level,
    combo: combination
  })
}

},{}],"y/0M":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * Converts from a string key combination to an array
 *
 * @param  {string} combination like "command+shift+l"
 * @return {Array}
 */
module.exports = function (combination) {
  if (combination === '+') {
    return ['+']
  }

  return combination.split('+')
}

},{}],"j/Dw":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * this is a list of special strings you can use to map
 * to modifier keys when you specify your keyboard shortcuts
 *
 * @type {Object}
 */
module.exports = {
  'option': 'alt',
  'command': 'meta',
  'return': 'enter',
  'escape': 'esc',
  'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
}

},{}],"fM8v":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * this is a mapping of keys that require shift on a US keypad
 * back to the non shift equivelents
 *
 * this is so you can use keyup events with these keys
 *
 * note that this will only work reliably on US keyboards
 *
 * @type {Object}
 */
module.exports = {
  '~': '`',
  '!': '1',
  '@': '2',
  '#': '3',
  '$': '4',
  '%': '5',
  '^': '6',
  '&': '7',
  '*': '8',
  '(': '9',
  ')': '0',
  '_': '-',
  '+': '=',
  ':': ';',
  '"': "'",
  '<': ',',
  '>': '.',
  '?': '/',
  '|': '\\'
}

},{}],"saQR":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * Gets info for a specific key combination
 *
 * @param  {string} combination key combination ("command+s" or "a" or "*")
 * @param  {string=} action
 * @returns {Object}
 */
module.exports = function (combination, action) {
  var self = this
  var keysFromString
  var keys
  var key
  var j
  var modifiers = []
  var SPECIAL_ALIASES
  var SHIFT_MAP
  var isModifier

  keysFromString = require('../../helpers/keysFromString')
  // take the keys from this pattern and figure out what the actual
  // pattern is all about
  keys = keysFromString(combination)

  SPECIAL_ALIASES = require('../../helpers/special-aliases')
  SHIFT_MAP = require('../../helpers/shift-map')
  isModifier = require('../../helpers/isModifier')
  for (j = 0; j < keys.length; ++j) {
    key = keys[j]

    // normalize key names
    if (SPECIAL_ALIASES[key]) {
      key = SPECIAL_ALIASES[key]
    }

    // if this is not a keypress event then we should
    // be smart about using shift keys
    // this will only work for US keyboards however
    if (action && action !== 'keypress' && SHIFT_MAP[key]) {
      key = SHIFT_MAP[key]
      modifiers.push('shift')
    }

    // if this key is a modifier then add it to the list of modifiers
    if (isModifier(key)) {
      modifiers.push(key)
    }
  }

  // depending on what the key combination is
  // we will try to pick the best event for it
  action = self.pickBestAction(key, modifiers, action)

  return {
    key: key,
    modifiers: modifiers,
    action: action
  }
}

},{"../../helpers/keysFromString":"y/0M","../../helpers/special-aliases":"j/Dw","../../helpers/shift-map":"fM8v","../../helpers/isModifier":"OoTu"}],"3mI9":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * picks the best action based on the key combination
 *
 * @param {string} key - character for key
 * @param {Array} modifiers
 * @param {string=} action passed in
 */
module.exports = function (key, modifiers, action) {
  var self = this

  // if no action was picked in we should try to pick the one
  // that we think would work best for this key
  if (!action) {
    action = self.getReverseMap()[key] ? 'keydown' : 'keypress'
  }

  // modifier keys don't work as expected with keypress,
  // switch to keydown
  if (action === 'keypress' && modifiers.length) {
    action = 'keydown'
  }

  return action
}

},{}],"r0Si":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * reverses the map lookup so that we can look for specific keys
 * to see what can and can't use keypress
 *
 * @return {Object}
 */
module.exports = function () {
  var self = this
  var constructor = self.constructor
  var SPECIAL_KEYS_MAP

  if (!constructor.REVERSE_MAP) {
    constructor.REVERSE_MAP = {}
    SPECIAL_KEYS_MAP = require('../../helpers/special-keys-map')
    for (var key in SPECIAL_KEYS_MAP) {
      // pull out the numeric keypad from here cause keypress should
      // be able to detect the keys from the character
      if (key > 95 && key < 112) {
        continue
      }

      if (SPECIAL_KEYS_MAP.hasOwnProperty(key)) {
        constructor.REVERSE_MAP[SPECIAL_KEYS_MAP[key]] = key
      }
    }
  }
  return constructor.REVERSE_MAP
}

},{"../../helpers/special-keys-map":"uZhs"}],"DQ3S":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * checks if two arrays are equal
 *
 * @param {Array} modifiers1
 * @param {Array} modifiers2
 * @returns {boolean}
 */
module.exports = function (modifiers1, modifiers2) {
  return modifiers1.sort().join(',') === modifiers2.sort().join(',')
}

},{}],"wGAJ":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * finds all callbacks that match based on the keycode, modifiers,
 * and action
 *
 * @param {string} character
 * @param {Array} modifiers
 * @param {Event|Object} e
 * @param {string=} sequenceName - name of the sequence we are looking for
 * @param {string=} combination
 * @param {number=} level
 * @returns {Array}
 */
module.exports = function (character, modifiers, e, sequenceName, combination, level) {
  var self = this
  var j
  var callback
  var matches = []
  var action = e.type
  var isModifier
  var modifiersMatch

  if (
      action === 'keypress' &&
      // Firefox fires keypress for arrows
      !(e.code && e.code.slice(0, 5) === 'Arrow')
  ) {
    // 'any-character' callbacks are only on `keypress`
    var anyCharCallbacks = self.callbacks['any-character'] || []
    anyCharCallbacks.forEach(function (callback) {
      matches.push(callback)
    })
  }

  if (!self.callbacks[character]) { return matches }

  isModifier = require('../../helpers/isModifier')
  // if a modifier key is coming up on its own we should allow it
  if (action === 'keyup' && isModifier(character)) {
    modifiers = [character]
  }

  // loop through all callbacks for the key that was pressed
  // and see if any of them match
  for (j = 0; j < self.callbacks[character].length; ++j) {
    callback = self.callbacks[character][j]

    // if a sequence name is not specified, but this is a sequence at
    // the wrong level then move onto the next match
    if (!sequenceName && callback.seq && self.sequenceLevels[callback.seq] !== callback.level) {
      continue
    }

    // if the action we are looking for doesn't match the action we got
    // then we should keep going
    if (action !== callback.action) {
      continue
    }

    // if this is a keypress event and the meta key and control key
    // are not pressed that means that we need to only look at the
    // character, otherwise check the modifiers as well
    //
    // chrome will not fire a keypress if meta or control is down
    // safari will fire a keypress if meta or meta+shift is down
    // firefox will fire a keypress if meta or control is down
    modifiersMatch = require('./modifiersMatch')
    if ((action === 'keypress' && !e.metaKey && !e.ctrlKey) || modifiersMatch(modifiers, callback.modifiers)) {
      // when you bind a combination or sequence a second time it
      // should overwrite the first one.  if a sequenceName or
      // combination is specified in this call it does just that
      //
      // @todo make deleting its own method?
      var deleteCombo = !sequenceName && callback.combo === combination
      var deleteSequence = sequenceName && callback.seq === sequenceName && callback.level === level
      if (deleteCombo || deleteSequence) {
        self.callbacks[character].splice(j, 1)
      }

      matches.push(callback)
    }
  }

  return matches
}

},{"../../helpers/isModifier":"OoTu","./modifiersMatch":"DQ3S"}],"bTxj":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * resets all sequence counters except for the ones passed in
 *
 * @param {Object} doNotReset
 * @returns void
 */
module.exports = function (doNotReset) {
  var self = this

  doNotReset = doNotReset || {}

  var activeSequences = false
  var key

  for (key in self.sequenceLevels) {
    if (doNotReset[key]) {
      activeSequences = true
      continue
    }
    self.sequenceLevels[key] = 0
  }

  if (!activeSequences) {
    self.nextExpectedAction = false
  }
}

},{}],"kIwQ":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * prevents default for this event
 *
 * @param {Event} e
 * @returns void
 */
module.exports = function (e) {
  if (e.preventDefault) {
    e.preventDefault()
    return
  }

  e.returnValue = false
}

},{}],"37/0":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * stops propogation for this event
 *
 * @param {Event} e
 * @returns void
 */
module.exports = function (e) {
  if (e.stopPropagation) {
    e.stopPropagation()
    return
  }

  e.cancelBubble = true
}

},{}],"LKND":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * actually calls the callback function
 *
 * if your callback function returns false this will use the jquery
 * convention - prevent default and stop propogation on the event
 *
 * @param {Function} callback
 * @param {Event} e
 * @returns void
 */
module.exports = function (callback, e, combo, sequence) {
  var self = this
  var preventDefault
  var stopPropagation

  // if this event should not happen stop here
  if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
    return
  }

  if (callback(e, combo) === false) {
    preventDefault = require('../../helpers/preventDefault')
    preventDefault(e)
    stopPropagation = require('../../helpers/stopPropagation')
    stopPropagation(e)
  }
}

},{"../../helpers/preventDefault":"kIwQ","../../helpers/stopPropagation":"37/0"}],"bAm5":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

/**
 * binds a key sequence to an event
 *
 * @param {string} combo - combo specified in bind call
 * @param {Array} keys
 * @param {Function} callback
 * @param {string=} action
 * @returns void
 */
module.exports = function (combo, keys, callback, action) {
  var self = this

  // start off by adding a sequence level record for this combination
  // and setting the level to 0
  self.sequenceLevels[combo] = 0

  /**
   * callback to increase the sequence level for this sequence and reset
   * all other sequences that were active
   *
   * @param {string} nextAction
   * @returns {Function}
   */
  function increaseSequence (nextAction) {
    return function () {
      self.nextExpectedAction = nextAction
      ++self.sequenceLevels[combo]
      self.resetSequenceTimer()
    }
  }

  /**
   * wraps the specified callback inside of another function in order
   * to reset all sequence counters as soon as this sequence is done
   *
   * @param {Event} e
   * @returns void
   */
  function callbackAndReset (e) {
    var characterFromEvent
    self.fireCallback(callback, e, combo)

    // we should ignore the next key up if the action is key down
    // or keypress.  this is so if you finish a sequence and
    // release the key the final key will not trigger a keyup
    if (action !== 'keyup') {
      characterFromEvent = require('../../helpers/characterFromEvent')
      self.ignoreNextKeyup = characterFromEvent(e)
    }

    // weird race condition if a sequence ends with the key
    // another sequence begins with
    setTimeout(
      function () {
        self.resetSequences()
      },
      10
    )
  }

  // loop through keys one at a time and bind the appropriate callback
  // function.  for any key leading up to the final one it should
  // increase the sequence. after the final, it should reset all sequences
  //
  // if an action is specified in the original bind call then that will
  // be used throughout.  otherwise we will pass the action that the
  // next key in the sequence should match.  this allows a sequence
  // to mix and match keypress and keydown events depending on which
  // ones are better suited to the key provided
  for (var j = 0; j < keys.length; ++j) {
    var isFinal = j + 1 === keys.length
    var wrappedCallback = isFinal ? callbackAndReset : increaseSequence(action || self.getKeyInfo(keys[j + 1]).action)
    self.bindSingle(keys[j], wrappedCallback, action, combo, j)
  }
}

},{"../../helpers/characterFromEvent":"4org"}],"twk0":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'
/**
 * called to set a 1 second timeout on the specified sequence
 *
 * this is so after each key press in the sequence you have 1 second
 * to press the next key before you have to start over
 *
 * @returns void
 */
module.exports = function () {
  var self = this

  clearTimeout(self.resetTimer)
  self.resetTimer = setTimeout(
    function () {
      self.resetSequences()
    },
    1000
  )
}

},{}],"axIL":[function(require,module,exports) {
var off = require('./dom-event').off
module.exports = function () {
  var self = this
  var element = self.element

  off(element, 'keypress', self.eventHandler)
  off(element, 'keydown', self.eventHandler)
  off(element, 'keyup', self.eventHandler)
}

},{"./dom-event":"c0N/"}],"oMsy":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

module.exports = function () {
  var self = this

  self.instances.forEach(function (combokeys) {
    combokeys.reset()
  })
}

},{}],"t27O":[function(require,module,exports) {
/* eslint-env node, browser */
'use strict'

module.exports = function (element, options) {
  var self = this
  var Combokeys = self.constructor

  /**
   * an object of passed options
   *
   * @type { storeInstancesGlobally?: true }
   */

  self.options = Object.assign({ storeInstancesGlobally: true }, options || {})

  /**
   * a list of all the callbacks setup via Combokeys.bind()
   *
   * @type {Object}
   */
  self.callbacks = {}

  /**
   * direct map of string combinations to callbacks used for trigger()
   *
   * @type {Object}
   */
  self.directMap = {}

  /**
   * keeps track of what level each sequence is at since multiple
   * sequences can start out with the same sequence
   *
   * @type {Object}
   */
  self.sequenceLevels = {}

  /**
   * variable to store the setTimeout call
   *
   * @type {null|number}
   */
  self.resetTimer = null

  /**
   * temporary state where we will ignore the next keyup
   *
   * @type {boolean|string}
   */
  self.ignoreNextKeyup = false

  /**
   * temporary state where we will ignore the next keypress
   *
   * @type {boolean}
   */
  self.ignoreNextKeypress = false

  /**
   * are we currently inside of a sequence?
   * type of action ("keyup" or "keydown" or "keypress") or false
   *
   * @type {boolean|string}
   */
  self.nextExpectedAction = false

  self.element = element

  self.addEvents()

  if (self.options.storeInstancesGlobally) {
    Combokeys.instances.push(self)
  }

  return self
}

module.exports.prototype.bind = require('./prototype/bind')
module.exports.prototype.bindMultiple = require('./prototype/bindMultiple')
module.exports.prototype.unbind = require('./prototype/unbind')
module.exports.prototype.trigger = require('./prototype/trigger')
module.exports.prototype.reset = require('./prototype/reset.js')
module.exports.prototype.stopCallback = require('./prototype/stopCallback')
module.exports.prototype.handleKey = require('./prototype/handleKey')
module.exports.prototype.addEvents = require('./prototype/addEvents')
module.exports.prototype.bindSingle = require('./prototype/bindSingle')
module.exports.prototype.getKeyInfo = require('./prototype/getKeyInfo')
module.exports.prototype.pickBestAction = require('./prototype/pickBestAction')
module.exports.prototype.getReverseMap = require('./prototype/getReverseMap')
module.exports.prototype.getMatches = require('./prototype/getMatches')
module.exports.prototype.resetSequences = require('./prototype/resetSequences')
module.exports.prototype.fireCallback = require('./prototype/fireCallback')
module.exports.prototype.bindSequence = require('./prototype/bindSequence')
module.exports.prototype.resetSequenceTimer = require('./prototype/resetSequenceTimer')
module.exports.prototype.detach = require('./prototype/detach')

module.exports.instances = []
module.exports.reset = require('./reset')

/**
 * variable to store the flipped version of MAP from above
 * needed to check if we should use keypress or not when no action
 * is specified
 *
 * @type {Object|undefined}
 */
module.exports.REVERSE_MAP = null

},{"./prototype/bind":"amLf","./prototype/bindMultiple":"bCAK","./prototype/unbind":"vxXX","./prototype/trigger":"Kw0E","./prototype/reset.js":"tGU1","./prototype/stopCallback":"x1U3","./prototype/handleKey":"yzzG","./prototype/addEvents":"69o1","./prototype/bindSingle":"jpx2","./prototype/getKeyInfo":"saQR","./prototype/pickBestAction":"3mI9","./prototype/getReverseMap":"r0Si","./prototype/getMatches":"wGAJ","./prototype/resetSequences":"bTxj","./prototype/fireCallback":"LKND","./prototype/bindSequence":"bAm5","./prototype/resetSequenceTimer":"twk0","./prototype/detach":"axIL","./reset":"oMsy"}],"5nEh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _invariant = _interopRequireDefault(require("invariant"));

var _combokeys2 = _interopRequireDefault(require("combokeys"));

var _helpers = _interopRequireDefault(require("../helpers"));

var _ShortcutManager = require("../ShortcutManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Shortcuts(_props) {
  var domNodeRef = (0, _react.useRef)(null);
  var shortcuts = (0, _ShortcutManager.useShortcuts)(); // NOTE: combokeys must be instance per component

  var state = (0, _react.useRef)({});
  var propsRef = (0, _react.useRef)(_props);
  propsRef.current = _props;
  var getElementToBind = (0, _react.useCallback)(function () {
    var props = propsRef.current;
    var element = null;

    if (props.targetNodeSelector) {
      element = document.querySelector(props.targetNodeSelector);
      (0, _invariant.default)(element, "Node selector '".concat(props.targetNodeSelector, "'  was not found."));
    } else {
      element = domNodeRef.current;
    }

    return element;
  }, []);

  var decorateCombokeys = function decorateCombokeys() {
    var props = propsRef.current;
    var element = getElementToBind();
    var _combokeys = state.current._combokeys;
    var _lastEvent = state.current._lastEvent;

    var originalHandleKey = _combokeys.handleKey.bind(_combokeys); // NOTE: stopCallback is a method that is called to see
    // if the keyboard event should fire


    _combokeys.stopCallback = function (event, domElement) {
      var isInputLikeElement = domElement.tagName === 'INPUT' || domElement.tagName === 'SELECT' || domElement.tagName === 'TEXTAREA' || domElement.contentEditable && domElement.contentEditable === 'true';
      var isReturnString;

      if (event.key) {
        isReturnString = event.key.length === 1;
      } else {
        isReturnString = Boolean(_helpers.default.getCharacter(event));
      }

      if (isInputLikeElement && isReturnString && !props.alwaysFireHandler) {
        return true;
      }

      return false;
    };

    _combokeys.handleKey = function (character, modifiers, event, isGlobalHandler) {
      if (_lastEvent && event.timeStamp === _lastEvent.timeStamp && event.type === _lastEvent.type) {
        return;
      }

      state.current._lastEvent = event;
      var isolateOwner = false;

      if (props.isolate && !event.__isolateShortcuts) {
        event.__isolateShortcuts = true;
        isolateOwner = true;
      }

      if (!isGlobalHandler) {
        element.dispatchEvent(new CustomEvent('shortcuts:global', {
          detail: {
            character: character,
            modifiers: modifiers,
            event: event
          },
          bubbles: true,
          cancelable: true
        }));
      } // NOTE: works normally if it's not an isolated event


      if (!event.__isolateShortcuts) {
        if (props.preventDefault) {
          event.preventDefault();
        }

        if (props.stopPropagation && !isGlobalHandler) {
          event.stopPropagation();
        }

        originalHandleKey(character, modifiers, event);
        return;
      } // NOTE: global shortcuts should work even for an isolated event


      if (props.global || isolateOwner) {
        originalHandleKey(character, modifiers, event);
      }
    };
  };

  var _handleShortcuts = (0, _react.useCallback)(function (event, keyName) {
    var props = propsRef.current;

    if (!props.name) {
      return;
    }

    var shortcutName = shortcuts.findShortcutName(keyName, props.name);

    if (props.handler) {
      props.handler(shortcutName, event);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  var _customGlobalHandler = (0, _react.useCallback)(function (e) {
    var props = propsRef.current;
    var _a = e.detail,
        character = _a.character,
        modifiers = _a.modifiers,
        event = _a.event;
    var _combokeys = state.current._combokeys;
    var _domNode = domNodeRef.current;
    var targetNode = null;

    if (props.targetNodeSelector) {
      targetNode = document.querySelector(props.targetNodeSelector);
    }

    if (e.target !== _domNode && e.target !== targetNode) {
      _combokeys.handleKey(character, modifiers, event, true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  var _bindShortcuts = (0, _react.useCallback)(function (shortcutsArr) {
    var props = propsRef.current;
    var element = getElementToBind();
    element.setAttribute('tabindex', props.tabIndex);
    state.current._combokeys = new _combokeys2.default(element, {
      storeInstancesGlobally: false
    });
    decorateCombokeys();

    state.current._combokeys.bind(shortcutsArr, _handleShortcuts, props.eventType);

    if (props.global) {
      element.addEventListener('shortcuts:global', _customGlobalHandler);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  var _unbindShortcuts = (0, _react.useCallback)(function () {
    var _combokeys = state.current._combokeys;

    if (_combokeys) {
      _combokeys.detach();

      _combokeys.reset();
    }
  }, []);

  var _onUpdate = (0, _react.useCallback)(function () {
    var props = propsRef.current;
    var shortcutsArr = props.name && shortcuts.getShortcuts(props.name);

    _unbindShortcuts();

    _bindShortcuts(shortcutsArr || []); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  (0, _react.useEffect)(function () {
    var props = propsRef.current;

    _onUpdate();

    if (props.name) {
      shortcuts.addUpdateListener(_onUpdate);
    }

    return function () {
      _unbindShortcuts();

      if (props.name) {
        shortcuts.removeUpdateListener(_onUpdate);
      }

      if (props.global) {
        var element = getElementToBind();
        element.removeEventListener('shortcuts:global', _customGlobalHandler);
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var props = propsRef.current;
  return _react.default.createElement("div", {
    ref: domNodeRef,
    tabIndex: props.tabIndex,
    className: props.className
  }, props.children);
}

Shortcuts.defaultProps = {
  tabIndex: -1,
  className: null,
  eventType: null,
  stopPropagation: true,
  preventDefault: false,
  targetNodeSelector: null,
  global: false,
  isolate: false,
  alwaysFireHandler: false
};
var _default = Shortcuts;
exports.default = _default;
},{"react":"1n8/","invariant":"2gTp","combokeys":"t27O","../helpers":"WrHh","../ShortcutManager":"Edm1"}],"+fUd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ShortcutContext", {
  enumerable: true,
  get: function () {
    return _ShortcutManager.ShortcutContext;
  }
});
Object.defineProperty(exports, "ShortcutManager", {
  enumerable: true,
  get: function () {
    return _ShortcutManager.default;
  }
});
Object.defineProperty(exports, "ShortcutProvider", {
  enumerable: true,
  get: function () {
    return _ShortcutManager.ShortcutProvider;
  }
});
Object.defineProperty(exports, "Shortcuts", {
  enumerable: true,
  get: function () {
    return _Shortcuts.default;
  }
});
Object.defineProperty(exports, "useShortcuts", {
  enumerable: true,
  get: function () {
    return _ShortcutManager.useShortcuts;
  }
});

var _ShortcutManager = _interopRequireWildcard(require("./ShortcutManager"));

var _Shortcuts = _interopRequireDefault(require("./components/Shortcuts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./ShortcutManager":"Edm1","./components/Shortcuts":"5nEh"}],"zo2T":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(require("react"));

var react_dom_1 = require("react-dom");

var src_1 = require("../src");

var keymap = {
  BOX: {
    MOVE_LEFT: ['left', 'a'],
    MOVE_RIGHT: ['right', 'd'],
    MOVE_UP: ['up', 'w'],
    MOVE_DOWN: ['down', 's']
  }
};

var Box = function Box(_a) {
  var x = _a.x,
      y = _a.y,
      color = _a.color,
      index = _a.index,
      onMoveRequest = _a.onMoveRequest;
  var style = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    textAlign: 'center',
    lineHeight: '100px',
    position: 'absolute',
    top: "".concat(y + index * 120, "px"),
    left: "".concat(x + index * 120, "px")
  };
  var SHIFT = 10;

  var handleMove = function handleMove(action) {
    switch (action) {
      case 'MOVE_LEFT':
        onMoveRequest({
          x: x - SHIFT
        }, index);
        break;

      case 'MOVE_RIGHT':
        onMoveRequest({
          x: x + SHIFT
        }, index);
        break;

      case 'MOVE_UP':
        onMoveRequest({
          y: y - SHIFT
        }, index);
        break;

      case 'MOVE_DOWN':
        onMoveRequest({
          y: y + SHIFT
        }, index);
        break;
    }
  };

  return React.createElement(src_1.Shortcuts, {
    name: "BOX",
    handler: handleMove
  }, React.createElement("div", {
    style: style
  }, index + 1));
};

var App = function (_super) {
  __extends(App, _super);

  function App() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      boxes: _this.getBoxes()
    };

    _this.handleMove = function (newPosition, index) {
      var boxes = _this.state.boxes.slice();

      boxes[index] = Object.assign(boxes[index], newPosition);

      _this.setState({
        boxes: boxes
      });
    };

    return _this;
  }

  App.prototype.getBoxes = function () {
    var boxes = [{
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }];
    return boxes.map(function (box) {
      box.color = "hsl(".concat(Math.random() * 360, ", 100%, 50%)");
      return box;
    });
  };

  App.prototype.render = function () {
    var _this = this;

    var style = {
      textAlign: 'center',
      fontFamily: 'sans-serif'
    };
    return React.createElement(src_1.ShortcutProvider, {
      keymap: keymap
    }, React.createElement("div", null, React.createElement("h1", {
      style: style
    }, "Click on any box and use arrow keys or WSAD"), this.state.boxes.map(function (_a, index) {
      var x = _a.x,
          y = _a.y,
          color = _a.color;
      return React.createElement(Box, {
        key: index,
        color: color,
        index: index,
        x: x,
        y: y,
        onMoveRequest: _this.handleMove
      });
    })));
  };

  return App;
}(React.Component);

(0, react_dom_1.render)(React.createElement(App, null), document.getElementById('root'));
},{"react":"1n8/","react-dom":"wLSN","../src":"+fUd"}]},{},["zo2T"], null)
//# sourceMappingURL=/example.21bf1b01.js.map