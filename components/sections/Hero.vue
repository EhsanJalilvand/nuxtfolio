<template>
  <div class="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 text-center">
      <h1 
        class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in"
      >
        {{ $t('hero.title') }}
      </h1>
      
      <p 
        class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animate-delay-200"
      >
        {{ $t('hero.subtitle') }}
      </p>
      
      <div class="flex gap-4 justify-center animate-fade-in animate-delay-400">
        <NuxtLink 
          to="#contact"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {{ $t('hero.contact') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'YourName_Resume.pdf'
  link.click()
}
</script>