import { defineComponent as _, ref as r, openBlock as a, createElementBlock as l, Fragment as m, createElementVNode as p, toDisplayString as s } from "vue";
const u = { class: "card" }, i = /* @__PURE__ */ _({
  __name: "VueComponentNpmExample",
  props: {
    msg: { type: String }
  },
  setup(e) {
    const t = r(0);
    return (o, n) => (a(), l(m, null, [
      p("h1", null, s(e.msg), 1),
      p("div", u, [
        p("button", {
          type: "button",
          onClick: n[0] || (n[0] = (c) => t.value++)
        }, "count is " + s(t.value), 1)
      ])
    ], 64));
  }
});
const d = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, c] of t)
    o[n] = c;
  return o;
}, g = /* @__PURE__ */ d(i, [["__scopeId", "data-v-1ec0460a"]]);
export {
  g as VueComponentNpmExample
};
