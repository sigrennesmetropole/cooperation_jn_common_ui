import { _ as __vitePreload } from "./GenericMountStory.0c2e30cc.js";
import { d as defineComponent, u as useCssVars, k as ref, a5 as toRefs, a6 as useRouter, o as openBlock, l as createElementBlock, p as createVNode, w as withCtx, h as unref, I as Icon, n as normalizeClass, a as createBaseVNode, M as createTextVNode, t as toDisplayString, F as Fragment, B as renderList, c as createBlock, q as createCommentVNode, $ as markRaw, aK as useFocus, f as watch, aL as refDebounced, i as computed, K as withDirectives, a8 as vModelText, e as withKeys, D as withModifiers } from "./vendor.cdf4b231.js";
import { _ as _export_sfc, u as useScrollOnActive, o as onKeyboardShortcut, B as BaseListItemLink, a as useStoryStore } from "./bundle-main.77c82390.js";
import { B as BaseEmpty } from "./BaseEmpty.9aeb2efe.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7333f29c": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fb261e4"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"l":[0,1,2,26,27],"le":[0,1,2,26,27],"lek":[0,1,2],"leka":[0,1,2],"lekal":[0,1,2],"o":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"lem":[26,27],"lemk":[26,27],"t":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"ta":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"tal":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"talf":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"talfe":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"talfem":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"talfemt":[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]},{"lem":[0,1,2,38],"lemk":[0,1,2],"lemks":[0,1,2],"p":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,29,31,32,40,41],"po":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,31,40,41],"pot":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"poto":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"potom":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"t":[18,19,20],"te":[18,19,20,30],"tes":[18,19,20,30],"tesk":[18,19,20],"teskr":[18,19,20],"teskre":[18,19,20],"teskrep":[18,19,20],"teskrepe":[18,19,20],"e":[21,22,23,24,25,43],"ek":[21,22,23,24,25,43],"eko":[21,22,23,24,25],"ekom":[21,22,23,24,25],"f":[26,27,34,35,36,42,44],"fo":[26,27,34,35,36,44],"fot":[26,27],"fote":[26,27],"foter":[26,27],"pa":[29,32],"pak":[29],"pakr":[29],"pakro":[29],"pakrom":[29],"pakromt":[29],"test":[30],"por":[31,40,41],"port":[31,40,41],"porte":[31,40,41],"porter":[31,40,41],"pat":[32],"pate":[32],"patem":[32],"patemk":[32],"m":[33],"ma":[33],"mar":[33],"mark":[33],"marke":[33],"markem":[33],"fom":[34,35,36],"fomt":[34,35,36],"l":[37,38],"le":[37,38],"let":[37],"lete":[37],"leter":[37],"leme":[38],"tr":[39],"tro":[39],"trop":[39],"fe":[42],"fet":[42],"ekt":[43],"fol":[44]},{"t":[1,27],"te":[1,27],"tef":[1,27],"tefa":[1,27],"tefao":[1,27],"tefaol":[1,27],"tefaolt":[1,27],"m":[2],"me":[2],"meo":[2],"meot":[2],"meotr":[2],"meotra":[2],"meotral":[2],"f":[4,5,6,13,16,17,41],"fl":[4,5,6,13],"flo":[4,5,6,13],"floa":[4,5,6,13],"float":[4,5,6,13],"floate":[4,5,6,13],"floatem":[4,5,6,13],"floatemk":[4,5,6,13],"pr":[7,8,9,14],"pre":[7,8,9,14],"prem":[7,8,9,14],"prema":[7,8,9,14],"premar":[7,8,9,14],"premare":[7,8,9,14],"s":[10,11,12,15,34,37,39],"se":[10,11,12,15,34],"sek":[10,11,12,15],"seko":[10,11,12,15],"sekom":[10,11,12,15],"sekomt":[10,11,12,15],"sekomta":[10,11,12,15],"sekomtar":[10,11,12,15],"sekomtare":[10,11,12,15],"fe":[16,17,35,41],"fet":[16,17,41],"p":[18,19,20,21,22,23,24,25],"po":[18,19,20,21,22,23,24,25],"pot":[18,19,20,21,22,23,24,25],"poto":[18,19,20,21,22,23,24,25],"potom":[18,19,20,21,22,23,24,25],"k":[29,30,31,44],"ko":[29,30,31,44],"kol":[29,30,31],"kolo":[29,30,31],"kolor":[29,30,31],"ses":[34],"sese":[34],"fek":[35],"fekt":[35],"fa":[36],"fam":[36],"fame":[36],"famel":[36],"famele":[36],"sp":[37],"spa":[37],"spak":[37],"spake":[37],"spakem":[37],"spakemk":[37],"e":[38],"ek":[38],"ekt":[38],"sa":[39],"sat":[39],"sato":[39],"satof":[39],"r":[40],"ra":[40],"rat":[40],"rate":[40],"rateo":[40],"rateos":[40],"kom":[44],"komf":[44],"komfe":[44],"komfek":[44]},{"3":[19],"9":[2],"90":[2],"k":[1,20],"ko":[1,20],"kol":[1],"kolo":[1],"kolor":[1],"e":[4,5,7,8,10,11],"ek":[4,5,7,8,10,11],"eko":[4,5,7,8,10,11],"ekom":[4,5,7,8,10,11],"t":[6,9,12,16,17],"te":[6,9,12],"tes":[6,9,12],"test":[6,9,12],"s":[13,14],"sm":[13,14,15],"sma":[13,14,15],"smal":[13,14,15],"to":[16,17],"tol":[16,17],"tolt":[16,17],"tolte":[16,17],"toltep":[16,17],"3t":[19],"kom":[20],"komp":[20],"kompa":[20],"kompas":[20],"om":[22,23,24,25],"omt":[22,23,24,25],"omte":[22,23,24,25],"omtet":[22,23,24,25],"omtetl":[22,23,24,25],"omtetle":[22,23,24,25],"omtetlet":[22,23,24,25]},{"t":[4,5,7,8,10,11],"te":[4,5,7,8,10,11,17],"tes":[4,5,7,8,10,11],"test":[4,5,7,8,10,11],"tef":[17],"tefa":[17],"tefao":[17],"tefaol":[17],"tefaolt":[17]},{"m":[4,7,10],"mo":[4,7,10],"mot":[4,7,10],"mote":[4,7,10],"motef":[4,7,10]},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "lib-legallink-story-vue", "kind": "story" }, "1": { "id": "lib-legallink-story-vue:lib-legallink-story-vue-0", "kind": "variant" }, "2": { "id": "lib-legallink-story-vue:lib-legallink-story-vue-1", "kind": "variant" }, "3": { "id": "lib-ui-uibutton-story-vue", "kind": "story" }, "4": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-0", "kind": "variant" }, "5": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-1", "kind": "variant" }, "6": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-2", "kind": "variant" }, "7": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-3", "kind": "variant" }, "8": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-4", "kind": "variant" }, "9": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-5", "kind": "variant" }, "10": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-6", "kind": "variant" }, "11": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-7", "kind": "variant" }, "12": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-8", "kind": "variant" }, "13": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-9", "kind": "variant" }, "14": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-10", "kind": "variant" }, "15": { "id": "lib-ui-uibutton-story-vue:lib-ui-uibutton-story-vue-11", "kind": "variant" }, "16": { "id": "lib-ui-uibuttonwithtooltip-story-vue", "kind": "story" }, "17": { "id": "lib-ui-uibuttonwithtooltip-story-vue:_default", "kind": "variant" }, "18": { "id": "lib-ui-uidescribebutton-story-vue", "kind": "story" }, "19": { "id": "lib-ui-uidescribebutton-story-vue:lib-ui-uidescribebutton-story-vue-0", "kind": "variant" }, "20": { "id": "lib-ui-uidescribebutton-story-vue:lib-ui-uidescribebutton-story-vue-1", "kind": "variant" }, "21": { "id": "lib-ui-uiiconbutton-story-vue", "kind": "story" }, "22": { "id": "lib-ui-uiiconbutton-story-vue:lib-ui-uiiconbutton-story-vue-0", "kind": "variant" }, "23": { "id": "lib-ui-uiiconbutton-story-vue:lib-ui-uiiconbutton-story-vue-1", "kind": "variant" }, "24": { "id": "lib-ui-uiiconbutton-story-vue:lib-ui-uiiconbutton-story-vue-2", "kind": "variant" }, "25": { "id": "lib-ui-uiiconbutton-story-vue:lib-ui-uiiconbutton-story-vue-3", "kind": "variant" }, "26": { "id": "lib-ui-uilinkfooter-story-vue", "kind": "story" }, "27": { "id": "lib-ui-uilinkfooter-story-vue:_default", "kind": "variant" }, "28": { "id": "tailwind", "kind": "story" }, "29": { "id": "tailwind:background-color", "kind": "variant" }, "30": { "id": "tailwind:text-color", "kind": "variant" }, "31": { "id": "tailwind:border-color", "kind": "variant" }, "32": { "id": "tailwind:padding", "kind": "variant" }, "33": { "id": "tailwind:margin", "kind": "variant" }, "34": { "id": "tailwind:font-size", "kind": "variant" }, "35": { "id": "tailwind:font-weight", "kind": "variant" }, "36": { "id": "tailwind:font-family", "kind": "variant" }, "37": { "id": "tailwind:letter-spacing", "kind": "variant" }, "38": { "id": "tailwind:line-height", "kind": "variant" }, "39": { "id": "tailwind:drop-shadow", "kind": "variant" }, "40": { "id": "tailwind:border-radius", "kind": "variant" }, "41": { "id": "tailwind:border-width", "kind": "variant" }, "42": { "id": "tailwind:width", "kind": "variant" }, "43": { "id": "tailwind:height", "kind": "variant" }, "44": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.5678c9cc.js"), true ? ["assets/search-docs-data.5678c9cc.js","assets/vendor.cdf4b231.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new (void 0)({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
