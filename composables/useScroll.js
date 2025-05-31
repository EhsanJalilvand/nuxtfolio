import { ref, onMounted, onUnmounted } from 'vue'

export default function useScroll() {
  const scrollY = ref(0)
  const scrollDirection = ref('down')
  const lastScrollY = ref(0)

  const updateScroll = () => {
    scrollY.value = window.scrollY
    
    if (scrollY.value > lastScrollY.value) {
      scrollDirection.value = 'down'
    } else {
      scrollDirection.value = 'up'
    }
    
    lastScrollY.value = scrollY.value
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  return {
    scrollY,
    scrollDirection
  }
}