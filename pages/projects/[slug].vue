<template>
  <div class="project-detail">
    <h1>{{ project.title }}</h1>
    <ContentRenderer :value="project" />
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data: project } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>