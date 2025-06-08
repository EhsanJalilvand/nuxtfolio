<template>
  <section id="experience" class="py-24 bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl font-extrabold mb-16 text-gray-900 dark:text-white text-center">
        Work Experience
      </h2>

      <div class="overflow-x-auto pb-4">
        <div class="flex items-start gap-8 min-w-max relative">

          <!-- خط افقی -->
          <div class="absolute top-6 left-0 h-1 bg-indigo-500 dark:bg-indigo-400 w-full z-0"></div>

          <transition-group name="fade-slide-horizontal" tag="div" class="flex gap-8 z-10">
            <div
              v-for="(exp, index) in experiences"
              :key="exp.id"
              v-intersect="() => show[index] = true"
              :class="{ 'opacity-100 translate-y-0': show[index], 'opacity-0 translate-y-8': !show[index] }"
              class="transition duration-800 ease-out relative flex flex-col items-center min-w-[220px]"
              :style="{ transitionDelay: (index * 160) + 'ms' }"
            >
              <!-- نقطه -->
              <div class="w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 shadow mb-2"></div>

              <!-- محتوا -->
              <div class="text-center">
                <h3 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {{ exp.position }}
                </h3>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ exp.company }}
                </div>
                <div class="text-xs text-gray-400 mt-1 mb-3">
                  {{ formatDateDisplay(exp.startDate) }} - {{ exp.endDate ? formatDateDisplay(exp.endDate) : 'Present' }}
                </div>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm text-left space-y-1 px-2">
                  <li v-for="(desc, i) in exp.description" :key="i">{{ desc }}</li>
                </ul>
              </div>
            </div>
          </transition-group>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    position: 'Senior Software Engineer',
    company: 'Tech Corp',
    startDate: '2021-04-01',
    endDate: null,
    description: ['Microservices', 'Vue/Nuxt', 'Docker CI/CD'],
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: 'Creative Labs',
    startDate: '2019-02-01',
    endDate: '2021-03-31',
    description: ['Vue 3, Tailwind', 'REST APIs .NET', 'GitLab Pipelines'],
  },
  {
    id: 3,
    position: 'Backend Developer',
    company: 'DataNova',
    startDate: '2017-06-01',
    endDate: '2019-01-31',
    description: ['.NET Core', 'PostgreSQL', 'Redis Cache'],
  },
  {
    id: 4,
    position: 'Junior Developer',
    company: 'Webify',
    startDate: '2015-10-01',
    endDate: '2017-05-31',
    description: ['PHP', 'WordPress', 'Basic Linux'],
  },
])

const show = ref(Array(experiences.value.length).fill(false))

function formatDateDisplay(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short' })
}
</script>

<style scoped>
.fade-slide-horizontal-enter-active,
.fade-slide-horizontal-leave-active {
  transition: all 0.8s ease;
}
.fade-slide-horizontal-enter-from,
.fade-slide-horizontal-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-horizontal-enter-to,
.fade-slide-horizontal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
