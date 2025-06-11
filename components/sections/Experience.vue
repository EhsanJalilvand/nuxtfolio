<template>
  <!-- Experience Timeline Section -->
  <section id="experience" class="py-24 bg-gray-50 dark:bg-gray-950">
<div class="container mx-auto px-6 md:px-12 max-w-full">

      
      <!-- Section Title -->
      <h2 class="text-4xl font-extrabold mb-20 text-gray-900 dark:text-white text-center">
      {{$t('experience.title')}}
      </h2>

      <!-- Timeline Container -->
      <div class="relative pl-12 w-full max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute top-0 left-4 w-1 bg-indigo-500 dark:bg-indigo-400 h-full rounded"></div>

        <!-- Timeline Items -->
        <transition-group name="fade-slide-vertical" tag="div" class="flex flex-col gap-20 relative z-10">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            v-intersect="() => show[index] = true"
            :class="[
              'transition duration-800 ease-out flex items-start gap-8',
              show[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: (index * 200) + 'ms' }"
          >
            <!-- Timeline Dot -->
            <div
              class="w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 shadow-md mt-3 flex-shrink-0 border-2 border-white dark:border-gray-950"
              aria-hidden="true"
            ></div>

            <!-- Timeline Content -->
           <div class="flex flex-col w-full">
              <!-- Position Title -->
              <h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400" :title="exp.position">
                {{ exp.position }}
              </h3>
              
              <!-- Company & Location -->
              <div class="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1"
                :title="`${exp.company} - ${exp.location}`">
                {{ exp.company }} - {{ exp.location }}
              </div>
              
              <!-- Date Range -->
              <div class="text-sm text-gray-400 mb-6" :title="dateRange(exp.startDate, exp.endDate)">
                {{ dateRange(exp.startDate, exp.endDate) }}
              </div>
              
              <!-- Experience Descriptions -->
<ul class="list-disc text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-3">
  <li v-for="(desc, i) in exp.description" :key="i">
    {{ desc }}
  </li>
</ul>



            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import i18n composable
import { useI18n } from 'vue-i18n'

// Get i18n instance
const { locale, getLocaleMessage } = useI18n()

// Recursively extract static text content
function deepExtractStatics(value) {
  if (Array.isArray(value)) {
    return value.map(deepExtractStatics)
  } else if (typeof value === 'object' && value !== null) {
    if (value.body && typeof value.body.static === 'string') {
      return value.body.static
    } else {
      const result = {}
      for (const key in value) {
        result[key] = deepExtractStatics(value[key])
      }
      return result
    }
  }
  return value
}

// Computed list of experiences from i18n locale
const experiences = computed(() => {
  const items = getLocaleMessage(locale.value)?.experience?.items || []
  return deepExtractStatics(items)
})

// Track which items are visible
const show = ref(Array(experiences.value.length).fill(false))

// Format date to Month Year (e.g. Jan 2022)
function formatDateDisplay(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d)) return ''
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short' })
}

// Display date range (start - end)
function dateRange(start, end) {
  const startDate = formatDateDisplay(start)
  const endDate = end ? formatDateDisplay(end) : 'Present'
  return `${startDate || 'Unknown'} - ${endDate || 'Unknown'}`
}

// Store all IntersectionObservers
const observers = new Map()

// Custom Intersection Directive
const intersect = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (typeof binding.value === 'function') {
              binding.value()
            }
            observerInstance.unobserve(entry.target)
            observers.delete(el)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.disconnect()
      observers.delete(el)
    }
  }
}

// Expose directive to parent component
defineExpose({ intersect })
</script>

<style scoped>
/* Transition for fade and slide from bottom */
.fade-slide-vertical-enter-from,
.fade-slide-vertical-leave-to {
  opacity: 0;
  transform: translateY(32px);
}

.fade-slide-vertical-enter-to,
.fade-slide-vertical-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-vertical-enter-active,
.fade-slide-vertical-leave-active {
  transition: all 0.8s ease;
}
</style>
