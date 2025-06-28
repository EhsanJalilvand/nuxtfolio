<template>
  <footer class=" dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto dark:text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <!-- Main footer Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About-->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <Icon name="heroicons:sparkles" class="w-6 h-6 text-primary" />
            <span class="text-xl font-bold">{{ $t('footer.title') }}</span>
          </div>
          <p class="mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
              class="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:shadow-md transition-all"
              :aria-label="social.name">
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- QuickLink-->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in navItems" :key="index">
              <a :href="item.path" class=" hover:text-primary  dark:hover:text-primary transition-colors"
                @click.prevent="scrollTo(item.path)">
                {{ $t(`nav.${item.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact-->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <Icon name="heroicons:envelope" class="w-5 h-5 mt-0.5 text-primary" />
              <a href="mailto:info@yourdomain.com" class=" hover:underline">
                info@yourdomain.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="heroicons:phone" class="w-5 h-5 mt-0.5 text-primary" />
              <a href="tel:+1234567890" class=" hover:underline">
                +1 234 567 890
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="mdi:telegram" class="w-5 h-5 mt-0.5 text-primary" />
              <a href="https://t.me/yourId" target="_blank" rel="noopener" class="hover:underline">
                t.me/yourId
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright-->
      <div class="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { key: 'about', path: '#about' },
  { key: 'experience', path: '#experience' },
  { key: 'skills', path: '#skills' },
  { key: 'projects', path: '#projects' },
  { key: 'contact', path: '#contact' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/yourId/' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/yourId/' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/yourId/' }
]

// smooth Scroll
const { scrollTo } = useScrollTo()
</script>

<style scoped>
a:hover svg {
  transform: translateY(-3px);
  transition: transform 0.2s ease;
}
</style>