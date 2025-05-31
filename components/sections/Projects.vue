<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('projects.title') }}</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects"
          :key="project.slug"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <NuxtLink :to="`/projects/${project.slug}`">
            <div class="h-48 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              >
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink 
          to="/projects"
          class="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
        >
          {{ $t('projects.viewAll') }}
          <Icon name="mdi:arrow-right" class="ml-2 w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: projects } = await useAsyncData('projects', () => {
  return queryContent('projects').limit(3).find()
})
</script>