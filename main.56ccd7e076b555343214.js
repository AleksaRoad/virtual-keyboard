!(function () {
  "use strict";
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  function t(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          t,
          ((i = o.key),
          (a = void 0),
          (a = (function (t, n) {
            if ("object" !== e(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(t, n || "default");
              if ("object" !== e(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === n ? String : Number)(t);
          })(i, "string")),
          "symbol" === e(a) ? a : String(a)),
          o
        );
    }
    var i, a;
  }
  function n(e, n, r) {
    return (
      n && t(e.prototype, n),
      r && t(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var r = n(function e(t) {
    var n = t.parent,
      r = t.tagName,
      o = void 0 === r ? "div" : r,
      i = t.className,
      a = void 0 === i ? "" : i,
      c = t.textContent,
      u = void 0 === c ? "" : c;
    !(function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    })(this, e);
    var l = document.createElement(o);
    (l.className = a),
      u && (l.textContent = u),
      n && n.appendChild(l),
      (this.element = l);
  });
  function o(e) {
    return (
      (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      o(e)
    );
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((i = r.key),
          (a = void 0),
          (a = (function (e, t) {
            if ("object" !== o(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== o(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(i, "string")),
          "symbol" === o(a) ? a : String(a)),
          r
        );
    }
    var i, a;
  }
  function a(e, t) {
    return (
      (a = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      a(e, t)
    );
  }
  function c(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = l(e);
      if (t) {
        var i = l(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return (function (e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return u(e);
      })(this, n);
    };
  }
  function u(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function l(e) {
    return (
      (l = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      l(e)
    );
  }
  function y(e, t) {
    !(function (e, t) {
      if (t.has(e))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    })(e, t),
      t.add(e);
  }
  function f(e, t, n) {
    if (!t.has(e))
      throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var s = new WeakSet(),
    p = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && a(e, t);
      })(l, e);
      var t,
        n,
        r,
        o = c(l);
      function l(e) {
        var t,
          n = e.parent,
          r = e.className,
          i = e.value,
          a = e.handleInput;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          y(u((t = o.call(this, { parent: n, className: r }))), s),
          (t.value = i),
          (t.handleInput = a),
          (t.element.textContent = i),
          (t.element.onmousedown = function () {
            f(u(t), s, k).call(u(t)), t.addActive();
          }),
          (t.element.onmouseup = function () {
            t.removeActive();
          }),
          (t.element.onmouseout = function () {
            t.removeActive();
          }),
          t
        );
      }
      return (
        (t = l),
        (n = [
          {
            key: "handleDown",
            value: function () {
              f(this, s, k).call(this);
            },
          },
          {
            key: "addActive",
            value: function () {
              this.element.classList.add("active");
            },
          },
          {
            key: "removeActive",
            value: function () {
              this.element.classList.remove("active");
            },
          },
          {
            key: "setValue",
            value: function (e) {
              (this.value = e), (this.element.textContent = e);
            },
          },
        ]) && i(t.prototype, n),
        r && i(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        l
      );
    })(r);
  function k() {
    this.handleInput(this.value);
  }
  function b(e) {
    return (
      (b =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      b(e)
    );
  }
  function h(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((o = r.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== b(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== b(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(o, "string")),
          "symbol" === b(i) ? i : String(i)),
          r
        );
    }
    var o, i;
  }
  function d(e, t) {
    return (
      (d = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      d(e, t)
    );
  }
  function v(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = m(e);
      if (t) {
        var o = m(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return (function (e, t) {
        if (t && ("object" === b(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      })(this, n);
    };
  }
  function m(e) {
    return (
      (m = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      m(e)
    );
  }
  var g = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && d(e, t);
    })(i, e);
    var t,
      n,
      r,
      o = v(i);
    function i(e) {
      var t,
        n = e.parent,
        r = e.className,
        a = e.value,
        c = e.handleInput;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, i),
        ((t = o.call(this, {
          parent: n,
          className: r,
          value: a,
          handleInput: c,
        })).element.onclick = function () {
          t.element.classList.toggle("active");
        }),
        (t.element.onmousedown = function () {
          c(t.value);
        }),
        (t.element.onmouseout = null),
        t
      );
    }
    return (
      (t = i),
      n && h(t.prototype, n),
      r && h(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  })(p);
  function S(e) {
    return (
      (S =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      S(e)
    );
  }
  function w(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            i,
            a,
            c = [],
            u = !0,
            l = !1;
          try {
            if (((i = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              u = !1;
            } else
              for (
                ;
                !(u = (r = i.call(n)).done) &&
                (c.push(r.value), c.length !== t);
                u = !0
              );
          } catch (e) {
            (l = !0), (o = e);
          } finally {
            try {
              if (!u && null != n.return && ((a = n.return()), Object(a) !== a))
                return;
            } finally {
              if (l) throw o;
            }
          }
          return c;
        }
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return O(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return O(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function O(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function j(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((o = r.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== S(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== S(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(o, "string")),
          "symbol" === S(i) ? i : String(i)),
          r
        );
    }
    var o, i;
  }
  function K(e, t) {
    return (
      (K = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      K(e, t)
    );
  }
  function P(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = R(e);
      if (t) {
        var o = R(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return (function (e, t) {
        if (t && ("object" === S(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      })(this, n);
    };
  }
  function R(e) {
    return (
      (R = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      R(e)
    );
  }
  var E = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && K(e, t);
    })(i, e);
    var t,
      n,
      r,
      o = P(i);
    function i(e) {
      var t,
        n = e.parent,
        r = e.className,
        a = e.handleInput,
        c = e.state;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, i),
        ((t = o.call(this, { parent: n, className: r })).language = null),
        (t.backspace = null),
        (t.tab = null),
        (t.del = null),
        (t.capslock = null),
        (t.enter = null),
        (t.ctrl = null),
        (t.alt = null),
        (t.space = null),
        (t.shift = null),
        (t.state = c),
        (t.keys = {}),
        (t.keysSpecial = {}),
        (t.isCaps = !1),
        Object.entries(c).forEach(function (e) {
          var n = null,
            r = w(e, 2),
            o = r[0],
            i = r[1];
          switch (o) {
            case "Backspace":
              (n = t.createSpecialKey("backspace", i.key, function () {
                t.backspace();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "Tab":
              (n = t.createSpecialKey("tab", i.key, function () {
                t.tab();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "Delete":
              (n = t.createSpecialKey("del", i.key, function () {
                t.del();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "CapsLock":
              ((n = new g({
                parent: t.element,
                className: "capslock",
                value: i.key,
                handleInput: function () {
                  t.capslock();
                },
              })).element.onmouseup = null),
                (t.keysSpecial[o] = n);
              break;
            case "Enter":
              (n = t.createSpecialKey("enter", i.key, function () {
                t.enter();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "ShiftLeft":
            case "ShiftRight":
              (n = t.createSpecialKey("shift", i.key, function () {
                t.shift();
              })),
                (t.keysSpecial[o] = n),
                (n.element.onmouseup = function () {
                  t.setAlternativeRegister(t.state, !1);
                });
              break;
            case "ControlRight":
              (n = t.createSpecialKey("ctrl", i.key, function () {
                t.ctrl();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "Language":
              (n = t.createSpecialKey("language", i.key, function () {
                t.language();
              })),
                (t.keys[o] = n);
              break;
            case "AltLeft":
            case "AltRight":
              (n = t.createSpecialKey("alt", i.key, function () {
                t.alt();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "Space":
              (n = t.createSpecialKey("space", i.key, function () {
                t.space();
              })),
                (t.keysSpecial[o] = n);
              break;
            case "ControlLeft":
              (n = t.createSpecialKey("ctrl", i.key, function () {})),
                (t.keysSpecial[o] = n);
              break;
            default:
              (n = t.createSpecialKey("key", i.key, function (e) {
                a(e);
              })),
                (t.keys[o] = n);
          }
        }),
        t
      );
    }
    return (
      (t = i),
      (n = [
        {
          key: "handleDown",
          value: function (e) {
            var t = this.keys[e] || this.keysSpecial[e];
            t && (t.handleDown(), t.addActive());
          },
        },
        {
          key: "handleUp",
          value: function (e) {
            var t = this.keys[e] || this.keysSpecial[e];
            if (t) {
              if ("CapsLock" === e && this.isCaps) return;
              "ShiftLeft" === e && this.setAlternativeRegister(this.state, !1),
                t.removeActive();
            }
          },
        },
        {
          key: "setLanguageAndRegister",
          value: function (e, t) {
            var n = this;
            (this.state = e),
              t && (this.isCaps = !this.isCaps),
              Object.entries(e).forEach(function (e) {
                var t,
                  r = w(e, 2),
                  o = r[0],
                  i = r[1];
                null === (t = n.keys[o]) ||
                  void 0 === t ||
                  t.setValue(n.isCaps ? i.key.toUpperCase() : i.key);
              });
          },
        },
        {
          key: "setAlternativeRegister",
          value: function (e) {
            var t = this,
              n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
            Object.entries(e).forEach(function (e) {
              var r,
                o,
                i = w(e, 2),
                a = i[0],
                c = i[1],
                u = n ? c.shiftkey : null;
              (o = n
                ? t.isCaps
                  ? c.key
                  : c.key.toUpperCase()
                : t.isCaps
                ? c.key.toUpperCase()
                : c.key),
                null === (r = t.keys[a]) ||
                  void 0 === r ||
                  r.setValue(null != u ? u : o);
            });
          },
        },
        {
          key: "createSpecialKey",
          value: function (e, t, n) {
            return new p({
              parent: this.element,
              className: e,
              value: t,
              handleInput: n,
            });
          },
        },
      ]),
      n && j(t.prototype, n),
      r && j(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      i
    );
  })(r);
  function C(e) {
    return (
      (C =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      C(e)
    );
  }
  function D(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((o = r.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== C(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== C(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(o, "string")),
          "symbol" === C(i) ? i : String(i)),
          r
        );
    }
    var o, i;
  }
  function x(e, t) {
    return (
      (x = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      x(e, t)
    );
  }
  function _(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = A(e);
      if (t) {
        var o = A(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return (function (e, t) {
        if (t && ("object" === C(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      })(this, n);
    };
  }
  function A(e) {
    return (
      (A = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      A(e)
    );
  }
  var T = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && x(e, t);
      })(i, e);
      var t,
        n,
        r,
        o = _(i);
      function i(e) {
        var t = e.parent,
          n = e.className,
          r = void 0 === n ? "" : n;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
          o.call(this, { parent: t, tagName: "textarea", className: r })
        );
      }
      return (
        (t = i),
        (n = [
          {
            key: "setText",
            value: function (e) {
              this.element.value = e;
            },
          },
          {
            key: "addText",
            value: function (e) {
              this.element.setRangeText(
                e,
                this.element.selectionStart,
                this.element.selectionEnd,
                "end"
              ),
                this.setFocus();
            },
          },
          {
            key: "setFocus",
            value: function () {
              this.element.focus();
            },
          },
          {
            key: "setSelectionEnd",
            value: function (e) {
              this.element.selectionEnd = e;
            },
          },
          {
            key: "getCaret",
            value: function (e) {
              return this.element.selectionStart - (e > 0 ? 0 : 1);
            },
          },
          {
            key: "getStringStart",
            value: function (e) {
              return this.element.value.slice(0, e);
            },
          },
          {
            key: "getStringEnd",
            value: function (e) {
              return this.element.value.slice(
                this.element.selectionStart + (e > 0 ? 1 : 0)
              );
            },
          },
        ]) && D(t.prototype, n),
        r && D(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        i
      );
    })(r),
    L = {
      Backquote: { key: "`", shiftkey: "~" },
      Digit1: { key: "1", shiftkey: "!" },
      Digit2: { key: "2", shiftkey: "@" },
      Digit3: { key: "3", shiftkey: "#" },
      Digit4: { key: "4", shiftkey: "$" },
      Digit5: { key: "5", shiftkey: "%" },
      Digit6: { key: "6", shiftkey: "^" },
      Digit7: { key: "7", shiftkey: "&" },
      Digit8: { key: "8", shiftkey: "*" },
      Digit9: { key: "9", shiftkey: "(" },
      Digit0: { key: "0", shiftkey: ")" },
      Minus: { key: "-", shiftkey: "_" },
      Equal: { key: "=", shiftkey: "+" },
      Backspace: { key: "Backspace" },
      Tab: { key: "Tab" },
      KeyQ: { key: "q" },
      KeyW: { key: "w" },
      KeyE: { key: "e" },
      KeyR: { key: "r" },
      KeyT: { key: "t" },
      KeyY: { key: "y" },
      KeyU: { key: "u" },
      KeyI: { key: "i" },
      KeyO: { key: "o" },
      KeyP: { key: "p" },
      BracketLeft: { key: "[", shiftkey: "{" },
      BracketRight: { key: "]", shiftkey: "}" },
      Backslash: { key: "\\", shiftkey: "|" },
      Delete: { key: "Del" },
      CapsLock: { key: "CapsLock" },
      KeyA: { key: "a" },
      KeyS: { key: "s" },
      KeyD: { key: "d" },
      KeyF: { key: "f" },
      KeyG: { key: "g" },
      KeyH: { key: "h" },
      KeyJ: { key: "j" },
      KeyK: { key: "k" },
      KeyL: { key: "l" },
      Semicolon: { key: ";", shiftkey: ":" },
      Quote: { key: "'", shiftkey: '"' },
      Enter: { key: "Enter" },
      ShiftLeft: { key: "Shift" },
      KeyZ: { key: "z" },
      KeyX: { key: "x" },
      KeyC: { key: "c" },
      KeyV: { key: "v" },
      KeyB: { key: "b" },
      KeyN: { key: "n" },
      KeyM: { key: "m" },
      Comma: { key: ",", shiftkey: "<" },
      Period: { key: ".", shiftkey: ">" },
      Slash: { key: "/", shiftkey: "?" },
      ArrowUp: { key: "▲" },
      ShiftRight: { key: "Shift" },
      ControlLeft: { key: "Ctrl" },
      Language: { key: "EN" },
      AltLeft: { key: "Alt" },
      Space: { key: "Space" },
      AltRight: { key: "Alt" },
      ArrowLeft: { key: "◄" },
      ArrowDown: { key: "▼" },
      ArrowRight: { key: "►" },
      ControlRight: { key: "Ctrl" },
    },
    N = {
      Backquote: { key: "ё" },
      Digit1: { key: "1", shiftkey: "!" },
      Digit2: { key: "2", shiftkey: '"' },
      Digit3: { key: "3", shiftkey: "№" },
      Digit4: { key: "4", shiftkey: ";" },
      Digit5: { key: "5", shiftkey: "%" },
      Digit6: { key: "6", shiftkey: ":" },
      Digit7: { key: "7", shiftkey: "?" },
      Digit8: { key: "8", shiftkey: "*" },
      Digit9: { key: "9", shiftkey: "(" },
      Digit0: { key: "0", shiftkey: ")" },
      Minus: { key: "-", shiftkey: "_" },
      Equal: { key: "=", shiftkey: "+" },
      Backspace: { key: "Backspace" },
      Tab: { key: "Tab" },
      KeyQ: { key: "й" },
      KeyW: { key: "ц" },
      KeyE: { key: "у" },
      KeyR: { key: "к" },
      KeyT: { key: "е" },
      KeyY: { key: "н" },
      KeyU: { key: "г" },
      KeyI: { key: "ш" },
      KeyO: { key: "щ" },
      KeyP: { key: "з" },
      BracketLeft: { key: "х" },
      BracketRight: { key: "ъ" },
      Backslash: { key: "\\", shiftkey: "/" },
      Delete: { key: "Del" },
      CapsLock: { key: "CapsLock" },
      KeyA: { key: "ф" },
      KeyS: { key: "ы" },
      KeyD: { key: "в" },
      KeyF: { key: "а" },
      KeyG: { key: "п" },
      KeyH: { key: "р" },
      KeyJ: { key: "о" },
      KeyK: { key: "л" },
      KeyL: { key: "д" },
      Semicolon: { key: "ж" },
      Quote: { key: "э" },
      Enter: { key: "Enter" },
      ShiftLeft: { key: "Shift" },
      KeyZ: { key: "я" },
      KeyX: { key: "ч" },
      KeyC: { key: "с" },
      KeyV: { key: "м" },
      KeyB: { key: "и" },
      KeyN: { key: "т" },
      KeyM: { key: "ь" },
      Comma: { key: "б" },
      Period: { key: "ю" },
      Slash: { key: ".", shiftkey: "," },
      ArrowUp: { key: "▲" },
      ShiftRight: { key: "Shift" },
      ControlLeft: { key: "Ctrl" },
      Language: { key: "RU" },
      AltLeft: { key: "Alt" },
      Space: { key: "Space" },
      AltRight: { key: "Alt" },
      ArrowLeft: { key: "◄" },
      ArrowDown: { key: "▼" },
      ArrowRight: { key: "►" },
      ControlRight: { key: "Ctrl" },
    };
  function B(e) {
    return (
      (B =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      B(e)
    );
  }
  function I(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((o = r.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== B(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== B(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(o, "string")),
          "symbol" === B(i) ? i : String(i)),
          r
        );
    }
    var o, i;
  }
  function U(e, t) {
    return (
      (U = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      U(e, t)
    );
  }
  function F(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = V(e);
      if (t) {
        var o = V(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return (function (e, t) {
        if (t && ("object" === B(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      })(this, n);
    };
  }
  function V(e) {
    return (
      (V = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      V(e)
    );
  }
  var q = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && U(e, t);
    })(a, e);
    var t,
      n,
      o,
      i = F(a);
    function a(e) {
      var t,
        n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "div",
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, a),
        ((t = i.call(this, { parent: e, tagName: n, className: o })).caret = 0),
        (t.langId = +localStorage.getItem("langId") || 0),
        (t.langs = [L, N]),
        (t.apptitle = new r({
          parent: t.element,
          tagName: "h1",
          className: "title",
          textContent: "RSS Virtual Keyboard",
        })),
        (t.textarea = new T({ parent: t.element, className: "textarea" })),
        (t.keyboard = new E({
          parent: t.element,
          className: "keyboard",
          handleInput: function (e) {
            t.textarea.addText(e);
          },
          state: t.langs[t.langId],
        })),
        (t.keyboard.backspace = function () {
          t.handleDelBackspace(0);
        }),
        (t.keyboard.tab = function () {
          t.textarea.addText("\t");
        }),
        (t.keyboard.capslock = function () {
          t.keyboard.setLanguageAndRegister(t.langs[t.langId], !0);
        }),
        (t.keyboard.del = function () {
          t.handleDelBackspace(1);
        }),
        (t.keyboard.enter = function () {
          t.textarea.addText("\n");
        }),
        (t.keyboard.language = function () {
          (t.langId = (t.langId + 1) % t.langs.length),
            localStorage.setItem("langId", t.langId.toString()),
            t.keyboard.setLanguageAndRegister(t.langs[t.langId], !1);
        }),
        (t.keyboard.shift = function () {
          t.keyboard.setAlternativeRegister(t.langs[t.langId]);
        }),
        (t.keyboard.alt = function () {}),
        document.addEventListener("keydown", function (e) {
          e.preventDefault(),
            "AltLeft" === e.code &&
              e.ctrlKey &&
              !e.repeat &&
              t.keyboard.language(),
            t.keyboard.handleDown(e.code);
        }),
        document.addEventListener("keyup", function (e) {
          e.preventDefault(), t.keyboard.handleUp(e.code);
        }),
        t.keyboard.keysSpecial.Delete.element.addEventListener(
          "click",
          function () {
            t.textarea.setFocus();
          }
        ),
        t.keyboard.keysSpecial.Backspace.element.addEventListener(
          "click",
          function () {
            t.textarea.setFocus();
          }
        ),
        (t.keyboard.space = function () {
          t.textarea.addText(" ");
        }),
        (t.descriptiontitle = new r({
          parent: t.element,
          tagName: "h3",
          className: "title",
          textContent: "The keyboard is based on the Windows operating system",
        })),
        (t.manualtitle = new r({
          parent: t.element,
          tagName: "h3",
          className: "title",
          textContent: "Language switching: ctrlleft + altleft or key RU/EN",
        })),
        t
      );
    }
    return (
      (t = a),
      (n = [
        {
          key: "handleDelBackspace",
          value: function (e) {
            this.caret = this.textarea.getCaret(e);
            var t = this.textarea.getStringStart(this.caret),
              n = this.textarea.getStringEnd(e);
            this.textarea.setText(t + n),
              this.textarea.setFocus(),
              this.textarea.setSelectionEnd(this.caret);
          },
        },
      ]) && I(t.prototype, n),
      o && I(t, o),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      a
    );
  })(r);
  new q(document.body, "div", "wrapper");
})();
