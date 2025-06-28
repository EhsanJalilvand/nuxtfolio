<template>
  <div     :dir="locale === 'fa' ? 'rtl' : 'ltr'"  class="min-h-screen bg-white dark:bg-gray-900">
    <SharedHeader />
    <UiCustomCursor />
    <main>
      <NuxtPage />
    </main>
    <SharedFooter />
  </div>
</template>
<script setup>
const { locale } = useI18n()

</script>
<style>
/* Basic animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>