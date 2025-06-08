<template>
  <footer class=" dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto dark:text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <!-- بخش اصلی فوتر -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- درباره من -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <Icon name="heroicons:sparkles" class="w-6 h-6 text-primary" />
            <span class="text-xl font-bold">{{ $t('footer.title') }}</span>
          </div>
          <p class="mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <a 
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:shadow-md transition-all"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- لینک‌های سریع -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in navItems" :key="index">
              <a 
                :href="item.path" 
                class=" hover:text-primary  dark:hover:text-primary transition-colors"
                @click.prevent="scrollTo(item.path)"
              >
                {{ $t(`nav.${item.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- اطلاعات تماس -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <Icon name="heroicons:envelope" class="w-5 h-5 mt-0.5 text-primary" />
              <a href="mailto:contact@example.com" class=" hover:underline">
                contact@example.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="heroicons:phone" class="w-5 h-5 mt-0.5 text-primary" />
              <a href="tel:+989123456789" class=" hover:underline">
                +98 912 345 6789
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- کپی رایت -->
      <div class="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
// استفاده از همان navItems که در هدر تعریف شده
const navItems = [
  { key: 'about', path: '#about' },
  { key: 'projects', path: '#projects' },
  { key: 'skills', path: '#skills' },
  { key: 'contact', path: '#contact' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com' }
]

// تابع اسکرول مشابه هدر
const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    })
    history.pushState(null, null, id)
  }
}
</script>

<style scoped>
/* انیمیشن hover برای آیکون‌های اجتماعی */
a:hover svg {
  transform: translateY(-3px);
  transition: transform 0.2s ease;
}
</style>