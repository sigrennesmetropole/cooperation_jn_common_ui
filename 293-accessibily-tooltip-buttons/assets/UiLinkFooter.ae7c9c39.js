import { ar as defineComponent, az as computed, as as openBlock, at as createElementBlock, aA as createBaseVNode, aB as renderSlot, aC as normalizeClass } from "./vendor.76bca66d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiLinkFooter",
  props: {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("p", {
      class: normalizeClass($setup.textStyles)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ]);
}
_sfc_main.__file = "lib/ui/UiLinkFooter.vue";
const UiLinkFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiLinkFooter.vue"]]);
export {
  UiLinkFooter as U
};
