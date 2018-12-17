// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"src/mcdonalds/mcdonalds.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/mcdonalds/clock.svg":[function(require,module,exports) {
module.exports = "/clock.5626f392.svg";
},{}],"src/mcdonalds/clock-b.svg":[function(require,module,exports) {
module.exports = "/clock-b.d64f8aed.svg";
},{}],"src/mcdonalds/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var _mcdonalds = _interopRequireDefault(require("./mcdonalds.pug"));

require("./mcdonalds.scss");

var _clock = _interopRequireDefault(require("./clock.svg"));

var _clockB = _interopRequireDefault(require("./clock-b.svg"));

var _CountDowner = _interopRequireDefault(require("../assets/CountDowner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render() {
  setTimeout(start);
  return _mcdonalds.default;
};

exports.render = render;

function start() {
  var wrapper = document.querySelector('.mcdonalds-wrapper');
  var couponPage = wrapper.querySelector('.coupon-page');
  var coupons = wrapper.querySelector('.coupons');
  var header = wrapper.querySelector('header');
  var hamburgerIcon = header.querySelector('.hamburger img');
  var nextHamburgerIcon = header.querySelector('.next-hamburger');
  var title = header.querySelector('.title-text');
  var nextTitle = header.querySelector('.next-title-text');
  var how = header.querySelector('.how-text');
  var nextHow = header.querySelector('.next-how-text');
  var hamburger = header.querySelector('.hamburger');
  var status = coupons.querySelector('.status');
  var exp = coupons.querySelector('.exp');
  var couponFooter = couponPage.querySelector('footer');
  var couponFooterText = couponFooter.querySelector('.exchange');
  status.onclick = handleExchange;

  function handleExchange(e) {
    e.preventDefault();
    openCouponPage();
  }

  exp.textContent = setExp();

  couponFooter.onclick = function () {
    onExchange();
  };

  function setExp() {
    var date = new Date();
    return "\u671F\u9650\uFF1A".concat(date.getFullYear(), " \u5E74 ").concat(date.getMonth() + 1, " \u6708 ").concat(date.getDate() + 3, " \u65E5");
  }

  function onExchange() {
    couponFooter.style.height = '90px';
    couponFooterText.innerHTML = "<img class=\"clock\" src=".concat(_clock.default, " alt=\"clock\"/>\u512A\u60E0\u5012\u6578<span class=\"exchanged-exp\">2:00</span>");
    status.className = 'status exchange no-letter-spacing';
    status.innerHTML = "<img class=\"clock\" src=".concat(_clockB.default, " alt=\"clock\"/>\u512A\u60E0\u5012\u6578<span class=\"exchanged-exp\">2:00</span>");
    var expTime = new Date();
    expTime.setMinutes(expTime.getMinutes() + 2);
    var countDowner = new _CountDowner.default(expTime);
    var getLast = countDowner.formatFromCB(function (timeArray) {
      return " ".concat(timeArray[2], ":").concat(countDowner.toFixStr(timeArray[3]));
    });
    countDowner.on('second', function setExpLast() {
      try {
        var exchangedExps = wrapper.querySelectorAll('.exchanged-exp');
        Array.from(exchangedExps).forEach(function (exchangeExp) {
          return exchangeExp.textContent = getLast();
        });
      } catch (e) {
        countDowner.stop();
      }
    });
    countDowner.on('stop', function onExpired() {
      closeCouponPage();

      status.onclick = function () {};

      status.className = 'status';
      status.textContent = '已兌換';
    });
  }

  function openCouponPage() {
    hamburgerIcon.style.opacity = '0';
    nextHamburgerIcon.style.opacity = '100';
    title.style.transform = "translateX(-200%)";
    title.style.opacity = '0';
    nextTitle.style.transform = "translateX(0%)";
    nextTitle.style.opacity = '100';
    how.style.opacity = '0';
    nextHow.style.opacity = '100';
    couponPage.style.transform = 'translateX(0%)';
    hamburger.onclick = closeCouponPage;
  }

  function closeCouponPage() {
    couponPage.style.transform = 'translateX(100%)';
    hamburgerIcon.style.opacity = '100';
    nextHamburgerIcon.style.opacity = '0';
    title.style.transform = "translateX(0%)";
    title.style.opacity = '100';
    nextTitle.style.transform = "translateX(200%)";
    nextTitle.style.opacity = '0';
    how.style.opacity = '100';
    nextHow.style.opacity = '0';

    hamburger.onclick = function () {};
  }
}
},{"./mcdonalds.pug":"src/mcdonalds/mcdonalds.pug","./mcdonalds.scss":"src/mcdonalds/mcdonalds.scss","./clock.svg":"src/mcdonalds/clock.svg","./clock-b.svg":"src/mcdonalds/clock-b.svg","../assets/CountDowner.js":"src/assets/CountDowner.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55960" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/mcdonalds.53ad66b9.map