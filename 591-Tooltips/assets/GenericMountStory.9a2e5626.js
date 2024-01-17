import { X as defineAsyncComponent, Y as Comp6, Z as useDark, _ as useToggle, $ as markRaw, R as reactive, d as defineComponent, k as ref, a0 as watchEffect, o as openBlock, c as createBlock, m as mergeProps, a1 as resolveDynamicComponent, q as createCommentVNode } from "./vendor.cdf4b231.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/cooperation_jn_common_ui/591-Tooltips/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./LegalLink.story.2122d7f6.js"), true ? ["assets/LegalLink.story.2122d7f6.js","assets/vendor.cdf4b231.js","assets/UiLinkFooter.e04c139c.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./UiButton.story.d6c608e1.js"), true ? ["assets/UiButton.story.d6c608e1.js","assets/vendor.cdf4b231.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./UiButtonWithTooltip.story.eb93a99e.js"), true ? ["assets/UiButtonWithTooltip.story.eb93a99e.js","assets/vendor.cdf4b231.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./UiDescribeButton.story.ff34a674.js"), true ? ["assets/UiDescribeButton.story.ff34a674.js","assets/vendor.cdf4b231.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./UiIconButton.story.4673316d.js"), true ? ["assets/UiIconButton.story.4673316d.js","assets/vendor.cdf4b231.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./UiLinkFooter.story.e7569537.js"), true ? ["assets/UiLinkFooter.story.e7569537.js","assets/vendor.cdf4b231.js","assets/UiLinkFooter.e04c139c.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
let files = [
  { "id": "lib-legallink-story-vue", "path": ["Legal Links"], "filePath": "lib/LegalLink.story.vue", "story": { "id": "lib-legallink-story-vue", "title": "Legal Links", "group": null, "layout": { "type": "grid", "width": 500 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "lib-legallink-story-vue-0", "title": "Default Color", "icon": null, "iconColor": null }, { "id": "lib-legallink-story-vue-1", "title": "neutral-900", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 0, component: Comp0 },
  { "id": "lib-ui-uibutton-story-vue", "path": ["UiButton"], "filePath": "lib/ui/UiButton.story.vue", "story": { "id": "lib-ui-uibutton-story-vue", "title": "UiButton", "group": "map", "layout": { "type": "grid", "width": 300 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "lib-ui-uibutton-story-vue-0", "title": "Floating: Icon, text, notif", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-1", "title": "Floating: Icon, text", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-2", "title": "Floating: text", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-3", "title": "primary: Icon, text, notif", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-4", "title": "primary: Icon, text", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-5", "title": "primary: text", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-6", "title": "secondary: Icon, text, notif", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-7", "title": "secondary: Icon, text", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-8", "title": "secondary: text", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-9", "title": "Floating: small", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-10", "title": "Primary: small", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uibutton-story-vue-11", "title": "Secondary: small", "icon": "lucide:camera", "iconColor": null }] }, "supportPluginId": "vue3", "index": 1, component: Comp1 },
  { "id": "lib-ui-uibuttonwithtooltip-story-vue", "path": ["UiButtonWithTooltip"], "filePath": "lib/ui/UiButtonWithTooltip.story.vue", "story": { "id": "lib-ui-uibuttonwithtooltip-story-vue", "title": "UiButtonWithTooltip", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2 },
  { "id": "lib-ui-uidescribebutton-story-vue", "path": ["UiDescribeButton"], "filePath": "lib/ui/UiDescribeButton.story.vue", "story": { "id": "lib-ui-uidescribebutton-story-vue", "title": "UiDescribeButton", "group": null, "layout": { "type": "grid", "width": 500 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "lib-ui-uidescribebutton-story-vue-0", "title": "3D", "icon": null, "iconColor": null }, { "id": "lib-ui-uidescribebutton-story-vue-1", "title": "Compass", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 3, component: Comp3 },
  { "id": "lib-ui-uiiconbutton-story-vue", "path": ["UiIconButton"], "filePath": "lib/ui/UiIconButton.story.vue", "story": { "id": "lib-ui-uiiconbutton-story-vue", "title": "UiIconButton", "group": null, "layout": { "type": "grid", "width": 200 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "lib-ui-uiiconbutton-story-vue-0", "title": "untitled", "icon": null, "iconColor": null }, { "id": "lib-ui-uiiconbutton-story-vue-1", "title": "untitled", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uiiconbutton-story-vue-2", "title": "untitled", "icon": "lucide:camera", "iconColor": null }, { "id": "lib-ui-uiiconbutton-story-vue-3", "title": "untitled", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 4, component: Comp4 },
  { "id": "lib-ui-uilinkfooter-story-vue", "path": ["Link Footer"], "filePath": "lib/ui/UiLinkFooter.story.vue", "story": { "id": "lib-ui-uilinkfooter-story-vue", "title": "Link Footer", "group": null, "layout": { "type": "grid", "width": 500 }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 5, component: Comp5 },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 6, component: Comp6 }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 6 }] }, { "title": "Legal Links", "index": 0 }, { "title": "Link Footer", "index": 5 }, { "title": "UiButton", "index": 1 }, { "title": "UiButtonWithTooltip", "index": 2 }, { "title": "UiDescribeButton", "index": 3 }, { "title": "UiIconButton", "index": 4 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" } }], "outDir": "/home/runner/work/cooperation_jn_common_ui/cooperation_jn_common_ui/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "hash", "vite": { "base": "/cooperation_jn_common_ui/591-Tooltips/" }, "viteIgnorePlugins": [], "setupFile": "./histoire-setup.ts" };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.cdf4b231.js").then((n) => n.aM), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor.cdf4b231.js").then((n) => n.aN), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};
