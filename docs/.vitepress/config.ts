import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'
import { tagRewrites } from './rewrites.generated'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

// Node 全局变量(运行时由 Node 提供,这里只声明给 TypeScript 看)
// 若想消除此声明,可安装 @types/node 并在 tsconfig.types 中加 "node"。
declare const process: {
  env: { NODE_ENV?: string; SITE_BASE?: string }
  cwd: () => string
}

// GitHub 用户名与仓库名
const GITHUB_USER = 'Blaze-Ranger'
const REPO_NAME = 'pm-knowledge'
const SITE_ORIGIN = `https://${GITHUB_USER}.github.io`

function normalizeBase(base: string): string {
  if (!base || base === '/') return '/'
  return `/${base.replace(/^\/|\/$/g, '')}/`
}

// 本地开发用根路径,生产构建默认用 GitHub Pages 项目路径;SITE_BASE 可显式覆盖。
const BASE =
  process.env.SITE_BASE !== undefined
    ? normalizeBase(process.env.SITE_BASE)
    : process.env.NODE_ENV === 'production'
      ? `/${REPO_NAME}/`
      : '/'
const SITE_URL = `${SITE_ORIGIN}${BASE}`

// 分类中文名映射(添加新分类时同步加到这里)
const CATEGORY_LABELS: Record<string, string> = {
  frontend: '前端',
  ai: 'AI',
  product: '产品',
  reading: '阅读'
}

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsed: boolean
}

/**
 * 扫描 docs/notes/ 下的子目录,自动生成侧边栏结构。
 * 每个子目录 = 一个分组;目录里的 *.md 文件(排除 index.md)= 该分组的笔记。
 */
async function buildNotesSidebar(): Promise<SidebarGroup[]> {
  const notesDir = join(process.cwd(), 'docs', 'notes')
  const entries = await readdir(notesDir, { withFileTypes: true })
  const groups: SidebarGroup[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const cat = entry.name
    const catDir = join(notesDir, cat)
    const files = (await readdir(catDir)).filter(
      (f: string) => f.endsWith('.md') && f !== 'index.md'
    )
    files.sort()
    groups.push({
      text: CATEGORY_LABELS[cat] ?? cat,
      collapsed: true,
      items: files.map((f: string) => {
        const slug = f.replace(/\.md$/, '')
        return {
          text: slug,
          link: `/notes/${cat}/${slug}`
        }
      })
    })
  }

  return groups
}

// 直接 export 一个 async 函数 — VitePress 接受 UserConfigFn
export default async () => {
  const notesSidebar = await buildNotesSidebar()

  return defineConfig({
    base: BASE,
    appearance: 'dark',
    lang: 'zh-CN',
    title: 'PM Knowledge',
    description: '学习笔记与知识管理 — 计算机、产品、AI、阅读的零碎思考',
    lastUpdated: true,

    head: [
      ['meta', { name: 'theme-color', content: '#0d1117' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: 'PM Knowledge' }],
      ['meta', { property: 'og:description', content: '学习笔记与知识管理' }],
      ['meta', { property: 'og:url', content: SITE_URL }],
      [
        'link',
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'PM Knowledge',
          href: `${BASE}feed.rss`
        }
      ]
    ],

    sitemap: {
      hostname: SITE_URL
    },

    markdown: {
      lineNumbers: false,
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },

    ignoreDeadLinks: true,
    rewrites: tagRewrites,

    themeConfig: {
      logo: { src: '/logo.svg', alt: 'PM Knowledge' },
      siteTitle: 'PM Knowledge',

      nav: [
        { text: '首页', link: '/' },
        { text: '笔记', link: '/notes/frontend/' },
        { text: '标签', link: '/tags/' },
        { text: 'RSS', link: `${SITE_URL}feed.rss`, target: '_blank' }
      ],

      socialLinks: [
        { icon: 'github', link: `https://github.com/${GITHUB_USER}/${REPO_NAME}` }
      ],

      sidebar: {
        '/notes/': notesSidebar
      },

      outline: {
        level: [2, 3],
        label: '本页大纲'
      },

      editLink: {
        pattern: `https://github.com/${GITHUB_USER}/${REPO_NAME}/edit/main/docs/:path`,
        text: '在 GitHub 上编辑此页'
      },

      lastUpdatedText: '最后更新于',
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },

      search: {
        provider: 'local',
        options: {
          miniSearch: {
            searchOptions: {
              boost: { title: 4, text: 1, tags: 2 }
            }
          }
        }
      },

      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到亮色',
      darkModeSwitchTitle: '切换到暗色',
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '回到顶部'
    },

    vite: {
      plugins: [
        RssPlugin({
          baseUrl: SITE_ORIGIN,
          filename: 'feed.rss',
          title: 'PM Knowledge',
          description: '学习笔记与知识管理',
          copyright: `Copyright © ${new Date().getFullYear()} ${GITHUB_USER}`,
          authors: [{ name: GITHUB_USER }]
        })
      ]
    }
  })
}
