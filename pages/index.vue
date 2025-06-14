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
  title: 'Nuxfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio showcasing my work and skills' }
  ]
})
</script>