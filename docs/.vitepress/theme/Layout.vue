<script setup lang="ts">
// 隔离测试:移除所有自定义,只用默认 Layout
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout />
</template>