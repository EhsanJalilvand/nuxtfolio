<template>
  <div class="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
    <SharedHeader  />
    <NuxtPage />
    <SharedFooter />
    <UiCustomCursor v-if="!isMobile" />
    <UiScrollIndicator />
  </div>
</template>

<script setup>
const isMobile = useMediaQuery('(max-width: 768px)')
</script>