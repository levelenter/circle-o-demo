import { parseBoolean } from './app/utils'
import { NuxtConfig } from '@nuxt/types'

require('dotenv').config()

const head = require('./app/config/head')
const router = require('./app/config/router')
const sitemap = require('./app/config/sitemap.ts')
const generate = require('./app/config/generate.ts')

const nuxtConfig: NuxtConfig = {
  target: 'static',
  srcDir: 'app',
  telemetry: false,
  env: {
    metaRobotsNoIndexNoFollow: process.env.META_ROBOTS_NO_INDEX_NO_FOLLOW || '',
  },
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Headers of the page
   */
  head: head,

  generate,
  hooks: {
  },

  router,

  /*
   ** Customize the progress-bar color
   */
  // loading: false,
  // loading: '~/components/AppLoading',
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'black'
  // },

  /*
   ** Global CSS
   */
  css: [
    '@splidejs/splide/dist/css/themes/splide-default.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/bt4Ex.css',
    '~/assets/css/main.css',
    '~/assets/css/form.css',
    '~/assets/css/app.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/composition-api',
    '@/plugins/mixin/constants',
    '@/plugins/mixin/functions',
    '@/plugins/vue/scroll-to',
    '@/plugins/vue/scroll',
    // '@/plugins/vue/loading-overlay',
    { src: '@/plugins/vue/vue-splide', mode: 'client' },
    '@/plugins/vue/inview',
    '@/plugins/font-awesome',
    { src: '@/plugins/lazysizes', mode: 'client' },
    '@/plugins/directive/add-hover-class',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-tag-manager', { id: process.env.GTM_ID, pageTracking: true, dev: false }],
  ],

  /*
   ** Build configuration
   */
  build: {
    hardSource: process.env.NODE_ENV === 'development',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (config && config.module && parseBoolean(process.env.ESLINT_ENABLE) && ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    transpile: [],
  },

  sitemap
}

module.exports = nuxtConfig
