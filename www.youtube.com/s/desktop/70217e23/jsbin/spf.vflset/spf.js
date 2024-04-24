(function () {
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ca(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof l && l,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var da = ca(this);
  function ea(a, b) {
    if (b)
      a: {
        var c = da;
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
          ba(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  ea("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      this.g = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  ea("Symbol.iterator", function (a) {
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
      var d = da[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return fa(aa(this));
          },
        });
    }
    return a;
  });
  function fa(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function ha(a, b) {
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
  ea("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return ha(this, function (b) {
            return b;
          });
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ia = this || self;
  function ja(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function ka(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Y = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.X = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function la(a) {
    return a;
  }
  function ma(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ma);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  ka(ma, Error);
  ma.prototype.name = "CustomError";
  function na(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    ma.call(this, c + a[d]);
  }
  ka(na, ma);
  na.prototype.name = "AssertionError";
  function oa(a, b) {
    throw new na(
      "Failure" + (a ? ": " + a : ""),
      Array.prototype.slice.call(arguments, 1)
    );
  }
  var pa;
  function qa() {
    if (void 0 === pa) {
      var a = null,
        b = ia.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: la,
            createScript: la,
            createScriptURL: la,
          });
        } catch (c) {
          ia.console && ia.console.error(c.message);
        }
        pa = a;
      } else pa = a;
    }
    return pa;
  }
  function ra(a, b) {
    if (b !== sa)
      throw Error("TrustedResourceUrl is not meant to be built directly");
    this.g = a;
  }
  ra.prototype.toString = function () {
    return this.g + "";
  };
  var sa = {}; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var ta = {};
  function ua(a) {
    if (ta !== ta) throw Error("Bad secret");
    this.g = a;
  }
  ua.prototype.toString = function () {
    return this.g;
  };
  new ua("about:blank");
  new ua("about:invalid#zClosurez");
  var wa = [];
  function xa(a) {
    console.warn("A URL with content '" + a + "' was sanitized away.");
  }
  -1 === wa.indexOf(xa) && wa.push(xa);
  var ya = {};
  function za() {
    if (ya !== ya) throw Error("SafeStyle is not meant to be built directly");
  }
  za.prototype.toString = function () {
    return "".toString();
  };
  new za();
  var Aa = {};
  function Ba() {
    if (Aa !== Aa)
      throw Error("SafeStyleSheet is not meant to be built directly");
  }
  Ba.prototype.toString = function () {
    return "".toString();
  };
  new Ba();
  var Ca = {};
  function Da(a, b) {
    if (b !== Ca) throw Error("SafeHtml is not meant to be built directly");
    this.g = a;
  }
  Da.prototype.toString = function () {
    return this.g.toString();
  };
  new Da((ia.trustedTypes && ia.trustedTypes.emptyHTML) || "", Ca);
  function Ea(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c)
        throw Error(
          "SCRIPT" === c
            ? "Use safeScriptEl.setTextContent with a SafeScript."
            : "Use safeStyleEl.setTextContent with a SafeStyleSheet."
        );
    }
    b instanceof Da && b.constructor === Da
      ? (b = b.g)
      : (oa(
          "expected object of type SafeHtml, got '" + b + "' of type " + ja(b)
        ),
        (b = "type_error:SafeHtml"));
    a.innerHTML = b;
  }
  function Fa(a, b) {
    b instanceof ra && b.constructor === ra
      ? (b = b.g)
      : (oa(
          "expected object of type TrustedResourceUrl, got '%s' of type %s",
          b,
          ja(b)
        ),
        (b = "type_error:TrustedResourceUrl"));
    a.src = b;
    var c, d;
    (c = (b =
      null ==
      (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  function Ga(a) {
    a = Ha(a);
    if ("string" !== typeof a) throw Error("Expected a string");
    var b = qa();
    a = b ? b.createHTML(a) : a;
    return new Da(a, Ca);
  }
  function Ia(a) {
    a = Ha(a);
    if ("string" !== typeof a) throw Error("Expected a string");
    var b = qa();
    a = b ? b.createScriptURL(a) : a;
    return new ra(a, sa);
  }
  function Ha(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  function n(a, b, c) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = d.slice();
      e.push.apply(e, arguments);
      return a.apply(b, e);
    };
  }
  function Ja(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments, 1);
      try {
        return a.apply(null, c);
      } catch (d) {
        return d;
      }
    }
  }
  function p(a, b) {
    if (document.createEvent) {
      var c = document.createEvent("CustomEvent");
      c.initCustomEvent(a, !0, !0, b);
      return document.dispatchEvent(c);
    }
    return !0;
  }
  var q =
    window.performance && window.performance.timing && window.performance.now
      ? function () {
          return (
            window.performance.timing.navigationStart + window.performance.now()
          );
        }
      : function () {
          return new Date().getTime();
        };
  function Ka() {}
  function r(a, b) {
    if (a.forEach) a.forEach(b, void 0);
    else
      for (var c = 0, d = a.length; c < d; c++)
        c in a && b.call(void 0, a[c], c, a);
  }
  function La(a, b) {
    if (a.every) return a.every(b, void 0);
    for (var c = 0, d = a.length; c < d; c++)
      if (c in a && !b.call(void 0, a[c], c, a)) return !1;
    return !0;
  }
  function Ma(a, b) {
    if (a.some) return a.some(b, void 0);
    for (var c = 0, d = a.length; c < d; c++)
      if (c in a && b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function Na(a, b) {
    if (a.filter) return a.filter(b, void 0);
    var c = [];
    r(a, function (d, e, f) {
      b.call(void 0, d, e, f) && c.push(d);
    });
    return c;
  }
  function Oa(a, b) {
    if (a.map) return a.map(b, void 0);
    var c = [];
    c.length = a.length;
    r(a, function (d, e, f) {
      c[e] = b.call(void 0, d, e, f);
    });
    return c;
  }
  function v(a) {
    return "[object Array]" == Object.prototype.toString.call(a) ? a : [a];
  }
  function w(a, b) {
    return (x[a] = b);
  }
  var x = window._spf_state || {};
  window._spf_state = x;
  function y(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  function Pa(a) {
    return "[object String]" == Object.prototype.toString.call(a);
  }
  var Qa = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return a.replace(/^\s+|\s+$/g, "");
      };
  function z(a, b) {
    a = a.split(b);
    var c = 1 == a.length;
    return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)];
  }
  function Ra() {
    return "spfName".replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  function Sa(a) {
    a.data &&
      Pa(a.data) &&
      0 == a.data.lastIndexOf("spf:", 0) &&
      Ta(a.data.substring(4));
  }
  function Ta(a) {
    var b = Ua[a];
    b && (delete Ua[a], b());
  }
  function Va(a) {
    window.addEventListener
      ? window.addEventListener("message", a, !1)
      : window.attachEvent && window.attachEvent("onmessage", a);
  }
  function Wa(a) {
    window.removeEventListener
      ? window.removeEventListener("message", a, !1)
      : window.detachEvent && window.detachEvent("onmessage", a);
  }
  var Xa = (function () {
      function a() {
        b = !1;
      }
      if (!window.postMessage) return !1;
      var b = !0;
      Va(a);
      window.postMessage("", "*");
      Wa(a);
      return b;
    })(),
    Ua = {};
  "async-defers" in x || w("async-defers", Ua);
  Ua = x["async-defers"];
  Xa &&
    ("async-listener" in x && Wa(x["async-listener"]),
    Va(Sa),
    w("async-listener", Sa));
  var Za = {
      "animation-class": "spf-animate",
      "animation-duration": 425,
      "cache-lifetime": 6e5,
      "cache-max": 50,
      "cache-unified": !1,
      "link-class": "spf-link",
      "nolink-class": "spf-nolink",
      "navigate-limit": 20,
      "navigate-lifetime": 864e5,
      "reload-identifier": null,
      "request-timeout": 0,
      "url-identifier": "?spf=__type__",
    },
    A = {};
  "config" in x || w("config", A);
  A = x.config;
  function $a(a) {
    var b = D();
    a in b && delete b[a];
  }
  function ab() {
    var a = D();
    for (b in a) bb(a[b]) || delete a[b];
    a = D();
    var b = parseInt(A["cache-max"], 10);
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
  function bb(a) {
    if (!(a && "data" in a)) return !1;
    var b = a.life;
    b = isNaN(b) ? Infinity : b;
    a = a.time;
    return q() - a < b;
  }
  function cb(a) {
    var b = parseInt(x["cache-counter"], 10) || 0;
    b++;
    w("cache-counter", b);
    a.count = b;
  }
  function D(a) {
    return !a && "cache-storage" in x
      ? x["cache-storage"]
      : w("cache-storage", a || {});
  }
  function db(a) {
    return a.classList
      ? a.classList
      : (a.className && a.className.match(/\S+/g)) || [];
  }
  function eb(a, b) {
    if (b) {
      if (a.classList) return a.classList.contains(b);
      a = db(a);
      return Ma(a, function (c) {
        return c == b;
      });
    }
    return !1;
  }
  function E(a, b) {
    b &&
      (a.classList ? a.classList.add(b) : eb(a, b) || (a.className += " " + b));
  }
  function F(a, b) {
    if (b)
      if (a.classList) a.classList.remove(b);
      else {
        var c = db(a);
        c = Na(c, function (d) {
          return d != b;
        });
        a.className = c.join(" ");
      }
  }
  function fb(a) {
    var b = document.body;
    b.dataset ? (b.dataset.spfName = a) : b.setAttribute("data-" + Ra(), a);
  }
  function gb(a, b) {
    b = b || document;
    return b.querySelectorAll ? b.querySelectorAll(a) : [];
  }
  function hb(a, b, c) {
    for (; a; ) {
      if (b(a)) return a;
      if (c && a == c) break;
      a = a.parentNode;
    }
    return null;
  }
  function ib(a, b, c) {
    b = b || document;
    var d = b.createElement("iframe");
    d.id = a || "";
    d.src = 'javascript:""';
    d.style.display = "none";
    c && (d.onload = n(c, null, d));
    b.body.appendChild(d);
    return d;
  }
  function jb(a, b, c) {
    var d = null,
      e = window.history.state;
    if (e) {
      d = {};
      for (var f in e) d[f] = e[f];
    }
    if (b) for (f in ((d = d || {}), b)) d[f] = b[f];
    kb(!0, a, d, c);
  }
  function kb(a, b, c, d) {
    if (b || c) {
      b = b || window.location.href;
      c = c || {};
      var e = q();
      w("history-timestamp", e);
      c["spf-timestamp"] = e;
      if (a) lb(c, b);
      else if (
        ((a = mb().contentWindow.history.pushState), "function" == typeof a)
      )
        a.call(window.history, c, "", b);
      else throw Error("history.pushState is not a function.");
      w("history-url", b);
      d && (d = x["history-callback"]) && d(b, c);
    }
  }
  function nb(a) {
    var b = window.location.href;
    if (x["history-ignore-pop"]) w("history-ignore-pop", !1);
    else if (a.state) {
      a = a.state;
      var c = a["spf-timestamp"];
      b == x["history-url"]
        ? (w("history-timestamp", c), lb(a, b))
        : ((a["spf-back"] = c < parseInt(x["history-timestamp"], 10)),
          (a["spf-current"] = x["history-url"]),
          w("history-timestamp", c),
          w("history-url", b),
          (c = x["history-callback"]) && c(b, a));
    }
  }
  function lb(a, b) {
    var c = mb().contentWindow.history.replaceState;
    if ("function" == typeof c) c.call(window.history, a, "", b);
    else throw Error("history.replaceState is not a function");
  }
  function mb() {
    var a = document.getElementById("history-iframe");
    a || (a = ib("history-iframe"));
    return a;
  }
  function ob(a, b) {
    a && b && (a in G || (G[a] = []), G[a].push(b));
  }
  function pb(a, b) {
    a in G &&
      b &&
      La(G[a], function (c, d, e) {
        return c == b ? ((e[d] = null), !1) : !0;
      });
  }
  function qb(a) {
    a in G &&
      r(G[a], function (b, c, d) {
        d[c] = null;
        b && b();
      });
  }
  var G = {};
  "ps-s" in x || w("ps-s", G);
  G = x["ps-s"];
  function J(a, b, c) {
    var d = K[a];
    return a && b
      ? (d || (d = K[a] = { items: [], A: 0, v: 0, G: 1 }),
        d.items.push({ I: b, delay: c || 0 }))
      : (d && d.items.length) || 0;
  }
  function L(a, b) {
    var c = K[a];
    if (c) {
      var d = !!c.A || !!c.v;
      0 < c.G && (b || !d) && rb(a, b);
    }
  }
  function sb(a) {
    (a = K[a]) && a.G--;
  }
  function tb(a, b) {
    var c = K[a];
    c && (c.G++, L(a, b));
  }
  function ub(a) {
    var b = K[a];
    b && (vb(b), delete K[a]);
  }
  function rb(a, b) {
    var c = K[a];
    if (c && (vb(c), 0 < c.G && c.items.length)) {
      var d = c.items[0];
      d &&
        ((a = n(
          function (e, f) {
            f();
            e();
          },
          null,
          n(rb, null, a, b)
        )),
        b ? (c.items.shift(), a(d.I)) : wb(c, d, a));
    }
  }
  function wb(a, b, c) {
    b.delay
      ? ((c = n(c, null, Ka)), (a.v = setTimeout(c, b.delay)), (b.delay = 0))
      : (a.items.shift(),
        (c = n(c, null, b.I)),
        (b = (b = A["advanced-task-scheduler"]) && b.addTask)
          ? (a.A = b(c))
          : (a.v = setTimeout(c, 0)));
  }
  function vb(a) {
    if (a.A) {
      var b = A["advanced-task-scheduler"];
      (b = b && b.cancelTask) && b(a.A);
      a.A = 0;
    }
    a.v && (clearTimeout(a.v), (a.v = 0));
  }
  var K = {};
  function xb(a) {
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
  function N(a, b) {
    a = xb(a);
    return b ? a.href : z(a.href, "#")[0];
  }
  function yb(a, b) {
    var c = z(a, "#");
    a = c[0];
    r(b, function (d) {
      a = a.replace(
        new RegExp("([?&])" + d + "(?:=[^&]*)?(?:(?=[&])|$)", "g"),
        function (e, f) {
          return "?" == f ? f : "";
        }
      );
    });
    y(a, "?") && (a = a.slice(0, -1));
    return a + c[1] + c[2];
  }
  function zb(a) {
    var b = A["advanced-persistent-parameters"] || "",
      c = z(a, "#");
    a = c[0];
    var d = -1 != a.indexOf("?") ? "&" : "?";
    a += b ? d + b : "";
    return a + c[1] + c[2];
  } /*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
  function Ab(a, b, c, d) {
    var e = "js" == a;
    b = O(a, b);
    var f = c || "^" + b,
      g = P(a, f),
      h;
    c &&
      (h = Q[P(a, c)]) &&
      b != h &&
      (p(e ? "spfjsbeforeunload" : "spfcssbeforeunload", { name: c, url: h }),
      (e = h),
      delete Q[P(a, c)],
      e && delete S[P(a, e)],
      delete G[P(a, c)],
      ob(g, n(Bb, null, a, c, h)));
    if ((e = S[P(a, b)]) && f != e) {
      delete Q[P(a, e)];
      delete S[P(a, b)];
      var k = P(a, e);
      k && g && k in G && ((G[g] = (G[g] || []).concat(G[k])), delete G[k]);
    }
    S[P(a, b)] = f;
    Q[P(a, f)] = b;
    ob(g, d);
    d = n(Cb, null, a);
    T[P(a, b)]
      ? (e && f != e && (a = Db(a, b)) && a.setAttribute("name", c || ""), d())
      : (a = Eb(a, b, d, void 0, void 0, h)) && c && a.setAttribute("name", c);
  }
  function Fb(a, b) {
    var c = Q[P(a, b)];
    delete Q[P(a, b)];
    c && delete S[P(a, c)];
    delete G[P(a, b)];
    Bb(a, b, c);
  }
  function Bb(a, b, c) {
    c &&
      (p("js" == a ? "spfjsunload" : "spfcssunload", { name: b, url: c }),
      Gb(a, c));
  }
  function Cb(a) {
    var b = P(a, ""),
      c;
    for (c in G)
      0 == c.indexOf(b) &&
        La(c.substring(b.length).split("|"), n(Hb, null, a)) &&
        qb(c);
  }
  function Eb(a, b, c, d, e, f) {
    function g() {
      T[P(a, b, e)] && (T[P(a, b, e)] = 2);
      h && m && m.parentNode && k == document && m.parentNode.removeChild(m);
      c && setTimeout(c, 0);
      return null;
    }
    var h = "js" == a;
    b = O(a, b);
    T[P(a, b, e)] = 1;
    var k = d || document,
      m = k.createElement(h ? "script" : "link");
    if (!b) return g();
    d = Ib(b);
    m.className = P(a, d);
    "onload" in m
      ? (m.onerror = m.onload = g)
      : (m.onreadystatechange = function () {
          /^c|loade/.test(m.readyState) && g();
        });
    d = k.getElementsByTagName("head")[0] || k.body;
    h
      ? ((m.async = !0), Fa(m, Ia(b)), d.insertBefore(m, d.firstChild))
      : ((m.rel = "stylesheet"),
        (m.href = b),
        (f = f ? Db(a, f, d) : null) ? d.insertBefore(m, f) : d.appendChild(m));
    return m;
  }
  function Gb(a, b) {
    b = O(a, b);
    var c = Db(a, b);
    c && c.parentNode && c.parentNode.removeChild(c);
    delete T[P(a, b)];
  }
  function Db(a, b, c) {
    b = Ib(b);
    return gb("." + P(a, b), c)[0];
  }
  function Jb(a) {
    var b = "js" == a,
      c = [];
    r(gb(b ? "script[src]" : 'link[rel~="stylesheet"]'), function (d) {
      var e = b ? d.src : d.href;
      e = O(a, e);
      if (!T[P(a, e)]) {
        T[P(a, e)] = 2;
        var f = Ib(e);
        E(d, P(a, f));
        if ((f = d.getAttribute("name"))) (S[P(a, e)] = f), (Q[P(a, f)] = e);
        c.push(d);
      }
    });
  }
  function Kb(a, b, c) {
    if (b && ((b = O(a, b)), c || !T[P(a, b)]))
      if (c && "img" == a) Lb(b);
      else {
        var d = Ib(b),
          e = P(a, d),
          f = P(a, "prefetch");
        d = document.getElementById(f);
        if (!d)
          d = ib(f, null, function (g) {
            g.title = f;
            L(f, !0);
          });
        else if (!c && d.contentWindow.document.getElementById(e)) return;
        a = n(Mb, null, d, a, b, e, f);
        d.title ? a() : J(f, a);
      }
  }
  function Mb(a, b, c, d, e) {
    var f = "js" == b,
      g = "css" == b;
    a = a.contentWindow.document;
    var h = a.getElementById(d);
    h && h.parentNode.removeChild(h);
    f
      ? ((h = a.createElement("object")),
        Nb ? (a.createElement("script").src = c) : (h.data = c),
        (h.id = d),
        a.body.appendChild(h))
      : g
      ? ((h = Eb(b, c, null, a, e)), (h.id = d))
      : ((h = a.createElement("img")),
        Nb && (c = c + "#" + q()),
        (h.src = c),
        (h.id = d),
        a.body.appendChild(h));
  }
  function Lb(a) {
    var b = new Image();
    Nb && (a = a + "#" + q());
    b.src = a;
  }
  function Ob(a, b, c) {
    var d = "js" == a,
      e = Q[P(a, c)],
      f = b.replace(/\s/g, "");
    f = f || "";
    for (var g = 0, h = 0, k = f.length; h < k; ++h)
      (g = 31 * g + f.charCodeAt(h)), (g %= 4294967296);
    f = "hash-" + g;
    Q[P(a, c)] = f;
    !Pb(a, f) &&
      (b = Qb(a, b)) &&
      ((T[P(a, f)] = 2),
      b &&
        !d &&
        ((d = Ib(f)), (b.className = P(a, d)), b.setAttribute("name", c)),
      (e = e && e[0]) && Gb(a, e));
  }
  function Qb(a, b) {
    b = Qa(b);
    if (!b) return null;
    var c = document.getElementsByTagName("head")[0] || document.body;
    "js" == a
      ? ((a = document.createElement("script")),
        (a.text = b),
        c.appendChild(a),
        c.removeChild(a))
      : ((a = document.createElement("style")),
        c.appendChild(a),
        "styleSheet" in a
          ? (a.styleSheet.cssText = b)
          : a.appendChild(document.createTextNode(b)));
    return a;
  }
  function O(a, b) {
    var c = "rsrc-p-" + a;
    if (b) {
      var d = b.indexOf("//");
      if (0 > d) {
        if (0 == b.lastIndexOf("hash-", 0)) return b;
        c = x[c] || "";
        if (Pa(c)) b = c + b;
        else for (var e in c) b = b.replace(e, c[e]);
        "img" != a && (b = 0 > b.indexOf("." + a) ? b + "." + a : b);
        b = N(b);
      } else 0 == d && (b = N(b));
    }
    return b;
  }
  function P(a, b, c) {
    return a + "-" + b + (c ? "-" + c : "");
  }
  function Ib(a) {
    return a ? String(a).replace(/[^\w]/g, "") : "";
  }
  function Pb(a, b) {
    a = T[P(a, b)];
    return "" == b || 2 == a;
  }
  function Hb(a, b) {
    b = Q[P(a, b)];
    return void 0 != b && Pb(a, b);
  }
  var T = {},
    S = {},
    Q = {},
    Nb = -1 != navigator.userAgent.indexOf(" Trident/");
  "rsrc-s" in x || w("rsrc-s", T);
  T = x["rsrc-s"];
  "rsrc-n" in x || w("rsrc-n", S);
  S = x["rsrc-n"];
  "rsrc-u" in x || w("rsrc-u", Q);
  Q = x["rsrc-u"];
  function Rb(a) {
    a = v(a);
    r(a, function (b) {
      Kb("img", b, !0);
    });
  }
  function Sb(a, b, c) {
    Ab("js", a, b, c);
  }
  function Tb(a) {
    Fb("js", a);
  }
  function Ub(a, b) {
    Eb("js", a, b);
  }
  function Vb(a) {
    a = v(a);
    r(a, function (b) {
      Kb("js", b);
    });
  }
  function Wb(a, b, c) {
    a = v(a);
    a = Na(a, function (g) {
      return !!g;
    });
    var d = [];
    r(a, function (g) {
      void 0 == Q[P("js", g)] && d.push(g);
    });
    var e = !d.length;
    if (b) {
      var f = La(a, n(Hb, null, "js"));
      e && f ? b() : ((a = P("js", a.sort().join("|"))), ob(a, b));
    }
    c && !e && c(d);
  }
  function Xb(a, b) {
    a = v(a);
    r(a, function (c) {
      if (c) {
        var d = Yb[c] || c;
        d = O("js", d);
        var e = Q[P("js", c)];
        e && d != e && Zb(c);
      }
    });
    Wb(a, b, $b);
  }
  function $b(a) {
    r(a, function (b) {
      function c() {
        Sb(e, b);
      }
      var d = U[b],
        e = Yb[b] || b;
      d ? Xb(d, c) : c();
    });
  }
  function Zb(a) {
    a = v(a);
    r(a, function (b) {
      var c = [],
        d;
      for (d in U) {
        var e = U[d];
        e = v(e);
        r(e, function (f) {
          f == b && c.push(d);
        });
      }
      r(c, function (f) {
        Zb(f);
      });
      Tb(b);
    });
  }
  function ac(a, b) {
    Ob("js", a, b);
  }
  function bc(a) {
    Qb("js", a);
  }
  var U = {};
  "js-d" in x || w("js-d", U);
  U = x["js-d"];
  var Yb = {};
  "js-u" in x || w("js-u", Yb);
  Yb = x["js-u"];
  function cc(a, b, c) {
    Ab("css", a, b, c);
  }
  function dc(a, b) {
    Eb("css", a, b);
  }
  function ec(a) {
    a = v(a);
    r(a, function (b) {
      Kb("css", b);
    });
  } /*

 Copyright 2012-2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by The MIT License.
 SPDX-License-Identifier: MIT
*/
  function fc(a, b, c) {
    if (b) {
      b = [];
      var d = 0;
      c && (a += "\r\n");
      var e = a.indexOf("[\r\n", d);
      for (-1 < e && (d = e + 3); -1 < (e = a.indexOf(",\r\n", d)); ) {
        var f = Qa(a.substring(d, e));
        d = e + 3;
        f && b.push(JSON.parse(f));
      }
      e = a.indexOf("]\r\n", d);
      -1 < e &&
        ((f = Qa(a.substring(d, e))), (d = e + 3), f && b.push(JSON.parse(f)));
      f = "";
      a.length > d &&
        ((f = a.substring(d)),
        c && y(f, "\r\n") && (f = f.substring(0, f.length - 2)));
      b = gc(b);
      return { F: b, l: f };
    }
    a = JSON.parse(a);
    b = gc(v(a));
    return { F: b, l: "" };
  }
  function V(a, b, c, d) {
    var e = c && 0 == c.type.lastIndexOf("navigate", 0),
      f = c && c.reverse,
      g = c && !!c.position,
      h = c && c.s,
      k = b.name || "",
      m = "process " + N(a),
      B = !A["experimental-process-async"];
    var u = 0;
    b.timing || (b.timing = {});
    b.title && (document.title = b.title);
    e &&
      b.url &&
      N(b.url) != N(window.location.href) &&
      jb(b.url + window.location.hash);
    b.head &&
      ((u = n(
        function (t, C) {
          t = W(t);
          hc(t);
          ic(t);
          sb(m);
          jc(t, function () {
            C.spfProcessHead = q();
            tb(m, B);
          });
        },
        null,
        b.head,
        b.timing
      )),
      (u = J(m, u)));
    b.attr &&
      ((u = n(
        function (t, C) {
          for (var H in t) {
            var M = document.getElementById(H);
            if (M) {
              var R = void 0,
                mc = t[H];
              for (R in mc) {
                var va = mc[R];
                "class" == R
                  ? (M.className = va)
                  : "style" == R
                  ? (M.style.cssText = va)
                  : (M.setAttribute(R, va), "value" == R && (M[R] = va));
              }
            }
          }
          C.spfProcessAttr = q();
        },
        null,
        b.attr,
        b.timing
      )),
      (u = J(m, u)));
    var I = b.body || {},
      kd = u,
      Ya;
    for (Ya in I)
      (u = n(
        function (t, C) {
          if ((t = document.getElementById(t))) {
            !e ||
              g ||
              h ||
              (w("nav-scroll-position", null),
              w("nav-scroll-url", null),
              window.scroll(0, 0),
              (h = !0),
              c && (c.s = !0));
            var H = W(C);
            ic(H);
            var M = function () {
              sb(m);
              jc(H, function () {
                tb(m, B);
              });
            };
            C = A["animation-class"];
            kc && eb(t, C)
              ? ((t = new lc(t, H.html, C, k, !!f)),
                sb(m),
                L(t.key, !0),
                J(t.key, n(nc, null, t), 0),
                J(t.key, n(oc, null, t), 17),
                J(t.key, n(pc, null, t), t.duration),
                J(
                  t.key,
                  n(function () {
                    M();
                    tb(m, B);
                  }, null),
                  0
                ),
                L(t.key))
              : (C = A["experimental-html-handler"])
              ? (sb(m),
                C(H.html, t, function () {
                  M();
                  tb(m, B);
                }))
              : (Ea(t, Ga(H.html)), M());
          }
        },
        null,
        Ya,
        I[Ya],
        b.timing
      )),
        (u = J(m, u));
    I = u - kd;
    b.foot
      ? ((u = n(
          function (t, C, H) {
            H && (C.spfProcessBody = q());
            t = W(t);
            ic(t);
            sb(m);
            jc(t, function () {
              C.spfProcessFoot = q();
              tb(m, B);
            });
          },
          null,
          b.foot,
          b.timing,
          I
        )),
        (u = J(m, u)))
      : I &&
        ((u = n(
          function (t) {
            t.spfProcessBody = q();
          },
          null,
          b.timing
        )),
        (u = J(m, u)));
    d && (u = J(m, n(d, null, a, b)));
    L(m, B);
  }
  function qc(a, b, c, d) {
    c = "preprocess " + N(a);
    if (b.head) {
      var e = n(
        function (h) {
          h = W(h);
          hc(h);
          rc(h);
          sc(h);
        },
        null,
        b.head
      );
      J(c, e);
    }
    var f = b.body || {},
      g;
    for (g in f)
      f[g] &&
        ((e = n(
          function (h, k) {
            h = W(k);
            rc(h);
            sc(h);
          },
          null,
          g,
          f[g]
        )),
        J(c, e));
    b.foot &&
      ((e = n(
        function (h) {
          h = W(h);
          rc(h);
          sc(h);
        },
        null,
        b.foot
      )),
      J(c, e));
    d && J(c, n(d, null, a, b));
    L(c);
  }
  function nc(a) {
    E(a.g, a.B);
    E(a.g, a.L);
    E(a.g, a.T);
    E(a.g, a.P);
    E(a.g, a.S);
    a.u = document.createElement("div");
    a.u.className = a.W;
    var b = a.g,
      c = a.u;
    if (c) {
      for (var d; (d = b.firstChild); ) c.appendChild(d);
      b.appendChild(c);
    }
    a.j = document.createElement("div");
    a.j.className = a.V;
    Ea(a.j, Ga(a.U));
    a.reverse
      ? ((b = a.u), b.parentNode.insertBefore(a.j, b))
      : ((b = a.u), b.parentNode.insertBefore(a.j, b.nextSibling));
  }
  function oc(a) {
    F(a.g, a.P);
    F(a.g, a.S);
    E(a.g, a.J);
    E(a.g, a.K);
  }
  function pc(a) {
    a.g.removeChild(a.u);
    var b = a.j,
      c,
      d = b.parentNode;
    if (d && 11 != d.nodeType)
      if (b.removeNode) b.removeNode(!1);
      else {
        for (; (c = b.firstChild); ) d.insertBefore(c, b);
        d.removeChild(b);
      }
    F(a.g, a.J);
    F(a.g, a.K);
    F(a.g, a.L);
    F(a.g, a.T);
    F(a.g, a.B);
  }
  function gc(a) {
    var b = v(a);
    r(b, function (c) {
      if (c) {
        c.head && (c.head = W(c.head));
        if (c.body) for (var d in c.body) c.body[d] = W(c.body[d]);
        c.foot && (c.foot = W(c.foot));
      }
    });
    return a;
  }
  function W(a) {
    var b = new tc();
    if (!a) return b;
    if (!Pa(a))
      return (
        a.scripts &&
          r(a.scripts, function (c) {
            b.scripts.push({
              url: c.url || "",
              text: c.text || "",
              name: c.name || "",
              async: c.async || !1,
            });
          }),
        a.styles &&
          r(a.styles, function (c) {
            b.styles.push({
              url: c.url || "",
              text: c.text || "",
              name: c.name || "",
            });
          }),
        a.links &&
          r(a.links, function (c) {
            "spf-preconnect" == c.rel &&
              b.links.push({ url: c.url || "", rel: c.rel || "" });
          }),
        (b.html = a.html || ""),
        b
      );
    a = a.replace(uc, function (c, d, e, f) {
      if ("script" == d) {
        d = (d = e.match(vc)) ? d[1] : "";
        var g = e.match(wc);
        g = g ? g[1] : "";
        var h = xc.test(e);
        e = yc.exec(e);
        return (e =
          !e ||
          -1 != e[1].indexOf("/javascript") ||
          -1 != e[1].indexOf("/x-javascript") ||
          -1 != e[1].indexOf("/ecmascript"))
          ? (b.scripts.push({ url: g, text: f, name: d, async: h }), "")
          : c;
      }
      return "style" == d &&
        ((d = (d = e.match(vc)) ? d[1] : ""),
        (e = yc.exec(e)),
        (e = !e || -1 != e[1].indexOf("text/css")))
        ? (b.styles.push({ url: "", text: f, name: d }), "")
        : c;
    });
    a = a.replace(zc, function (c, d) {
      var e = d.match(Ac);
      e = e ? e[1] : "";
      return "stylesheet" == e
        ? ((e = (e = d.match(vc)) ? e[1] : ""),
          (d = (d = d.match(Bc)) ? d[1] : ""),
          b.styles.push({ url: d, text: "", name: e }),
          "")
        : "spf-preconnect" == e
        ? ((d = (d = d.match(Bc)) ? d[1] : ""),
          b.links.push({ url: d, rel: e }),
          "")
        : c;
    });
    b.html = a;
    return b;
  }
  function jc(a, b) {
    if (0 >= a.scripts.length) b && b();
    else {
      var c = -1,
        d = function () {
          c++;
          if (c < a.scripts.length) {
            var e = a.scripts[c],
              f = function () {};
            e.url
              ? (f = e.name ? n(Sb, null, e.url, e.name) : n(Ub, null, e.url))
              : e.text &&
                (f = e.name
                  ? n(ac, null, e.text, e.name)
                  : n(bc, null, e.text));
            e.url && !e.async ? f(d) : (f(), d());
          } else b && b();
        };
      d();
    }
  }
  function sc(a) {
    0 >= a.scripts.length ||
      ((a = Oa(a.scripts, function (b) {
        return b.url;
      })),
      Vb(a));
  }
  function ic(a) {
    0 >= a.styles.length ||
      r(a.styles, function (b) {
        b.url
          ? b.name
            ? cc(b.url, b.name)
            : dc(b.url)
          : b.text && (b.name ? Ob("css", b.text, b.name) : Qb("css", b.text));
      });
  }
  function rc(a) {
    0 >= a.styles.length ||
      ((a = Oa(a.styles, function (b) {
        return b.url;
      })),
      ec(a));
  }
  function hc(a) {
    0 >= a.links.length ||
      ((a = Oa(a.links, function (b) {
        return "spf-preconnect" == b.rel ? b.url : "";
      })),
      Rb(a));
  }
  function lc(a, b, c, d, e) {
    var f = parseInt(A["animation-duration"], 10);
    this.g = a;
    this.U = b;
    this.duration = f;
    this.reverse = e;
    b = document.body;
    b = (b.dataset ? b.dataset.spfName : b.getAttribute("data-" + Ra())) || "";
    f = parseInt(x.uid, 10) || 0;
    f++;
    this.key = a["spf-key"] || (a["spf-key"] = "" + w("uid", f));
    this.L = b && c + "-from-" + b;
    this.T = d && c + "-to-" + d;
    this.u = null;
    this.W = c + "-old";
    this.j = null;
    this.V = c + "-new";
    this.B = c + (e ? "-reverse" : "-forward");
    this.P = c + "-start";
    this.S = this.B + "-start";
    this.J = c + "-end";
    this.K = this.B + "-end";
  }
  function tc() {
    this.html = "";
    this.scripts = [];
    this.styles = [];
    this.links = [];
  }
  var kc = (function () {
      var a = document.createElement("div");
      return "transition" in a.style
        ? !0
        : Ma(["webkit", "Moz", "Ms", "O", "Khtml"], function (b) {
            return b + "Transition" in a.style;
          });
    })(),
    zc = /\x3clink([\s\S]*?)\x3e/gi,
    uc = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/gi,
    xc = /(?:\s|^)async(?:\s|=|$)/i,
    Bc = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,
    vc = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,
    Ac = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,
    wc = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,
    yc = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
  function Cc(a, b, c, d) {
    var e = d || {},
      f = !1,
      g = 0,
      h,
      k = new XMLHttpRequest();
    k.open(a, b, !0);
    k.timing = {};
    var m = k.abort;
    k.abort = function () {
      clearTimeout(h);
      k.onreadystatechange = null;
      m.call(k);
    };
    k.onreadystatechange = function () {
      var u = k.timing;
      if (2 == k.readyState) {
        u.responseStart = u.responseStart || q();
        if ("json" == k.responseType) f = !1;
        else if (
          A["assume-all-json-requests-chunked"] ||
          -1 <
            (k.getResponseHeader("Transfer-Encoding") || "")
              .toLowerCase()
              .indexOf("chunked")
        )
          f = !0;
        else {
          u = k.getResponseHeader("X-Firefox-Spdy");
          var I = window.chrome && chrome.loadTimes && chrome.loadTimes();
          I = I && I.wasFetchedViaSpdy;
          f = !(!u && !I);
        }
        e.N && e.N(k);
      } else
        3 == k.readyState
          ? f &&
            e.C &&
            ((u = k.responseText.substring(g)),
            (g = k.responseText.length),
            e.C(k, u))
          : 4 == k.readyState &&
            ((u.responseEnd = u.responseEnd || q()),
            window.performance &&
              window.performance.getEntriesByName &&
              (k.resourceTiming = window.performance.getEntriesByName(b).pop()),
            f &&
              e.C &&
              k.responseText.length > g &&
              ((u = k.responseText.substring(g)),
              (g = k.responseText.length),
              e.C(k, u)),
            clearTimeout(h),
            e.M && e.M(k));
    };
    "responseType" in k &&
      "json" == e.responseType &&
      (k.responseType = "json");
    e.withCredentials && (k.withCredentials = e.withCredentials);
    d = "FormData" in window && c instanceof FormData;
    a = "POST" == a && !d;
    if (e.headers)
      for (var B in e.headers)
        k.setRequestHeader(B, e.headers[B]),
          "content-type" == B.toLowerCase() && (a = !1);
    a &&
      k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    0 < e.R &&
      (h = setTimeout(function () {
        k.abort();
        e.O && e.O(k);
      }, e.R));
    k.timing.fetchStart = q();
    k.send(c);
    return k;
  }
  function Dc(a, b) {
    b = b || {};
    b.method = ((b.method || "GET") + "").toUpperCase();
    b.type = b.type || "request";
    var c = a,
      d = A["url-identifier"] || "";
    if (d) {
      d = d.replace("__type__", b.type || "");
      var e = z(c, "#"),
        f = z(e[0], "?");
      c = f[0];
      var g = f[1];
      f = f[2];
      var h = e[1];
      e = e[2];
      if (0 == d.lastIndexOf("?", 0)) g && (d = d.replace("?", "&")), (f += d);
      else {
        if (0 == d.lastIndexOf(".", 0))
          if (y(c, "/")) d = "index" + d;
          else {
            var k = c.lastIndexOf(".");
            -1 < k && (c = c.substring(0, k));
          }
        else y(c, "/") && 0 == d.lastIndexOf("/", 0) && (d = d.substring(1));
        c += d;
      }
      c = c + g + f + h + e;
    }
    d = N(c);
    c = {};
    c.spfUrl = d;
    c.startTime = q();
    c.fetchStart = c.startTime;
    g = Ec(a, b.current, null, b.type, !1);
    g = Fc(g, b.current);
    c.spfPrefetched = !!g && "prefetch" == g.type;
    c.spfCached = !!g;
    if (g) {
      a = n(Gc, null, a, b, c, g.key, g.response);
      b = window._spf_state = window._spf_state || {};
      var m = parseInt(b.uid, 10) || 0;
      m++;
      b = b.uid = m;
      Ua[b] = a;
      Xa
        ? window.postMessage("spf:" + b, "*")
        : window.setTimeout(n(Ta, null, b), 0);
      return null;
    }
    g = {};
    if ((f = A["request-headers"]))
      for (m in f) (h = f[m]), (g[m] = null == h ? "" : String(h));
    if (b.headers)
      for (m in b.headers)
        (h = b.headers[m]), (g[m] = null == h ? "" : String(h));
    null != b.i && (g["X-SPF-Referer"] = b.i);
    null != b.current && (g["X-SPF-Previous"] = b.current);
    if ((m = A["advanced-header-identifier"]))
      (g["X-SPF-Request"] = m.replace("__type__", b.type)),
        (g.Accept = "application/json");
    m = new Hc();
    f = n(Ic, null, a, b, c, m);
    a = {
      headers: g,
      R: A["request-timeout"],
      N: n(Jc, null, a, m),
      C: n(Kc, null, a, b, c, m),
      M: f,
      O: f,
    };
    b.withCredentials && (a.withCredentials = b.withCredentials);
    A["advanced-response-type-json"] && (a.responseType = "json");
    return "POST" == b.method ? Cc("POST", d, b.H, a) : Cc("GET", d, null, a);
  }
  function Gc(a, b, c, d, e) {
    var f = !1;
    c.responseStart = c.responseEnd = q();
    b.type &&
      0 == b.type.lastIndexOf("navigate", 0) &&
      ((c.navigationStart = c.startTime),
      A["cache-unified"] || ($a(d), (f = !0)));
    b.o &&
      "multipart" == e.type &&
      r(e.parts, function (g) {
        g.timing || (g.timing = {});
        g.timing.spfCached = !!c.spfCached;
        g.timing.spfPrefetched = !!c.spfPrefetched;
        b.o(a, g);
      });
    Lc(a, b, c, e, f);
  }
  function Jc(a, b, c) {
    a = c.getResponseHeader("X-SPF-Response-Type") || "";
    b.j = -1 != a.toLowerCase().indexOf("multipart");
  }
  function Kc(a, b, c, d, e, f, g) {
    if (d.j) {
      f = d.l + f;
      try {
        var h = fc(f, !0, g);
      } catch (k) {
        e.abort();
        b.m && b.m(a, k, e);
        return;
      }
      b.o &&
        r(h.F, function (k) {
          k.timing || (k.timing = {});
          k.timing.spfCached = !!c.spfCached;
          k.timing.spfPrefetched = !!c.spfPrefetched;
          b.o(a, k);
        });
      d.g = d.g.concat(h.F);
      d.l = h.l;
    }
  }
  function Ic(a, b, c, d, e) {
    if (e.timing) for (var f in e.timing) c[f] = e.timing[f];
    if (e.resourceTiming)
      if ("load" == b.type)
        for (var g in e.resourceTiming) c[g] = e.resourceTiming[g];
      else if (
        window.performance &&
        window.performance.timing &&
        ((f = window.performance.timing.navigationStart),
        f + e.resourceTiming.startTime >= c.startTime)
      )
        for (var h in e.resourceTiming)
          (g = e.resourceTiming[h]),
            void 0 !== g &&
              (y(h, "Start") || y(h, "End") || "startTime" == h) &&
              (c[h] = f + Math.round(g));
    "load" != b.type && (c.navigationStart = c.startTime);
    d.g.length && ((d.l = Qa(d.l)), d.l && Kc(a, b, c, d, e, "", !0));
    if ("json" == e.responseType) {
      if (!e.response) {
        b.m && b.m(a, Error("JSON response parsing failed"), e);
        return;
      }
      var k = gc(v(e.response));
    } else
      try {
        k = fc(e.responseText).F;
      } catch (B) {
        b.m && b.m(a, B, e);
        return;
      }
    if (b.o && 1 < k.length)
      for (d = d.g.length; d < k.length; d++)
        (e = k[d]),
          e.timing || (e.timing = {}),
          (e.timing.spfCached = !!c.spfCached),
          (e.timing.spfPrefetched = !!c.spfPrefetched),
          b.o(a, e);
    if (1 < k.length) {
      var m;
      r(k, function (B) {
        B.cacheType && (m = B.cacheType);
      });
      k = { parts: k, type: "multipart" };
      m && (k.cacheType = m);
    } else k = 1 == k.length ? k[0] : {};
    Lc(a, b, c, k, !0);
  }
  function Lc(a, b, c, d, e) {
    if (
      e &&
      "POST" != b.method &&
      (e = Ec(a, b.current, d.cacheType, b.type, !0))
    ) {
      d.cacheKey = e;
      var f = { response: d, type: b.type || "" },
        g = parseInt(A["cache-lifetime"], 10),
        h = parseInt(A["cache-max"], 10);
      0 >= g ||
        0 >= h ||
        ((h = D()),
        (f = { data: f, life: g, time: q(), count: 0 }),
        cb(f),
        (h[e] = f),
        setTimeout(ab, 1e3));
    }
    d.timing = c;
    b.D && b.D(a, d);
  }
  function Ec(a, b, c, d, e) {
    a = N(a);
    var f;
    A["cache-unified"]
      ? (f = a)
      : "navigate-back" == d || "navigate-forward" == d
      ? (f = "history " + a)
      : "navigate" == d
      ? (f = (e ? "history " : "prefetch ") + a)
      : "prefetch" == d && (f = e ? "prefetch " + a : "");
    b && "url" == c
      ? (f += " previous " + b)
      : b && "path" == c && (f += " previous " + xb(b).pathname);
    return f || "";
  }
  function Fc(a, b) {
    var c = [];
    b &&
      (c.push(a + " previous " + b), c.push(a + " previous " + xb(b).pathname));
    c.push(a);
    var d = null;
    Ma(c, function (e) {
      a: {
        var f = D();
        if (e in f) {
          f = f[e];
          if (bb(f)) {
            cb(f);
            f = f.data;
            break a;
          }
          $a(e);
        }
        f = void 0;
      }
      f && (d = { key: e, response: f.response, type: f.type });
      return !!f;
    });
    return d;
  }
  function Hc() {
    this.j = !1;
    this.l = "";
    this.g = [];
  }
  function Mc(a) {
    return hb(a, function (b) {
      return eb(b, A["link-class"]);
    });
  }
  function Nc(a) {
    return hb(a, function (b) {
      return eb(b, A["nolink-class"]);
    });
  }
  function Oc(a, b) {
    return hb(
      a,
      function (c) {
        return c.href && "img" != c.tagName.toLowerCase();
      },
      b
    );
  }
  function Pc(a) {
    if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || 0 < a.button)
      return null;
    var b = Mc(a.target);
    return !b || (A["nolink-class"] && Nc(a.target))
      ? null
      : (a = Oc(a.target, b))
      ? a.href
      : null;
  }
  function Qc(a) {
    return xb(a).origin != xb(window.location.href).origin ? !1 : !0;
  }
  function Rc() {
    if (!x["nav-init"]) return !1;
    var a = parseInt(x["nav-counter"], 10) || 0;
    a++;
    var b = parseInt(A["navigate-limit"], 10);
    b = isNaN(b) ? Infinity : b;
    if (a > b) return !1;
    a = parseInt(x["nav-init-time"], 10);
    a--;
    a = q() - a;
    b = parseInt(A["navigate-lifetime"], 10);
    b = isNaN(b) ? Infinity : b;
    return a > b ? !1 : !0;
  }
  function Sc(a, b) {
    b = b || window.location.href;
    return -1 != a.indexOf("#") && ((a = N(a)), (b = N(b)), a == b) ? !1 : !0;
  }
  function Tc(a) {
    if (!a.defaultPrevented) {
      var b = Pc(a);
      b &&
        ((b = zb(b)),
        Qc(b) &&
          Rc() &&
          p("spfclick", { url: b, target: a.target }) &&
          (Uc(b, {}, new Vc()), a.preventDefault()));
    }
  }
  function Wc(a) {
    var b = Pc(a);
    b &&
      setTimeout(function () {
        Xc(b);
      }, 0);
  }
  function Yc() {
    var a = x["nav-scroll-position"] || null;
    var b = x["nav-scroll-url"] || "";
    a = a && b == window.location.href ? a : null;
    Zc();
    a && window.scroll.apply(null, a);
  }
  function $c(a, b) {
    b = new Vc({
      current: b && b["spf-current"],
      history: !0,
      position: b && b["spf-position"],
      i: b && b["spf-referer"],
      reverse: !(!b || !b["spf-back"]),
    });
    var c = A["reload-identifier"];
    c && (a = yb(a, [c]));
    Qc(a)
      ? Rc()
        ? p("spfhistory", { url: a, referer: b.i, previous: b.current }) &&
          (b.position &&
            (w("nav-scroll-position", [window.pageXOffset, window.pageYOffset]),
            w("nav-scroll-url", window.location.href)),
          Uc(a, {}, b))
        : X(a, "1")
      : X(a, "9");
  }
  function Uc(a, b, c) {
    ad();
    if (Sc(a, c.current))
      if (bd(a, c.i, c.current, b)) {
        w("nav-counter", (parseInt(x["nav-counter"], 10) || 0) + 1);
        cd(a);
        var d = N(a),
          e = "preprocess " + N(d);
        for (f in K) e != f && 0 == f.lastIndexOf("preprocess", 0) && ub(f);
        d = dd()[d];
        w("nav-request", d);
        w("nav-promote", null);
        w("nav-promote-time", null);
        if (d && 4 != d.readyState)
          (d = "preprocess " + N(a)),
            (e = "promote " + N(a)),
            w("nav-promote", a),
            w("nav-promote-time", q()),
            ub(d),
            L(e, !0),
            c.history || ed(a, c.i, n(Y, null, b));
        else {
          d = n(Y, null, b);
          e = n(fd, null, b, c);
          var f = n(gd, null, b, c);
          A["advanced-navigate-persist-timing"] || hd();
          c.type = "navigate";
          c.history && (c.type += c.reverse ? "-back" : "-forward");
          b = Dc(a, {
            method: b.method,
            headers: b.headers,
            o: e,
            m: d,
            D: f,
            H: b.postData,
            type: c.type,
            current: c.current,
            i: c.i,
          });
          w("nav-request", b);
          c.history || ed(a, c.i, d);
        }
      } else X(a, "2");
    else c.history || ed(a, c.i, n(Y, null, b)), id(a, c);
  }
  function id(a, b) {
    if (b.position) Zc(), window.scroll.apply(null, b.position), (b.s = !0);
    else if (((a = z(a, "#")), a[2])) {
      if ((a = document.getElementById(a[2])))
        Zc(), a.scrollIntoView(), (b.s = !0);
    } else b.s || (Zc(), window.scroll(0, 0), (b.s = !0));
  }
  function ed(a, b, c) {
    try {
      jb(null, { "spf-position": [window.pageXOffset, window.pageYOffset] }),
        N(a, !0) != window.location.href && kb(!1, a, { "spf-referer": b });
    } catch (d) {
      ad(), c(a, d);
    }
  }
  function Y(a, b, c, d) {
    w("nav-request", null);
    jd(b, c, a, void 0, d) && X(b, "10", c);
  }
  function fd(a, b, c, d) {
    if (ld(c, d, a))
      if (d.reload) X(c, "5");
      else if (d.redirect) md(a, d.redirect);
      else
        try {
          V(c, d, b, function () {
            nd(c, d, a);
          });
        } catch (e) {
          Y(a, c, e);
        }
    else X(c, "3");
  }
  function gd(a, b, c, d) {
    w("nav-request", null);
    if (x["nav-promote"] == b.h) {
      var e = d.timing || {};
      e.navigationStart = x["nav-promote-time"];
      e.spfPrefetched = !0;
    }
    var f = "multipart" == d.type;
    if (!f) {
      if (!od(c, d, a)) {
        X(c, "4");
        return;
      }
      if (d.reload) {
        X(c, "5");
        return;
      }
      if (d.redirect) {
        md(a, d.redirect);
        return;
      }
    }
    try {
      V(c, f ? {} : d, b, function () {
        var g = d.name || "";
        f &&
          r(d.parts, function (h) {
            g = h.name || g;
          });
        fb(g);
        id(c, b);
        pd(c, d, a);
      });
    } catch (g) {
      Y(a, c, g);
    }
  }
  function md(a, b) {
    try {
      (b += window.location.hash), jb(b, null, !0);
    } catch (c) {
      ad(), Y(a, b, c);
    }
  }
  function ad() {
    var a = x["nav-request"];
    a && (a.abort(), w("nav-request", null));
  }
  function Z(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments);
      c[0] = a;
      c = Ja.apply(null, c);
    }
    return !1 !== c;
  }
  function X(a, b, c) {
    c = c ? c.message : "";
    ad();
    cd();
    var d = b;
    c && (d += " Message: " + c);
    p("spfreload", { url: a, reason: d });
    var e = window.location.href;
    A["experimental-remove-history"] &&
      e == a &&
      (w("history-ignore-pop", !0), window.history.back());
    setTimeout(function () {
      var f = A["reload-identifier"];
      if (f) {
        var g = {};
        g[f] = encodeURIComponent(b);
        f = a;
        var h = z(f, "#");
        f = h[0];
        var k = -1 != f.indexOf("?") ? "&" : "?",
          m;
        for (m in g) (f += k + m), g[m] && (f += "=" + g[m]), (k = "&");
        a = f + h[1] + h[2];
      }
      window.location.href = a;
      Sc(a, e) || window.location.reload();
    }, 0);
  }
  function qd(a, b, c) {
    c.h = c.h || a;
    if (bd(a, void 0, void 0, b, !0)) {
      var d = n(rd, null, !1, b, c),
        e = n(sd, null, !1, b, c),
        f = n(td, null, !1, b, c);
      c.type = "load";
      Dc(a, {
        method: b.method,
        headers: b.headers,
        o: e,
        m: d,
        D: f,
        H: b.postData,
        type: c.type,
        withCredentials: b.withCredentials,
      });
    }
  }
  function Xc(a, b) {
    a = zb(a);
    ud(a, b || {}, new Vc());
  }
  function ud(a, b, c) {
    c.h = c.h || a;
    if (bd(a, void 0, void 0, b, !0)) {
      var d = n(rd, null, !0, b, c),
        e = n(sd, null, !0, b, c),
        f = n(td, null, !0, b, c);
      c.type = "prefetch";
      b = Dc(a, {
        method: b.method,
        headers: b.headers,
        o: e,
        m: d,
        D: f,
        H: b.postData,
        type: c.type,
        current: c.current,
      });
      a = N(a);
      dd()[a] = b;
    }
  }
  function rd(a, b, c, d, e) {
    a && vd(d);
    a && x["nav-promote"] == c.h ? Y(b, d, e) : jd(d, e, b, !0);
  }
  function sd(a, b, c, d, e) {
    if (ld(d, e, b, !0)) {
      if (e.reload) {
        if (!a) return;
        if (x["nav-promote"] == c.h) {
          X(d, "5");
          return;
        }
      }
      if (e.redirect) wd(a, b, c, e.redirect);
      else {
        if (a) {
          var f = n(fd, null, b, c, d, e),
            g = "promote " + N(c.h);
          J(g, f);
          if (x["nav-promote"] == c.h) {
            L(g, !0);
            return;
          }
        }
        (a ? qc : V)(d, e, c, function () {
          nd(d, e, b, !0);
        });
      }
    }
  }
  function td(a, b, c, d, e) {
    var f = "multipart" == e.type;
    if (!f) {
      if (!od(d, e, b, !0)) {
        X(d, "4");
        return;
      }
      if (e.reload) {
        if (!a) return;
        if (x["nav-promote"] == c.h) {
          X(d, "5");
          return;
        }
      }
      if (e.redirect) {
        wd(a, b, c, e.redirect);
        return;
      }
    }
    var g = "promote " + N(c.h);
    if (a) {
      vd(d);
      if (x["nav-promote"] == c.h) {
        J(g, n(gd, null, b, c, d, e));
        L(g, !0);
        return;
      }
      ub(g);
    }
    g = a ? qc : V;
    try {
      g(d, f ? {} : e, c, function () {
        pd(d, e, b, !0);
      });
    } catch (h) {
      rd(a, b, c, d, h);
    }
  }
  function wd(a, b, c, d) {
    a = a ? ud : qd;
    var e = {};
    r(
      "onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),
      function (f) {
        e[f] = b[f];
      }
    );
    a(d, e, c);
  }
  function jd(a, b, c, d, e) {
    a = { url: a, err: b, xhr: e };
    (c = Z((c || {}).onError, a)) && !d && (c = p("spferror", a));
    return c;
  }
  function bd(a, b, c, d, e) {
    a = { url: a, referer: b, previous: c };
    (d = Z((d || {}).onRequest, a)) && !e && (d = p("spfrequest", a));
    return d;
  }
  function ld(a, b, c, d) {
    a = { url: a, part: b };
    (c = Z((c || {}).onPartProcess, a)) && !d && (c = p("spfpartprocess", a));
    return c;
  }
  function nd(a, b, c, d) {
    a = { url: a, part: b };
    Z((c || {}).onPartDone, a) && !d && p("spfpartdone", a);
  }
  function od(a, b, c, d) {
    a = { url: a, response: b };
    (c = Z((c || {}).onProcess, a)) && !d && (c = p("spfprocess", a));
    return c;
  }
  function pd(a, b, c, d) {
    a = { url: a, response: b };
    Z((c || {}).onDone, a) && !d && p("spfdone", a);
  }
  function vd(a) {
    a = N(a);
    var b = dd(),
      c = b[a];
    c && c.abort();
    delete b[a];
  }
  function cd(a) {
    var b = dd();
    a = a && N(a);
    for (var c in b) a != c && vd(c);
  }
  var hd,
    xd =
      window.performance &&
      (window.performance.clearResourceTimings ||
        window.performance.webkitClearResourceTimings ||
        window.performance.mozClearResourceTimings ||
        window.performance.msClearResourceTimings ||
        window.performance.oClearResourceTimings);
  hd = xd ? n(xd, window.performance) : Ka;
  function dd() {
    return "nav-prefetches" in x
      ? x["nav-prefetches"]
      : w("nav-prefetches", {});
  }
  function Zc() {
    w("nav-scroll-position", null);
    w("nav-scroll-url", null);
  }
  function Vc(a) {
    a = a || {};
    this.current = a.history && a.current ? a.current : window.location.href;
    this.history = !!a.history;
    this.h = a.h || "";
    this.position = a.position || null;
    this.i = void 0 != a.i ? a.i : window.location.href;
    this.reverse = !!a.reverse;
    this.s = !!a.s;
    this.type = a.type || "";
  }
  function yd() {
    Jb("js");
    Jb("css");
    "complete" == document.readyState &&
      (document.removeEventListener
        ? document.removeEventListener("DOMContentLoaded", yd, !1)
        : document.detachEvent &&
          document.detachEvent("onreadystatechange", yd));
  }
  document.addEventListener
    ? document.addEventListener("DOMContentLoaded", yd, !1)
    : document.attachEvent && document.attachEvent("onreadystatechange", yd);
  yd();
  var zd = {
      init: function (a) {
        var b = !(
          "function" != typeof window.history.pushState &&
          !mb().contentWindow.history.pushState
        );
        a = a || {};
        for (var c in Za) A[c] = c in a ? a[c] : Za[c];
        for (c in a) c in Za || (A[c] = a[c]);
        if (b) {
          c = jd;
          if (!x["history-init"] && window.addEventListener) {
            a = window.location.href;
            window.addEventListener("popstate", nb, !1);
            w("history-init", !0);
            w("history-callback", $c);
            w("history-error-callback", c);
            w("history-listener", nb);
            w("history-url", a);
            w("history-timestamp", q());
            var d = { "spf-referer": document.referrer };
            try {
              jb(a, d);
            } catch (e) {
              c && c(a, e);
            }
          }
          !x["nav-init"] &&
            document.addEventListener &&
            (w("nav-init", !0),
            w("nav-init-time", q()),
            w("nav-counter", 0),
            document.addEventListener("click", Tc, !1),
            w("nav-listener", Tc),
            !A["experimental-prefetch-mousedown"] ||
              "ontouchstart" in window ||
              0 < window.navigator.maxTouchPoints ||
              0 < window.navigator.msMaxTouchPoints ||
              (document.addEventListener("mousedown", Wc, !1),
              w("nav-mousedown-listener", Wc)),
            document.addEventListener("scroll", Yc, !1),
            w("nav-scroll-listener", Yc));
        }
        return b;
      },
      dispose: function () {
        "undefined" != typeof History &&
          History.prototype.pushState &&
          (ad(),
          x["nav-init"] &&
            (document.removeEventListener &&
              (document.removeEventListener("click", x["nav-listener"], !1),
              document.removeEventListener(
                "mousedown",
                x["nav-mousedown-listener"],
                !1
              ),
              document.removeEventListener(
                "scroll",
                x["nav-scroll-listener"],
                !1
              )),
            w("nav-listener", null),
            w("nav-mousedown-listener", null),
            w("nav-scroll-listener", null),
            w("nav-scroll-position", null),
            w("nav-scroll-url", null),
            w("nav-init", !1),
            w("nav-init-time", null),
            w("nav-counter", null)),
          x["history-init"] &&
            (window.removeEventListener &&
              window.removeEventListener("popstate", x["history-listener"], !1),
            w("history-init", !1),
            w("history-callback", null),
            w("history-error-callback", null),
            w("history-listener", null),
            w("history-url", null),
            w("history-timestamp", 0)));
        for (var a in A) delete A[a];
      },
      navigate: function (a, b) {
        a &&
          ((a = zb(a)),
          Qc(a) ? (Rc() ? Uc(a, b || {}, new Vc()) : X(a, "1")) : X(a, "9"));
      },
      load: function (a, b) {
        a = zb(a);
        qd(a, b || {}, new Vc());
      },
      prefetch: Xc,
      process: function (a, b) {
        function c(f, g, h, k) {
          f == g && b && b(k);
        }
        var d = window.location.href;
        if ("multipart" == a.type) {
          a = a.parts;
          var e = a.length - 1;
          r(a, function (f, g) {
            V(d, f, null, n(c, null, g, e));
          });
        } else V(d, a, null, n(c, null, 0, 0));
      },
    },
    Ad = {
      cache: {
        remove: $a,
        clear: function () {
          D({});
        },
      },
      script: {
        load: Sb,
        get: Ub,
        ready: Wb,
        done: function (a) {
          Q[P("js", a)] = "";
          Cb("js");
        },
        require: Xb,
        declare: function (a, b) {
          if (a) {
            for (var c in a) U[c] = a[c];
            if (b) for (c in b) Yb[c] = b[c];
          }
        },
        path: function (a) {
          w("rsrc-p-js", a);
        },
        unload: Tb,
        ignore: function (a, b) {
          a = v(a);
          a = P("js", a.sort().join("|"));
          pb(a, b);
        },
        unrequire: Zb,
        prefetch: Vb,
      },
      style: {
        load: cc,
        get: dc,
        unload: function (a) {
          Fb("css", a);
        },
        path: function (a) {
          w("rsrc-p-css", a);
        },
        prefetch: ec,
      },
    },
    l = this;
  l.spf = l.spf || {};
  var Bd = l.spf,
    Cd;
  for (Cd in zd) Bd[Cd] = zd[Cd];
  for (var Dd in Ad)
    for (var Ed in Ad[Dd]) (Bd[Dd] = Bd[Dd] || {}), (Bd[Dd][Ed] = Ad[Dd][Ed]);
  p("spfready");
}.call(this));
