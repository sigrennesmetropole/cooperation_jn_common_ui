import { defineComponent as a, ref as m, openBlock as r, createElementBlock as l, Fragment as h, createElementVNode as s, toDisplayString as d, unref as f, computed as x, normalizeClass as _, renderSlot as C, createVNode as c, withCtx as u, createTextVNode as A } from "vue";
const E = { class: "card" }, b = /* @__PURE__ */ a({
  __name: "VueComponentNpmExample",
  props: {
    msg: { type: String }
  },
  setup(t) {
    const e = m(0);
    return (o, n) => (r(), l(h, null, [
      s("h1", null, d(t.msg), 1),
      s("div", E, [
        s("button", {
          type: "button",
          onClick: n[0] || (n[0] = (i) => e.value++)
        }, "count is " + d(e.value), 1)
      ])
    ], 64));
  }
});
const g = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, i] of e)
    o[n] = i;
  return o;
}, B = /* @__PURE__ */ g(b, [["__scopeId", "data-v-6da42d39"]]), v = {};
function D(t, e) {
  return r(), l("h1", null, "Salut");
}
const z = /* @__PURE__ */ g(v, [["render", D]]), j = ["src"], G = /* @__PURE__ */ a({
  __name: "UiRennesLogo",
  setup(t) {
    const e = new URL("data:image/png;base64,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", self.location).href;
    return (o, n) => (r(), l("img", { src: f(e) }, null, 8, j));
  }
}), R = { class: "relative w-fit" }, V = ["href"], p = /* @__PURE__ */ a({
  __name: "UiLinkFooter",
  props: {
    url: {
      type: String,
      required: !0
    },
    textColor: {
      type: String,
      required: !1,
      default: "neutral-500"
    }
  },
  setup(t) {
    const e = t, o = x(() => [`text-${e.textColor}`, `before:bg-${e.textColor}`]);
    return (n, i) => (r(), l("div", R, [
      s("a", {
        href: e.url,
        class: _(["font-normal text-xs before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0", f(o)]),
        target: "_blank"
      }, [
        C(n.$slots, "default")
      ], 10, V)
    ]));
  }
}), N = { class: "flex gap-3 justify-center font-dm-sans" }, X = /* @__PURE__ */ A("Mentions l\xE9gales"), P = /* @__PURE__ */ A("Politique de protection des donn\xE9es personnelles"), H = /* @__PURE__ */ a({
  __name: "LegalLink",
  props: {
    textColor: {
      type: String,
      required: !1,
      default: "neutral-500"
    }
  },
  setup(t) {
    const e = t;
    return (o, n) => (r(), l("div", N, [
      c(p, {
        url: "https://metropole.rennes.fr/mentions-legales",
        textColor: e.textColor
      }, {
        default: u(() => [
          X
        ]),
        _: 1
      }, 8, ["url", "textColor"]),
      c(p, {
        url: "https://fabriquecitoyenne.fr/privacy",
        textColor: e.textColor
      }, {
        default: u(() => [
          P
        ]),
        _: 1
      }, 8, ["url", "textColor"])
    ]));
  }
}), S = { class: "flex flex-col p-2 gap-4 font-dm-sans divide-y divide-neutral-200" }, L = { class: "flex p-0 gap-6" }, U = /* @__PURE__ */ s("div", { class: "font-normal text-xs" }, " Visualisez les donn\xE9es th\xE9matiques de notre territoire sur sa maquette 3D. ", -1), T = /* @__PURE__ */ a({
  __name: "FooterArea",
  setup(t) {
    return (e, o) => (r(), l("footer", S, [
      s("div", L, [
        c(G, { class: "w-36 h-7" }),
        U
      ]),
      c(H)
    ]));
  }
});
export {
  T as FooterArea,
  z as TestNul,
  B as VueComponentNpmExample
};
