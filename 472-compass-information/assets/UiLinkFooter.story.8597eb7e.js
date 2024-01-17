import { ar as defineComponent, ax as resolveComponent, ay as createBlock, av as withCtx, as as openBlock, au as createVNode, aw as createTextVNode } from "./vendor.76bca66d.js";
import { U as UiLinkFooter } from "./UiLinkFooter.ae7c9c39.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
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
