import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PM Knowledge","description":"","frontmatter":{"layout":"home","title":"PM Knowledge","hero":{"name":"PM Knowledge","text":"学习 & 知识管理笔记","tagline":"个人知识库 — 计算机、产品、AI、阅读的零碎思考","actions":[{"theme":"brand","text":"开始阅读","link":"/notes/frontend/intro"},{"theme":"alt","text":"GitHub 仓库","link":"https://github.com/Blaze-Ranger/pm-knowledge"}]},"features":[{"icon":"🗂️","title":"结构化笔记","details":"按分类组织的 Markdown 笔记,支持标签、全文搜索、暗/亮主题切换。"},{"icon":"💬","title":"评论 & 订阅","details":"基于 GitHub Discussions 的 Giscus 评论,加 RSS 订阅,让知识持续流动。"},{"icon":"🚀","title":"自动化部署","details":"推送到 main 触发 GitHub Actions,自动构建并发布到 GitHub Pages。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="关于本站" tabindex="-1">关于本站 <a class="header-anchor" href="#关于本站" aria-label="Permalink to &quot;关于本站&quot;">​</a></h2><p>这是一个用 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> 搭建的个人知识管理博客,目标是沉淀长期有价值的学习笔记与思考。</p><p>技术栈:VitePress + Vue 3 + TypeScript + pnpm + GitHub Actions + Giscus。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
