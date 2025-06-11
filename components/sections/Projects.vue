<template>
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden"
    ref="projectsSection"
  >
    <div class="container mx-auto px-6 md:px-12">
      <h2
        class="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
      >
        {{ $t('projects.title') }}
      </h2>

      <TransitionGroup
        name="fade-only"
        tag="div"
        class="flex flex-wrap justify-center gap-8"
      >
        <div
          v-for="(project, index) in visibleProjects"
          :key="project.title"
          class="w-full md:w-[45%] lg:w-[30%] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6"
          :style="{ transitionDelay: (index * 200) + 'ms' }"
        >
          <div class="text-5xl text-blue-600 mb-3">
            <component :is="project.icon" />
          </div>
          <h3
            class="text-2xl font-semibold text-gray-800 dark:text-white mb-2"
          >
            {{ project.title }}
          </h3>
           <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              {{ project.description }}
            </p>
                          <div class="flex flex-wrap gap-3">
           <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <Github class="w-4 h-4" /> {{ $t('projects.github') }}
            </a>

            <a
              v-if="project.preview"
              :href="project.preview"
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              <ExternalLink class="w-4 h-4" /> {{ $t('projects.preview') }}
            </a>

            <a
              v-if="project.originalCertificate"
              :href="project.originalCertificate"
              download
              class="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <Download class="w-4 h-4" />{{ $t('projects.originalCertificate') }} 
            </a>
          <a
              v-if="project.certificate"
              :href="project.certificate"
              download
              class="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
            >
              <Download class="w-4 h-4" />{{ $t('projects.certificate') }} 
            </a>

              
            </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import {
  Building2,
  Store,
  Link2,
  Gamepad2,
  LayoutDashboard,
  Github,
  ExternalLink,
  Download
} from 'lucide-vue-next'

const allProjects = [
  {
    title: 'General Civil Software Saina',
    description: 'C#, Windows Forms, SQL Server, ADO.NET',
    certificate: '/Software-Registrierungszertifikat1.pdf',
    originalCertificate: '/Software-Registrierungszertifikat1.pdf',
    icon: Building2,
  },
  {
    title: ' DorTaak Store App',
    description: 'C#, WPF, Prism, SQL Server, Entity Framework',
    certificate: '/Software-Registrierungszertifikat2.pdf',
     originalCertificate: '/Software-Registrierungszertifikat2.pdf',
    icon: Store,
  },
  {
    title: 'Snaplink',
    description: 'Node.js, Express, MongoDB',
    github: 'https://github.com/EhsanJalilvand/SnapLink',
    preview: 'https://snaplink.ink/',
    icon: Link2,
  },
  {
    title: 'Memory Game',
    description: 'Vue 3, Pinia, Composition API',
    github: 'https://github.com/ehsan/vue-memory-game',
    preview: 'https://memorygame.example.com',
    icon: Gamepad2,
  },
  {
    title: 'Nuxtfolio',
    description: 'Nuxt 3, Tailwind, i18n',
    github: 'https://github.com/ehsan/nuxtfolio',
    preview: 'https://nuxtfolio.example.com',
    icon: LayoutDashboard,
  },
]

const visibleProjects = ref([])
const projectsSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && visibleProjects.value.length === 0) {
        visibleProjects.value = allProjects
        observer.unobserve(entry.target)
      }
    })
  })

  if (projectsSection.value) {
    observer.observe(projectsSection.value)
  }
})
</script>

<style scoped>
.fade-only-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-only-enter-active {
  transition: opacity 1.5s ease, transform 1.5s ease;
}
.fade-only-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
