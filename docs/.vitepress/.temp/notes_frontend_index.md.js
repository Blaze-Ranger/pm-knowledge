import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"前端笔记","description":"","frontmatter":{"title":"前端笔记"},"headers":[],"relativePath":"notes/frontend/index.md","filePath":"notes/frontend/index.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "notes/frontend/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="前端笔记" tabindex="-1">前端笔记 <a class="header-anchor" href="#前端笔记" aria-label="Permalink to &quot;前端笔记&quot;">​</a></h1><p>记录前端开发相关学习笔记,包括但不限于:</p><ul><li>HTML / CSS / JavaScript 基础</li><li>主流框架(React / Vue / Svelte)</li><li>工程化(Webpack / Vite / 性能优化)</li><li>TypeScript 类型体操</li><li>浏览器原理与网络协议</li></ul><blockquote><p>这是一个分类首页,自动出现在左侧导航栏。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/frontend/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
