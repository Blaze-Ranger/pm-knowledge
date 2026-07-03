import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"全部标签","description":"","frontmatter":{"title":"全部标签","permalink":"/tags/"},"headers":[],"relativePath":"tags/index.md","filePath":"tags/index.md","lastUpdated":null}');
const _sfc_main = { name: "tags/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="全部标签" tabindex="-1">全部标签 <a class="header-anchor" href="#全部标签" aria-label="Permalink to &quot;全部标签&quot;">​</a></h1><ul><li><a href="/pm-knowledge/tags/llm.html">llm</a> — 1 篇</li><li><a href="/pm-knowledge/tags/prompt.html">prompt</a> — 1 篇</li><li><a href="/pm-knowledge/tags/速查.html">速查</a> — 1 篇</li><li><a href="/pm-knowledge/tags/vitepress.html">vitepress</a> — 1 篇</li><li><a href="/pm-knowledge/tags/教程.html">教程</a> — 1 篇</li><li><a href="/pm-knowledge/tags/入门.html">入门</a> — 1 篇</li><li><a href="/pm-knowledge/tags/读书笔记.html">读书笔记</a> — 1 篇</li><li><a href="/pm-knowledge/tags/模板.html">模板</a> — 1 篇</li><li><a href="/pm-knowledge/tags/prd.html">prd</a> — 1 篇</li><li><a href="/pm-knowledge/tags/方法论.html">方法论</a> — 1 篇</li><li><a href="/pm-knowledge/tags/清单.html">清单</a> — 1 篇</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tags/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
