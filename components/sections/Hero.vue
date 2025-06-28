<template>

  <!-- Full-screen hero section -->
  <div
    class="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
  >
    <!-- Fade transition for hero content -->
    <Transition name="fade-only">
      <!-- Hero content shown when showHero is true -->
      <div
        v-if="showHero"
        class="container mx-auto px-4 text-center"
      >
        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          {{ $t('hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8">
          {{ $t('hero.description') }}
        </p>

        <!-- Action buttons -->
        <div class="flex flex-wrap gap-4 justify-center">
          <!-- Contact link -->
          <NuxtLink
            to="#contact"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {{ $t('hero.contact') }}
          </NuxtLink>

          <!-- Resume download button with dropdown -->
          <div class="relative inline-block">
            <!-- Toggle dropdown -->
            <button
              @click="toggleResumeMenu"
              class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors"
            >
              {{ $t('hero.downloadResume') }}
            </button>

            <!-- Dropdown menu -->
            <div
              v-if="showResumeMenu"
              class="absolute mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <!-- Download options -->
              <button
                @click="downloadResume('/resume.txt', 'resume.txt')"
                class="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FileText class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {{ $t('hero.resumeEn') }}
              </button>

              <button
                   @click="downloadResume('/resume.txt', 'resume.txt')"
                class="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FileText class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {{ $t('hero.resumeDe') }}
              </button>

              <button
                   @click="downloadResume('/resume.txt', 'resume.txt')"
                class="flex items-center gap-2 px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FileText class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {{ $t('hero.resumeFa') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Invisible div for triggering IntersectionObserver -->
    <div v-intersect="() => showHero = true" class="absolute top-0"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FileText } from 'lucide-vue-next'

/* Reactive state for showing hero content */
const showHero = ref(false)

/* Reactive state for showing resume dropdown menu */
const showResumeMenu = ref(false)

/* Toggle resume dropdown menu visibility */
const toggleResumeMenu = () => {
  showResumeMenu.value = !showResumeMenu.value
}

/* Download resume file by creating a temporary link */
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
/* Fade-only transition animation */
.fade-only-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-only-enter-active {
  transition: opacity 1.5s ease, transform 1.5s ease;
}
.fade-only-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
