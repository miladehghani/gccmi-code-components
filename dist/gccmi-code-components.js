var Ei = Object.defineProperty;
var tn = (e) => {
  throw TypeError(e);
};
var Ti = (e, t, i) =>
  t in e
    ? Ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (e[t] = i);
var Ee = (e, t, i) => Ti(e, typeof t != "symbol" ? t + "" : t, i),
  rn = (e, t, i) => t.has(e) || tn("Cannot " + i);
var nt = (e, t, i) => (
    rn(e, t, "read from private field"), i ? i.call(e) : t.get(e)
  ),
  gr = (e, t, i) =>
    t.has(e)
      ? tn("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, i),
  nn = (e, t, i, o) => (
    rn(e, t, "write to private field"), o ? o.call(e, i) : t.set(e, i), i
  );
import { useMeasuredSize as _i } from "https://framer.com/m/framer/useMeasuredSize.js";
import Wt from "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/+esm";
function Ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wr = { exports: {} },
  ht = {},
  Er = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Ci() {
  if (on) return j;
  on = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    n = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function M(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (k && l[k]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    T = {};
  function C(l, v, D) {
    (this.props = l),
      (this.context = v),
      (this.refs = T),
      (this.updater = D || L);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (l, v) {
      if (typeof l != "object" && typeof l != "function" && l != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, l, v, "setState");
    }),
    (C.prototype.forceUpdate = function (l) {
      this.updater.enqueueForceUpdate(this, l, "forceUpdate");
    });
  function R() {}
  R.prototype = C.prototype;
  function H(l, v, D) {
    (this.props = l),
      (this.context = v),
      (this.refs = T),
      (this.updater = D || L);
  }
  var z = (H.prototype = new R());
  (z.constructor = H), W(z, C.prototype), (z.isPureReactComponent = !0);
  var oe = Array.isArray,
    Q = Object.prototype.hasOwnProperty,
    le = { current: null },
    be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(l, v, D) {
    var I,
      $ = {},
      Z = null,
      K = null;
    if (v != null)
      for (I in (v.ref !== void 0 && (K = v.ref),
      v.key !== void 0 && (Z = "" + v.key),
      v))
        Q.call(v, I) && !be.hasOwnProperty(I) && ($[I] = v[I]);
    var G = arguments.length - 2;
    if (G === 1) $.children = D;
    else if (1 < G) {
      for (var B = Array(G), fe = 0; fe < G; fe++) B[fe] = arguments[fe + 2];
      $.children = B;
    }
    if (l && l.defaultProps)
      for (I in ((G = l.defaultProps), G)) $[I] === void 0 && ($[I] = G[I]);
    return {
      $$typeof: e,
      type: l,
      key: Z,
      ref: K,
      props: $,
      _owner: le.current,
    };
  }
  function Te(l, v) {
    return {
      $$typeof: e,
      type: l.type,
      key: v,
      ref: l.ref,
      props: l.props,
      _owner: l._owner,
    };
  }
  function ve(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }
  function xe(l) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      l.replace(/[=:]/g, function (D) {
        return v[D];
      })
    );
  }
  var ce = /\/+/g;
  function ee(l, v) {
    return typeof l == "object" && l !== null && l.key != null
      ? xe("" + l.key)
      : v.toString(36);
  }
  function ue(l, v, D, I, $) {
    var Z = typeof l;
    (Z === "undefined" || Z === "boolean") && (l = null);
    var K = !1;
    if (l === null) K = !0;
    else
      switch (Z) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (l.$$typeof) {
            case e:
            case t:
              K = !0;
          }
      }
    if (K)
      return (
        (K = l),
        ($ = $(K)),
        (l = I === "" ? "." + ee(K, 0) : I),
        oe($)
          ? ((D = ""),
            l != null && (D = l.replace(ce, "$&/") + "/"),
            ue($, v, D, "", function (fe) {
              return fe;
            }))
          : $ != null &&
            (ve($) &&
              ($ = Te(
                $,
                D +
                  (!$.key || (K && K.key === $.key)
                    ? ""
                    : ("" + $.key).replace(ce, "$&/") + "/") +
                  l
              )),
            v.push($)),
        1
      );
    if (((K = 0), (I = I === "" ? "." : I + ":"), oe(l)))
      for (var G = 0; G < l.length; G++) {
        Z = l[G];
        var B = I + ee(Z, G);
        K += ue(Z, v, D, B, $);
      }
    else if (((B = M(l)), typeof B == "function"))
      for (l = B.call(l), G = 0; !(Z = l.next()).done; )
        (Z = Z.value), (B = I + ee(Z, G++)), (K += ue(Z, v, D, B, $));
    else if (Z === "object")
      throw (
        ((v = String(l)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : v) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return K;
  }
  function q(l, v, D) {
    if (l == null) return l;
    var I = [],
      $ = 0;
    return (
      ue(l, I, "", "", function (Z) {
        return v.call(D, Z, $++);
      }),
      I
    );
  }
  function se(l) {
    if (l._status === -1) {
      var v = l._result;
      (v = v()),
        v.then(
          function (D) {
            (l._status === 0 || l._status === -1) &&
              ((l._status = 1), (l._result = D));
          },
          function (D) {
            (l._status === 0 || l._status === -1) &&
              ((l._status = 2), (l._result = D));
          }
        ),
        l._status === -1 && ((l._status = 0), (l._result = v));
    }
    if (l._status === 1) return l._result.default;
    throw l._result;
  }
  var E = { current: null },
    we = { transition: null },
    Oe = {
      ReactCurrentDispatcher: E,
      ReactCurrentBatchConfig: we,
      ReactCurrentOwner: le,
    };
  function _e() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (j.Children = {
      map: q,
      forEach: function (l, v, D) {
        q(
          l,
          function () {
            v.apply(this, arguments);
          },
          D
        );
      },
      count: function (l) {
        var v = 0;
        return (
          q(l, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (l) {
        return (
          q(l, function (v) {
            return v;
          }) || []
        );
      },
      only: function (l) {
        if (!ve(l))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return l;
      },
    }),
    (j.Component = C),
    (j.Fragment = i),
    (j.Profiler = n),
    (j.PureComponent = H),
    (j.StrictMode = o),
    (j.Suspense = b),
    (j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe),
    (j.act = _e),
    (j.cloneElement = function (l, v, D) {
      if (l == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            l +
            "."
        );
      var I = W({}, l.props),
        $ = l.key,
        Z = l.ref,
        K = l._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((Z = v.ref), (K = le.current)),
          v.key !== void 0 && ($ = "" + v.key),
          l.type && l.type.defaultProps)
        )
          var G = l.type.defaultProps;
        for (B in v)
          Q.call(v, B) &&
            !be.hasOwnProperty(B) &&
            (I[B] = v[B] === void 0 && G !== void 0 ? G[B] : v[B]);
      }
      var B = arguments.length - 2;
      if (B === 1) I.children = D;
      else if (1 < B) {
        G = Array(B);
        for (var fe = 0; fe < B; fe++) G[fe] = arguments[fe + 2];
        I.children = G;
      }
      return { $$typeof: e, type: l.type, key: $, ref: Z, props: I, _owner: K };
    }),
    (j.createContext = function (l) {
      return (
        (l = {
          $$typeof: c,
          _currentValue: l,
          _currentValue2: l,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (l.Provider = { $$typeof: a, _context: l }),
        (l.Consumer = l)
      );
    }),
    (j.createElement = ye),
    (j.createFactory = function (l) {
      var v = ye.bind(null, l);
      return (v.type = l), v;
    }),
    (j.createRef = function () {
      return { current: null };
    }),
    (j.forwardRef = function (l) {
      return { $$typeof: p, render: l };
    }),
    (j.isValidElement = ve),
    (j.lazy = function (l) {
      return { $$typeof: _, _payload: { _status: -1, _result: l }, _init: se };
    }),
    (j.memo = function (l, v) {
      return { $$typeof: x, type: l, compare: v === void 0 ? null : v };
    }),
    (j.startTransition = function (l) {
      var v = we.transition;
      we.transition = {};
      try {
        l();
      } finally {
        we.transition = v;
      }
    }),
    (j.unstable_act = _e),
    (j.useCallback = function (l, v) {
      return E.current.useCallback(l, v);
    }),
    (j.useContext = function (l) {
      return E.current.useContext(l);
    }),
    (j.useDebugValue = function () {}),
    (j.useDeferredValue = function (l) {
      return E.current.useDeferredValue(l);
    }),
    (j.useEffect = function (l, v) {
      return E.current.useEffect(l, v);
    }),
    (j.useId = function () {
      return E.current.useId();
    }),
    (j.useImperativeHandle = function (l, v, D) {
      return E.current.useImperativeHandle(l, v, D);
    }),
    (j.useInsertionEffect = function (l, v) {
      return E.current.useInsertionEffect(l, v);
    }),
    (j.useLayoutEffect = function (l, v) {
      return E.current.useLayoutEffect(l, v);
    }),
    (j.useMemo = function (l, v) {
      return E.current.useMemo(l, v);
    }),
    (j.useReducer = function (l, v, D) {
      return E.current.useReducer(l, v, D);
    }),
    (j.useRef = function (l) {
      return E.current.useRef(l);
    }),
    (j.useState = function (l) {
      return E.current.useState(l);
    }),
    (j.useSyncExternalStore = function (l, v, D) {
      return E.current.useSyncExternalStore(l, v, D);
    }),
    (j.useTransition = function () {
      return E.current.useTransition();
    }),
    (j.version = "18.3.1"),
    j
  );
}
var pt = { exports: {} };
pt.exports;
var an;
function Oi() {
  return (
    an ||
      ((an = 1),
      (function (e, t) {
        /**
         * @license React
         * react.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        production !== "production" &&
          (function () {
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
                new Error()
              );
            var i = "18.3.1",
              o = Symbol.for("react.element"),
              n = Symbol.for("react.portal"),
              a = Symbol.for("react.fragment"),
              c = Symbol.for("react.strict_mode"),
              p = Symbol.for("react.profiler"),
              b = Symbol.for("react.provider"),
              x = Symbol.for("react.context"),
              _ = Symbol.for("react.forward_ref"),
              k = Symbol.for("react.suspense"),
              M = Symbol.for("react.suspense_list"),
              L = Symbol.for("react.memo"),
              W = Symbol.for("react.lazy"),
              T = Symbol.for("react.offscreen"),
              C = Symbol.iterator,
              R = "@@iterator";
            function H(r) {
              if (r === null || typeof r != "object") return null;
              var u = (C && r[C]) || r[R];
              return typeof u == "function" ? u : null;
            }
            var z = {
                /**
                 * @internal
                 * @type {ReactComponent}
                 */
                current: null,
              },
              oe = {
                transition: null,
              },
              Q = {
                current: null,
                // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                isBatchingLegacy: !1,
                didScheduleLegacyUpdate: !1,
              },
              le = {
                /**
                 * @internal
                 * @type {ReactComponent}
                 */
                current: null,
              },
              be = {},
              ye = null;
            function Te(r) {
              ye = r;
            }
            (be.setExtraStackFrame = function (r) {
              ye = r;
            }),
              (be.getCurrentStack = null),
              (be.getStackAddendum = function () {
                var r = "";
                ye && (r += ye);
                var u = be.getCurrentStack;
                return u && (r += u() || ""), r;
              });
            var ve = !1,
              xe = !1,
              ce = !1,
              ee = !1,
              ue = !1,
              q = {
                ReactCurrentDispatcher: z,
                ReactCurrentBatchConfig: oe,
                ReactCurrentOwner: le,
              };
            (q.ReactDebugCurrentFrame = be), (q.ReactCurrentActQueue = Q);
            function se(r) {
              {
                for (
                  var u = arguments.length,
                    f = new Array(u > 1 ? u - 1 : 0),
                    h = 1;
                  h < u;
                  h++
                )
                  f[h - 1] = arguments[h];
                we("warn", r, f);
              }
            }
            function E(r) {
              {
                for (
                  var u = arguments.length,
                    f = new Array(u > 1 ? u - 1 : 0),
                    h = 1;
                  h < u;
                  h++
                )
                  f[h - 1] = arguments[h];
                we("error", r, f);
              }
            }
            function we(r, u, f) {
              {
                var h = q.ReactDebugCurrentFrame,
                  g = h.getStackAddendum();
                g !== "" && ((u += "%s"), (f = f.concat([g])));
                var O = f.map(function (w) {
                  return String(w);
                });
                O.unshift("Warning: " + u),
                  Function.prototype.apply.call(console[r], console, O);
              }
            }
            var Oe = {};
            function _e(r, u) {
              {
                var f = r.constructor,
                  h = (f && (f.displayName || f.name)) || "ReactClass",
                  g = h + "." + u;
                if (Oe[g]) return;
                E(
                  "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                  u,
                  h
                ),
                  (Oe[g] = !0);
              }
            }
            var l = {
                /**
                 * Checks whether or not this composite component is mounted.
                 * @param {ReactClass} publicInstance The instance we want to test.
                 * @return {boolean} True if mounted, false otherwise.
                 * @protected
                 * @final
                 */
                isMounted: function (r) {
                  return !1;
                },
                /**
                 * Forces an update. This should only be invoked when it is known with
                 * certainty that we are **not** in a DOM transaction.
                 *
                 * You may want to call this when you know that some deeper aspect of the
                 * component's state has changed but `setState` was not called.
                 *
                 * This will not invoke `shouldComponentUpdate`, but it will invoke
                 * `componentWillUpdate` and `componentDidUpdate`.
                 *
                 * @param {ReactClass} publicInstance The instance that should rerender.
                 * @param {?function} callback Called after component is updated.
                 * @param {?string} callerName name of the calling function in the public API.
                 * @internal
                 */
                enqueueForceUpdate: function (r, u, f) {
                  _e(r, "forceUpdate");
                },
                /**
                 * Replaces all of the state. Always use this or `setState` to mutate state.
                 * You should treat `this.state` as immutable.
                 *
                 * There is no guarantee that `this.state` will be immediately updated, so
                 * accessing `this.state` after calling this method may return the old value.
                 *
                 * @param {ReactClass} publicInstance The instance that should rerender.
                 * @param {object} completeState Next state.
                 * @param {?function} callback Called after component is updated.
                 * @param {?string} callerName name of the calling function in the public API.
                 * @internal
                 */
                enqueueReplaceState: function (r, u, f, h) {
                  _e(r, "replaceState");
                },
                /**
                 * Sets a subset of the state. This only exists because _pendingState is
                 * internal. This provides a merging strategy that is not available to deep
                 * properties which is confusing. TODO: Expose pendingState or don't use it
                 * during the merge.
                 *
                 * @param {ReactClass} publicInstance The instance that should rerender.
                 * @param {object} partialState Next partial state to be merged with state.
                 * @param {?function} callback Called after component is updated.
                 * @param {?string} Name of the calling function in the public API.
                 * @internal
                 */
                enqueueSetState: function (r, u, f, h) {
                  _e(r, "setState");
                },
              },
              v = Object.assign,
              D = {};
            Object.freeze(D);
            function I(r, u, f) {
              (this.props = r),
                (this.context = u),
                (this.refs = D),
                (this.updater = f || l);
            }
            (I.prototype.isReactComponent = {}),
              (I.prototype.setState = function (r, u) {
                if (typeof r != "object" && typeof r != "function" && r != null)
                  throw new Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                  );
                this.updater.enqueueSetState(this, r, u, "setState");
              }),
              (I.prototype.forceUpdate = function (r) {
                this.updater.enqueueForceUpdate(this, r, "forceUpdate");
              });
            {
              var $ = {
                  isMounted: [
                    "isMounted",
                    "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
                  ],
                  replaceState: [
                    "replaceState",
                    "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
                  ],
                },
                Z = function (r, u) {
                  Object.defineProperty(I.prototype, r, {
                    get: function () {
                      se(
                        "%s(...) is deprecated in plain JavaScript React classes. %s",
                        u[0],
                        u[1]
                      );
                    },
                  });
                };
              for (var K in $) $.hasOwnProperty(K) && Z(K, $[K]);
            }
            function G() {}
            G.prototype = I.prototype;
            function B(r, u, f) {
              (this.props = r),
                (this.context = u),
                (this.refs = D),
                (this.updater = f || l);
            }
            var fe = (B.prototype = new G());
            (fe.constructor = B),
              v(fe, I.prototype),
              (fe.isPureReactComponent = !0);
            function qt() {
              var r = {
                current: null,
              };
              return Object.seal(r), r;
            }
            var xt = Array.isArray;
            function Ke(r) {
              return xt(r);
            }
            function Kt(r) {
              {
                var u = typeof Symbol == "function" && Symbol.toStringTag,
                  f =
                    (u && r[Symbol.toStringTag]) ||
                    r.constructor.name ||
                    "Object";
                return f;
              }
            }
            function Je(r) {
              try {
                return Fe(r), !1;
              } catch {
                return !0;
              }
            }
            function Fe(r) {
              return "" + r;
            }
            function We(r) {
              if (Je(r))
                return (
                  E(
                    "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                    Kt(r)
                  ),
                  Fe(r)
                );
            }
            function wt(r, u, f) {
              var h = r.displayName;
              if (h) return h;
              var g = u.displayName || u.name || "";
              return g !== "" ? f + "(" + g + ")" : f;
            }
            function Ve(r) {
              return r.displayName || "Context";
            }
            function He(r) {
              if (r == null) return null;
              if (
                (typeof r.tag == "number" &&
                  E(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                  ),
                typeof r == "function")
              )
                return r.displayName || r.name || null;
              if (typeof r == "string") return r;
              switch (r) {
                case a:
                  return "Fragment";
                case n:
                  return "Portal";
                case p:
                  return "Profiler";
                case c:
                  return "StrictMode";
                case k:
                  return "Suspense";
                case M:
                  return "SuspenseList";
              }
              if (typeof r == "object")
                switch (r.$$typeof) {
                  case x:
                    var u = r;
                    return Ve(u) + ".Consumer";
                  case b:
                    var f = r;
                    return Ve(f._context) + ".Provider";
                  case _:
                    return wt(r, r.render, "ForwardRef");
                  case L:
                    var h = r.displayName || null;
                    return h !== null ? h : He(r.type) || "Memo";
                  case W: {
                    var g = r,
                      O = g._payload,
                      w = g._init;
                    try {
                      return He(w(O));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var $e = Object.prototype.hasOwnProperty,
              Qe = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0,
              },
              Et,
              Tt,
              Ze;
            Ze = {};
            function st(r) {
              if ($e.call(r, "ref")) {
                var u = Object.getOwnPropertyDescriptor(r, "ref").get;
                if (u && u.isReactWarning) return !1;
              }
              return r.ref !== void 0;
            }
            function je(r) {
              if ($e.call(r, "key")) {
                var u = Object.getOwnPropertyDescriptor(r, "key").get;
                if (u && u.isReactWarning) return !1;
              }
              return r.key !== void 0;
            }
            function Jt(r, u) {
              var f = function () {
                Et ||
                  ((Et = !0),
                  E(
                    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    u
                  ));
              };
              (f.isReactWarning = !0),
                Object.defineProperty(r, "key", {
                  get: f,
                  configurable: !0,
                });
            }
            function _t(r, u) {
              var f = function () {
                Tt ||
                  ((Tt = !0),
                  E(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    u
                  ));
              };
              (f.isReactWarning = !0),
                Object.defineProperty(r, "ref", {
                  get: f,
                  configurable: !0,
                });
            }
            function Rt(r) {
              if (
                typeof r.ref == "string" &&
                le.current &&
                r.__self &&
                le.current.stateNode !== r.__self
              ) {
                var u = He(le.current.type);
                Ze[u] ||
                  (E(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    u,
                    r.ref
                  ),
                  (Ze[u] = !0));
              }
            }
            var Ye = function (r, u, f, h, g, O, w) {
              var P = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: o,
                // Built-in properties that belong on the element
                type: r,
                key: u,
                ref: f,
                props: w,
                // Record the component responsible for creating this element.
                _owner: O,
              };
              return (
                (P._store = {}),
                Object.defineProperty(P._store, "validated", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(P, "_self", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: h,
                }),
                Object.defineProperty(P, "_source", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: g,
                }),
                Object.freeze && (Object.freeze(P.props), Object.freeze(P)),
                P
              );
            };
            function Qt(r, u, f) {
              var h,
                g = {},
                O = null,
                w = null,
                P = null,
                V = null;
              if (u != null) {
                st(u) && ((w = u.ref), Rt(u)),
                  je(u) && (We(u.key), (O = "" + u.key)),
                  (P = u.__self === void 0 ? null : u.__self),
                  (V = u.__source === void 0 ? null : u.__source);
                for (h in u)
                  $e.call(u, h) && !Qe.hasOwnProperty(h) && (g[h] = u[h]);
              }
              var J = arguments.length - 2;
              if (J === 1) g.children = f;
              else if (J > 1) {
                for (var te = Array(J), re = 0; re < J; re++)
                  te[re] = arguments[re + 2];
                Object.freeze && Object.freeze(te), (g.children = te);
              }
              if (r && r.defaultProps) {
                var ie = r.defaultProps;
                for (h in ie) g[h] === void 0 && (g[h] = ie[h]);
              }
              if (O || w) {
                var de =
                  typeof r == "function"
                    ? r.displayName || r.name || "Unknown"
                    : r;
                O && Jt(g, de), w && _t(g, de);
              }
              return Ye(r, O, w, P, V, le.current, g);
            }
            function Zt(r, u) {
              var f = Ye(
                r.type,
                u,
                r.ref,
                r._self,
                r._source,
                r._owner,
                r.props
              );
              return f;
            }
            function er(r, u, f) {
              if (r == null)
                throw new Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    r +
                    "."
                );
              var h,
                g = v({}, r.props),
                O = r.key,
                w = r.ref,
                P = r._self,
                V = r._source,
                J = r._owner;
              if (u != null) {
                st(u) && ((w = u.ref), (J = le.current)),
                  je(u) && (We(u.key), (O = "" + u.key));
                var te;
                r.type && r.type.defaultProps && (te = r.type.defaultProps);
                for (h in u)
                  $e.call(u, h) &&
                    !Qe.hasOwnProperty(h) &&
                    (u[h] === void 0 && te !== void 0
                      ? (g[h] = te[h])
                      : (g[h] = u[h]));
              }
              var re = arguments.length - 2;
              if (re === 1) g.children = f;
              else if (re > 1) {
                for (var ie = Array(re), de = 0; de < re; de++)
                  ie[de] = arguments[de + 2];
                g.children = ie;
              }
              return Ye(r.type, O, w, P, V, J, g);
            }
            function De(r) {
              return typeof r == "object" && r !== null && r.$$typeof === o;
            }
            var Ct = ".",
              tr = ":";
            function rr(r) {
              var u = /[=:]/g,
                f = {
                  "=": "=0",
                  ":": "=2",
                },
                h = r.replace(u, function (g) {
                  return f[g];
                });
              return "$" + h;
            }
            var et = !1,
              Ot = /\/+/g;
            function Ae(r) {
              return r.replace(Ot, "$&/");
            }
            function ze(r, u) {
              return typeof r == "object" && r !== null && r.key != null
                ? (We(r.key), rr("" + r.key))
                : u.toString(36);
            }
            function Ne(r, u, f, h, g) {
              var O = typeof r;
              (O === "undefined" || O === "boolean") && (r = null);
              var w = !1;
              if (r === null) w = !0;
              else
                switch (O) {
                  case "string":
                  case "number":
                    w = !0;
                    break;
                  case "object":
                    switch (r.$$typeof) {
                      case o:
                      case n:
                        w = !0;
                    }
                }
              if (w) {
                var P = r,
                  V = g(P),
                  J = h === "" ? Ct + ze(P, 0) : h;
                if (Ke(V)) {
                  var te = "";
                  J != null && (te = Ae(J) + "/"),
                    Ne(V, u, te, "", function (wi) {
                      return wi;
                    });
                } else
                  V != null &&
                    (De(V) &&
                      (V.key && (!P || P.key !== V.key) && We(V.key),
                      (V = Zt(
                        V,
                        // Keep both the (mapped) and old keys if they differ, just as
                        // traverseAllChildren used to do for objects as children
                        f + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                          (V.key && (!P || P.key !== V.key)
                            ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                              // eslint-disable-next-line react-internal/safe-string-coercion
                              Ae("" + V.key) + "/"
                            : "") +
                          J
                      ))),
                    u.push(V));
                return 1;
              }
              var re,
                ie,
                de = 0,
                me = h === "" ? Ct : h + tr;
              if (Ke(r))
                for (var It = 0; It < r.length; It++)
                  (re = r[It]),
                    (ie = me + ze(re, It)),
                    (de += Ne(re, u, f, ie, g));
              else {
                var yr = H(r);
                if (typeof yr == "function") {
                  var Qr = r;
                  yr === Qr.entries &&
                    (et ||
                      se(
                        "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                      ),
                    (et = !0));
                  for (
                    var bi = yr.call(Qr), Zr, xi = 0;
                    !(Zr = bi.next()).done;

                  )
                    (re = Zr.value),
                      (ie = me + ze(re, xi++)),
                      (de += Ne(re, u, f, ie, g));
                } else if (O === "object") {
                  var en = String(r);
                  throw new Error(
                    "Objects are not valid as a React child (found: " +
                      (en === "[object Object]"
                        ? "object with keys {" + Object.keys(r).join(", ") + "}"
                        : en) +
                      "). If you meant to render a collection of children, use an array instead."
                  );
                }
              }
              return de;
            }
            function Ue(r, u, f) {
              if (r == null) return r;
              var h = [],
                g = 0;
              return (
                Ne(r, h, "", "", function (O) {
                  return u.call(f, O, g++);
                }),
                h
              );
            }
            function nr(r) {
              var u = 0;
              return (
                Ue(r, function () {
                  u++;
                }),
                u
              );
            }
            function St(r, u, f) {
              Ue(
                r,
                function () {
                  u.apply(this, arguments);
                },
                f
              );
            }
            function ir(r) {
              return (
                Ue(r, function (u) {
                  return u;
                }) || []
              );
            }
            function kt(r) {
              if (!De(r))
                throw new Error(
                  "React.Children.only expected to receive a single React element child."
                );
              return r;
            }
            function Ht(r) {
              var u = {
                $$typeof: x,
                // As a workaround to support multiple concurrent renderers, we categorize
                // some renderers as primary and others as secondary. We only expect
                // there to be two concurrent renderers at most: React Native (primary) and
                // Fabric (secondary); React DOM (primary) and React ART (secondary).
                // Secondary renderers store their context values on separate fields.
                _currentValue: r,
                _currentValue2: r,
                // Used to track how many concurrent renderers this context currently
                // supports within in a single renderer. Such as parallel server rendering.
                _threadCount: 0,
                // These are circular
                Provider: null,
                Consumer: null,
                // Add these to use same hidden class in VM as ServerContext
                _defaultValue: null,
                _globalName: null,
              };
              u.Provider = {
                $$typeof: b,
                _context: u,
              };
              var f = !1,
                h = !1,
                g = !1;
              {
                var O = {
                  $$typeof: x,
                  _context: u,
                };
                Object.defineProperties(O, {
                  Provider: {
                    get: function () {
                      return (
                        h ||
                          ((h = !0),
                          E(
                            "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                          )),
                        u.Provider
                      );
                    },
                    set: function (w) {
                      u.Provider = w;
                    },
                  },
                  _currentValue: {
                    get: function () {
                      return u._currentValue;
                    },
                    set: function (w) {
                      u._currentValue = w;
                    },
                  },
                  _currentValue2: {
                    get: function () {
                      return u._currentValue2;
                    },
                    set: function (w) {
                      u._currentValue2 = w;
                    },
                  },
                  _threadCount: {
                    get: function () {
                      return u._threadCount;
                    },
                    set: function (w) {
                      u._threadCount = w;
                    },
                  },
                  Consumer: {
                    get: function () {
                      return (
                        f ||
                          ((f = !0),
                          E(
                            "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                          )),
                        u.Consumer
                      );
                    },
                  },
                  displayName: {
                    get: function () {
                      return u.displayName;
                    },
                    set: function (w) {
                      g ||
                        (se(
                          "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                          w
                        ),
                        (g = !0));
                    },
                  },
                }),
                  (u.Consumer = O);
              }
              return (
                (u._currentRenderer = null), (u._currentRenderer2 = null), u
              );
            }
            var Be = -1,
              lt = 0,
              ct = 1,
              Pt = 2;
            function or(r) {
              if (r._status === Be) {
                var u = r._result,
                  f = u();
                if (
                  (f.then(
                    function (O) {
                      if (r._status === lt || r._status === Be) {
                        var w = r;
                        (w._status = ct), (w._result = O);
                      }
                    },
                    function (O) {
                      if (r._status === lt || r._status === Be) {
                        var w = r;
                        (w._status = Pt), (w._result = O);
                      }
                    }
                  ),
                  r._status === Be)
                ) {
                  var h = r;
                  (h._status = lt), (h._result = f);
                }
              }
              if (r._status === ct) {
                var g = r._result;
                return (
                  g === void 0 &&
                    E(
                      `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                      g
                    ),
                  "default" in g ||
                    E(
                      `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                      g
                    ),
                  g.default
                );
              } else throw r._result;
            }
            function ar(r) {
              var u = {
                  // We use these fields to store the result.
                  _status: Be,
                  _result: r,
                },
                f = {
                  $$typeof: W,
                  _payload: u,
                  _init: or,
                };
              {
                var h, g;
                Object.defineProperties(f, {
                  defaultProps: {
                    configurable: !0,
                    get: function () {
                      return h;
                    },
                    set: function (O) {
                      E(
                        "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                      ),
                        (h = O),
                        Object.defineProperty(f, "defaultProps", {
                          enumerable: !0,
                        });
                    },
                  },
                  propTypes: {
                    configurable: !0,
                    get: function () {
                      return g;
                    },
                    set: function (O) {
                      E(
                        "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                      ),
                        (g = O),
                        Object.defineProperty(f, "propTypes", {
                          enumerable: !0,
                        });
                    },
                  },
                });
              }
              return f;
            }
            function ur(r) {
              r != null && r.$$typeof === L
                ? E(
                    "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
                  )
                : typeof r != "function"
                ? E(
                    "forwardRef requires a render function but was given %s.",
                    r === null ? "null" : typeof r
                  )
                : r.length !== 0 &&
                  r.length !== 2 &&
                  E(
                    "forwardRef render functions accept exactly two parameters: props and ref. %s",
                    r.length === 1
                      ? "Did you forget to use the ref parameter?"
                      : "Any additional parameter will be undefined."
                  ),
                r != null &&
                  (r.defaultProps != null || r.propTypes != null) &&
                  E(
                    "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
                  );
              var u = {
                $$typeof: _,
                render: r,
              };
              {
                var f;
                Object.defineProperty(u, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return f;
                  },
                  set: function (h) {
                    (f = h), !r.name && !r.displayName && (r.displayName = h);
                  },
                });
              }
              return u;
            }
            var At;
            At = Symbol.for("react.module.reference");
            function s(r) {
              return !!(
                typeof r == "string" ||
                typeof r == "function" ||
                r === a ||
                r === p ||
                ue ||
                r === c ||
                r === k ||
                r === M ||
                ee ||
                r === T ||
                ve ||
                xe ||
                ce ||
                (typeof r == "object" &&
                  r !== null &&
                  (r.$$typeof === W ||
                    r.$$typeof === L ||
                    r.$$typeof === b ||
                    r.$$typeof === x ||
                    r.$$typeof === _ || // This needs to include all possible module reference object
                    // types supported by any Flight configuration anywhere since
                    // we don't know which Flight build this will end up being used
                    // with.
                    r.$$typeof === At ||
                    r.getModuleId !== void 0))
              );
            }
            function m(r, u) {
              s(r) ||
                E(
                  "memo: The first argument must be a component. Instead received: %s",
                  r === null ? "null" : typeof r
                );
              var f = {
                $$typeof: L,
                type: r,
                compare: u === void 0 ? null : u,
              };
              {
                var h;
                Object.defineProperty(f, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return h;
                  },
                  set: function (g) {
                    (h = g), !r.name && !r.displayName && (r.displayName = g);
                  },
                });
              }
              return f;
            }
            function y() {
              var r = z.current;
              return (
                r === null &&
                  E(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
                r
              );
            }
            function S(r) {
              var u = y();
              if (r._context !== void 0) {
                var f = r._context;
                f.Consumer === r
                  ? E(
                      "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
                    )
                  : f.Provider === r &&
                    E(
                      "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
                    );
              }
              return u.useContext(r);
            }
            function Y(r) {
              var u = y();
              return u.useState(r);
            }
            function X(r, u, f) {
              var h = y();
              return h.useReducer(r, u, f);
            }
            function N(r) {
              var u = y();
              return u.useRef(r);
            }
            function F(r, u) {
              var f = y();
              return f.useEffect(r, u);
            }
            function pe(r, u) {
              var f = y();
              return f.useInsertionEffect(r, u);
            }
            function ne(r, u) {
              var f = y();
              return f.useLayoutEffect(r, u);
            }
            function ae(r, u) {
              var f = y();
              return f.useCallback(r, u);
            }
            function Re(r, u) {
              var f = y();
              return f.useMemo(r, u);
            }
            function Ie(r, u, f) {
              var h = y();
              return h.useImperativeHandle(r, u, f);
            }
            function Me(r, u) {
              {
                var f = y();
                return f.useDebugValue(r, u);
              }
            }
            function ge() {
              var r = y();
              return r.useTransition();
            }
            function ft(r) {
              var u = y();
              return u.useDeferredValue(r);
            }
            function sr() {
              var r = y();
              return r.useId();
            }
            function lr(r, u, f) {
              var h = y();
              return h.useSyncExternalStore(r, u, f);
            }
            var dt = 0,
              Pr,
              Ar,
              Mr,
              Lr,
              Fr,
              jr,
              Dr;
            function Nr() {}
            Nr.__reactDisabledLog = !0;
            function ti() {
              {
                if (dt === 0) {
                  (Pr = console.log),
                    (Ar = console.info),
                    (Mr = console.warn),
                    (Lr = console.error),
                    (Fr = console.group),
                    (jr = console.groupCollapsed),
                    (Dr = console.groupEnd);
                  var r = {
                    configurable: !0,
                    enumerable: !0,
                    value: Nr,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    info: r,
                    log: r,
                    warn: r,
                    error: r,
                    group: r,
                    groupCollapsed: r,
                    groupEnd: r,
                  });
                }
                dt++;
              }
            }
            function ri() {
              {
                if ((dt--, dt === 0)) {
                  var r = {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    log: v({}, r, {
                      value: Pr,
                    }),
                    info: v({}, r, {
                      value: Ar,
                    }),
                    warn: v({}, r, {
                      value: Mr,
                    }),
                    error: v({}, r, {
                      value: Lr,
                    }),
                    group: v({}, r, {
                      value: Fr,
                    }),
                    groupCollapsed: v({}, r, {
                      value: jr,
                    }),
                    groupEnd: v({}, r, {
                      value: Dr,
                    }),
                  });
                }
                dt < 0 &&
                  E(
                    "disabledDepth fell below zero. This is a bug in React. Please file an issue."
                  );
              }
            }
            var cr = q.ReactCurrentDispatcher,
              fr;
            function Mt(r, u, f) {
              {
                if (fr === void 0)
                  try {
                    throw Error();
                  } catch (g) {
                    var h = g.stack.trim().match(/\n( *(at )?)/);
                    fr = (h && h[1]) || "";
                  }
                return (
                  `
` +
                  fr +
                  r
                );
              }
            }
            var dr = !1,
              Lt;
            {
              var ni = typeof WeakMap == "function" ? WeakMap : Map;
              Lt = new ni();
            }
            function Ir(r, u) {
              if (!r || dr) return "";
              {
                var f = Lt.get(r);
                if (f !== void 0) return f;
              }
              var h;
              dr = !0;
              var g = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var O;
              (O = cr.current), (cr.current = null), ti();
              try {
                if (u) {
                  var w = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(w.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(w, []);
                    } catch (me) {
                      h = me;
                    }
                    Reflect.construct(r, [], w);
                  } else {
                    try {
                      w.call();
                    } catch (me) {
                      h = me;
                    }
                    r.call(w.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (me) {
                    h = me;
                  }
                  r();
                }
              } catch (me) {
                if (me && h && typeof me.stack == "string") {
                  for (
                    var P = me.stack.split(`
`),
                      V = h.stack.split(`
`),
                      J = P.length - 1,
                      te = V.length - 1;
                    J >= 1 && te >= 0 && P[J] !== V[te];

                  )
                    te--;
                  for (; J >= 1 && te >= 0; J--, te--)
                    if (P[J] !== V[te]) {
                      if (J !== 1 || te !== 1)
                        do
                          if ((J--, te--, te < 0 || P[J] !== V[te])) {
                            var re =
                              `
` + P[J].replace(" at new ", " at ");
                            return (
                              r.displayName &&
                                re.includes("<anonymous>") &&
                                (re = re.replace("<anonymous>", r.displayName)),
                              typeof r == "function" && Lt.set(r, re),
                              re
                            );
                          }
                        while (J >= 1 && te >= 0);
                      break;
                    }
                }
              } finally {
                (dr = !1),
                  (cr.current = O),
                  ri(),
                  (Error.prepareStackTrace = g);
              }
              var ie = r ? r.displayName || r.name : "",
                de = ie ? Mt(ie) : "";
              return typeof r == "function" && Lt.set(r, de), de;
            }
            function ii(r, u, f) {
              return Ir(r, !1);
            }
            function oi(r) {
              var u = r.prototype;
              return !!(u && u.isReactComponent);
            }
            function Ft(r, u, f) {
              if (r == null) return "";
              if (typeof r == "function") return Ir(r, oi(r));
              if (typeof r == "string") return Mt(r);
              switch (r) {
                case k:
                  return Mt("Suspense");
                case M:
                  return Mt("SuspenseList");
              }
              if (typeof r == "object")
                switch (r.$$typeof) {
                  case _:
                    return ii(r.render);
                  case L:
                    return Ft(r.type, u, f);
                  case W: {
                    var h = r,
                      g = h._payload,
                      O = h._init;
                    try {
                      return Ft(O(g), u, f);
                    } catch {}
                  }
                }
              return "";
            }
            var Wr = {},
              Vr = q.ReactDebugCurrentFrame;
            function jt(r) {
              if (r) {
                var u = r._owner,
                  f = Ft(r.type, r._source, u ? u.type : null);
                Vr.setExtraStackFrame(f);
              } else Vr.setExtraStackFrame(null);
            }
            function ai(r, u, f, h, g) {
              {
                var O = Function.call.bind($e);
                for (var w in r)
                  if (O(r, w)) {
                    var P = void 0;
                    try {
                      if (typeof r[w] != "function") {
                        var V = Error(
                          (h || "React class") +
                            ": " +
                            f +
                            " type `" +
                            w +
                            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                            typeof r[w] +
                            "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                        );
                        throw ((V.name = "Invariant Violation"), V);
                      }
                      P = r[w](
                        u,
                        w,
                        h,
                        f,
                        null,
                        "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                      );
                    } catch (J) {
                      P = J;
                    }
                    P &&
                      !(P instanceof Error) &&
                      (jt(g),
                      E(
                        "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                        h || "React class",
                        f,
                        w,
                        typeof P
                      ),
                      jt(null)),
                      P instanceof Error &&
                        !(P.message in Wr) &&
                        ((Wr[P.message] = !0),
                        jt(g),
                        E("Failed %s type: %s", f, P.message),
                        jt(null));
                  }
              }
            }
            function tt(r) {
              if (r) {
                var u = r._owner,
                  f = Ft(r.type, r._source, u ? u.type : null);
                Te(f);
              } else Te(null);
            }
            var hr;
            hr = !1;
            function $r() {
              if (le.current) {
                var r = He(le.current.type);
                if (r)
                  return (
                    `

Check the render method of \`` +
                    r +
                    "`."
                  );
              }
              return "";
            }
            function ui(r) {
              if (r !== void 0) {
                var u = r.fileName.replace(/^.*[\\\/]/, ""),
                  f = r.lineNumber;
                return (
                  `

Check your code at ` +
                  u +
                  ":" +
                  f +
                  "."
                );
              }
              return "";
            }
            function si(r) {
              return r != null ? ui(r.__source) : "";
            }
            var Yr = {};
            function li(r) {
              var u = $r();
              if (!u) {
                var f = typeof r == "string" ? r : r.displayName || r.name;
                f &&
                  (u =
                    `

Check the top-level render call using <` +
                    f +
                    ">.");
              }
              return u;
            }
            function zr(r, u) {
              if (!(!r._store || r._store.validated || r.key != null)) {
                r._store.validated = !0;
                var f = li(u);
                if (!Yr[f]) {
                  Yr[f] = !0;
                  var h = "";
                  r &&
                    r._owner &&
                    r._owner !== le.current &&
                    (h =
                      " It was passed a child from " + He(r._owner.type) + "."),
                    tt(r),
                    E(
                      'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                      f,
                      h
                    ),
                    tt(null);
                }
              }
            }
            function Ur(r, u) {
              if (typeof r == "object") {
                if (Ke(r))
                  for (var f = 0; f < r.length; f++) {
                    var h = r[f];
                    De(h) && zr(h, u);
                  }
                else if (De(r)) r._store && (r._store.validated = !0);
                else if (r) {
                  var g = H(r);
                  if (typeof g == "function" && g !== r.entries)
                    for (var O = g.call(r), w; !(w = O.next()).done; )
                      De(w.value) && zr(w.value, u);
                }
              }
            }
            function Br(r) {
              {
                var u = r.type;
                if (u == null || typeof u == "string") return;
                var f;
                if (typeof u == "function") f = u.propTypes;
                else if (
                  typeof u == "object" &&
                  (u.$$typeof === _ || // Note: Memo only checks outer props here.
                    // Inner props are checked in the reconciler.
                    u.$$typeof === L)
                )
                  f = u.propTypes;
                else return;
                if (f) {
                  var h = He(u);
                  ai(f, r.props, "prop", h, r);
                } else if (u.PropTypes !== void 0 && !hr) {
                  hr = !0;
                  var g = He(u);
                  E(
                    "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                    g || "Unknown"
                  );
                }
                typeof u.getDefaultProps == "function" &&
                  !u.getDefaultProps.isReactClassApproved &&
                  E(
                    "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
                  );
              }
            }
            function ci(r) {
              {
                for (var u = Object.keys(r.props), f = 0; f < u.length; f++) {
                  var h = u[f];
                  if (h !== "children" && h !== "key") {
                    tt(r),
                      E(
                        "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                        h
                      ),
                      tt(null);
                    break;
                  }
                }
                r.ref !== null &&
                  (tt(r),
                  E("Invalid attribute `ref` supplied to `React.Fragment`."),
                  tt(null));
              }
            }
            function Xr(r, u, f) {
              var h = s(r);
              if (!h) {
                var g = "";
                (r === void 0 ||
                  (typeof r == "object" &&
                    r !== null &&
                    Object.keys(r).length === 0)) &&
                  (g +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var O = si(u);
                O ? (g += O) : (g += $r());
                var w;
                r === null
                  ? (w = "null")
                  : Ke(r)
                  ? (w = "array")
                  : r !== void 0 && r.$$typeof === o
                  ? ((w = "<" + (He(r.type) || "Unknown") + " />"),
                    (g =
                      " Did you accidentally export a JSX literal instead of a component?"))
                  : (w = typeof r),
                  E(
                    "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                    w,
                    g
                  );
              }
              var P = Qt.apply(this, arguments);
              if (P == null) return P;
              if (h)
                for (var V = 2; V < arguments.length; V++) Ur(arguments[V], r);
              return r === a ? ci(P) : Br(P), P;
            }
            var Gr = !1;
            function fi(r) {
              var u = Xr.bind(null, r);
              return (
                (u.type = r),
                Gr ||
                  ((Gr = !0),
                  se(
                    "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
                  )),
                Object.defineProperty(u, "type", {
                  enumerable: !1,
                  get: function () {
                    return (
                      se(
                        "Factory.type is deprecated. Access the class directly before passing it to createFactory."
                      ),
                      Object.defineProperty(this, "type", {
                        value: r,
                      }),
                      r
                    );
                  },
                }),
                u
              );
            }
            function di(r, u, f) {
              for (
                var h = er.apply(this, arguments), g = 2;
                g < arguments.length;
                g++
              )
                Ur(arguments[g], h.type);
              return Br(h), h;
            }
            function hi(r, u) {
              var f = oe.transition;
              oe.transition = {};
              var h = oe.transition;
              oe.transition._updatedFibers = /* @__PURE__ */ new Set();
              try {
                r();
              } finally {
                if (((oe.transition = f), f === null && h._updatedFibers)) {
                  var g = h._updatedFibers.size;
                  g > 10 &&
                    se(
                      "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                    ),
                    h._updatedFibers.clear();
                }
              }
            }
            var qr = !1,
              Dt = null;
            function vi(r) {
              if (Dt === null)
                try {
                  var u = ("require" + Math.random()).slice(0, 7),
                    f = e && e[u];
                  Dt = f.call(e, "timers").setImmediate;
                } catch {
                  Dt = function (g) {
                    qr === !1 &&
                      ((qr = !0),
                      typeof MessageChannel > "u" &&
                        E(
                          "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                        ));
                    var O = new MessageChannel();
                    (O.port1.onmessage = g), O.port2.postMessage(void 0);
                  };
                }
              return Dt(r);
            }
            var rt = 0,
              Kr = !1;
            function Jr(r) {
              {
                var u = rt;
                rt++, Q.current === null && (Q.current = []);
                var f = Q.isBatchingLegacy,
                  h;
                try {
                  if (
                    ((Q.isBatchingLegacy = !0),
                    (h = r()),
                    !f && Q.didScheduleLegacyUpdate)
                  ) {
                    var g = Q.current;
                    g !== null && ((Q.didScheduleLegacyUpdate = !1), mr(g));
                  }
                } catch (ie) {
                  throw (Nt(u), ie);
                } finally {
                  Q.isBatchingLegacy = f;
                }
                if (
                  h !== null &&
                  typeof h == "object" &&
                  typeof h.then == "function"
                ) {
                  var O = h,
                    w = !1,
                    P = {
                      then: function (ie, de) {
                        (w = !0),
                          O.then(
                            function (me) {
                              Nt(u), rt === 0 ? vr(me, ie, de) : ie(me);
                            },
                            function (me) {
                              Nt(u), de(me);
                            }
                          );
                      },
                    };
                  return (
                    !Kr &&
                      typeof Promise < "u" &&
                      Promise.resolve()
                        .then(function () {})
                        .then(function () {
                          w ||
                            ((Kr = !0),
                            E(
                              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                            ));
                        }),
                    P
                  );
                } else {
                  var V = h;
                  if ((Nt(u), rt === 0)) {
                    var J = Q.current;
                    J !== null && (mr(J), (Q.current = null));
                    var te = {
                      then: function (ie, de) {
                        Q.current === null
                          ? ((Q.current = []), vr(V, ie, de))
                          : ie(V);
                      },
                    };
                    return te;
                  } else {
                    var re = {
                      then: function (ie, de) {
                        ie(V);
                      },
                    };
                    return re;
                  }
                }
              }
            }
            function Nt(r) {
              r !== rt - 1 &&
                E(
                  "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
                ),
                (rt = r);
            }
            function vr(r, u, f) {
              {
                var h = Q.current;
                if (h !== null)
                  try {
                    mr(h),
                      vi(function () {
                        h.length === 0
                          ? ((Q.current = null), u(r))
                          : vr(r, u, f);
                      });
                  } catch (g) {
                    f(g);
                  }
                else u(r);
              }
            }
            var pr = !1;
            function mr(r) {
              if (!pr) {
                pr = !0;
                var u = 0;
                try {
                  for (; u < r.length; u++) {
                    var f = r[u];
                    do f = f(!0);
                    while (f !== null);
                  }
                  r.length = 0;
                } catch (h) {
                  throw ((r = r.slice(u + 1)), h);
                } finally {
                  pr = !1;
                }
              }
            }
            var pi = Xr,
              mi = di,
              yi = fi,
              gi = {
                map: Ue,
                forEach: St,
                count: nr,
                toArray: ir,
                only: kt,
              };
            (t.Children = gi),
              (t.Component = I),
              (t.Fragment = a),
              (t.Profiler = p),
              (t.PureComponent = B),
              (t.StrictMode = c),
              (t.Suspense = k),
              (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
              (t.act = Jr),
              (t.cloneElement = mi),
              (t.createContext = Ht),
              (t.createElement = pi),
              (t.createFactory = yi),
              (t.createRef = qt),
              (t.forwardRef = ur),
              (t.isValidElement = De),
              (t.lazy = ar),
              (t.memo = m),
              (t.startTransition = hi),
              (t.unstable_act = Jr),
              (t.useCallback = ae),
              (t.useContext = S),
              (t.useDebugValue = Me),
              (t.useDeferredValue = ft),
              (t.useEffect = F),
              (t.useId = sr),
              (t.useImperativeHandle = Ie),
              (t.useInsertionEffect = pe),
              (t.useLayoutEffect = ne),
              (t.useMemo = Re),
              (t.useReducer = X),
              (t.useRef = N),
              (t.useState = Y),
              (t.useSyncExternalStore = lr),
              (t.useTransition = ge),
              (t.version = i),
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                  "function" &&
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                  new Error()
                );
          })();
      })(pt, pt.exports)),
    pt.exports
  );
}
production === "production" ? (Er.exports = Ci()) : (Er.exports = Oi());
var Ce = Er.exports;
const bt = /* @__PURE__ */ Ri(Ce);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Si() {
  if (un) return ht;
  un = 1;
  var e = Ce,
    t = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(p, b, x) {
    var _,
      k = {},
      M = null,
      L = null;
    x !== void 0 && (M = "" + x),
      b.key !== void 0 && (M = "" + b.key),
      b.ref !== void 0 && (L = b.ref);
    for (_ in b) o.call(b, _) && !a.hasOwnProperty(_) && (k[_] = b[_]);
    if (p && p.defaultProps)
      for (_ in ((b = p.defaultProps), b)) k[_] === void 0 && (k[_] = b[_]);
    return {
      $$typeof: t,
      type: p,
      key: M,
      ref: L,
      props: k,
      _owner: n.current,
    };
  }
  return (ht.Fragment = i), (ht.jsx = c), (ht.jsxs = c), ht;
}
var vt = {},
  sn;
function ki() {
  if (sn) return vt;
  sn = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return (
    production !== "production" &&
      (function () {
        var e = Ce,
          t = Symbol.for("react.element"),
          i = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          n = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          c = Symbol.for("react.provider"),
          p = Symbol.for("react.context"),
          b = Symbol.for("react.forward_ref"),
          x = Symbol.for("react.suspense"),
          _ = Symbol.for("react.suspense_list"),
          k = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy"),
          L = Symbol.for("react.offscreen"),
          W = Symbol.iterator,
          T = "@@iterator";
        function C(s) {
          if (s === null || typeof s != "object") return null;
          var m = (W && s[W]) || s[T];
          return typeof m == "function" ? m : null;
        }
        var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function H(s) {
          {
            for (
              var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), S = 1;
              S < m;
              S++
            )
              y[S - 1] = arguments[S];
            z("error", s, y);
          }
        }
        function z(s, m, y) {
          {
            var S = R.ReactDebugCurrentFrame,
              Y = S.getStackAddendum();
            Y !== "" && ((m += "%s"), (y = y.concat([Y])));
            var X = y.map(function (N) {
              return String(N);
            });
            X.unshift("Warning: " + m),
              Function.prototype.apply.call(console[s], console, X);
          }
        }
        var oe = !1,
          Q = !1,
          le = !1,
          be = !1,
          ye = !1,
          Te;
        Te = Symbol.for("react.module.reference");
        function ve(s) {
          return !!(
            typeof s == "string" ||
            typeof s == "function" ||
            s === o ||
            s === a ||
            ye ||
            s === n ||
            s === x ||
            s === _ ||
            be ||
            s === L ||
            oe ||
            Q ||
            le ||
            (typeof s == "object" &&
              s !== null &&
              (s.$$typeof === M ||
                s.$$typeof === k ||
                s.$$typeof === c ||
                s.$$typeof === p ||
                s.$$typeof === b || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                s.$$typeof === Te ||
                s.getModuleId !== void 0))
          );
        }
        function xe(s, m, y) {
          var S = s.displayName;
          if (S) return S;
          var Y = m.displayName || m.name || "";
          return Y !== "" ? y + "(" + Y + ")" : y;
        }
        function ce(s) {
          return s.displayName || "Context";
        }
        function ee(s) {
          if (s == null) return null;
          if (
            (typeof s.tag == "number" &&
              H(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            typeof s == "function")
          )
            return s.displayName || s.name || null;
          if (typeof s == "string") return s;
          switch (s) {
            case o:
              return "Fragment";
            case i:
              return "Portal";
            case a:
              return "Profiler";
            case n:
              return "StrictMode";
            case x:
              return "Suspense";
            case _:
              return "SuspenseList";
          }
          if (typeof s == "object")
            switch (s.$$typeof) {
              case p:
                var m = s;
                return ce(m) + ".Consumer";
              case c:
                var y = s;
                return ce(y._context) + ".Provider";
              case b:
                return xe(s, s.render, "ForwardRef");
              case k:
                var S = s.displayName || null;
                return S !== null ? S : ee(s.type) || "Memo";
              case M: {
                var Y = s,
                  X = Y._payload,
                  N = Y._init;
                try {
                  return ee(N(X));
                } catch {
                  return null;
                }
              }
            }
          return null;
        }
        var ue = Object.assign,
          q = 0,
          se,
          E,
          we,
          Oe,
          _e,
          l,
          v;
        function D() {}
        D.__reactDisabledLog = !0;
        function I() {
          {
            if (q === 0) {
              (se = console.log),
                (E = console.info),
                (we = console.warn),
                (Oe = console.error),
                (_e = console.group),
                (l = console.groupCollapsed),
                (v = console.groupEnd);
              var s = {
                configurable: !0,
                enumerable: !0,
                value: D,
                writable: !0,
              };
              Object.defineProperties(console, {
                info: s,
                log: s,
                warn: s,
                error: s,
                group: s,
                groupCollapsed: s,
                groupEnd: s,
              });
            }
            q++;
          }
        }
        function $() {
          {
            if ((q--, q === 0)) {
              var s = {
                configurable: !0,
                enumerable: !0,
                writable: !0,
              };
              Object.defineProperties(console, {
                log: ue({}, s, {
                  value: se,
                }),
                info: ue({}, s, {
                  value: E,
                }),
                warn: ue({}, s, {
                  value: we,
                }),
                error: ue({}, s, {
                  value: Oe,
                }),
                group: ue({}, s, {
                  value: _e,
                }),
                groupCollapsed: ue({}, s, {
                  value: l,
                }),
                groupEnd: ue({}, s, {
                  value: v,
                }),
              });
            }
            q < 0 &&
              H(
                "disabledDepth fell below zero. This is a bug in React. Please file an issue."
              );
          }
        }
        var Z = R.ReactCurrentDispatcher,
          K;
        function G(s, m, y) {
          {
            if (K === void 0)
              try {
                throw Error();
              } catch (Y) {
                var S = Y.stack.trim().match(/\n( *(at )?)/);
                K = (S && S[1]) || "";
              }
            return (
              `
` +
              K +
              s
            );
          }
        }
        var B = !1,
          fe;
        {
          var qt = typeof WeakMap == "function" ? WeakMap : Map;
          fe = new qt();
        }
        function xt(s, m) {
          if (!s || B) return "";
          {
            var y = fe.get(s);
            if (y !== void 0) return y;
          }
          var S;
          B = !0;
          var Y = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var X;
          (X = Z.current), (Z.current = null), I();
          try {
            if (m) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (ge) {
                  S = ge;
                }
                Reflect.construct(s, [], N);
              } else {
                try {
                  N.call();
                } catch (ge) {
                  S = ge;
                }
                s.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ge) {
                S = ge;
              }
              s();
            }
          } catch (ge) {
            if (ge && S && typeof ge.stack == "string") {
              for (
                var F = ge.stack.split(`
`),
                  pe = S.stack.split(`
`),
                  ne = F.length - 1,
                  ae = pe.length - 1;
                ne >= 1 && ae >= 0 && F[ne] !== pe[ae];

              )
                ae--;
              for (; ne >= 1 && ae >= 0; ne--, ae--)
                if (F[ne] !== pe[ae]) {
                  if (ne !== 1 || ae !== 1)
                    do
                      if ((ne--, ae--, ae < 0 || F[ne] !== pe[ae])) {
                        var Re =
                          `
` + F[ne].replace(" at new ", " at ");
                        return (
                          s.displayName &&
                            Re.includes("<anonymous>") &&
                            (Re = Re.replace("<anonymous>", s.displayName)),
                          typeof s == "function" && fe.set(s, Re),
                          Re
                        );
                      }
                    while (ne >= 1 && ae >= 0);
                  break;
                }
            }
          } finally {
            (B = !1), (Z.current = X), $(), (Error.prepareStackTrace = Y);
          }
          var Ie = s ? s.displayName || s.name : "",
            Me = Ie ? G(Ie) : "";
          return typeof s == "function" && fe.set(s, Me), Me;
        }
        function Ke(s, m, y) {
          return xt(s, !1);
        }
        function Kt(s) {
          var m = s.prototype;
          return !!(m && m.isReactComponent);
        }
        function Je(s, m, y) {
          if (s == null) return "";
          if (typeof s == "function") return xt(s, Kt(s));
          if (typeof s == "string") return G(s);
          switch (s) {
            case x:
              return G("Suspense");
            case _:
              return G("SuspenseList");
          }
          if (typeof s == "object")
            switch (s.$$typeof) {
              case b:
                return Ke(s.render);
              case k:
                return Je(s.type, m, y);
              case M: {
                var S = s,
                  Y = S._payload,
                  X = S._init;
                try {
                  return Je(X(Y), m, y);
                } catch {}
              }
            }
          return "";
        }
        var Fe = Object.prototype.hasOwnProperty,
          We = {},
          wt = R.ReactDebugCurrentFrame;
        function Ve(s) {
          if (s) {
            var m = s._owner,
              y = Je(s.type, s._source, m ? m.type : null);
            wt.setExtraStackFrame(y);
          } else wt.setExtraStackFrame(null);
        }
        function He(s, m, y, S, Y) {
          {
            var X = Function.call.bind(Fe);
            for (var N in s)
              if (X(s, N)) {
                var F = void 0;
                try {
                  if (typeof s[N] != "function") {
                    var pe = Error(
                      (S || "React class") +
                        ": " +
                        y +
                        " type `" +
                        N +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof s[N] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    throw ((pe.name = "Invariant Violation"), pe);
                  }
                  F = s[N](
                    m,
                    N,
                    S,
                    y,
                    null,
                    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                  );
                } catch (ne) {
                  F = ne;
                }
                F &&
                  !(F instanceof Error) &&
                  (Ve(Y),
                  H(
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    S || "React class",
                    y,
                    N,
                    typeof F
                  ),
                  Ve(null)),
                  F instanceof Error &&
                    !(F.message in We) &&
                    ((We[F.message] = !0),
                    Ve(Y),
                    H("Failed %s type: %s", y, F.message),
                    Ve(null));
              }
          }
        }
        var $e = Array.isArray;
        function Qe(s) {
          return $e(s);
        }
        function Et(s) {
          {
            var m = typeof Symbol == "function" && Symbol.toStringTag,
              y =
                (m && s[Symbol.toStringTag]) || s.constructor.name || "Object";
            return y;
          }
        }
        function Tt(s) {
          try {
            return Ze(s), !1;
          } catch {
            return !0;
          }
        }
        function Ze(s) {
          return "" + s;
        }
        function st(s) {
          if (Tt(s))
            return (
              H(
                "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                Et(s)
              ),
              Ze(s)
            );
        }
        var je = R.ReactCurrentOwner,
          Jt = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0,
          },
          _t,
          Rt,
          Ye;
        Ye = {};
        function Qt(s) {
          if (Fe.call(s, "ref")) {
            var m = Object.getOwnPropertyDescriptor(s, "ref").get;
            if (m && m.isReactWarning) return !1;
          }
          return s.ref !== void 0;
        }
        function Zt(s) {
          if (Fe.call(s, "key")) {
            var m = Object.getOwnPropertyDescriptor(s, "key").get;
            if (m && m.isReactWarning) return !1;
          }
          return s.key !== void 0;
        }
        function er(s, m) {
          if (
            typeof s.ref == "string" &&
            je.current &&
            m &&
            je.current.stateNode !== m
          ) {
            var y = ee(je.current.type);
            Ye[y] ||
              (H(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                ee(je.current.type),
                s.ref
              ),
              (Ye[y] = !0));
          }
        }
        function De(s, m) {
          {
            var y = function () {
              _t ||
                ((_t = !0),
                H(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  m
                ));
            };
            (y.isReactWarning = !0),
              Object.defineProperty(s, "key", {
                get: y,
                configurable: !0,
              });
          }
        }
        function Ct(s, m) {
          {
            var y = function () {
              Rt ||
                ((Rt = !0),
                H(
                  "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  m
                ));
            };
            (y.isReactWarning = !0),
              Object.defineProperty(s, "ref", {
                get: y,
                configurable: !0,
              });
          }
        }
        var tr = function (s, m, y, S, Y, X, N) {
          var F = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: t,
            // Built-in properties that belong on the element
            type: s,
            key: m,
            ref: y,
            props: N,
            // Record the component responsible for creating this element.
            _owner: X,
          };
          return (
            (F._store = {}),
            Object.defineProperty(F._store, "validated", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(F, "_self", {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: S,
            }),
            Object.defineProperty(F, "_source", {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: Y,
            }),
            Object.freeze && (Object.freeze(F.props), Object.freeze(F)),
            F
          );
        };
        function rr(s, m, y, S, Y) {
          {
            var X,
              N = {},
              F = null,
              pe = null;
            y !== void 0 && (st(y), (F = "" + y)),
              Zt(m) && (st(m.key), (F = "" + m.key)),
              Qt(m) && ((pe = m.ref), er(m, Y));
            for (X in m)
              Fe.call(m, X) && !Jt.hasOwnProperty(X) && (N[X] = m[X]);
            if (s && s.defaultProps) {
              var ne = s.defaultProps;
              for (X in ne) N[X] === void 0 && (N[X] = ne[X]);
            }
            if (F || pe) {
              var ae =
                typeof s == "function"
                  ? s.displayName || s.name || "Unknown"
                  : s;
              F && De(N, ae), pe && Ct(N, ae);
            }
            return tr(s, F, pe, Y, S, je.current, N);
          }
        }
        var et = R.ReactCurrentOwner,
          Ot = R.ReactDebugCurrentFrame;
        function Ae(s) {
          if (s) {
            var m = s._owner,
              y = Je(s.type, s._source, m ? m.type : null);
            Ot.setExtraStackFrame(y);
          } else Ot.setExtraStackFrame(null);
        }
        var ze;
        ze = !1;
        function Ne(s) {
          return typeof s == "object" && s !== null && s.$$typeof === t;
        }
        function Ue() {
          {
            if (et.current) {
              var s = ee(et.current.type);
              if (s)
                return (
                  `

Check the render method of \`` +
                  s +
                  "`."
                );
            }
            return "";
          }
        }
        function nr(s) {
          return "";
        }
        var St = {};
        function ir(s) {
          {
            var m = Ue();
            if (!m) {
              var y = typeof s == "string" ? s : s.displayName || s.name;
              y &&
                (m =
                  `

Check the top-level render call using <` +
                  y +
                  ">.");
            }
            return m;
          }
        }
        function kt(s, m) {
          {
            if (!s._store || s._store.validated || s.key != null) return;
            s._store.validated = !0;
            var y = ir(m);
            if (St[y]) return;
            St[y] = !0;
            var S = "";
            s &&
              s._owner &&
              s._owner !== et.current &&
              (S = " It was passed a child from " + ee(s._owner.type) + "."),
              Ae(s),
              H(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                y,
                S
              ),
              Ae(null);
          }
        }
        function Ht(s, m) {
          {
            if (typeof s != "object") return;
            if (Qe(s))
              for (var y = 0; y < s.length; y++) {
                var S = s[y];
                Ne(S) && kt(S, m);
              }
            else if (Ne(s)) s._store && (s._store.validated = !0);
            else if (s) {
              var Y = C(s);
              if (typeof Y == "function" && Y !== s.entries)
                for (var X = Y.call(s), N; !(N = X.next()).done; )
                  Ne(N.value) && kt(N.value, m);
            }
          }
        }
        function Be(s) {
          {
            var m = s.type;
            if (m == null || typeof m == "string") return;
            var y;
            if (typeof m == "function") y = m.propTypes;
            else if (
              typeof m == "object" &&
              (m.$$typeof === b || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                m.$$typeof === k)
            )
              y = m.propTypes;
            else return;
            if (y) {
              var S = ee(m);
              He(y, s.props, "prop", S, s);
            } else if (m.PropTypes !== void 0 && !ze) {
              ze = !0;
              var Y = ee(m);
              H(
                "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                Y || "Unknown"
              );
            }
            typeof m.getDefaultProps == "function" &&
              !m.getDefaultProps.isReactClassApproved &&
              H(
                "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
              );
          }
        }
        function lt(s) {
          {
            for (var m = Object.keys(s.props), y = 0; y < m.length; y++) {
              var S = m[y];
              if (S !== "children" && S !== "key") {
                Ae(s),
                  H(
                    "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                    S
                  ),
                  Ae(null);
                break;
              }
            }
            s.ref !== null &&
              (Ae(s),
              H("Invalid attribute `ref` supplied to `React.Fragment`."),
              Ae(null));
          }
        }
        var ct = {};
        function Pt(s, m, y, S, Y, X) {
          {
            var N = ve(s);
            if (!N) {
              var F = "";
              (s === void 0 ||
                (typeof s == "object" &&
                  s !== null &&
                  Object.keys(s).length === 0)) &&
                (F +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var pe = nr();
              pe ? (F += pe) : (F += Ue());
              var ne;
              s === null
                ? (ne = "null")
                : Qe(s)
                ? (ne = "array")
                : s !== void 0 && s.$$typeof === t
                ? ((ne = "<" + (ee(s.type) || "Unknown") + " />"),
                  (F =
                    " Did you accidentally export a JSX literal instead of a component?"))
                : (ne = typeof s),
                H(
                  "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                  ne,
                  F
                );
            }
            var ae = rr(s, m, y, Y, X);
            if (ae == null) return ae;
            if (N) {
              var Re = m.children;
              if (Re !== void 0)
                if (S)
                  if (Qe(Re)) {
                    for (var Ie = 0; Ie < Re.length; Ie++) Ht(Re[Ie], s);
                    Object.freeze && Object.freeze(Re);
                  } else
                    H(
                      "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                    );
                else Ht(Re, s);
            }
            if (Fe.call(m, "key")) {
              var Me = ee(s),
                ge = Object.keys(m).filter(function (lr) {
                  return lr !== "key";
                }),
                ft =
                  ge.length > 0
                    ? "{key: someKey, " + ge.join(": ..., ") + ": ...}"
                    : "{key: someKey}";
              if (!ct[Me + ft]) {
                var sr =
                  ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
                H(
                  `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                  ft,
                  Me,
                  sr,
                  Me
                ),
                  (ct[Me + ft] = !0);
              }
            }
            return s === o ? lt(ae) : Be(ae), ae;
          }
        }
        function or(s, m, y) {
          return Pt(s, m, y, !0);
        }
        function ar(s, m, y) {
          return Pt(s, m, y, !1);
        }
        var ur = ar,
          At = or;
        (vt.Fragment = o), (vt.jsx = ur), (vt.jsxs = At);
      })(),
    vt
  );
}
production === "production" ? (wr.exports = Si()) : (wr.exports = ki());
var Bt = wr.exports;
const Vn = Ce.createContext({
  data: void 0,
  setData: () => {},
});
function Io(e) {
  return (t) => {
    const [i, o] = Ce.useState();
    return /* @__PURE__ */ Bt.jsx(Vn.Provider, {
      value: { data: i, setData: o },
      children: /* @__PURE__ */ Bt.jsx(e, { ...t }),
    });
  };
}
const $n = () => Ce.useContext(Vn);
function Wo(e) {
  return (t) => {
    var n;
    const { data: i } = $n();
    console.log("use Global Provider", i);
    const o = Math.round(Math.random() * 10) % 2;
    return /* @__PURE__ */ Bt.jsx(e, {
      ...t,
      text: JSON.stringify(i),
      children: (n = t.children) == null ? void 0 : n[o],
    });
  };
}
var Ge = [],
  Hi = function () {
    return Ge.some(function (e) {
      return e.activeTargets.length > 0;
    });
  },
  Pi = function () {
    return Ge.some(function (e) {
      return e.skippedTargets.length > 0;
    });
  },
  ln = "ResizeObserver loop completed with undelivered notifications.",
  Ai = function () {
    var e;
    typeof ErrorEvent == "function"
      ? (e = new ErrorEvent("error", {
          message: ln,
        }))
      : ((e = document.createEvent("Event")),
        e.initEvent("error", !1, !1),
        (e.message = ln)),
      window.dispatchEvent(e);
  },
  yt;
(function (e) {
  (e.BORDER_BOX = "border-box"),
    (e.CONTENT_BOX = "content-box"),
    (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
})(yt || (yt = {}));
var qe = function (e) {
    return Object.freeze(e);
  },
  Mi = /* @__PURE__ */ (function () {
    function e(t, i) {
      (this.inlineSize = t), (this.blockSize = i), qe(this);
    }
    return e;
  })(),
  Yn = (function () {
    function e(t, i, o, n) {
      return (
        (this.x = t),
        (this.y = i),
        (this.width = o),
        (this.height = n),
        (this.top = this.y),
        (this.left = this.x),
        (this.bottom = this.top + this.height),
        (this.right = this.left + this.width),
        qe(this)
      );
    }
    return (
      (e.prototype.toJSON = function () {
        var t = this,
          i = t.x,
          o = t.y,
          n = t.top,
          a = t.right,
          c = t.bottom,
          p = t.left,
          b = t.width,
          x = t.height;
        return {
          x: i,
          y: o,
          top: n,
          right: a,
          bottom: c,
          left: p,
          width: b,
          height: x,
        };
      }),
      (e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }),
      e
    );
  })(),
  Hr = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
  },
  zn = function (e) {
    if (Hr(e)) {
      var t = e.getBBox(),
        i = t.width,
        o = t.height;
      return !i && !o;
    }
    var n = e,
      a = n.offsetWidth,
      c = n.offsetHeight;
    return !(a || c || e.getClientRects().length);
  },
  cn = function (e) {
    var t;
    if (e instanceof Element) return !0;
    var i =
      (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0
        ? void 0
        : t.defaultView;
    return !!(i && e instanceof i.Element);
  },
  Li = function (e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0;
    }
    return !1;
  },
  mt = typeof window < "u" ? window : {},
  Vt = /* @__PURE__ */ new WeakMap(),
  fn = /auto|scroll/,
  Fi = /^tb|vertical/,
  ji = /msie|trident/i.test(mt.navigator && mt.navigator.userAgent),
  Pe = function (e) {
    return parseFloat(e || "0");
  },
  ot = function (e, t, i) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      i === void 0 && (i = !1),
      new Mi((i ? t : e) || 0, (i ? e : t) || 0)
    );
  },
  dn = qe({
    devicePixelContentBoxSize: ot(),
    borderBoxSize: ot(),
    contentBoxSize: ot(),
    contentRect: new Yn(0, 0, 0, 0),
  }),
  Un = function (e, t) {
    if ((t === void 0 && (t = !1), Vt.has(e) && !t)) return Vt.get(e);
    if (zn(e)) return Vt.set(e, dn), dn;
    var i = getComputedStyle(e),
      o = Hr(e) && e.ownerSVGElement && e.getBBox(),
      n = !ji && i.boxSizing === "border-box",
      a = Fi.test(i.writingMode || ""),
      c = !o && fn.test(i.overflowY || ""),
      p = !o && fn.test(i.overflowX || ""),
      b = o ? 0 : Pe(i.paddingTop),
      x = o ? 0 : Pe(i.paddingRight),
      _ = o ? 0 : Pe(i.paddingBottom),
      k = o ? 0 : Pe(i.paddingLeft),
      M = o ? 0 : Pe(i.borderTopWidth),
      L = o ? 0 : Pe(i.borderRightWidth),
      W = o ? 0 : Pe(i.borderBottomWidth),
      T = o ? 0 : Pe(i.borderLeftWidth),
      C = k + x,
      R = b + _,
      H = T + L,
      z = M + W,
      oe = p ? e.offsetHeight - z - e.clientHeight : 0,
      Q = c ? e.offsetWidth - H - e.clientWidth : 0,
      le = n ? C + H : 0,
      be = n ? R + z : 0,
      ye = o ? o.width : Pe(i.width) - le - Q,
      Te = o ? o.height : Pe(i.height) - be - oe,
      ve = ye + C + Q + H,
      xe = Te + R + oe + z,
      ce = qe({
        devicePixelContentBoxSize: ot(
          Math.round(ye * devicePixelRatio),
          Math.round(Te * devicePixelRatio),
          a
        ),
        borderBoxSize: ot(ve, xe, a),
        contentBoxSize: ot(ye, Te, a),
        contentRect: new Yn(k, b, ye, Te),
      });
    return Vt.set(e, ce), ce;
  },
  Bn = function (e, t, i) {
    var o = Un(e, i),
      n = o.borderBoxSize,
      a = o.contentBoxSize,
      c = o.devicePixelContentBoxSize;
    switch (t) {
      case yt.DEVICE_PIXEL_CONTENT_BOX:
        return c;
      case yt.BORDER_BOX:
        return n;
      default:
        return a;
    }
  },
  Di = /* @__PURE__ */ (function () {
    function e(t) {
      var i = Un(t);
      (this.target = t),
        (this.contentRect = i.contentRect),
        (this.borderBoxSize = qe([i.borderBoxSize])),
        (this.contentBoxSize = qe([i.contentBoxSize])),
        (this.devicePixelContentBoxSize = qe([i.devicePixelContentBoxSize]));
    }
    return e;
  })(),
  Xn = function (e) {
    if (zn(e)) return 1 / 0;
    for (var t = 0, i = e.parentNode; i; ) (t += 1), (i = i.parentNode);
    return t;
  },
  Ni = function () {
    var e = 1 / 0,
      t = [];
    Ge.forEach(function (c) {
      if (c.activeTargets.length !== 0) {
        var p = [];
        c.activeTargets.forEach(function (x) {
          var _ = new Di(x.target),
            k = Xn(x.target);
          p.push(_),
            (x.lastReportedSize = Bn(x.target, x.observedBox)),
            k < e && (e = k);
        }),
          t.push(function () {
            c.callback.call(c.observer, p, c.observer);
          }),
          c.activeTargets.splice(0, c.activeTargets.length);
      }
    });
    for (var i = 0, o = t; i < o.length; i++) {
      var n = o[i];
      n();
    }
    return e;
  },
  hn = function (e) {
    Ge.forEach(function (i) {
      i.activeTargets.splice(0, i.activeTargets.length),
        i.skippedTargets.splice(0, i.skippedTargets.length),
        i.observationTargets.forEach(function (n) {
          n.isActive() &&
            (Xn(n.target) > e
              ? i.activeTargets.push(n)
              : i.skippedTargets.push(n));
        });
    });
  },
  Ii = function () {
    var e = 0;
    for (hn(e); Hi(); ) (e = Ni()), hn(e);
    return Pi() && Ai(), e > 0;
  },
  br,
  Gn = [],
  Wi = function () {
    return Gn.splice(0).forEach(function (e) {
      return e();
    });
  },
  Vi = function (e) {
    if (!br) {
      var t = 0,
        i = document.createTextNode(""),
        o = { characterData: !0 };
      new MutationObserver(function () {
        return Wi();
      }).observe(i, o),
        (br = function () {
          i.textContent = "".concat(t ? t-- : t++);
        });
    }
    Gn.push(e), br();
  },
  $i = function (e) {
    Vi(function () {
      requestAnimationFrame(e);
    });
  },
  Ut = 0,
  Yi = function () {
    return !!Ut;
  },
  zi = 250,
  Ui = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
  vn = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus",
  ],
  pn = function (e) {
    return e === void 0 && (e = 0), Date.now() + e;
  },
  xr = !1,
  Bi = (function () {
    function e() {
      var t = this;
      (this.stopped = !0),
        (this.listener = function () {
          return t.schedule();
        });
    }
    return (
      (e.prototype.run = function (t) {
        var i = this;
        if ((t === void 0 && (t = zi), !xr)) {
          xr = !0;
          var o = pn(t);
          $i(function () {
            var n = !1;
            try {
              n = Ii();
            } finally {
              if (((xr = !1), (t = o - pn()), !Yi())) return;
              n ? i.run(1e3) : t > 0 ? i.run(t) : i.start();
            }
          });
        }
      }),
      (e.prototype.schedule = function () {
        this.stop(), this.run();
      }),
      (e.prototype.observe = function () {
        var t = this,
          i = function () {
            return t.observer && t.observer.observe(document.body, Ui);
          };
        document.body ? i() : mt.addEventListener("DOMContentLoaded", i);
      }),
      (e.prototype.start = function () {
        var t = this;
        this.stopped &&
          ((this.stopped = !1),
          (this.observer = new MutationObserver(this.listener)),
          this.observe(),
          vn.forEach(function (i) {
            return mt.addEventListener(i, t.listener, !0);
          }));
      }),
      (e.prototype.stop = function () {
        var t = this;
        this.stopped ||
          (this.observer && this.observer.disconnect(),
          vn.forEach(function (i) {
            return mt.removeEventListener(i, t.listener, !0);
          }),
          (this.stopped = !0));
      }),
      e
    );
  })(),
  Tr = new Bi(),
  mn = function (e) {
    !Ut && e > 0 && Tr.start(), (Ut += e), !Ut && Tr.stop();
  },
  Xi = function (e) {
    return !Hr(e) && !Li(e) && getComputedStyle(e).display === "inline";
  },
  Gi = (function () {
    function e(t, i) {
      (this.target = t),
        (this.observedBox = i || yt.CONTENT_BOX),
        (this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0,
        });
    }
    return (
      (e.prototype.isActive = function () {
        var t = Bn(this.target, this.observedBox, !0);
        return (
          Xi(this.target) && (this.lastReportedSize = t),
          this.lastReportedSize.inlineSize !== t.inlineSize ||
            this.lastReportedSize.blockSize !== t.blockSize
        );
      }),
      e
    );
  })(),
  qi = /* @__PURE__ */ (function () {
    function e(t, i) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = i);
    }
    return e;
  })(),
  $t = /* @__PURE__ */ new WeakMap(),
  yn = function (e, t) {
    for (var i = 0; i < e.length; i += 1) if (e[i].target === t) return i;
    return -1;
  },
  Yt = (function () {
    function e() {}
    return (
      (e.connect = function (t, i) {
        var o = new qi(t, i);
        $t.set(t, o);
      }),
      (e.observe = function (t, i, o) {
        var n = $t.get(t),
          a = n.observationTargets.length === 0;
        yn(n.observationTargets, i) < 0 &&
          (a && Ge.push(n),
          n.observationTargets.push(new Gi(i, o && o.box)),
          mn(1),
          Tr.schedule());
      }),
      (e.unobserve = function (t, i) {
        var o = $t.get(t),
          n = yn(o.observationTargets, i),
          a = o.observationTargets.length === 1;
        n >= 0 &&
          (a && Ge.splice(Ge.indexOf(o), 1),
          o.observationTargets.splice(n, 1),
          mn(-1));
      }),
      (e.disconnect = function (t) {
        var i = this,
          o = $t.get(t);
        o.observationTargets.slice().forEach(function (n) {
          return i.unobserve(t, n.target);
        }),
          o.activeTargets.splice(0, o.activeTargets.length);
      }),
      e
    );
  })(),
  Ki = (function () {
    function e(t) {
      if (arguments.length === 0)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
        );
      if (typeof t != "function")
        throw new TypeError(
          "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
        );
      Yt.connect(this, t);
    }
    return (
      (e.prototype.observe = function (t, i) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!cn(t))
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        Yt.observe(this, t, i);
      }),
      (e.prototype.unobserve = function (t) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!cn(t))
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        Yt.unobserve(this, t);
      }),
      (e.prototype.disconnect = function () {
        Yt.disconnect(this);
      }),
      (e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }),
      e
    );
  })();
const Ji = {},
  Qi = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: {
      href: "",
    },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    SVGSVGElement: {},
  },
  Zi = typeof window > "u" ? Qi : window,
  Se = typeof navigator < "u" ? navigator : void 0,
  qn = () => typeof document == "object",
  eo = () => {
    let e = -1;
    const i = Se && /Version\/([\d.]+)/.exec(Se.userAgent);
    return i && i[1] && (e = parseFloat(i[1])), e;
  },
  to = () =>
    Se && /Chrome/.test(Se.userAgent) && /Google Inc/.test(Se.vendor) && !no(),
  Kn = () =>
    Se && /Safari/.test(Se.userAgent) && /Apple Computer/.test(Se.vendor),
  ro = () => Se && /FramerX/.test(Se.userAgent),
  no = () => Se && /Edg\//.test(Se.userAgent),
  io = () => Ji.env.NODE_ENV === "test";
var at, ut;
class oo {
  constructor() {
    gr(this, at);
    gr(this, ut, /* @__PURE__ */ new WeakMap());
    const t = Zi.ResizeObserver ?? Ki;
    nn(this, at, new t(this.updateResizedElements.bind(this)));
  }
  updateResizedElements(t) {
    for (const i of t) {
      const o = nt(this, ut).get(i.target);
      o && o(i.contentRect);
    }
  }
  observeElementWithCallback(t, i) {
    nt(this, at).observe(t), nt(this, ut).set(t, i);
  }
  unobserve(t) {
    nt(this, at).unobserve(t), nt(this, ut).delete(t);
  }
}
(at = new WeakMap()), (ut = new WeakMap());
qn() && new oo();
bt.createContext(!0);
const gn = /* @__PURE__ */ new Set();
function Jn(e, ...t) {
  gn.has(e) || (gn.add(e), console.warn(e, ...t));
}
const ao = (e) => () => {
    Jn(e);
  },
  uo = {
    // We need a default implementation for useImageSource and useImageElement as it is used for rendering image backgrounds which would break otherwise.
    // The default value is used for HTML export and when using the library without Framer.
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, i) {
      const o = new Image();
      return (
        (o.src = lo.useImageSource(e, t, i)),
        e.srcSet && (o.srcset = e.srcSet),
        o
      );
    },
  },
  so = {
    get(e, t, i) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, i)
        : ao(
            `${String(
              t
            )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  lo = new Proxy(uo, so);
function co(e) {
  return typeof e == "function";
}
function fo(e) {
  return typeof e == "boolean";
}
function ho(e) {
  return typeof e == "string";
}
function vo(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function Qn(e) {
  return Array.isArray(e);
}
function it(e) {
  return e !== null && typeof e == "object" && !Qn(e);
}
function _r(e) {
  return typeof e > "u";
}
var gt;
(function (e) {
  (e.canvas = "CANVAS"),
    (e.export = "EXPORT"),
    (e.thumbnail = "THUMBNAIL"),
    (e.preview = "PREVIEW");
})(gt || (gt = {}));
const bn = {
  imageBaseURL: "",
  target: gt.preview,
  zoom: 1,
};
(function (e) {
  function t() {
    return bn.target;
  }
  e.current = t;
  function i() {
    const o = bn.target;
    return o === e.canvas || o === e.export;
  }
  e.hasRestrictions = i;
})(gt || (gt = {}));
function po(e, t, i) {
  const o = `, use ${i} instead`,
    n = `Deprecation warning: ${e} will be removed in version ${t}${o}.`;
  Jn(n);
}
class mo {
  constructor() {
    Ee(this, "observers", /* @__PURE__ */ new Set());
    Ee(this, "transactions", {});
  }
  add(t) {
    this.observers.add(t);
    let i = !1;
    return () => {
      i || ((i = !0), this.remove(t));
    };
  }
  remove(t) {
    this.observers.delete(t);
  }
  notify(t, i) {
    if (i) {
      const o = this.transactions[i] || t;
      (o.value = t.value), (this.transactions[i] = o);
    } else this.callObservers(t);
  }
  finishTransaction(t) {
    const i = this.transactions[t];
    return delete this.transactions[t], this.callObservers(i, t);
  }
  callObservers(t, i) {
    const o = [];
    return (
      new Set(this.observers).forEach((n) => {
        typeof n == "function" ? n(t, i) : (n.update(t, i), o.push(n.finish));
      }),
      o
    );
  }
}
const ke = /* @__PURE__ */ (() => {
    function e(t) {
      return (
        po(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Le(t) ? t : new go(t)
      );
    }
    return (
      (e.transaction = (t) => {
        const i = Math.random(),
          o = /* @__PURE__ */ new Set();
        t((c, p) => {
          c.set(p, i), o.add(c);
        }, i);
        const a = [];
        o.forEach((c) => {
          a.push(...c.finishTransaction(i));
        }),
          a.forEach((c) => {
            c(i);
          });
      }),
      (e.getNumber = (t, i = 0) => e.get(t, i)),
      (e.get = (t, i) => (t == null ? i : Le(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        const i = {};
        for (const o in t) {
          const n = t[o];
          Le(n) ? (i[o] = n.get()) : (i[o] = n);
        }
        return i;
      }),
      e
    );
  })(),
  xn = "onUpdate",
  wn = "finishTransaction";
function Le(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    xn in e &&
    e[xn] instanceof Function &&
    wn in e &&
    e[wn] instanceof Function
  );
}
function yo(e, t) {
  return {
    interpolate(i, o) {
      const n = i.get(),
        a = o.get(),
        c = ke(n);
      return (p) => {
        const b = t.interpolate(n, a)(p);
        return c.set(b), c;
      };
    },
    difference(i, o) {
      const n = i.get();
      return t.difference(n, o.get());
    },
  };
}
class go {
  constructor(t) {
    Ee(this, "value");
    Ee(this, "observers", new mo());
    this.value = t;
  }
  static interpolationFor(t, i) {
    if (Le(t)) return yo(t, i);
  }
  get() {
    return this.value;
  }
  set(t, i) {
    const o = this.value;
    Le(t) && (t = t.get()), (this.value = t);
    const n = {
      value: t,
      oldValue: o,
    };
    this.observers.notify(n, i);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
}
const bo = "src";
var En;
(function (e) {
  e.isImageObject = function (t) {
    return !t || typeof t == "string" ? !1 : bo in t;
  };
})(En || (En = {}));
function Tn(e, ...t) {
  var o, n;
  if (e) return;
  const i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      const a = i.stack.split(`
`);
      (o = a[1]) != null && o.includes("assert")
        ? (a.splice(1, 1),
          (i.stack = a.join(`
`)))
        : (n = a[0]) != null &&
          n.includes("assert") &&
          (a.splice(0, 1),
          (i.stack = a.join(`
`)));
    } catch {}
  throw i;
}
function _n(e, t) {
  throw new Error(
    e ? `Unexpected value: ${e}` : "Application entered invalid state"
  );
}
function he(e) {
  return typeof e == "number" && isFinite(e);
}
function zt(e, t) {
  const i = Math.round(Math.abs(t)),
    o = Math.pow(10, i);
  return Math.round(e * o) / o;
}
function Rn(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Xe(e, t) {
  return { x: e, y: t };
}
(function (e) {
  (e.add = (...i) =>
    i.reduce((o, n) => ({ x: o.x + n.x, y: o.y + n.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({
      x: Math.abs(i.x),
      y: Math.abs(i.y),
    })),
    (e.reverse = (i) => ({
      x: i.x * -1,
      y: i.y * -1,
    })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: Rn(i.x, o.x),
      y: Rn(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      const n = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(n * n + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        const n = i - o,
          a = Math.abs(n) + 180,
          c = Math.floor(a / 360);
        return n < 180 && (o -= c * 360), n > 180 && (o += c * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return {
      x: (i.x + o.x) / 2,
      y: (i.y + o.y) / 2,
    };
  }
  e.center = t;
})(Xe || (Xe = {}));
var Rr;
(function (e) {
  function t(n, a) {
    return n === a
      ? !0
      : !n || !a
      ? !1
      : n.x === a.x &&
        n.y === a.y &&
        n.width === a.width &&
        n.height === a.height;
  }
  (e.equals = t),
    (e.atOrigin = (n) => ({ ...n, x: 0, y: 0 })),
    (e.fromTwoPoints = (n, a) => ({
      x: Math.min(n.x, a.x),
      y: Math.min(n.y, a.y),
      width: Math.abs(n.x - a.x),
      height: Math.abs(n.y - a.y),
    })),
    (e.fromRect = (n) => ({
      x: n.left,
      y: n.top,
      width: n.right - n.left,
      height: n.bottom - n.top,
    })),
    (e.multiply = (n, a) => ({
      x: n.x * a,
      y: n.y * a,
      width: n.width * a,
      height: n.height * a,
    })),
    (e.divide = (n, a) => e.multiply(n, 1 / a)),
    (e.offset = (n, a) => {
      const c = typeof a.x == "number" ? a.x : 0,
        p = typeof a.y == "number" ? a.y : 0;
      return {
        ...n,
        x: n.x + c,
        y: n.y + p,
      };
    });
  function i(n, a) {
    if (a === 0) return n;
    const c = 2 * a;
    return {
      x: n.x - a,
      y: n.y - a,
      width: n.width + c,
      height: n.height + c,
    };
  }
  (e.inflate = i),
    (e.pixelAligned = (n) => {
      const a = Math.round(n.x),
        c = Math.round(n.y),
        p = Math.round(n.x + n.width),
        b = Math.round(n.y + n.height),
        x = Math.max(p - a, 0),
        _ = Math.max(b - c, 0);
      return { x: a, y: c, width: x, height: _ };
    }),
    (e.halfPixelAligned = (n) => {
      const a = Math.round(n.x * 2) / 2,
        c = Math.round(n.y * 2) / 2,
        p = Math.round((n.x + n.width) * 2) / 2,
        b = Math.round((n.y + n.height) * 2) / 2,
        x = Math.max(p - a, 1),
        _ = Math.max(b - c, 1);
      return { x: a, y: c, width: x, height: _ };
    }),
    (e.round = (n, a = 0) => {
      const c = zt(n.x, a),
        p = zt(n.y, a),
        b = zt(n.width, a),
        x = zt(n.height, a);
      return { x: c, y: p, width: b, height: x };
    }),
    (e.roundToOutside = (n) => {
      const a = Math.floor(n.x),
        c = Math.floor(n.y),
        p = Math.ceil(n.x + n.width),
        b = Math.ceil(n.y + n.height),
        x = Math.max(p - a, 0),
        _ = Math.max(b - c, 0);
      return { x: a, y: c, width: x, height: _ };
    }),
    (e.minX = (n) => n.x),
    (e.maxX = (n) => n.x + n.width),
    (e.minY = (n) => n.y),
    (e.maxY = (n) => n.y + n.height),
    (e.positions = (n) => ({
      minX: n.x,
      midX: n.x + n.width / 2,
      maxX: e.maxX(n),
      minY: n.y,
      midY: n.y + n.height / 2,
      maxY: e.maxY(n),
    })),
    (e.center = (n) => ({
      x: n.x + n.width / 2,
      y: n.y + n.height / 2,
    })),
    (e.fromPoints = (n) => {
      const a = n.map((k) => k.x),
        c = n.map((k) => k.y),
        p = Math.min(...a),
        b = Math.min(...c),
        x = Math.max(...a) - p,
        _ = Math.max(...c) - b;
      return { x: p, y: b, width: x, height: _ };
    }),
    (e.merge = (...n) => {
      const a = {
          x: Math.min(...n.map(e.minX)),
          y: Math.min(...n.map(e.minY)),
        },
        c = {
          x: Math.max(...n.map(e.maxX)),
          y: Math.max(...n.map(e.maxY)),
        };
      return e.fromTwoPoints(a, c);
    }),
    (e.intersection = (n, a) => {
      const c = Math.max(n.x, a.x),
        p = Math.min(n.x + n.width, a.x + a.width),
        b = Math.max(n.y, a.y),
        x = Math.min(n.y + n.height, a.y + a.height);
      return { x: c, y: b, width: p - c, height: x - b };
    }),
    (e.points = (n) => [
      { x: e.minX(n), y: e.minY(n) },
      { x: e.minX(n), y: e.maxY(n) },
      { x: e.maxX(n), y: e.minY(n) },
      { x: e.maxX(n), y: e.maxY(n) },
    ]),
    (e.transform = (n, a) => {
      const { x: c, y: p } = a.transformPoint({ x: n.x, y: n.y }),
        { x: b, y: x } = a.transformPoint({ x: n.x + n.width, y: n.y }),
        { x: _, y: k } = a.transformPoint({
          x: n.x + n.width,
          y: n.y + n.height,
        }),
        { x: M, y: L } = a.transformPoint({ x: n.x, y: n.y + n.height }),
        W = Math.min(c, b, _, M),
        T = Math.max(c, b, _, M) - W,
        C = Math.min(p, x, k, L),
        R = Math.max(p, x, k, L) - C;
      return { x: W, y: C, width: T, height: R };
    }),
    (e.containsPoint = (n, a) =>
      !(
        a.x < e.minX(n) ||
        a.x > e.maxX(n) ||
        a.y < e.minY(n) ||
        a.y > e.maxY(n) ||
        isNaN(n.x) ||
        isNaN(n.y)
      )),
    (e.containsRect = (n, a) => {
      for (const c of e.points(a)) if (!e.containsPoint(n, c)) return !1;
      return !0;
    }),
    (e.toCSS = (n) => ({
      display: "block",
      transform: `translate(${n.x}px, ${n.y}px)`,
      width: `${n.width}px`,
      height: `${n.height}px`,
    })),
    (e.inset = (n, a) => ({
      x: n.x + a,
      y: n.y + a,
      width: Math.max(0, n.width - 2 * a),
      height: Math.max(0, n.height - 2 * a),
    })),
    (e.intersects = (n, a) =>
      !(
        a.x >= e.maxX(n) ||
        e.maxX(a) <= n.x ||
        a.y >= e.maxY(n) ||
        e.maxY(a) <= n.y
      )),
    (e.overlapHorizontally = (n, a) => {
      const c = e.maxX(n),
        p = e.maxX(a);
      return c > a.x && p > n.x;
    }),
    (e.overlapVertically = (n, a) => {
      const c = e.maxY(n),
        p = e.maxY(a);
      return c > a.y && p > n.y;
    }),
    (e.doesNotIntersect = (n, a) =>
      a.find((c) => e.intersects(c, n)) === void 0),
    (e.isEqual = (n, a) => {
      if (n && a) {
        const { x: c, y: p, width: b, height: x } = n;
        return a.x === c && a.y === p && a.width === b && a.height === x;
      } else return n === a;
    }),
    (e.cornerPoints = (n) => {
      const a = n.x,
        c = n.x + n.width,
        p = n.y,
        b = n.y + n.height;
      return [
        { x: a, y: p },
        { x: c, y: p },
        { x: c, y: b },
        { x: a, y: b },
      ];
    }),
    (e.midPoints = (n) => {
      const a = n.x,
        c = n.x + n.width / 2,
        p = n.x + n.width,
        b = n.y,
        x = n.y + n.height / 2,
        _ = n.y + n.height;
      return [
        { x: c, y: b },
        { x: p, y: x },
        { x: c, y: _ },
        { x: a, y: x },
      ];
    }),
    (e.pointDistance = (n, a) => {
      let c = 0,
        p = 0;
      return (
        a.x < n.x ? (c = n.x - a.x) : a.x > e.maxX(n) && (c = a.x - e.maxX(n)),
        a.y < n.y ? (p = n.y - a.y) : a.y > e.maxY(n) && (p = a.y - e.maxY(n)),
        Xe.distance({ x: c, y: p }, { x: 0, y: 0 })
      );
    });
  const o = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };
  (e.fromAny = (n, a = o) => ({
    x: n.x || a.x,
    y: n.y || a.y,
    width: n.width || a.width,
    height: n.height || a.height,
  })),
    (e.withMinSize = (n, a) => {
      const { width: c, height: p } = a,
        b = n.width - c,
        x = n.height - p;
      return {
        width: Math.max(n.width, c),
        height: Math.max(n.height, p),
        x: n.width < c ? n.x + b / 2 : n.x,
        y: n.height < p ? n.y + x / 2 : n.y,
      };
    });
})(Rr || (Rr = {}));
var A;
(function (e) {
  (e[(e.FixedNumber = 0)] = "FixedNumber"),
    (e[(e.Percentage = 1)] = "Percentage"),
    (e[(e.Auto = 2)] = "Auto"),
    (e[(e.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (e[(e.Viewport = 4)] = "Viewport");
})(A || (A = {}));
var Cr;
(function (e) {
  e.quickfix = (t) => (
    (t.widthType === A.Auto || t.heightType === A.Auto) &&
      (t.aspectRatio = null),
    he(t.aspectRatio) &&
      (t.left && t.right && (t.widthType = A.FixedNumber),
      t.top && t.bottom && (t.heightType = A.FixedNumber),
      t.left && t.right && t.top && t.bottom && (t.bottom = !1),
      t.widthType !== A.FixedNumber &&
        t.heightType !== A.FixedNumber &&
        (t.heightType = A.FixedNumber)),
    t.left &&
      t.right &&
      ((t.fixedSize || t.widthType === A.Auto || he(t.maxWidth)) &&
        (t.right = !1),
      (t.widthType = A.FixedNumber)),
    t.top &&
      t.bottom &&
      ((t.fixedSize || t.heightType === A.Auto || he(t.maxHeight)) &&
        (t.bottom = !1),
      (t.heightType = A.FixedNumber)),
    t
  );
})(Cr || (Cr = {}));
function Cn(e) {
  if (typeof e == "string") {
    const t = e.trim();
    if (t === "auto") return A.Auto;
    if (t.endsWith("fr")) return A.FractionOfFreeSpace;
    if (t.endsWith("%")) return A.Percentage;
    if (t.endsWith("vw") || t.endsWith("vh")) return A.Viewport;
  }
  return A.FixedNumber;
}
var On;
(function (e) {
  (e.fromProperties = (t) => {
    const {
        left: i,
        right: o,
        top: n,
        bottom: a,
        width: c,
        height: p,
        centerX: b,
        centerY: x,
        aspectRatio: _,
        autoSize: k,
      } = t,
      M = Cr.quickfix({
        left: he(i) || Le(i),
        right: he(o) || Le(o),
        top: he(n) || Le(n),
        bottom: he(a) || Le(a),
        widthType: Cn(c),
        heightType: Cn(p),
        aspectRatio: _ || null,
        fixedSize: k === !0,
      });
    let L = null,
      W = null,
      T = A.FixedNumber,
      C = A.FixedNumber;
    if (M.widthType !== A.FixedNumber && typeof c == "string") {
      const z = parseFloat(c);
      c.endsWith("fr")
        ? ((T = A.FractionOfFreeSpace), (L = z))
        : c === "auto"
        ? (T = A.Auto)
        : ((T = A.Percentage), (L = z / 100));
    } else c !== void 0 && typeof c != "string" && (L = ke.getNumber(c));
    if (M.heightType !== A.FixedNumber && typeof p == "string") {
      const z = parseFloat(p);
      p.endsWith("fr")
        ? ((C = A.FractionOfFreeSpace), (W = z))
        : p === "auto"
        ? (C = A.Auto)
        : ((C = A.Percentage), (W = parseFloat(p) / 100));
    } else p !== void 0 && typeof p != "string" && (W = ke.getNumber(p));
    let R = 0.5,
      H = 0.5;
    return (
      b && (R = parseFloat(b) / 100),
      x && (H = parseFloat(x) / 100),
      {
        left: M.left ? ke.getNumber(i) : null,
        right: M.right ? ke.getNumber(o) : null,
        top: M.top ? ke.getNumber(n) : null,
        bottom: M.bottom ? ke.getNumber(a) : null,
        widthType: T,
        heightType: C,
        width: L,
        height: W,
        aspectRatio: M.aspectRatio || null,
        centerAnchorX: R,
        centerAnchorY: H,
      }
    );
  }),
    (e.toSize = (t, i, o, n) => {
      let a = null,
        c = null;
      const p =
          i != null && i.sizing
            ? ke.getNumber(i == null ? void 0 : i.sizing.width)
            : null,
        b =
          i != null && i.sizing
            ? ke.getNumber(i == null ? void 0 : i.sizing.height)
            : null,
        x = Sn(t.left, t.right);
      if (p && he(x)) a = p - x;
      else if (o && t.widthType === A.Auto) a = o.width;
      else if (he(t.width))
        switch (t.widthType) {
          case A.FixedNumber:
            a = t.width;
            break;
          case A.FractionOfFreeSpace:
            a = n
              ? (n.freeSpaceInParent.width / n.freeSpaceUnitDivisor.width) *
                t.width
              : null;
            break;
          case A.Percentage:
          case A.Viewport:
            p && (a = p * t.width);
            break;
          case A.Auto:
            break;
          default:
            _n(t.widthType);
        }
      const _ = Sn(t.top, t.bottom);
      if (b && he(_)) c = b - _;
      else if (o && t.heightType === A.Auto) c = o.height;
      else if (he(t.height))
        switch (t.heightType) {
          case A.FixedNumber:
            c = t.height;
            break;
          case A.FractionOfFreeSpace:
            c = n
              ? (n.freeSpaceInParent.height / n.freeSpaceUnitDivisor.height) *
                t.height
              : null;
            break;
          case A.Percentage:
          case A.Viewport:
            b && (c = b * t.height);
            break;
          case A.Auto:
            break;
          default:
            _n(t.heightType);
        }
      return _o(
        a,
        c,
        t,
        {
          height: b ?? 0,
          width: p ?? 0,
        },
        i == null ? void 0 : i.viewport
      );
    }),
    (e.toRect = (t, i = null, o = null, n = !1, a = null) => {
      let c = t.left || 0,
        p = t.top || 0;
      const { width: b, height: x } = e.toSize(t, i, o, a),
        _ = (i == null ? void 0 : i.positioning) ?? null,
        k = _ ? ke.getNumber(_.width) : null,
        M = _ ? ke.getNumber(_.height) : null;
      t.left !== null
        ? (c = t.left)
        : k && t.right !== null
        ? (c = k - t.right - b)
        : k && (c = t.centerAnchorX * k - b / 2),
        t.top !== null
          ? (p = t.top)
          : M && t.bottom !== null
          ? (p = M - t.bottom - x)
          : M && (p = t.centerAnchorY * M - x / 2);
      const L = { x: c, y: p, width: b, height: x };
      return n ? Rr.pixelAligned(L) : L;
    });
})(On || (On = {}));
const xo = 200,
  wo = 200;
function Xt(e, t, i, o) {
  if (typeof t == "string") {
    if (t.endsWith("%") && i)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * i.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * i.height;
      }
    if (t.endsWith("vh") && o)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * o.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * o.height;
      }
    return parseFloat(t);
  }
  return t;
}
function Eo(e, t, i, o) {
  return (
    t.minHeight && (e = Math.max(Xt("minHeight", t.minHeight, i, o), e)),
    t.maxHeight && (e = Math.min(Xt("maxHeight", t.maxHeight, i, o), e)),
    e
  );
}
function To(e, t, i, o) {
  return (
    t.minWidth && (e = Math.max(Xt("minWidth", t.minWidth, i, o), e)),
    t.maxWidth && (e = Math.min(Xt("maxWidth", t.maxWidth, i, o), e)),
    e
  );
}
function _o(e, t, i, o, n) {
  let a = To(he(e) ? e : xo, i, o, n),
    c = Eo(he(t) ? t : wo, i, o, n);
  return (
    he(i.aspectRatio) &&
      i.aspectRatio > 0 &&
      (he(i.left) && he(i.right)
        ? (c = a / i.aspectRatio)
        : he(i.top) && he(i.bottom)
        ? (a = c * i.aspectRatio)
        : i.widthType !== A.FixedNumber
        ? (c = a / i.aspectRatio)
        : (a = c * i.aspectRatio)),
    {
      width: a,
      height: c,
    }
  );
}
function Sn(e, t) {
  return !he(e) || !he(t) ? null : e + t;
}
var Or;
(function (e) {
  (e[(e.Unknown = 0)] = "Unknown"),
    (e[(e.Disabled = 1)] = "Disabled"),
    (e[(e.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel");
})(Or || (Or = {}));
const Ro = bt.createContext({
  parentSize: Or.Unknown,
});
Ro.Consumer;
to();
var d = d || {};
d.Geometry = function () {};
d.Geometry.intersectLineLine = function (e, t) {
  var i = (e.intercept - t.intercept) / (t.slope - e.slope),
    o = e.slope * i + e.intercept;
  return { x: i, y: o };
};
d.Geometry.distanceFromOrigin = function (e) {
  return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
};
d.Geometry.distanceLineFromOrigin = function (e) {
  return Math.abs(e.intercept) / Math.sqrt(Math.pow(e.slope, 2) + 1);
};
d.Geometry.perpendicularThroughPoint = function (e, t) {
  var i = -1 / e.slope,
    o = t.y - i * t.x;
  return { slope: i, intercept: o };
};
d.Geometry.angleFromOrigin = function (e) {
  return Math.atan2(e.y, e.x);
};
d.Geometry.normalizeAngle = function (e) {
  var t = 2 * Math.PI;
  return ((e % t) + t) % t;
};
d.Geometry.lengthOfRayUntilIntersect = function (e, t) {
  return t.intercept / (Math.sin(e) - t.slope * Math.cos(e));
};
d.Hsluv = function () {};
d.Hsluv.getBounds = function (e) {
  for (
    var t = [],
      i = Math.pow(e + 16, 3) / 1560896,
      o = i > d.Hsluv.epsilon ? i : e / d.Hsluv.kappa,
      n = 0;
    n < 3;

  )
    for (
      var a = n++,
        c = d.Hsluv.m[a][0],
        p = d.Hsluv.m[a][1],
        b = d.Hsluv.m[a][2],
        x = 0;
      x < 2;

    ) {
      var _ = x++,
        k = (284517 * c - 94839 * b) * o,
        M = (838422 * b + 769860 * p + 731718 * c) * e * o - 769860 * _ * e,
        L = (632260 * b - 126452 * p) * o + 126452 * _;
      t.push({ slope: k / L, intercept: M / L });
    }
  return t;
};
d.Hsluv.maxSafeChromaForL = function (e) {
  for (var t = d.Hsluv.getBounds(e), i = 1 / 0, o = 0; o < t.length; ) {
    var n = t[o];
    ++o;
    var a = d.Geometry.distanceLineFromOrigin(n);
    i = Math.min(i, a);
  }
  return i;
};
d.Hsluv.maxChromaForLH = function (e, t) {
  for (
    var i = (t / 360) * Math.PI * 2, o = d.Hsluv.getBounds(e), n = 1 / 0, a = 0;
    a < o.length;

  ) {
    var c = o[a];
    ++a;
    var p = d.Geometry.lengthOfRayUntilIntersect(i, c);
    p >= 0 && (n = Math.min(n, p));
  }
  return n;
};
d.Hsluv.dotProduct = function (e, t) {
  for (var i = 0, o = 0, n = e.length; o < n; ) {
    var a = o++;
    i += e[a] * t[a];
  }
  return i;
};
d.Hsluv.fromLinear = function (e) {
  return e <= 31308e-7
    ? 12.92 * e
    : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055;
};
d.Hsluv.toLinear = function (e) {
  return e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
};
d.Hsluv.xyzToRgb = function (e) {
  return [
    d.Hsluv.fromLinear(d.Hsluv.dotProduct(d.Hsluv.m[0], e)),
    d.Hsluv.fromLinear(d.Hsluv.dotProduct(d.Hsluv.m[1], e)),
    d.Hsluv.fromLinear(d.Hsluv.dotProduct(d.Hsluv.m[2], e)),
  ];
};
d.Hsluv.rgbToXyz = function (e) {
  var t = [
    d.Hsluv.toLinear(e[0]),
    d.Hsluv.toLinear(e[1]),
    d.Hsluv.toLinear(e[2]),
  ];
  return [
    d.Hsluv.dotProduct(d.Hsluv.minv[0], t),
    d.Hsluv.dotProduct(d.Hsluv.minv[1], t),
    d.Hsluv.dotProduct(d.Hsluv.minv[2], t),
  ];
};
d.Hsluv.yToL = function (e) {
  return e <= d.Hsluv.epsilon
    ? (e / d.Hsluv.refY) * d.Hsluv.kappa
    : 116 * Math.pow(e / d.Hsluv.refY, 0.3333333333333333) - 16;
};
d.Hsluv.lToY = function (e) {
  return e <= 8
    ? (d.Hsluv.refY * e) / d.Hsluv.kappa
    : d.Hsluv.refY * Math.pow((e + 16) / 116, 3);
};
d.Hsluv.xyzToLuv = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2],
    n = t + 15 * i + 3 * o,
    a = 4 * t,
    c = 9 * i;
  n != 0 ? ((a /= n), (c /= n)) : ((a = NaN), (c = NaN));
  var p = d.Hsluv.yToL(i);
  if (p == 0) return [0, 0, 0];
  var b = 13 * p * (a - d.Hsluv.refU),
    x = 13 * p * (c - d.Hsluv.refV);
  return [p, b, x];
};
d.Hsluv.luvToXyz = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2];
  if (t == 0) return [0, 0, 0];
  var n = i / (13 * t) + d.Hsluv.refU,
    a = o / (13 * t) + d.Hsluv.refV,
    c = d.Hsluv.lToY(t),
    p = 0 - (9 * c * n) / ((n - 4) * a - n * a),
    b = (9 * c - 15 * a * c - a * p) / (3 * a);
  return [p, c, b];
};
d.Hsluv.luvToLch = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2],
    n = Math.sqrt(i * i + o * o),
    a;
  if (n < 1e-8) a = 0;
  else {
    var c = Math.atan2(o, i);
    (a = (c * 180) / Math.PI), a < 0 && (a = 360 + a);
  }
  return [t, n, a];
};
d.Hsluv.lchToLuv = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2],
    n = (o / 360) * 2 * Math.PI,
    a = Math.cos(n) * i,
    c = Math.sin(n) * i;
  return [t, a, c];
};
d.Hsluv.hsluvToLch = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2];
  if (o > 99.9999999) return [100, 0, t];
  if (o < 1e-8) return [0, 0, t];
  var n = d.Hsluv.maxChromaForLH(o, t),
    a = (n / 100) * i;
  return [o, a, t];
};
d.Hsluv.lchToHsluv = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2];
  if (t > 99.9999999) return [o, 0, 100];
  if (t < 1e-8) return [o, 0, 0];
  var n = d.Hsluv.maxChromaForLH(t, o),
    a = (i / n) * 100;
  return [o, a, t];
};
d.Hsluv.hpluvToLch = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2];
  if (o > 99.9999999) return [100, 0, t];
  if (o < 1e-8) return [0, 0, t];
  var n = d.Hsluv.maxSafeChromaForL(o),
    a = (n / 100) * i;
  return [o, a, t];
};
d.Hsluv.lchToHpluv = function (e) {
  var t = e[0],
    i = e[1],
    o = e[2];
  if (t > 99.9999999) return [o, 0, 100];
  if (t < 1e-8) return [o, 0, 0];
  var n = d.Hsluv.maxSafeChromaForL(t),
    a = (i / n) * 100;
  return [o, a, t];
};
d.Hsluv.rgbToHex = function (e) {
  for (var t = "#", i = 0; i < 3; ) {
    var o = i++,
      n = e[o],
      a = Math.round(n * 255),
      c = a % 16,
      p = ((a - c) / 16) | 0;
    t += d.Hsluv.hexChars.charAt(p) + d.Hsluv.hexChars.charAt(c);
  }
  return t;
};
d.Hsluv.hexToRgb = function (e) {
  e = e.toLowerCase();
  for (var t = [], i = 0; i < 3; ) {
    var o = i++,
      n = d.Hsluv.hexChars.indexOf(e.charAt(o * 2 + 1)),
      a = d.Hsluv.hexChars.indexOf(e.charAt(o * 2 + 2)),
      c = n * 16 + a;
    t.push(c / 255);
  }
  return t;
};
d.Hsluv.lchToRgb = function (e) {
  return d.Hsluv.xyzToRgb(d.Hsluv.luvToXyz(d.Hsluv.lchToLuv(e)));
};
d.Hsluv.rgbToLch = function (e) {
  return d.Hsluv.luvToLch(d.Hsluv.xyzToLuv(d.Hsluv.rgbToXyz(e)));
};
d.Hsluv.hsluvToRgb = function (e) {
  return d.Hsluv.lchToRgb(d.Hsluv.hsluvToLch(e));
};
d.Hsluv.rgbToHsluv = function (e) {
  return d.Hsluv.lchToHsluv(d.Hsluv.rgbToLch(e));
};
d.Hsluv.hpluvToRgb = function (e) {
  return d.Hsluv.lchToRgb(d.Hsluv.hpluvToLch(e));
};
d.Hsluv.rgbToHpluv = function (e) {
  return d.Hsluv.lchToHpluv(d.Hsluv.rgbToLch(e));
};
d.Hsluv.hsluvToHex = function (e) {
  return d.Hsluv.rgbToHex(d.Hsluv.hsluvToRgb(e));
};
d.Hsluv.hpluvToHex = function (e) {
  return d.Hsluv.rgbToHex(d.Hsluv.hpluvToRgb(e));
};
d.Hsluv.hexToHsluv = function (e) {
  return d.Hsluv.rgbToHsluv(d.Hsluv.hexToRgb(e));
};
d.Hsluv.hexToHpluv = function (e) {
  return d.Hsluv.rgbToHpluv(d.Hsluv.hexToRgb(e));
};
d.Hsluv.m = [
  [3.240969941904521, -1.537383177570093, -0.498610760293],
  [-0.96924363628087, 1.87596750150772, 0.041555057407175],
  [0.055630079696993, -0.20397695888897, 1.056971514242878],
];
d.Hsluv.minv = [
  [0.41239079926595, 0.35758433938387, 0.18048078840183],
  [0.21263900587151, 0.71516867876775, 0.072192315360733],
  [0.019330818715591, 0.11919477979462, 0.95053215224966],
];
d.Hsluv.refY = 1;
d.Hsluv.refU = 0.19783000664283;
d.Hsluv.refV = 0.46831999493879;
d.Hsluv.kappa = 903.2962962;
d.Hsluv.epsilon = 0.0088564516;
d.Hsluv.hexChars = "0123456789abcdef";
d.Hsluv.hsluvToRgb,
  d.Hsluv.rgbToHsluv,
  d.Hsluv.hpluvToRgb,
  d.Hsluv.rgbToHpluv,
  d.Hsluv.hsluvToHex,
  d.Hsluv.hexToHsluv,
  d.Hsluv.hpluvToHex,
  d.Hsluv.hexToHpluv,
  d.Hsluv.lchToHpluv,
  d.Hsluv.hpluvToLch,
  d.Hsluv.lchToHsluv,
  d.Hsluv.hsluvToLch,
  d.Hsluv.lchToLuv,
  d.Hsluv.luvToLch,
  d.Hsluv.xyzToLuv,
  d.Hsluv.luvToXyz,
  d.Hsluv.xyzToRgb,
  d.Hsluv.rgbToXyz,
  d.Hsluv.lchToRgb,
  d.Hsluv.rgbToLch;
var kn;
(function (e) {
  (e.RGB = "rgb"),
    (e.HSL = "hsl"),
    (e.HSV = "hsv"),
    (e.HEX = "hex"),
    (e.NAME = "name");
})(kn || (kn = {}));
var Hn;
(function (e) {
  (e.RGB = "rgb"),
    (e.RGBA = "rgba"),
    (e.HSL = "hsl"),
    (e.HSLA = "hsla"),
    (e.HUSL = "husl");
})(Hn || (Hn = {}));
bt.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
bt.createContext(!1);
ro() || Kn() || io();
Kn() && eo() < 15.4;
var U;
(function (e) {
  (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope");
})(U || (U = {}));
function Co(e) {
  return it(e) || co(e);
}
const Pn = "optional";
function Oo(e) {
  return !!e && Pn in e && e[Pn] === !0;
}
function So(e) {
  try {
    switch (e.type) {
      case U.String:
      case U.Color:
      case U.Date:
      case U.Link:
        return ho(e.defaultValue) ? e.defaultValue : void 0;
      case U.Boolean:
        return fo(e.defaultValue) ? e.defaultValue : void 0;
      case U.Enum:
        return _r(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case U.FusedNumber:
      case U.Number:
        return vo(e.defaultValue) ? e.defaultValue : void 0;
      case U.Transition:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case U.Font:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case U.Object: {
        const t = it(e.defaultValue) ? e.defaultValue : {};
        return it(e.controls) && Zn(t, e.controls), t;
      }
      case U.Array:
        return Qn(e.defaultValue) ? e.defaultValue : void 0;
      case U.File:
      case U.Image:
      case U.RichText:
      case U.PageScope:
      case U.EventHandler:
      case U.SegmentedEnum:
      case U.ResponsiveImage:
      case U.ComponentInstance:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Zn(e, t) {
  for (const i in t) {
    const o = t[i];
    if (!o) continue;
    const n = e[i];
    if (!_r(n) || Oo(o)) continue;
    const a = So(o);
    _r(a) || (e[i] = a);
  }
}
function ko(e) {
  if (it(e.defaultProps)) return e.defaultProps;
  const t = {};
  return (e.defaultProps = t), t;
}
function Ho(e, t) {
  if (!Co(e)) return;
  const i = ko(e);
  Zn(i, t);
}
function Po(e, t) {
  Object.assign(e, { propertyControls: t }), Ho(e, t);
}
var An;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.Running = 1)] = "Running"),
    (e[(e.Completed = 2)] = "Completed"),
    (e[(e.Cancelled = 3)] = "Cancelled");
})(An || (An = {}));
var Mn;
(function (e) {
  (e[(e.Idle = 0)] = "Idle"),
    (e[(e.TouchDown = 1)] = "TouchDown"),
    (e[(e.Drag = 2)] = "Drag"),
    (e[(e.DragLocked = 3)] = "DragLocked"),
    (e[(e.DragAnimation = 4)] = "DragAnimation"),
    (e[(e.Interrupted = 5)] = "Interrupted");
})(Mn || (Mn = {}));
bt.createContext(void 0);
var Ln;
(function (e) {
  (e._blank = "_blank"), (e._self = "_self");
})(Ln || (Ln = {}));
var Fn;
(function (e) {
  e.Not = "not";
})(Fn || (Fn = {}));
var jn;
(function (e) {
  (e.And = "and"),
    (e.Or = "or"),
    (e.Equals = "=="),
    (e.NotEquals = "!="),
    (e.LessThan = "<"),
    (e.LessThanOrEqual = "<="),
    (e.GreaterThan = ">"),
    (e.GreaterThanOrEqual = ">=");
})(jn || (jn = {}));
var Dn;
(function (e) {
  (e.Ascending = "asc"), (e.Descending = "desc");
})(Dn || (Dn = {}));
if (qn())
  for (const e of document.querySelectorAll("style[data-framer-css-ssr]"))
    document.head.appendChild(e);
var Nn;
(function (e) {
  (e.Google = "google"),
    (e.Fontshare = "fontshare"),
    (e.Local = "local"),
    (e.Custom = "custom");
})(Nn || (Nn = {}));
const Ao = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
    // Alternative name for "black".
  },
  Mo = Object.keys(Ao);
new RegExp(`^(${[...Mo, "italic"].join("|")})`);
var Lo = { exports: {} };
(function (e) {
  (function () {
    function t(T, C) {
      document.addEventListener
        ? T.addEventListener("scroll", C, !1)
        : T.attachEvent("scroll", C);
    }
    function i(T) {
      document.body
        ? T()
        : document.addEventListener
        ? document.addEventListener("DOMContentLoaded", function C() {
            document.removeEventListener("DOMContentLoaded", C), T();
          })
        : document.attachEvent("onreadystatechange", function C() {
            (document.readyState == "interactive" ||
              document.readyState == "complete") &&
              (document.detachEvent("onreadystatechange", C), T());
          });
    }
    function o(T) {
      (this.g = document.createElement("div")),
        this.g.setAttribute("aria-hidden", "true"),
        this.g.appendChild(document.createTextNode(T)),
        (this.h = document.createElement("span")),
        (this.i = document.createElement("span")),
        (this.m = document.createElement("span")),
        (this.j = document.createElement("span")),
        (this.l = -1),
        (this.h.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.i.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.j.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.m.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.h.appendChild(this.m),
        this.i.appendChild(this.j),
        this.g.appendChild(this.h),
        this.g.appendChild(this.i);
    }
    function n(T, C) {
      T.g.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
        C +
        ";";
    }
    function a(T) {
      var C = T.g.offsetWidth,
        R = C + 100;
      return (
        (T.j.style.width = R + "px"),
        (T.i.scrollLeft = R),
        (T.h.scrollLeft = T.h.scrollWidth + 100),
        T.l !== C ? ((T.l = C), !0) : !1
      );
    }
    function c(T, C) {
      function R() {
        var z = H;
        a(z) && z.g.parentNode !== null && C(z.l);
      }
      var H = T;
      t(T.h, R), t(T.i, R), a(T);
    }
    function p(T, C, R) {
      (C = C || {}),
        (R = R || window),
        (this.family = T),
        (this.style = C.style || "normal"),
        (this.weight = C.weight || "normal"),
        (this.stretch = C.stretch || "normal"),
        (this.context = R);
    }
    var b = null,
      x = null,
      _ = null,
      k = null;
    function M(T) {
      return (
        x === null &&
          (L(T) && /Apple/.test(window.navigator.vendor)
            ? ((T = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              )),
              (x = !!T && 603 > parseInt(T[1], 10)))
            : (x = !1)),
        x
      );
    }
    function L(T) {
      return k === null && (k = !!T.document.fonts), k;
    }
    function W(T, C) {
      var R = T.style,
        H = T.weight;
      if (_ === null) {
        var z = document.createElement("div");
        try {
          z.style.font = "condensed 100px sans-serif";
        } catch {}
        _ = z.style.font !== "";
      }
      return [R, H, _ ? T.stretch : "", "100px", C].join(" ");
    }
    (p.prototype.load = function (T, C) {
      var R = this,
        H = T || "BESbswy",
        z = 0,
        oe = C || 3e3,
        Q = /* @__PURE__ */ new Date().getTime();
      return new Promise(function (le, be) {
        if (L(R.context) && !M(R.context)) {
          var ye = new Promise(function (ve, xe) {
              function ce() {
                /* @__PURE__ */ new Date().getTime() - Q >= oe
                  ? xe(Error("" + oe + "ms timeout exceeded"))
                  : R.context.document.fonts
                      .load(W(R, '"' + R.family + '"'), H)
                      .then(function (ee) {
                        1 <= ee.length ? ve() : setTimeout(ce, 25);
                      }, xe);
              }
              ce();
            }),
            Te = new Promise(function (ve, xe) {
              z = setTimeout(function () {
                xe(Error("" + oe + "ms timeout exceeded"));
              }, oe);
            });
          Promise.race([Te, ye]).then(function () {
            clearTimeout(z), le(R);
          }, be);
        } else
          i(function () {
            function ve() {
              var v;
              (v =
                (q != -1 && se != -1) ||
                (q != -1 && E != -1) ||
                (se != -1 && E != -1)) &&
                ((v = q != se && q != E && se != E) ||
                  (b === null &&
                    ((v = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )),
                    (b =
                      !!v &&
                      (536 > parseInt(v[1], 10) ||
                        (parseInt(v[1], 10) === 536 &&
                          11 >= parseInt(v[2], 10))))),
                  (v =
                    b &&
                    ((q == we && se == we && E == we) ||
                      (q == Oe && se == Oe && E == Oe) ||
                      (q == _e && se == _e && E == _e)))),
                (v = !v)),
                v &&
                  (l.parentNode !== null && l.parentNode.removeChild(l),
                  clearTimeout(z),
                  le(R));
            }
            function xe() {
              if (/* @__PURE__ */ new Date().getTime() - Q >= oe)
                l.parentNode !== null && l.parentNode.removeChild(l),
                  be(Error("" + oe + "ms timeout exceeded"));
              else {
                var v = R.context.document.hidden;
                (v === !0 || v === void 0) &&
                  ((q = ce.g.offsetWidth),
                  (se = ee.g.offsetWidth),
                  (E = ue.g.offsetWidth),
                  ve()),
                  (z = setTimeout(xe, 50));
              }
            }
            var ce = new o(H),
              ee = new o(H),
              ue = new o(H),
              q = -1,
              se = -1,
              E = -1,
              we = -1,
              Oe = -1,
              _e = -1,
              l = document.createElement("div");
            (l.dir = "ltr"),
              n(ce, W(R, "sans-serif")),
              n(ee, W(R, "serif")),
              n(ue, W(R, "monospace")),
              l.appendChild(ce.g),
              l.appendChild(ee.g),
              l.appendChild(ue.g),
              R.context.document.body.appendChild(l),
              (we = ce.g.offsetWidth),
              (Oe = ee.g.offsetWidth),
              (_e = ue.g.offsetWidth),
              xe(),
              c(ce, function (v) {
                (q = v), ve();
              }),
              n(ce, W(R, '"' + R.family + '",sans-serif')),
              c(ee, function (v) {
                (se = v), ve();
              }),
              n(ee, W(R, '"' + R.family + '",serif')),
              c(ue, function (v) {
                (E = v), ve();
              }),
              n(ue, W(R, '"' + R.family + '",monospace'));
          });
      });
    }),
      (e.exports = p);
  })();
})(Lo);
var In;
(function (e) {
  (e[(e.AlreadyLoaded = 0)] = "AlreadyLoaded"), (e[(e.Loaded = 1)] = "Loaded");
})(In || (In = {}));
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((i) => ({ status: "fulfilled", value: i }))
          .catch((i) => ({ status: "rejected", reason: i }))
      )
    ));
class Gt {
  constructor(t) {
    // #region withClassDiscriminator
    // NOTE: this implementation carefully copies the implementation of `withClassDiscriminator`
    // from Vekter. If making changes here, make sure to sync them to `withClassDiscriminator` as well.
    Ee(this, "__class", "PathSegment");
    // #endregion
    Ee(this, "x", 0);
    // The anchor point of the segment.
    Ee(this, "y", 0);
    Ee(this, "handleMirroring", "straight");
    Ee(this, "handleOutX", 0);
    // Describes the out tangent of the segment.
    Ee(this, "handleOutY", 0);
    Ee(this, "handleInX", 0);
    // Describes the in tangent of the segment.
    Ee(this, "handleInY", 0);
    Ee(this, "radius", 0);
    t && Object.assign(this, t);
  }
  merge(t) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, t);
  }
}
Ee(Gt, "displayName", "WithClassDiscriminatorMixin(PathSegment)");
Gt.prototype.__class = "PathSegment";
(function (e) {
  (e.point = (t) => ({ x: t.x, y: t.y })),
    (e.handleOut = (t) => ({ x: t.handleOutX, y: t.handleOutY })),
    (e.handleIn = (t) => ({ x: t.handleInX, y: t.handleInY })),
    (e.calculatedHandleOut = (t) => {
      switch (t.handleMirroring) {
        case "symmetric":
        case "disconnected":
        case "asymmetric":
          return Xe.add(e.point(t), e.handleOut(t));
        default:
          return { x: t.x, y: t.y };
      }
    }),
    (e.calculatedHandleIn = (t) => {
      switch (t.handleMirroring) {
        case "symmetric":
          return Xe.subtract(e.point(t), e.handleOut(t));
        case "disconnected":
        case "asymmetric":
          return Xe.add(e.point(t), e.handleIn(t));
        default:
          return e.point(t);
      }
    }),
    (e.curveDefault = (t, i) => {
      if (t.length > 2) {
        let o, n;
        i === 0 ? (o = t[t.length - 1]) : (o = t[i - 1]),
          i === t.length - 1 ? (n = t[0]) : (n = t[i + 1]),
          Tn(o, "pointBefore should be defined"),
          Tn(n, "pointAfter should be defined");
        const a = Xe.subtract(e.point(n), e.point(o));
        return { x: a.x / 4, y: a.y / 4 };
      }
      return { x: 10, y: 10 };
    });
})(Gt || (Gt = {}));
const Sr = {
    "Amsterdam, Netherlands": {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12,
    },
    "Austin, USA": { latitude: 30.267153, longitude: -97.743057, zoom: 10 },
    "Barcelona, Spain": { latitude: 41.385063, longitude: 2.173404 },
    "Beijing, China": { latitude: 39.904202, longitude: 116.407394 },
    "Chicago, USA": { latitude: 41.878113, longitude: -87.629799 },
    "Detroit, USA": { latitude: 42.331429, longitude: -83.045753 },
    "Dubai, UAE": { latitude: 25.204849, longitude: 55.270782 },
    "Helsinki, Findland": { latitude: 60.169857, longitude: 24.938379 },
    "Hong Kong, China": { latitude: 22.280308, longitude: 114.177007 },
    "Las Vegas, USA": { latitude: 36.169941, longitude: -115.139832 },
    "London, United Kingdom": { latitude: 51.507351, longitude: -0.127758 },
    "Los Angles, USA": { latitude: 34.052235, longitude: -118.243683 },
    "New York City, USA": { latitude: 40.712776, longitude: -74.005974 },
    "Paris, France": { latitude: 48.856613, longitude: 2.352222 },
    "Portland, USA": { latitude: 45.51223, longitude: -122.658722 },
    "Rome, Italy": { latitude: 41.902782, longitude: 12.496365 },
    "San Francisco, USA": { latitude: 37.774929, longitude: -122.419418 },
    "Seattle, USA": { latitude: 47.606209, longitude: -122.332069 },
    "Shanghai, China": { latitude: 31.230391, longitude: 121.473701 },
    Singapore: { latitude: 1.28431, longitude: 103.869666 },
    "Sydney, Australia": { latitude: -33.87276, longitude: 151.20534 },
    "Tokyo, Japan": { latitude: 35.687427, longitude: 139.786879 },
    "Vienna, Austria": { latitude: 48.208176, longitude: 16.373819 },
    "Washington DC, USA": { latitude: 38.893, longitude: -77.032 },
  },
  kr = {
    coordinates: Sr,
    names: Object.keys(Sr).sort(),
  },
  Fo = (e) =>
    Object.keys(e)
      .map((t) => ({
        key: t,
        value: e[t],
      }))
      .reduce((t, i) => (t.titles.push(i.key), t.options.push(i.value), t), {
        titles: [],
        options: [],
        dict: e,
      }),
  Wn = Fo({
    Streets: "mapbox://styles/mapbox/streets-v11",
    Outdoors: "mapbox://styles/mapbox/outdoors-v11",
    Light: "mapbox://styles/mapbox/light-v10",
    Dark: "mapbox://styles/mapbox/dark-v10",
    Satellite: "mapbox://styles/mapbox/satellite-v9",
    "Satellite Streets": "mapbox://styles/mapbox/satellite-streets-v11",
    "Navigation Day": "mapbox://styles/mapbox/navigation-day-v1",
    "Navigation Night": "mapbox://styles/mapbox/navigation-night-v1",
  });
function ei(e) {
  const t = Ce.useRef(null),
    i = Ce.useRef(null),
    { setData: o } = $n();
  Wt.accessToken = e.accessToken;
  const n = _i(i),
    a = n != null && n.width ? n.width : 400,
    c = n != null && n.height ? n.height : 300,
    {
      style: p,
      locationType: b,
      city: x,
      longitude: _,
      latitude: k,
      zoom: M,
      anonymousStyle: L,
    } = e,
    W =
      b === "City"
        ? [kr.coordinates[x].longitude, kr.coordinates[x].latitude]
        : [_, k];
  return (
    Ce.useEffect(() => {
      (async () => {
        try {
          const R = await (
              await fetch(
                "https://cdn.jsdelivr.net/npm/mapbox-gl@3.4.0/dist/mapbox-gl.css"
              )
            ).text(),
            H = document.createElement("style");
          (H.innerHTML = R), document.head.appendChild(H);
        } catch (C) {
          console.error("Failed to load CSS file:", C);
        }
      })();
    }, []),
    Ce.useEffect(() => {
      if (t.current) {
        t.current.jumpTo({ center: W });
        return;
      }
      (t.current = new Wt.Map({
        container: i.current,
        style: L,
        center: W,
        zoom: 2,
      })),
        t.current.on("click", (T) => {
          console.log(T.lngLat), o(T.lngLat);
        }),
        t.current.on("load", (T) => {
          console.log("map loaded"),
            Object.entries(Sr).forEach(([C, R]) => {
              const H = C.replace(/\s/g, ""),
                z = new Wt.Popup({ offset: 25 }).setHTML(
                  `<h3>${C}</h3><button id="${H}">view data</button>`
                );
              new Wt.Marker()
                .setLngLat([R.longitude, R.latitude])
                .setPopup(z)
                .addTo(T.target);
            });
        });
    }, []),
    Ce.useEffect(() => {
      t.current && t.current.resize();
    }, [a, c]),
    Ce.useEffect(() => {
      if (t.current) {
        t.current.jumpTo({ center: W, zoom: 2 });
        return;
      }
    }, [W, M]),
    Ce.useEffect(() => {
      if (t.current) {
        t.current.setStyle(L);
        return;
      }
    }, [L]),
    /* @__PURE__ */ Bt.jsx("div", {
      ref: i,
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        ...p,
      },
    })
  );
}
ei.defaultProps = {
  locationType: "City",
  city: "Amsterdam, Netherlands",
  latitude: 52.375,
  longitude: 4.9,
  zoom: 12,
  showLocationText: !1,
};
Po(ei, {
  accessTokenURL: {
    type: U.String,
    title: "Access token URL",
    placeholder: "from your Mapbox account",
    hidden(e) {
      return !!e.accessToken;
    },
  },
  accessToken: {
    type: U.String,
    title: "Token",
    displayTextArea: !0,
  },
  locationType: {
    title: "Location",
    type: U.Enum,
    options: [
      "City",
      "Custom",
      /* Custom */
    ],
    optionTitles: ["Pick a city", "Enter numbers"],
  },
  city: {
    type: U.Enum,
    options: kr.names,
    title: "City",
    hidden: (e) => e.locationType === "Custom",
    /* Custom */
  },
  longitude: {
    type: U.Number,
    min: -180,
    max: 180,
    step: 1e-3,
    title: "Longitude",
    hidden: (e) => e.locationType === "City",
    /* City */
  },
  latitude: {
    type: U.Number,
    min: -90,
    max: 90,
    step: 1e-3,
    title: "Latitude",
    hidden: (e) => e.locationType === "City",
    /* City */
  },
  zoom: {
    type: U.Number,
    min: 0,
    max: 22,
    title: "Zoom",
    step: 0.1,
    hidden: (e) => e.locationType === "City",
    /* City */
  },
  anonymousStyle: {
    type: U.Enum,
    options: Wn.options,
    optionTitles: Wn.titles,
    title: "Map Style",
  },
});
export {
  Io as GlobalProvider,
  ei as MapComponent,
  $n as useGlobalContext,
  Wo as withGlobalProvider,
};
