import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"读书笔记模板","description":"一个通用的读书笔记结构模板。","frontmatter":{"title":"读书笔记模板","date":"2026-07-02T00:00:00.000Z","category":"reading","tags":["读书笔记","模板"],"description":"一个通用的读书笔记结构模板。"},"headers":[],"relativePath":"notes/reading/intro.md","filePath":"notes/reading/intro.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "notes/reading/intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="读书笔记模板" tabindex="-1">读书笔记模板 <a class="header-anchor" href="#读书笔记模板" aria-label="Permalink to &quot;读书笔记模板&quot;">​</a></h1><blockquote><p>占位笔记 — 请用真实笔记替换。</p></blockquote><h2 id="元信息" tabindex="-1">元信息 <a class="header-anchor" href="#元信息" aria-label="Permalink to &quot;元信息&quot;">​</a></h2><ul><li><strong>书名</strong>:</li><li><strong>作者</strong>:</li><li><strong>出版年</strong>:</li><li><strong>类别</strong>:</li></ul><h2 id="一句话总结" tabindex="-1">一句话总结 <a class="header-anchor" href="#一句话总结" aria-label="Permalink to &quot;一句话总结&quot;">​</a></h2><blockquote><p>用一句话告诉别人这本书在讲什么。</p></blockquote><h2 id="三个核心收获" tabindex="-1">三个核心收获 <a class="header-anchor" href="#三个核心收获" aria-label="Permalink to &quot;三个核心收获&quot;">​</a></h2><ol><li></li><li></li><li></li></ol><h2 id="最有共鸣的观点" tabindex="-1">最有共鸣的观点 <a class="header-anchor" href="#最有共鸣的观点" aria-label="Permalink to &quot;最有共鸣的观点&quot;">​</a></h2><blockquote><p>引用原文 + 自己的解读。</p></blockquote><h2 id="行动改变" tabindex="-1">行动改变 <a class="header-anchor" href="#行动改变" aria-label="Permalink to &quot;行动改变&quot;">​</a></h2><blockquote><p>读完之后,你打算做哪些不一样的事?</p></blockquote><h2 id="相关阅读" tabindex="-1">相关阅读 <a class="header-anchor" href="#相关阅读" aria-label="Permalink to &quot;相关阅读&quot;">​</a></h2><ul><li>[[other-book]]</li><li>[[some-essay]]</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/reading/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
