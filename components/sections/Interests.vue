<template>
  <section id="interests" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('interests.title') }}</h2>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(interest, index) in $tm('interests.items')"
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <div class="w-16 h-16 mx-auto mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            <Icon :name="interest.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold mb-2">{{ interest.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ interest.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>