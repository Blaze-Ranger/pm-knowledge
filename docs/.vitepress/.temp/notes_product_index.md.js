import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"产品笔记","description":"","frontmatter":{"title":"产品笔记"},"headers":[],"relativePath":"notes/product/index.md","filePath":"notes/product/index.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "notes/product/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="产品笔记" tabindex="-1">产品笔记 <a class="header-anchor" href="#产品笔记" aria-label="Permalink to &quot;产品笔记&quot;">​</a></h1><p>记录产品相关学习笔记,包括但不限于:</p><ul><li>产品思维与用户洞察</li><li>需求分析 / PRD 撰写</li><li>数据驱动决策(A/B 测试、漏斗分析)</li><li>商业模式与增长策略</li></ul><blockquote><p>这是一个分类首页,自动出现在左侧导航栏。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/product/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
