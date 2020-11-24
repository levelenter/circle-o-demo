export const state = () => ({
  shownLoading: false,
  topNowLoading: true,
  contactDone: false
})

export const getters = {
  showLoading: state => !state.shownLoading
}

export const mutations = {
  setShownLoading(state, shownLoading) {
    state.shownLoading = shownLoading
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }, { route }) {
    // dispatch('request/setSSR', {
    //   protocol: 'https',
    //   host: process.env.host,
    //   path: route.path
    // })
    await dispatch('request/setSSR', {
      protocol: process.env.BASE_PROTOCOL,
      host: process.env.BASE_HOST,
      path: route.path
    })
  },
  finishLoading({ commit }) {
    commit('setShownLoading', true)
  }
}
