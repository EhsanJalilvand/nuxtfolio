<template>
  <div
    class="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
  >
    <div
      class="container mx-auto px-4 text-center opacity-0 translate-y-10 animate-fade-in"
    >
      <!-- Hero Title -->
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
        {{ $t('hero.title') }}
      </h1>

      <!-- Hero Subtitle -->
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
        {{ $t('hero.subtitle') }}
      </p>

      <!-- Hero Description -->
      <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8">
        {{ $t('hero.description') }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-4 justify-center">
        <NuxtLink
          to="#contact"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {{ $t('hero.contact') }}
        </NuxtLink>

        <div class="relative inline-block">
          <button
            @click="toggleResumeMenu"
            class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors"
          >
            {{ $t('hero.downloadResume') }}
          </button>

          <!-- Dropdown Menu -->
<div
  v-if="showResumeMenu"
  class="absolute mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50"
>
  <button
    @click="downloadResume('/resume-en.pdf', 'Ehsan_Jalilvand_EN.pdf')"
    class="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <FileText class="w-5 h-5 text-gray-600 dark:text-gray-300" />
    {{ $t('hero.resumeEn') }}
  </button>

  <button
    @click="downloadResume('/resume-de.pdf', 'Ehsan_Jalilvand_DE.pdf')"
    class="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <FileText class="w-5 h-5 text-gray-600 dark:text-gray-300" />
    {{ $t('hero.resumeDe') }}
  </button>

  <button
    @click="downloadResume('/resume-fa.pdf', 'Ehsan_Jalilvand_FA.pdf')"
    class="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <FileText class="w-5 h-5 text-gray-600 dark:text-gray-300" />
    {{ $t('hero.resumeFa') }}
  </button>
</div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FileText } from 'lucide-vue-next'
const showResumeMenu = ref(false)

const toggleResumeMenu = () => {
  showResumeMenu.value = !showResumeMenu.value
}

const downloadResume = (path, fileName) => {
  const link = document.createElement('a')
  link.href = path
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  showResumeMenu.value = false
}
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 1.5s ease forwards;
}
</style>
