export default defineNuxtConfig({
  components: true,
  css: [
    '~/assets/css/main.css',
    '@/assets/css/fonts.css',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/color-mode'
  ],
  plugins: [
    '~/plugins/intersect.js'
  ],
  runtimeConfig: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID  || '',
    EMAIL_USER: process.env.EMAIL_USER  || '',
    EMAIL_PASS: process.env.EMAIL_PASS  || '',
    EMAIL_TO: process.env.EMAIL_TO  || '',
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    storageKey: 'nuxt-color-mode'
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'fa', name: 'فارسی', file: 'fa.json', dir: 'rtl' }
    ],
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    }
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
    injectPosition: 'first',
    viewer: true
  }
})