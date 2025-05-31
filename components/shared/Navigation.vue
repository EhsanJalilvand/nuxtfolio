<template>
  <ul class="flex flex-col md:flex-row gap-6 md:items-center">
    <li v-for="(item, index) in filteredNavItems" :key="index">
      <a
        v-if="isExternalLink(item.path)"
        :href="item.path"
        class="text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t(`nav.${item.key}`) }}
      </a>
      <a
        v-else
        :href="item.path"
        class="text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors"
        :class="{ 'text-primary dark:text-primary font-semibold': isActive(item.path) }"
        @click.prevent="handleNavigation(item.path)"
      >
        {{ $t(`nav.${item.key}`) }}
      </a>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute()

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '#about' },
  { key: 'projects', path: '#projects' },
  { key: 'skills', path: '#skills' },
  { key: 'contact', path: '#contact' },
  { key: 'interests', path: '#interests' }
]

// فیلتر کردن آیتم‌های ناوبری اگر نیاز باشد
const filteredNavItems = computed(() => {
  return navItems.filter(item => item.key !== 'home' || route.path !== '/')
})

const isExternalLink = (path) => {
  return path.startsWith('http')
}

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.hash === path.substring(1)
}

const handleNavigation = (path) => {
  if (path.startsWith('#')) {
    const el = document.querySelector(path)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      })
      // برای آپدیت URL بدون ریلود صفحه
      history.pushState(null, null, path)
    }
  } else {
    navigateTo(path)
  }
  $emit('navigate')
}
</script>

<style scoped>
/* استایل‌های اضافی اگر نیاز باشد */
a {
  position: relative;
  padding: 0.5rem 0;
}

a:not([href^="http"]):after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: theme('colors.primary.500');
  transition: width 0.3s ease;
}

a:not([href^="http"]):hover:after {
  width: 100%;
}

a.text-primary:after {
  width: 100%;
}
</style>