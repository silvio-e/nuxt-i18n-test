
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: './plugins/setLocale' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n'
  ],
  /**
   * Router configs
   */
  router: {
    middleware: ['setLocale']
  },
  /**
   * Module configs
   */
  i18n: {
    // vue-i18n configuration.
    // See documentation: http://kazupon.github.io/vue-i18n/api/#constructor-options
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          Hello: 'Hello'
        },
        no: {
          Hello: 'Hei'
        },
        se: {
          Hello: 'Hei se'
        }
      }
    },
    // locales: ['no', 'se', 'en'],
    locales: [
      { code: 'no', file: 'no.js' },
      { code: 'se', file: 'se.js' },
      { code: 'en', file: 'en.js' }
    ],
    defaultLocale: 'no',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'translations/',
    // langDir: null,
    detectBrowserLanguage: false,
    vuex: {
      // Module namespace
      moduleName: 'i18n',

      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: true,

      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: false,

      // Mutation to commit to set route parameters translations
      syncRouteParams: true
    }

    // // Called right before app's locale changes
    // beforeLanguageSwitch: (oldLocale, newLocale) => null,

    // // Called after app's locale has changed
    // onLanguageSwitched: (oldLocale, newLocale) => null
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
