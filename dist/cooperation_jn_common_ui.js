import { defineComponent as a, ref as u, openBlock as r, createElementBlock as p, Fragment as m, createElementVNode as c, toDisplayString as _ } from "vue";
const d = { class: "card" }, i = /* @__PURE__ */ a({
  __name: "VueComponentNpmExample",
  props: {
    msg: { type: String }
  },
  setup(e) {
    const t = u(0);
    return (o, n) => (r(), p(m, null, [
      c("h1", null, _(e.msg), 1),
      c("div", d, [
        c("button", {
          type: "button",
          onClick: n[0] || (n[0] = (s) => t.value++)
        }, "count is " + _(t.value), 1)
      ])
    ], 64));
  }
});
const l = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, g = /* @__PURE__ */ l(i, [["__scopeId", "data-v-6da42d39"]]), f = {};
function v(e, t) {
  return r(), p("h1", null, "Salut");
}
const y = /* @__PURE__ */ l(f, [["render", v]]);
export {
  y as TestNul,
  g as VueComponentNpmExample
};
