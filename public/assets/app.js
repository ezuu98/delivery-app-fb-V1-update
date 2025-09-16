function Yc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var No = { exports: {} }, yl = {}, jo = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr = Symbol.for("react.element"), Xc = Symbol.for("react.portal"), Jc = Symbol.for("react.fragment"), Zc = Symbol.for("react.strict_mode"), qc = Symbol.for("react.profiler"), bc = Symbol.for("react.provider"), ed = Symbol.for("react.context"), td = Symbol.for("react.forward_ref"), nd = Symbol.for("react.suspense"), rd = Symbol.for("react.memo"), ld = Symbol.for("react.lazy"), la = Symbol.iterator;
function id(e) {
  return e === null || typeof e != "object" ? null : (e = la && e[la] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Eo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Co = Object.assign, _o = {};
function wn(e, t, n) {
  this.props = e, this.context = t, this.refs = _o, this.updater = n || Eo;
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Po() {
}
Po.prototype = wn.prototype;
function is(e, t, n) {
  this.props = e, this.context = t, this.refs = _o, this.updater = n || Eo;
}
var ss = is.prototype = new Po();
ss.constructor = is;
Co(ss, wn.prototype);
ss.isPureReactComponent = !0;
var ia = Array.isArray, Lo = Object.prototype.hasOwnProperty, as = { current: null }, Ro = { key: !0, ref: !0, __self: !0, __source: !0 };
function To(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Lo.call(t, r) && !Ro.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: cr, type: e, key: i, ref: s, props: l, _owner: as.current };
}
function sd(e, t) {
  return { $$typeof: cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function os(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function ad(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var sa = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ad("" + e.key) : t.toString(36);
}
function Mr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case cr:
        case Xc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Dl(s, 0) : r, ia(l) ? (n = "", e != null && (n = e.replace(sa, "$&/") + "/"), Mr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (os(l) && (l = sd(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(sa, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ia(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Dl(i, o);
    s += Mr(i, t, n, u, l);
  }
  else if (u = id(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Dl(i, o++), s += Mr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Mr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function od(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null }, Dr = { transition: null }, ud = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Dr, ReactCurrentOwner: as };
function zo() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: yr, forEach: function(e, t, n) {
  yr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!os(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = wn;
M.Fragment = Jc;
M.Profiler = qc;
M.PureComponent = is;
M.StrictMode = Zc;
M.Suspense = nd;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ud;
M.act = zo;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Co({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = as.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Lo.call(t, u) && !Ro.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: ed, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: bc, _context: e }, e.Consumer = e;
};
M.createElement = To;
M.createFactory = function(e) {
  var t = To.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: td, render: e };
};
M.isValidElement = os;
M.lazy = function(e) {
  return { $$typeof: ld, _payload: { _status: -1, _result: e }, _init: od };
};
M.memo = function(e, t) {
  return { $$typeof: rd, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = Dr.transition;
  Dr.transition = {};
  try {
    e();
  } finally {
    Dr.transition = t;
  }
};
M.unstable_act = zo;
M.useCallback = function(e, t) {
  return pe.current.useCallback(e, t);
};
M.useContext = function(e) {
  return pe.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return pe.current.useEffect(e, t);
};
M.useId = function() {
  return pe.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return pe.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return pe.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return pe.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return pe.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return pe.current.useRef(e);
};
M.useState = function(e) {
  return pe.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return pe.current.useTransition();
};
M.version = "18.3.1";
jo.exports = M;
var g = jo.exports;
const cd = /* @__PURE__ */ Gc(g), dd = /* @__PURE__ */ Yc({
  __proto__: null,
  default: cd
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd = g, pd = Symbol.for("react.element"), hd = Symbol.for("react.fragment"), md = Object.prototype.hasOwnProperty, vd = fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oo(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) md.call(t, r) && !gd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: pd, type: e, key: i, ref: s, props: l, _owner: vd.current };
}
yl.Fragment = hd;
yl.jsx = Oo;
yl.jsxs = Oo;
No.exports = yl;
var a = No.exports, Io = { exports: {} }, Ce = {}, Mo = { exports: {} }, Do = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(L, T) {
    var I = L.length;
    L.push(T);
    e: for (; 0 < I; ) {
      var X = I - 1 >>> 1, te = L[X];
      if (0 < l(te, T)) L[X] = T, L[I] = te, I = X;
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var T = L[0], I = L.pop();
    if (I !== T) {
      L[0] = I;
      e: for (var X = 0, te = L.length, vr = te >>> 1; X < vr; ) {
        var Lt = 2 * (X + 1) - 1, Ml = L[Lt], Rt = Lt + 1, gr = L[Rt];
        if (0 > l(Ml, I)) Rt < te && 0 > l(gr, Ml) ? (L[X] = gr, L[Rt] = I, X = Rt) : (L[X] = Ml, L[Lt] = I, X = Lt);
        else if (Rt < te && 0 > l(gr, I)) L[X] = gr, L[Rt] = I, X = Rt;
        else break e;
      }
    }
    return T;
  }
  function l(L, T) {
    var I = L.sortIndex - T.sortIndex;
    return I !== 0 ? I : L.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, o = s.now();
    e.unstable_now = function() {
      return s.now() - o;
    };
  }
  var u = [], c = [], p = 1, f = null, v = 3, w = !1, k = !1, N = !1, _ = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= L) r(c), T.sortIndex = T.expirationTime, t(u, T);
      else break;
      T = n(c);
    }
  }
  function y(L) {
    if (N = !1, m(L), !k) if (n(u) !== null) k = !0, Pe(x);
    else {
      var T = n(c);
      T !== null && ve(y, T.startTime - L);
    }
  }
  function x(L, T) {
    k = !1, N && (N = !1, h(P), P = -1), w = !0;
    var I = v;
    try {
      for (m(T), f = n(u); f !== null && (!(f.expirationTime > T) || L && !F()); ) {
        var X = f.callback;
        if (typeof X == "function") {
          f.callback = null, v = f.priorityLevel;
          var te = X(f.expirationTime <= T);
          T = e.unstable_now(), typeof te == "function" ? f.callback = te : f === n(u) && r(u), m(T);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var vr = !0;
      else {
        var Lt = n(c);
        Lt !== null && ve(y, Lt.startTime - T), vr = !1;
      }
      return vr;
    } finally {
      f = null, v = I, w = !1;
    }
  }
  var j = !1, S = null, P = -1, O = 5, z = -1;
  function F() {
    return !(e.unstable_now() - z < O);
  }
  function C() {
    if (S !== null) {
      var L = e.unstable_now();
      z = L;
      var T = !0;
      try {
        T = S(!0, L);
      } finally {
        T ? H() : (j = !1, S = null);
      }
    } else j = !1;
  }
  var H;
  if (typeof d == "function") H = function() {
    d(C);
  };
  else if (typeof MessageChannel < "u") {
    var U = new MessageChannel(), me = U.port2;
    U.port1.onmessage = C, H = function() {
      me.postMessage(null);
    };
  } else H = function() {
    _(C, 0);
  };
  function Pe(L) {
    S = L, j || (j = !0, H());
  }
  function ve(L, T) {
    P = _(function() {
      L(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    k || w || (k = !0, Pe(x));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(L) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = v;
    }
    var I = v;
    v = T;
    try {
      return L();
    } finally {
      v = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, T) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var I = v;
    v = L;
    try {
      return T();
    } finally {
      v = I;
    }
  }, e.unstable_scheduleCallback = function(L, T, I) {
    var X = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? X + I : X) : I = X, L) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = I + te, L = { id: p++, callback: T, priorityLevel: L, startTime: I, expirationTime: te, sortIndex: -1 }, I > X ? (L.sortIndex = I, t(c, L), n(u) === null && L === n(c) && (N ? (h(P), P = -1) : N = !0, ve(y, I - X))) : (L.sortIndex = te, t(u, L), k || w || (k = !0, Pe(x))), L;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(L) {
    var T = v;
    return function() {
      var I = v;
      v = T;
      try {
        return L.apply(this, arguments);
      } finally {
        v = I;
      }
    };
  };
})(Do);
Mo.exports = Do;
var yd = Mo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd = g, Ee = yd;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Fo = /* @__PURE__ */ new Set(), Qn = {};
function Wt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) Fo.add(t[e]);
}
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ci = Object.prototype.hasOwnProperty, xd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, aa = {}, oa = {};
function Sd(e) {
  return ci.call(oa, e) ? !0 : ci.call(aa, e) ? !1 : xd.test(e) ? oa[e] = !0 : (aa[e] = !0, !1);
}
function kd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nd(e, t, n, r) {
  if (t === null || typeof t > "u" || kd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function he(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  se[e] = new he(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  se[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  se[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  se[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  se[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  se[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  se[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  se[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  se[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var us = /[\-:]([a-z])/g;
function cs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    us,
    cs
  );
  se[t] = new he(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(us, cs);
  se[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(us, cs);
  se[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ds(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Nd(t, n, l, r) && (n = null), r || l === null ? Sd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wr = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), fs = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), Ao = Symbol.for("react.provider"), Uo = Symbol.for("react.context"), ps = Symbol.for("react.forward_ref"), fi = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), hs = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), $o = Symbol.for("react.offscreen"), ua = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = ua && e[ua] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Fl;
function zn(e) {
  if (Fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fl = t && t[1] || "";
  }
  return `
` + Fl + e;
}
var Al = !1;
function Ul(e, t) {
  if (!e || Al) return "";
  Al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, o = i.length - 1; 1 <= s && 0 <= o && l[s] !== i[o]; ) o--;
      for (; 1 <= s && 0 <= o; s--, o--) if (l[s] !== i[o]) {
        if (s !== 1 || o !== 1)
          do
            if (s--, o--, 0 > o || l[s] !== i[o]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= o);
        break;
      }
    }
  } finally {
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function jd(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ul(e.type, !1), e;
    case 11:
      return e = Ul(e.type.render, !1), e;
    case 1:
      return e = Ul(e.type, !0), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Yt:
      return "Portal";
    case di:
      return "Profiler";
    case fs:
      return "StrictMode";
    case fi:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Uo:
      return (e.displayName || "Context") + ".Consumer";
    case Ao:
      return (e._context.displayName || "Context") + ".Provider";
    case ps:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case hs:
      return t = e.displayName || null, t !== null ? t : hi(e.type) || "Memo";
    case st:
      t = e._payload, e = e._init;
      try {
        return hi(e(t));
      } catch {
      }
  }
  return null;
}
function Ed(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hi(t);
    case 8:
      return t === fs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cd(e) {
  var t = Bo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Cd(e));
}
function Vo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Bo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Yr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Nt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Wo(e, t) {
  t = t.checked, t != null && ds(e, "checked", t, !1);
}
function vi(e, t) {
  Wo(e, t);
  var n = Nt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, Nt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var On = Array.isArray;
function sn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (On(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function Ho(e, t) {
  var n = Nt(t.value), r = Nt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Qo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, Ko = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, _d = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function(e) {
  _d.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Dn[t] = Dn[e];
  });
});
function Yo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dn.hasOwnProperty(e) && Dn[e] ? ("" + t).trim() : t + "px";
}
function Go(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Yo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Pd = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xi(e, t) {
  if (t) {
    if (Pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Si(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ki = null;
function ms(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ni = null, an = null, on = null;
function ha(e) {
  if (e = pr(e)) {
    if (typeof Ni != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Nl(t), Ni(e.stateNode, e.type, t));
  }
}
function Xo(e) {
  an ? on ? on.push(e) : on = [e] : an = e;
}
function Jo() {
  if (an) {
    var e = an, t = on;
    if (on = an = null, ha(e), t) for (e = 0; e < t.length; e++) ha(t[e]);
  }
}
function Zo(e, t) {
  return e(t);
}
function qo() {
}
var $l = !1;
function bo(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return Zo(e, t, n);
  } finally {
    $l = !1, (an !== null || on !== null) && (qo(), Jo());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ji = !1;
if (be) try {
  var En = {};
  Object.defineProperty(En, "passive", { get: function() {
    ji = !0;
  } }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
} catch {
  ji = !1;
}
function Ld(e, t, n, r, l, i, s, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Fn = !1, Gr = null, Xr = !1, Ei = null, Rd = { onError: function(e) {
  Fn = !0, Gr = e;
} };
function Td(e, t, n, r, l, i, s, o, u) {
  Fn = !1, Gr = null, Ld.apply(Rd, arguments);
}
function zd(e, t, n, r, l, i, s, o, u) {
  if (Td.apply(this, arguments), Fn) {
    if (Fn) {
      var c = Gr;
      Fn = !1, Gr = null;
    } else throw Error(E(198));
    Xr || (Xr = !0, Ei = c);
  }
}
function Ht(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function eu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ma(e) {
  if (Ht(e) !== e) throw Error(E(188));
}
function Od(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ht(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ma(l), e;
        if (i === r) return ma(l), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var s = !1, o = l.child; o; ) {
        if (o === n) {
          s = !0, n = l, r = i;
          break;
        }
        if (o === r) {
          s = !0, r = l, n = i;
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (o === r) {
            s = !0, r = i, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function tu(e) {
  return e = Od(e), e !== null ? nu(e) : null;
}
function nu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ru = Ee.unstable_scheduleCallback, va = Ee.unstable_cancelCallback, Id = Ee.unstable_shouldYield, Md = Ee.unstable_requestPaint, J = Ee.unstable_now, Dd = Ee.unstable_getCurrentPriorityLevel, vs = Ee.unstable_ImmediatePriority, lu = Ee.unstable_UserBlockingPriority, Jr = Ee.unstable_NormalPriority, Fd = Ee.unstable_LowPriority, iu = Ee.unstable_IdlePriority, wl = null, Qe = null;
function Ad(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
    Qe.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ue = Math.clz32 ? Math.clz32 : Bd, Ud = Math.log, $d = Math.LN2;
function Bd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ud(e) / $d | 0) | 0;
}
var kr = 64, Nr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? r = In(o) : (i &= s, i !== 0 && (r = In(i)));
  } else s = n & ~l, s !== 0 ? r = In(s) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ue(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Vd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Ue(i), o = 1 << s, u = l[s];
    u === -1 ? (!(o & n) || o & r) && (l[s] = Vd(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ci(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function su() {
  var e = kr;
  return kr <<= 1, !(kr & 4194240) && (kr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ue(t), e[t] = n;
}
function Hd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ue(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function gs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var A = 0;
function au(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ou, ys, uu, cu, du, _i = !1, jr = [], ht = null, mt = null, vt = null, Gn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), ot = [], Qd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ga(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = pr(t), t !== null && ys(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Kd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = Cn(ht, e, t, n, r, l), !0;
    case "dragenter":
      return mt = Cn(mt, e, t, n, r, l), !0;
    case "mouseover":
      return vt = Cn(vt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Gn.set(i, Cn(Gn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Xn.set(i, Cn(Xn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function fu(e) {
  var t = Ot(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = eu(n), t !== null) {
          e.blockedOn = t, du(e.priority, function() {
            uu(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ki = r, n.target.dispatchEvent(r), ki = null;
    } else return t = pr(n), t !== null && ys(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ya(e, t, n) {
  Fr(e) && n.delete(t);
}
function Yd() {
  _i = !1, ht !== null && Fr(ht) && (ht = null), mt !== null && Fr(mt) && (mt = null), vt !== null && Fr(vt) && (vt = null), Gn.forEach(ya), Xn.forEach(ya);
}
function _n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, _i || (_i = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Yd)));
}
function Jn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < jr.length) {
    _n(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && _n(ht, e), mt !== null && _n(mt, e), vt !== null && _n(vt, e), Gn.forEach(t), Xn.forEach(t), n = 0; n < ot.length; n++) r = ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ot.length && (n = ot[0], n.blockedOn === null); ) fu(n), n.blockedOn === null && ot.shift();
}
var un = rt.ReactCurrentBatchConfig, qr = !0;
function Gd(e, t, n, r) {
  var l = A, i = un.transition;
  un.transition = null;
  try {
    A = 1, ws(e, t, n, r);
  } finally {
    A = l, un.transition = i;
  }
}
function Xd(e, t, n, r) {
  var l = A, i = un.transition;
  un.transition = null;
  try {
    A = 4, ws(e, t, n, r);
  } finally {
    A = l, un.transition = i;
  }
}
function ws(e, t, n, r) {
  if (qr) {
    var l = Pi(e, t, n, r);
    if (l === null) Zl(e, t, r, br, n), ga(e, r);
    else if (Kd(l, e, t, n, r)) r.stopPropagation();
    else if (ga(e, r), t & 4 && -1 < Qd.indexOf(e)) {
      for (; l !== null; ) {
        var i = pr(l);
        if (i !== null && ou(i), i = Pi(e, t, n, r), i === null && Zl(e, t, r, br, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var br = null;
function Pi(e, t, n, r) {
  if (br = null, e = ms(r), e = Ot(e), e !== null) if (t = Ht(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = eu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return br = e, null;
}
function pu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dd()) {
        case vs:
          return 1;
        case lu:
          return 4;
        case Jr:
        case Fd:
          return 16;
        case iu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null, xs = null, Ar = null;
function hu() {
  if (Ar) return Ar;
  var e, t = xs, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ur(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Er() {
  return !0;
}
function wa() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Er : wa, this.isPropagationStopped = wa, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
  }, persist: function() {
  }, isPersistent: Er }), t;
}
var xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ss = _e(xn), fr = Y({}, xn, { view: 0, detail: 0 }), Jd = _e(fr), Vl, Wl, Pn, xl = Y({}, fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ks, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (Vl = e.screenX - Pn.screenX, Wl = e.screenY - Pn.screenY) : Wl = Vl = 0, Pn = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wl;
} }), xa = _e(xl), Zd = Y({}, xl, { dataTransfer: 0 }), qd = _e(Zd), bd = Y({}, fr, { relatedTarget: 0 }), Hl = _e(bd), ef = Y({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tf = _e(ef), nf = Y({}, xn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rf = _e(nf), lf = Y({}, xn, { data: 0 }), Sa = _e(lf), sf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, af = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, of = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function uf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = of[e]) ? !!t[e] : !1;
}
function ks() {
  return uf;
}
var cf = Y({}, fr, { key: function(e) {
  if (e.key) {
    var t = sf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? af[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ks, charCode: function(e) {
  return e.type === "keypress" ? Ur(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), df = _e(cf), ff = Y({}, xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ka = _e(ff), pf = Y({}, fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ks }), hf = _e(pf), mf = Y({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vf = _e(mf), gf = Y({}, xl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yf = _e(gf), wf = [9, 13, 27, 32], Ns = be && "CompositionEvent" in window, An = null;
be && "documentMode" in document && (An = document.documentMode);
var xf = be && "TextEvent" in window && !An, mu = be && (!Ns || An && 8 < An && 11 >= An), Na = " ", ja = !1;
function vu(e, t) {
  switch (e) {
    case "keyup":
      return wf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function Sf(e, t) {
  switch (e) {
    case "compositionend":
      return gu(t);
    case "keypress":
      return t.which !== 32 ? null : (ja = !0, Na);
    case "textInput":
      return e = t.data, e === Na && ja ? null : e;
    default:
      return null;
  }
}
function kf(e, t) {
  if (Xt) return e === "compositionend" || !Ns && vu(e, t) ? (e = hu(), Ar = xs = ct = null, Xt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return mu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ea(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nf[e.type] : t === "textarea";
}
function yu(e, t, n, r) {
  Xo(r), t = el(t, "onChange"), 0 < t.length && (n = new Ss("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Un = null, Zn = null;
function jf(e) {
  Lu(e, 0);
}
function Sl(e) {
  var t = qt(e);
  if (Vo(t)) return e;
}
function Ef(e, t) {
  if (e === "change") return t;
}
var wu = !1;
if (be) {
  var Ql;
  if (be) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var Ca = document.createElement("div");
      Ca.setAttribute("oninput", "return;"), Kl = typeof Ca.oninput == "function";
    }
    Ql = Kl;
  } else Ql = !1;
  wu = Ql && (!document.documentMode || 9 < document.documentMode);
}
function _a() {
  Un && (Un.detachEvent("onpropertychange", xu), Zn = Un = null);
}
function xu(e) {
  if (e.propertyName === "value" && Sl(Zn)) {
    var t = [];
    yu(t, Zn, e, ms(e)), bo(jf, t);
  }
}
function Cf(e, t, n) {
  e === "focusin" ? (_a(), Un = t, Zn = n, Un.attachEvent("onpropertychange", xu)) : e === "focusout" && _a();
}
function _f(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(Zn);
}
function Pf(e, t) {
  if (e === "click") return Sl(t);
}
function Lf(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Rf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : Rf;
function qn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Pa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pa(n);
  }
}
function Su(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Su(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ku() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Tf(e) {
  var t = ku(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Su(n.ownerDocument.documentElement, n)) {
    if (r !== null && js(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = La(n, i);
        var s = La(
          n,
          r
        );
        l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var zf = be && "documentMode" in document && 11 >= document.documentMode, Jt = null, Li = null, $n = null, Ri = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ri || Jt == null || Jt !== Yr(r) || (r = Jt, "selectionStart" in r && js(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && qn($n, r) || ($n = r, r = el(Li, "onSelect"), 0 < r.length && (t = new Ss("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jt)));
}
function Cr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zt = { animationend: Cr("Animation", "AnimationEnd"), animationiteration: Cr("Animation", "AnimationIteration"), animationstart: Cr("Animation", "AnimationStart"), transitionend: Cr("Transition", "TransitionEnd") }, Yl = {}, Nu = {};
be && (Nu = document.createElement("div").style, "AnimationEvent" in window || (delete Zt.animationend.animation, delete Zt.animationiteration.animation, delete Zt.animationstart.animation), "TransitionEvent" in window || delete Zt.transitionend.transition);
function kl(e) {
  if (Yl[e]) return Yl[e];
  if (!Zt[e]) return e;
  var t = Zt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nu) return Yl[e] = t[n];
  return e;
}
var ju = kl("animationend"), Eu = kl("animationiteration"), Cu = kl("animationstart"), _u = kl("transitionend"), Pu = /* @__PURE__ */ new Map(), Ta = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Et(e, t) {
  Pu.set(e, t), Wt(t, [e]);
}
for (var Gl = 0; Gl < Ta.length; Gl++) {
  var Xl = Ta[Gl], Of = Xl.toLowerCase(), If = Xl[0].toUpperCase() + Xl.slice(1);
  Et(Of, "on" + If);
}
Et(ju, "onAnimationEnd");
Et(Eu, "onAnimationIteration");
Et(Cu, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(_u, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function za(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, zd(r, t, void 0, e), e.currentTarget = null;
}
function Lu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var o = r[s], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        za(l, o, c), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (o = r[s], u = o.instance, c = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        za(l, o, c), i = u;
      }
    }
  }
  if (Xr) throw e = Ei, Xr = !1, Ei = null, e;
}
function B(e, t) {
  var n = t[Mi];
  n === void 0 && (n = t[Mi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ru(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ru(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function bn(e) {
  if (!e[_r]) {
    e[_r] = !0, Fo.forEach(function(n) {
      n !== "selectionchange" && (Mf.has(n) || Jl(n, !1, e), Jl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Jl("selectionchange", !1, t));
  }
}
function Ru(e, t, n, r) {
  switch (pu(t)) {
    case 1:
      var l = Gd;
      break;
    case 4:
      l = Xd;
      break;
    default:
      l = ws;
  }
  n = l.bind(null, t, n, e), l = void 0, !ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; o !== null; ) {
        if (s = Ot(o), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  bo(function() {
    var c = i, p = ms(n), f = [];
    e: {
      var v = Pu.get(e);
      if (v !== void 0) {
        var w = Ss, k = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = df;
            break;
          case "focusin":
            k = "focus", w = Hl;
            break;
          case "focusout":
            k = "blur", w = Hl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Hl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = xa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = qd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = hf;
            break;
          case ju:
          case Eu:
          case Cu:
            w = tf;
            break;
          case _u:
            w = vf;
            break;
          case "scroll":
            w = Jd;
            break;
          case "wheel":
            w = yf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = rf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ka;
        }
        var N = (t & 4) !== 0, _ = !N && e === "scroll", h = N ? v !== null ? v + "Capture" : null : v;
        N = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var y = m.stateNode;
          if (m.tag === 5 && y !== null && (m = y, h !== null && (y = Yn(d, h), y != null && N.push(er(d, y, m)))), _) break;
          d = d.return;
        }
        0 < N.length && (v = new w(v, k, null, n, p), f.push({ event: v, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", v && n !== ki && (k = n.relatedTarget || n.fromElement) && (Ot(k) || k[et])) break e;
        if ((w || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = c, k = k ? Ot(k) : null, k !== null && (_ = Ht(k), k !== _ || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = c), w !== k)) {
          if (N = xa, y = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (N = ka, y = "onPointerLeave", h = "onPointerEnter", d = "pointer"), _ = w == null ? v : qt(w), m = k == null ? v : qt(k), v = new N(y, d + "leave", w, n, p), v.target = _, v.relatedTarget = m, y = null, Ot(p) === c && (N = new N(h, d + "enter", k, n, p), N.target = m, N.relatedTarget = _, y = N), _ = y, w && k) t: {
            for (N = w, h = k, d = 0, m = N; m; m = Qt(m)) d++;
            for (m = 0, y = h; y; y = Qt(y)) m++;
            for (; 0 < d - m; ) N = Qt(N), d--;
            for (; 0 < m - d; ) h = Qt(h), m--;
            for (; d--; ) {
              if (N === h || h !== null && N === h.alternate) break t;
              N = Qt(N), h = Qt(h);
            }
            N = null;
          }
          else N = null;
          w !== null && Oa(f, v, w, N, !1), k !== null && _ !== null && Oa(f, _, k, N, !0);
        }
      }
      e: {
        if (v = c ? qt(c) : window, w = v.nodeName && v.nodeName.toLowerCase(), w === "select" || w === "input" && v.type === "file") var x = Ef;
        else if (Ea(v)) if (wu) x = Lf;
        else {
          x = _f;
          var j = Cf;
        }
        else (w = v.nodeName) && w.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (x = Pf);
        if (x && (x = x(e, c))) {
          yu(f, x, n, p);
          break e;
        }
        j && j(e, v, c), e === "focusout" && (j = v._wrapperState) && j.controlled && v.type === "number" && gi(v, "number", v.value);
      }
      switch (j = c ? qt(c) : window, e) {
        case "focusin":
          (Ea(j) || j.contentEditable === "true") && (Jt = j, Li = c, $n = null);
          break;
        case "focusout":
          $n = Li = Jt = null;
          break;
        case "mousedown":
          Ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ri = !1, Ra(f, n, p);
          break;
        case "selectionchange":
          if (zf) break;
        case "keydown":
        case "keyup":
          Ra(f, n, p);
      }
      var S;
      if (Ns) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Xt ? vu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (mu && n.locale !== "ko" && (Xt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Xt && (S = hu()) : (ct = p, xs = "value" in ct ? ct.value : ct.textContent, Xt = !0)), j = el(c, P), 0 < j.length && (P = new Sa(P, e, null, n, p), f.push({ event: P, listeners: j }), S ? P.data = S : (S = gu(n), S !== null && (P.data = S)))), (S = xf ? Sf(e, n) : kf(e, n)) && (c = el(c, "onBeforeInput"), 0 < c.length && (p = new Sa("onBeforeInput", "beforeinput", null, n, p), f.push({ event: p, listeners: c }), p.data = S));
    }
    Lu(f, t);
  });
}
function er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Yn(e, n), i != null && r.unshift(er(e, i, l)), i = Yn(e, t), i != null && r.push(er(e, i, l))), e = e.return;
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Oa(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = Yn(n, i), u != null && s.unshift(er(n, u, o))) : l || (u = Yn(n, i), u != null && s.push(er(n, u, o)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Df = /\r\n?/g, Ff = /\u0000|\uFFFD/g;
function Ia(e) {
  return (typeof e == "string" ? e : "" + e).replace(Df, `
`).replace(Ff, "");
}
function Pr(e, t, n) {
  if (t = Ia(t), Ia(e) !== t && n) throw Error(E(425));
}
function tl() {
}
var Ti = null, zi = null;
function Oi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ii = typeof setTimeout == "function" ? setTimeout : void 0, Af = typeof clearTimeout == "function" ? clearTimeout : void 0, Ma = typeof Promise == "function" ? Promise : void 0, Uf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ma < "u" ? function(e) {
  return Ma.resolve(null).then(e).catch($f);
} : Ii;
function $f(e) {
  setTimeout(function() {
    throw e;
  });
}
function ql(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Jn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Jn(t);
}
function gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Da(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2), He = "__reactFiber$" + Sn, tr = "__reactProps$" + Sn, et = "__reactContainer$" + Sn, Mi = "__reactEvents$" + Sn, Bf = "__reactListeners$" + Sn, Vf = "__reactHandles$" + Sn;
function Ot(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[et] || n[He]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Da(e); e !== null; ) {
        if (n = e[He]) return n;
        e = Da(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function pr(e) {
  return e = e[He] || e[et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Nl(e) {
  return e[tr] || null;
}
var Di = [], bt = -1;
function Ct(e) {
  return { current: e };
}
function V(e) {
  0 > bt || (e.current = Di[bt], Di[bt] = null, bt--);
}
function $(e, t) {
  bt++, Di[bt] = e.current, e.current = t;
}
var jt = {}, ce = Ct(jt), we = Ct(!1), At = jt;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function xe(e) {
  return e = e.childContextTypes, e != null;
}
function nl() {
  V(we), V(ce);
}
function Fa(e, t, n) {
  if (ce.current !== jt) throw Error(E(168));
  $(ce, t), $(we, n);
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, Ed(e) || "Unknown", l));
  return Y({}, n, r);
}
function rl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jt, At = ce.current, $(ce, e), $(we, we.current), !0;
}
function Aa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = Tu(e, t, At), r.__reactInternalMemoizedMergedChildContext = e, V(we), V(ce), $(ce, e)) : V(we), $(we, n);
}
var Xe = null, jl = !1, bl = !1;
function zu(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function Wf(e) {
  jl = !0, zu(e);
}
function _t() {
  if (!bl && Xe !== null) {
    bl = !0;
    var e = 0, t = A;
    try {
      var n = Xe;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, jl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), ru(vs, _t), l;
    } finally {
      A = t, bl = !1;
    }
  }
  return null;
}
var en = [], tn = 0, ll = null, il = 0, Le = [], Re = 0, Ut = null, Je = 1, Ze = "";
function Tt(e, t) {
  en[tn++] = il, en[tn++] = ll, ll = e, il = t;
}
function Ou(e, t, n) {
  Le[Re++] = Je, Le[Re++] = Ze, Le[Re++] = Ut, Ut = e;
  var r = Je;
  e = Ze;
  var l = 32 - Ue(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Ue(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, Je = 1 << 32 - Ue(t) + l | n << l | r, Ze = i + e;
  } else Je = 1 << i | n << l | r, Ze = e;
}
function Es(e) {
  e.return !== null && (Tt(e, 1), Ou(e, 1, 0));
}
function Cs(e) {
  for (; e === ll; ) ll = en[--tn], en[tn] = null, il = en[--tn], en[tn] = null;
  for (; e === Ut; ) Ut = Le[--Re], Le[Re] = null, Ze = Le[--Re], Le[Re] = null, Je = Le[--Re], Le[Re] = null;
}
var je = null, Ne = null, W = !1, Ae = null;
function Iu(e, t) {
  var n = Te(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ua(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = gt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ut !== null ? { id: Je, overflow: Ze } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ai(e) {
  if (W) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ua(e, t)) {
        if (Fi(e)) throw Error(E(418));
        t = gt(n.nextSibling);
        var r = je;
        t && Ua(e, t) ? Iu(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, je = e);
      }
    } else {
      if (Fi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, W = !1, je = e;
    }
  }
}
function $a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  je = e;
}
function Lr(e) {
  if (e !== je) return !1;
  if (!W) return $a(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Fi(e)) throw Mu(), Error(E(418));
    for (; t; ) Iu(e, t), t = gt(t.nextSibling);
  }
  if ($a(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = gt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = je ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Mu() {
  for (var e = Ne; e; ) e = gt(e.nextSibling);
}
function hn() {
  Ne = je = null, W = !1;
}
function _s(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
var Hf = rt.ReactCurrentBatchConfig;
function Ln(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var o = l.refs;
        s === null ? delete o[i] : o[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Rr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ba(e) {
  var t = e._init;
  return t(e._payload);
}
function Du(e) {
  function t(h, d) {
    if (e) {
      var m = h.deletions;
      m === null ? (h.deletions = [d], h.flags |= 16) : m.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), d = d.sibling;
    return null;
  }
  function r(h, d) {
    for (h = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
    return h;
  }
  function l(h, d) {
    return h = St(h, d), h.index = 0, h.sibling = null, h;
  }
  function i(h, d, m) {
    return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < d ? (h.flags |= 2, d) : m) : (h.flags |= 2, d)) : (h.flags |= 1048576, d);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function o(h, d, m, y) {
    return d === null || d.tag !== 6 ? (d = si(m, h.mode, y), d.return = h, d) : (d = l(d, m), d.return = h, d);
  }
  function u(h, d, m, y) {
    var x = m.type;
    return x === Gt ? p(h, d, m.props.children, y, m.key) : d !== null && (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === st && Ba(x) === d.type) ? (y = l(d, m.props), y.ref = Ln(h, d, m), y.return = h, y) : (y = Kr(m.type, m.key, m.props, null, h.mode, y), y.ref = Ln(h, d, m), y.return = h, y);
  }
  function c(h, d, m, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = ai(m, h.mode, y), d.return = h, d) : (d = l(d, m.children || []), d.return = h, d);
  }
  function p(h, d, m, y, x) {
    return d === null || d.tag !== 7 ? (d = Ft(m, h.mode, y, x), d.return = h, d) : (d = l(d, m), d.return = h, d);
  }
  function f(h, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = si("" + d, h.mode, m), d.return = h, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case wr:
          return m = Kr(d.type, d.key, d.props, null, h.mode, m), m.ref = Ln(h, null, d), m.return = h, m;
        case Yt:
          return d = ai(d, h.mode, m), d.return = h, d;
        case st:
          var y = d._init;
          return f(h, y(d._payload), m);
      }
      if (On(d) || jn(d)) return d = Ft(d, h.mode, m, null), d.return = h, d;
      Rr(h, d);
    }
    return null;
  }
  function v(h, d, m, y) {
    var x = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return x !== null ? null : o(h, d, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wr:
          return m.key === x ? u(h, d, m, y) : null;
        case Yt:
          return m.key === x ? c(h, d, m, y) : null;
        case st:
          return x = m._init, v(
            h,
            d,
            x(m._payload),
            y
          );
      }
      if (On(m) || jn(m)) return x !== null ? null : p(h, d, m, y, null);
      Rr(h, m);
    }
    return null;
  }
  function w(h, d, m, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return h = h.get(m) || null, o(d, h, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case wr:
          return h = h.get(y.key === null ? m : y.key) || null, u(d, h, y, x);
        case Yt:
          return h = h.get(y.key === null ? m : y.key) || null, c(d, h, y, x);
        case st:
          var j = y._init;
          return w(h, d, m, j(y._payload), x);
      }
      if (On(y) || jn(y)) return h = h.get(m) || null, p(d, h, y, x, null);
      Rr(d, y);
    }
    return null;
  }
  function k(h, d, m, y) {
    for (var x = null, j = null, S = d, P = d = 0, O = null; S !== null && P < m.length; P++) {
      S.index > P ? (O = S, S = null) : O = S.sibling;
      var z = v(h, S, m[P], y);
      if (z === null) {
        S === null && (S = O);
        break;
      }
      e && S && z.alternate === null && t(h, S), d = i(z, d, P), j === null ? x = z : j.sibling = z, j = z, S = O;
    }
    if (P === m.length) return n(h, S), W && Tt(h, P), x;
    if (S === null) {
      for (; P < m.length; P++) S = f(h, m[P], y), S !== null && (d = i(S, d, P), j === null ? x = S : j.sibling = S, j = S);
      return W && Tt(h, P), x;
    }
    for (S = r(h, S); P < m.length; P++) O = w(S, h, P, m[P], y), O !== null && (e && O.alternate !== null && S.delete(O.key === null ? P : O.key), d = i(O, d, P), j === null ? x = O : j.sibling = O, j = O);
    return e && S.forEach(function(F) {
      return t(h, F);
    }), W && Tt(h, P), x;
  }
  function N(h, d, m, y) {
    var x = jn(m);
    if (typeof x != "function") throw Error(E(150));
    if (m = x.call(m), m == null) throw Error(E(151));
    for (var j = x = null, S = d, P = d = 0, O = null, z = m.next(); S !== null && !z.done; P++, z = m.next()) {
      S.index > P ? (O = S, S = null) : O = S.sibling;
      var F = v(h, S, z.value, y);
      if (F === null) {
        S === null && (S = O);
        break;
      }
      e && S && F.alternate === null && t(h, S), d = i(F, d, P), j === null ? x = F : j.sibling = F, j = F, S = O;
    }
    if (z.done) return n(
      h,
      S
    ), W && Tt(h, P), x;
    if (S === null) {
      for (; !z.done; P++, z = m.next()) z = f(h, z.value, y), z !== null && (d = i(z, d, P), j === null ? x = z : j.sibling = z, j = z);
      return W && Tt(h, P), x;
    }
    for (S = r(h, S); !z.done; P++, z = m.next()) z = w(S, h, P, z.value, y), z !== null && (e && z.alternate !== null && S.delete(z.key === null ? P : z.key), d = i(z, d, P), j === null ? x = z : j.sibling = z, j = z);
    return e && S.forEach(function(C) {
      return t(h, C);
    }), W && Tt(h, P), x;
  }
  function _(h, d, m, y) {
    if (typeof m == "object" && m !== null && m.type === Gt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wr:
          e: {
            for (var x = m.key, j = d; j !== null; ) {
              if (j.key === x) {
                if (x = m.type, x === Gt) {
                  if (j.tag === 7) {
                    n(h, j.sibling), d = l(j, m.props.children), d.return = h, h = d;
                    break e;
                  }
                } else if (j.elementType === x || typeof x == "object" && x !== null && x.$$typeof === st && Ba(x) === j.type) {
                  n(h, j.sibling), d = l(j, m.props), d.ref = Ln(h, j, m), d.return = h, h = d;
                  break e;
                }
                n(h, j);
                break;
              } else t(h, j);
              j = j.sibling;
            }
            m.type === Gt ? (d = Ft(m.props.children, h.mode, y, m.key), d.return = h, h = d) : (y = Kr(m.type, m.key, m.props, null, h.mode, y), y.ref = Ln(h, d, m), y.return = h, h = y);
          }
          return s(h);
        case Yt:
          e: {
            for (j = m.key; d !== null; ) {
              if (d.key === j) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                n(h, d.sibling), d = l(d, m.children || []), d.return = h, h = d;
                break e;
              } else {
                n(h, d);
                break;
              }
              else t(h, d);
              d = d.sibling;
            }
            d = ai(m, h.mode, y), d.return = h, h = d;
          }
          return s(h);
        case st:
          return j = m._init, _(h, d, j(m._payload), y);
      }
      if (On(m)) return k(h, d, m, y);
      if (jn(m)) return N(h, d, m, y);
      Rr(h, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(h, d.sibling), d = l(d, m), d.return = h, h = d) : (n(h, d), d = si(m, h.mode, y), d.return = h, h = d), s(h)) : n(h, d);
  }
  return _;
}
var mn = Du(!0), Fu = Du(!1), sl = Ct(null), al = null, nn = null, Ps = null;
function Ls() {
  Ps = nn = al = null;
}
function Rs(e) {
  var t = sl.current;
  V(sl), e._currentValue = t;
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function cn(e, t) {
  al = e, Ps = nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0), e.firstContext = null);
}
function Oe(e) {
  var t = e._currentValue;
  if (Ps !== e) if (e = { context: e, memoizedValue: t, next: null }, nn === null) {
    if (al === null) throw Error(E(308));
    nn = e, al.dependencies = { lanes: 0, firstContext: e };
  } else nn = nn.next = e;
  return t;
}
var It = null;
function Ts(e) {
  It === null ? It = [e] : It.push(e);
}
function Au(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ts(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tt(e, r);
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function zs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Uu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ts(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tt(e, n);
}
function $r(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gs(e, n);
  }
}
function Va(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ol(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, s === null ? i = c : s.next = c, s = u;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, o = p.lastBaseUpdate, o !== s && (o === null ? p.firstBaseUpdate = c : o.next = c, p.lastBaseUpdate = u));
  }
  if (i !== null) {
    var f = l.baseState;
    s = 0, p = c = u = null, o = i;
    do {
      var v = o.lane, w = o.eventTime;
      if ((r & v) === v) {
        p !== null && (p = p.next = {
          eventTime: w,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var k = e, N = o;
          switch (v = t, w = n, N.tag) {
            case 1:
              if (k = N.payload, typeof k == "function") {
                f = k.call(w, f, v);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = N.payload, v = typeof k == "function" ? k.call(w, f, v) : k, v == null) break e;
              f = Y({}, f, v);
              break e;
            case 2:
              at = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o));
      } else w = { eventTime: w, lane: v, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, p === null ? (c = p = w, u = f) : p = p.next = w, s |= v;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (u = f), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Bt |= s, e.lanes = s, e.memoizedState = f;
  }
}
function Wa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(E(191, l));
      l.call(r);
    }
  }
}
var hr = {}, Ke = Ct(hr), nr = Ct(hr), rr = Ct(hr);
function Mt(e) {
  if (e === hr) throw Error(E(174));
  return e;
}
function Os(e, t) {
  switch ($(rr, t), $(nr, e), $(Ke, hr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wi(t, e);
  }
  V(Ke), $(Ke, t);
}
function vn() {
  V(Ke), V(nr), V(rr);
}
function $u(e) {
  Mt(rr.current);
  var t = Mt(Ke.current), n = wi(t, e.type);
  t !== n && ($(nr, e), $(Ke, n));
}
function Is(e) {
  nr.current === e && (V(Ke), V(nr));
}
var Q = Ct(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ei = [];
function Ms() {
  for (var e = 0; e < ei.length; e++) ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var Br = rt.ReactCurrentDispatcher, ti = rt.ReactCurrentBatchConfig, $t = 0, K = null, b = null, ne = null, cl = !1, Bn = !1, lr = 0, Qf = 0;
function ae() {
  throw Error(E(321));
}
function Ds(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Fs(e, t, n, r, l, i) {
  if ($t = i, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Br.current = e === null || e.memoizedState === null ? Xf : Jf, e = n(r, l), Bn) {
    i = 0;
    do {
      if (Bn = !1, lr = 0, 25 <= i) throw Error(E(301));
      i += 1, ne = b = null, t.updateQueue = null, Br.current = Zf, e = n(r, l);
    } while (Bn);
  }
  if (Br.current = dl, t = b !== null && b.next !== null, $t = 0, ne = b = K = null, cl = !1, t) throw Error(E(300));
  return e;
}
function As() {
  var e = lr !== 0;
  return lr = 0, e;
}
function We() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ne === null ? K.memoizedState = ne = e : ne = ne.next = e, ne;
}
function Ie() {
  if (b === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = ne === null ? K.memoizedState : ne.next;
  if (t !== null) ne = t, b = e;
  else {
    if (e === null) throw Error(E(310));
    b = e, e = { memoizedState: b.memoizedState, baseState: b.baseState, baseQueue: b.baseQueue, queue: b.queue, next: null }, ne === null ? K.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = b, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = s = null, u = null, c = i;
    do {
      var p = c.lane;
      if (($t & p) === p) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = f, s = r) : u = u.next = f, K.lanes |= p, Bt |= p;
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? s = r : u.next = o, Be(r, t.memoizedState) || (ye = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, K.lanes |= i, Bt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    Be(i, t.memoizedState) || (ye = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Bu() {
}
function Vu(e, t) {
  var n = K, r = Ie(), l = t(), i = !Be(r.memoizedState, l);
  if (i && (r.memoizedState = l, ye = !0), r = r.queue, Us(Qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ne !== null && ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, sr(9, Hu.bind(null, n, r, l, t), void 0, null), re === null) throw Error(E(349));
    $t & 30 || Wu(n, t, l);
  }
  return l;
}
function Wu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Hu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ku(t) && Yu(e);
}
function Qu(e, t, n) {
  return n(function() {
    Ku(t) && Yu(e);
  });
}
function Ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Yu(e) {
  var t = tt(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Ha(e) {
  var t = We();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gf.bind(null, K, e), [t.memoizedState, e];
}
function sr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Gu() {
  return Ie().memoizedState;
}
function Vr(e, t, n, r) {
  var l = We();
  K.flags |= e, l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r);
}
function El(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (b !== null) {
    var s = b.memoizedState;
    if (i = s.destroy, r !== null && Ds(r, s.deps)) {
      l.memoizedState = sr(t, n, i, r);
      return;
    }
  }
  K.flags |= e, l.memoizedState = sr(1 | t, n, i, r);
}
function Qa(e, t) {
  return Vr(8390656, 8, e, t);
}
function Us(e, t) {
  return El(2048, 8, e, t);
}
function Xu(e, t) {
  return El(4, 2, e, t);
}
function Ju(e, t) {
  return El(4, 4, e, t);
}
function Zu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function qu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, El(4, 4, Zu.bind(null, t, e), n);
}
function $s() {
}
function bu(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ec(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ds(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function tc(e, t, n) {
  return $t & 21 ? (Be(n, t) || (n = su(), K.lanes |= n, Bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = n);
}
function Kf(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, ti.transition = r;
  }
}
function nc() {
  return Ie().memoizedState;
}
function Yf(e, t, n) {
  var r = xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, rc(e)) lc(t, n);
  else if (n = Au(e, t, n, r), n !== null) {
    var l = fe();
    $e(n, e, r, l), ic(n, t, r);
  }
}
function Gf(e, t, n) {
  var r = xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rc(e)) lc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, o = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = o, Be(o, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ts(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Au(e, t, l, r), n !== null && (l = fe(), $e(n, e, r, l), ic(n, t, r));
  }
}
function rc(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function lc(e, t) {
  Bn = cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gs(e, n);
  }
}
var dl = { readContext: Oe, useCallback: ae, useContext: ae, useEffect: ae, useImperativeHandle: ae, useInsertionEffect: ae, useLayoutEffect: ae, useMemo: ae, useReducer: ae, useRef: ae, useState: ae, useDebugValue: ae, useDeferredValue: ae, useTransition: ae, useMutableSource: ae, useSyncExternalStore: ae, useId: ae, unstable_isNewReconciler: !1 }, Xf = { readContext: Oe, useCallback: function(e, t) {
  return We().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Oe, useEffect: Qa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vr(
    4194308,
    4,
    Zu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = We();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = We();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Yf.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = We();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ha, useDebugValue: $s, useDeferredValue: function(e) {
  return We().memoizedState = e;
}, useTransition: function() {
  var e = Ha(!1), t = e[0];
  return e = Kf.bind(null, e[1]), We().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, l = We();
  if (W) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), re === null) throw Error(E(349));
    $t & 30 || Wu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Qa(Qu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, sr(9, Hu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = We(), t = re.identifierPrefix;
  if (W) {
    var n = Ze, r = Je;
    n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Qf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Jf = {
  readContext: Oe,
  useCallback: bu,
  useContext: Oe,
  useEffect: Us,
  useImperativeHandle: qu,
  useInsertionEffect: Xu,
  useLayoutEffect: Ju,
  useMemo: ec,
  useReducer: ni,
  useRef: Gu,
  useState: function() {
    return ni(ir);
  },
  useDebugValue: $s,
  useDeferredValue: function(e) {
    var t = Ie();
    return tc(t, b.memoizedState, e);
  },
  useTransition: function() {
    var e = ni(ir)[0], t = Ie().memoizedState;
    return [e, t];
  },
  useMutableSource: Bu,
  useSyncExternalStore: Vu,
  useId: nc,
  unstable_isNewReconciler: !1
}, Zf = { readContext: Oe, useCallback: bu, useContext: Oe, useEffect: Us, useImperativeHandle: qu, useInsertionEffect: Xu, useLayoutEffect: Ju, useMemo: ec, useReducer: ri, useRef: Gu, useState: function() {
  return ri(ir);
}, useDebugValue: $s, useDeferredValue: function(e) {
  var t = Ie();
  return b === null ? t.memoizedState = e : tc(t, b.memoizedState, e);
}, useTransition: function() {
  var e = ri(ir)[0], t = Ie().memoizedState;
  return [e, t];
}, useMutableSource: Bu, useSyncExternalStore: Vu, useId: nc, unstable_isNewReconciler: !1 };
function De(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $i(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ht(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), l = xt(e), i = qe(r, l);
  i.payload = t, n != null && (i.callback = n), t = yt(e, i, l), t !== null && ($e(t, e, l, r), $r(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), l = xt(e), i = qe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yt(e, i, l), t !== null && ($e(t, e, l, r), $r(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = fe(), r = xt(e), l = qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && ($e(t, e, r, n), $r(t, e, r));
} };
function Ka(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, i) : !0;
}
function sc(e, t, n) {
  var r = !1, l = jt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Oe(i) : (l = xe(t) ? At : ce.current, r = t.contextTypes, i = (r = r != null) ? pn(e, l) : jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ya(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, zs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Oe(i) : (i = xe(t) ? At : ce.current, l.context = pn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && ($i(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Cl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += jd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var qf = typeof WeakMap == "function" ? WeakMap : Map;
function ac(e, t, n) {
  n = qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pl || (pl = !0, qi = r), Vi(e, t);
  }, n;
}
function oc(e, t, n) {
  n = qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Vi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Vi(e, t), typeof r != "function" && (wt === null ? wt = /* @__PURE__ */ new Set([this]) : wt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ga(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = fp.bind(null, e, t, n), t.then(e, e));
}
function Xa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ja(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e);
}
var bf = rt.ReactCurrentOwner, ye = !1;
function de(e, t, n, r) {
  t.child = e === null ? Fu(t, null, n, r) : mn(t, e.child, n, r);
}
function Za(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return cn(t, l), r = Fs(e, t, n, r, i, l), n = As(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && n && Es(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function qa(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Gs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, uc(e, t, i, r, l)) : (e = Kr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qn, n(s, r) && e.ref === t.ref) return nt(e, t, l);
  }
  return t.flags |= 1, e = St(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function uc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qn(i, r) && e.ref === t.ref) if (ye = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (ye = !0);
    else return t.lanes = e.lanes, nt(e, t, l);
  }
  return Wi(e, t, n, r, l);
}
function cc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(ln, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $(ln, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, $(ln, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, $(ln, ke), ke |= r;
  return de(e, t, l, n), t.child;
}
function dc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wi(e, t, n, r, l) {
  var i = xe(n) ? At : ce.current;
  return i = pn(t, i), cn(t, l), n = Fs(e, t, n, r, i, l), r = As(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && r && Es(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function ba(e, t, n, r, l) {
  if (xe(n)) {
    var i = !0;
    rl(t);
  } else i = !1;
  if (cn(t, l), t.stateNode === null) Wr(e, t), sc(t, n, r), Bi(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, o = t.memoizedProps;
    s.props = o;
    var u = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Oe(c) : (c = xe(n) ? At : ce.current, c = pn(t, c));
    var p = n.getDerivedStateFromProps, f = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || u !== c) && Ya(t, s, r, c), at = !1;
    var v = t.memoizedState;
    s.state = v, ol(t, r, s, l), u = t.memoizedState, o !== r || v !== u || we.current || at ? (typeof p == "function" && ($i(t, n, p, r), u = t.memoizedState), (o = at || Ka(t, n, o, r, v, u, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Uu(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : De(t.type, o), s.props = c, f = t.pendingProps, v = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Oe(u) : (u = xe(n) ? At : ce.current, u = pn(t, u));
    var w = n.getDerivedStateFromProps;
    (p = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== f || v !== u) && Ya(t, s, r, u), at = !1, v = t.memoizedState, s.state = v, ol(t, r, s, l);
    var k = t.memoizedState;
    o !== f || v !== k || we.current || at ? (typeof w == "function" && ($i(t, n, w, r), k = t.memoizedState), (c = at || Ka(t, n, c, r, v, k, u) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Hi(e, t, n, r, i, l);
}
function Hi(e, t, n, r, l, i) {
  dc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Aa(t, n, !1), nt(e, t, i);
  r = t.stateNode, bf.current = t;
  var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = mn(t, e.child, null, i), t.child = mn(t, null, o, i)) : de(e, t, o, i), t.memoizedState = r.state, l && Aa(t, n, !0), t.child;
}
function fc(e) {
  var t = e.stateNode;
  t.pendingContext ? Fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fa(e, t.context, !1), Os(e, t.containerInfo);
}
function eo(e, t, n, r, l) {
  return hn(), _s(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pc(e, t, n) {
  var r = t.pendingProps, l = Q.current, i = !1, s = (t.flags & 128) !== 0, o;
  if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(Q, l & 1), e === null)
    return Ai(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ll(s, r, 0, null), e = Ft(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ki(n), t.memoizedState = Qi, e) : Bs(t, s));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return ep(e, t, s, r, o, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = St(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = St(o, i) : (i = Ft(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Ki(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return i = e.child, e = i.sibling, r = St(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bs(e, t) {
  return t = Ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Tr(e, t, n, r) {
  return r !== null && _s(r), mn(t, e.child, null, n), e = Bs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ep(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = li(Error(E(422))), Tr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ll({ mode: "visible", children: r.children }, l, 0, null), i = Ft(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mn(t, e.child, null, s), t.child.memoizedState = Ki(s), t.memoizedState = Qi, i);
  if (!(t.mode & 1)) return Tr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(E(419)), r = li(i, r, void 0), Tr(e, t, s, r);
  }
  if (o = (s & e.childLanes) !== 0, ye || o) {
    if (r = re, r !== null) {
      switch (s & -s) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, tt(e, l), $e(r, e, l, -1));
    }
    return Ys(), r = li(Error(E(421))), Tr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ne = gt(l.nextSibling), je = t, W = !0, Ae = null, e !== null && (Le[Re++] = Je, Le[Re++] = Ze, Le[Re++] = Ut, Je = e.id, Ze = e.overflow, Ut = t), t = Bs(t, r.children), t.flags |= 4096, t);
}
function to(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function hc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (de(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && to(e, n, t);
      else if (e.tag === 19) to(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if ($(Q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ii(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ii(t, !0, n, null, i);
      break;
    case "together":
      ii(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = St(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      fc(t), hn();
      break;
    case 5:
      $u(t);
      break;
    case 1:
      xe(t.type) && rl(t);
      break;
    case 4:
      Os(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      $(sl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? pc(e, t, n) : ($(Q, Q.current & 1), e = nt(e, t, n), e !== null ? e.sibling : null);
      $(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return hc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, cc(e, t, n);
  }
  return nt(e, t, n);
}
var mc, Yi, vc, gc;
mc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Yi = function() {
};
vc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Mt(Ke.current);
    var i = null;
    switch (n) {
      case "input":
        l = mi(e, l), r = mi(e, r), i = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = yi(e, l), r = yi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tl);
    }
    xi(n, r);
    var s;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (s in o) o.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Qn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (s in o) !o.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && o[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Qn.hasOwnProperty(c) ? (u != null && c === "onScroll" && B("scroll", e), i || o === u || (i = [])) : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
gc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function np(e, t, n) {
  var r = t.pendingProps;
  switch (Cs(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return xe(t.type) && nl(), oe(t), null;
    case 3:
      return r = t.stateNode, vn(), V(we), V(ce), Ms(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Lr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ae !== null && (ts(Ae), Ae = null))), Yi(e, t), oe(t), null;
    case 5:
      Is(t);
      var l = Mt(rr.current);
      if (n = t.type, e !== null && t.stateNode != null) vc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return oe(t), null;
        }
        if (e = Mt(Ke.current), Lr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[He] = t, r[tr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++) B(Mn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ca(r, i), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, B("invalid", r);
              break;
            case "textarea":
              fa(r, i), B("invalid", r);
          }
          xi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var o = i[s];
            s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Pr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Pr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : Qn.hasOwnProperty(s) && o != null && s === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              xr(r), da(r, i, !0);
              break;
            case "textarea":
              xr(r), pa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[He] = t, e[tr] = r, mc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Si(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++) B(Mn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                ca(e, r), l = mi(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                fa(e, r), l = yi(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            xi(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Go(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ko(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Kn(e, u) : typeof u == "number" && Kn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qn.hasOwnProperty(i) ? u != null && i === "onScroll" && B("scroll", e) : u != null && ds(e, i, u, s));
            }
            switch (n) {
              case "input":
                xr(e), da(e, r, !1);
                break;
              case "textarea":
                xr(e), pa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? sn(e, !!r.multiple, i, !1) : r.defaultValue != null && sn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = tl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) gc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = Mt(rr.current), Mt(Ke.current), Lr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (i = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              Pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r;
      }
      return oe(t), null;
    case 13:
      if (V(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Ne !== null && t.mode & 1 && !(t.flags & 128)) Mu(), hn(), t.flags |= 98560, i = !1;
        else if (i = Lr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[He] = t;
          } else hn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          oe(t), i = !1;
        } else Ae !== null && (ts(Ae), Ae = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? ee === 0 && (ee = 3) : Ys())), t.updateQueue !== null && (t.flags |= 4), oe(t), null);
    case 4:
      return vn(), Yi(e, t), e === null && bn(t.stateNode.containerInfo), oe(t), null;
    case 10:
      return Rs(t.type._context), oe(t), null;
    case 17:
      return xe(t.type) && nl(), oe(t), null;
    case 19:
      if (V(Q), i = t.memoizedState, i === null) return oe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Rn(i, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ul(e), s !== null) {
            for (t.flags |= 128, Rn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return $(Q, Q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && J() > yn && (t.flags |= 128, r = !0, Rn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !W) return oe(t), null;
        } else 2 * J() - i.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Rn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = J(), t.sibling = null, n = Q.current, $(Q, r ? n & 1 | 2 : n & 1), t) : (oe(t), null);
    case 22:
    case 23:
      return Ks(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function rp(e, t) {
  switch (Cs(t), t.tag) {
    case 1:
      return xe(t.type) && nl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vn(), V(we), V(ce), Ms(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Is(t), null;
    case 13:
      if (V(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        hn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(Q), null;
    case 4:
      return vn(), null;
    case 10:
      return Rs(t.type._context), null;
    case 22:
    case 23:
      return Ks(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1, ue = !1, lp = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    G(e, t, r);
  }
  else n.current = null;
}
function Gi(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var no = !1;
function ip(e, t) {
  if (Ti = qr, e = ku(), js(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, o = -1, u = -1, c = 0, p = 0, f = e, v = null;
        t: for (; ; ) {
          for (var w; f !== n || l !== 0 && f.nodeType !== 3 || (o = s + l), f !== i || r !== 0 && f.nodeType !== 3 || (u = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (w = f.firstChild) !== null; )
            v = f, f = w;
          for (; ; ) {
            if (f === e) break t;
            if (v === n && ++c === l && (o = s), v === i && ++p === r && (u = s), (w = f.nextSibling) !== null) break;
            f = v, v = f.parentNode;
          }
          f = w;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, qr = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var N = k.memoizedProps, _ = k.memoizedState, h = t.stateNode, d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? N : De(t.type, N), _);
            h.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (y) {
      G(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return k = no, no = !1, k;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Gi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function yc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, yc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[tr], delete t[Mi], delete t[Bf], delete t[Vf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ro(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || wc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), e = e.sibling;
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), e = e.sibling;
}
var le = null, Fe = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) xc(e, t, n), n = n.sibling;
}
function xc(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
    Qe.onCommitFiberUnmount(wl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || rn(n, t);
    case 6:
      var r = le, l = Fe;
      le = null, it(e, t, n), le = r, Fe = l, le !== null && (Fe ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (Fe ? (e = le, n = n.stateNode, e.nodeType === 8 ? ql(e.parentNode, n) : e.nodeType === 1 && ql(e, n), Jn(e)) : ql(le, n.stateNode));
      break;
    case 4:
      r = le, l = Fe, le = n.stateNode.containerInfo, Fe = !0, it(e, t, n), le = r, Fe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Gi(n, t, s), l = l.next;
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (!ue && (rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        G(n, t, o);
      }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, it(e, t, n), ue = r) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function lo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lp()), t.forEach(function(r) {
      var l = hp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, o = s;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            le = o.stateNode, Fe = !1;
            break e;
          case 3:
            le = o.stateNode.containerInfo, Fe = !0;
            break e;
          case 4:
            le = o.stateNode.containerInfo, Fe = !0;
            break e;
        }
        o = o.return;
      }
      if (le === null) throw Error(E(160));
      xc(i, s, l), le = null, Fe = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      G(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Sc(t, e), t = t.sibling;
}
function Sc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Me(t, e), Ve(e), r & 4) {
        try {
          Vn(3, e, e.return), _l(3, e);
        } catch (N) {
          G(e, e.return, N);
        }
        try {
          Vn(5, e, e.return);
        } catch (N) {
          G(e, e.return, N);
        }
      }
      break;
    case 1:
      Me(t, e), Ve(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (Me(t, e), Ve(e), r & 512 && n !== null && rn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (N) {
          G(e, e.return, N);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && Wo(l, i), Si(o, s);
          var c = Si(o, i);
          for (s = 0; s < u.length; s += 2) {
            var p = u[s], f = u[s + 1];
            p === "style" ? Go(l, f) : p === "dangerouslySetInnerHTML" ? Ko(l, f) : p === "children" ? Kn(l, f) : ds(l, p, f, c);
          }
          switch (o) {
            case "input":
              vi(l, i);
              break;
            case "textarea":
              Ho(l, i);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? sn(l, !!i.multiple, w, !1) : v !== !!i.multiple && (i.defaultValue != null ? sn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[tr] = i;
        } catch (N) {
          G(e, e.return, N);
        }
      }
      break;
    case 6:
      if (Me(t, e), Ve(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (N) {
          G(e, e.return, N);
        }
      }
      break;
    case 3:
      if (Me(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jn(t.containerInfo);
      } catch (N) {
        G(e, e.return, N);
      }
      break;
    case 4:
      Me(t, e), Ve(e);
      break;
    case 13:
      Me(t, e), Ve(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Hs = J())), r & 4 && lo(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || p, Me(t, e), ue = c) : Me(t, e), Ve(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (R = e, p = e.child; p !== null; ) {
          for (f = R = p; R !== null; ) {
            switch (v = R, w = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Vn(4, v, v.return);
                break;
              case 1:
                rn(v, v.return);
                var k = v.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (N) {
                    G(r, n, N);
                  }
                }
                break;
              case 5:
                rn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  so(f);
                  continue;
                }
            }
            w !== null ? (w.return = v, R = w) : so(f);
          }
          p = p.sibling;
        }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                l = f.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = f.stateNode, u = f.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Yo("display", s));
              } catch (N) {
                G(e, e.return, N);
              }
            }
          } else if (f.tag === 6) {
            if (p === null) try {
              f.stateNode.nodeValue = c ? "" : f.memoizedProps;
            } catch (N) {
              G(e, e.return, N);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            p === f && (p = null), f = f.return;
          }
          p === f && (p = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Me(t, e), Ve(e), r & 4 && lo(e);
      break;
    case 21:
      break;
    default:
      Me(
        t,
        e
      ), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), r.flags &= -33);
          var i = ro(e);
          Zi(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, o = ro(e);
          Ji(e, o, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      G(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sp(e, t, n) {
  R = e, kc(e);
}
function kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || zr;
      if (!s) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || ue;
        o = zr;
        var c = ue;
        if (zr = s, (ue = u) && !c) for (R = l; R !== null; ) s = R, u = s.child, s.tag === 22 && s.memoizedState !== null ? ao(l) : u !== null ? (u.return = s, R = u) : ao(l);
        for (; i !== null; ) R = i, kc(i), i = i.sibling;
        R = l, zr = o, ue = c;
      }
      io(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, R = i) : io(e);
  }
}
function io(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || _l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Wa(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Wa(t, s, n);
            }
            break;
          case 5:
            var o = t.stateNode;
            if (n === null && t.flags & 4) {
              n = o;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var p = c.memoizedState;
                if (p !== null) {
                  var f = p.dehydrated;
                  f !== null && Jn(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(E(163));
        }
        ue || t.flags & 512 && Xi(t);
      } catch (v) {
        G(t, t.return, v);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function so(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function ao(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (u) {
            G(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              G(t, l, u);
            }
          }
          var i = t.return;
          try {
            Xi(t);
          } catch (u) {
            G(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xi(t);
          } catch (u) {
            G(t, s, u);
          }
      }
    } catch (u) {
      G(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, R = o;
      break;
    }
    R = t.return;
  }
}
var ap = Math.ceil, fl = rt.ReactCurrentDispatcher, Vs = rt.ReactCurrentOwner, ze = rt.ReactCurrentBatchConfig, D = 0, re = null, q = null, ie = 0, ke = 0, ln = Ct(0), ee = 0, ar = null, Bt = 0, Pl = 0, Ws = 0, Wn = null, ge = null, Hs = 0, yn = 1 / 0, Ge = null, pl = !1, qi = null, wt = null, Or = !1, dt = null, hl = 0, Hn = 0, bi = null, Hr = -1, Qr = 0;
function fe() {
  return D & 6 ? J() : Hr !== -1 ? Hr : Hr = J();
}
function xt(e) {
  return e.mode & 1 ? D & 2 && ie !== 0 ? ie & -ie : Hf.transition !== null ? (Qr === 0 && (Qr = su()), Qr) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pu(e.type)), e) : 1;
}
function $e(e, t, n, r) {
  if (50 < Hn) throw Hn = 0, bi = null, Error(E(185));
  dr(e, n, r), (!(D & 2) || e !== re) && (e === re && (!(D & 2) && (Pl |= n), ee === 4 && ut(e, ie)), Se(e, r), n === 1 && D === 0 && !(t.mode & 1) && (yn = J() + 500, jl && _t()));
}
function Se(e, t) {
  var n = e.callbackNode;
  Wd(e, t);
  var r = Zr(e, e === re ? ie : 0);
  if (r === 0) n !== null && va(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && va(n), t === 1) e.tag === 0 ? Wf(oo.bind(null, e)) : zu(oo.bind(null, e)), Uf(function() {
      !(D & 6) && _t();
    }), n = null;
    else {
      switch (au(r)) {
        case 1:
          n = vs;
          break;
        case 4:
          n = lu;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = iu;
          break;
        default:
          n = Jr;
      }
      n = Rc(n, Nc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nc(e, t) {
  if (Hr = -1, Qr = 0, D & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = Zr(e, e === re ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ml(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = Ec();
    (re !== e || ie !== t) && (Ge = null, yn = J() + 500, Dt(e, t));
    do
      try {
        cp();
        break;
      } catch (o) {
        jc(e, o);
      }
    while (!0);
    Ls(), fl.current = i, D = l, q !== null ? t = 0 : (re = null, ie = 0, t = ee);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ci(e), l !== 0 && (r = l, t = es(e, l))), t === 1) throw n = ar, Dt(e, 0), ut(e, r), Se(e, J()), n;
    if (t === 6) ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !op(l) && (t = ml(e, r), t === 2 && (i = Ci(e), i !== 0 && (r = i, t = es(e, i))), t === 1)) throw n = ar, Dt(e, 0), ut(e, r), Se(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          zt(e, ge, Ge);
          break;
        case 3:
          if (ut(e, r), (r & 130023424) === r && (t = Hs + 500 - J(), 10 < t)) {
            if (Zr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ii(zt.bind(null, e, ge, Ge), t);
            break;
          }
          zt(e, ge, Ge);
          break;
        case 4:
          if (ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Ue(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ap(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ii(zt.bind(null, e, ge, Ge), r);
            break;
          }
          zt(e, ge, Ge);
          break;
        case 5:
          zt(e, ge, Ge);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function es(e, t) {
  var n = Wn;
  return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256), e = ml(e, t), e !== 2 && (t = ge, ge = n, t !== null && ts(t)), e;
}
function ts(e) {
  ge === null ? ge = e : ge.push.apply(ge, e);
}
function op(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Be(i(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function ut(e, t) {
  for (t &= ~Ws, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ue(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function oo(e) {
  if (D & 6) throw Error(E(327));
  dn();
  var t = Zr(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ci(e);
    r !== 0 && (t = r, n = es(e, r));
  }
  if (n === 1) throw n = ar, Dt(e, 0), ut(e, t), Se(e, J()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, ge, Ge), Se(e, J()), null;
}
function Qs(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (yn = J() + 500, jl && _t());
  }
}
function Vt(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && dn();
  var t = D;
  D |= 1;
  var n = ze.transition, r = A;
  try {
    if (ze.transition = null, A = 1, e) return e();
  } finally {
    A = r, ze.transition = n, D = t, !(D & 6) && _t();
  }
}
function Ks() {
  ke = ln.current, V(ln);
}
function Dt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Af(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (Cs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nl();
        break;
      case 3:
        vn(), V(we), V(ce), Ms();
        break;
      case 5:
        Is(r);
        break;
      case 4:
        vn();
        break;
      case 13:
        V(Q);
        break;
      case 19:
        V(Q);
        break;
      case 10:
        Rs(r.type._context);
        break;
      case 22:
      case 23:
        Ks();
    }
    n = n.return;
  }
  if (re = e, q = e = St(e.current, null), ie = ke = t, ee = 0, ar = null, Ws = Pl = Bt = 0, ge = Wn = null, It !== null) {
    for (t = 0; t < It.length; t++) if (n = It[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    It = null;
  }
  return e;
}
function jc(e, t) {
  do {
    var n = q;
    try {
      if (Ls(), Br.current = dl, cl) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cl = !1;
      }
      if ($t = 0, ne = b = K = null, Bn = !1, lr = 0, Vs.current = null, n === null || n.return === null) {
        ee = 1, ar = t, q = null;
        break;
      }
      e: {
        var i = e, s = n.return, o = n, u = t;
        if (t = ie, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, p = o, f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = p.alternate;
            v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var w = Xa(s);
          if (w !== null) {
            w.flags &= -257, Ja(w, s, o, i, t), w.mode & 1 && Ga(i, c, t), t = w, u = c;
            var k = t.updateQueue;
            if (k === null) {
              var N = /* @__PURE__ */ new Set();
              N.add(u), t.updateQueue = N;
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ga(i, c, t), Ys();
              break e;
            }
            u = Error(E(426));
          }
        } else if (W && o.mode & 1) {
          var _ = Xa(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Ja(_, s, o, i, t), _s(gn(u, o));
            break e;
          }
        }
        i = u = gn(u, o), ee !== 4 && (ee = 2), Wn === null ? Wn = [i] : Wn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = ac(i, u, t);
              Va(i, h);
              break e;
            case 1:
              o = u;
              var d = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (wt === null || !wt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = oc(i, o, t);
                Va(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _c(n);
    } catch (x) {
      t = x, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ec() {
  var e = fl.current;
  return fl.current = dl, e === null ? dl : e;
}
function Ys() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), re === null || !(Bt & 268435455) && !(Pl & 268435455) || ut(re, ie);
}
function ml(e, t) {
  var n = D;
  D |= 2;
  var r = Ec();
  (re !== e || ie !== t) && (Ge = null, Dt(e, t));
  do
    try {
      up();
      break;
    } catch (l) {
      jc(e, l);
    }
  while (!0);
  if (Ls(), D = n, fl.current = r, q !== null) throw Error(E(261));
  return re = null, ie = 0, ee;
}
function up() {
  for (; q !== null; ) Cc(q);
}
function cp() {
  for (; q !== null && !Id(); ) Cc(q);
}
function Cc(e) {
  var t = Lc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? _c(e) : q = t, Vs.current = null;
}
function _c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = rp(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, q = null;
        return;
      }
    } else if (n = np(n, t, ke), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function zt(e, t, n) {
  var r = A, l = ze.transition;
  try {
    ze.transition = null, A = 1, dp(e, t, n, r);
  } finally {
    ze.transition = l, A = r;
  }
  return null;
}
function dp(e, t, n, r) {
  do
    dn();
  while (dt !== null);
  if (D & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Hd(e, i), e === re && (q = re = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Or || (Or = !0, Rc(Jr, function() {
    return dn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ze.transition, ze.transition = null;
    var s = A;
    A = 1;
    var o = D;
    D |= 4, Vs.current = null, ip(e, n), Sc(n, e), Tf(zi), qr = !!Ti, zi = Ti = null, e.current = n, sp(n), Md(), D = o, A = s, ze.transition = i;
  } else e.current = n;
  if (Or && (Or = !1, dt = e, hl = l), i = e.pendingLanes, i === 0 && (wt = null), Ad(n.stateNode), Se(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw pl = !1, e = qi, qi = null, e;
  return hl & 1 && e.tag !== 0 && dn(), i = e.pendingLanes, i & 1 ? e === bi ? Hn++ : (Hn = 0, bi = e) : Hn = 0, _t(), null;
}
function dn() {
  if (dt !== null) {
    var e = au(hl), t = ze.transition, n = A;
    try {
      if (ze.transition = null, A = 16 > e ? 16 : e, dt === null) var r = !1;
      else {
        if (e = dt, dt = null, hl = 0, D & 6) throw Error(E(331));
        var l = D;
        for (D |= 4, R = e.current; R !== null; ) {
          var i = R, s = i.child;
          if (R.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (R = c; R !== null; ) {
                  var p = R;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, p, i);
                  }
                  var f = p.child;
                  if (f !== null) f.return = p, R = f;
                  else for (; R !== null; ) {
                    p = R;
                    var v = p.sibling, w = p.return;
                    if (yc(p), p === c) {
                      R = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = w, R = v;
                      break;
                    }
                    R = w;
                  }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var N = k.child;
                if (N !== null) {
                  k.child = null;
                  do {
                    var _ = N.sibling;
                    N.sibling = null, N = _;
                  } while (N !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, R = s;
          else e: for (; R !== null; ) {
            if (i = R, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Vn(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, R = h;
              break e;
            }
            R = i.return;
          }
        }
        var d = e.current;
        for (R = d; R !== null; ) {
          s = R;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, R = m;
          else e: for (s = d; R !== null; ) {
            if (o = R, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, o);
              }
            } catch (x) {
              G(o, o.return, x);
            }
            if (o === s) {
              R = null;
              break e;
            }
            var y = o.sibling;
            if (y !== null) {
              y.return = o.return, R = y;
              break e;
            }
            R = o.return;
          }
        }
        if (D = l, _t(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
          Qe.onPostCommitFiberRoot(wl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, ze.transition = t;
    }
  }
  return !1;
}
function uo(e, t, n) {
  t = gn(n, t), t = ac(e, t, 1), e = yt(e, t, 1), t = fe(), e !== null && (dr(e, 1, t), Se(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) uo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      uo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wt === null || !wt.has(r))) {
        e = gn(n, e), e = oc(t, e, 1), t = yt(t, e, 1), e = fe(), t !== null && (dr(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (ie & n) === n && (ee === 4 || ee === 3 && (ie & 130023424) === ie && 500 > J() - Hs ? Dt(e, 0) : Ws |= n), Se(e, t);
}
function Pc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = fe();
  e = tt(e, t), e !== null && (dr(e, t, n), Se(e, n));
}
function pp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Pc(e, n);
}
function hp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Pc(e, n);
}
var Lc;
Lc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ye = !1, tp(e, t, n);
    ye = !!(e.flags & 131072);
  }
  else ye = !1, W && t.flags & 1048576 && Ou(t, il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Wr(e, t), e = t.pendingProps;
      var l = pn(t, ce.current);
      cn(t, n), l = Fs(null, t, r, e, l, n);
      var i = As();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xe(r) ? (i = !0, rl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zs(t), l.updater = Cl, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Hi(null, t, r, !0, i, n)) : (t.tag = 0, W && i && Es(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Wr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = vp(r), e = De(r, e), l) {
          case 0:
            t = Wi(null, t, r, e, n);
            break e;
          case 1:
            t = ba(null, t, r, e, n);
            break e;
          case 11:
            t = Za(null, t, r, e, n);
            break e;
          case 14:
            t = qa(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Wi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), ba(e, t, r, l, n);
    case 3:
      e: {
        if (fc(t), e === null) throw Error(E(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Uu(e, t), ol(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = gn(Error(E(423)), t), t = eo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = gn(Error(E(424)), t), t = eo(e, t, r, n, l);
          break e;
        } else for (Ne = gt(t.stateNode.containerInfo.firstChild), je = t, W = !0, Ae = null, n = Fu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hn(), r === l) {
            t = nt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return $u(t), e === null && Ai(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Oi(r, l) ? s = null : i !== null && Oi(r, i) && (t.flags |= 32), dc(e, t), de(e, t, s, n), t.child;
    case 6:
      return e === null && Ai(t), null;
    case 13:
      return pc(e, t, n);
    case 4:
      return Os(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Za(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, $(sl, r._currentValue), r._currentValue = s, i !== null) if (Be(i.value, s)) {
          if (i.children === l.children && !we.current) {
            t = nt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            s = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = qe(-1, n & -n), u.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var p = c.pending;
                    p === null ? u.next = u : (u.next = p.next, p.next = u), c.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ui(
                  i.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(E(341));
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Ui(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, cn(t, n), l = Oe(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = De(r, t.pendingProps), l = De(r.type, l), qa(e, t, r, l, n);
    case 15:
      return uc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Wr(e, t), t.tag = 1, xe(r) ? (e = !0, rl(t)) : e = !1, cn(t, n), sc(t, r, l), Bi(t, r, l, n), Hi(null, t, r, !0, e, n);
    case 19:
      return hc(e, t, n);
    case 22:
      return cc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Rc(e, t) {
  return ru(e, t);
}
function mp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Te(e, t, n, r) {
  return new mp(e, t, n, r);
}
function Gs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return Gs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ps) return 11;
    if (e === hs) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Kr(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Gs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Gt:
      return Ft(n.children, l, i, t);
    case fs:
      s = 8, l |= 8;
      break;
    case di:
      return e = Te(12, n, t, l | 2), e.elementType = di, e.lanes = i, e;
    case fi:
      return e = Te(13, n, t, l), e.elementType = fi, e.lanes = i, e;
    case pi:
      return e = Te(19, n, t, l), e.elementType = pi, e.lanes = i, e;
    case $o:
      return Ll(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ao:
          s = 10;
          break e;
        case Uo:
          s = 9;
          break e;
        case ps:
          s = 11;
          break e;
        case hs:
          s = 14;
          break e;
        case st:
          s = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = Te(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ft(e, t, n, r) {
  return e = Te(7, e, r, t), e.lanes = n, e;
}
function Ll(e, t, n, r) {
  return e = Te(22, e, r, t), e.elementType = $o, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = Te(6, e, null, t), e.lanes = n, e;
}
function ai(e, t, n) {
  return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xs(e, t, n, r, l, i, s, o, u) {
  return e = new gp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Te(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zs(i), e;
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Tc(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return Tu(e, n, t);
  }
  return t;
}
function zc(e, t, n, r, l, i, s, o, u) {
  return e = Xs(n, r, !0, e, l, i, s, o, u), e.context = Tc(null), n = e.current, r = fe(), l = xt(n), i = qe(r, l), i.callback = t ?? null, yt(n, i, l), e.current.lanes = l, dr(e, l, r), Se(e, r), e;
}
function Rl(e, t, n, r) {
  var l = t.current, i = fe(), s = xt(l);
  return n = Tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, s), e !== null && ($e(e, l, s, i), $r(e, l, s)), s;
}
function vl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function co(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Js(e, t) {
  co(e, t), (e = e.alternate) && co(e, t);
}
function wp() {
  return null;
}
var Oc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zs(e) {
  this._internalRoot = e;
}
Tl.prototype.render = Zs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Rl(e, t, null, null);
};
Tl.prototype.unmount = Zs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function() {
      Rl(null, e, null, null);
    }), t[et] = null;
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = cu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++) ;
    ot.splice(n, 0, e), n === 0 && fu(e);
  }
};
function qs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fo() {
}
function xp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = vl(s);
        i.call(c);
      };
    }
    var s = zc(t, r, e, 0, null, !1, !1, "", fo);
    return e._reactRootContainer = s, e[et] = s.current, bn(e.nodeType === 8 ? e.parentNode : e), Vt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = vl(u);
      o.call(c);
    };
  }
  var u = Xs(e, 0, !1, null, null, !1, !1, "", fo);
  return e._reactRootContainer = u, e[et] = u.current, bn(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
    Rl(t, u, n, r);
  }), u;
}
function Ol(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = vl(s);
        o.call(u);
      };
    }
    Rl(t, s, e, l);
  } else s = xp(n, t, e, l, r);
  return vl(s);
}
ou = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 && (gs(t, n | 1), Se(t, J()), !(D & 6) && (yn = J() + 500, _t()));
      }
      break;
    case 13:
      Vt(function() {
        var r = tt(e, 1);
        if (r !== null) {
          var l = fe();
          $e(r, e, 1, l);
        }
      }), Js(e, 1);
  }
};
ys = function(e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = fe();
      $e(t, e, 134217728, n);
    }
    Js(e, 134217728);
  }
};
uu = function(e) {
  if (e.tag === 13) {
    var t = xt(e), n = tt(e, t);
    if (n !== null) {
      var r = fe();
      $e(n, e, t, r);
    }
    Js(e, t);
  }
};
cu = function() {
  return A;
};
du = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
Ni = function(e, t, n) {
  switch (t) {
    case "input":
      if (vi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Nl(r);
            if (!l) throw Error(E(90));
            Vo(r), vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ho(e, n);
      break;
    case "select":
      t = n.value, t != null && sn(e, !!n.multiple, t, !1);
  }
};
Zo = Qs;
qo = Vt;
var Sp = { usingClientEntryPoint: !1, Events: [pr, qt, Nl, Xo, Jo, Qs] }, Tn = { findFiberByHostInstance: Ot, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, kp = { bundleType: Tn.bundleType, version: Tn.version, rendererPackageName: Tn.rendererPackageName, rendererConfig: Tn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = tu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Tn.findFiberByHostInstance || wp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber) try {
    wl = Ir.inject(kp), Qe = Ir;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qs(t)) throw Error(E(200));
  return yp(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!qs(e)) throw Error(E(299));
  var n = !1, r = "", l = Oc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xs(e, 1, !1, null, null, n, !1, r, l), e[et] = t.current, bn(e.nodeType === 8 ? e.parentNode : e), new Zs(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = tu(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return Vt(e);
};
Ce.hydrate = function(e, t, n) {
  if (!zl(t)) throw Error(E(200));
  return Ol(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!qs(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = Oc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = zc(t, null, e, 1, n ?? null, l, !1, i, s), e[et] = t.current, bn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Tl(t);
};
Ce.render = function(e, t, n) {
  if (!zl(t)) throw Error(E(200));
  return Ol(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!zl(e)) throw Error(E(40));
  return e._reactRootContainer ? (Vt(function() {
    Ol(null, null, e, !1, function() {
      e._reactRootContainer = null, e[et] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Qs;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Ol(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Ic() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), Io.exports = Ce;
var Np = Io.exports, Mc, po = Np;
Mc = po.createRoot, po.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, or.apply(this, arguments);
}
var ft;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ft || (ft = {}));
const ho = "popstate";
function jp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let {
      pathname: i,
      search: s,
      hash: o
    } = r.location;
    return ns(
      "",
      {
        pathname: i,
        search: s,
        hash: o
      },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : gl(l);
  }
  return Cp(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Dc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ep() {
  return Math.random().toString(36).substr(2, 8);
}
function mo(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function ns(e, t, n, r) {
  return n === void 0 && (n = null), or({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? kn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Ep()
  });
}
function gl(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function kn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Cp(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: l = document.defaultView,
    v5Compat: i = !1
  } = r, s = l.history, o = ft.Pop, u = null, c = p();
  c == null && (c = 0, s.replaceState(or({}, s.state, {
    idx: c
  }), ""));
  function p() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function f() {
    o = ft.Pop;
    let _ = p(), h = _ == null ? null : _ - c;
    c = _, u && u({
      action: o,
      location: N.location,
      delta: h
    });
  }
  function v(_, h) {
    o = ft.Push;
    let d = ns(N.location, _, h);
    c = p() + 1;
    let m = mo(d, c), y = N.createHref(d);
    try {
      s.pushState(m, "", y);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError")
        throw x;
      l.location.assign(y);
    }
    i && u && u({
      action: o,
      location: N.location,
      delta: 1
    });
  }
  function w(_, h) {
    o = ft.Replace;
    let d = ns(N.location, _, h);
    c = p();
    let m = mo(d, c), y = N.createHref(d);
    s.replaceState(m, "", y), i && u && u({
      action: o,
      location: N.location,
      delta: 0
    });
  }
  function k(_) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href, d = typeof _ == "string" ? _ : gl(_);
    return d = d.replace(/ $/, "%20"), Z(h, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, h);
  }
  let N = {
    get action() {
      return o;
    },
    get location() {
      return e(l, s);
    },
    listen(_) {
      if (u)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(ho, f), u = _, () => {
        l.removeEventListener(ho, f), u = null;
      };
    },
    createHref(_) {
      return t(l, _);
    },
    createURL: k,
    encodeLocation(_) {
      let h = k(_);
      return {
        pathname: h.pathname,
        search: h.search,
        hash: h.hash
      };
    },
    push: v,
    replace: w,
    go(_) {
      return s.go(_);
    }
  };
  return N;
}
var vo;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(vo || (vo = {}));
function _p(e, t, n) {
  return n === void 0 && (n = "/"), Pp(e, t, n);
}
function Pp(e, t, n, r) {
  let l = typeof t == "string" ? kn(t) : t, i = bs(l.pathname || "/", n);
  if (i == null)
    return null;
  let s = Fc(e);
  Lp(s);
  let o = null;
  for (let u = 0; o == null && u < s.length; ++u) {
    let c = Bp(i);
    o = Ap(s[u], c);
  }
  return o;
}
function Fc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, s, o) => {
    let u = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i
    };
    u.relativePath.startsWith("/") && (Z(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
    let c = kt([r, u.relativePath]), p = n.concat(u);
    i.children && i.children.length > 0 && (Z(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')
    ), Fc(i.children, t, p, c)), !(i.path == null && !i.index) && t.push({
      path: c,
      score: Dp(c, i.index),
      routesMeta: p
    });
  };
  return e.forEach((i, s) => {
    var o;
    if (i.path === "" || !((o = i.path) != null && o.includes("?")))
      l(i, s);
    else
      for (let u of Ac(i.path))
        l(i, s, u);
  }), t;
}
function Ac(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
  if (r.length === 0)
    return l ? [i, ""] : [i];
  let s = Ac(r.join("/")), o = [];
  return o.push(...s.map((u) => u === "" ? i : [i, u].join("/"))), l && o.push(...s), o.map((u) => e.startsWith("/") && u === "" ? "/" : u);
}
function Lp(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Fp(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Rp = /^:[\w-]+$/, Tp = 3, zp = 2, Op = 1, Ip = 10, Mp = -2, go = (e) => e === "*";
function Dp(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(go) && (r += Mp), t && (r += zp), n.filter((l) => !go(l)).reduce((l, i) => l + (Rp.test(i) ? Tp : i === "" ? Op : Ip), r);
}
function Fp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ap(e, t, n) {
  let {
    routesMeta: r
  } = e, l = {}, i = "/", s = [];
  for (let o = 0; o < r.length; ++o) {
    let u = r[o], c = o === r.length - 1, p = i === "/" ? t : t.slice(i.length) || "/", f = Up({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: c
    }, p), v = u.route;
    if (!f)
      return null;
    Object.assign(l, f.params), s.push({
      // TODO: Can this as be avoided?
      params: l,
      pathname: kt([i, f.pathname]),
      pathnameBase: Qp(kt([i, f.pathnameBase])),
      route: v
    }), f.pathnameBase !== "/" && (i = kt([i, f.pathnameBase]));
  }
  return s;
}
function Up(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = $p(e.path, e.caseSensitive, e.end), l = t.match(n);
  if (!l) return null;
  let i = l[0], s = i.replace(/(.)\/+$/, "$1"), o = l.slice(1);
  return {
    params: r.reduce((c, p, f) => {
      let {
        paramName: v,
        isOptional: w
      } = p;
      if (v === "*") {
        let N = o[f] || "";
        s = i.slice(0, i.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const k = o[f];
      return w && !k ? c[v] = void 0 : c[v] = (k || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function $p(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Dc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, o, u) => (r.push({
    paramName: o,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r];
}
function Bp(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Dc(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function bs(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Vp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = ""
  } = typeof e == "string" ? kn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Wp(n, t) : t,
    search: Kp(r),
    hash: Yp(l)
  };
}
function Wp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
  }), n.length > 1 ? n.join("/") : "/";
}
function oi(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Hp(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function ea(e, t) {
  let n = Hp(e);
  return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function ta(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string" ? l = kn(e) : (l = or({}, e), Z(!l.pathname || !l.pathname.includes("?"), oi("?", "pathname", "search", l)), Z(!l.pathname || !l.pathname.includes("#"), oi("#", "pathname", "hash", l)), Z(!l.search || !l.search.includes("#"), oi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "", s = i ? "/" : l.pathname, o;
  if (s == null)
    o = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; )
        v.shift(), f -= 1;
      l.pathname = v.join("/");
    }
    o = f >= 0 ? t[f] : "/";
  }
  let u = Vp(l, o), c = s && s !== "/" && s.endsWith("/"), p = (i || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || p) && (u.pathname += "/"), u;
}
const kt = (e) => e.join("/").replace(/\/\/+/g, "/"), Qp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Kp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Yp = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Gp(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Uc = ["post", "put", "patch", "delete"];
new Set(Uc);
const Xp = ["get", ...Uc];
new Set(Xp);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ur.apply(this, arguments);
}
const na = /* @__PURE__ */ g.createContext(null), Jp = /* @__PURE__ */ g.createContext(null), Pt = /* @__PURE__ */ g.createContext(null), Il = /* @__PURE__ */ g.createContext(null), lt = /* @__PURE__ */ g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), $c = /* @__PURE__ */ g.createContext(null);
function Zp(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Nn() || Z(!1);
  let {
    basename: r,
    navigator: l
  } = g.useContext(Pt), {
    hash: i,
    pathname: s,
    search: o
  } = Vc(e, {
    relative: n
  }), u = s;
  return r !== "/" && (u = s === "/" ? r : kt([r, s])), l.createHref({
    pathname: u,
    search: o,
    hash: i
  });
}
function Nn() {
  return g.useContext(Il) != null;
}
function mr() {
  return Nn() || Z(!1), g.useContext(Il).location;
}
function Bc(e) {
  g.useContext(Pt).static || g.useLayoutEffect(e);
}
function ra() {
  let {
    isDataRoute: e
  } = g.useContext(lt);
  return e ? dh() : qp();
}
function qp() {
  Nn() || Z(!1);
  let e = g.useContext(na), {
    basename: t,
    future: n,
    navigator: r
  } = g.useContext(Pt), {
    matches: l
  } = g.useContext(lt), {
    pathname: i
  } = mr(), s = JSON.stringify(ea(l, n.v7_relativeSplatPath)), o = g.useRef(!1);
  return Bc(() => {
    o.current = !0;
  }), g.useCallback(function(c, p) {
    if (p === void 0 && (p = {}), !o.current) return;
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let f = ta(c, JSON.parse(s), i, p.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : kt([t, f.pathname])), (p.replace ? r.replace : r.push)(f, p.state, p);
  }, [t, r, s, i, e]);
}
function bp() {
  let {
    matches: e
  } = g.useContext(lt), t = e[e.length - 1];
  return t ? t.params : {};
}
function Vc(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = g.useContext(Pt), {
    matches: l
  } = g.useContext(lt), {
    pathname: i
  } = mr(), s = JSON.stringify(ea(l, r.v7_relativeSplatPath));
  return g.useMemo(() => ta(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function eh(e, t) {
  return th(e, t);
}
function th(e, t, n, r) {
  Nn() || Z(!1);
  let {
    navigator: l
  } = g.useContext(Pt), {
    matches: i
  } = g.useContext(lt), s = i[i.length - 1], o = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let c = mr(), p;
  if (t) {
    var f;
    let _ = typeof t == "string" ? kn(t) : t;
    u === "/" || (f = _.pathname) != null && f.startsWith(u) || Z(!1), p = _;
  } else
    p = c;
  let v = p.pathname || "/", w = v;
  if (u !== "/") {
    let _ = u.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let k = _p(e, {
    pathname: w
  }), N = sh(k && k.map((_) => Object.assign({}, _, {
    params: Object.assign({}, o, _.params),
    pathname: kt([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      l.encodeLocation ? l.encodeLocation(_.pathname).pathname : _.pathname
    ]),
    pathnameBase: _.pathnameBase === "/" ? u : kt([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      l.encodeLocation ? l.encodeLocation(_.pathnameBase).pathname : _.pathnameBase
    ])
  })), i, n, r);
  return t && N ? /* @__PURE__ */ g.createElement(Il.Provider, {
    value: {
      location: ur({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, p),
      navigationType: ft.Pop
    }
  }, N) : N;
}
function nh() {
  let e = ch(), t = Gp(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ g.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ g.createElement("pre", {
    style: l
  }, n) : null, null);
}
const rh = /* @__PURE__ */ g.createElement(nh, null);
class lh extends g.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ g.createElement(lt.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ g.createElement($c.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function ih(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, l = g.useContext(na);
  return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ g.createElement(lt.Provider, {
    value: t
  }, r);
}
function sh(e, t, n, r) {
  var l;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var i;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let s = e, o = (l = n) == null ? void 0 : l.errors;
  if (o != null) {
    let p = s.findIndex((f) => f.route.id && (o == null ? void 0 : o[f.route.id]) !== void 0);
    p >= 0 || Z(!1), s = s.slice(0, Math.min(s.length, p + 1));
  }
  let u = !1, c = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < s.length; p++) {
      let f = s[p];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = p), f.route.id) {
        let {
          loaderData: v,
          errors: w
        } = n, k = f.route.loader && v[f.route.id] === void 0 && (!w || w[f.route.id] === void 0);
        if (f.route.lazy || k) {
          u = !0, c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((p, f, v) => {
    let w, k = !1, N = null, _ = null;
    n && (w = o && f.route.id ? o[f.route.id] : void 0, N = f.route.errorElement || rh, u && (c < 0 && v === 0 ? (fh("route-fallback"), k = !0, _ = null) : c === v && (k = !0, _ = f.route.hydrateFallbackElement || null)));
    let h = t.concat(s.slice(0, v + 1)), d = () => {
      let m;
      return w ? m = N : k ? m = _ : f.route.Component ? m = /* @__PURE__ */ g.createElement(f.route.Component, null) : f.route.element ? m = f.route.element : m = p, /* @__PURE__ */ g.createElement(ih, {
        match: f,
        routeContext: {
          outlet: p,
          matches: h,
          isDataRoute: n != null
        },
        children: m
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || v === 0) ? /* @__PURE__ */ g.createElement(lh, {
      location: n.location,
      revalidation: n.revalidation,
      component: N,
      error: w,
      children: d(),
      routeContext: {
        outlet: null,
        matches: h,
        isDataRoute: !0
      }
    }) : d();
  }, null);
}
var Wc = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Wc || {}), Hc = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Hc || {});
function ah(e) {
  let t = g.useContext(na);
  return t || Z(!1), t;
}
function oh(e) {
  let t = g.useContext(Jp);
  return t || Z(!1), t;
}
function uh(e) {
  let t = g.useContext(lt);
  return t || Z(!1), t;
}
function Qc(e) {
  let t = uh(), n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function ch() {
  var e;
  let t = g.useContext($c), n = oh(), r = Qc();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function dh() {
  let {
    router: e
  } = ah(Wc.UseNavigateStable), t = Qc(Hc.UseNavigateStable), n = g.useRef(!1);
  return Bc(() => {
    n.current = !0;
  }), g.useCallback(function(l, i) {
    i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, ur({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
const yo = {};
function fh(e, t, n) {
  yo[e] || (yo[e] = !0);
}
function ph(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function hh(e) {
  let {
    to: t,
    replace: n,
    state: r,
    relative: l
  } = e;
  Nn() || Z(!1);
  let {
    future: i,
    static: s
  } = g.useContext(Pt), {
    matches: o
  } = g.useContext(lt), {
    pathname: u
  } = mr(), c = ra(), p = ta(t, ea(o, i.v7_relativeSplatPath), u, l === "path"), f = JSON.stringify(p);
  return g.useEffect(() => c(JSON.parse(f), {
    replace: n,
    state: r,
    relative: l
  }), [c, f, l, n, r]), null;
}
function Ye(e) {
  Z(!1);
}
function mh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ft.Pop,
    navigator: i,
    static: s = !1,
    future: o
  } = e;
  Nn() && Z(!1);
  let u = t.replace(/^\/*/, "/"), c = g.useMemo(() => ({
    basename: u,
    navigator: i,
    static: s,
    future: ur({
      v7_relativeSplatPath: !1
    }, o)
  }), [u, o, i, s]);
  typeof r == "string" && (r = kn(r));
  let {
    pathname: p = "/",
    search: f = "",
    hash: v = "",
    state: w = null,
    key: k = "default"
  } = r, N = g.useMemo(() => {
    let _ = bs(p, u);
    return _ == null ? null : {
      location: {
        pathname: _,
        search: f,
        hash: v,
        state: w,
        key: k
      },
      navigationType: l
    };
  }, [u, p, f, v, w, k, l]);
  return N == null ? null : /* @__PURE__ */ g.createElement(Pt.Provider, {
    value: c
  }, /* @__PURE__ */ g.createElement(Il.Provider, {
    children: n,
    value: N
  }));
}
function vh(e) {
  let {
    children: t,
    location: n
  } = e;
  return eh(rs(t), n);
}
new Promise(() => {
});
function rs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return g.Children.forEach(e, (r, l) => {
    if (!/* @__PURE__ */ g.isValidElement(r))
      return;
    let i = [...t, l];
    if (r.type === g.Fragment) {
      n.push.apply(n, rs(r.props.children, i));
      return;
    }
    r.type !== Ye && Z(!1), !r.props.index || !r.props.children || Z(!1);
    let s = {
      id: r.props.id || i.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = rs(r.props.children, i)), n.push(s);
  }), n;
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function gh(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), l, i;
  for (i = 0; i < r.length; i++)
    l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function yh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function wh(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !yh(e);
}
const xh = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], Sh = "6";
try {
  window.__reactRouterVersion = Sh;
} catch {
}
const kh = "startTransition", wo = dd[kh];
function Nh(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: l
  } = e, i = g.useRef();
  i.current == null && (i.current = jp({
    window: l,
    v5Compat: !0
  }));
  let s = i.current, [o, u] = g.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: c
  } = r || {}, p = g.useCallback((f) => {
    c && wo ? wo(() => u(f)) : u(f);
  }, [u, c]);
  return g.useLayoutEffect(() => s.listen(p), [s, p]), g.useEffect(() => ph(r), [r]), /* @__PURE__ */ g.createElement(mh, {
    basename: t,
    children: n,
    location: o.location,
    navigationType: o.action,
    navigator: s,
    future: r
  });
}
const jh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Eh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Kt = /* @__PURE__ */ g.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: l,
    reloadDocument: i,
    replace: s,
    state: o,
    target: u,
    to: c,
    preventScrollReset: p,
    viewTransition: f
  } = t, v = gh(t, xh), {
    basename: w
  } = g.useContext(Pt), k, N = !1;
  if (typeof c == "string" && Eh.test(c) && (k = c, jh))
    try {
      let m = new URL(window.location.href), y = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c), x = bs(y.pathname, w);
      y.origin === m.origin && x != null ? c = x + y.search + y.hash : N = !0;
    } catch {
    }
  let _ = Zp(c, {
    relative: l
  }), h = Ch(c, {
    replace: s,
    state: o,
    target: u,
    preventScrollReset: p,
    relative: l,
    viewTransition: f
  });
  function d(m) {
    r && r(m), m.defaultPrevented || h(m);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ g.createElement("a", ls({}, v, {
      href: k || _,
      onClick: N || i ? r : d,
      ref: n,
      target: u
    }))
  );
});
var xo;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(xo || (xo = {}));
var So;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(So || (So = {}));
function Ch(e, t) {
  let {
    target: n,
    replace: r,
    state: l,
    preventScrollReset: i,
    relative: s,
    viewTransition: o
  } = t === void 0 ? {} : t, u = ra(), c = mr(), p = Vc(e, {
    relative: s
  });
  return g.useCallback((f) => {
    if (wh(f, n)) {
      f.preventDefault();
      let v = r !== void 0 ? r : gl(c) === gl(p);
      u(e, {
        replace: v,
        state: l,
        preventScrollReset: i,
        relative: s,
        viewTransition: o
      });
    }
  }, [c, u, p, r, l, n, e, i, s, o]);
}
function _h() {
  const [e, t] = g.useState(null), [n, r] = g.useState(""), [l, i] = g.useState(""), [s, o] = g.useState(!0), [u, c] = g.useState(""), [p, f] = g.useState(""), [v, w] = g.useState(!1), [k, N] = g.useState(!1);
  g.useEffect(() => {
    t({
      apiKey: void 0,
      authDomain: void 0,
      projectId: void 0,
      appId: void 0,
      messagingSenderId: void 0,
      measurementId: void 0
    });
  }, []);
  function _(m) {
    const y = (m == null ? void 0 : m.code) || "", x = (m == null ? void 0 : m.message) || "";
    return y.includes("invalid-email") ? "Please enter a valid email address." : y.includes("user-not-found") ? "No account found with that email." : y.includes("wrong-password") || y.includes("invalid-credential") || x.includes("INVALID_LOGIN_CREDENTIALS") ? "Incorrect email or password." : y.includes("too-many-requests") ? "Too many attempts. Please wait and try again." : y.includes("network-request-failed") ? "Network error. Check your connection and try again." : x || "Something went wrong.";
  }
  async function h(m) {
    m.preventDefault(), c(""), f(""), w(!0);
    try {
      if (!(e != null && e.apiKey)) throw new Error("Firebase not configured");
      const y = (await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js")).initializeApp(e), x = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"), { getAuth: j, setPersistence: S, browserLocalPersistence: P, browserSessionPersistence: O, signInWithEmailAndPassword: z } = x, F = j();
      await S(F, s ? P : O);
      const H = await (await z(F, n.trim(), l)).user.getIdToken();
      if (!(await fetch("/auth/session", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({ idToken: H }) })).ok) throw new Error("Session creation failed");
      f("Signed in successfully. Redirecting..."), setTimeout(() => window.location.href = "/dashboard", 600);
    } catch (y) {
      c(_(y));
    } finally {
      w(!1);
    }
  }
  async function d() {
    c(""), f("");
    try {
      if (!(e != null && e.apiKey)) throw new Error("Firebase not configured");
      const m = (await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js")).initializeApp(e), { getAuth: y, sendPasswordResetEmail: x } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"), j = y();
      await x(j, n.trim()), f("If an account exists for that email, a reset link has been sent.");
    } catch (m) {
      c(_(m));
    }
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "auth-layout", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "auth-hero", children: [
      /* @__PURE__ */ a.jsx("img", { className: "hero-logo", src: "https://cdn.builder.io/api/v1/image/assets%2Fa5647e4ccf094d4d939a079b9f892c1c%2F240094ac7d6b4725b685503d97c9d9a3?format=webp&width=96", alt: "FreshBasket logo" }),
      /* @__PURE__ */ a.jsx("h2", { className: "hero-heading", children: "Welcome back" }),
      /* @__PURE__ */ a.jsx("p", { className: "hero-sub", children: "Sign in to manage orders, riders and deliveries." }),
      /* @__PURE__ */ a.jsxs("ul", { className: "hero-points", children: [
        /* @__PURE__ */ a.jsx("li", { children: "Secure account access" }),
        /* @__PURE__ */ a.jsx("li", { children: "Real-time dashboards" }),
        /* @__PURE__ */ a.jsx("li", { children: "Faster operations" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "auth-panel auth-panel-card", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "auth-title", children: "Sign in to FreshBasket" }),
      u && /* @__PURE__ */ a.jsx("div", { className: "auth-error", children: u }),
      p && /* @__PURE__ */ a.jsx("div", { className: "auth-success", children: p }),
      /* @__PURE__ */ a.jsxs("form", { className: "auth-form", onSubmit: h, children: [
        /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
          "Email",
          /* @__PURE__ */ a.jsx("input", { className: "auth-input", type: "email", value: n, onChange: (m) => r(m.target.value), required: !0 })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
          "Password",
          /* @__PURE__ */ a.jsxs("span", { className: "password-field", children: [
            /* @__PURE__ */ a.jsx("input", { className: "auth-input", type: k ? "text" : "password", value: l, onChange: (m) => i(m.target.value), required: !0 }),
            /* @__PURE__ */ a.jsx("button", { type: "button", id: "togglePwd", className: "toggle-password", "aria-label": k ? "Hide password" : "Show password", onClick: () => N((m) => !m), children: "👁️" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "auth-actions", children: [
          /* @__PURE__ */ a.jsxs("label", { className: "remember", children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: s, onChange: (m) => o(m.target.checked) }),
            " Remember me"
          ] }),
          /* @__PURE__ */ a.jsx("button", { className: "link-button", type: "button", onClick: d, children: "Forgot password?" })
        ] }),
        /* @__PURE__ */ a.jsx("button", { className: "auth-button auth-button-wide", disabled: v, type: "submit", children: v ? "Signing in…" : "Sign in" })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "auth-alt", children: [
        "No account? ",
        /* @__PURE__ */ a.jsx("a", { href: "/auth/register", children: "Register" })
      ] })
    ] })
  ] });
}
function Ph() {
  const [e, t] = g.useState(null), [n, r] = g.useState(""), [l, i] = g.useState(""), [s, o] = g.useState(""), [u, c] = g.useState(""), [p, f] = g.useState(""), [v, w] = g.useState(""), [k, N] = g.useState(""), [_, h] = g.useState(!1), [d, m] = g.useState(!1);
  g.useEffect(() => {
    t({
      apiKey: void 0,
      authDomain: void 0,
      projectId: void 0,
      appId: void 0,
      messagingSenderId: void 0,
      measurementId: void 0
    });
  }, []);
  function y(j) {
    const S = (j == null ? void 0 : j.code) || "";
    return S.includes("email-already-in-use") ? "An account with this email already exists." : S.includes("weak-password") ? "Password should be at least 6 characters." : S.includes("invalid-email") ? "Please enter a valid email address." : S.includes("network-request-failed") ? "Network error. Check your connection and try again." : (j == null ? void 0 : j.message) || "Something went wrong.";
  }
  async function x(j) {
    j.preventDefault(), w(""), N(""), h(!0);
    try {
      if (u !== p) throw new Error("Passwords do not match");
      if (!(e != null && e.apiKey)) throw new Error("Firebase not configured");
      const S = (await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js")).initializeApp(e), { getAuth: P, createUserWithEmailAndPassword: O } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"), z = P(), C = await (await O(z, s.trim(), u)).user.getIdToken();
      if (!(await fetch("/auth/session", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({ idToken: C, profile: { fullName: n, contactNumber: l } }) })).ok) throw new Error("Session creation failed");
      N("Account created successfully. Redirecting..."), setTimeout(() => window.location.href = "/riders", 700);
    } catch (S) {
      w(y(S));
    } finally {
      h(!1);
    }
  }
  return /* @__PURE__ */ a.jsxs("section", { className: "auth-panel", style: { maxWidth: 520, margin: "40px auto" }, children: [
    /* @__PURE__ */ a.jsx("h2", { className: "auth-title", children: "Register" }),
    v && /* @__PURE__ */ a.jsx("div", { className: "auth-error", children: v }),
    k && /* @__PURE__ */ a.jsx("div", { className: "auth-success", children: k }),
    /* @__PURE__ */ a.jsxs("form", { className: "auth-form", onSubmit: x, children: [
      /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
        "Full name",
        /* @__PURE__ */ a.jsx("input", { className: "auth-input", value: n, onChange: (j) => r(j.target.value), required: !0 })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
        "Contact number",
        /* @__PURE__ */ a.jsx("input", { className: "auth-input", value: l, onChange: (j) => i(j.target.value), inputMode: "tel", placeholder: "e.g. +1 555 123 4567" })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
        "Email",
        /* @__PURE__ */ a.jsx("input", { className: "auth-input", type: "email", value: s, onChange: (j) => o(j.target.value), required: !0 })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
        "Password",
        /* @__PURE__ */ a.jsxs("span", { className: "password-field", children: [
          /* @__PURE__ */ a.jsx("input", { className: "auth-input", type: d ? "text" : "password", value: u, onChange: (j) => c(j.target.value), minLength: 6, required: !0 }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "toggle-password", "aria-label": d ? "Hide password" : "Show password", onClick: () => m((j) => !j), children: "👁️" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "auth-label", children: [
        "Confirm Password",
        /* @__PURE__ */ a.jsx("input", { className: "auth-input", type: "password", value: p, onChange: (j) => f(j.target.value), minLength: 6, required: !0 })
      ] }),
      /* @__PURE__ */ a.jsx("button", { className: "auth-button", disabled: _, type: "submit", children: _ ? "Creating account…" : "Create account" })
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: "auth-alt", children: [
      "Have an account? ",
      /* @__PURE__ */ a.jsx("a", { href: "/auth/login", children: "Login" })
    ] })
  ] });
}
function pt({ children: e }) {
  const t = ra();
  return g.useEffect(() => {
    const n = document.getElementById("notifBtn"), r = document.getElementById("notifMenu"), l = document.getElementById("profileBtn"), i = document.getElementById("profileMenu");
    function s(f, v, w) {
      f && (f.classList.toggle("hidden", !w), f.setAttribute("aria-hidden", w ? "false" : "true"), v && v.setAttribute("aria-expanded", w ? "true" : "false"));
    }
    function o() {
      s(r, n, !1), s(i, l, !1);
    }
    function u(f) {
      const v = (w) => w && (w === f.target || w.contains(f.target));
      !v(r) && !v(n) && !v(i) && !v(l) && o();
    }
    function c(f) {
      f.key === "Escape" && o();
    }
    function p(f) {
      f && f.querySelectorAll(".dropdown-item").forEach((v) => {
        v.addEventListener("click", () => o());
      });
    }
    return n && r && (n.addEventListener("click", (f) => {
      f.stopPropagation(), s(i, l, !1), s(r, n, r.classList.contains("hidden"));
    }), p(r)), l && i && (l.addEventListener("click", (f) => {
      f.stopPropagation(), s(r, n, !1), s(i, l, i.classList.contains("hidden"));
    }), p(i)), document.addEventListener("click", u), document.addEventListener("keydown", c), () => {
      document.removeEventListener("click", u), document.removeEventListener("keydown", c);
    };
  }, []), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "site-title", children: /* @__PURE__ */ a.jsxs("span", { className: "brand", children: [
        /* @__PURE__ */ a.jsx("img", { className: "brand-logo", src: "https://cdn.builder.io/api/v1/image/assets%2Fa5647e4ccf094d4d939a079b9f892c1c%2F240094ac7d6b4725b685503d97c9d9a3?format=webp&width=64", alt: "FreshBasket logo" }),
        /* @__PURE__ */ a.jsx("span", { className: "brand-name", children: "FreshBasket" })
      ] }) }),
      /* @__PURE__ */ a.jsxs("nav", { className: "site-nav", children: [
        /* @__PURE__ */ a.jsx(Kt, { to: "/dashboard", onClick: (n) => {
          n.preventDefault(), t("/dashboard");
        }, children: "Dashboard" }),
        /* @__PURE__ */ a.jsx(Kt, { to: "/orders", onClick: (n) => {
          n.preventDefault(), t("/orders");
        }, children: "Orders" }),
        /* @__PURE__ */ a.jsx(Kt, { to: "/riders", onClick: (n) => {
          n.preventDefault(), t("/riders");
        }, children: "Riders" }),
        /* @__PURE__ */ a.jsx(Kt, { to: "/reports", onClick: (n) => {
          n.preventDefault(), t("/reports");
        }, children: "Reports" }),
        /* @__PURE__ */ a.jsx("span", { className: "site-nav-spacer" }),
        /* @__PURE__ */ a.jsxs("div", { className: "nav-dropdown", children: [
          /* @__PURE__ */ a.jsx("button", { id: "notifBtn", className: "icon-btn", "aria-haspopup": "true", "aria-expanded": "false", "aria-controls": "notifMenu", "aria-label": "Notifications", title: "Notifications", children: /* @__PURE__ */ a.jsxs("svg", { className: "bell-icon", width: "29", height: "29", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
            /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs("linearGradient", { id: "bellGold", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "#C08B3E" }),
              /* @__PURE__ */ a.jsx("stop", { offset: "50%", stopColor: "#D4AF37" }),
              /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "#FFD700" })
            ] }) }),
            /* @__PURE__ */ a.jsx("path", { fill: "url(#bellGold)", d: "M12 22a2 2 0 0 0 1.995-1.85L14 20h-4a2 2 0 0 0 1.85 1.995L12 22Zm8-5h-1a1 1 0 0 1-.707-.293l-.147-.147A3.99 3.99 0 0 1 17 14.172V11a5 5 0 1 0-10 0v3.172a3.99 3.99 0 0 1-1.146 2.388l-.147.147A1 1 0 0 1 5 17H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Z" })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { id: "notifMenu", className: "dropdown-menu hidden", role: "menu", "aria-labelledby": "notifBtn", "aria-hidden": "true", children: [
            /* @__PURE__ */ a.jsx("div", { className: "dropdown-header", children: "Notifications" }),
            /* @__PURE__ */ a.jsx("div", { className: "dropdown-item", children: "No new notifications" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "nav-dropdown", children: [
          /* @__PURE__ */ a.jsx("button", { id: "profileBtn", className: "icon-btn", "aria-haspopup": "true", "aria-expanded": "false", "aria-controls": "profileMenu", title: "Profile", children: /* @__PURE__ */ a.jsxs("svg", { className: "avatar", width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "7.5", r: "3.5", stroke: "currentColor", strokeWidth: "1.5" }),
            /* @__PURE__ */ a.jsx("path", { d: "M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { id: "profileMenu", className: "dropdown-menu hidden", role: "menu", "aria-labelledby": "profileBtn", "aria-hidden": "true", children: [
            /* @__PURE__ */ a.jsx("div", { className: "dropdown-header", children: "Signed in" }),
            /* @__PURE__ */ a.jsx(Kt, { className: "dropdown-item", to: "/riders", onClick: (n) => {
              n.preventDefault(), t("/riders");
            }, children: "Riders" }),
            /* @__PURE__ */ a.jsx(Kt, { className: "dropdown-item", to: "/orders", onClick: (n) => {
              n.preventDefault(), t("/orders");
            }, children: "Orders" }),
            /* @__PURE__ */ a.jsx("form", { method: "POST", action: "/auth/logout", children: /* @__PURE__ */ a.jsx("button", { className: "dropdown-item", type: "submit", children: "Logout" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("main", { className: "content", children: e }),
    /* @__PURE__ */ a.jsxs("footer", { className: "site-footer", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " FreshBasket"
    ] })
  ] });
}
function Lh({ onClose: e, onCreated: t }) {
  const [n, r] = g.useState(""), [l, i] = g.useState(""), [s, o] = g.useState(""), [u, c] = g.useState(""), [p, f] = g.useState(!1), [v, w] = g.useState(""), [k, N] = g.useState("");
  async function _() {
    if (w(""), N(""), !n || !l) {
      w("Email and password are required");
      return;
    }
    f(!0);
    try {
      const h = await fetch("/api/mobile/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: String(n).trim(), password: String(l), fullName: String(s).trim() || null, contactNumber: String(u).trim() || null })
      }), d = await h.json().catch(() => null);
      if (!h.ok) throw new Error(d && d.error ? d.error : d && d.message ? d.message : "Failed to create rider");
      N("Rider created successfully"), t && t(), setTimeout(() => {
        e && e();
      }, 600);
    } catch (h) {
      w(h.message || "Failed to create rider");
    } finally {
      f(!1);
    }
  }
  return /* @__PURE__ */ a.jsx("div", { className: "create-rider-backdrop", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ a.jsxs("div", { className: "create-rider-modal", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "create-rider-header", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "create-rider-title", children: "Create Rider" }),
      /* @__PURE__ */ a.jsx("button", { className: "create-rider-close", onClick: e, "aria-label": "Close", children: "✕" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "create-rider-body", children: [
      v && /* @__PURE__ */ a.jsx("div", { className: "auth-error", children: v }),
      k && /* @__PURE__ */ a.jsx("div", { className: "auth-success", children: k }),
      /* @__PURE__ */ a.jsxs("label", { className: "field-label", children: [
        "Full name",
        /* @__PURE__ */ a.jsx("input", { className: "field-input", value: s, onChange: (h) => o(h.target.value), placeholder: "Optional" })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "field-label", children: [
        "Email",
        /* @__PURE__ */ a.jsx("input", { className: "field-input", type: "email", value: n, onChange: (h) => r(h.target.value), required: !0 })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "field-label", children: [
        "Password",
        /* @__PURE__ */ a.jsx("input", { className: "field-input", type: "password", value: l, onChange: (h) => i(h.target.value), required: !0 })
      ] }),
      /* @__PURE__ */ a.jsxs("label", { className: "field-label", children: [
        "Contact number",
        /* @__PURE__ */ a.jsx("input", { className: "field-input", value: u, onChange: (h) => c(h.target.value), placeholder: "Optional" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "create-rider-actions", children: [
        /* @__PURE__ */ a.jsx("button", { className: "btn-secondary", onClick: e, disabled: p, children: "Cancel" }),
        /* @__PURE__ */ a.jsx("button", { className: "btn-primary", onClick: _, disabled: p, children: p ? "Creating…" : "Create" })
      ] })
    ] })
  ] }) });
}
function Rh() {
  const [e, t] = g.useState([]), [n, r] = g.useState(""), [l, i] = g.useState("all"), [s, o] = g.useState("all"), [u, c] = g.useState("all"), [p, f] = g.useState(!0), [v, w] = g.useState(""), [k, N] = g.useState(1), [_, h] = g.useState(20), [d, m] = g.useState({ total: 0, page: 1, limit: 20, pages: 1 }), [y, x] = g.useState(!1);
  g.useEffect(() => {
    let S = !0;
    return (async () => {
      var P, O, z, F;
      f(!0), w("");
      try {
        const C = new URLSearchParams();
        n && C.set("q", n), u !== "all" && C.set("status", u), l !== "all" && C.set("lastDays", l), C.set("page", String(k)), C.set("limit", String(_));
        const H = await fetch(`/api/riders?${C.toString()}`, { credentials: "include" });
        if (H.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        if (!H.ok) throw new Error("Failed to load riders");
        const U = await H.json();
        S && (t(Array.isArray(U.riders) ? U.riders : []), m({ total: ((P = U.meta) == null ? void 0 : P.total) || 0, page: ((O = U.meta) == null ? void 0 : O.page) || 1, limit: ((z = U.meta) == null ? void 0 : z.limit) || _, pages: ((F = U.meta) == null ? void 0 : F.pages) || 1 }));
      } catch (C) {
        S && w(C.message || "Failed to load riders");
      } finally {
        S && f(!1);
      }
    })(), () => {
      S = !1;
    };
  }, [n, u, l, k, _]);
  const j = g.useMemo(() => e.filter((S) => {
    if (n && !S.name.toLowerCase().includes(n.toLowerCase().trim()) || u !== "all" && S.status !== u || s !== "all" && String(S.id) !== String(s)) return !1;
    if (l !== "all") {
      const P = parseInt(S.lastActiveDays, 10) || 9999, O = parseInt(l, 10);
      if (!(P <= O)) return !1;
    }
    return !0;
  }), [e, n, u, s, l]);
  return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsxs("section", { className: "rider-commissions", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "rc-header riders-header", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "riders-header-left", children: [
        /* @__PURE__ */ a.jsx("h2", { className: "rc-title", children: "Rider Commissions" }),
        /* @__PURE__ */ a.jsx("p", { className: "rc-subtitle", children: "View and manage rider commissions based on performance and distance traveled." })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "riders-header-right", children: /* @__PURE__ */ a.jsx("button", { className: "btn-secondary btn-create-rider", onClick: () => x(!0), children: "Create Rider" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "rc-toolbar", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "rc-search", children: [
        /* @__PURE__ */ a.jsx("span", { className: "rc-search-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a.jsx("input", { className: "rc-search-input", type: "search", placeholder: "Search", value: n, onChange: (S) => {
          r(S.target.value), N(1);
        } })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-filters", children: [
        /* @__PURE__ */ a.jsxs("select", { className: "rc-select rc-select-arrow rc-chip", value: l, onChange: (S) => {
          i(S.target.value), N(1);
        }, children: [
          /* @__PURE__ */ a.jsx("option", { value: "all", children: "Date Range" }),
          /* @__PURE__ */ a.jsx("option", { value: "7", children: "Last 7 days" }),
          /* @__PURE__ */ a.jsx("option", { value: "30", children: "Last 30 days" })
        ] }),
        /* @__PURE__ */ a.jsxs("select", { className: "rc-select rc-select-arrow rc-chip", value: s, onChange: (S) => o(S.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "all", children: "Rider" }),
          e.map((S) => /* @__PURE__ */ a.jsx("option", { value: S.id, children: S.name }, S.id))
        ] }),
        /* @__PURE__ */ a.jsxs("select", { className: "rc-select rc-select-arrow rc-chip", value: u, onChange: (S) => {
          c(S.target.value), N(1);
        }, children: [
          /* @__PURE__ */ a.jsx("option", { value: "all", children: "Status" }),
          /* @__PURE__ */ a.jsx("option", { value: "Active", children: "Active" }),
          /* @__PURE__ */ a.jsx("option", { value: "Inactive", children: "Inactive" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("select", { className: "rc-select rc-select-arrow rc-chip", value: _, onChange: (S) => {
        h(parseInt(S.target.value, 10)), N(1);
      }, children: [10, 20, 50, 100].map((S) => /* @__PURE__ */ a.jsxs("option", { value: S, children: [
        S,
        "/page"
      ] }, S)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "rc-table-wrapper", children: [
      y && /* @__PURE__ */ a.jsx(Lh, { onClose: () => x(!1), onCreated: () => {
        window.location.reload();
      } }),
      /* @__PURE__ */ a.jsxs("table", { className: "rc-table", children: [
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { className: "col-name", children: "Rider Name" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-km", children: "Total KM Traveled" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-perf", children: "Delivery Performance" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-comm", children: "Commission Earned" })
        ] }) }),
        /* @__PURE__ */ a.jsxs("tbody", { children: [
          p && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 4, className: "section-note", children: "Loading…" }) }),
          !p && v && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 4, className: "auth-error", children: v }) }),
          !p && !v && j.map((S) => /* @__PURE__ */ a.jsxs("tr", { "data-rider-id": S.id, "data-status": S.status, "data-last-days": S.lastActiveDays, children: [
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-name", children: /* @__PURE__ */ a.jsx("a", { href: `/riders/${S.id}`, children: S.name }) }),
            /* @__PURE__ */ a.jsxs("td", { className: "rc-col-km", children: [
              S.totalKm,
              " ",
              /* @__PURE__ */ a.jsx("span", { className: "rc-km-unit", children: "km" })
            ] }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-perf", children: /* @__PURE__ */ a.jsxs("div", { className: "rc-progress", children: [
              /* @__PURE__ */ a.jsx("progress", { max: "100", value: S.performance, className: "rc-progress-bar" }),
              /* @__PURE__ */ a.jsx("span", { className: "rc-progress-value", children: S.performance })
            ] }) }),
            /* @__PURE__ */ a.jsxs("td", { className: "rc-col-commission", children: [
              "$",
              S.commissionUsd
            ] })
          ] }, S.id)),
          !p && !v && j.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 4, className: "section-note", children: "No riders found." }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-toolbar", "aria-label": "pagination", children: /* @__PURE__ */ a.jsxs("div", { className: "rc-filters", children: [
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", disabled: d.page <= 1 || p, onClick: () => N((S) => Math.max(1, S - 1)), children: "Prev" }),
      /* @__PURE__ */ a.jsxs("span", { className: "section-note", children: [
        "Page ",
        d.page,
        " of ",
        d.pages,
        " • ",
        d.total,
        " total"
      ] }),
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", disabled: d.page >= d.pages || p, onClick: () => N((S) => Math.min(d.pages, S + 1)), children: "Next" })
    ] }) })
  ] }) });
}
function Th() {
  const { id: e } = bp(), [t, n] = g.useState(null), [r, l] = g.useState(!0), [i, s] = g.useState("");
  if (g.useEffect(() => {
    let p = !0;
    return (async () => {
      l(!0), s("");
      try {
        const f = await fetch(`/api/riders/${e}`, { credentials: "include" });
        if (f.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        if (!f.ok) throw new Error("Failed to load rider");
        const v = await f.json();
        p && n(v);
      } catch (f) {
        p && s(f.message || "Failed to load rider");
      } finally {
        p && l(!1);
      }
    })(), () => {
      p = !1;
    };
  }, [e]), r)
    return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsx("section", { className: "section-page", children: /* @__PURE__ */ a.jsx("div", { className: "section-note", children: "Loading…" }) }) });
  if (i)
    return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsx("section", { className: "section-page", children: /* @__PURE__ */ a.jsx("div", { className: "auth-error", children: i }) }) });
  if (!t)
    return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsx("section", { className: "section-page", children: /* @__PURE__ */ a.jsx("div", { className: "section-note", children: "Not found" }) }) });
  const { rider: o, metrics: u, history: c } = t;
  return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsxs("section", { className: "rider-commissions", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "rc-header", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "rc-title", children: "Rider Profile" }),
      /* @__PURE__ */ a.jsx("p", { className: "rc-subtitle", children: "View detailed performance metrics for individual riders." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-table-wrapper rp-card", children: /* @__PURE__ */ a.jsxs("div", { className: "rp-details", children: [
      /* @__PURE__ */ a.jsx("img", { src: "https://cdn.builder.io/api/v1/image/assets%2Fa5647e4ccf094d4d939a079b9f892c1c%2Ff54e0df2f0fb4bff9c894340e2efe67a?format=webp&width=72", alt: "avatar", className: "rp-avatar" }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h3", { className: "rp-name", children: o.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "section-note", children: [
          "Rider ID: ",
          o.id
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-toolbar rp-stats", children: /* @__PURE__ */ a.jsxs("div", { className: "rc-filters rp-stats-wrap", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "rc-select rc-chip", children: [
        "Total Deliveries ",
        /* @__PURE__ */ a.jsx("strong", { children: u.totalDeliveries })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-select rc-chip", children: [
        "Avg. Delivery Time ",
        /* @__PURE__ */ a.jsxs("strong", { children: [
          u.avgDeliveryMins,
          " mins"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-select rc-chip", children: [
        "On-Time Rate ",
        /* @__PURE__ */ a.jsxs("strong", { children: [
          u.onTimeRate,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-select rc-chip", children: [
        "Total KM Traveled ",
        /* @__PURE__ */ a.jsxs("strong", { children: [
          u.totalKm,
          " km"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-table-wrapper", children: /* @__PURE__ */ a.jsxs("table", { className: "rc-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { className: "col-name", children: "Date" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-km", children: "Deliveries" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-perf", children: "Avg. Delivery Time" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-comm", children: "Distance (KM)" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: (c || []).map((p, f) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { className: "rc-col-name", children: p.date }),
        /* @__PURE__ */ a.jsx("td", { className: "rc-col-km", children: p.deliveries }),
        /* @__PURE__ */ a.jsxs("td", { className: "rc-col-perf", children: [
          p.avgTime,
          " mins"
        ] }),
        /* @__PURE__ */ a.jsxs("td", { className: "rc-col-commission", children: [
          p.distanceKm,
          " km"
        ] })
      ] }, f)) })
    ] }) })
  ] }) });
}
function Kc({ orderId: e, onClose: t, onAssigned: n }) {
  const [r, l] = g.useState([]), [i, s] = g.useState(!0), [o, u] = g.useState(""), [c, p] = g.useState(null);
  g.useEffect(() => {
    let v = !0;
    return (async () => {
      s(!0), u("");
      try {
        const w = await fetch("/api/riders?limit=200", { credentials: "include" });
        if (w.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        if (!w.ok) throw new Error("Failed to load riders");
        const k = await w.json();
        v && l(Array.isArray(k.riders) ? k.riders : k.riders || []);
      } catch (w) {
        v && u(w.message || "Failed to load riders");
      } finally {
        v && s(!1);
      }
    })(), () => {
      v = !1;
    };
  }, []);
  async function f(v) {
    if (!(!e || !v)) {
      p(v);
      try {
        const w = await fetch(`/api/orders/${encodeURIComponent(e)}/assign`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ riderId: v })
        });
        if (w.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        const k = await w.json().catch(() => null);
        if (!w.ok) throw new Error(k && k.error ? k.error : "Assign failed");
        n && n({ orderId: e, riderId: v }), t();
      } catch (w) {
        alert(w.message || "Failed to assign rider");
      } finally {
        p(null);
      }
    }
  }
  return /* @__PURE__ */ a.jsx("div", { className: "assign-modal-backdrop", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ a.jsxs("div", { className: "assign-modal", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "assign-modal-header", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "assign-modal-title", children: "Assign Rider" }),
      /* @__PURE__ */ a.jsx("button", { className: "assign-modal-close", onClick: t, "aria-label": "Close", children: "✕" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "assign-modal-body", children: [
      i && /* @__PURE__ */ a.jsx("div", { className: "section-note", children: "Loading riders…" }),
      o && /* @__PURE__ */ a.jsx("div", { className: "auth-error", children: o }),
      !i && !o && /* @__PURE__ */ a.jsxs("table", { className: "assign-table", children: [
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { children: "Name" }),
          /* @__PURE__ */ a.jsx("th", { children: "Last Active (days)" }),
          /* @__PURE__ */ a.jsx("th", { children: "Action" })
        ] }) }),
        /* @__PURE__ */ a.jsxs("tbody", { children: [
          r.map((v) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("td", { children: v.name }),
            /* @__PURE__ */ a.jsx("td", { children: v.lastActiveDays ?? "-" }),
            /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("button", { className: "btn-assign", onClick: () => f(v.id), disabled: c && c !== v.id, children: c === v.id ? "Assigning…" : "Assign" }) })
          ] }, v.id)),
          r.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 3, className: "section-note", children: "No riders found." }) })
        ] })
      ] })
    ] })
  ] }) });
}
function ui(e) {
  return (Array.isArray(e.tags) ? e.tags : typeof e.tags == "string" ? e.tags.split(",") : []).join(",").toLowerCase().includes("assigned") ? "assigned" : e.fulfillment_status === "fulfilled" ? "delivered" : e.fulfillment_status === "partial" ? "in-transit" : "new";
}
function zh() {
  const [e, t] = g.useState([]), [n, r] = g.useState(""), [l, i] = g.useState("all"), [s, o] = g.useState(1), [u, c] = g.useState(20), [p, f] = g.useState({ total: 0, page: 1, limit: 20, pages: 1 }), [v, w] = g.useState(!0), [k, N] = g.useState(""), [_, h] = g.useState(""), [d, m] = g.useState(!0), [y, x] = g.useState(!1), [j, S] = g.useState(null);
  g.useEffect(() => {
    let C = !0;
    return (async () => {
      var H, U, me, Pe;
      w(!0), N(""), h("");
      try {
        const ve = new URLSearchParams();
        n && ve.set("q", n), l && l !== "all" && ve.set("status", l), ve.set("page", String(s)), ve.set("limit", String(u));
        const L = await fetch(`/api/orders?${ve.toString()}`, { credentials: "include" });
        if (L.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        if (!L.ok) throw new Error("Failed to load orders");
        const T = await L.json();
        C && (t(Array.isArray(T.orders) ? T.orders : []), h(T.shopifyError || ""), m(!!T.shopifyConfigured), f({ total: ((H = T.meta) == null ? void 0 : H.total) || 0, page: ((U = T.meta) == null ? void 0 : U.page) || 1, limit: ((me = T.meta) == null ? void 0 : me.limit) || u, pages: ((Pe = T.meta) == null ? void 0 : Pe.pages) || 1 }));
      } catch (ve) {
        C && N(ve.message || "Failed to load orders");
      } finally {
        C && w(!1);
      }
    })(), () => {
      C = !1;
    };
  }, [n, l, s, u]);
  const P = g.useMemo(() => e, [e]), O = g.useMemo(() => Array.isArray(e) ? l === "all" ? e.filter((C) => ui(C) !== "assigned") : e.filter((C) => ui(C) === l) : [], [e, l]);
  function z() {
    S(null), x(!1);
  }
  function F(C) {
    try {
      const { orderId: H } = C || {};
      if (!H) return;
      t((U) => U.filter((me) => String(me.name || me.order_number || me.id) !== String(H))), f((U) => ({ ...U || {}, total: Math.max(0, ((U == null ? void 0 : U.total) || 0) - 1) }));
    } catch {
    }
  }
  return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsxs("section", { className: "rider-commissions", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "rc-header", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "rc-title", children: "Order Management" }),
      /* @__PURE__ */ a.jsx("p", { className: "rc-subtitle", children: "Manage orders synced from Shopify." })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "rc-toolbar", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "rc-search", children: [
        /* @__PURE__ */ a.jsx("span", { className: "rc-search-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ a.jsx("input", { className: "rc-search-input", type: "search", placeholder: "Search", value: n, onChange: (C) => {
          r(C.target.value), o(1);
        } })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-filters", children: [
        ["all", "new", "assigned", "in-transit", "delivered"].map((C) => /* @__PURE__ */ a.jsx("button", { className: `rc-select rc-chip${l === C ? " active" : ""}`, onClick: () => {
          i(C), o(1);
        }, "data-filter": C, children: C === "all" ? "All" : C.replace("-", " ") }, C)),
        /* @__PURE__ */ a.jsx("select", { className: "rc-select rc-select-arrow rc-chip", value: u, onChange: (C) => {
          c(parseInt(C.target.value, 10)), o(1);
        }, children: [10, 20, 50, 100].map((C) => /* @__PURE__ */ a.jsxs("option", { value: C, children: [
          C,
          "/page"
        ] }, C)) })
      ] })
    ] }),
    !d && /* @__PURE__ */ a.jsx("div", { className: "section-note", children: "Shopify is not configured. Set SHOPIFY_SHOP and SHOPIFY_ADMIN_TOKEN to enable orders sync." }),
    _ && /* @__PURE__ */ a.jsx("div", { className: "auth-error", children: _ }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-table-wrapper", children: /* @__PURE__ */ a.jsxs("table", { className: "rc-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { className: "col-name", children: "Order #" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-km", children: "Customer" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-perf", children: "Address" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-rider", children: "Rider" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-expected", children: "Expected Time" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-actual", children: "Actual Time" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-status", children: "Status" })
      ] }) }),
      /* @__PURE__ */ a.jsxs("tbody", { children: [
        v && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 7, className: "section-note", children: "Loading…" }) }),
        !v && k && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 7, className: "auth-error", children: k }) }),
        !v && !k && O.map((C, H) => {
          var L;
          const U = ui(C), me = C.full_name || (C.customer && C.customer.full_name ? C.customer.full_name : "");
          let Pe = "-";
          typeof C.shipping_address == "string" && String(C.shipping_address).trim() ? Pe = String(C.shipping_address).trim() : C.shipping_address && typeof C.shipping_address == "object" ? Pe = [C.shipping_address.address1 || "", C.shipping_address.city || "", C.shipping_address.province || "", C.shipping_address.country || ""].map((T) => String(T || "").trim()).filter(Boolean).join(", ") || "-" : typeof C.billing_address == "string" && String(C.billing_address).trim() ? Pe = String(C.billing_address).trim() : C.billing_address && typeof C.billing_address == "object" && (Pe = [C.billing_address.address1 || "", C.billing_address.city || "", C.billing_address.province || "", C.billing_address.country || ""].map((T) => String(T || "").trim()).filter(Boolean).join(", ") || "-");
          const ve = C.name || C.order_number || C.id;
          return /* @__PURE__ */ a.jsxs("tr", { "data-status": U, children: [
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-name", children: ve }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-km", children: me || "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-perf", children: Pe }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-rider", children: C.rider ? String(C.rider) : (L = C.assignment) != null && L.riderId ? String(C.assignment.riderId) : "Unassigned" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-expected", children: C.expected_delivery_time ? new Date(C.expected_delivery_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-actual", children: C.actual_delivery_time ? new Date(C.actual_delivery_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-status", children: /* @__PURE__ */ a.jsx("span", { className: `status-chip status-${U}`, children: U.replace("-", " ") }) })
          ] }, ve || H);
        }),
        !v && !k && P.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 7, className: "section-note", children: "No orders to display." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "rc-toolbar", "aria-label": "pagination", children: [
      y && j && /* @__PURE__ */ a.jsx(Kc, { orderId: j, onClose: z, onAssigned: F }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-filters", children: [
        /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", disabled: p.page <= 1 || v, onClick: () => o((C) => Math.max(1, C - 1)), children: "Prev" }),
        /* @__PURE__ */ a.jsxs("span", { className: "section-note", children: [
          "Page ",
          p.page,
          " of ",
          p.pages,
          " • ",
          p.total,
          " total"
        ] }),
        /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", disabled: p.page >= p.pages || v, onClick: () => o((C) => Math.min(p.pages, C + 1)), children: "Next" })
      ] })
    ] })
  ] }) });
}
function Oh() {
  const [e, t] = g.useState({ totalDeliveries: 0, avgDeliveryMins: 0 }), [n, r] = g.useState([]), [l, i] = g.useState(!1), [s, o] = g.useState(!0), [u, c] = g.useState("");
  return g.useEffect(() => {
    let p = !0;
    return (async () => {
      o(!0), c("");
      try {
        const f = await fetch("/api/reports", { credentials: "include" });
        if (f.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        if (!f.ok) throw new Error("Failed to load reports");
        const v = await f.json();
        p && (t(v.metrics || { totalDeliveries: 0, avgDeliveryMins: 0 }), r(Array.isArray(v.deliveries) ? v.deliveries : []));
      } catch (f) {
        p && c(f.message || "Failed to load reports");
      } finally {
        p && o(!1);
      }
    })(), () => {
      p = !1;
    };
  }, []), /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsxs("section", { className: "rider-commissions", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "rc-header", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "rc-title", children: "Reporting & Analytics" }),
      /* @__PURE__ */ a.jsx("p", { className: "rc-subtitle", children: "Gain insights into your delivery operations with detailed reports and visualizations." })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-toolbar", children: /* @__PURE__ */ a.jsxs("div", { className: "rc-filters", children: [
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", "data-tab": "overview", children: "Overview" }),
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", "data-tab": "performance", children: "Performance" }),
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", "data-tab": "custom", children: "Custom Reports" })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { id: "tab-overview", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "rc-table-wrapper reports-overview", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "rc-select rc-chip block-chip", children: [
          /* @__PURE__ */ a.jsx("div", { className: "section-title reports-stat-title", children: "Total Deliveries" }),
          /* @__PURE__ */ a.jsx("div", { className: "reports-stat-value", children: e.totalDeliveries })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "rc-select rc-chip block-chip", children: [
          /* @__PURE__ */ a.jsx("div", { className: "section-title reports-stat-title", children: "Average Delivery Time" }),
          /* @__PURE__ */ a.jsxs("div", { className: "reports-stat-value", children: [
            e.avgDeliveryMins,
            " mins"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "rc-toolbar reports-toolbar-center", children: [
        /* @__PURE__ */ a.jsx("div", { className: "section-title reports-stat-title", children: "Delivery Data" }),
        /* @__PURE__ */ a.jsxs("label", { className: "rc-select rc-chip toggle-data-label", children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: l, onChange: (p) => i(p.target.checked) }),
          " Show Delivery Data Table"
        ] })
      ] }),
      l && /* @__PURE__ */ a.jsx("div", { className: "rc-table-wrapper", children: /* @__PURE__ */ a.jsxs("table", { className: "rc-table", children: [
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { className: "col-name", children: "Order Number" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-km", children: "Rider Assigned" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-perf", children: "Expected Time" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-perf", children: "Actual Delivery Time" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-perf", children: "Distance Traveled" }),
          /* @__PURE__ */ a.jsx("th", { className: "col-comm", children: "Status" })
        ] }) }),
        /* @__PURE__ */ a.jsxs("tbody", { children: [
          !s && !u && n.map((p, f) => /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsxs("td", { className: "rc-col-name", children: [
              "#",
              p.orderNumber || p.orderId
            ] }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-km", children: p.riderId || "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-perf", children: p.expectedMinutes != null ? `${p.expectedMinutes} mins` : "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-perf", children: p.durationMins != null ? `${p.durationMins} mins` : "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-perf", children: "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-commission", children: p.status || "new" })
          ] }, p.orderId || f)),
          !s && !u && n.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 6, className: "section-note", children: "No data." }) }),
          s && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 6, className: "section-note", children: "Loading…" }) }),
          u && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 6, className: "auth-error", children: u }) })
        ] })
      ] }) })
    ] })
  ] }) });
}
function Ih() {
  const [e, t] = g.useState([]), [n, r] = g.useState(!0), [l, i] = g.useState(""), [s, o] = g.useState(1), [u, c] = g.useState(25), [p, f] = g.useState({ total: 0, page: 1, limit: 25, pages: 1 });
  g.useEffect(() => {
    let y = !0;
    return (async () => {
      var x, j, S, P;
      r(!0), i("");
      try {
        const O = new URLSearchParams();
        O.set("limit", String(u)), O.set("page", String(s));
        const z = await fetch(`/api/orders?${O.toString()}`, { credentials: "include" });
        if (z.status === 401) {
          window.location.href = "/auth/login";
          return;
        }
        if (!z.ok) throw new Error("Failed to load orders");
        const F = await z.json();
        y && (t(Array.isArray(F.orders) ? F.orders : []), f({ total: ((x = F.meta) == null ? void 0 : x.total) || 0, page: ((j = F.meta) == null ? void 0 : j.page) || s, limit: ((S = F.meta) == null ? void 0 : S.limit) || u, pages: ((P = F.meta) == null ? void 0 : P.pages) || 1 }));
      } catch (O) {
        y && i(O.message || "Failed to load orders");
      } finally {
        y && r(!1);
      }
    })(), () => {
      y = !1;
    };
  }, [s]);
  function v(y) {
    return y && y.assignment || (Array.isArray(y.tags) ? y.tags : typeof y.tags == "string" ? y.tags.split(",") : []).join(",").toLowerCase().includes("assigned") ? "assigned" : y.fulfillment_status === "fulfilled" ? "delivered" : y.fulfillment_status === "partial" ? "in-transit" : "new";
  }
  const [w, k] = g.useState(!1), [N, _] = g.useState(null);
  function h(y) {
    _(y), k(!0);
  }
  function d() {
    _(null), k(!1);
  }
  function m(y) {
    try {
      const { orderId: x } = y || {};
      if (!x) return;
      t((j) => j.filter((S, P) => {
        const O = String(S.id || S.name || S.order_number || P).replace(/^#+/, "");
        return String(O) !== String(x);
      })), f((j) => ({ ...j || {}, total: Math.max(0, ((j == null ? void 0 : j.total) || 0) - 1) }));
    } catch {
    }
  }
  return /* @__PURE__ */ a.jsx(pt, { children: /* @__PURE__ */ a.jsxs("section", { className: "dashboard-orders", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "rc-header dashboard-header", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "dashboard-header-left", children: [
        /* @__PURE__ */ a.jsx("h2", { className: "rc-title", children: "Recent Orders" }),
        /* @__PURE__ */ a.jsx("p", { className: "rc-subtitle", children: "Latest orders synced from Shopify." })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "dashboard-header-right", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "stat-card", children: [
          /* @__PURE__ */ a.jsx("div", { className: "stat-value", children: n ? "…" : p.total || e.length }),
          /* @__PURE__ */ a.jsx("div", { className: "stat-label", children: "Orders" })
        ] }),
        /* @__PURE__ */ a.jsx("button", { className: "btn-primary", onClick: () => window.location.reload(), children: "Refresh" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-table-wrapper", children: /* @__PURE__ */ a.jsxs("table", { className: "rc-table dashboard-table", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { className: "col-order", children: "Order #" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-customer", children: "Customer" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-address", children: "Address" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-status", children: "Status" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-date", children: "Date" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-time", children: "Time" }),
        /* @__PURE__ */ a.jsx("th", { className: "col-action", children: "Action" })
      ] }) }),
      /* @__PURE__ */ a.jsxs("tbody", { children: [
        n && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 7, className: "section-note", children: "Loading…" }) }),
        !n && l && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 7, className: "auth-error", children: l }) }),
        !n && !l && (Array.isArray(e) ? e.filter((x) => v(x) !== "assigned") : []).map((x, j) => {
          const S = v(x), P = x.full_name || (x.customer && x.customer.full_name ? x.customer.full_name : "");
          let O = "-";
          typeof x.shipping_address == "string" && String(x.shipping_address).trim() ? O = String(x.shipping_address).trim() : x.shipping_address && typeof x.shipping_address == "object" ? O = [x.shipping_address.address1 || "", x.shipping_address.city || "", x.shipping_address.province || "", x.shipping_address.country || ""].map((me) => String(me || "").trim()).filter(Boolean).join(", ") || "-" : typeof x.billing_address == "string" && String(x.billing_address).trim() ? O = String(x.billing_address).trim() : x.billing_address && typeof x.billing_address == "object" && (O = [x.billing_address.address1 || "", x.billing_address.city || "", x.billing_address.province || "", x.billing_address.country || ""].map((me) => String(me || "").trim()).filter(Boolean).join(", ") || "-");
          const z = x.name || x.order_number || x.id || j, F = String(x.id || x.name || x.order_number || j).replace(/^#+/, ""), C = x.created_at ? new Date(x.created_at) : null, H = C ? C.toLocaleDateString() : "-", U = C ? C.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-";
          return /* @__PURE__ */ a.jsxs("tr", { "data-status": S, children: [
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-order", children: z }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-customer", children: P || "-" }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-address", children: O }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-status", children: /* @__PURE__ */ a.jsx("span", { className: `status-chip status-${S}`, children: S.replace("-", " ") }) }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-date", children: H }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-time", children: U }),
            /* @__PURE__ */ a.jsx("td", { className: "rc-col-action", children: /* @__PURE__ */ a.jsx("button", { className: "order-action btn-manage", onClick: () => h(F), children: "Assign Rider" }) })
          ] }, F);
        }),
        !n && !l && e.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 7, className: "section-note", children: "No recent orders." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "rc-toolbar", "aria-label": "pagination", children: /* @__PURE__ */ a.jsxs("div", { className: "rc-filters", children: [
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", disabled: p.page <= 1 || n, onClick: () => o((y) => Math.max(1, y - 1)), children: "Prev" }),
      /* @__PURE__ */ a.jsxs("span", { className: "section-note", children: [
        "Page ",
        p.page,
        " of ",
        p.pages,
        " • ",
        p.total,
        " total"
      ] }),
      /* @__PURE__ */ a.jsx("button", { className: "rc-select rc-chip", disabled: p.page >= p.pages || n, onClick: () => o((y) => Math.min(p.pages, y + 1)), children: "Next" })
    ] }) }),
    w && N && /* @__PURE__ */ a.jsx(Kc, { orderId: N, onClose: d, onAssigned: m })
  ] }) });
}
function Mh() {
  return /* @__PURE__ */ a.jsx(Nh, { children: /* @__PURE__ */ a.jsxs(vh, { children: [
    /* @__PURE__ */ a.jsx(Ye, { path: "/auth/login", element: /* @__PURE__ */ a.jsx(_h, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "/auth/register", element: /* @__PURE__ */ a.jsx(Ph, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "/riders", element: /* @__PURE__ */ a.jsx(Rh, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "/riders/:id", element: /* @__PURE__ */ a.jsx(Th, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "/orders", element: /* @__PURE__ */ a.jsx(zh, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "/reports", element: /* @__PURE__ */ a.jsx(Oh, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "/dashboard", element: /* @__PURE__ */ a.jsx(Ih, {}) }),
    /* @__PURE__ */ a.jsx(Ye, { path: "*", element: /* @__PURE__ */ a.jsx(hh, { to: "/auth/login", replace: !0 }) })
  ] }) });
}
function ko() {
  const e = document.getElementById("react-root");
  if (!e) return;
  Mc(e).render(/* @__PURE__ */ a.jsx(Mh, {}));
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ko) : ko();
