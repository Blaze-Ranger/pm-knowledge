import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Prompt Engineering 速查","description":"Prompt 编写的常用模式与反模式速查清单。","frontmatter":{"title":"Prompt Engineering 速查","date":"2026-07-02T00:00:00.000Z","category":"ai","tags":["llm","prompt","速查"],"description":"Prompt 编写的常用模式与反模式速查清单。"},"headers":[],"relativePath":"notes/ai/intro.md","filePath":"notes/ai/intro.md","lastUpdated":null}');
const _sfc_main = { name: "notes/ai/intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="prompt-engineering-速查" tabindex="-1">Prompt Engineering 速查 <a class="header-anchor" href="#prompt-engineering-速查" aria-label="Permalink to &quot;Prompt Engineering 速查&quot;">​</a></h1><blockquote><p>占位笔记 — 请用真实笔记替换。</p></blockquote><h2 id="常用模式" tabindex="-1">常用模式 <a class="header-anchor" href="#常用模式" aria-label="Permalink to &quot;常用模式&quot;">​</a></h2><ol><li><strong>角色设定</strong>:赋予模型明确角色(如&quot;你是一位资深前端工程师&quot;)</li><li><strong>Few-shot</strong>:给出 2-3 个输入-输出示例</li><li><strong>结构化输出</strong>:明确要求 JSON / 表格 / Markdown 格式</li><li><strong>思维链</strong>:让模型&quot;先思考,再回答&quot;</li><li><strong>约束与边界</strong>:声明不可做的事、字数限制、风格要求</li></ol><h2 id="反模式" tabindex="-1">反模式 <a class="header-anchor" href="#反模式" aria-label="Permalink to &quot;反模式&quot;">​</a></h2><ul><li>❌ 模糊指令:&quot;帮我优化一下这段代码&quot;</li><li>✅ 明确指令:&quot;把下面这段 React 组件用 useMemo 优化列表渲染性能,保持 API 不变&quot;</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/ai/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
