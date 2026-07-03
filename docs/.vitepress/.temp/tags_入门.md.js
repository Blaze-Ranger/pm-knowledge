import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"标签:入门","description":"","frontmatter":{"title":"标签:入门","permalink":"/tags/入门"},"headers":[],"relativePath":"tags/入门.md","filePath":"tags/入门.md","lastUpdated":null}');
const _sfc_main = { name: "tags/入门.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="标签-入门" tabindex="-1">标签:入门 <a class="header-anchor" href="#标签-入门" aria-label="Permalink to &quot;标签:入门&quot;">​</a></h1><p>共 <strong>1</strong> 篇笔记。</p><ul><li><a href="/pm-knowledge/notes/frontend/intro.html">VitePress 入门示例</a> <em>(2026-07-02)</em> — 用 VitePress 搭建个人博客的入门笔记,涵盖 frontmatter 与目录结构约定。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tags/入门.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};
