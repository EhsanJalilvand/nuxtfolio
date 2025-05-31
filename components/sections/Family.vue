<template>
  <section id="family" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">'family.title'</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(member, index) in $tm('family.members')"
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
        >
          <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
            <img 
              :src="member.photo || '/images/avatar-placeholder.png'" 
              :alt="member.name"
              class="w-full h-full object-cover"
            >
          </div>
          <h3 class="text-xl font-bold">{{ member.name }}</h3>
          <p class="text-primary mb-2">{{ member.relation }}</p>
          <p class="text-gray-600 dark:text-gray-300">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>