import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"标签占位文件","description":"","frontmatter":{},"headers":[],"relativePath":"tags/_placeholder.md","filePath":"tags/_placeholder.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "tags/_placeholder.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="标签占位文件" tabindex="-1">标签占位文件 <a class="header-anchor" href="#标签占位文件" aria-label="Permalink to &quot;标签占位文件&quot;">​</a></h1><blockquote><p>这个文件的存在仅为了让 <code>docs/tags/</code> 目录在首次 <code>git clone</code> 后即存在。 真正的标签页由 <code>pnpm tags:gen</code> 自动生成,生成结果在 <code>.gitignore</code> 中被忽略。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tags/_placeholder.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _placeholder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _placeholder as default
};
