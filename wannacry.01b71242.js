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
})({"src/wannacry/CountDowner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CountDowner =
/*#__PURE__*/
function () {
  function CountDowner(till) {
    _classCallCheck(this, CountDowner);

    till.setSeconds(till.getSeconds() + 1);
    this.till = till;
    this.callbacks = {
      stop: [],
      second: []
    };
    this.toFixStr = this.toFixStr.bind(this);
    this.interval = null;
    this.origin = new Date();
    this.start();
  }

  _createClass(CountDowner, [{
    key: "formatTill",
    value: function formatTill() {
      var _this = this;

      var year = this.till.getFullYear();
      var month = this.till.getMonth() + 1;
      var date = this.till.getDate();
      var hour = this.till.getHours();
      var minute = this.till.getMinutes();
      var second = this.till.getSeconds();
      return [month, date, year].map(function (s) {
        return _this.toFixStr(s);
      }).join('/') + ' ' + [hour, minute, second].map(function (s) {
        return _this.toFixStr(s);
      }).join(':');
    }
  }, {
    key: "toFixStr",
    value: function toFixStr(s) {
      return (s < 10 ? '0' : '') + s;
    }
  }, {
    key: "progress",
    value: function progress() {
      var percentage = this.timeDiff / (this.till.getTime() - this.origin);
      return percentage < 0 ? 0 : percentage;
    }
  }, {
    key: "formatLast",
    value: function formatLast() {
      var _this2 = this;

      var diffDays = Math.floor(this.timeDiff / (1000 * 3600 * 24));
      var diffHours = Math.floor(this.timeDiff / (1000 * 3600));
      var diffMinutes = Math.floor(this.timeDiff / (1000 * 60));
      var diffSeconds = Math.floor(this.timeDiff / 1000);
      return [diffDays, diffHours - diffDays * 24, diffMinutes - diffHours * 60, diffSeconds - diffMinutes * 60].map(function (e) {
        return _this2.toFixStr(e);
      }).join(':');
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      this.timeDiff = this.till.getTime() - new Date().getTime();
      this.interval = setInterval(function () {
        _this3.timeDiff = _this3.till.getTime() - new Date().getTime();

        if (_this3.timeDiff < 0) {
          _this3.stop();
        } else {
          _this3.callbacks.second.forEach(function (cb) {
            return cb();
          });
        }
      }, 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
      this.callbacks.stop.forEach(function (cb) {
        return cb();
      });
    }
  }, {
    key: "on",
    value: function on(str, cb) {
      if (str in this.callbacks) {
        this.callbacks[str].push(cb);
      } else {
        throw Error("no ".concat(str, " type callback"));
      }
    }
  }]);

  return CountDowner;
}();

var _default = CountDowner;
exports.default = _default;
},{}],"src/wannacry/wannacry.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/wannacry/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

require("babel-polyfill");

var _CountDowner = _interopRequireDefault(require("./CountDowner.js"));

require("./wannacry.scss");

var _wannacry2 = _interopRequireDefault(require("./wannacry.pug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render() {
  setTimeout(start);
  return _wannacry2.default;
};

exports.render = render;

function start() {
  var pay = document.querySelector('#pay');
  var payOn = document.querySelector('#pay-on');
  var payProgress = document.querySelector('#pay-progress');
  var payment = document.querySelector('#payment');
  var lost = document.querySelector('#lost');
  var lostOn = document.querySelector('#lost-on');
  var lostProgress = document.querySelector('#lost-progress');
  var check = document.querySelector('#check');
  var decrypt = document.querySelector('#decrypt');
  var copy = document.querySelector('#copy');
  var now = new Date();
  var payDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 10, now.getSeconds());
  var lostDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, now.getMinutes(), now.getSeconds());
  var payCountDowner = new _CountDowner.default(payDate);
  pay.innerHTML = payCountDowner.formatLast();
  payOn.innerHTML = payCountDowner.formatTill();
  payCountDowner.on('second', function () {
    payProgress.style.height = "".concat((1 - payCountDowner.progress()) * 100, "%");
    pay.innerHTML = payCountDowner.formatLast();
  });
  payCountDowner.on('stop', function () {
    payProgress.style.height = "".concat((1 - payCountDowner.progress()) * 100, "%");
    payment.innerHTML = '$600';
  });
  var lostCountDowner = new _CountDowner.default(lostDate);
  lost.innerHTML = lostCountDowner.formatLast();
  lostOn.innerHTML = lostCountDowner.formatTill();
  lostCountDowner.on('second', function () {
    lostProgress.style.height = "".concat((1 - lostCountDowner.progress()) * 100, "%");
    lost.innerHTML = lostCountDowner.formatLast();
  });
  lostCountDowner.on('stop', function () {
    lostProgress.style.height = "".concat((1 - lostCountDowner.progress()) * 100, "%");
  });

  check.onclick = function () {
    alert("You didn't pay!\nYour files will be lost on ".concat(lostCountDowner.formatTill(), "!"));
  };

  decrypt.onclick = function () {
    alert("Decrypt failed!\nPlease click <Contact Us>!");
  };

  copy.onclick = function (e) {
    document.addEventListener('copy', setClipboardData);
    document.execCommand('copy');
    alert('Content copied Successfully!');
  };
}

function setClipboardData(event) {
  event.preventDefault();

  if (event.clipboardData) {
    event.clipboardData.setData('text/plain', 'Money! Give me Money! ლ(́◉◞౪◟◉‵ლ)');
  }

  document.removeEventListener('copy', setClipboardData);
}
},{"babel-polyfill":"node_modules/babel-polyfill/lib/index.js","./CountDowner.js":"src/wannacry/CountDowner.js","./wannacry.scss":"src/wannacry/wannacry.scss","./wannacry.pug":"src/wannacry/wannacry.pug"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46389" + '/');

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
//# sourceMappingURL=/wannacry.01b71242.map