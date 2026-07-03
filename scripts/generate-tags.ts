/**
 * generate-tags.ts
 * ------------------------------------------------------------
 * 扫描 docs/notes 下所有 Markdown 文件的 frontmatter,聚合所有 tags,
 * 为每个标签生成一个 docs/tags/<slug>.md 索引页(包含所有引用该标签的笔记链接),
 * 同时把 rewrites 映射写入 docs/.vitepress/rewrites.generated.ts,
 * 供 docs/.vitepress/config.ts 在 rewrites 字段中引用。
 *
 * 运行:pnpm tags:gen
 * 设计为幂等:每次运行都会重写所有标签页与 rewrites 文件。
 * ------------------------------------------------------------
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname, relative, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DOCS_DIR = resolve(ROOT, 'docs')
const TAGS_DIR = resolve(DOCS_DIR, 'tags')
const REWRITES_FILE = resolve(DOCS_DIR, '.vitepress', 'rewrites.generated.ts')

// ------------------------------------------------------------------
// 工具函数
// ------------------------------------------------------------------

/** 将中文/英文混合标签转为 URL 安全的 slug */
function slugify(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\p{L}\p{N}\-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * 极简 frontmatter 解析器:只识别
 *   key: value
 *   tags: [a, b]
 *   tags:
 *     - a
 *     - b
 * 不引入 gray-matter 等依赖,降低 v1 复杂度。
 * 已知限制:不支持嵌套对象 / 多行字符串 / 注释。够用即可。
 */
function parseFrontmatter(source: string): Record<string, unknown> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const body = match[1]
  const result: Record<string, unknown> = {}

  // 处理数组形式:tags: [a, b, c]
  const arrayInline = body.match(/^([\w-]+):\s*\[(.*?)\]\s*$/gm)
  if (arrayInline) {
    for (const line of arrayInline) {
      const [, key, raw] = line.match(/^([\w-]+):\s*\[(.*?)\]\s*$/)!
      const items = raw
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
      result[key] = items
    }
  }

  // 处理多行数组:tags:\n  - a\n  - b
  const multilineArray = body.match(/^([\w-]+):\s*\n((?:\s*-\s+.+\n?)+)/gm)
  if (multilineArray) {
    for (const block of multilineArray) {
      const [, key, listBlock] = block.match(/^([\w-]+):\s*\n((?:\s*-\s+.+\n?)+)/)!
      const items = listBlock
        .split(/\n/)
        .map((line) => line.match(/^\s*-\s+(.+)$/)?.[1]?.trim().replace(/^['"]|['"]$/g, ''))
        .filter((x): x is string => Boolean(x))
      if (!result[key]) result[key] = items
    }
  }

  // 处理标量形式:title: xxx  /  date: yyyy-mm-dd  /  description: xxx
  const scalar = body.match(/^([\w-]+):\s*(.+?)\s*$/gm)
  if (scalar) {
    for (const line of scalar) {
      const [, key, raw] = line.match(/^([\w-]+):\s*(.+?)\s*$/)!
      if (result[key] !== undefined) continue
      let value: string | number = raw.replace(/^['"]|['"]$/g, '')
      if (key === 'date') {
        const t = Date.parse(value)
        if (!Number.isNaN(t)) value = t
      }
      result[key] = value
    }
  }

  return result
}

interface Note {
  absPath: string
  relPath: string // 相对 docs/notes/ 的路径,如 'frontend/placeholder.md'
  title: string
  date: number // timestamp ms;用于排序,缺失则置 0
  description: string
  tags: string[]
}

async function loadNotes(): Promise<Note[]> {
  const files = await fg(['notes/**/*.md'], {
    cwd: DOCS_DIR,
    absolute: true,
    ignore: ['**/index.md'] // 分类首页不作为笔记
  })

  const notes: Note[] = []
  for (const absPath of files) {
    const raw = await readFile(absPath, 'utf8')
    const fm = parseFrontmatter(raw)
    const tags = Array.isArray(fm.tags) ? (fm.tags as string[]) : []
    const relPath = relative(resolve(DOCS_DIR, 'notes'), absPath)
    notes.push({
      absPath,
      relPath,
      title: (fm.title as string) ?? basename(relPath, '.md'),
      date: typeof fm.date === 'number' ? (fm.date as number) : 0,
      description: (fm.description as string) ?? '',
      tags
    })
  }
  // 按日期倒序
  notes.sort((a, b) => b.date - a.date)
  return notes
}

// ------------------------------------------------------------------
// 主流程
// ------------------------------------------------------------------

async function main() {
  await mkdir(TAGS_DIR, { recursive: true })

  const notes = await loadNotes()
  const tagMap = new Map<string, Note[]>() // slug -> notes

  for (const note of notes) {
    for (const rawTag of note.tags) {
      const slug = slugify(rawTag)
      if (!slug) continue
      const list = tagMap.get(slug) ?? []
      list.push(note)
      tagMap.set(slug, list)
    }
  }

  // 生成每个标签的索引页
  for (const [slug, items] of tagMap) {
    // 标签原始展示名:取第一个引用它的笔记里出现的原始字符串
    const original = items
      .flatMap((n) => n.tags)
      .find((t) => slugify(t) === slug) ?? slug

    const itemsMd = items
      .map((n) => {
        const d = n.date ? new Date(n.date).toISOString().slice(0, 10) : ''
        const desc = n.description ? ` — ${n.description}` : ''
        const link = `/notes/${n.relPath.replace(/\.md$/, '')}`
        return `- [${n.title}](${link})${d ? ` *(${d})*` : ''}${desc}`
      })
      .join('\n')

    const fileBody = `---
title: 标签:${original}
permalink: /tags/${slug}
---

# 标签:${original}

共 **${items.length}** 篇笔记。

${itemsMd}
`

    await writeFile(resolve(TAGS_DIR, `${slug}.md`), fileBody, 'utf8')
  }

  // 同步生成 /tags/ 总览页(列出所有标签)
  const overviewEntries = Array.from(tagMap.entries())
    .map(([slug, items]) => {
      const original = items
        .flatMap((n) => n.tags)
        .find((t) => slugify(t) === slug) ?? slug
      return `- [${original}](/tags/${slug}) — ${items.length} 篇`
    })
    .join('\n')

  const overviewBody = `---
title: 全部标签
permalink: /tags/
---

# 全部标签

${
    overviewEntries ||
    '_当前还没有任何标签。在某篇笔记的 frontmatter 中加 `tags: [...]` 即可自动生成。_'
  }
`

  await writeFile(resolve(TAGS_DIR, 'index.md'), overviewBody, 'utf8')

  // 生成 rewrites 映射
  const rewrites: Record<string, string> = {}
  for (const slug of tagMap.keys()) {
    rewrites[`tags/${slug}`] = `tags/${slug}.md`
  }

  const rewritesSource = `// 此文件由 scripts/generate-tags.ts 自动生成,请勿手改。
// 运行 \`pnpm tags:gen\` 或 \`pnpm docs:build\` 重新生成。

export const tagRewrites: Record<string, string> = ${JSON.stringify(
    rewrites,
    null,
    2
  )}
`

  await writeFile(REWRITES_FILE, rewritesSource, 'utf8')

  console.log(
    `[tags:gen] wrote ${tagMap.size} tag page(s), ${notes.length} note(s) scanned.`
  )
}

main().catch((err) => {
  console.error('[tags:gen] failed:', err)
  process.exit(1)
})