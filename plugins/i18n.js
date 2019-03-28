import Vue from 'vue'
import VueI18n from 'vue-i18n'

// vue-i18n を読み込み
Vue.use(VueI18n)

//ライブラリの設定
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'ja',
    messages: {
      'ja': require('~/locales/ja.json'),
      'en': require('~/locales/en.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}