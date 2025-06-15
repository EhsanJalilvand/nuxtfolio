<template>
  <!-- Language switcher wrapper with outside click listener -->
  <div class="relative group dark:text-gray-300" v-click-outside="closeMenu">
    <!-- Toggle button to open language menu -->
    <button 
      class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      @click="toggleLanguageMenu"
    >
      <Icon name="mdi:translate" class="w-5 h-5" />
      <span class="text-sm uppercase">{{ currentLocaleName }}</span>
    </button>
    
    <!-- Language selection dropdown menu -->
    <div 
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 overflow-hidden"
    >
      <!-- List available languages -->
      <button
        v-for="locale in locales"
        :key="locale.code"
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        @click="changeLanguage(locale.code)"
      >
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Import localization composables from Nuxt i18n
const { locale, locales, setLocale } = useI18n()

// Track menu open/close state
const isMenuOpen = ref(false)

// Get current language code to display in button
const currentLocaleName = computed(() => {
  const current = locales.value.find(l => l.code === locale.value)
  return current?.code || locale.value
})

// Toggle the visibility of the language menu
const toggleLanguageMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close the language menu
const closeMenu = () => {
  isMenuOpen.value = false
}

// Change the language and close the menu
const changeLanguage = async (code) => {
  try {
    await setLocale(code)
    isMenuOpen.value = false
  } catch (error) {
    console.error('Error changing language:', error)
  }
}
</script>
