---
title: VitePress 入门示例
date: 2026-07-02
category: frontend
tags:
  - vitepress
  - 教程
  - 入门
description: 用 VitePress 搭建个人博客的入门笔记,涵盖 frontmatter 与目录结构约定。
---

# VitePress 入门示例

这是一篇**占位笔记**,演示 frontmatter 与目录结构约定。

## Frontmatter 字段说明

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | ✅ | 文章标题,会显示在侧边栏与页面顶部 |
| `date` | ✅ | 发布日期,`YYYY-MM-DD` 格式,用于排序与 RSS |
| `category` | ✅ | 分类,必须与所在文件夹名一致 |
| `tags` | ⬜ | 标签数组,build 时自动生成 `/tags/<slug>/` 索引页 |
| `description` | ⬜ | 一句话描述,用于 RSS 和 SEO |

## 添加新笔记的步骤

1. 在 `docs/notes/<分类>/` 下新建 `<slug>.md`
2. 复制上面的 frontmatter 模板
3. 填写 `title` / `date` / `category`
4. (可选)填写 `tags` 与 `description`
5. `git add && git commit && git push` → 自动部署

## 删除本笔记

当你写好第一篇真正的笔记后,可以删除这个 `placeholder.md`。