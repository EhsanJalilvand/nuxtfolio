<template>
  <!-- Fixed progress bar at the top of the screen -->
  <div class="fixed top-0 left-0 h-1 bg-primary z-50" :style="{ width: `${scrollProgress}%` }" />
</template>

<script setup>
// Reactive value to store scroll progress percentage
const scrollProgress = ref(0)

// Calculate and update scroll progress based on window scroll position
const updateScrollProgress = () => {
  const scrollPx = document.documentElement.scrollTop
  const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (scrollPx / winHeightPx) * 100
}

// Add scroll event listener when component mounts
onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
})

// Remove scroll event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>
