import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AI 笔记","description":"","frontmatter":{"title":"AI 笔记"},"headers":[],"relativePath":"notes/ai/index.md","filePath":"notes/ai/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/ai/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai-笔记" tabindex="-1">AI 笔记 <a class="header-anchor" href="#ai-笔记" aria-label="Permalink to &quot;AI 笔记&quot;">​</a></h1><p>记录人工智能相关学习笔记,包括但不限于:</p><ul><li>机器学习基础概念</li><li>LLM 应用开发(Prompt Engineering / RAG / Agent)</li><li>主流模型与 API 使用心得</li><li>AI 产品设计与工程实践</li></ul><blockquote><p>这是一个分类首页,自动出现在左侧导航栏。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/ai/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
