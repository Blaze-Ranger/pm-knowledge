import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PRD 撰写清单","description":"撰写产品需求文档(PRD)时的自检清单。","frontmatter":{"title":"PRD 撰写清单","date":"2026-07-02T00:00:00.000Z","category":"product","tags":["prd","方法论","清单"],"description":"撰写产品需求文档(PRD)时的自检清单。"},"headers":[],"relativePath":"notes/product/intro.md","filePath":"notes/product/intro.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "notes/product/intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="prd-撰写清单" tabindex="-1">PRD 撰写清单 <a class="header-anchor" href="#prd-撰写清单" aria-label="Permalink to &quot;PRD 撰写清单&quot;">​</a></h1><blockquote><p>占位笔记 — 请用真实笔记替换。</p></blockquote><h2 id="一、需求背景" tabindex="-1">一、需求背景 <a class="header-anchor" href="#一、需求背景" aria-label="Permalink to &quot;一、需求背景&quot;">​</a></h2><ul><li>[ ] 解决了谁的问题?</li><li>[ ] 当前的痛点与机会成本是什么?</li><li>[ ] 不做的代价是什么?</li></ul><h2 id="二、用户与场景" tabindex="-1">二、用户与场景 <a class="header-anchor" href="#二、用户与场景" aria-label="Permalink to &quot;二、用户与场景&quot;">​</a></h2><ul><li>[ ] 核心用户画像(年龄/职业/使用频次)</li><li>[ ] 关键使用场景(时间/地点/触发条件)</li><li>[ ] 用户的预期目标与情绪曲线</li></ul><h2 id="三、需求范围" tabindex="-1">三、需求范围 <a class="header-anchor" href="#三、需求范围" aria-label="Permalink to &quot;三、需求范围&quot;">​</a></h2><ul><li>[ ] MVP(必须做)</li><li>[ ] 增强(应该做)</li><li>[ ] 锦上添花(可以做)</li><li>[ ] 不做(明确排除)</li></ul><h2 id="四、方案设计" tabindex="-1">四、方案设计 <a class="header-anchor" href="#四、方案设计" aria-label="Permalink to &quot;四、方案设计&quot;">​</a></h2><ul><li>[ ] 信息架构与流程图</li><li>[ ] 关键页面线框</li><li>[ ] 边界情况与异常流</li></ul><h2 id="五、衡量指标" tabindex="-1">五、衡量指标 <a class="header-anchor" href="#五、衡量指标" aria-label="Permalink to &quot;五、衡量指标&quot;">​</a></h2><ul><li>[ ] 北极星指标</li><li>[ ] 过程指标(激活、转化、留存)</li><li>[ ] 上线后的回顾计划</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/product/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
