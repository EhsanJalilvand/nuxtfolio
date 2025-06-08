<template>
  <section
    id="skills"
    class="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden"
    ref="skillsSection"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {{ $t('skills.title') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4">
          {{ $t('skills.subtitle') }}
        </p>
      </div>

      <!-- اینجا کلاس grid به TransitionGroup داده شده -->
      <TransitionGroup
        name="fade-slide"
        tag="div"
        class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500"
        :class="{'opacity-100': isVisible, 'opacity-0 translate-y-8': !isVisible}"
        style="transition-delay: 300ms"
      >
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <component :is="skill.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
          <span class="text-gray-800 dark:text-gray-200 font-medium">{{ skill.name }}</span>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { TransitionGroup } from 'vue'
import {
  Code,
  Cpu,
  Database,
  Server,
  Terminal,
  LayoutDashboard,
  Cloud,
  Monitor,
  GitBranch,
  Activity,
  Braces
} from 'lucide-vue-next'

const { locale, messages } = useI18n()

const skillsSection = ref(null)
const isVisible = ref(false)

const skills = [
  { name: 'C#', icon: Code },
  { name: 'Vue.js', icon: Monitor },
  { name: 'Nuxt', icon: Cloud },
  { name: 'WPF', icon: LayoutDashboard },
  { name: 'Microservices', icon: Server },
  { name: 'SQL Server', icon: Database },
  { name: 'Docker', icon: Activity },
  { name: 'Kubernetes', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'Linux', icon: Terminal },
  { name: 'Clean Architecture', icon: Braces },
  { name: 'REST API', icon: Cpu }
]

const checkVisibility = () => {
  if (skillsSection.value) {
    const rect = skillsSection.value.getBoundingClientRect()
    isVisible.value = rect.top < window.innerHeight * 0.8
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

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
