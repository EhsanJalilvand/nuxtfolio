<template>
  <div class="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-4 text-center">
      <!-- عنوان -->
      <h1 
        class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in"
      >
        {{ $t('hero.title') }}
      </h1>

      <!-- توضیح کوتاه -->
      <p 
        class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in animate-delay-200"
      >
         A Fullstack Developer always curious and eager to learn
      </p>

      <p 
        class="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 animate-fade-in animate-delay-300"
      >
        I build scalable, clean and efficient web applications
      </p>

      <!-- دکمه‌ها -->
      <div class="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-400">
        <NuxtLink 
          to="#contact"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {{ $t('hero.contact') }}
        </NuxtLink>

        <button
          @click="downloadResume"
          class="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors"
        >
          Download Resume
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'Ehsan_Resume.pdf' // اسم خودت
  link.click()
}
</script>
