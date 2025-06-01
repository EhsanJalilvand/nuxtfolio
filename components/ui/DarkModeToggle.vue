<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-gray-300 text-gray-700"
    aria-label="Toggle dark mode"
  >
    <Icon v-if="isDark" name="heroicons:sun" class="w-5 h-5" />
    <Icon v-else name="heroicons:moon" class="w-5 h-5" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    colorMode.preference = value ? 'dark' : 'light'
  }
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}
</script>