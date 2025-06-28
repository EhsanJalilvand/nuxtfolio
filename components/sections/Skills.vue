<template>
  <section id="skills" class="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {{ $t('skills.title') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4">
          {{ $t('skills.subtitle') }}
        </p>
      </div>

      <!-- Skills Grid -->
      <TransitionGroup name="fade-slide" tag="div"
        class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500">
        <div v-for="(skill, index) in skills" :key="skill.name" v-intersect="() => show[index] = true" :class="[
          'flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300',
          show[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]" :style="{ transitionDelay: (index * 70) + 'ms' }">
          <!-- Skill Icon -->
          <component :is="skill.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 rtl:ml-3" />
          <!-- Skill Name -->
          <span class="text-gray-800 dark:text-gray-200 font-medium">{{ skill.name }}</span>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
// Import icons from libraries
import {
  Database,
  ShieldCheck,
  Cloud,
  GitBranch,
  Network,
  LayoutDashboard,
  Braces
} from 'lucide-vue-next'
import {
  CpuChipIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  LanguageIcon
} from '@heroicons/vue/24/outline'

// List of skills with their associated icons
const skills = [
  { name: 'ASP.NET Core WebAPI / Hangfire / Quartz.NET', icon: Network },
  { name: 'OAuth2 / JWT', icon: ShieldCheck },
  { name: 'Microservices Architecture (RabbitMQ, gRPC, CQRS)', icon: Cloud },
  { name: 'Backend Security Controls', icon: ShieldCheck },
  { name: 'Clean Architecture / Mediator Pattern', icon: Braces },
  { name: 'Docker & CI/CD Pipelines', icon: RocketLaunchIcon },
  { name: 'SQL Server & Relational Database Design', icon: Database },
  { name: 'Node.js / Express / MongoDB', icon: CpuChipIcon },
  { name: 'Vue.js / Nuxt.js', icon: CommandLineIcon },
  { name: 'Windows Forms / WPF / MVVM', icon: LayoutDashboard },
  { name: 'Git / Version Control & Agile / Scrum', icon: GitBranch },
  { name: 'English (Reading/Writing) & German (B2)', icon: LanguageIcon }
]

// State to track visibility for each skill card
const show = ref(Array(skills.length).fill(false))
</script>

<style scoped>
/* Transition for fade and slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1.2s ease;
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
