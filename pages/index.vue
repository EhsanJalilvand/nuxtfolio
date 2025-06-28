<template>
  <main>
    <SectionsHero />
    <SectionsAbout />
    <SectionsExperience />
    <SectionsSkills />
    <SectionsProjects />
    <SectionsContact />
  </main>
</template>

<script setup>
useHead({
  title: 'Portfolio | Your Name',
  meta: [
    { name: 'description', content: 'Professional portfolio showcasing my work and skills' }
  ]
})
</script>