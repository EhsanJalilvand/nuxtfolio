<template>
  <section 
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden"
  >
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-extrabold mb-20 text-gray-900 dark:text-white text-center">
        {{ $t('about.title') }}
      </h2>
      <div class="flex flex-col md:flex-row items-center gap-12">

        <!-- Profile Image -->
        <div 
          ref="aboutImage"
          class="relative group w-64 h-64 md:w-80 md:h-80 shrink-0 mx-auto"
        >
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <img
            src="/images/person.jpeg"
            alt="ehsan jalilvand"
            class="rounded-full object-cover w-full h-full border-4 border-white dark:border-gray-800 shadow-xl transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <!-- Text Content -->
        <div ref="aboutText" class="flex-1 space-y-8">
          <div class="space-y-5 text-gray-700 dark:text-gray-300 text-justify">
            <p 
              v-for="(paragraph, index) in aboutParagraphs"
              :key="index"
              class="leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {{ $t('about.interestsTitle') }}
            </h3>
            <div ref="aboutInterests" class="flex flex-wrap gap-3">
              <span 
                v-for="(interest, index) in aboutInterestsList"
                :key="index"
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {{ interest }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import useAnimation from '@/composables/useAnimation'

const { locale, messages } = useI18n()
const { animateOnScroll } = useAnimation()

const aboutImage = ref(null)
const aboutText = ref(null)
const aboutInterests = ref(null)

const aboutParagraphs = computed(() => {
  const localeMessages = messages.value[locale.value]?.about?.paragraphs
  return Array.isArray(localeMessages) ? localeMessages.map(p => unwrapText(p)) : []
})
const aboutInterestsList = computed(() => {
  const localeInterests = messages.value[locale.value]?.about?.interests
  return Array.isArray(localeInterests) ? localeInterests.map(p => unwrapText(p)) : []
})
// unwrapText function to handle both string (production mode) and object (dev mode) formats
function unwrapText(obj) {
  if (obj && typeof obj === 'object' && 'body' in obj && 'static' in obj.body) {
    return obj.body.static;
  }
  if (typeof obj === 'string') {
    return obj;
  }
  return obj?.b?.s;
}
onMounted(() => {
  animateOnScroll(aboutImage.value, { opacity: 0, y: 50, duration: 1 })
  animateOnScroll(aboutText.value, { opacity: 0, x: 30, duration: 1, delay: 0.2 })
  animateOnScroll(aboutInterests.value, { opacity: 0, y: 30, duration: 1, delay: 0.4 })
})
</script>
