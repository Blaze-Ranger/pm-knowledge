---
title: Prompt Engineering 速查
date: 2026-07-02
category: ai
tags:
  - llm
  - prompt
  - 速查
description: Prompt 编写的常用模式与反模式速查清单。
---

# Prompt Engineering 速查

> 占位笔记 — 请用真实笔记替换。

## 常用模式

1. **角色设定**:赋予模型明确角色(如"你是一位资深前端工程师")
2. **Few-shot**:给出 2-3 个输入-输出示例
3. **结构化输出**:明确要求 JSON / 表格 / Markdown 格式
4. **思维链**:让模型"先思考,再回答"
5. **约束与边界**:声明不可做的事、字数限制、风格要求

## 反模式

- ❌ 模糊指令:"帮我优化一下这段代码"
- ✅ 明确指令:"把下面这段 React 组件用 useMemo 优化列表渲染性能,保持 API 不变"