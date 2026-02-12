<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAutoSEO } from './seo/composables.js'
import { useLocalePath } from '@/utils/useLocalePath'

// 初始化SEO
useAutoSEO()

const router = useRouter()
const { localePath } = useLocalePath()

// 拦截 v-html 内容中的内部链接点击，使用 localePath 保持语言
const handleClick = (e) => {
  const a = e.target.closest('a[href^="/"]:not([href^="//"])')
  if (!a || a.target === '_blank' || a.hasAttribute('download')) return
  // Ctrl/Cmd+点击、中键点击时允许默认行为（新标签打开），不拦截
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return
  const href = a.getAttribute('href')
  if (!href || href === '#') return
  e.preventDefault()
  router.push(localePath(href))
}

onMounted(() => {
  document.addEventListener('click', handleClick, true)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClick, true)
})
</script>

<template>
  <router-view />
</template>

<style>
/* 全局样式已在 main.js 中导入 */
</style>
