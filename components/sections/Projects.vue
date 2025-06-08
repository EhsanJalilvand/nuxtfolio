<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">My Projects</h2>

      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="w-full md:w-[45%] lg:w-[30%] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 transition-all duration-700 ease-out opacity-0 translate-x-12"
          :class="{'opacity-100 translate-x-0': isVisible}"
          :style="`transition-delay: ${index * 200}ms`"
        >
          <div class="text-5xl text-blue-600 mb-3">
            <component :is="project.icon" />
          </div>

          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-3">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <Github class="w-4 h-4" /> GitHub
            </a>

            <a
              v-if="project.preview"
              :href="project.preview"
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              <ExternalLink class="w-4 h-4" /> Preview
            </a>

            <a
              v-if="project.certificate"
              :href="project.certificate"
              download
              class="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
            >
              <Download class="w-4 h-4" /> Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Github, ExternalLink, Download, Code2, Monitor, Database, Server } from 'lucide-vue-next'

const isVisible = ref(false)

const projects = [
  {
    title: 'Saina',
    description: 'C#, Windows Forms, SQL Server, ADO.NET',
    certificate: '/certificates/saina.pdf',
    icon: Database,
  },
  {
    title: 'Dortaak',
    description: 'C#, WPF, Prism, SQL Server, EF Core',
    certificate: '/certificates/dortaak.pdf',
    icon: Database,
  },
  {
    title: 'Snaplink',
    description: 'Node.js, Express, MongoDB',
    github: 'https://github.com/ehsan/snaplink',
    preview: 'https://snaplink.example.com',
    icon: Server,
  },
  {
    title: 'Memory Game',
    description: 'Vue 3, Pinia, Composition API',
    github: 'https://github.com/ehsan/vue-memory-game',
    preview: 'https://memorygame.example.com',
    icon: Code2,
  },
  {
    title: 'Nuxtfolio',
    description: 'Nuxt 3, Tailwind, i18n',
    github: 'https://github.com/ehsan/nuxtfolio',
    preview: 'https://nuxtfolio.example.com',
    icon: Monitor,
  },
]

const checkVisibility = () => {
  const section = document.getElementById('projects')
  const rect = section.getBoundingClientRect()
  if (rect.top < window.innerHeight * 0.8) {
    isVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkVisibility)
  checkVisibility()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
})
</script>
