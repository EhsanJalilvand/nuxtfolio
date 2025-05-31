<template>
  <div class="fixed top-0 left-0 h-1 bg-primary z-50" :style="{ width: `${scrollProgress}%` }" />
</template>

<script setup>
const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const scrollPx = document.documentElement.scrollTop
  const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (scrollPx / winHeightPx) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>