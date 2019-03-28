export const state = () => ({
    locales: ['en', 'ja'],
    locale: 'ja'
  })

// locale が空でなかったら、state.localに代入
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}