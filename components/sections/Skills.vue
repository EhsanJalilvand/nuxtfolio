<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('skills.title') }}</h2>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <div v-for="(skill, index) in $tm('skills.items')" :key="index">
          <div class="flex justify-between mb-2">
            <h3 class="font-medium">{{ skill.name }}</h3>
            <span class="text-primary">{{ skill.level }}%</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              class="bg-primary h-2.5 rounded-full" 
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div 
          v-for="(tool, index) in $tm('skills.tools')"
          :key="index"
          class="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <Icon :name="tool.icon" class="w-12 h-12 mb-4 text-primary" />
          <span class="font-medium">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>