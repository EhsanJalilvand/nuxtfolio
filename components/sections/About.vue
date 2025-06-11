<template>
  <section 
    id="about"
    v-intersect="onSectionIntersect"
    class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden"
  >
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-extrabold mb-20 text-gray-900 dark:text-white text-center">
        {{ $t('about.title') }}
      </h2>
      <div class="flex flex-col md:flex-row items-center gap-12">

        <!-- Profile Image with gradient glow -->
        <div 
          class="relative group w-64 h-64 md:w-80 md:h-80 shrink-0 mx-auto"
          :class="{'opacity-100 scale-100': isImageVisible, 'opacity-0 scale-95': !isImageVisible}"
          style="transition: opacity 0.7s ease, transform 0.7s ease;"
        >
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <img
            src="/images/ehsan.jfif"
            alt="ehsan jalilvand"
            class="rounded-full object-cover w-full h-full border-4 border-white dark:border-gray-800 shadow-xl transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <!-- Text Content -->
        <div 
          class="flex-1 space-y-8"
          :class="{ 'opacity-100 translate-x-0': isTextVisible, 'opacity-0 translate-x-10': !isTextVisible }"
          style="transition: opacity 0.7s ease, transform 0.7s ease;"
        >
          <div class="space-y-5 text-gray-700 dark:text-gray-300 text-justify">
            <p 
              v-for="(paragraph, index) in aboutParagraphs"
              :key="index"
              class="leading-relaxed transition duration-500"
              :style="`transition-delay: ${index * 120}ms`"
            >
              {{ paragraph }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {{ $t('about.interestsTitle') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="(interest, index) in aboutInterests"
                :key="index"
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition duration-300"
                :style="`transition-delay: ${index * 60}ms`"
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
// i18n composable
import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

// Reactive states to control animation visibility
const isImageVisible = ref(false);
const isTextVisible = ref(false);

// Computed data for text content from i18n
const aboutParagraphs = computed(() => messages.value[locale.value].about.paragraphs.map(p => p.body.static));
const aboutInterests = computed(() => messages.value[locale.value].about.interests.map(p => p.body.static));

/**
 * Called when the about section intersects with the viewport
 */
const onSectionIntersect = () => {
  isImageVisible.value = true;
  setTimeout(() => {
    isTextVisible.value = true;
  }, 300);
};
</script>
