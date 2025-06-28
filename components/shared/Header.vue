<template>
  <header  class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
    <div  class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink 
        to="/" 
        class="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white"
      >
        <Icon name="heroicons:sparkles" class="w-5 h-5 text-primary" />
        <span>Portfolio</span>
      </NuxtLink>
      <!-- Desktop Menu-->
      <nav class="hidden md:flex items-center gap-8">
        <a 
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.path"
          class="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors font-medium"
          @click.prevent="scrollTo(item.path)"
        >
          {{ $t(`nav.${item.key}`) }}
        </a>

        <div class="flex items-center gap-4 ml-4">
          <UiLanguageSwitcher />
          <UiDarkModeToggle />
        </div>
      </nav>

      <!-- Button for Mobile Menu-->
      <button 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors  dark:text-white"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu-->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 px-6"
      >
        <a 
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.path"
          class="block py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          @click.prevent="scrollTo(item.path, true)"
        >
          {{ $t(`nav.${item.key}`) }}
        </a>

        <div class="flex justify-center gap-4 mt-4">
          <UiLanguageSwitcher  />
          <UiDarkModeToggle  />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
// smooth Scroll
const { scrollTo } = useScrollTo()
const navItems = [
  { key: 'about', path: '#about' },
  { key: 'experience', path: '#experience' },
  { key: 'skills', path: '#skills' },
  { key: 'projects', path: '#projects' },
  { key: 'contact', path: '#contact' }
]

</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>