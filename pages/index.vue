<template>
  <main>
    <SectionsHero />
    <SectionsAbout />
    <SectionsSkills />
    <SectionsExperience />
    <SectionsProjects />
    <SectionsContact />
  </main>
</template>

<script setup>
useHead({
  title: 'Your Name | Portfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio showcasing my work and skills' }
  ]
})
</script>