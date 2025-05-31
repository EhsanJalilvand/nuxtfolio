<template>
  <section id="experience" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('experience.title') }}</h2>
      
      <div class="relative max-w-3xl mx-auto">
        <!-- Timeline -->
        <div class="absolute left-8 md:left-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
        
        <div class="space-y-8">
          <div 
            v-for="(exp, index) in $tm('experience.items')"
            :key="index"
            class="relative pl-10 md:pl-0"
            :class="{ 'md:text-right': index % 2 === 0, 'md:text-left md:pl-10': index % 2 !== 0 }"
          >
            <div 
              class="w-4 h-4 rounded-full bg-primary absolute left-6 md:left-1/2 transform -translate-x-1/2 mt-1.5"
            ></div>
            
            <div 
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              :class="{ 'md:mr-8': index % 2 === 0, 'md:ml-8': index % 2 !== 0 }"
            >
              <h3 class="text-xl font-bold">{{ exp.position }}</h3>
              <p class="text-primary font-medium">{{ exp.company }}</p>
              <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">{{ exp.duration }}</p>
              <p class="text-gray-700 dark:text-gray-300">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>