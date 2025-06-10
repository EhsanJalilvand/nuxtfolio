<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" 
          :class="{'animate-fade-in-up': isVisible}">
        {{ $t('projects.title') }}
      </h2>

      <div class="flex flex-wrap justify-center gap-8">
        <TransitionGroup name="staggered-fade">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="w-full md:w-[45%] lg:w-[30%] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-xl hover:-translate-y-1"
            :style="{'--stagger': index}"
            :class="{'animate-card-enter': isVisible}"
          >
            <div class="text-5xl text-blue-600 mb-3 transition-transform duration-300 hover:scale-110">
              <component :is="project.icon" />
            </div>

            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-3">
              <!-- دکمه‌ها با افکت‌های زیبا -->
              <Transition name="button-fade" appear>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <Github class="w-4 h-4" /> {{ $t('projects.github') }}
                </a>
              </Transition>
              
              <!-- بقیه دکمه‌ها با همین ساختار -->
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Github, ExternalLink, Download,Building2,Store,Link2,Gamepad2,LayoutDashboard } from 'lucide-vue-next'

const isVisible = ref(false)

const projects = [
  {
    title: 'General Civil SoftWare Saina',
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
<style>
/* انیمیشن‌های سفارشی */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-card-enter {
  animation: cardEnter 0.6s ease-out forwards;
  animation-delay: calc(var(--stagger) * 0.2s);
}



@keyframes cardEnter {
  from {
    opacity: 0;
    transform: translateY(-30px) ;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



</style>