<template>
  <footer class="bg-gray-50 dark:bg-gray-900 py-12 mt-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Column -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="heroicons:sparkles" class="w-6 h-6 text-primary" />
            <span>Your Name</span>
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <a 
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:shadow-md transition-shadow"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink 
                :to="item.path" 
                class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {{ $t(`nav.${item.key}`) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ $t('footer.contact') }}</h4>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Icon name="heroicons:envelope" class="w-5 h-5" />
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </li>
            <li class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Icon name="heroicons:phone" class="w-5 h-5" />
              <a href="tel:+1234567890">+1 234 567 890</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500">
        &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '#about' },
  { key: 'projects', path: '#projects' },
  { key: 'skills', path: '#skills' },
  { key: 'contact', path: '#contact' }
]

const socialLinks = [
  { name: 'github', icon: 'mdi:github', url: 'https://github.com/yourusername' },
  { name: 'linkedin', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'twitter', icon: 'mdi:twitter', url: 'https://twitter.com/yourusername' },
  { name: 'instagram', icon: 'mdi:instagram', url: 'https://instagram.com/yourusername' }
]
</script>