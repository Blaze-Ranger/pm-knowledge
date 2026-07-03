# PM Knowledge

> 个人知识管理博客 — VitePress + GitHub Pages

一个用 [VitePress](https://vitepress.dev/) 搭建的个人学习笔记 / 知识管理站点。
暗色优先、青/品红配色的克制科技感主题,支持全文搜索、RSS、标签系统、Giscus 评论,推送即部署。

- 🚀 **站点**:<https://Blaze-Ranger.github.io/pm-knowledge/>
- 📦 **仓库**:<https://github.com/Blaze-Ranger/pm-knowledge>
- 💬 **评论**:GitHub Discussions via [Giscus](https://giscus.app)
- 📡 **RSS**:[/feed.rss](https://Blaze-Ranger.github.io/pm-knowledge/feed.rss)

---

## 目录结构

```
pm-knowledge/
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts              # 站点配置(导航、侧边栏、搜索、RSS、SEO)
│   │   ├── rewrites.generated.ts  # 自动生成(标签页路由映射)
│   │   └── theme/
│   │       ├── index.ts           # 主题入口(继承默认主题)
│   │       ├── style.css          # 科技感配色 + 网格背景
│   │       ├── Layout.vue         # 自定义布局(挂载 Giscus)
│   │       └── components/
│   │           └── Giscus.vue     # 评论组件
│   ├── public/
│   │   ├── .nojekyll              # 关键:禁用 GitHub Pages 的 Jekyll
│   │   └── logo.svg               # 站点 logo
│   ├── index.md                   # 首页
│   ├── notes/                     # 笔记(按分类组织)
│   │   ├── frontend/
│   │   ├── ai/
│   │   ├── product/
│   │   └── reading/
│   └── tags/                      # 标签页(由脚本自动生成)
├── scripts/
│   └── generate-tags.ts           # 标签页生成器
├── package.json
├── tsconfig.json
├── .nvmrc                         # Node 20
└── README.md                      # 你正在读的这份文档
```

---

## 快速开始

### 前置要求

- **Node.js 20+**(推荐用 [nvm](https://github.com/nvm-sh/nvm) 管理:`nvm use`)
- **pnpm 9+**(`npm i -g pnpm` 或 `corepack enable`)

### 本地预览

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器(带热更新)
pnpm docs:dev
# → 打开 http://localhost:5173/

# 3. 生产构建并预览
pnpm docs:build
pnpm docs:preview

# 如需在本地根路径预览生产包
pnpm docs:build:local
pnpm docs:preview:local
```

### 第一次部署到 GitHub

1. **在 GitHub 上创建仓库**,仓库名必须为 `pm-knowledge`(或同步修改 `vitepress/config.ts` 中的 `base` 字段)。
2. **关联远程并推送**:
   ```bash
   git remote add origin git@github.com:Blaze-Ranger/pm-knowledge.git
   git add .
   git commit -m "feat: initial vitepress scaffold"
   git push -u origin main
   ```
3. **配置 GitHub Pages**:
   - 进入仓库 → **Settings** → **Pages**
   - **Source** 选 **"GitHub Actions"**(⚠️ 不是 "Deploy from a branch")
   - **Settings** → **Actions** → **General** → **Workflow permissions** 选 **"Read and write permissions"**
4. 等待 Actions 跑完(约 1-2 分钟),访问 <https://Blaze-Ranger.github.io/pm-knowledge/>

> 部署前请全局搜索 `Blaze-Ranger` 替换为你的真实 GitHub 用户名(共 4 处:`config.ts`、`index.md`、`Giscus.vue`、`README.md`)。

---

## 日常维护

### 写一篇新笔记

```bash
# 1. 在对应分类下新建 .md 文件
touch docs/notes/frontend/my-new-note.md
```

文件内容模板:

```markdown
---
title: 我的新笔记
date: 2026-07-02
category: frontend
tags:
  - react
  - hooks
description: 一句话描述(用于 RSS 和 SEO)
---

# 我的新笔记

正文 ...
```

提交:

```bash
git add .
git commit -m "docs(frontend): add my-new-note"
git push
```

✅ 1-2 分钟后会自动部署到线上。

### 新增一个分类

```bash
mkdir -p docs/notes/<新分类名>
touch docs/notes/<新分类名>/index.md
```

在 `index.md` 写分类首页简介。侧边栏会自动识别。

### 新增一个标签

只需在笔记的 frontmatter 中加:

```yaml
tags: [react, hooks]
```

`pnpm docs:build`(本地)或 push(CI)时会自动:

- 生成 `/tags/<slug>/` 索引页
- 更新 `/tags/` 总览页
- 更新 `docs/.vitepress/rewrites.generated.ts`

无需手动建文件。

### 修改主题样式

编辑 `docs/.vitepress/theme/style.css`,所有 CSS 变量都集中在文件顶部,可改:

- `--vp-c-brand-1/2/3`:主品牌色(默认青色 `#00d9ff`)
- `--vp-c-note-1`:副色(默认紫红 `#b48ead`)
- 暗色调色板在 `.dark { ... }` 中

保存后 `pnpm docs:dev` 会热更新。

### 删除一篇笔记

```bash
git rm docs/notes/frontend/old-note.md
git commit -m "docs: remove old-note"
git push
```

---

## 配置 Giscus 评论系统

> 评论系统依赖 GitHub Discussions,**仅在你想要评论功能时**才需要配置;不配置也不会影响站点运行,只会显示一个"评论未配置"的占位提示。

### 1. 启用 Discussions

仓库 → **Settings** → **General** → **Features** → 勾选 ✅ **Discussions**

### 2. 安装 Giscus App

访问 <https://github.com/apps/giscus> → **Install** → 授权给 `pm-knowledge` 仓库。

### 3. 创建 Discussion 分类

**Discussions** 标签页 → **New category**(例:"Comments / 评论")。记录分类名(英文)。

### 4. 获取 repoId 与 categoryId

打开 <https://giscus.app/>(配置生成器),填:

- **仓库**:`Blaze-Ranger/pm-knowledge`
- **页面 ↔ Discussion 映射**:`pathname`
- **Discussion 分类**:选你刚才创建的
- **特性**:启用 Reactions,关闭 Metadata
- **主题**:`light` 和 `dark`

点 **Generate**,从生成的 `<script>` 标签中拷贝:

- `data-repo-id`(以 `R_kgDO` 开头)
- `data-category-id`(以 `DIC_kwDO` 开头)

### 5. 填入代码

编辑 `docs/.vitepress/theme/components/Giscus.vue`,替换四个值:

```ts
const GISCUS_REPO = 'Blaze-Ranger/pm-knowledge' // ← 改成真实路径
const GISCUS_REPO_ID = 'R_kgDOxxxxxxxx'             // ← 从 giscus.app 拷贝
const GISCUS_CATEGORY = 'Comments'                  // ← 你创建的分类名
const GISCUS_CATEGORY_ID = 'DIC_kwDOxxxxxxxx'       // ← 从 giscus.app 拷贝
```

提交并推送,Giscus 评论框就会出现在每篇笔记底部。

### 验证 Giscus(三种状态)

| 状态 | 表现 |
|---|---|
| 占位符未替换 | 显示"评论系统尚未配置完成"提示 ✅ 槽位已挂载 |
| ID 错误 | 浏览器控制台报错,但 iframe 仍渲染 ✅ 槽位挂载正常 |
| ID 正确 | 评论框出现并可发帖 ✅ |

---

## 故障排查(Troubleshooting)

### ❌ 部署后页面 CSS / JS 404

**原因**:`base` 路径不对。

**修复**:`docs/.vitepress/config.ts` 中的 `base: '/pm-knowledge/'` 必须与 GitHub 仓库名完全一致。

### ❌ Failed to load module script / MIME type 为 text/html

**原因**:用静态服务器直接从 `docs/.vitepress/dist` 根路径预览了生产包,但生产包里的资源路径是 `/pm-knowledge/assets/...`。服务器找不到这个 JS 文件时回退到 `index.html`,浏览器就会把 HTML 当成模块脚本加载。

**修复**:本地开发用 `pnpm docs:dev` 并打开 `http://localhost:5173/`。若要预览 GitHub Pages 生产包,用 `pnpm docs:preview` 并打开预览地址里的 `/pm-knowledge/`;若要在本地根路径预览生产包,用 `pnpm docs:build:local && pnpm docs:preview:local`。

### ❌ 部署后整页 404

**原因**:仓库 Settings → Pages → Source 选成了 "Deploy from a branch"。

**修复**:改成 **"GitHub Actions"**。

### ❌ 评论框不出现

打开浏览器 DevTools → Console,看 Giscus iframe 报错。

**常见原因**:
- `repoId` / `categoryId` 填错
- 没在仓库安装 Giscus App
- Discussions 未启用

### ❌ 标签页 404

**原因**:本地 `pnpm docs:build` 时忘了 `pnpm tags:gen`(CI 已自动处理)。

**修复**:本地手动跑一次 `pnpm tags:gen && pnpm docs:build`,或直接 push 让 CI 处理。

### ❌ 部署后页面样式异常 / 字体没有

清缓存重试:

```bash
rm -rf docs/.vitepress/cache docs/.vitepress/dist
pnpm docs:build
```

### ❌ `pnpm install` 失败

确认 Node 版本 ≥ 20:

```bash
node -v   # 应该 v20.x 或 v22.x
nvm use    # 自动读取 .nvmrc
```

---

## RSS / Sitemap / SEO

| 资源 | 路径 | 说明 |
|---|---|---|
| RSS | `/feed.rss` | 由 `vitepress-plugin-rss` 在 build 后生成 |
| Sitemap | `/sitemap.xml` | VitePress 内置 sitemap |
| OG 元数据 | `<head>` 中 | 改 `config.ts.head` 即可 |

---

## Roadmap(后续可加)

- [ ] **CJK 增强搜索**:换 `vitepress-plugin-search`(MiniSearch),中文分词更准
- [ ] **双向链接**:支持 Obsidian 风格 `[[wikilink]]` 与反链面板
- [ ] **知识图谱**:`vitepress-plugin-graph` 可视化笔记关系
- [ ] **i18n**:中英双语切换
- [ ] **Mermaid 图表**:`vitepress-plugin-mermaid`
- [ ] **CMS**:Decap / TinaCMS 让非 Markdown 用户也能编辑
- [ ] **Algolia DocSearch**:对开源项目免费,搜索质量更高
- [ ] **自定义域名**:把 `CNAME` 丢进 `docs/public/`,Settings → Pages 设置 Custom domain

---

## 许可

本仓库的代码(主题、脚本、配置)以 [MIT](./LICENSE) 许可发布。
笔记内容的版权归属作者本人。
