<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-dark/80 shadow-sm transition-all duration-300"
    :class="{ 'py-2': !isScrolled, 'py-1': isScrolled }"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <Icon name="heroicons:sparkles" class="w-8 h-8 text-primary" />
        <span class="text-xl font-bold">Portfolio</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <SharedNavigation />
        <div class="flex items-center gap-4">
          <UiDarkModeToggle />
          <UiLanguageSwitcher />
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        @click="toggleMenu"
      >
        <Icon name="heroicons:bars-3" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div 
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark shadow-lg py-4 px-6">
        <SharedNavigation @navigate="closeMenu" />
        <div class="flex justify-center gap-4 mt-4">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)
const { scrollY } = useScroll()
const isScrolled = computed(() => scrollY.value > 10)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>