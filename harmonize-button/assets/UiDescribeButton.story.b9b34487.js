import { ar as defineComponent, aH as ref, az as computed, as as openBlock, at as createElementBlock, aB as renderSlot, aA as createBaseVNode, aE as createCommentVNode, ay as createBlock, av as withCtx, au as createVNode, ax as resolveComponent } from "./vendor.cdf4b231.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    const iconMultiplyBlack = new URL("/cooperation_jn_common_ui/harmonize-button/assets/icon-multiply-black.9fb2afd7.svg", self.location).href;
    const imgTriangleCornerRight = new URL("/cooperation_jn_common_ui/harmonize-button/assets/triangle-corner-right.c277bb19.svg", self.location).href;
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
const _hoisted_1$4 = {
  key: 0,
  class: "flex flex-row bg-white h-[68px] rounded py-6 px-5 justify-center items-center"
};
const _hoisted_2$3 = { class: "ml-4" };
const _hoisted_3$3 = ["src"];
const _hoisted_4$1 = ["src"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isDisplayDescribe3D && !$setup.clickClose ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "default"),
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("img", {
        src: $setup.iconMultiplyBlack,
        class: "w-4 h-4 cursor-pointer ml-auto mr-[20px]",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.close())
      }, null, 8, _hoisted_3$3)
    ]),
    createBaseVNode("img", {
      src: $setup.imgTriangleCornerRight,
      class: "w-4 h-4 -mr-[33px]"
    }, null, 8, _hoisted_4$1)
  ])) : createCommentVNode("v-if", true);
}
_sfc_main$5.__file = "lib/ui/UiDescribeButton.vue";
const UiDescribeButton = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeButton.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeButton3D",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiDescribeButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-dm-sans font-normal text-base" }, "D\xE9couvrez le mode 3D", -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiDescribeButton"], { name: "displayDescribe3D" }, {
    default: withCtx(() => [
      _hoisted_1$3
    ]),
    _: 1
  });
}
_sfc_main$4.__file = "lib/ui/UiDescribeButton3D.vue";
const UiDescribeButton3D = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeButton3D.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeCompass",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const iconMultiplyWhite = new URL("/cooperation_jn_common_ui/harmonize-button/assets/icon-multiply-white.5169131b.svg", self.location).href;
    const clickClose = ref(false);
    const close = () => {
      localStorage.setItem(props.name, "false");
      clickClose.value = true;
    };
    const isDisplayDescribe3D = computed(() => {
      return localStorage.getItem(props.name) !== "false";
    });
    const __returned__ = { props, iconMultiplyWhite, clickClose, close, isDisplayDescribe3D };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "flex flex-row bg-neutral-800 h-[124px] rounded-lg py-4 px-5 gap-[10px] justify-center items-start"
};
const _hoisted_2$2 = { class: "ml-4" };
const _hoisted_3$2 = ["src"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isDisplayDescribe3D && !$setup.clickClose ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default"),
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("img", {
        src: $setup.iconMultiplyWhite,
        class: "w-4 h-4 cursor-pointer ml-auto",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.close())
      }, null, 8, _hoisted_3$2)
    ])
  ])) : createCommentVNode("v-if", true);
}
_sfc_main$3.__file = "lib/ui/UiDescribeCompass.vue";
const UiDescribeCompass = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/ui/UiDescribeCompass.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M17.2499 0.513044L17.25 0.513C17.283 0.499795 17.3192 0.496562 17.354 0.503704C17.3888 0.510844 17.4207 0.528045 17.4459 0.553172C17.471 0.578302 17.4882 0.610253 17.4953 0.645059C17.5025 0.679876 17.4992 0.716018 17.486 0.749006L17.486 0.749115L13.4921 10.7337L13.4921 10.7337C13.243 11.3566 12.87 11.9223 12.3957 12.3967C11.9214 12.871 11.3556 13.244 10.7328 13.4931L10.7327 13.4931L0.748139 17.487L0.74803 17.487C0.715042 17.5002 0.678899 17.5034 0.644082 17.4963C0.609276 17.4892 0.577326 17.472 0.552195 17.4468C0.527068 17.4217 0.509868 17.3897 0.502727 17.3549C0.495586 17.3201 0.498819 17.284 0.512024 17.251L0.512068 17.2509L4.5059 7.2663L4.50592 7.26627C4.755 6.64342 5.12802 6.07766 5.60236 5.60333C6.07669 5.129 6.64244 4.75598 7.26529 4.50689L7.26533 4.50688L17.2499 0.513044ZM7.58531 11.1158C8.00377 11.3954 8.49574 11.5446 8.99902 11.5446C9.6739 11.5446 10.3211 11.2765 10.7983 10.7993C11.2756 10.3221 11.5436 9.67488 11.5436 9C11.5436 8.49672 11.3944 8.00474 11.1148 7.58628C10.8352 7.16782 10.4378 6.84167 9.97281 6.64907C9.50784 6.45648 8.9962 6.40609 8.50259 6.50427C8.00898 6.60246 7.55557 6.84481 7.1997 7.20068C6.84383 7.55655 6.60148 8.00996 6.50329 8.50357C6.40511 8.99718 6.4555 9.50882 6.6481 9.97378C6.84069 10.4388 7.16685 10.8362 7.58531 11.1158Z",
  stroke: "black"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
_sfc_main$2.__file = "lib/icons/IconCompass.vue";
const IconCompass = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/lib/icons/IconCompass.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiDescribeButtonCompass",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiDescribeCompass, IconCompass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col gap-2.5 text-neutral-200 font-dm-sans font-normal text-sm cursor-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row items-center" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "D\xE9placer l'icone nord"),
  /* @__PURE__ */ createBaseVNode("div", { class: "h-3 w-3 flex justify-center items-center mx-2 text-[7px] bg-black text-white border border-white rounded" }, " N "),
  /* @__PURE__ */ createBaseVNode("p", null, "pour orienter la carte")
], -1);
const _hoisted_3 = { class: "flex flex-row items-center" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Cliquer/glisser sur", -1);
const _hoisted_5 = {
  ref: "arrow",
  class: "h-9 w-9 bg-white rounded-[100%] z-10 flex justify-center items-center shadow-md mx-2"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "pour incliner la carte", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "Ctrl + cliquer/glisser sur la carte pour naviguer")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiDescribeCompass"], { name: "displayDescribeCompass" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createVNode($setup["IconCompass"])
          ], 512),
          _hoisted_6
        ]),
        _hoisted_7
      ])
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
