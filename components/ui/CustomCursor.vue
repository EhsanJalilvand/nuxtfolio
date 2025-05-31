<template>
  <div 
    class="fixed w-8 h-8 rounded-full bg-primary/20 border-2 border-primary pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference"
    :style="{
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`
    }"
  ></div>
</template>

<script setup>
const position = ref({ x: 0, y: 0 })
const isClicking = ref(false)

const updateCursorPosition = (e) => {
  position.value = { x: e.clientX, y: e.clientY }
}

const handleMouseDown = () => {
  isClicking.value = true
}

const handleMouseUp = () => {
  isClicking.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition)
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition)
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mouseup', handleMouseUp)
})
</script>