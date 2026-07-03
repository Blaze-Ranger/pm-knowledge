import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VitePress 入门示例","description":"用 VitePress 搭建个人博客的入门笔记,涵盖 frontmatter 与目录结构约定。","frontmatter":{"title":"VitePress 入门示例","date":"2026-07-02T00:00:00.000Z","category":"frontend","tags":["vitepress","教程","入门"],"description":"用 VitePress 搭建个人博客的入门笔记,涵盖 frontmatter 与目录结构约定。"},"headers":[],"relativePath":"notes/frontend/intro.md","filePath":"notes/frontend/intro.md","lastUpdated":1783092135000}');
const _sfc_main = { name: "notes/frontend/intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vitepress-入门示例" tabindex="-1">VitePress 入门示例 <a class="header-anchor" href="#vitepress-入门示例" aria-label="Permalink to &quot;VitePress 入门示例&quot;">​</a></h1><p>这是一篇<strong>占位笔记</strong>,演示 frontmatter 与目录结构约定。</p><h2 id="frontmatter-字段说明" tabindex="-1">Frontmatter 字段说明 <a class="header-anchor" href="#frontmatter-字段说明" aria-label="Permalink to &quot;Frontmatter 字段说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>字段</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>✅</td><td>文章标题,会显示在侧边栏与页面顶部</td></tr><tr><td><code>date</code></td><td>✅</td><td>发布日期,<code>YYYY-MM-DD</code> 格式,用于排序与 RSS</td></tr><tr><td><code>category</code></td><td>✅</td><td>分类,必须与所在文件夹名一致</td></tr><tr><td><code>tags</code></td><td>⬜</td><td>标签数组,build 时自动生成 <code>/tags/&lt;slug&gt;/</code> 索引页</td></tr><tr><td><code>description</code></td><td>⬜</td><td>一句话描述,用于 RSS 和 SEO</td></tr></tbody></table><h2 id="添加新笔记的步骤" tabindex="-1">添加新笔记的步骤 <a class="header-anchor" href="#添加新笔记的步骤" aria-label="Permalink to &quot;添加新笔记的步骤&quot;">​</a></h2><ol><li>在 <code>docs/notes/&lt;分类&gt;/</code> 下新建 <code>&lt;slug&gt;.md</code></li><li>复制上面的 frontmatter 模板</li><li>填写 <code>title</code> / <code>date</code> / <code>category</code></li><li>(可选)填写 <code>tags</code> 与 <code>description</code></li><li><code>git add &amp;&amp; git commit &amp;&amp; git push</code> → 自动部署</li></ol><h2 id="删除本笔记" tabindex="-1">删除本笔记 <a class="header-anchor" href="#删除本笔记" aria-label="Permalink to &quot;删除本笔记&quot;">​</a></h2><p>当你写好第一篇真正的笔记后,可以删除这个 <code>placeholder.md</code>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/frontend/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
