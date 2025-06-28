<template>
  <!-- Pulse effect on click -->
  <div ref="clickPulse" class="click-pulse" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const clickPulse = ref(null)

const handleClick = (e) => {
  // Position the pulse div at click position
  const pulse = clickPulse.value
  pulse.style.left = e.clientX + 'px'
  pulse.style.top = e.clientY + 'px'

  // Animate scale up and fade out
  gsap.fromTo(
    pulse,
    { scale: 0, opacity: 0.6 },
    {
      scale: 2,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      overwrite: 'auto',
    }
  )
}

onMounted(() => {
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})
</script>

<style scoped>
.click-pulse {
  position: fixed;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  pointer-events: none;
  border: 2px solid #106ab9;
  background-color: transparent;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  z-index: 9999;
}
</style>
