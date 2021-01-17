/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
!(function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function (a) {
                    if (!a.document) throw new Error("jQuery requires a window with a document");
                    return b(a);
                })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    function c(a, b, c) {
        c = c || ia;
        var d,
            e,
            f = c.createElement("script");
        if (((f.text = a), b)) for (d in wa) (e = b[d] || (b.getAttribute && b.getAttribute(d))) && f.setAttribute(d, e);
        c.head.appendChild(f).parentNode.removeChild(f);
    }
    function d(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? oa[pa.call(a)] || "object" : typeof a;
    }
    function e(a) {
        var b = !!a && "length" in a && a.length,
            c = d(a);
        return !ua(a) && !va(a) && ("array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a));
    }
    function f(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    function g(a, b, c) {
        return ua(b)
            ? ya.grep(a, function (a, d) {
                  return !!b.call(a, d, a) !== c;
              })
            : b.nodeType
            ? ya.grep(a, function (a) {
                  return (a === b) !== c;
              })
            : "string" != typeof b
            ? ya.grep(a, function (a) {
                  return na.call(b, a) > -1 !== c;
              })
            : ya.filter(b, a, c);
    }
    function h(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; );
        return a;
    }
    function i(a) {
        var b = {};
        return (
            ya.each(a.match(Ja) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    function j(a) {
        return a;
    }
    function k(a) {
        throw a;
    }
    function l(a, b, c, d) {
        var e;
        try {
            a && ua((e = a.promise)) ? e.call(a).done(b).fail(c) : a && ua((e = a.then)) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
        } catch (a) {
            c.apply(void 0, [a]);
        }
    }
    function m() {
        ia.removeEventListener("DOMContentLoaded", m), a.removeEventListener("load", m), ya.ready();
    }
    function n(a, b) {
        return b.toUpperCase();
    }
    function o(a) {
        return a.replace(Na, "ms-").replace(Oa, n);
    }
    function p() {
        this.expando = ya.expando + p.uid++;
    }
    function q(a) {
        return "true" === a || ("false" !== a && ("null" === a ? null : a === +a + "" ? +a : Sa.test(a) ? JSON.parse(a) : a));
    }
    function r(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (((d = "data-" + b.replace(Ta, "-$&").toLowerCase()), "string" == typeof (c = a.getAttribute(d)))) {
                try {
                    c = q(c);
                } catch (a) {}
                Ra.set(a, b, c);
            } else c = void 0;
        return c;
    }
    function s(a, b, c, d) {
        var e,
            f,
            g = 20,
            h = d
                ? function () {
                      return d.cur();
                  }
                : function () {
                      return ya.css(a, b, "");
                  },
            i = h(),
            j = (c && c[3]) || (ya.cssNumber[b] ? "" : "px"),
            k = a.nodeType && (ya.cssNumber[b] || ("px" !== j && +i)) && Va.exec(ya.css(a, b));
        if (k && k[3] !== j) {
            for (i /= 2, j = j || k[3], k = +i || 1; g--; ) ya.style(a, b, k + j), (1 - f) * (1 - (f = h() / i || 0.5)) <= 0 && (g = 0), (k /= f);
            (k *= 2), ya.style(a, b, k + j), (c = c || []);
        }
        return c && ((k = +k || +i || 0), (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]), d && ((d.unit = j), (d.start = k), (d.end = e))), e;
    }
    function t(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ab[d];
        return e || ((b = c.body.appendChild(c.createElement(d))), (e = ya.css(b, "display")), b.parentNode.removeChild(b), "none" === e && (e = "block"), (ab[d] = e), e);
    }
    function u(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            (d = a[f]),
                d.style &&
                    ((c = d.style.display),
                    b ? ("none" === c && ((e[f] = Qa.get(d, "display") || null), e[f] || (d.style.display = "")), "" === d.style.display && $a(d) && (e[f] = t(d))) : "none" !== c && ((e[f] = "none"), Qa.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    function v(a, b) {
        var c;
        return (c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : []), void 0 === b || (b && f(a, b)) ? ya.merge([a], c) : c;
    }
    function w(a, b) {
        for (var c = 0, d = a.length; c < d; c++) Qa.set(a[c], "globalEval", !b || Qa.get(b[c], "globalEval"));
    }
    function x(a, b, c, e, f) {
        for (var g, h, i, j, k, l, m = b.createDocumentFragment(), n = [], o = 0, p = a.length; o < p; o++)
            if ((g = a[o]) || 0 === g)
                if ("object" === d(g)) ya.merge(n, g.nodeType ? [g] : g);
                else if (fb.test(g)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (cb.exec(g) || ["", ""])[1].toLowerCase(), j = eb[i] || eb._default, h.innerHTML = j[1] + ya.htmlPrefilter(g) + j[2], l = j[0]; l--; ) h = h.lastChild;
                    ya.merge(n, h.childNodes), (h = m.firstChild), (h.textContent = "");
                } else n.push(b.createTextNode(g));
        for (m.textContent = "", o = 0; (g = n[o++]); )
            if (e && ya.inArray(g, e) > -1) f && f.push(g);
            else if (((k = Ya(g)), (h = v(m.appendChild(g), "script")), k && w(h), c)) for (l = 0; (g = h[l++]); ) db.test(g.type || "") && c.push(g);
        return m;
    }
    function y() {
        return !0;
    }
    function z() {
        return !1;
    }
    function A(a, b) {
        return (a === B()) == ("focus" === b);
    }
    function B() {
        try {
            return ia.activeElement;
        } catch (a) {}
    }
    function C(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) C(a, h, c, d, b[h], f);
            return a;
        }
        if ((null == d && null == e ? ((e = c), (d = c = void 0)) : null == e && ("string" == typeof c ? ((e = d), (d = void 0)) : ((e = d), (d = c), (c = void 0))), !1 === e)) e = z;
        else if (!e) return a;
        return (
            1 === f &&
                ((g = e),
                (e = function (a) {
                    return ya().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = ya.guid++))),
            a.each(function () {
                ya.event.add(this, b, e, d, c);
            })
        );
    }
    function D(a, b, c) {
        if (!c) return void (void 0 === Qa.get(a, b) && ya.event.add(a, b, y));
        Qa.set(a, b, !1),
            ya.event.add(a, b, {
                namespace: !1,
                handler: function (a) {
                    var d,
                        e,
                        f = Qa.get(this, b);
                    if (1 & a.isTrigger && this[b]) {
                        if (f.length) (ya.event.special[b] || {}).delegateType && a.stopPropagation();
                        else if (((f = ka.call(arguments)), Qa.set(this, b, f), (d = c(this, b)), this[b](), (e = Qa.get(this, b)), f !== e || d ? Qa.set(this, b, !1) : (e = {}), f !== e))
                            return a.stopImmediatePropagation(), a.preventDefault(), e.value;
                    } else f.length && (Qa.set(this, b, { value: ya.event.trigger(ya.extend(f[0], ya.Event.prototype), f.slice(1), this) }), a.stopImmediatePropagation());
                },
            });
    }
    function E(a, b) {
        return f(a, "table") && f(11 !== b.nodeType ? b : b.firstChild, "tr") ? ya(a).children("tbody")[0] || a : a;
    }
    function F(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function G(a) {
        return "true/" === (a.type || "").slice(0, 5) ? (a.type = a.type.slice(5)) : a.removeAttribute("type"), a;
    }
    function H(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Qa.hasData(a) && ((f = Qa.access(a)), (g = Qa.set(b, f)), (j = f.events))) {
                delete g.handle, (g.events = {});
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) ya.event.add(b, e, j[e][c]);
            }
            Ra.hasData(a) && ((h = Ra.access(a)), (i = ya.extend({}, h)), Ra.set(b, i));
        }
    }
    function I(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && bb.test(a.type) ? (b.checked = a.checked) : ("input" !== c && "textarea" !== c) || (b.defaultValue = a.defaultValue);
    }
    function J(a, b, d, e) {
        b = la.apply([], b);
        var f,
            g,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            o = b[0],
            p = ua(o);
        if (p || (m > 1 && "string" == typeof o && !ta.checkClone && lb.test(o)))
            return a.each(function (c) {
                var f = a.eq(c);
                p && (b[0] = o.call(this, c, f.html())), J(f, b, d, e);
            });
        if (m && ((f = x(b, a[0].ownerDocument, !1, a, e)), (g = f.firstChild), 1 === f.childNodes.length && (f = g), g || e)) {
            for (h = ya.map(v(f, "script"), F), i = h.length; l < m; l++) (j = f), l !== n && ((j = ya.clone(j, !0, !0)), i && ya.merge(h, v(j, "script"))), d.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, ya.map(h, G), l = 0; l < i; l++)
                    (j = h[l]),
                        db.test(j.type || "") &&
                            !Qa.access(j, "globalEval") &&
                            ya.contains(k, j) &&
                            (j.src && "module" !== (j.type || "").toLowerCase() ? ya._evalUrl && !j.noModule && ya._evalUrl(j.src, { nonce: j.nonce || j.getAttribute("nonce") }) : c(j.textContent.replace(mb, ""), j, k));
        }
        return a;
    }
    function K(a, b, c) {
        for (var d, e = b ? ya.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || ya.cleanData(v(d)), d.parentNode && (c && Ya(d) && w(v(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    function L(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return (
            (c = c || ob(a)),
            c &&
                ((g = c.getPropertyValue(b) || c[b]),
                "" !== g || Ya(a) || (g = ya.style(a, b)),
                !ta.pixelBoxStyles() && nb.test(g) && pb.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f))),
            void 0 !== g ? g + "" : g
        );
    }
    function M(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            },
        };
    }
    function N(a) {
        for (var b = a[0].toUpperCase() + a.slice(1), c = qb.length; c--; ) if ((a = qb[c] + b) in rb) return a;
    }
    function O(a) {
        var b = ya.cssProps[a] || sb[a];
        return b || (a in rb ? a : (sb[a] = N(a) || a));
    }
    function P(a, b, c) {
        var d = Va.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Q(a, b, c, d, e, f) {
        var g = "width" === b ? 1 : 0,
            h = 0,
            i = 0;
        if (c === (d ? "border" : "content")) return 0;
        for (; g < 4; g += 2)
            "margin" === c && (i += ya.css(a, c + Wa[g], !0, e)),
                d
                    ? ("content" === c && (i -= ya.css(a, "padding" + Wa[g], !0, e)), "margin" !== c && (i -= ya.css(a, "border" + Wa[g] + "Width", !0, e)))
                    : ((i += ya.css(a, "padding" + Wa[g], !0, e)), "padding" !== c ? (i += ya.css(a, "border" + Wa[g] + "Width", !0, e)) : (h += ya.css(a, "border" + Wa[g] + "Width", !0, e)));
        return !d && f >= 0 && (i += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - 0.5)) || 0), i;
    }
    function R(a, b, c) {
        var d = ob(a),
            e = !ta.boxSizingReliable() || c,
            f = e && "border-box" === ya.css(a, "boxSizing", !1, d),
            g = f,
            h = L(a, b, d),
            i = "offset" + b[0].toUpperCase() + b.slice(1);
        if (nb.test(h)) {
            if (!c) return h;
            h = "auto";
        }
        return (
            ((!ta.boxSizingReliable() && f) || "auto" === h || (!parseFloat(h) && "inline" === ya.css(a, "display", !1, d))) && a.getClientRects().length && ((f = "border-box" === ya.css(a, "boxSizing", !1, d)), (g = i in a) && (h = a[i])),
            (h = parseFloat(h) || 0) + Q(a, b, c || (f ? "border" : "content"), g, d, h) + "px"
        );
    }
    function S(a, b, c, d, e) {
        return new S.prototype.init(a, b, c, d, e);
    }
    function T() {
        yb && (!1 === ia.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(T) : a.setTimeout(T, ya.fx.interval), ya.fx.tick());
    }
    function U() {
        return (
            a.setTimeout(function () {
                xb = void 0;
            }),
            (xb = Date.now())
        );
    }
    function V(a, b) {
        var c,
            d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) (c = Wa[d]), (e["margin" + c] = e["padding" + c] = a);
        return b && (e.opacity = e.width = a), e;
    }
    function W(a, b, c) {
        for (var d, e = (Z.tweeners[b] || []).concat(Z.tweeners["*"]), f = 0, g = e.length; f < g; f++) if ((d = e[f].call(c, b, a))) return d;
    }
    function X(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && $a(a),
            q = Qa.get(a, "fxshow");
        c.queue ||
            ((g = ya._queueHooks(a, "fx")),
            null == g.unqueued &&
                ((g.unqueued = 0),
                (h = g.empty.fire),
                (g.empty.fire = function () {
                    g.unqueued || h();
                })),
            g.unqueued++,
            m.always(function () {
                m.always(function () {
                    g.unqueued--, ya.queue(a, "fx").length || g.empty.fire();
                });
            }));
        for (d in b)
            if (((e = b[d]), zb.test(e))) {
                if ((delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                n[d] = (q && q[d]) || ya.style(a, d);
            }
        if ((i = !ya.isEmptyObject(b)) || !ya.isEmptyObject(n)) {
            l &&
                1 === a.nodeType &&
                ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                (j = q && q.display),
                null == j && (j = Qa.get(a, "display")),
                (k = ya.css(a, "display")),
                "none" === k && (j ? (k = j) : (u([a], !0), (j = a.style.display || j), (k = ya.css(a, "display")), u([a]))),
                ("inline" === k || ("inline-block" === k && null != j)) &&
                    "none" === ya.css(a, "float") &&
                    (i ||
                        (m.done(function () {
                            o.display = j;
                        }),
                        null == j && ((k = o.display), (j = "none" === k ? "" : k))),
                    (o.display = "inline-block"))),
                c.overflow &&
                    ((o.overflow = "hidden"),
                    m.always(function () {
                        (o.overflow = c.overflow[0]), (o.overflowX = c.overflow[1]), (o.overflowY = c.overflow[2]);
                    })),
                (i = !1);
            for (d in n)
                i ||
                    (q ? "hidden" in q && (p = q.hidden) : (q = Qa.access(a, "fxshow", { display: j })),
                    f && (q.hidden = !p),
                    p && u([a], !0),
                    m.done(function () {
                        p || u([a]), Qa.remove(a, "fxshow");
                        for (d in n) ya.style(a, d, n[d]);
                    })),
                    (i = W(p ? q[d] : 0, d, m)),
                    d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
        }
    }
    function Y(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (((d = o(c)), (e = b[d]), (f = a[c]), Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = ya.cssHooks[d]) && "expand" in g)) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function Z(a, b, c) {
        var d,
            e,
            f = 0,
            g = Z.prefilters.length,
            h = ya.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (var b = xb || U(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
            },
            j = h.promise({
                elem: a,
                props: ya.extend({}, b),
                opts: ya.extend(!0, { specialEasing: {}, easing: ya.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: xb || U(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ya.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
                },
            }),
            k = j.props;
        for (Y(k, j.opts.specialEasing); f < g; f++) if ((d = Z.prefilters[f].call(j, a, k, j.opts))) return ua(d.stop) && (ya._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), d;
        return (
            ya.map(k, W, j),
            ua(j.opts.start) && j.opts.start.call(a, j),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always),
            ya.fx.timer(ya.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
        );
    }
    function $(a) {
        return (a.match(Ja) || []).join(" ");
    }
    function _(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
    }
    function aa(a) {
        return Array.isArray(a) ? a : "string" == typeof a ? a.match(Ja) || [] : [];
    }
    function ba(a, b, c, e) {
        var f;
        if (Array.isArray(b))
            ya.each(b, function (b, d) {
                c || Lb.test(a) ? e(a, d) : ba(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, e);
            });
        else if (c || "object" !== d(b)) e(a, b);
        else for (f in b) ba(a + "[" + f + "]", b[f], c, e);
    }
    function ca(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(Ja) || [];
            if (ua(c)) for (; (d = f[e++]); ) "+" === d[0] ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function da(a, b, c, d) {
        function e(h) {
            var i;
            return (
                (f[h] = !0),
                ya.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? (g ? !(i = j) : void 0) : (b.dataTypes.unshift(j), e(j), !1);
                }),
                i
            );
        }
        var f = {},
            g = a === Xb;
        return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function ea(a, b) {
        var c,
            d,
            e = ya.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && ya.extend(!0, a, d), a;
    }
    function fa(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function ga(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (!(g = j[i + " " + f] || j["* " + f]))
                        for (e in j)
                            if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                                !0 === g ? (g = j[e]) : !0 !== j[e] && ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (!0 !== g)
                        if (g && a.throws) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (a) {
                                return { state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f };
                            }
                }
        return { state: "success", data: b };
    }
    var ha = [],
        ia = a.document,
        ja = Object.getPrototypeOf,
        ka = ha.slice,
        la = ha.concat,
        ma = ha.push,
        na = ha.indexOf,
        oa = {},
        pa = oa.toString,
        qa = oa.hasOwnProperty,
        ra = qa.toString,
        sa = ra.call(Object),
        ta = {},
        ua = function (a) {
            return "function" == typeof a && "number" != typeof a.nodeType;
        },
        va = function (a) {
            return null != a && a === a.window;
        },
        wa = { type: !0, src: !0, nonce: !0, noModule: !0 },
        xa = "3.4.1",
        ya = function (a, b) {
            return new ya.fn.init(a, b);
        },
        za = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (ya.fn = ya.prototype = {
        jquery: xa,
        constructor: ya,
        length: 0,
        toArray: function () {
            return ka.call(this);
        },
        get: function (a) {
            return null == a ? ka.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function (a) {
            var b = ya.merge(this.constructor(), a);
            return (b.prevObject = this), b;
        },
        each: function (a) {
            return ya.each(this, a);
        },
        map: function (a) {
            return this.pushStack(
                ya.map(this, function (b, c) {
                    return a.call(b, c, b);
                })
            );
        },
        slice: function () {
            return this.pushStack(ka.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: ma,
        sort: ha.sort,
        splice: ha.splice,
    }),
        (ya.extend = ya.fn.extend = function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || ua(g) || (g = {}), h === i && ((g = this), h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a)
                        (d = a[b]),
                            "__proto__" !== b &&
                                g !== d &&
                                (j && d && (ya.isPlainObject(d) || (e = Array.isArray(d)))
                                    ? ((c = g[b]), (f = e && !Array.isArray(c) ? [] : e || ya.isPlainObject(c) ? c : {}), (e = !1), (g[b] = ya.extend(j, f, d)))
                                    : void 0 !== d && (g[b] = d));
            return g;
        }),
        ya.extend({
            expando: "jQuery" + (xa + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () {},
            isPlainObject: function (a) {
                var b, c;
                return !(!a || "[object Object]" !== pa.call(a)) && (!(b = ja(a)) || ("function" == typeof (c = qa.call(b, "constructor") && b.constructor) && ra.call(c) === sa));
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            globalEval: function (a, b) {
                c(a, { nonce: b && b.nonce });
            },
            each: function (a, b) {
                var c,
                    d = 0;
                if (e(a)) for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
                else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(za, "");
            },
            makeArray: function (a, b) {
                var c = b || [];
                return null != a && (e(Object(a)) ? ya.merge(c, "string" == typeof a ? [a] : a) : ma.call(c, a)), c;
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : na.call(b, a, c);
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
                return d;
            },
            map: function (a, b, c) {
                var d,
                    f,
                    g = 0,
                    h = [];
                if (e(a)) for (d = a.length; g < d; g++) null != (f = b(a[g], g, c)) && h.push(f);
                else for (g in a) null != (f = b(a[g], g, c)) && h.push(f);
                return la.apply([], h);
            },
            guid: 1,
            support: ta,
        }),
        "function" == typeof Symbol && (ya.fn[Symbol.iterator] = ha[Symbol.iterator]),
        ya.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            oa["[object " + b + "]"] = b.toLowerCase();
        });
    var Aa =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function (a) {
            function b(a, b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    m = b && b.ownerDocument,
                    o = b ? b.nodeType : 9;
                if (((c = c || []), "string" != typeof a || !a || (1 !== o && 9 !== o && 11 !== o))) return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), (b = b || H), J)) {
                    if (11 !== o && (i = ta.exec(a)))
                        if ((e = i[1])) {
                            if (9 === o) {
                                if (!(g = b.getElementById(e))) return c;
                                if (g.id === e) return c.push(g), c;
                            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c;
                        } else {
                            if (i[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(e)), c;
                        }
                    if (w.qsa && !V[a + " "] && (!K || !K.test(a)) && (1 !== o || "object" !== b.nodeName.toLowerCase())) {
                        if (((k = a), (m = b), 1 === o && la.test(a))) {
                            for ((h = b.getAttribute("id")) ? (h = h.replace(xa, ya)) : b.setAttribute("id", (h = O)), j = A(a), f = j.length; f--; ) j[f] = "#" + h + " " + n(j[f]);
                            (k = j.join(",")), (m = (ua.test(a) && l(b.parentNode)) || b);
                        }
                        try {
                            return _.apply(c, m.querySelectorAll(k)), c;
                        } catch (b) {
                            V(a, !0);
                        } finally {
                            h === O && b.removeAttribute("id");
                        }
                    }
                }
                return C(a.replace(ia, "$1"), b, c, d);
            }
            function c() {
                function a(c, d) {
                    return b.push(c + " ") > x.cacheLength && delete a[b.shift()], (a[c + " "] = d);
                }
                var b = [];
                return a;
            }
            function d(a) {
                return (a[O] = !0), a;
            }
            function e(a) {
                var b = H.createElement("fieldset");
                try {
                    return !!a(b);
                } catch (a) {
                    return !1;
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), (b = null);
                }
            }
            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--; ) x.attrHandle[c[d]] = b;
            }
            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d) return d;
                if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
                return a ? 1 : -1;
            }
            function h(a) {
                return function (b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a;
                };
            }
            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a;
                };
            }
            function j(a) {
                return function (b) {
                    return "form" in b
                        ? b.parentNode && !1 === b.disabled
                            ? "label" in b
                                ? "label" in b.parentNode
                                    ? b.parentNode.disabled === a
                                    : b.disabled === a
                                : b.isDisabled === a || (b.isDisabled !== !a && Aa(b) === a)
                            : b.disabled === a
                        : "label" in b && b.disabled === a;
                };
            }
            function k(a) {
                return d(function (b) {
                    return (
                        (b = +b),
                        d(function (c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--; ) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                        })
                    );
                });
            }
            function l(a) {
                return a && void 0 !== a.getElementsByTagName && a;
            }
            function m() {}
            function n(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d;
            }
            function o(a, b, c) {
                var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = R++;
                return b.first
                    ? function (b, c, e) {
                          for (; (b = b[d]); ) if (1 === b.nodeType || g) return a(b, c, e);
                          return !1;
                      }
                    : function (b, c, i) {
                          var j,
                              k,
                              l,
                              m = [Q, h];
                          if (i) {
                              for (; (b = b[d]); ) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                          } else
                              for (; (b = b[d]); )
                                  if (1 === b.nodeType || g)
                                      if (((l = b[O] || (b[O] = {})), (k = l[b.uniqueID] || (l[b.uniqueID] = {})), e && e === b.nodeName.toLowerCase())) b = b[d] || b;
                                      else {
                                          if ((j = k[f]) && j[0] === Q && j[1] === h) return (m[2] = j[2]);
                                          if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                                      }
                          return !1;
                      };
            }
            function p(a) {
                return a.length > 1
                    ? function (b, c, d) {
                          for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                          return !0;
                      }
                    : a[0];
            }
            function q(a, c, d) {
                for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
                return d;
            }
            function r(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
                return g;
            }
            function s(a, b, c, e, f, g) {
                return (
                    e && !e[O] && (e = s(e)),
                    f && !f[O] && (f = s(f, g)),
                    d(function (d, g, h, i) {
                        var j,
                            k,
                            l,
                            m = [],
                            n = [],
                            o = g.length,
                            p = d || q(b || "*", h.nodeType ? [h] : h, []),
                            s = !a || (!d && b) ? p : r(p, m, a, h, i),
                            t = c ? (f || (d ? a : o || e) ? [] : g) : s;
                        if ((c && c(s, t, h, i), e)) for (j = r(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                        if (d) {
                            if (f || a) {
                                if (f) {
                                    for (j = [], k = t.length; k--; ) (l = t[k]) && j.push((s[k] = l));
                                    f(null, (t = []), j, i);
                                }
                                for (k = t.length; k--; ) (l = t[k]) && (j = f ? ba(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                            }
                        } else (t = r(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : _.apply(g, t);
                    })
                );
            }
            function t(a) {
                for (
                    var b,
                        c,
                        d,
                        e = a.length,
                        f = x.relative[a[0].type],
                        g = f || x.relative[" "],
                        h = f ? 1 : 0,
                        i = o(
                            function (a) {
                                return a === b;
                            },
                            g,
                            !0
                        ),
                        j = o(
                            function (a) {
                                return ba(b, a) > -1;
                            },
                            g,
                            !0
                        ),
                        k = [
                            function (a, c, d) {
                                var e = (!f && (d || c !== D)) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                                return (b = null), e;
                            },
                        ];
                    h < e;
                    h++
                )
                    if ((c = x.relative[a[h].type])) k = [o(p(k), c)];
                    else {
                        if (((c = x.filter[a[h].type].apply(null, a[h].matches)), c[O])) {
                            for (d = ++h; d < e && !x.relative[a[d].type]; d++);
                            return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ia, "$1"), c, h < d && t(a.slice(h, d)), d < e && t((a = a.slice(d))), d < e && n(a));
                        }
                        k.push(c);
                    }
                return p(k);
            }
            function u(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function (d, g, h, i, j) {
                        var k,
                            l,
                            m,
                            n = 0,
                            o = "0",
                            p = d && [],
                            q = [],
                            s = D,
                            t = d || (f && x.find.TAG("*", j)),
                            u = (Q += null == s ? 1 : Math.random() || 0.1),
                            v = t.length;
                        for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === H || (G(k), (h = !J)); (m = a[l++]); )
                                    if (m(k, g || H, h)) {
                                        i.push(k);
                                        break;
                                    }
                                j && (Q = u);
                            }
                            e && ((k = !m && k) && n--, d && p.push(k));
                        }
                        if (((n += o), e && o !== n)) {
                            for (l = 0; (m = c[l++]); ) m(p, q, g, h);
                            if (d) {
                                if (n > 0) for (; o--; ) p[o] || q[o] || (q[o] = Z.call(i));
                                q = r(q);
                            }
                            _.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                        }
                        return j && ((Q = u), (D = s)), p;
                    };
                return e ? d(g) : g;
            }
            var v,
                w,
                x,
                y,
                z,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N,
                O = "sizzle" + 1 * new Date(),
                P = a.document,
                Q = 0,
                R = 0,
                S = c(),
                T = c(),
                U = c(),
                V = c(),
                W = function (a, b) {
                    return a === b && (F = !0), 0;
                },
                X = {}.hasOwnProperty,
                Y = [],
                Z = Y.pop,
                $ = Y.push,
                _ = Y.push,
                aa = Y.slice,
                ba = function (a, b) {
                    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                    return -1;
                },
                ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                da = "[\\x20\\t\\r\\n\\f]",
                ea = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                fa = "\\[" + da + "*(" + ea + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + da + "*\\]",
                ga = ":(" + ea + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(da + "+", "g"),
                ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
                ja = new RegExp("^" + da + "*," + da + "*"),
                ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
                la = new RegExp(da + "|>"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + ea + ")"),
                    CLASS: new RegExp("^\\.(" + ea + ")"),
                    TAG: new RegExp("^(" + ea + "|[*])"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ca + ")$", "i"),
                    needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i"),
                },
                pa = /HTML$/i,
                qa = /^(?:input|select|textarea|button)$/i,
                ra = /^h\d$/i,
                sa = /^[^{]+\{\s*\[native \w/,
                ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ua = /[+~]/,
                va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
                wa = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
                },
                xa = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ya = function (a, b) {
                    return b ? ("\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " ") : "\\" + a;
                },
                za = function () {
                    G();
                },
                Aa = o(
                    function (a) {
                        return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase();
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                _.apply((Y = aa.call(P.childNodes)), P.childNodes), Y[P.childNodes.length].nodeType;
            } catch (a) {
                _ = {
                    apply: Y.length
                        ? function (a, b) {
                              $.apply(a, aa.call(b));
                          }
                        : function (a, b) {
                              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                              a.length = c - 1;
                          },
                };
            }
            (w = b.support = {}),
                (z = b.isXML = function (a) {
                    var b = a.namespaceURI,
                        c = (a.ownerDocument || a).documentElement;
                    return !pa.test(b || (c && c.nodeName) || "HTML");
                }),
                (G = b.setDocument = function (a) {
                    var b,
                        c,
                        d = a ? a.ownerDocument || a : P;
                    return d !== H && 9 === d.nodeType && d.documentElement
                        ? ((H = d),
                          (I = H.documentElement),
                          (J = !z(H)),
                          P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", za, !1) : c.attachEvent && c.attachEvent("onunload", za)),
                          (w.attributes = e(function (a) {
                              return (a.className = "i"), !a.getAttribute("className");
                          })),
                          (w.getElementsByTagName = e(function (a) {
                              return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length;
                          })),
                          (w.getElementsByClassName = sa.test(H.getElementsByClassName)),
                          (w.getById = e(function (a) {
                              return (I.appendChild(a).id = O), !H.getElementsByName || !H.getElementsByName(O).length;
                          })),
                          w.getById
                              ? ((x.filter.ID = function (a) {
                                    var b = a.replace(va, wa);
                                    return function (a) {
                                        return a.getAttribute("id") === b;
                                    };
                                }),
                                (x.find.ID = function (a, b) {
                                    if (void 0 !== b.getElementById && J) {
                                        var c = b.getElementById(a);
                                        return c ? [c] : [];
                                    }
                                }))
                              : ((x.filter.ID = function (a) {
                                    var b = a.replace(va, wa);
                                    return function (a) {
                                        var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                }),
                                (x.find.ID = function (a, b) {
                                    if (void 0 !== b.getElementById && J) {
                                        var c,
                                            d,
                                            e,
                                            f = b.getElementById(a);
                                        if (f) {
                                            if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                                            for (e = b.getElementsByName(a), d = 0; (f = e[d++]); ) if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                                        }
                                        return [];
                                    }
                                })),
                          (x.find.TAG = w.getElementsByTagName
                              ? function (a, b) {
                                    return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0;
                                }
                              : function (a, b) {
                                    var c,
                                        d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                                        return d;
                                    }
                                    return f;
                                }),
                          (x.find.CLASS =
                              w.getElementsByClassName &&
                              function (a, b) {
                                  if (void 0 !== b.getElementsByClassName && J) return b.getElementsByClassName(a);
                              }),
                          (L = []),
                          (K = []),
                          (w.qsa = sa.test(H.querySelectorAll)) &&
                              (e(function (a) {
                                  (I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + da + "*(?:''|\"\")"),
                                      a.querySelectorAll("[selected]").length || K.push("\\[" + da + "*(?:value|" + ca + ")"),
                                      a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="),
                                      a.querySelectorAll(":checked").length || K.push(":checked"),
                                      a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]");
                              }),
                              e(function (a) {
                                  a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var b = H.createElement("input");
                                  b.setAttribute("type", "hidden"),
                                      a.appendChild(b).setAttribute("name", "D"),
                                      a.querySelectorAll("[name=d]").length && K.push("name" + da + "*[*^$|!~]?="),
                                      2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"),
                                      (I.appendChild(a).disabled = !0),
                                      2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"),
                                      a.querySelectorAll("*,:x"),
                                      K.push(",.*:");
                              })),
                          (w.matchesSelector = sa.test((M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector))) &&
                              e(function (a) {
                                  (w.disconnectedMatch = M.call(a, "*")), M.call(a, "[s!='']:x"), L.push("!=", ga);
                              }),
                          (K = K.length && new RegExp(K.join("|"))),
                          (L = L.length && new RegExp(L.join("|"))),
                          (b = sa.test(I.compareDocumentPosition)),
                          (N =
                              b || sa.test(I.contains)
                                  ? function (a, b) {
                                        var c = 9 === a.nodeType ? a.documentElement : a,
                                            d = b && b.parentNode;
                                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                                    }
                                  : function (a, b) {
                                        if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                                        return !1;
                                    }),
                          (W = b
                              ? function (a, b) {
                                    if (a === b) return (F = !0), 0;
                                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return (
                                        c ||
                                        ((c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                                        1 & c || (!w.sortDetached && b.compareDocumentPosition(a) === c)
                                            ? a === H || (a.ownerDocument === P && N(P, a))
                                                ? -1
                                                : b === H || (b.ownerDocument === P && N(P, b))
                                                ? 1
                                                : E
                                                ? ba(E, a) - ba(E, b)
                                                : 0
                                            : 4 & c
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (a, b) {
                                    if (a === b) return (F = !0), 0;
                                    var c,
                                        d = 0,
                                        e = a.parentNode,
                                        f = b.parentNode,
                                        h = [a],
                                        i = [b];
                                    if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? ba(E, a) - ba(E, b) : 0;
                                    if (e === f) return g(a, b);
                                    for (c = a; (c = c.parentNode); ) h.unshift(c);
                                    for (c = b; (c = c.parentNode); ) i.unshift(c);
                                    for (; h[d] === i[d]; ) d++;
                                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0;
                                }),
                          H)
                        : H;
                }),
                (b.matches = function (a, c) {
                    return b(a, null, null, c);
                }),
                (b.matchesSelector = function (a, c) {
                    if (((a.ownerDocument || a) !== H && G(a), w.matchesSelector && J && !V[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))))
                        try {
                            var d = M.call(a, c);
                            if (d || w.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
                        } catch (a) {
                            V(c, !0);
                        }
                    return b(c, H, null, [a]).length > 0;
                }),
                (b.contains = function (a, b) {
                    return (a.ownerDocument || a) !== H && G(a), N(a, b);
                }),
                (b.attr = function (a, b) {
                    (a.ownerDocument || a) !== H && G(a);
                    var c = x.attrHandle[b.toLowerCase()],
                        d = c && X.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                    return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }),
                (b.escape = function (a) {
                    return (a + "").replace(xa, ya);
                }),
                (b.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a);
                }),
                (b.uniqueSort = function (a) {
                    var b,
                        c = [],
                        d = 0,
                        e = 0;
                    if (((F = !w.detectDuplicates), (E = !w.sortStable && a.slice(0)), a.sort(W), F)) {
                        for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
                        for (; d--; ) a.splice(c[d], 1);
                    }
                    return (E = null), a;
                }),
                (y = b.getText = function (a) {
                    var b,
                        c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += y(a);
                        } else if (3 === e || 4 === e) return a.nodeValue;
                    } else for (; (b = a[d++]); ) c += y(b);
                    return c;
                }),
                (x = b.selectors = {
                    cacheLength: 50,
                    createPseudo: d,
                    match: oa,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (a) {
                            return (a[1] = a[1].replace(va, wa)), (a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                        },
                        CHILD: function (a) {
                            return (
                                (a[1] = a[1].toLowerCase()),
                                "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3]))) : a[3] && b.error(a[0]),
                                a
                            );
                        },
                        PSEUDO: function (a) {
                            var b,
                                c = !a[6] && a[2];
                            return oa.CHILD.test(a[0])
                                ? null
                                : (a[3] ? (a[2] = a[4] || a[5] || "") : c && ma.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(va, wa).toLowerCase();
                            return "*" === a
                                ? function () {
                                      return !0;
                                  }
                                : function (a) {
                                      return a.nodeName && a.nodeName.toLowerCase() === b;
                                  };
                        },
                        CLASS: function (a) {
                            var b = S[a + " "];
                            return (
                                b ||
                                ((b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) &&
                                    S(a, function (a) {
                                        return b.test(("string" == typeof a.className && a.className) || (void 0 !== a.getAttribute && a.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (a, c, d) {
                            return function (e) {
                                var f = b.attr(e, a);
                                return null == f
                                    ? "!=" === c
                                    : !c ||
                                          ((f += ""),
                                          "=" === c
                                              ? f === d
                                              : "!=" === c
                                              ? f !== d
                                              : "^=" === c
                                              ? d && 0 === f.indexOf(d)
                                              : "*=" === c
                                              ? d && f.indexOf(d) > -1
                                              : "$=" === c
                                              ? d && f.slice(-d.length) === d
                                              : "~=" === c
                                              ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                                              : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"));
                            };
                        },
                        CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e
                                ? function (a) {
                                      return !!a.parentNode;
                                  }
                                : function (b, c, i) {
                                      var j,
                                          k,
                                          l,
                                          m,
                                          n,
                                          o,
                                          p = f !== g ? "nextSibling" : "previousSibling",
                                          q = b.parentNode,
                                          r = h && b.nodeName.toLowerCase(),
                                          s = !i && !h,
                                          t = !1;
                                      if (q) {
                                          if (f) {
                                              for (; p; ) {
                                                  for (m = b; (m = m[p]); ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                                  o = p = "only" === a && !o && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                              for (
                                                  m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n];
                                                  (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                                              )
                                                  if (1 === m.nodeType && ++t && m === b) {
                                                      k[a] = [Q, n, t];
                                                      break;
                                                  }
                                          } else if ((s && ((m = b), (l = m[O] || (m[O] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === Q && j[1]), (t = n)), !1 === t))
                                              for (
                                                  ;
                                                  (m = (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                                                  ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((l = m[O] || (m[O] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (k[a] = [Q, t])), m !== b));

                                              );
                                          return (t -= e) === d || (t % d == 0 && t / d >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (a, c) {
                            var e,
                                f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            return f[O]
                                ? f(c)
                                : f.length > 1
                                ? ((e = [a, a, "", c]),
                                  x.setFilters.hasOwnProperty(a.toLowerCase())
                                      ? d(function (a, b) {
                                            for (var d, e = f(a, c), g = e.length; g--; ) (d = ba(a, e[g])), (a[d] = !(b[d] = e[g]));
                                        })
                                      : function (a) {
                                            return f(a, 0, e);
                                        })
                                : f;
                        },
                    },
                    pseudos: {
                        not: d(function (a) {
                            var b = [],
                                c = [],
                                e = B(a.replace(ia, "$1"));
                            return e[O]
                                ? d(function (a, b, c, d) {
                                      for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                                  })
                                : function (a, d, f) {
                                      return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop();
                                  };
                        }),
                        has: d(function (a) {
                            return function (c) {
                                return b(a, c).length > 0;
                            };
                        }),
                        contains: d(function (a) {
                            return (
                                (a = a.replace(va, wa)),
                                function (b) {
                                    return (b.textContent || y(b)).indexOf(a) > -1;
                                }
                            );
                        }),
                        lang: d(function (a) {
                            return (
                                na.test(a || "") || b.error("unsupported lang: " + a),
                                (a = a.replace(va, wa).toLowerCase()),
                                function (b) {
                                    var c;
                                    do {
                                        if ((c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
                                    } while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        },
                        root: function (a) {
                            return a === I;
                        },
                        focus: function (a) {
                            return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                        },
                        enabled: j(!1),
                        disabled: j(!0),
                        checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
                        },
                        empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (a) {
                            return !x.pseudos.empty(a);
                        },
                        header: function (a) {
                            return ra.test(a.nodeName);
                        },
                        input: function (a) {
                            return qa.test(a.nodeName);
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b && "button" === a.type) || "button" === b;
                        },
                        text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                        },
                        first: k(function () {
                            return [0];
                        }),
                        last: k(function (a, b) {
                            return [b - 1];
                        }),
                        eq: k(function (a, b, c) {
                            return [c < 0 ? c + b : c];
                        }),
                        even: k(function (a, b) {
                            for (var c = 0; c < b; c += 2) a.push(c);
                            return a;
                        }),
                        odd: k(function (a, b) {
                            for (var c = 1; c < b; c += 2) a.push(c);
                            return a;
                        }),
                        lt: k(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c > b ? b : c; --d >= 0; ) a.push(d);
                            return a;
                        }),
                        gt: k(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                            return a;
                        }),
                    },
                }),
                (x.pseudos.nth = x.pseudos.eq);
            for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[v] = h(v);
            for (v in { submit: !0, reset: !0 }) x.pseudos[v] = i(v);
            return (
                (m.prototype = x.filters = x.pseudos),
                (x.setFilters = new m()),
                (A = b.tokenize = function (a, c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = T[a + " "];
                    if (k) return c ? 0 : k.slice(0);
                    for (h = a, i = [], j = x.preFilter; h; ) {
                        (d && !(e = ja.exec(h))) || (e && (h = h.slice(e[0].length) || h), i.push((f = []))), (d = !1), (e = ka.exec(h)) && ((d = e.shift()), f.push({ value: d, type: e[0].replace(ia, " ") }), (h = h.slice(d.length)));
                        for (g in x.filter) !(e = oa[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((d = e.shift()), f.push({ value: d, type: g, matches: e }), (h = h.slice(d.length)));
                        if (!d) break;
                    }
                    return c ? h.length : h ? b.error(a) : T(a, i).slice(0);
                }),
                (B = b.compile = function (a, b) {
                    var c,
                        d = [],
                        e = [],
                        f = U[a + " "];
                    if (!f) {
                        for (b || (b = A(a)), c = b.length; c--; ) (f = t(b[c])), f[O] ? d.push(f) : e.push(f);
                        (f = U(a, u(e, d))), (f.selector = a);
                    }
                    return f;
                }),
                (C = b.select = function (a, b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j = "function" == typeof a && a,
                        k = !d && A((a = j.selector || a));
                    if (((c = c || []), 1 === k.length)) {
                        if (((f = k[0] = k[0].slice(0)), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type])) {
                            if (!(b = (x.find.ID(g.matches[0].replace(va, wa), b) || [])[0])) return c;
                            j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
                        }
                        for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && ((g = f[e]), !x.relative[(h = g.type)]); )
                            if ((i = x.find[h]) && (d = i(g.matches[0].replace(va, wa), (ua.test(f[0].type) && l(b.parentNode)) || b))) {
                                if ((f.splice(e, 1), !(a = d.length && n(f)))) return _.apply(c, d), c;
                                break;
                            }
                    }
                    return (j || B(a, k))(d, b, !J, c, !b || (ua.test(a) && l(b.parentNode)) || b), c;
                }),
                (w.sortStable = O.split("").sort(W).join("") === O),
                (w.detectDuplicates = !!F),
                G(),
                (w.sortDetached = e(function (a) {
                    return 1 & a.compareDocumentPosition(H.createElement("fieldset"));
                })),
                e(function (a) {
                    return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
                }) ||
                    f("type|href|height|width", function (a, b, c) {
                        if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                    }),
                (w.attributes &&
                    e(function (a) {
                        return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                    })) ||
                    f("value", function (a, b, c) {
                        if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
                    }),
                e(function (a) {
                    return null == a.getAttribute("disabled");
                }) ||
                    f(ca, function (a, b, c) {
                        var d;
                        if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                    }),
                b
            );
        })(a);
    (ya.find = Aa), (ya.expr = Aa.selectors), (ya.expr[":"] = ya.expr.pseudos), (ya.uniqueSort = ya.unique = Aa.uniqueSort), (ya.text = Aa.getText), (ya.isXMLDoc = Aa.isXML), (ya.contains = Aa.contains), (ya.escapeSelector = Aa.escape);
    var Ba = function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && ya(a).is(c)) break;
                    d.push(a);
                }
            return d;
        },
        Ca = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        Da = ya.expr.match.needsContext,
        Ea = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (ya.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? ya.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : ya.find.matches(
                      a,
                      ya.grep(b, function (a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        ya.fn.extend({
            find: function (a) {
                var b,
                    c,
                    d = this.length,
                    e = this;
                if ("string" != typeof a)
                    return this.pushStack(
                        ya(a).filter(function () {
                            for (b = 0; b < d; b++) if (ya.contains(e[b], this)) return !0;
                        })
                    );
                for (c = this.pushStack([]), b = 0; b < d; b++) ya.find(a, e[b], c);
                return d > 1 ? ya.uniqueSort(c) : c;
            },
            filter: function (a) {
                return this.pushStack(g(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(g(this, a || [], !0));
            },
            is: function (a) {
                return !!g(this, "string" == typeof a && Da.test(a) ? ya(a) : a || [], !1).length;
            },
        });
    var Fa,
        Ga = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((ya.fn.init = function (a, b, c) {
        var d, e;
        if (!a) return this;
        if (((c = c || Fa), "string" == typeof a)) {
            if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Ga.exec(a)) || (!d[1] && b)) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (((b = b instanceof ya ? b[0] : b), ya.merge(this, ya.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ia, !0)), Ea.test(d[1]) && ya.isPlainObject(b)))
                    for (d in b) ua(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this;
            }
            return (e = ia.getElementById(d[2])), e && ((this[0] = e), (this.length = 1)), this;
        }
        return a.nodeType ? ((this[0] = a), (this.length = 1), this) : ua(a) ? (void 0 !== c.ready ? c.ready(a) : a(ya)) : ya.makeArray(a, this);
    }).prototype = ya.fn),
        (Fa = ya(ia));
    var Ha = /^(?:parents|prev(?:Until|All))/,
        Ia = { children: !0, contents: !0, next: !0, prev: !0 };
    ya.fn.extend({
        has: function (a) {
            var b = ya(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++) if (ya.contains(this, b[a])) return !0;
            });
        },
        closest: function (a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && ya(a);
            if (!Da.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ya.find.matchesSelector(c, a))) {
                            f.push(c);
                            break;
                        }
            return this.pushStack(f.length > 1 ? ya.uniqueSort(f) : f);
        },
        index: function (a) {
            return a ? ("string" == typeof a ? na.call(ya(a), this[0]) : na.call(this, a.jquery ? a[0] : a)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(ya.uniqueSort(ya.merge(this.get(), ya(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        },
    }),
        ya.each(
            {
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                },
                parents: function (a) {
                    return Ba(a, "parentNode");
                },
                parentsUntil: function (a, b, c) {
                    return Ba(a, "parentNode", c);
                },
                next: function (a) {
                    return h(a, "nextSibling");
                },
                prev: function (a) {
                    return h(a, "previousSibling");
                },
                nextAll: function (a) {
                    return Ba(a, "nextSibling");
                },
                prevAll: function (a) {
                    return Ba(a, "previousSibling");
                },
                nextUntil: function (a, b, c) {
                    return Ba(a, "nextSibling", c);
                },
                prevUntil: function (a, b, c) {
                    return Ba(a, "previousSibling", c);
                },
                siblings: function (a) {
                    return Ca((a.parentNode || {}).firstChild, a);
                },
                children: function (a) {
                    return Ca(a.firstChild);
                },
                contents: function (a) {
                    return void 0 !== a.contentDocument ? a.contentDocument : (f(a, "template") && (a = a.content || a), ya.merge([], a.childNodes));
                },
            },
            function (a, b) {
                ya.fn[a] = function (c, d) {
                    var e = ya.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ya.filter(d, e)), this.length > 1 && (Ia[a] || ya.uniqueSort(e), Ha.test(a) && e.reverse()), this.pushStack(e);
                };
            }
        );
    var Ja = /[^\x20\t\r\n\f]+/g;
    (ya.Callbacks = function (a) {
        a = "string" == typeof a ? i(a) : ya.extend({}, a);
        var b,
            c,
            e,
            f,
            g = [],
            h = [],
            j = -1,
            k = function () {
                for (f = f || a.once, e = b = !0; h.length; j = -1) for (c = h.shift(); ++j < g.length; ) !1 === g[j].apply(c[0], c[1]) && a.stopOnFalse && ((j = g.length), (c = !1));
                a.memory || (c = !1), (b = !1), f && (g = c ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        g &&
                            (c && !b && ((j = g.length - 1), h.push(c)),
                            (function b(c) {
                                ya.each(c, function (c, e) {
                                    ua(e) ? (a.unique && l.has(e)) || g.push(e) : e && e.length && "string" !== d(e) && b(e);
                                });
                            })(arguments),
                            c && !b && k()),
                        this
                    );
                },
                remove: function () {
                    return (
                        ya.each(arguments, function (a, b) {
                            for (var c; (c = ya.inArray(b, g, c)) > -1; ) g.splice(c, 1), c <= j && j--;
                        }),
                        this
                    );
                },
                has: function (a) {
                    return a ? ya.inArray(a, g) > -1 : g.length > 0;
                },
                empty: function () {
                    return g && (g = []), this;
                },
                disable: function () {
                    return (f = h = []), (g = c = ""), this;
                },
                disabled: function () {
                    return !g;
                },
                lock: function () {
                    return (f = h = []), c || b || (g = c = ""), this;
                },
                locked: function () {
                    return !!f;
                },
                fireWith: function (a, c) {
                    return f || ((c = c || []), (c = [a, c.slice ? c.slice() : c]), h.push(c), b || k()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!e;
                },
            };
        return l;
    }),
        ya.extend({
            Deferred: function (b) {
                var c = [
                        ["notify", "progress", ya.Callbacks("memory"), ya.Callbacks("memory"), 2],
                        ["resolve", "done", ya.Callbacks("once memory"), ya.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ya.Callbacks("once memory"), ya.Callbacks("once memory"), 1, "rejected"],
                    ],
                    d = "pending",
                    e = {
                        state: function () {
                            return d;
                        },
                        always: function () {
                            return f.done(arguments).fail(arguments), this;
                        },
                        catch: function (a) {
                            return e.then(null, a);
                        },
                        pipe: function () {
                            var a = arguments;
                            return ya
                                .Deferred(function (b) {
                                    ya.each(c, function (c, d) {
                                        var e = ua(a[d[4]]) && a[d[4]];
                                        f[d[1]](function () {
                                            var a = e && e.apply(this, arguments);
                                            a && ua(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        then: function (b, d, e) {
                            function f(b, c, d, e) {
                                return function () {
                                    var h = this,
                                        i = arguments,
                                        l = function () {
                                            var a, l;
                                            if (!(b < g)) {
                                                if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                                (l = a && ("object" == typeof a || "function" == typeof a) && a.then),
                                                    ua(l)
                                                        ? e
                                                            ? l.call(a, f(g, c, j, e), f(g, c, k, e))
                                                            : (g++, l.call(a, f(g, c, j, e), f(g, c, k, e), f(g, c, j, c.notifyWith)))
                                                        : (d !== j && ((h = void 0), (i = [a])), (e || c.resolveWith)(h, i));
                                            }
                                        },
                                        m = e
                                            ? l
                                            : function () {
                                                  try {
                                                      l();
                                                  } catch (a) {
                                                      ya.Deferred.exceptionHook && ya.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== k && ((h = void 0), (i = [a])), c.rejectWith(h, i));
                                                  }
                                              };
                                    b ? m() : (ya.Deferred.getStackHook && (m.stackTrace = ya.Deferred.getStackHook()), a.setTimeout(m));
                                };
                            }
                            var g = 0;
                            return ya
                                .Deferred(function (a) {
                                    c[0][3].add(f(0, a, ua(e) ? e : j, a.notifyWith)), c[1][3].add(f(0, a, ua(b) ? b : j)), c[2][3].add(f(0, a, ua(d) ? d : k));
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? ya.extend(a, e) : e;
                        },
                    },
                    f = {};
                return (
                    ya.each(c, function (a, b) {
                        var g = b[2],
                            h = b[5];
                        (e[b[1]] = g.add),
                            h &&
                                g.add(
                                    function () {
                                        d = h;
                                    },
                                    c[3 - a][2].disable,
                                    c[3 - a][3].disable,
                                    c[0][2].lock,
                                    c[0][3].lock
                                ),
                            g.add(b[3].fire),
                            (f[b[0]] = function () {
                                return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                            }),
                            (f[b[0] + "With"] = g.fireWith);
                    }),
                    e.promise(f),
                    b && b.call(f, f),
                    f
                );
            },
            when: function (a) {
                var b = arguments.length,
                    c = b,
                    d = Array(c),
                    e = ka.call(arguments),
                    f = ya.Deferred(),
                    g = function (a) {
                        return function (c) {
                            (d[a] = this), (e[a] = arguments.length > 1 ? ka.call(arguments) : c), --b || f.resolveWith(d, e);
                        };
                    };
                if (b <= 1 && (l(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || ua(e[c] && e[c].then))) return f.then();
                for (; c--; ) l(e[c], g(c), f.reject);
                return f.promise();
            },
        });
    var Ka = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (ya.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Ka.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }),
        (ya.readyException = function (b) {
            a.setTimeout(function () {
                throw b;
            });
        });
    var La = ya.Deferred();
    (ya.fn.ready = function (a) {
        return (
            La.then(a).catch(function (a) {
                ya.readyException(a);
            }),
            this
        );
    }),
        ya.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (a) {
                (!0 === a ? --ya.readyWait : ya.isReady) || ((ya.isReady = !0), (!0 !== a && --ya.readyWait > 0) || La.resolveWith(ia, [ya]));
            },
        }),
        (ya.ready.then = La.then),
        "complete" === ia.readyState || ("loading" !== ia.readyState && !ia.documentElement.doScroll) ? a.setTimeout(ya.ready) : (ia.addEventListener("DOMContentLoaded", m), a.addEventListener("load", m));
    var Ma = function (a, b, c, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == c;
            if ("object" === d(c)) {
                f = !0;
                for (i in c) Ma(a, b, i, c[i], !0, g, h);
            } else if (
                void 0 !== e &&
                ((f = !0),
                ua(e) || (h = !0),
                k &&
                    (h
                        ? (b.call(a, e), (b = null))
                        : ((k = b),
                          (b = function (a, b, c) {
                              return k.call(ya(a), c);
                          }))),
                b)
            )
                for (; i < j; i++) b(a[i], c, h ? e : e.call(a[i], i, b(a[i], c)));
            return f ? a : k ? b.call(a) : j ? b(a[0], c) : g;
        },
        Na = /^-ms-/,
        Oa = /-([a-z])/g,
        Pa = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
    (p.uid = 1),
        (p.prototype = {
            cache: function (a) {
                var b = a[this.expando];
                return b || ((b = {}), Pa(a) && (a.nodeType ? (a[this.expando] = b) : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
            },
            set: function (a, b, c) {
                var d,
                    e = this.cache(a);
                if ("string" == typeof b) e[o(b)] = c;
                else for (d in b) e[o(d)] = b[d];
                return e;
            },
            get: function (a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][o(b)];
            },
            access: function (a, b, c) {
                return void 0 === b || (b && "string" == typeof b && void 0 === c) ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function (a, b) {
                var c,
                    d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        Array.isArray(b) ? (b = b.map(o)) : ((b = o(b)), (b = b in d ? [b] : b.match(Ja) || [])), (c = b.length);
                        for (; c--; ) delete d[b[c]];
                    }
                    (void 0 === b || ya.isEmptyObject(d)) && (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !ya.isEmptyObject(b);
            },
        });
    var Qa = new p(),
        Ra = new p(),
        Sa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ta = /[A-Z]/g;
    ya.extend({
        hasData: function (a) {
            return Ra.hasData(a) || Qa.hasData(a);
        },
        data: function (a, b, c) {
            return Ra.access(a, b, c);
        },
        removeData: function (a, b) {
            Ra.remove(a, b);
        },
        _data: function (a, b, c) {
            return Qa.access(a, b, c);
        },
        _removeData: function (a, b) {
            Qa.remove(a, b);
        },
    }),
        ya.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && ((e = Ra.get(f)), 1 === f.nodeType && !Qa.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--; ) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = o(d.slice(5))), r(f, d, e[d])));
                        Qa.set(f, "hasDataAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                          Ra.set(this, a);
                      })
                    : Ma(
                          this,
                          function (b) {
                              var c;
                              if (f && void 0 === b) {
                                  if (void 0 !== (c = Ra.get(f, a))) return c;
                                  if (void 0 !== (c = r(f, a))) return c;
                              } else
                                  this.each(function () {
                                      Ra.set(this, a, b);
                                  });
                          },
                          null,
                          b,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (a) {
                return this.each(function () {
                    Ra.remove(this, a);
                });
            },
        }),
        ya.extend({
            queue: function (a, b, c) {
                var d;
                if (a) return (b = (b || "fx") + "queue"), (d = Qa.get(a, b)), c && (!d || Array.isArray(c) ? (d = Qa.access(a, b, ya.makeArray(c))) : d.push(c)), d || [];
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = ya.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ya._queueHooks(a, b),
                    g = function () {
                        ya.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    Qa.get(a, c) ||
                    Qa.access(a, c, {
                        empty: ya.Callbacks("once memory").add(function () {
                            Qa.remove(a, [b + "queue", c]);
                        }),
                    })
                );
            },
        }),
        ya.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? ya.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function () {
                              var c = ya.queue(this, a, b);
                              ya._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ya.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    ya.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = ya.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                for ("string" != typeof a && ((b = a), (a = void 0)), a = a || "fx"; g--; ) (c = Qa.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        });
    var Ua = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Va = new RegExp("^(?:([+-])=|)(" + Ua + ")([a-z%]*)$", "i"),
        Wa = ["Top", "Right", "Bottom", "Left"],
        Xa = ia.documentElement,
        Ya = function (a) {
            return ya.contains(a.ownerDocument, a);
        },
        Za = { composed: !0 };
    Xa.getRootNode &&
        (Ya = function (a) {
            return ya.contains(a.ownerDocument, a) || a.getRootNode(Za) === a.ownerDocument;
        });
    var $a = function (a, b) {
            return (a = b || a), "none" === a.style.display || ("" === a.style.display && Ya(a) && "none" === ya.css(a, "display"));
        },
        _a = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        },
        ab = {};
    ya.fn.extend({
        show: function () {
            return u(this, !0);
        },
        hide: function () {
            return u(this);
        },
        toggle: function (a) {
            return "boolean" == typeof a
                ? a
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      $a(this) ? ya(this).show() : ya(this).hide();
                  });
        },
    });
    var bb = /^(?:checkbox|radio)$/i,
        cb = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        db = /^$|^module$|\/(?:java|ecma)script/i,
        eb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (eb.optgroup = eb.option), (eb.tbody = eb.tfoot = eb.colgroup = eb.caption = eb.thead), (eb.th = eb.td);
    var fb = /<|&#?\w+;/;
    !(function () {
        var a = ia.createDocumentFragment(),
            b = a.appendChild(ia.createElement("div")),
            c = ia.createElement("input");
        c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            (ta.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (b.innerHTML = "<textarea>x</textarea>"),
            (ta.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var gb = /^key/,
        hb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ib = /^([^.]*)(?:\.(.+)|)/;
    (ya.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = Qa.get(a);
            if (q)
                for (
                    c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                        e && ya.find.matchesSelector(Xa, e),
                        c.guid || (c.guid = ya.guid++),
                        (i = q.events) || (i = q.events = {}),
                        (g = q.handle) ||
                            (g = q.handle = function (b) {
                                return void 0 !== ya && ya.event.triggered !== b.type ? ya.event.dispatch.apply(a, arguments) : void 0;
                            }),
                        b = (b || "").match(Ja) || [""],
                        j = b.length;
                    j--;

                )
                    (h = ib.exec(b[j]) || []),
                        (n = p = h[1]),
                        (o = (h[2] || "").split(".").sort()),
                        n &&
                            ((l = ya.event.special[n] || {}),
                            (n = (e ? l.delegateType : l.bindType) || n),
                            (l = ya.event.special[n] || {}),
                            (k = ya.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && ya.expr.match.needsContext.test(e), namespace: o.join(".") }, f)),
                            (m = i[n]) || ((m = i[n] = []), (m.delegateCount = 0), (l.setup && !1 !== l.setup.call(a, d, o, g)) || (a.addEventListener && a.addEventListener(n, g))),
                            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (ya.event.global[n] = !0));
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = Qa.hasData(a) && Qa.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(Ja) || [""], j = b.length; j--; )
                    if (((h = ib.exec(b[j]) || []), (n = p = h[1]), (o = (h[2] || "").split(".").sort()), n)) {
                        for (l = ya.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            (k = m[f]),
                                (!e && p !== k.origType) ||
                                    (c && c.guid !== k.guid) ||
                                    (h && !h.test(k.namespace)) ||
                                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                                    (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && ((l.teardown && !1 !== l.teardown.call(a, o, q.handle)) || ya.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) ya.event.remove(a, n + b[j], c, d, !0);
                ya.isEmptyObject(i) && Qa.remove(a, "handle events");
            }
        },
        dispatch: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = ya.event.fix(a),
                i = new Array(arguments.length),
                j = (Qa.get(this, "events") || {})[h.type] || [],
                k = ya.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (((h.delegateTarget = this), !k.preDispatch || !1 !== k.preDispatch.call(this, h))) {
                for (g = ya.event.handlers.call(this, h, j), b = 0; (e = g[b++]) && !h.isPropagationStopped(); )
                    for (h.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !h.isImmediatePropagationStopped(); )
                        (h.rnamespace && !1 !== f.namespace && !h.rnamespace.test(f.namespace)) ||
                            ((h.handleObj = f), (h.data = f.data), void 0 !== (d = ((ya.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g,
                h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                        for (f = [], g = {}, c = 0; c < i; c++) (d = b[c]), (e = d.selector + " "), void 0 === g[e] && (g[e] = d.needsContext ? ya(e, this).index(j) > -1 : ya.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f });
                    }
            return (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
        },
        addProp: function (a, b) {
            Object.defineProperty(ya.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: ua(b)
                    ? function () {
                          if (this.originalEvent) return b(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[a];
                      },
                set: function (b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                },
            });
        },
        fix: function (a) {
            return a[ya.expando] ? a : new ya.Event(a);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (a) {
                    var b = this || a;
                    return bb.test(b.type) && b.click && f(b, "input") && D(b, "click", y), !1;
                },
                trigger: function (a) {
                    var b = this || a;
                    return bb.test(b.type) && b.click && f(b, "input") && D(b, "click"), !0;
                },
                _default: function (a) {
                    var b = a.target;
                    return (bb.test(b.type) && b.click && f(b, "input") && Qa.get(b, "click")) || f(b, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                },
            },
        },
    }),
        (ya.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c);
        }),
        (ya.Event = function (a, b) {
            if (!(this instanceof ya.Event)) return new ya.Event(a, b);
            a && a.type
                ? ((this.originalEvent = a),
                  (this.type = a.type),
                  (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && !1 === a.returnValue) ? y : z),
                  (this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target),
                  (this.currentTarget = a.currentTarget),
                  (this.relatedTarget = a.relatedTarget))
                : (this.type = a),
                b && ya.extend(this, b),
                (this.timeStamp = (a && a.timeStamp) || Date.now()),
                (this[ya.expando] = !0);
        }),
        (ya.Event.prototype = {
            constructor: ya.Event,
            isDefaultPrevented: z,
            isPropagationStopped: z,
            isImmediatePropagationStopped: z,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = y), a && !this.isSimulated && a.preventDefault();
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = y), a && !this.isSimulated && a.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = y), a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        ya.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (a) {
                    var b = a.button;
                    return null == a.which && gb.test(a.type) ? (null != a.charCode ? a.charCode : a.keyCode) : !a.which && void 0 !== b && hb.test(a.type) ? (1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0) : a.which;
                },
            },
            ya.event.addProp
        ),
        ya.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
            ya.event.special[a] = {
                setup: function () {
                    return D(this, a, A), !1;
                },
                trigger: function () {
                    return D(this, a), !0;
                },
                delegateType: b,
            };
        }),
        ya.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
            ya.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c,
                        d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (e && (e === d || ya.contains(d, e))) || ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
                },
            };
        }),
        ya.fn.extend({
            on: function (a, b, c, d) {
                return C(this, a, b, c, d);
            },
            one: function (a, b, c, d) {
                return C(this, a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), ya(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (!1 !== b && "function" != typeof b) || ((c = b), (b = void 0)),
                    !1 === c && (c = z),
                    this.each(function () {
                        ya.event.remove(this, a, c, b);
                    })
                );
            },
        });
    var jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        kb = /<script|<style|<link/i,
        lb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        mb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ya.extend({
        htmlPrefilter: function (a) {
            return a.replace(jb, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = Ya(a);
            if (!(ta.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || ya.isXMLDoc(a))) for (g = v(h), f = v(a), d = 0, e = f.length; d < e; d++) I(f[d], g[d]);
            if (b)
                if (c) for (f = f || v(a), g = g || v(h), d = 0, e = f.length; d < e; d++) H(f[d], g[d]);
                else H(a, h);
            return (g = v(h, "script")), g.length > 0 && w(g, !i && v(a, "script")), h;
        },
        cleanData: function (a) {
            for (var b, c, d, e = ya.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (Pa(c)) {
                    if ((b = c[Qa.expando])) {
                        if (b.events) for (d in b.events) e[d] ? ya.event.remove(c, d) : ya.removeEvent(c, d, b.handle);
                        c[Qa.expando] = void 0;
                    }
                    c[Ra.expando] && (c[Ra.expando] = void 0);
                }
        },
    }),
        ya.fn.extend({
            detach: function (a) {
                return K(this, a, !0);
            },
            remove: function (a) {
                return K(this, a);
            },
            text: function (a) {
                return Ma(
                    this,
                    function (a) {
                        return void 0 === a
                            ? ya.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = a);
                              });
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return J(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        E(this, a).appendChild(a);
                    }
                });
            },
            prepend: function () {
                return J(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = E(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return J(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return J(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (ya.cleanData(v(a, !1)), (a.textContent = ""));
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null != a && a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return ya.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return Ma(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                        if ("string" == typeof a && !kb.test(a) && !eb[(cb.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = ya.htmlPrefilter(a);
                            try {
                                for (; c < d; c++) (b = this[c] || {}), 1 === b.nodeType && (ya.cleanData(v(b, !1)), (b.innerHTML = a));
                                b = 0;
                            } catch (a) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = [];
                return J(
                    this,
                    arguments,
                    function (b) {
                        var c = this.parentNode;
                        ya.inArray(this, a) < 0 && (ya.cleanData(v(this)), c && c.replaceChild(b, this));
                    },
                    a
                );
            },
        }),
        ya.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
            ya.fn[a] = function (a) {
                for (var c, d = [], e = ya(a), f = e.length - 1, g = 0; g <= f; g++) (c = g === f ? this : this.clone(!0)), ya(e[g])[b](c), ma.apply(d, c.get());
                return this.pushStack(d);
            };
        });
    var nb = new RegExp("^(" + Ua + ")(?!px)[a-z%]+$", "i"),
        ob = function (b) {
            var c = b.ownerDocument.defaultView;
            return (c && c.opener) || (c = a), c.getComputedStyle(b);
        },
        pb = new RegExp(Wa.join("|"), "i");
    !(function () {
        function b() {
            if (j) {
                (i.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (j.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    Xa.appendChild(i).appendChild(j);
                var b = a.getComputedStyle(j);
                (d = "1%" !== b.top),
                    (h = 12 === c(b.marginLeft)),
                    (j.style.right = "60%"),
                    (g = 36 === c(b.right)),
                    (e = 36 === c(b.width)),
                    (j.style.position = "absolute"),
                    (f = 12 === c(j.offsetWidth / 3)),
                    Xa.removeChild(i),
                    (j = null);
            }
        }
        function c(a) {
            return Math.round(parseFloat(a));
        }
        var d,
            e,
            f,
            g,
            h,
            i = ia.createElement("div"),
            j = ia.createElement("div");
        j.style &&
            ((j.style.backgroundClip = "content-box"),
            (j.cloneNode(!0).style.backgroundClip = ""),
            (ta.clearCloneStyle = "content-box" === j.style.backgroundClip),
            ya.extend(ta, {
                boxSizingReliable: function () {
                    return b(), e;
                },
                pixelBoxStyles: function () {
                    return b(), g;
                },
                pixelPosition: function () {
                    return b(), d;
                },
                reliableMarginLeft: function () {
                    return b(), h;
                },
                scrollboxSize: function () {
                    return b(), f;
                },
            }));
    })();
    var qb = ["Webkit", "Moz", "ms"],
        rb = ia.createElement("div").style,
        sb = {},
        tb = /^(none|table(?!-c[ea]).+)/,
        ub = /^--/,
        vb = { position: "absolute", visibility: "hidden", display: "block" },
        wb = { letterSpacing: "0", fontWeight: "400" };
    ya.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = L(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = o(b),
                    i = ub.test(b),
                    j = a.style;
                if ((i || (b = O(h)), (g = ya.cssHooks[b] || ya.cssHooks[h]), void 0 === c)) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b];
                (f = typeof c),
                    "string" === f && (e = Va.exec(c)) && e[1] && ((c = s(a, b, e)), (f = "number")),
                    null != c &&
                        c === c &&
                        ("number" !== f || i || (c += (e && e[3]) || (ya.cssNumber[h] ? "" : "px")),
                        ta.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"),
                        (g && "set" in g && void 0 === (c = g.set(a, c, d))) || (i ? j.setProperty(b, c) : (j[b] = c)));
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = o(b);
            return (
                ub.test(b) || (b = O(h)),
                (g = ya.cssHooks[b] || ya.cssHooks[h]),
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = L(a, b, d)),
                "normal" === e && b in wb && (e = wb[b]),
                "" === c || c ? ((f = parseFloat(e)), !0 === c || isFinite(f) ? f || 0 : e) : e
            );
        },
    }),
        ya.each(["height", "width"], function (a, b) {
            ya.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c)
                        return !tb.test(ya.css(a, "display")) || (a.getClientRects().length && a.getBoundingClientRect().width)
                            ? R(a, b, d)
                            : _a(a, vb, function () {
                                  return R(a, b, d);
                              });
                },
                set: function (a, c, d) {
                    var e,
                        f = ob(a),
                        g = !ta.scrollboxSize() && "absolute" === f.position,
                        h = g || d,
                        i = h && "border-box" === ya.css(a, "boxSizing", !1, f),
                        j = d ? Q(a, b, d, i, f) : 0;
                    return (
                        i && g && (j -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - Q(a, b, "border", !1, f) - 0.5)),
                        j && (e = Va.exec(c)) && "px" !== (e[3] || "px") && ((a.style[b] = c), (c = ya.css(a, b))),
                        P(a, c, j)
                    );
                },
            };
        }),
        (ya.cssHooks.marginLeft = M(ta.reliableMarginLeft, function (a, b) {
            if (b)
                return (
                    (parseFloat(L(a, "marginLeft")) ||
                        a.getBoundingClientRect().left -
                            _a(a, { marginLeft: 0 }, function () {
                                return a.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        ya.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (ya.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                "margin" !== a && (ya.cssHooks[a + b].set = P);
        }),
        ya.fn.extend({
            css: function (a, b) {
                return Ma(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (Array.isArray(b)) {
                            for (d = ob(a), e = b.length; g < e; g++) f[b[g]] = ya.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? ya.style(a, b, c) : ya.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
        }),
        (ya.Tween = S),
        (S.prototype = {
            constructor: S,
            init: function (a, b, c, d, e, f) {
                (this.elem = a), (this.prop = c), (this.easing = e || ya.easing._default), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (ya.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = S.propHooks[this.prop];
                return a && a.get ? a.get(this) : S.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = S.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = b = ya.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : S.propHooks._default.set(this),
                    this
                );
            },
        }),
        (S.prototype.init.prototype = S.prototype),
        (S.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || (null != a.elem[a.prop] && null == a.elem.style[a.prop]) ? a.elem[a.prop] : ((b = ya.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
                },
                set: function (a) {
                    ya.fx.step[a.prop] ? ya.fx.step[a.prop](a) : 1 !== a.elem.nodeType || (!ya.cssHooks[a.prop] && null == a.elem.style[O(a.prop)]) ? (a.elem[a.prop] = a.now) : ya.style(a.elem, a.prop, a.now + a.unit);
                },
            },
        }),
        (S.propHooks.scrollTop = S.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
        }),
        (ya.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (ya.fx = S.prototype.init),
        (ya.fx.step = {});
    var xb,
        yb,
        zb = /^(?:toggle|show|hide)$/,
        Ab = /queueHooks$/;
    (ya.Animation = ya.extend(Z, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return s(c.elem, a, Va.exec(b), c), c;
                },
            ],
        },
        tweener: function (a, b) {
            ua(a) ? ((b = a), (a = ["*"])) : (a = a.match(Ja));
            for (var c, d = 0, e = a.length; d < e; d++) (c = a[d]), (Z.tweeners[c] = Z.tweeners[c] || []), Z.tweeners[c].unshift(b);
        },
        prefilters: [X],
        prefilter: function (a, b) {
            b ? Z.prefilters.unshift(a) : Z.prefilters.push(a);
        },
    })),
        (ya.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? ya.extend({}, a) : { complete: c || (!c && b) || (ua(a) && a), duration: a, easing: (c && b) || (b && !ua(b) && b) };
            return (
                ya.fx.off ? (d.duration = 0) : "number" != typeof d.duration && (d.duration in ya.fx.speeds ? (d.duration = ya.fx.speeds[d.duration]) : (d.duration = ya.fx.speeds._default)),
                (null != d.queue && !0 !== d.queue) || (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    ua(d.old) && d.old.call(this), d.queue && ya.dequeue(this, d.queue);
                }),
                d
            );
        }),
        ya.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter($a).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = ya.isEmptyObject(a),
                    f = ya.speed(b, c, d),
                    g = function () {
                        var b = Z(this, ya.extend({}, a), f);
                        (e || Qa.get(this, "finish")) && b.stop(!0);
                    };
                return (g.finish = g), e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && !1 !== a && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ya.timers,
                            g = Qa.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else for (e in g) g[e] && g[e].stop && Ab.test(e) && d(g[e]);
                        for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (!b && c) || ya.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = Qa.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ya.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, ya.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        ya.each(["toggle", "show", "hide"], function (a, b) {
            var c = ya.fn[b];
            ya.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(V(b, !0), a, d, e);
            };
        }),
        ya.each({ slideDown: V("show"), slideUp: V("hide"), slideToggle: V("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
            ya.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d);
            };
        }),
        (ya.timers = []),
        (ya.fx.tick = function () {
            var a,
                b = 0,
                c = ya.timers;
            for (xb = Date.now(); b < c.length; b++) (a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || ya.fx.stop(), (xb = void 0);
        }),
        (ya.fx.timer = function (a) {
            ya.timers.push(a), ya.fx.start();
        }),
        (ya.fx.interval = 13),
        (ya.fx.start = function () {
            yb || ((yb = !0), T());
        }),
        (ya.fx.stop = function () {
            yb = null;
        }),
        (ya.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (ya.fn.delay = function (b, c) {
            return (
                (b = ya.fx ? ya.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function () {
            var a = ia.createElement("input"),
                b = ia.createElement("select"),
                c = b.appendChild(ia.createElement("option"));
            (a.type = "checkbox"), (ta.checkOn = "" !== a.value), (ta.optSelected = c.selected), (a = ia.createElement("input")), (a.value = "t"), (a.type = "radio"), (ta.radioValue = "t" === a.value);
        })();
    var Bb,
        Cb = ya.expr.attrHandle;
    ya.fn.extend({
        attr: function (a, b) {
            return Ma(this, ya.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                ya.removeAttr(this, a);
            });
        },
    }),
        ya.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return void 0 === a.getAttribute
                        ? ya.prop(a, b, c)
                        : ((1 === f && ya.isXMLDoc(a)) || (e = ya.attrHooks[b.toLowerCase()] || (ya.expr.match.bool.test(b) ? Bb : void 0)),
                          void 0 !== c
                              ? null === c
                                  ? void ya.removeAttr(a, b)
                                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                  ? d
                                  : (a.setAttribute(b, c + ""), c)
                              : e && "get" in e && null !== (d = e.get(a, b))
                              ? d
                              : ((d = ya.find.attr(a, b)), null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!ta.radioValue && "radio" === b && f(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    },
                },
            },
            removeAttr: function (a, b) {
                var c,
                    d = 0,
                    e = b && b.match(Ja);
                if (e && 1 === a.nodeType) for (; (c = e[d++]); ) a.removeAttribute(c);
            },
        }),
        (Bb = {
            set: function (a, b, c) {
                return !1 === b ? ya.removeAttr(a, c) : a.setAttribute(c, c), c;
            },
        }),
        ya.each(ya.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = Cb[b] || ya.find.attr;
            Cb[b] = function (a, b, d) {
                var e,
                    f,
                    g = b.toLowerCase();
                return d || ((f = Cb[g]), (Cb[g] = e), (e = null != c(a, b, d) ? g : null), (Cb[g] = f)), e;
            };
        });
    var Db = /^(?:input|select|textarea|button)$/i,
        Eb = /^(?:a|area)$/i;
    ya.fn.extend({
        prop: function (a, b) {
            return Ma(this, ya.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[ya.propFix[a] || a];
            });
        },
    }),
        ya.extend({
            prop: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return (
                        (1 === f && ya.isXMLDoc(a)) || ((b = ya.propFix[b] || b), (e = ya.propHooks[b])),
                        void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = ya.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Db.test(a.nodeName) || (Eb.test(a.nodeName) && a.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        ta.optSelected ||
            (ya.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null;
                },
                set: function (a) {
                    var b = a.parentNode;
                    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
                },
            }),
        ya.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ya.propFix[this.toLowerCase()] = this;
        }),
        ya.fn.extend({
            addClass: function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = 0;
                if (ua(a))
                    return this.each(function (b) {
                        ya(this).addClass(a.call(this, b, _(this)));
                    });
                if (((b = aa(a)), b.length))
                    for (; (c = this[i++]); )
                        if (((e = _(c)), (d = 1 === c.nodeType && " " + $(e) + " "))) {
                            for (g = 0; (f = b[g++]); ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            (h = $(d)), e !== h && c.setAttribute("class", h);
                        }
                return this;
            },
            removeClass: function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = 0;
                if (ua(a))
                    return this.each(function (b) {
                        ya(this).removeClass(a.call(this, b, _(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if (((b = aa(a)), b.length))
                    for (; (c = this[i++]); )
                        if (((e = _(c)), (d = 1 === c.nodeType && " " + $(e) + " "))) {
                            for (g = 0; (f = b[g++]); ) for (; d.indexOf(" " + f + " ") > -1; ) d = d.replace(" " + f + " ", " ");
                            (h = $(d)), e !== h && c.setAttribute("class", h);
                        }
                return this;
            },
            toggleClass: function (a, b) {
                var c = typeof a,
                    d = "string" === c || Array.isArray(a);
                return "boolean" == typeof b && d
                    ? b
                        ? this.addClass(a)
                        : this.removeClass(a)
                    : ua(a)
                    ? this.each(function (c) {
                          ya(this).toggleClass(a.call(this, c, _(this), b), b);
                      })
                    : this.each(function () {
                          var b, e, f, g;
                          if (d) for (e = 0, f = ya(this), g = aa(a); (b = g[e++]); ) f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
                          else (void 0 !== a && "boolean" !== c) || ((b = _(this)), b && Qa.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Qa.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (a) {
                var b,
                    c,
                    d = 0;
                for (b = " " + a + " "; (c = this[d++]); ) if (1 === c.nodeType && (" " + $(_(c)) + " ").indexOf(b) > -1) return !0;
                return !1;
            },
        });
    var Fb = /\r/g;
    ya.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = ua(a)),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, ya(this).val()) : a),
                                null == e
                                    ? (e = "")
                                    : "number" == typeof e
                                    ? (e += "")
                                    : Array.isArray(e) &&
                                      (e = ya.map(e, function (a) {
                                          return null == a ? "" : a + "";
                                      })),
                                ((b = ya.valHooks[this.type] || ya.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
                        })
                    );
                if (e) return (b = ya.valHooks[e.type] || ya.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c);
            }
        },
    }),
        ya.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = ya.find.attr(a, "value");
                        return null != b ? b : $(ya.text(a));
                    },
                },
                select: {
                    get: function (a) {
                        var b,
                            c,
                            d,
                            e = a.options,
                            g = a.selectedIndex,
                            h = "select-one" === a.type,
                            i = h ? null : [],
                            j = h ? g + 1 : e.length;
                        for (d = g < 0 ? j : h ? g : 0; d < j; d++)
                            if (((c = e[d]), (c.selected || d === g) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup")))) {
                                if (((b = ya(c).val()), h)) return b;
                                i.push(b);
                            }
                        return i;
                    },
                    set: function (a, b) {
                        for (var c, d, e = a.options, f = ya.makeArray(b), g = e.length; g--; ) (d = e[g]), (d.selected = ya.inArray(ya.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    },
                },
            },
        }),
        ya.each(["radio", "checkbox"], function () {
            (ya.valHooks[this] = {
                set: function (a, b) {
                    if (Array.isArray(b)) return (a.checked = ya.inArray(ya(a).val(), b) > -1);
                },
            }),
                ta.checkOn ||
                    (ya.valHooks[this].get = function (a) {
                        return null === a.getAttribute("value") ? "on" : a.value;
                    });
        }),
        (ta.focusin = "onfocusin" in a);
    var Gb = /^(?:focusinfocus|focusoutblur)$/,
        Hb = function (a) {
            a.stopPropagation();
        };
    ya.extend(ya.event, {
        trigger: function (b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = [d || ia],
                o = qa.call(b, "type") ? b.type : b,
                p = qa.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((g = m = h = d = d || ia),
                3 !== d.nodeType &&
                    8 !== d.nodeType &&
                    !Gb.test(o + ya.event.triggered) &&
                    (o.indexOf(".") > -1 && ((p = o.split(".")), (o = p.shift()), p.sort()),
                    (j = o.indexOf(":") < 0 && "on" + o),
                    (b = b[ya.expando] ? b : new ya.Event(o, "object" == typeof b && b)),
                    (b.isTrigger = e ? 2 : 3),
                    (b.namespace = p.join(".")),
                    (b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (b.result = void 0),
                    b.target || (b.target = d),
                    (c = null == c ? [b] : ya.makeArray(c, [b])),
                    (l = ya.event.special[o] || {}),
                    e || !l.trigger || !1 !== l.trigger.apply(d, c)))
            ) {
                if (!e && !l.noBubble && !va(d)) {
                    for (i = l.delegateType || o, Gb.test(i + o) || (g = g.parentNode); g; g = g.parentNode) n.push(g), (h = g);
                    h === (d.ownerDocument || ia) && n.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = n[f++]) && !b.isPropagationStopped(); )
                    (m = g),
                        (b.type = f > 1 ? i : l.bindType || o),
                        (k = (Qa.get(g, "events") || {})[b.type] && Qa.get(g, "handle")),
                        k && k.apply(g, c),
                        (k = j && g[j]) && k.apply && Pa(g) && ((b.result = k.apply(g, c)), !1 === b.result && b.preventDefault());
                return (
                    (b.type = o),
                    e ||
                        b.isDefaultPrevented() ||
                        (l._default && !1 !== l._default.apply(n.pop(), c)) ||
                        !Pa(d) ||
                        (j &&
                            ua(d[o]) &&
                            !va(d) &&
                            ((h = d[j]),
                            h && (d[j] = null),
                            (ya.event.triggered = o),
                            b.isPropagationStopped() && m.addEventListener(o, Hb),
                            d[o](),
                            b.isPropagationStopped() && m.removeEventListener(o, Hb),
                            (ya.event.triggered = void 0),
                            h && (d[j] = h))),
                    b.result
                );
            }
        },
        simulate: function (a, b, c) {
            var d = ya.extend(new ya.Event(), c, { type: a, isSimulated: !0 });
            ya.event.trigger(d, null, b);
        },
    }),
        ya.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    ya.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                if (c) return ya.event.trigger(a, b, c, !0);
            },
        }),
        ta.focusin ||
            ya.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var c = function (a) {
                    ya.event.simulate(b, a.target, ya.event.fix(a));
                };
                ya.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                            e = Qa.access(d, b);
                        e || d.addEventListener(a, c, !0), Qa.access(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                            e = Qa.access(d, b) - 1;
                        e ? Qa.access(d, b, e) : (d.removeEventListener(a, c, !0), Qa.remove(d, b));
                    },
                };
            });
    var Ib = a.location,
        Jb = Date.now(),
        Kb = /\?/;
    ya.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (a) {
            c = void 0;
        }
        return (c && !c.getElementsByTagName("parsererror").length) || ya.error("Invalid XML: " + b), c;
    };
    var Lb = /\[\]$/,
        Mb = /\r?\n/g,
        Nb = /^(?:submit|button|image|reset|file)$/i,
        Ob = /^(?:input|select|textarea|keygen)/i;
    (ya.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                var c = ua(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
            };
        if (null == a) return "";
        if (Array.isArray(a) || (a.jquery && !ya.isPlainObject(a)))
            ya.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) ba(c, a[c], b, e);
        return d.join("&");
    }),
        ya.fn.extend({
            serialize: function () {
                return ya.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = ya.prop(this, "elements");
                    return a ? ya.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return this.name && !ya(this).is(":disabled") && Ob.test(this.nodeName) && !Nb.test(a) && (this.checked || !bb.test(a));
                    })
                    .map(function (a, b) {
                        var c = ya(this).val();
                        return null == c
                            ? null
                            : Array.isArray(c)
                            ? ya.map(c, function (a) {
                                  return { name: b.name, value: a.replace(Mb, "\r\n") };
                              })
                            : { name: b.name, value: c.replace(Mb, "\r\n") };
                    })
                    .get();
            },
        });
    var Pb = /%20/g,
        Qb = /#.*$/,
        Rb = /([?&])_=[^&]*/,
        Sb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ub = /^(?:GET|HEAD)$/,
        Vb = /^\/\//,
        Wb = {},
        Xb = {},
        Yb = "*/".concat("*"),
        Zb = ia.createElement("a");
    (Zb.href = Ib.href),
        ya.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ib.href,
                type: "GET",
                isLocal: Tb.test(Ib.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Yb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ya.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (a, b) {
                return b ? ea(ea(a, ya.ajaxSettings), b) : ea(ya.ajaxSettings, a);
            },
            ajaxPrefilter: ca(Wb),
            ajaxTransport: ca(Xb),
            ajax: function (b, c) {
                function d(b, c, d, h) {
                    var j,
                        m,
                        n,
                        u,
                        v,
                        w = c;
                    k ||
                        ((k = !0),
                        i && a.clearTimeout(i),
                        (e = void 0),
                        (g = h || ""),
                        (x.readyState = b > 0 ? 4 : 0),
                        (j = (b >= 200 && b < 300) || 304 === b),
                        d && (u = fa(o, x, d)),
                        (u = ga(o, u, x, j)),
                        j
                            ? (o.ifModified && ((v = x.getResponseHeader("Last-Modified")), v && (ya.lastModified[f] = v), (v = x.getResponseHeader("etag")) && (ya.etag[f] = v)),
                              204 === b || "HEAD" === o.type ? (w = "nocontent") : 304 === b ? (w = "notmodified") : ((w = u.state), (m = u.data), (n = u.error), (j = !n)))
                            : ((n = w), (!b && w) || ((w = "error"), b < 0 && (b = 0))),
                        (x.status = b),
                        (x.statusText = (c || w) + ""),
                        j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]),
                        x.statusCode(t),
                        (t = void 0),
                        l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]),
                        s.fireWith(p, [x, w]),
                        l && (q.trigger("ajaxComplete", [x, o]), --ya.active || ya.event.trigger("ajaxStop")));
                }
                "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o = ya.ajaxSetup({}, c),
                    p = o.context || o,
                    q = o.context && (p.nodeType || p.jquery) ? ya(p) : ya.event,
                    r = ya.Deferred(),
                    s = ya.Callbacks("once memory"),
                    t = o.statusCode || {},
                    u = {},
                    v = {},
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (k) {
                                if (!h) for (h = {}; (b = Sb.exec(g)); ) h[b[1].toLowerCase() + " "] = (h[b[1].toLowerCase() + " "] || []).concat(b[2]);
                                b = h[a.toLowerCase() + " "];
                            }
                            return null == b ? null : b.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return k ? g : null;
                        },
                        setRequestHeader: function (a, b) {
                            return null == k && ((a = v[a.toLowerCase()] = v[a.toLowerCase()] || a), (u[a] = b)), this;
                        },
                        overrideMimeType: function (a) {
                            return null == k && (o.mimeType = a), this;
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)
                                if (k) x.always(a[x.status]);
                                else for (b in a) t[b] = [t[b], a[b]];
                            return this;
                        },
                        abort: function (a) {
                            var b = a || w;
                            return e && e.abort(b), d(0, b), this;
                        },
                    };
                if (
                    (r.promise(x),
                    (o.url = ((b || o.url || Ib.href) + "").replace(Vb, Ib.protocol + "//")),
                    (o.type = c.method || c.type || o.method || o.type),
                    (o.dataTypes = (o.dataType || "*").toLowerCase().match(Ja) || [""]),
                    null == o.crossDomain)
                ) {
                    j = ia.createElement("a");
                    try {
                        (j.href = o.url), (j.href = j.href), (o.crossDomain = Zb.protocol + "//" + Zb.host != j.protocol + "//" + j.host);
                    } catch (a) {
                        o.crossDomain = !0;
                    }
                }
                if ((o.data && o.processData && "string" != typeof o.data && (o.data = ya.param(o.data, o.traditional)), da(Wb, o, c, x), k)) return x;
                (l = ya.event && o.global),
                    l && 0 == ya.active++ && ya.event.trigger("ajaxStart"),
                    (o.type = o.type.toUpperCase()),
                    (o.hasContent = !Ub.test(o.type)),
                    (f = o.url.replace(Qb, "")),
                    o.hasContent
                        ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Pb, "+"))
                        : ((n = o.url.slice(f.length)),
                          o.data && (o.processData || "string" == typeof o.data) && ((f += (Kb.test(f) ? "&" : "?") + o.data), delete o.data),
                          !1 === o.cache && ((f = f.replace(Rb, "$1")), (n = (Kb.test(f) ? "&" : "?") + "_=" + Jb++ + n)),
                          (o.url = f + n)),
                    o.ifModified && (ya.lastModified[f] && x.setRequestHeader("If-Modified-Since", ya.lastModified[f]), ya.etag[f] && x.setRequestHeader("If-None-Match", ya.etag[f])),
                    ((o.data && o.hasContent && !1 !== o.contentType) || c.contentType) && x.setRequestHeader("Content-Type", o.contentType),
                    x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Yb + "; q=0.01" : "") : o.accepts["*"]);
                for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
                if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k)) return x.abort();
                if (((w = "abort"), s.add(o.complete), x.done(o.success), x.fail(o.error), (e = da(Xb, o, c, x)))) {
                    if (((x.readyState = 1), l && q.trigger("ajaxSend", [x, o]), k)) return x;
                    o.async &&
                        o.timeout > 0 &&
                        (i = a.setTimeout(function () {
                            x.abort("timeout");
                        }, o.timeout));
                    try {
                        (k = !1), e.send(u, d);
                    } catch (a) {
                        if (k) throw a;
                        d(-1, a);
                    }
                } else d(-1, "No Transport");
                return x;
            },
            getJSON: function (a, b, c) {
                return ya.get(a, b, c, "json");
            },
            getScript: function (a, b) {
                return ya.get(a, void 0, b, "script");
            },
        }),
        ya.each(["get", "post"], function (a, b) {
            ya[b] = function (a, c, d, e) {
                return ua(c) && ((e = e || d), (d = c), (c = void 0)), ya.ajax(ya.extend({ url: a, type: b, dataType: e, data: c, success: d }, ya.isPlainObject(a) && a));
            };
        }),
        (ya._evalUrl = function (a, b) {
            return ya.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (a) {
                    ya.globalEval(a, b);
                },
            });
        }),
        ya.fn.extend({
            wrapAll: function (a) {
                var b;
                return (
                    this[0] &&
                        (ua(a) && (a = a.call(this[0])),
                        (b = ya(a, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                                return a;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (a) {
                return ua(a)
                    ? this.each(function (b) {
                          ya(this).wrapInner(a.call(this, b));
                      })
                    : this.each(function () {
                          var b = ya(this),
                              c = b.contents();
                          c.length ? c.wrapAll(a) : b.append(a);
                      });
            },
            wrap: function (a) {
                var b = ua(a);
                return this.each(function (c) {
                    ya(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function (a) {
                return (
                    this.parent(a)
                        .not("body")
                        .each(function () {
                            ya(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (ya.expr.pseudos.hidden = function (a) {
            return !ya.expr.pseudos.visible(a);
        }),
        (ya.expr.pseudos.visible = function (a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
        }),
        (ya.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest();
            } catch (a) {}
        });
    var $b = { 0: 200, 1223: 204 },
        _b = ya.ajaxSettings.xhr();
    (ta.cors = !!_b && "withCredentials" in _b),
        (ta.ajax = _b = !!_b),
        ya.ajaxTransport(function (b) {
            var c, d;
            if (ta.cors || (_b && !b.crossDomain))
                return {
                    send: function (e, f) {
                        var g,
                            h = b.xhr();
                        if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e) h.setRequestHeader(g, e[g]);
                        (c = function (a) {
                            return function () {
                                c &&
                                    ((c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null),
                                    "abort" === a
                                        ? h.abort()
                                        : "error" === a
                                        ? "number" != typeof h.status
                                            ? f(0, "error")
                                            : f(h.status, h.statusText)
                                        : f($b[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                            };
                        }),
                            (h.onload = c()),
                            (d = h.onerror = h.ontimeout = c("error")),
                            void 0 !== h.onabort
                                ? (h.onabort = d)
                                : (h.onreadystatechange = function () {
                                      4 === h.readyState &&
                                          a.setTimeout(function () {
                                              c && d();
                                          });
                                  }),
                            (c = c("abort"));
                        try {
                            h.send((b.hasContent && b.data) || null);
                        } catch (a) {
                            if (c) throw a;
                        }
                    },
                    abort: function () {
                        c && c();
                    },
                };
        }),
        ya.ajaxPrefilter(function (a) {
            a.crossDomain && (a.contents.script = !1);
        }),
        ya.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (a) {
                    return ya.globalEval(a), a;
                },
            },
        }),
        ya.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
        }),
        ya.ajaxTransport("script", function (a) {
            if (a.crossDomain || a.scriptAttrs) {
                var b, c;
                return {
                    send: function (d, e) {
                        (b = ya("<script>")
                            .attr(a.scriptAttrs || {})
                            .prop({ charset: a.scriptCharset, src: a.url })
                            .on(
                                "load error",
                                (c = function (a) {
                                    b.remove(), (c = null), a && e("error" === a.type ? 404 : 200, a.type);
                                })
                            )),
                            ia.head.appendChild(b[0]);
                    },
                    abort: function () {
                        c && c();
                    },
                };
            }
        });
    var ac = [],
        bc = /(=)\?(?=&|$)|\?\?/;
    ya.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ac.pop() || ya.expando + "_" + Jb++;
            return (this[a] = !0), a;
        },
    }),
        ya.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h = !1 !== b.jsonp && (bc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
            if (h || "jsonp" === b.dataTypes[0])
                return (
                    (e = b.jsonpCallback = ua(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                    h ? (b[h] = b[h].replace(bc, "$1" + e)) : !1 !== b.jsonp && (b.url += (Kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    (b.converters["script json"] = function () {
                        return g || ya.error(e + " was not called"), g[0];
                    }),
                    (b.dataTypes[0] = "json"),
                    (f = a[e]),
                    (a[e] = function () {
                        g = arguments;
                    }),
                    d.always(function () {
                        void 0 === f ? ya(a).removeProp(e) : (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), ac.push(e)), g && ua(f) && f(g[0]), (g = f = void 0);
                    }),
                    "script"
                );
        }),
        (ta.createHTMLDocument = (function () {
            var a = ia.implementation.createHTMLDocument("").body;
            return (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length;
        })()),
        (ya.parseHTML = function (a, b, c) {
            if ("string" != typeof a) return [];
            "boolean" == typeof b && ((c = b), (b = !1));
            var d, e, f;
            return (
                b || (ta.createHTMLDocument ? ((b = ia.implementation.createHTMLDocument("")), (d = b.createElement("base")), (d.href = ia.location.href), b.head.appendChild(d)) : (b = ia)),
                (e = Ea.exec(a)),
                (f = !c && []),
                e ? [b.createElement(e[1])] : ((e = x([a], b, f)), f && f.length && ya(f).remove(), ya.merge([], e.childNodes))
            );
        }),
        (ya.fn.load = function (a, b, c) {
            var d,
                e,
                f,
                g = this,
                h = a.indexOf(" ");
            return (
                h > -1 && ((d = $(a.slice(h))), (a = a.slice(0, h))),
                ua(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (e = "POST"),
                g.length > 0 &&
                    ya
                        .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
                        .done(function (a) {
                            (f = arguments), g.html(d ? ya("<div>").append(ya.parseHTML(a)).find(d) : a);
                        })
                        .always(
                            c &&
                                function (a, b) {
                                    g.each(function () {
                                        c.apply(this, f || [a.responseText, b, a]);
                                    });
                                }
                        ),
                this
            );
        }),
        ya.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            ya.fn[b] = function (a) {
                return this.on(b, a);
            };
        }),
        (ya.expr.pseudos.animated = function (a) {
            return ya.grep(ya.timers, function (b) {
                return a === b.elem;
            }).length;
        }),
        (ya.offset = {
            setOffset: function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = ya.css(a, "position"),
                    l = ya(a),
                    m = {};
                "static" === k && (a.style.position = "relative"),
                    (h = l.offset()),
                    (f = ya.css(a, "top")),
                    (i = ya.css(a, "left")),
                    (j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
                    j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                    ua(b) && (b = b.call(a, c, ya.extend({}, h))),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m);
            },
        }),
        ya.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                              ya.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d = this[0];
                if (d) return d.getClientRects().length ? ((b = d.getBoundingClientRect()), (c = d.ownerDocument.defaultView), { top: b.top + c.pageYOffset, left: b.left + c.pageXOffset }) : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c,
                        d = this[0],
                        e = { top: 0, left: 0 };
                    if ("fixed" === ya.css(d, "position")) b = d.getBoundingClientRect();
                    else {
                        for (b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" === ya.css(a, "position"); ) a = a.parentNode;
                        a && a !== d && 1 === a.nodeType && ((e = ya(a).offset()), (e.top += ya.css(a, "borderTopWidth", !0)), (e.left += ya.css(a, "borderLeftWidth", !0)));
                    }
                    return { top: b.top - e.top - ya.css(d, "marginTop", !0), left: b.left - e.left - ya.css(d, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent; a && "static" === ya.css(a, "position"); ) a = a.offsetParent;
                    return a || Xa;
                });
            },
        }),
        ya.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
            var c = "pageYOffset" === b;
            ya.fn[a] = function (d) {
                return Ma(
                    this,
                    function (a, d, e) {
                        var f;
                        if ((va(a) ? (f = a) : 9 === a.nodeType && (f = a.defaultView), void 0 === e)) return f ? f[b] : a[d];
                        f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : (a[d] = e);
                    },
                    a,
                    d,
                    arguments.length
                );
            };
        }),
        ya.each(["top", "left"], function (a, b) {
            ya.cssHooks[b] = M(ta.pixelPosition, function (a, c) {
                if (c) return (c = L(a, b)), nb.test(c) ? ya(a).position()[b] + "px" : c;
            });
        }),
        ya.each({ Height: "height", Width: "width" }, function (a, b) {
            ya.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
                ya.fn[d] = function (e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e),
                        h = c || (!0 === e || !0 === f ? "margin" : "border");
                    return Ma(
                        this,
                        function (b, c, e) {
                            var f;
                            return va(b)
                                ? 0 === d.indexOf("outer")
                                    ? b["inner" + a]
                                    : b.document.documentElement["client" + a]
                                : 9 === b.nodeType
                                ? ((f = b.documentElement), Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a]))
                                : void 0 === e
                                ? ya.css(b, c, h)
                                : ya.style(b, c, e, h);
                        },
                        b,
                        g ? e : void 0,
                        g
                    );
                };
            });
        }),
        ya.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
            ya.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
            };
        }),
        ya.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        }),
        ya.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
            },
        }),
        (ya.proxy = function (a, b) {
            var c, d, e;
            if (("string" == typeof b && ((c = a[b]), (b = a), (a = c)), ua(a)))
                return (
                    (d = ka.call(arguments, 2)),
                    (e = function () {
                        return a.apply(b || this, d.concat(ka.call(arguments)));
                    }),
                    (e.guid = a.guid = a.guid || ya.guid++),
                    e
                );
        }),
        (ya.holdReady = function (a) {
            a ? ya.readyWait++ : ya.ready(!0);
        }),
        (ya.isArray = Array.isArray),
        (ya.parseJSON = JSON.parse),
        (ya.nodeName = f),
        (ya.isFunction = ua),
        (ya.isWindow = va),
        (ya.camelCase = o),
        (ya.type = d),
        (ya.now = Date.now),
        (ya.isNumeric = function (a) {
            var b = ya.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return ya;
            });
    var cc = a.jQuery,
        dc = a.$;
    return (
        (ya.noConflict = function (b) {
            return a.$ === ya && (a.$ = dc), b && a.jQuery === ya && (a.jQuery = cc), ya;
        }),
        b || (a.jQuery = a.$ = ya),
        ya
    );
})
/*!
 * Lightbox v2.11.3
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */,
    (function (a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? (module.exports = b(require("jquery"))) : (a.lightbox = b(a.jQuery));
    })(this, function (a) {
        function b(b) {
            (this.album = []), (this.currentImageIndex = void 0), this.init(), (this.options = a.extend({}, this.constructor.defaults)), this.option(b);
        }
        return (
            (b.defaults = {
                albumLabel: "Image %1 of %2",
                alwaysShowNavOnTouchDevices: !1,
                fadeDuration: 600,
                fitImagesInViewport: !0,
                imageFadeDuration: 600,
                positionFromTop: 50,
                resizeDuration: 700,
                showImageNumberLabel: !0,
                wrapAround: !1,
                disableScrolling: !1,
                sanitizeTitle: !1,
            }),
            (b.prototype.option = function (b) {
                a.extend(this.options, b);
            }),
            (b.prototype.imageCountLabel = function (a, b) {
                return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b);
            }),
            (b.prototype.init = function () {
                var b = this;
                a(document).ready(function () {
                    b.enable(), b.build();
                });
            }),
            (b.prototype.enable = function () {
                var b = this;
                a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) {
                    return b.start(a(c.currentTarget)), !1;
                });
            }),
            (b.prototype.build = function () {
                if (!(a("#lightbox").length > 0)) {
                    var b = this;
                    a(
                        '<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>'
                    ).appendTo(a("body")),
                        (this.$lightbox = a("#lightbox")),
                        (this.$overlay = a("#lightboxOverlay")),
                        (this.$outerContainer = this.$lightbox.find(".lb-outerContainer")),
                        (this.$container = this.$lightbox.find(".lb-container")),
                        (this.$image = this.$lightbox.find(".lb-image")),
                        (this.$nav = this.$lightbox.find(".lb-nav")),
                        (this.containerPadding = {
                            top: parseInt(this.$container.css("padding-top"), 10),
                            right: parseInt(this.$container.css("padding-right"), 10),
                            bottom: parseInt(this.$container.css("padding-bottom"), 10),
                            left: parseInt(this.$container.css("padding-left"), 10),
                        }),
                        (this.imageBorderWidth = {
                            top: parseInt(this.$image.css("border-top-width"), 10),
                            right: parseInt(this.$image.css("border-right-width"), 10),
                            bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                            left: parseInt(this.$image.css("border-left-width"), 10),
                        }),
                        this.$overlay.hide().on("click", function () {
                            return b.end(), !1;
                        }),
                        this.$lightbox.hide().on("click", function (c) {
                            "lightbox" === a(c.target).attr("id") && b.end();
                        }),
                        this.$outerContainer.on("click", function (c) {
                            return "lightbox" === a(c.target).attr("id") && b.end(), !1;
                        }),
                        this.$lightbox.find(".lb-prev").on("click", function () {
                            return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1;
                        }),
                        this.$lightbox.find(".lb-next").on("click", function () {
                            return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1;
                        }),
                        this.$nav.on("mousedown", function (a) {
                            3 === a.which &&
                                (b.$nav.css("pointer-events", "none"),
                                b.$lightbox.one("contextmenu", function () {
                                    setTimeout(
                                        function () {
                                            this.$nav.css("pointer-events", "auto");
                                        }.bind(b),
                                        0
                                    );
                                }));
                        }),
                        this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
                            return b.end(), !1;
                        });
                }
            }),
            (b.prototype.start = function (b) {
                function c(a) {
                    d.album.push({ alt: a.attr("data-alt"), link: a.attr("href"), title: a.attr("data-title") || a.attr("title") });
                }
                var d = this,
                    e = a(window);
                e.on("resize", a.proxy(this.sizeOverlay, this)), this.sizeOverlay(), (this.album = []);
                var f,
                    g = 0,
                    h = b.attr("data-lightbox");
                if (h) {
                    f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
                    for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i);
                } else if ("lightbox" === b.attr("rel")) c(b);
                else {
                    f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
                    for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j);
                }
                var k = e.scrollTop() + this.options.positionFromTop,
                    l = e.scrollLeft();
                this.$lightbox.css({ top: k + "px", left: l + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g);
            }),
            (b.prototype.changeImage = function (b) {
                var c = this,
                    d = this.album[b].link,
                    e = d.split(".").slice(-1)[0],
                    f = this.$lightbox.find(".lb-image");
                this.disableKeyboardNav(),
                    this.$overlay.fadeIn(this.options.fadeDuration),
                    a(".lb-loader").fadeIn("slow"),
                    this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),
                    this.$outerContainer.addClass("animating");
                var g = new Image();
                (g.onload = function () {
                    var h, i, j, k, l, m;
                    f.attr({ alt: c.album[b].alt, src: d }),
                        a(g),
                        f.width(g.width),
                        f.height(g.height),
                        (m = a(window).width()),
                        (l = a(window).height()),
                        (k = m - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20),
                        (j = l - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - c.options.positionFromTop - 70),
                        "svg" === e && (f.width(k), f.height(j)),
                        c.options.fitImagesInViewport
                            ? (c.options.maxWidth && c.options.maxWidth < k && (k = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (j = c.options.maxHeight))
                            : ((k = c.options.maxWidth || g.width || k), (j = c.options.maxHeight || g.height || j)),
                        (g.width > k || g.height > j) &&
                            (g.width / k > g.height / j ? ((i = k), (h = parseInt(g.height / (g.width / i), 10)), f.width(i), f.height(h)) : ((h = j), (i = parseInt(g.width / (g.height / h), 10)), f.width(i), f.height(h))),
                        c.sizeContainer(f.width(), f.height());
                }),
                    (g.src = this.album[b].link),
                    (this.currentImageIndex = b);
            }),
            (b.prototype.sizeOverlay = function () {
                var b = this;
                setTimeout(function () {
                    b.$overlay.width(a(document).width()).height(a(document).height());
                }, 0);
            }),
            (b.prototype.sizeContainer = function (a, b) {
                function c() {
                    d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.$overlay.focus(), d.showImage();
                }
                var d = this,
                    e = this.$outerContainer.outerWidth(),
                    f = this.$outerContainer.outerHeight(),
                    g = a + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
                    h = b + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
                e !== g || f !== h
                    ? this.$outerContainer.animate({ width: g, height: h }, this.options.resizeDuration, "swing", function () {
                          c();
                      })
                    : c();
            }),
            (b.prototype.showImage = function () {
                this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
            }),
            (b.prototype.updateNav = function () {
                var a = !1;
                try {
                    document.createEvent("TouchEvent"), (a = !!this.options.alwaysShowNavOnTouchDevices);
                } catch (a) {}
                this.$lightbox.find(".lb-nav").show(),
                    this.album.length > 1 &&
                        (this.options.wrapAround
                            ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show())
                            : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")),
                              this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
            }),
            (b.prototype.updateDetails = function () {
                var a = this;
                if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
                    var b = this.$lightbox.find(".lb-caption");
                    this.options.sanitizeTitle ? b.text(this.album[this.currentImageIndex].title) : b.html(this.album[this.currentImageIndex].title), b.fadeIn("fast");
                }
                if (this.album.length > 1 && this.options.showImageNumberLabel) {
                    var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
                    this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
                } else this.$lightbox.find(".lb-number").hide();
                this.$outerContainer.removeClass("animating"),
                    this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
                        return a.sizeOverlay();
                    });
            }),
            (b.prototype.preloadNeighboringImages = function () {
                if (this.album.length > this.currentImageIndex + 1) {
                    new Image().src = this.album[this.currentImageIndex + 1].link;
                }
                if (this.currentImageIndex > 0) {
                    new Image().src = this.album[this.currentImageIndex - 1].link;
                }
            }),
            (b.prototype.enableKeyboardNav = function () {
                this.$lightbox.on("keyup.keyboard", a.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", a.proxy(this.keyboardAction, this));
            }),
            (b.prototype.disableKeyboardNav = function () {
                this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard");
            }),
            (b.prototype.keyboardAction = function (a) {
                var b = a.keyCode;
                27 === b
                    ? (a.stopPropagation(), this.end())
                    : 37 === b
                    ? 0 !== this.currentImageIndex
                        ? this.changeImage(this.currentImageIndex - 1)
                        : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1)
                    : 39 === b && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
            }),
            (b.prototype.end = function () {
                this.disableKeyboardNav(),
                    a(window).off("resize", this.sizeOverlay),
                    this.$lightbox.fadeOut(this.options.fadeDuration),
                    this.$overlay.fadeOut(this.options.fadeDuration),
                    this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling");
            }),
            new b()
        );
    });
//# sourceMappingURL=lightbox-plus-jquery.min.map
