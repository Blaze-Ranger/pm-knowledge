import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"阅读笔记","description":"","frontmatter":{"title":"阅读笔记"},"headers":[],"relativePath":"notes/reading/index.md","filePath":"notes/reading/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/reading/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="阅读笔记" tabindex="-1">阅读笔记 <a class="header-anchor" href="#阅读笔记" aria-label="Permalink to &quot;阅读笔记&quot;">​</a></h1><p>记录读书笔记与读后感,包括但不限于:</p><ul><li>技术书评</li><li>产品/商业书籍摘要</li><li>思维方式与人文社科</li><li>论文与长文摘录</li></ul><blockquote><p>这是一个分类首页,自动出现在左侧导航栏。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/reading/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
