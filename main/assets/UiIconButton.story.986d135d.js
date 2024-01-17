import { ar as defineComponent, as as openBlock, at as createElementBlock, aB as renderSlot, aA as createBaseVNode, ax as resolveComponent, ay as createBlock, av as withCtx, au as createVNode, aw as createTextVNode } from "./vendor.426e4a43.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiIconButton",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    titleButton: {
      type: String,
      default: ""
    },
    ariaLabelButton: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = ["disabled", "title", "aria-label"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    disabled: $props.disabled,
    class: "shadow-lg w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 focus:ring-2 focus:z-10 focus:ring-slate-400 focus:outline-none",
    title: $props.titleButton,
    "aria-label": $props.ariaLabelButton
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$2);
}
_sfc_main$2.__file = "lib/ui/UiIconButton.vue";
const UiIconButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiIconButton.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  width: "20",
  height: "18",
  viewBox: "0 0 20 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0.714355 10.1429L10.0001 0.857178L19.2858 10.1429",
  stroke: "black",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.57129 7.28564V17.2856H16.4284V7.28564",
  stroke: "black",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 17.2857V13",
  stroke: "#000001",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10.0001 9.42861C10.9863 9.42861 11.7858 8.62911 11.7858 7.64289C11.7858 6.65667 10.9863 5.85718 10.0001 5.85718C9.01385 5.85718 8.21436 6.65667 8.21436 7.64289C8.21436 8.62911 9.01385 9.42861 10.0001 9.42861Z",
  stroke: "#000001",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_6 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4,
  _hoisted_5
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_6);
}
_sfc_main$1.__file = "lib/icons/IconHome.vue";
const IconHome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/icons/IconHome.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiIconButton.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        disabled: false,
        active: false
      };
    }
    const __returned__ = { initState, UiIconButton, IconHome };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "12",
      cy: "13",
      r: "3"
    })
  ])
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }),
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "12",
      cy: "13",
      r: "3"
    })
  ])
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "pl-2" }, "Text", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiIconButton",
    layout: {
      type: "grid",
      width: 200
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Text Button",
        "init-state": $setup.initState
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiIconButton"], {
            disabled: state.disabled,
            active: state.active
          }, {
            default: withCtx(() => [
              createTextVNode("Click ")
            ]),
            _: 2
          }, 1032, ["disabled", "active"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Icon Button",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiIconButton"], {
            disabled: state.disabled,
            active: state.active
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 2
          }, 1032, ["disabled", "active"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "Icon and text Button",
        "init-state": $setup.initState,
        icon: "lucide:camera"
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiIconButton"], {
            disabled: state.disabled,
            active: state.active
          }, {
            default: withCtx(() => [
              _hoisted_2,
              _hoisted_3
            ]),
            _: 2
          }, 1032, ["disabled", "active"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Home Button" }, {
        default: withCtx(() => [
          createVNode($setup["UiIconButton"], { class: "rounded-lg" }, {
            default: withCtx(() => [
              createVNode($setup["IconHome"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "lib/ui/UiIconButton.story.vue";
const UiIconButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiIconButton.story.vue"]]);
export {
  UiIconButton_story as default
};
