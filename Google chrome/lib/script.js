(function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) r.d(n, o, function (t) {
        return e[t]
      }.bind(null, o));
    return n
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "/", r(r.s = 1)
})({
  1: function (e, t, r) {
    e.exports = r("8104")
  },
  8104: function (e, t) {
    function r(e) {
      console.log(e);
      var t = document.querySelector(".ytp-subtitles-button");
      "true" == t.getAttribute("aria-pressed") && t.click(), t.click()
    }
    chrome.storage.onChanged.addListener((async function () {
      let [e] = await chrome.tabs.query({
        active: !0,
        currentWindow: !0
      });
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1]
      }), chrome.storage.sync.get(["activeTurn", "checklanguage"], (async function (t) {
        t.activeTurn && chrome.declarativeNetRequest.updateDynamicRules({
          addRules: [{
            id: 1,
            priority: 1,
            action: {
              type: "redirect",
              redirect: {
                transform: {
                  queryTransform: {
                    addOrReplaceParams: [{
                      key: "tlang",
                      value: t.checklanguage
                    }]
                  }
                }
              }
            },
            condition: {
              urlFilter: "api/timedtext",
              domains: ["youtube.com"],
              resourceTypes: ["xmlhttprequest"]
            }
          }]
        }, () => {
          chrome.scripting.executeScript({
            target: {
              tabId: e.id
            },
            function: r,
            args: ["check languages success!"]
          })
        })
      }))
    })), chrome.runtime.onInstalled.addListener(e => {
      chrome.alarms.create("settings", {
        periodInMinutes: 9999
      })
    }), chrome.alarms.onAlarm.addListener(e => {
      "settings" === e.name && (console.log(999), chrome.alarms.clear("settings"))
    })
  }
});