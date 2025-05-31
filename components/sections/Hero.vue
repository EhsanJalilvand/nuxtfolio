<template>
  <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="container mx-auto px-6 text-center">
      <UiAnimatedText
        tag="h1"
        :text="$t('hero.title', { name: 'Your Name' })"
        class="text-6xl md:text-8xl font-bold mb-6 text-gradient"
      />
      <UiAnimatedText
        tag="p"
        :text="$t('hero.subtitle')"
        class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
        :delay="0.2"
      />
      <div class="flex gap-4 justify-center">
        <button
          @click="$router.push('#contact')"
          class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
        >
          {{ $t('hero.contact') }}
        </button>
        <button
          @click="downloadResume"
          class="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
        >
          {{ $t('hero.resume') }}
        </button>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <Icon name="mdi:mouse" class="w-8 h-8 text-gray-400" />
    </div>
  </section>
</template>

<script setup>
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'YourName_Resume.pdf'
  link.click()
}
</script>