<template>
  <!-- Projects Section -->
  <section
    id="projects"
    class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden"
  >
    <div class="container mx-auto px-6 md:px-12">
      <!-- Section Title -->
      <h2 class="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        {{ $t('projects.title') }}
      </h2>

      <!-- Projects Grid with transition group -->
      <TransitionGroup
        name="fade-only"
        tag="div"
        class="flex flex-wrap justify-center gap-8"
      >
        <!-- Project Card -->
        <div
          v-for="(project, index) in projects"
          :key="project.title"

          v-intersect="() => show[index] = true"

          :class="[
            'w-full md:w-[45%] lg:w-[30%] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 transition duration-500',
            show[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"

          :style="{ transitionDelay: (index * 200) + 'ms' }"
        >
          <!-- Project Icon -->
          <div class="text-5xl text-blue-600 mb-3">
            <component :is="project.icon" />
          </div>

          <!-- Project Title -->
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            {{ project.title }}
          </h3>

          <!-- Project Description -->
          <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
            {{ project.description }}
          </p>

          <!-- Project Action Buttons -->
          <div class="flex flex-wrap gap-3">
            <!-- GitHub Link -->
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <Github class="w-4 h-4" /> {{ $t('projects.github') }}
            </a>

            <!-- Live Preview Link -->
            <a
              v-if="project.preview"
              :href="project.preview"
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
            >
              <ExternalLink class="w-4 h-4" /> {{ $t('projects.preview') }}
            </a>

            <!-- Original Certificate Download -->
            <a
              v-if="project.originalCertificate"
              :href="project.originalCertificate"
              download
              class="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <Download class="w-4 h-4" />{{ $t('projects.originalCertificate') }}
            </a>

            <!-- Certificate Download -->
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
// Import icons for projects
import {
  Store,
  LayoutDashboard,
  Github,
  ExternalLink,
  Clock,
  Download,
  FileText,
  BookOpen
} from 'lucide-vue-next'

// Define projects list
const projects = [
  {
    title: 'TaskFlow Project Manager',
    description: 'ASP.NET Core, EF Core, PostgreSQL, JWT Auth',
    certificate: '/certificate.txt',
    originalCertificate: '/certificate.txt',
    icon: LayoutDashboard,
  },
  {
    title: 'GreenGarden Ecommerce',
    description: 'Vue 3, Nuxt 3, Pinia, Stripe API, Tailwind CSS',
   certificate: '/certificate.txt',
    originalCertificate: '/certificate.txt',
    icon: Store,
  },
  {
    title: 'NodeCron Job Scheduler',
    description: 'Node.js, Express, MongoDB, Node-Cron, JWT Auth',
    github: 'https://github.com/example/nodecron-scheduler',
    preview: 'https://nodecron.example.com',
    icon: Clock,
  },
  {
    title: 'VueInvoice Pro',
    description: 'Vue 3, Composition API, Chart.js, Tailwind CSS',
    github: 'https://github.com/example/vue-invoice-pro',
    preview: 'https://invoicepro.example.com',
    icon: FileText,
  },
  {
    title: 'DevNotes Markdown Editor',
    description: 'React, Vite, Tailwind CSS, LocalStorage',
    github: 'https://github.com/example/devnotes',
    preview: 'https://devnotes.example.com',
    icon: BookOpen,
  },
]

// Track visibility of each project card for animation
const show = ref(Array(projects.length).fill(false))
</script>

<style scoped>
/* Fade-only transition styles */
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
