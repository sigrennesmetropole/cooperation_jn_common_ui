import { ar as defineComponent, aH as ref, az as computed, as as openBlock, at as createElementBlock, aA as createBaseVNode, aC as normalizeClass, aI as normalizeStyle, aF as toDisplayString, aB as renderSlot, aE as createCommentVNode, aJ as Fragment, ax as resolveComponent, ay as createBlock, av as withCtx, au as createVNode } from "./vendor.cdf4b231.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiButtonWithTooltip",
  props: {
    text: String,
    widthButton: String,
    zIndex: {
      type: String,
      default: "z-10"
    },
    heightButton: {
      type: String,
      default: "12"
    },
    widthBoxText: String,
    positionRight: {
      type: String,
      default: "16px"
    },
    positionTop: {
      type: String,
      default: "16px"
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const iconTooltip = new URL("/cooperation_jn_common_ui/toggle-button/assets/icon-tooltip.5d977548.svg", self.location).href;
    const iconTooltipRed = new URL("/cooperation_jn_common_ui/toggle-button/assets/icon-tooltip-red.23db0a98.svg", self.location).href;
    const displayTooltip = ref(false);
    const classDimensionButton = computed(() => {
      return "w-" + props.widthButton + " h-" + props.heightButton;
    });
    const stylePositionButton = computed(() => {
      const positionTop = "top: " + props.positionTop + ";";
      const positionRight = "right: " + props.positionRight + ";";
      return positionTop + " " + positionRight;
    });
    const stylePositionText = computed(() => {
      const propsPosTop = parseInt(props.positionTop.replace("px", "")) + 8;
      const positionTop = "top: " + (parseInt(props.heightButton) * 4 + propsPosTop) + "px;";
      const positionRight = "right: " + props.positionRight + ";";
      return positionTop + " " + positionRight;
    });
    const style = props.widthBoxText + " " + props.zIndex;
    const __returned__ = { iconTooltip, iconTooltipRed, props, displayTooltip, classDimensionButton, stylePositionButton, stylePositionText, style };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["aria-label"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "bg-neutral-800 opacity-80 p-2 gap-3 rounded" };
const _hoisted_5 = {
  key: 0,
  class: "text-sm font-normal text-neutral-200"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: "absolute z-10",
      style: normalizeStyle($setup.stylePositionButton)
    }, [
      createBaseVNode("button", {
        class: normalizeClass(["bg-white rounded-lg flex items-center justify-center cursor-pointer", $setup.classDimensionButton]),
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.displayTooltip = !$setup.displayTooltip),
        "aria-label": "Contenu tooltip:" + $setup.props.text
      }, [
        !$setup.displayTooltip ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $setup.iconTooltip,
          class: "w-5 h-5"
        }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("img", {
          key: 1,
          src: $setup.iconTooltipRed,
          class: "w-5 h-5"
        }, null, 8, _hoisted_3))
      ], 10, _hoisted_1)
    ], 4),
    $setup.displayTooltip ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["absolute", $setup.style]),
      style: normalizeStyle($setup.stylePositionText)
    }, [
      createBaseVNode("div", _hoisted_4, [
        $setup.props.text !== "" ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString($setup.props.text), 1)) : renderSlot(_ctx.$slots, "default", { key: 1 })
      ])
    ], 4)) : createCommentVNode("v-if", true)
  ], 64);
}
_sfc_main$1.__file = "lib/ui/UiButtonWithTooltip.vue";
const UiButtonWithTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiButtonWithTooltip.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiButtonWithTooltip.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiButtonWithTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "UiButtonWithTooltip" }, {
    default: withCtx(() => [
      createVNode($setup["UiButtonWithTooltip"], {
        widthButton: "4",
        heightButton: "4",
        text: "La surface favorable correspond \xE0 un potentiel sup\xE9rieur \xE0 1200 kWh/m2/an.",
        widthBoxText: "w-[300px]"
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "lib/ui/UiButtonWithTooltip.story.vue";
const UiButtonWithTooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiButtonWithTooltip.story.vue"]]);
export {
  UiButtonWithTooltip_story as default
};
