(function () {
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var l =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof n && n,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var p = ba(this);
  function r(a, b) {
    if (b)
      a: {
        var c = p;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          l(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  r("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, h) {
      this.g = f;
      l(this, "description", { configurable: !0, writable: !0, value: h });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  r("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = p[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        l(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ca(aa(this));
          },
        });
    }
    return a;
  });
  function ca(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function da(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }
  r("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return da(this, function (b) {
            return b;
          });
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var u = this || self; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var v = {};
  function w(a) {
    if (v !== v) throw Error("Bad secret");
    this.g = a;
  }
  w.prototype.toString = function () {
    return this.g;
  };
  new w("about:blank");
  new w("about:invalid#zClosurez");
  var x = [];
  function y(a) {
    console.warn("A URL with content '" + a + "' was sanitized away.");
  }
  -1 === x.indexOf(y) && x.push(y);
  var z = {};
  function A() {
    if (z !== z) throw Error("SafeStyle is not meant to be built directly");
  }
  A.prototype.toString = function () {
    return "".toString();
  };
  new A();
  var C = {};
  function D() {
    if (C !== C)
      throw Error("SafeStyleSheet is not meant to be built directly");
  }
  D.prototype.toString = function () {
    return "".toString();
  };
  new D();
  var E = {};
  function F() {
    var a = (u.trustedTypes && u.trustedTypes.emptyHTML) || "";
    if (E !== E) throw Error("SafeHtml is not meant to be built directly");
    this.g = a;
  }
  F.prototype.toString = function () {
    return this.g.toString();
  };
  new F();
  function G(a, b, c) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = d.slice();
      e.push.apply(e, arguments);
      return a.apply(b, e);
    };
  }
  function ea(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments, 1);
      try {
        return a.apply(null, c);
      } catch (d) {
        return d;
      }
    }
  }
  var H =
    window.performance && window.performance.timing && window.performance.now
      ? function () {
          return (
            window.performance.timing.navigationStart + window.performance.now()
          );
        }
      : function () {
          return new Date().getTime();
        };
  function I(a, b) {
    if (a.forEach) a.forEach(b, void 0);
    else
      for (var c = 0, d = a.length; c < d; c++)
        c in a && b.call(void 0, a[c], c, a);
  }
  function J(a, b) {
    if (a.some) return a.some(b, void 0);
    for (var c = 0, d = a.length; c < d; c++)
      if (c in a && b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function K(a) {
    return "[object Array]" == Object.prototype.toString.call(a) ? a : [a];
  }
  function L(a, b) {
    return (M[a] = b);
  }
  var M = window._spf_state || {};
  window._spf_state = M;
  var N = {};
  "config" in M || L("config", N);
  N = M.config;
  function O(a) {
    var b = P();
    a in b && delete b[a];
  }
  function fa() {
    var a = P();
    for (b in a) ha(a[b]) || delete a[b];
    a = P();
    var b = parseInt(N["cache-max"], 10);
    b = isNaN(b) ? Infinity : b;
    b = Object.keys(a).length - b;
    if (!(0 >= b))
      for (var c = 0; c < b; c++) {
        var d = Infinity,
          e;
        for (e in a)
          if (a[e].count < d) {
            var f = e;
            d = a[e].count;
          }
        delete a[f];
      }
  }
  function ha(a) {
    if (!(a && "data" in a)) return !1;
    var b = a.life;
    b = isNaN(b) ? Infinity : b;
    a = a.time;
    return H() - a < b;
  }
  function ia(a) {
    var b = parseInt(M["cache-counter"], 10) || 0;
    b++;
    L("cache-counter", b);
    a.count = b;
  }
  function P() {
    return "cache-storage" in M ? M["cache-storage"] : L("cache-storage", {});
  }
  function Q(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var R = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return a.replace(/^\s+|\s+$/g, "");
      };
  function S(a, b) {
    a = a.split(b);
    var c = 1 == a.length;
    return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)];
  }
  function ja(a) {
    a.data &&
      "[object String]" == Object.prototype.toString.call(a.data) &&
      0 == a.data.lastIndexOf("spf:", 0) &&
      ka(a.data.substring(4));
  }
  function ka(a) {
    var b = T[a];
    b && (delete T[a], b());
  }
  function la(a) {
    window.addEventListener
      ? window.addEventListener("message", a, !1)
      : window.attachEvent && window.attachEvent("onmessage", a);
  }
  function ma(a) {
    window.removeEventListener
      ? window.removeEventListener("message", a, !1)
      : window.detachEvent && window.detachEvent("onmessage", a);
  }
  var na = (function () {
      function a() {
        b = !1;
      }
      if (!window.postMessage) return !1;
      var b = !0;
      la(a);
      window.postMessage("", "*");
      ma(a);
      return b;
    })(),
    T = {};
  "async-defers" in M || L("async-defers", T);
  T = M["async-defers"];
  na &&
    ("async-listener" in M && ma(M["async-listener"]),
    la(ja),
    L("async-listener", ja));
  var oa = {};
  "ps-s" in M || L("ps-s", oa);
  oa = M["ps-s"];
  function U(a) {
    var b = document.createElement("a");
    b.href = a;
    b.href = b.href;
    a = {
      href: b.href,
      protocol: b.protocol,
      host: b.host,
      hostname: b.hostname,
      port: b.port,
      pathname: b.pathname,
      search: b.search,
      hash: b.hash,
      username: b.username,
      password: b.password,
    };
    a.origin = a.protocol + "//" + a.host;
    (a.pathname && "/" == a.pathname[0]) || (a.pathname = "/" + a.pathname);
    return a;
  }
  function pa(a) {
    a = U(a);
    return S(a.href, "#")[0];
  } /*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
  var qa = {},
    ra = {},
    sa = {};
  "rsrc-s" in M || L("rsrc-s", qa);
  qa = M["rsrc-s"];
  "rsrc-n" in M || L("rsrc-n", ra);
  ra = M["rsrc-n"];
  "rsrc-u" in M || L("rsrc-u", sa);
  sa = M["rsrc-u"];
  var ta = {};
  "js-d" in M || L("js-d", ta);
  ta = M["js-d"];
  var ua = {};
  "js-u" in M || L("js-u", ua);
  ua = M["js-u"]; /*

 Copyright 2012-2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by The MIT License.
 SPDX-License-Identifier: MIT
*/
  function va(a, b, c) {
    if (b) {
      b = [];
      var d = 0;
      c && (a += "\r\n");
      var e = a.indexOf("[\r\n", d);
      for (-1 < e && (d = e + 3); -1 < (e = a.indexOf(",\r\n", d)); ) {
        var f = R(a.substring(d, e));
        d = e + 3;
        f && b.push(JSON.parse(f));
      }
      e = a.indexOf("]\r\n", d);
      -1 < e &&
        ((f = R(a.substring(d, e))), (d = e + 3), f && b.push(JSON.parse(f)));
      f = "";
      a.length > d &&
        ((f = a.substring(d)),
        c && Q(f, "\r\n") && (f = f.substring(0, f.length - 2)));
      b = V(b);
      return { m: b, h: f };
    }
    a = JSON.parse(a);
    b = V(K(a));
    return { m: b, h: "" };
  }
  function V(a) {
    var b = K(a);
    I(b, function (c) {
      if (c) {
        c.head && (c.head = W(c.head));
        if (c.body) for (var d in c.body) c.body[d] = W(c.body[d]);
        c.foot && (c.foot = W(c.foot));
      }
    });
    return a;
  }
  function W(a) {
    var b = new wa();
    if (!a) return b;
    if ("[object String]" != Object.prototype.toString.call(a))
      return (
        a.scripts &&
          I(a.scripts, function (c) {
            b.scripts.push({
              url: c.url || "",
              text: c.text || "",
              name: c.name || "",
              async: c.async || !1,
            });
          }),
        a.styles &&
          I(a.styles, function (c) {
            b.styles.push({
              url: c.url || "",
              text: c.text || "",
              name: c.name || "",
            });
          }),
        a.links &&
          I(a.links, function (c) {
            "spf-preconnect" == c.rel &&
              b.links.push({ url: c.url || "", rel: c.rel || "" });
          }),
        (b.html = a.html || ""),
        b
      );
    a = a.replace(xa, function (c, d, e, f) {
      if ("script" == d) {
        d = (d = e.match(X)) ? d[1] : "";
        var h = e.match(ya);
        h = h ? h[1] : "";
        var k = za.test(e);
        e = Aa.exec(e);
        return (e =
          !e ||
          -1 != e[1].indexOf("/javascript") ||
          -1 != e[1].indexOf("/x-javascript") ||
          -1 != e[1].indexOf("/ecmascript"))
          ? (b.scripts.push({ url: h, text: f, name: d, async: k }), "")
          : c;
      }
      return "style" == d &&
        ((d = (d = e.match(X)) ? d[1] : ""),
        (e = Aa.exec(e)),
        (e = !e || -1 != e[1].indexOf("text/css")))
        ? (b.styles.push({ url: "", text: f, name: d }), "")
        : c;
    });
    a = a.replace(Ba, function (c, d) {
      var e = d.match(Ca);
      e = e ? e[1] : "";
      return "stylesheet" == e
        ? ((e = (e = d.match(X)) ? e[1] : ""),
          (d = (d = d.match(Da)) ? d[1] : ""),
          b.styles.push({ url: d, text: "", name: e }),
          "")
        : "spf-preconnect" == e
        ? ((d = (d = d.match(Da)) ? d[1] : ""),
          b.links.push({ url: d, rel: e }),
          "")
        : c;
    });
    b.html = a;
    return b;
  }
  function wa() {
    this.html = "";
    this.scripts = [];
    this.styles = [];
    this.links = [];
  }
  (function () {
    var a = document.createElement("div");
    return "transition" in a.style
      ? !0
      : J(["webkit", "Moz", "Ms", "O", "Khtml"], function (b) {
          return b + "Transition" in a.style;
        });
  })();
  var Ba = /\x3clink([\s\S]*?)\x3e/gi,
    xa = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/gi,
    za = /(?:\s|^)async(?:\s|=|$)/i,
    Da = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,
    X = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,
    Ca = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,
    ya = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,
    Aa = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
  function Ea(a, b, c, d) {
    var e = d || {},
      f = !1,
      h = 0,
      k,
      g = new XMLHttpRequest();
    g.open(a, b, !0);
    g.timing = {};
    var m = g.abort;
    g.abort = function () {
      clearTimeout(k);
      g.onreadystatechange = null;
      m.call(g);
    };
    g.onreadystatechange = function () {
      var q = g.timing;
      if (2 == g.readyState) {
        q.responseStart = q.responseStart || H();
        if ("json" == g.responseType) f = !1;
        else if (
          N["assume-all-json-requests-chunked"] ||
          -1 <
            (g.getResponseHeader("Transfer-Encoding") || "")
              .toLowerCase()
              .indexOf("chunked")
        )
          f = !0;
        else {
          q = g.getResponseHeader("X-Firefox-Spdy");
          var B = window.chrome && chrome.loadTimes && chrome.loadTimes();
          B = B && B.wasFetchedViaSpdy;
          f = !(!q && !B);
        }
        e.u && e.u(g);
      } else
        3 == g.readyState
          ? f &&
            e.l &&
            ((q = g.responseText.substring(h)),
            (h = g.responseText.length),
            e.l(g, q))
          : 4 == g.readyState &&
            ((q.responseEnd = q.responseEnd || H()),
            window.performance &&
              window.performance.getEntriesByName &&
              (g.resourceTiming = window.performance.getEntriesByName(b).pop()),
            f &&
              e.l &&
              g.responseText.length > h &&
              ((q = g.responseText.substring(h)),
              (h = g.responseText.length),
              e.l(g, q)),
            clearTimeout(k),
            e.s && e.s(g));
    };
    "responseType" in g &&
      "json" == e.responseType &&
      (g.responseType = "json");
    e.withCredentials && (g.withCredentials = e.withCredentials);
    d = "FormData" in window && c instanceof FormData;
    a = "POST" == a && !d;
    if (e.headers)
      for (var t in e.headers)
        g.setRequestHeader(t, e.headers[t]),
          "content-type" == t.toLowerCase() && (a = !1);
    a &&
      g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    0 < e.C &&
      (k = setTimeout(function () {
        g.abort();
        e.A && e.A(g);
      }, e.C));
    g.timing.fetchStart = H();
    g.send(c);
    return g;
  }
  function Fa(a, b, c, d, e) {
    var f = !1;
    c.responseStart = c.responseEnd = H();
    b.type &&
      0 == b.type.lastIndexOf("navigate", 0) &&
      ((c.navigationStart = c.startTime),
      N["cache-unified"] || (O(d), (f = !0)));
    b.j &&
      "multipart" == e.type &&
      I(e.parts, function (h) {
        h.timing || (h.timing = {});
        h.timing.spfCached = !!c.spfCached;
        h.timing.spfPrefetched = !!c.spfPrefetched;
        b.j(a, h);
      });
    Ga(a, b, c, e, f);
  }
  function Ha(a, b, c) {
    a = c.getResponseHeader("X-SPF-Response-Type") || "";
    b.o = -1 != a.toLowerCase().indexOf("multipart");
  }
  function Ia(a, b, c, d, e, f, h) {
    if (d.o) {
      f = d.h + f;
      try {
        var k = va(f, !0, h);
      } catch (g) {
        e.abort();
        b.i && b.i(a, g, e);
        return;
      }
      b.j &&
        I(k.m, function (g) {
          g.timing || (g.timing = {});
          g.timing.spfCached = !!c.spfCached;
          g.timing.spfPrefetched = !!c.spfPrefetched;
          b.j(a, g);
        });
      d.g = d.g.concat(k.m);
      d.h = k.h;
    }
  }
  function Ja(a, b, c, d, e) {
    if (e.timing) for (var f in e.timing) c[f] = e.timing[f];
    if (e.resourceTiming)
      if ("load" == b.type)
        for (var h in e.resourceTiming) c[h] = e.resourceTiming[h];
      else if (
        window.performance &&
        window.performance.timing &&
        ((f = window.performance.timing.navigationStart),
        f + e.resourceTiming.startTime >= c.startTime)
      )
        for (var k in e.resourceTiming)
          (h = e.resourceTiming[k]),
            void 0 !== h &&
              (Q(k, "Start") || Q(k, "End") || "startTime" == k) &&
              (c[k] = f + Math.round(h));
    "load" != b.type && (c.navigationStart = c.startTime);
    d.g.length && ((d.h = R(d.h)), d.h && Ia(a, b, c, d, e, "", !0));
    if ("json" == e.responseType) {
      if (!e.response) {
        b.i && b.i(a, Error("JSON response parsing failed"), e);
        return;
      }
      var g = V(K(e.response));
    } else
      try {
        g = va(e.responseText).m;
      } catch (t) {
        b.i && b.i(a, t, e);
        return;
      }
    if (b.j && 1 < g.length)
      for (d = d.g.length; d < g.length; d++)
        (e = g[d]),
          e.timing || (e.timing = {}),
          (e.timing.spfCached = !!c.spfCached),
          (e.timing.spfPrefetched = !!c.spfPrefetched),
          b.j(a, e);
    if (1 < g.length) {
      var m;
      I(g, function (t) {
        t.cacheType && (m = t.cacheType);
      });
      g = { parts: g, type: "multipart" };
      m && (g.cacheType = m);
    } else g = 1 == g.length ? g[0] : {};
    Ga(a, b, c, g, !0);
  }
  function Ga(a, b, c, d, e) {
    if (
      e &&
      "POST" != b.method &&
      (e = Ka(a, b.current, d.cacheType, b.type, !0))
    ) {
      d.cacheKey = e;
      var f = { response: d, type: b.type || "" },
        h = parseInt(N["cache-lifetime"], 10),
        k = parseInt(N["cache-max"], 10);
      0 >= h ||
        0 >= k ||
        ((k = P()),
        (f = { data: f, life: h, time: H(), count: 0 }),
        ia(f),
        (k[e] = f),
        setTimeout(fa, 1e3));
    }
    d.timing = c;
    b.v && b.v(a, d);
  }
  function Ka(a, b, c, d, e) {
    a = pa(a);
    var f;
    N["cache-unified"]
      ? (f = a)
      : "navigate-back" == d || "navigate-forward" == d
      ? (f = "history " + a)
      : "navigate" == d
      ? (f = (e ? "history " : "prefetch ") + a)
      : "prefetch" == d && (f = e ? "prefetch " + a : "");
    b && "url" == c
      ? (f += " previous " + b)
      : b && "path" == c && (f += " previous " + U(b).pathname);
    return f || "";
  }
  function La(a, b) {
    var c = [];
    b &&
      (c.push(a + " previous " + b), c.push(a + " previous " + U(b).pathname));
    c.push(a);
    var d = null;
    J(c, function (e) {
      a: {
        var f = P();
        if (e in f) {
          f = f[e];
          if (ha(f)) {
            ia(f);
            f = f.data;
            break a;
          }
          O(e);
        }
        f = void 0;
      }
      f && (d = { key: e, response: f.response, type: f.type });
      return !!f;
    });
    return d;
  }
  function Ma() {
    this.o = !1;
    this.h = "";
    this.g = [];
  }
  function Y(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments);
      c[0] = a;
      c = ea.apply(null, c);
    }
    return !1 !== c;
  }
  function Na(a, b, c, d) {
    Y((a || {}).onError, { url: b, err: c, xhr: d });
  }
  function Oa(a, b, c) {
    Y((a || {}).onPartProcess, { url: b, part: c }) &&
      Y((a || {}).onPartDone, { url: b, part: c });
  }
  function Pa(a, b, c) {
    var d;
    (d = "multipart" == c.type) ||
      (d = Y((a || {}).onProcess, { url: b, response: c }));
    d && Y((a || {}).onDone, { url: b, response: c });
  }
  var Qa = {
      request: function (a, b) {
        b = b || {};
        b = {
          method: b.method,
          headers: b.experimental_headers,
          j: G(Oa, null, b),
          i: G(Na, null, b),
          v: G(Pa, null, b),
          D: b.postData,
          type: "",
          current: window.location.href,
          B: window.location.href,
        };
        b.method = ((b.method || "GET") + "").toUpperCase();
        b.type = b.type || "request";
        var c = a,
          d = N["url-identifier"] || "";
        if (d) {
          d = d.replace("__type__", b.type || "");
          var e = S(c, "#"),
            f = S(e[0], "?");
          c = f[0];
          var h = f[1];
          f = f[2];
          var k = e[1];
          e = e[2];
          if (0 == d.lastIndexOf("?", 0))
            h && (d = d.replace("?", "&")), (f += d);
          else {
            if (0 == d.lastIndexOf(".", 0))
              if (Q(c, "/")) d = "index" + d;
              else {
                var g = c.lastIndexOf(".");
                -1 < g && (c = c.substring(0, g));
              }
            else
              Q(c, "/") && 0 == d.lastIndexOf("/", 0) && (d = d.substring(1));
            c += d;
          }
          c = c + h + f + k + e;
        }
        d = pa(c);
        c = {};
        c.spfUrl = d;
        c.startTime = H();
        c.fetchStart = c.startTime;
        h = Ka(a, b.current, null, b.type, !1);
        h = La(h, b.current);
        c.spfPrefetched = !!h && "prefetch" == h.type;
        c.spfCached = !!h;
        if (h) {
          a = G(Fa, null, a, b, c, h.key, h.response);
          b = window._spf_state = window._spf_state || {};
          var m = parseInt(b.uid, 10) || 0;
          m++;
          b = b.uid = m;
          T[b] = a;
          na
            ? window.postMessage("spf:" + b, "*")
            : window.setTimeout(G(ka, null, b), 0);
          a = null;
        } else {
          h = {};
          if ((f = N["request-headers"]))
            for (m in f) (k = f[m]), (h[m] = null == k ? "" : String(k));
          if (b.headers)
            for (m in b.headers)
              (k = b.headers[m]), (h[m] = null == k ? "" : String(k));
          null != b.B && (h["X-SPF-Referer"] = b.B);
          null != b.current && (h["X-SPF-Previous"] = b.current);
          if ((m = N["advanced-header-identifier"]))
            (h["X-SPF-Request"] = m.replace("__type__", b.type)),
              (h.Accept = "application/json");
          m = new Ma();
          f = G(Ja, null, a, b, c, m);
          a = {
            headers: h,
            C: N["request-timeout"],
            u: G(Ha, null, a, m),
            l: G(Ia, null, a, b, c, m),
            s: f,
            A: f,
          };
          b.withCredentials && (a.withCredentials = b.withCredentials);
          N["advanced-response-type-json"] && (a.responseType = "json");
          a =
            "POST" == b.method ? Ea("POST", d, b.D, a) : Ea("GET", d, null, a);
        }
        return a;
      },
    },
    n = this;
  n.spf = n.spf || {};
  var Ra = n.spf,
    Z;
  for (Z in Qa) Ra[Z] = Qa[Z];
}.call(this));
