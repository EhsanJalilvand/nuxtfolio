<template>
  <ul class="flex flex-col md:flex-row gap-6 md:items-center">
    <li v-for="(item, index) in navItems" :key="index">
      <NuxtLink 
        :to="item.path" 
        class="text-lg font-medium hover:text-primary transition-colors"
        active-class="text-primary font-semibold"
        @click="$emit('navigate')"
      >
        {{ $t(`nav.${item.key}`) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '#about' },
  { key: 'projects', path: '#projects' },
  { key: 'skills', path: '#skills' },
  { key: 'contact', path: '#contact' },
   { key: 'hero', path: '#hero' },
   { key: 'Interests', path: '#Interests' },
]
</script>