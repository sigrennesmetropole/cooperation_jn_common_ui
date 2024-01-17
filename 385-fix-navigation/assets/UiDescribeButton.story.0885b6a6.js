import { ar as defineComponent, aD as ref, az as computed, as as openBlock, at as createElementBlock, aB as renderSlot, aA as createBaseVNode, aG as createCommentVNode, ay as createBlock, av as withCtx, ax as resolveComponent, au as createVNode } from "./vendor.76bca66d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeButton",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const iconMultiplyBlack = new URL("/cooperation_jn_common_ui/385-fix-navigation/assets/icon-multiply-black.9fb2afd7.svg", self.location).href;
    const imgTriangleCornerRight = new URL("/cooperation_jn_common_ui/385-fix-navigation/assets/triangle-corner-right.c277bb19.svg", self.location).href;
    const clickClose = ref(false);
    const close = () => {
      localStorage.setItem(props.name, "false");
      clickClose.value = true;
    };
    const isDisplayDescribe3D = computed(() => {
      return localStorage.getItem(props.name) !== "false";
    });
    const __returned__ = { props, iconMultiplyBlack, imgTriangleCornerRight, clickClose, close, isDisplayDescribe3D };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "flex flex-row bg-white h-[68px] rounded py-6 px-5 justify-center items-center"
};
const _hoisted_2$1 = { class: "ml-4" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = ["src"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isDisplayDescribe3D && !$setup.clickClose ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default"),
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("img", {
        src: $setup.iconMultiplyBlack,
        class: "w-4 h-4 cursor-pointer ml-auto mr-[20px]",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.close())
      }, null, 8, _hoisted_3$1)
    ]),
    createBaseVNode("img", {
      src: $setup.imgTriangleCornerRight,
      class: "w-4 h-4 -mr-[33px]"
    }, null, 8, _hoisted_4$1)
  ])) : createCommentVNode("v-if", true);
}
_sfc_main$3.__file = "lib/ui/UiDescribeButton.vue";
const UiDescribeButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeButton.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeButton3D",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiDescribeButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans font-normal text-base" }, "D\xE9couvrez le mode 3D", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiDescribeButton"], { name: "displayDescribe3D" }, {
    default: withCtx(() => [
      _hoisted_1$1
    ]),
    _: 1
  });
}
_sfc_main$2.__file = "lib/ui/UiDescribeButton3D.vue";
const UiDescribeButton3D = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeButton3D.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeButtonCompass",
  setup(__props, { expose }) {
    expose();
    const imgTilt = new URL("/cooperation_jn_common_ui/385-fix-navigation/assets/tilt.71fe043a.svg", self.location).href;
    const imgOrient = new URL("/cooperation_jn_common_ui/385-fix-navigation/assets/orient.833d9b12.svg", self.location).href;
    const __returned__ = { imgTilt, imgOrient, UiDescribeButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans font-normal text-base" }, "Cliquer et glisser", -1);
const _hoisted_2 = ["src"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans text-sm font-normal ml-1" }, "Incliner", -1);
const _hoisted_4 = ["src"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans text-sm font-normal ml-1 mr-3" }, "Orienter", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiDescribeButton"], { name: "displayDescribeCompass" }, {
    default: withCtx(() => [
      _hoisted_1,
      createBaseVNode("img", {
        src: $setup.imgTilt,
        class: "w-4 h-[50px] cursor-pointer ml-4"
      }, null, 8, _hoisted_2),
      _hoisted_3,
      createBaseVNode("img", {
        src: $setup.imgOrient,
        class: "w-[50px] h-[50px] cursor-pointer ml-4"
      }, null, 8, _hoisted_4),
      _hoisted_5
    ]),
    _: 1
  });
}
_sfc_main$1.__file = "lib/ui/UiDescribeButtonCompass.vue";
const UiDescribeButtonCompass = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeButtonCompass.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeButton.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiDescribeButton3D, UiDescribeButtonCompass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiDescribeButton",
    layout: {
      type: "grid",
      width: 500
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "3D" }, {
        default: withCtx(() => [
          createVNode($setup["UiDescribeButton3D"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Compass" }, {
        default: withCtx(() => [
          createVNode($setup["UiDescribeButtonCompass"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "lib/ui/UiDescribeButton.story.vue";
const UiDescribeButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeButton.story.vue"]]);
export {
  UiDescribeButton_story as default
};
