<template>
  <div class="relative group">
    <button 
      class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      @click="toggleLanguageMenu"
    >
      <Icon name="mdi:translate" class="w-5 h-5" />
      <span class="text-sm uppercase">{{ currentLocale }}</span>
    </button>
    
    <div 
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 overflow-hidden"
    >
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        @click="setLocaleAndClose(locale.code)"
      >
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const isMenuOpen = ref(false)

const availableLocales = computed(() => locales.value)
const currentLocale = computed(() => locale.value)

const toggleLanguageMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setLocaleAndClose = (code) => {
  setLocale(code)
  isMenuOpen.value = false
}
</script>