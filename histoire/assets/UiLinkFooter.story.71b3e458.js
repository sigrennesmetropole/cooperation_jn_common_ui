import { ar as defineComponent, as as computed, at as openBlock, au as createElementBlock, av as createBaseVNode, aw as renderSlot, ax as normalizeClass, ay as resolveComponent, az as createBlock, aA as withCtx, aB as createVNode, aC as createTextVNode } from "./vendor.9bba3a1c.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter",
  props: {
    url: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: false,
      default: "neutral-500"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const textStyles = computed(() => {
      return [`text-${props.textColor}`, `before:bg-${props.textColor}`];
    });
    const __returned__ = { props, textStyles };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative w-fit" };
const _hoisted_2 = ["href"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("a", {
      href: $setup.props.url,
      class: normalizeClass(["font-normal text-xs before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0", $setup.textStyles]),
      target: "_blank"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_2)
  ]);
}
_sfc_main$1.__file = "lib/ui/UiLinkFooter.vue";
const UiLinkFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiLinkFooter.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiLinkFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Link Footer",
    layout: {
      type: "grid",
      width: 500
    }
  }, {
    default: withCtx(() => [
      createVNode($setup["UiLinkFooter"], { url: "https://camptocamp.com" }, {
        default: withCtx(() => [
          createTextVNode("Camptocamp.com")
        ]),
        _: 1
      }, 8, ["url"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "lib/ui/UiLinkFooter.story.vue";
const UiLinkFooter_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiLinkFooter.story.vue"]]);
export {
  UiLinkFooter_story as default
};
