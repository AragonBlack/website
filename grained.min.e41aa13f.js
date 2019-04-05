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
})({"/ZVX":[function(require,module,exports) {
/*! Grained.js
 * Author : Sarath Saleem  - https://github.com/sarathsaleem
 * MIT license: http://opensource.org/licenses/MIT
 * GitHub : https://github.com/sarathsaleem/grained
 * v0.0.1
 */
!function (a, b) {
  "use strict";

  function c(a, c) {
    function d(a, b, c, d) {
      var e = "";
      e = b.length ? b + "{" + c + "}" : c, "insertRule" in a ? a.insertRule(e, d) : "addRule" in a && a.addRule(b, c, d);
    }

    var e = null,
        f = null,
        g = null;
    if ("string" == typeof a && (e = b.getElementById(a.split("#")[1])), !e) return void console.error("Grained: cannot find the element with id " + a);
    f = e.id, "absolute" !== e.style.position && (e.style.position = "relative"), e.style.overflow = "hidden";
    var h = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"],
        i = {
      animate: !0,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
      grainChaos: 0.5,
      grainSpeed: 20
    };
    Object.keys(c).forEach(function (a) {
      i[a] = c[a];
    });

    for (var j = function j() {
      var a = b.createElement("canvas"),
          c = a.getContext("2d");
      a.width = i.patternWidth, a.height = i.patternHeight;

      for (var d = 0; d < i.patternWidth; d += i.grainDensity) {
        for (var e = 0; e < i.patternHeight; e += i.grainDensity) {
          var f = 256 * Math.random() | 0;
          c.fillStyle = "rgba(" + [f, f, f, i.grainOpacity].join() + ")", c.fillRect(d, e, i.grainWidth, i.grainHeight);
        }
      }

      return a.toDataURL("image/png");
    }, k = j(), l = "", m = ["0%:-10%,10%", "10%:-25%,0%", "20%:-30%,10%", "30%:-30%,30%", "40%::-20%,20%", "50%:-15%,10%", "60%:-20%,20%", "70%:-5%,20%", "80%:-25%,5%", "90%:-30%,25%", "100%:-10%,10%"], n = h.length; n--;) {
      l += "@" + h[n] + "keyframes grained{";

      for (var o = 0; o < m.length; o++) {
        var p = m[o].split(":");
        l += p[0] + "{", l += h[n] + "transform:translate(" + p[1] + ");", l += "}";
      }

      l += "}";
    }

    var q = b.getElementById("grained-animation");
    q && q.parentElement.removeChild(q);
    var r = b.createElement("style");
    r.type = "text/css", r.id = "grained-animation", r.innerHTML = l, b.body.appendChild(r);
    var s = b.getElementById("grained-animation-" + f);
    s && s.parentElement.removeChild(s), r = b.createElement("style"), r.type = "text/css", r.id = "grained-animation-" + f, b.body.appendChild(r);
    var t = "background-image: url(" + k + ");";
    if (t += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;', n = h.length, i.animate) for (; n--;) {
      t += h[n] + "animation-name:grained;", t += h[n] + "animation-iteration-count: infinite;", t += h[n] + "animation-duration: " + i.grainChaos + "s;", t += h[n] + "animation-timing-function: steps(" + i.grainSpeed + ", end);";
    }
    g = "#" + f + "::before", d(r.sheet, g, t);
  }

  a.grained = c;
}(window, document);
},{}]},{},["/ZVX"], null)
//# sourceMappingURL=/grained.min.e41aa13f.map