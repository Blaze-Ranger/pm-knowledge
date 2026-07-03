<script setup lang="ts">
/**
 * Giscus 评论组件(vanilla loader 方式)
 *
 * 与 @giscus/vue 包不同:这里直接通过 <script> 注入 giscus.app/client.js,
 * 完全在浏览器端执行,不会触发 VitePress SSR/dev 阶段的模块解析问题。
 *
 * 部署前请把以下四个占位值替换为真实值(README 有完整步骤):
 *   1. 仓库 Settings → Features → 勾选 Discussions
 *   2. 安装 https://github.com/apps/giscus
 *   3. 创建 Discussion 分类
 *   4. 访问 https://giscus.app 拷贝 repoId 与 categoryId
 */
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useData } from 'vitepress'

const GISCUS_REPO = 'Blaze-Ranger/pm-knowledge'
const GISCUS_REPO_ID = 'R_kgDOxxxxxxxx' // ← 从 giscus.app 拷贝
const GISCUS_CATEGORY = 'Comments' // ← 你创建的分类名
const GISCUS_CATEGORY_ID = 'DIC_kwDOxxxxxxxx' // ← 从 giscus.app 拷贝

const envOk =
  !GISCUS_REPO.includes('<your-username>') &&
  !GISCUS_REPO_ID.includes('xxxxxxxx') &&
  !GISCUS_CATEGORY_ID.includes('xxxxxxxx')

const { isDark } = useData()

let scriptEl: HTMLScriptElement | null = null

function loadGiscus() {
  // 清理旧的 iframe 和 script,避免重复挂载
  document.querySelector('#giscus-container')?.replaceChildren()

  scriptEl = document.createElement('script')
  scriptEl.src = 'https://giscus.app/client.js'
  scriptEl.async = true
  scriptEl.crossOrigin = 'anonymous'
  scriptEl.setAttribute('data-repo', GISCUS_REPO)
  scriptEl.setAttribute('data-repo-id', GISCUS_REPO_ID)
  scriptEl.setAttribute('data-category', GISCUS_CATEGORY)
  scriptEl.setAttribute('data-category-id', GISCUS_CATEGORY_ID)
  scriptEl.setAttribute('data-mapping', 'pathname')
  scriptEl.setAttribute('data-strict', '0')
  scriptEl.setAttribute('data-reactions-enabled', '1')
  scriptEl.setAttribute('data-emit-metadata', '0')
  scriptEl.setAttribute('data-input-position', 'top')
  scriptEl.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  scriptEl.setAttribute('data-lang', 'zh-CN')
  scriptEl.setAttribute('data-loading', 'lazy')
  document.querySelector('#giscus-container')?.appendChild(scriptEl)
}

onMounted(() => {
  if (envOk) loadGiscus()
})

onBeforeUnmount(() => {
  scriptEl?.remove()
  scriptEl = null
})

// 主题切换时通知 Giscus iframe 重新渲染对应主题
watch(isDark, (dark) => {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app'
  )
})
</script>

<template>
  <div class="giscus-wrapper">
    <div v-if="envOk" id="giscus-container" />
    <div v-else class="giscus-placeholder">
      <p>💬 评论系统尚未配置完成。</p>
      <p>
        编辑
        <code>docs/.vitepress/theme/components/Giscus.vue</code>
        中的四个占位值(<code>GISCUS_REPO</code> /
        <code>GISCUS_REPO_ID</code> /
        <code>GISCUS_CATEGORY</code> /
        <code>GISCUS_CATEGORY_ID</code>),配置步骤见
        <a
          href="https://github.com/Blaze-Ranger/pm-knowledge#%E9%85%8D%E7%BD%AE-giscus-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F"
          >README → 配置 Giscus</a
        >。
      </p>
    </div>
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus-placeholder {
  padding: 16px 20px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px dashed var(--vp-c-border);
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  line-height: 1.6;
}
.giscus-placeholder p {
  margin: 0 0 8px 0;
}
.giscus-placeholder p:last-child {
  margin-bottom: 0;
}
</style>