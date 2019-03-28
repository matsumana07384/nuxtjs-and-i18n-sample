import pkg from './package'

// Nuxt.js のカスタム設定を記述

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
  //ルートの Vue.js アプリケーションをインスタンス化する前に実行したい JavaScript plugin を指定
  plugins: [
    '~/plugins/i18n.js'
  ],
  // 
  vendor: [
    'vue-i18n'  
  ],
  // Nuxt.js のルーター（vue-router）をカスタマイズ
  router: {
    middleware: 'i18n'
  },
  //アプリケーションをビルドして、ルートごとに HTML ファイルを生成
  generate: {
    routes: ['/', '/about', '/en', '/en/index']
  } ,
  //--- ここまで追加
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
