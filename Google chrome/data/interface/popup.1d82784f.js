(function (e) {
  function t(t) {
    for (var r, u, a = t[0], i = t[1], l = t[2], s = 0, d = []; s < a.length; s++) u = a[s], Object.prototype.hasOwnProperty.call(o, u) && o[u] && d.push(o[u][0]), o[u] = 0;
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    f && f(t);
    while (d.length) d.shift()();
    return c.push.apply(c, l || []), n()
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
        var i = n[a];
        0 !== o[i] && (r = !1)
      }
      r && (c.splice(t--, 1), e = u(u.s = n[0]))
    }
    return e
  }
  var r = {},
    o = {
      popup: 0
    },
    c = [];

  function u(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports
  }
  u.m = e, u.c = r, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) u.d(n, r, function (t) {
        return e[t]
      }.bind(null, r));
    return n
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return u.d(t, "a", t), t
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, u.p = "/";
  var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
    i = a.push.bind(a);
  a.push = t, a = a.slice();
  for (var l = 0; l < a.length; l++) t(a[l]);
  var f = i;
  c.push([0, "chunk-vendors"]), n()
})({
  0: function (e, t, n) {
    e.exports = n("dffe")
  },
  dffe: function (e, t, n) {
    function r() {
      chrome.storage.sync.get(["activeTurn", "checklanguage"], (function (e) {
        document.getElementById("changeLanguage").value = e.checklanguage, document.getElementById("activeSwitch").checked = e.activeTurn
      }))
    }
    n("5b81"), r(), document.getElementById("activeSwitch").addEventListener("change", e => {
      chrome.storage.sync.set({
        activeTurn: e.target.checked
      }, (function () {}))
    }), document.getElementById("changeLanguage").onchange = function () {
      console.log(this);
      var e = this.selectedIndex ? this.options[this.selectedIndex].value : "en";
      chrome.storage.sync.set({
        checklanguage: e
      }, (function () {}))
    }, [...document.querySelectorAll("[i18n-w]")].forEach(e => {
      e.innerText = chrome.i18n.getMessage(e.getAttribute("i18n-w")) || e.innerText
    }), document.querySelectorAll(".share a").forEach(e => {
      e.addEventListener("click", (function () {
        window.open(this.getAttribute("url").replaceAll("{$homepage_url}", chrome.runtime.getManifest().homepage_url))
      }))
    })
  }
});