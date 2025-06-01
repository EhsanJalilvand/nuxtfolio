<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('about.title') }}</h2>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="about-image">
          <img 
           src="/images/avatar.png"
            alt="Your Name"
            class="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
          >
        </div>
        
        <div class="about-content">
          <p class="text-lg mb-6">
         about.description
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(trait, index) in $tm('about.traits')"
              :key="index"
              class="px-4 py-2 bg-primary/10 text-primary rounded-full"
            >
             trait
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>