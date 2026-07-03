import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"标签:prd","description":"","frontmatter":{"title":"标签:prd","permalink":"/tags/prd"},"headers":[],"relativePath":"tags/prd.md","filePath":"tags/prd.md","lastUpdated":null}');
const _sfc_main = { name: "tags/prd.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="标签-prd" tabindex="-1">标签:prd <a class="header-anchor" href="#标签-prd" aria-label="Permalink to &quot;标签:prd&quot;">​</a></h1><p>共 <strong>1</strong> 篇笔记。</p><ul><li><a href="/pm-knowledge/notes/product/intro.html">PRD 撰写清单</a> <em>(2026-07-02)</em> — 撰写产品需求文档(PRD)时的自检清单。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tags/prd.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prd = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prd as default
};
