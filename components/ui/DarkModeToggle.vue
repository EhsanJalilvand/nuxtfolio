<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    aria-label="Toggle dark mode"
  >
    <Icon v-if="isDark" name="heroicons:sun" class="w-6 h-6" />
    <Icon v-else name="heroicons:moon" class="w-6 h-6" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleDarkMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>