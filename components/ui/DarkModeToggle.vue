<template>
  <!-- Button to toggle between dark and light mode -->
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-gray-300 text-gray-700"
    aria-label="Toggle dark mode"
  >
    <!-- Show sun icon when in dark mode, moon icon otherwise -->
    <Icon v-if="isDark" name="heroicons:sun" class="w-5 h-5" />
    <Icon v-else name="heroicons:moon" class="w-5 h-5" />
  </button>
</template>

<script setup>
// Get Nuxt color mode composable
const colorMode = useColorMode()

// Computed property to track dark mode status
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    colorMode.preference = value ? 'dark' : 'light'
  }
})

// Function to toggle between dark and light modes
const toggleDarkMode = () => {
  isDark.value = !isDark.value
}
</script>
