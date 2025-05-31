export default defineNuxtConfig({
    css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/color-mode'
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
        { code: 'de', name: 'Deutsch', file: 'en.json' },
      { code: 'fa', name: 'فارسی', file: 'fa.json', dir: 'rtl' }
    ],
    lazy: true
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
    injectPosition: 'first',
    viewer: true
  }

})