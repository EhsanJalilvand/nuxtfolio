<template>

  <section 
    id="about"
    ref="aboutSection"
    class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden"
  >
    <div class="container mx-auto px-6 md:px-12">
      <div class="flex flex-col md:flex-row items-center gap-12">

        <!-- تصویر پروفایل -->
        <div 
          class="relative group w-64 h-64 md:w-80 md:h-80 shrink-0 mx-auto"
          :class="{'opacity-100 scale-100': isImageVisible, 'opacity-0 scale-95': !isImageVisible}"
          style="transition: opacity 0.7s ease, transform 0.7s ease;"
        >
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <img
            src="/images/ehsan.jfif"
            alt="احسان جلیلوند"
            class="rounded-full object-cover w-full h-full border-4 border-white dark:border-gray-800 shadow-xl transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <!-- متن -->
        <div 
          class="flex-1 space-y-8"
          :class="{ 'opacity-100 translate-x-0': isTextVisible, 'opacity-0 translate-x-10': !isTextVisible }"
          style="transition: opacity 0.7s ease, transform 0.7s ease;"
        >
          <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight relative">
            {{ $t('about.title') }}
          </h2>

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

          <!-- علایق -->
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
import { ref, onMounted, onUnmounted, computed } from 'vue';
const { locale, messages } = useI18n();

const aboutSection = ref(null);
const isImageVisible = ref(false);
const isTextVisible = ref(false);

const aboutParagraphs = computed(() => messages.value[locale.value].about.paragraphs.map(p => p.body.static));
const aboutInterests = computed(() => messages.value[locale.value].about.interests.map(p => p.body.static));

const checkVisibility = () => {
  if (!aboutSection.value) return;

  const rect = aboutSection.value.getBoundingClientRect();
  const visible = rect.top < window.innerHeight * 0.85;

  if (visible) {
    isImageVisible.value = true;

    // متن رو با کمی تاخیر نمایش بده
    setTimeout(() => {
      isTextVisible.value = true;
    }, 300);
  } else {
    isImageVisible.value = false;
    isTextVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
});
</script>
