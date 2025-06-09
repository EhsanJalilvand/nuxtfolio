<template>
  <section id="experience" class="py-24 bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-6 md:px-12 max-w-5xl">
      <h2 class="text-4xl font-extrabold mb-20 text-gray-900 dark:text-white text-left">
        Work Experience
      </h2>

      <div class="relative pl-12">
        <!-- خط عمودی سمت چپ -->
        <div class="absolute top-0 left-4 w-1 bg-indigo-500 dark:bg-indigo-400 h-full rounded"></div>

        <transition-group
          name="fade-slide-vertical"
          tag="div"
          class="flex flex-col gap-20 relative z-10"
        >
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            v-intersect="() => show[index] = true"
            :class="[
              'transition duration-800 ease-out flex items-start gap-8',
              show[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: (index * 160) + 'ms' }"
          >
            <!-- دایره ساده و شکیل -->
            <div
              class="w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400 shadow-md mt-3 flex-shrink-0 border-2 border-white dark:border-gray-950"
              aria-hidden="true"
            ></div>

            <!-- محتوا -->
            <div class="flex flex-col max-w-3xl">
              <h3
                class="text-xl font-semibold text-indigo-600 dark:text-indigo-400"
                :title="exp.position"
              >
                {{ exp.position }}
              </h3>
              <div
                class="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1"
                :title="exp.company + ' - ' + exp.location"
              >
                {{ exp.company }} - {{ exp.location }}
              </div>
              <div
                class="text-sm text-gray-400 mb-6"
                :title="dateRange(exp.startDate, exp.endDate)"
              >
                {{ dateRange(exp.startDate, exp.endDate) }}
              </div>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-3">
             <li v-for="(desc, i) in exp.description" :key="i" class="leading-relaxed whitespace-nowrap">
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

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

const { locale, getLocaleMessage } = useI18n() // 👈 اینجا یادت رفته بود

const experiences = computed(() => {
  const items = getLocaleMessage(locale.value)?.experience?.items || []
  return deepExtractStatics(items)
})

const show = ref(Array(experiences.value.length).fill(false))

function formatDateDisplay(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d)) return ''
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short' })
}

function dateRange(start, end) {
  const startDate = formatDateDisplay(start)
  const endDate = end ? formatDateDisplay(end) : 'Present'
  return `${startDate || 'Unknown'} - ${endDate || 'Unknown'}`
}
</script>

<style scoped>
.fade-slide-vertical-enter-active,
.fade-slide-vertical-leave-active {
  transition: all 0.8s ease;
}
.fade-slide-vertical-enter-from,
.fade-slide-vertical-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-vertical-enter-to,
.fade-slide-vertical-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* برای جلوگیری از شکسته شدن عجیب کلمات و انتقال به خط بعد */
.break-words {
  word-break: break-word;
}
</style>
