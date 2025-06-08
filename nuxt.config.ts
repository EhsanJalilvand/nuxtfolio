export default defineNuxtConfig({
    components: true,
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
  plugins: [
  '~/plugins/intersect.js'
],
   colorMode: {
    classSuffix: '', // مهم: باید خالی باشد
    preference: 'system', // یا 'light'/'dark'
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
    // redirectOn: 'root'
  }
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
    injectPosition: 'first',
    viewer: true
  }

})