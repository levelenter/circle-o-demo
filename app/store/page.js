import resourceJson from '@/assets/json/resource.json'

export const state = () => ({
  isOpenNavigation: false,
  isYoutubePlayerAPIReady: false,
  meta: [],
  count: 0,
  isPlyrPlaying: false,
  loadingLeaveEnter: false,
  topNowLoading: true,
  isFirstHead: true,
  lang: 'en',
  langResource: {}
})

export const getters = {
  meta: state => {
    return state.meta
  },
  lang: state => state.lang,
  langResource: state => state.langResource,
}

export const mutations = {
  openNavigation(state) {
    state.isOpenNavigation = true
  },
  closeNavigation(state) {
    state.isOpenNavigation = false
  },
  doneFirstHead(state) {
    state.isFirstHead = false
  },
  reset(state) {
    state.isOpenNavigation = false
    state.isPlyrPlaying = false
    state.loadingLeaveEnter = false
    state.topNowLoading = true
    state.isFirstHead = true
  },
  onYoutubePlayerAPIReady(state) {
    state.isYoutubePlayerAPIReady = true
  },
  addMeta(state, payload) {
    meta.push(payload)
  },
  countUp(state) {
    state.count++
  },
  setPlyrPlaying(state, payload) {
    state.isPlyrPlaying = payload
  },
  setLoadingLeaveEnter(state, loadingLeaveEnter) {
    state.loadingLeaveEnter = loadingLeaveEnter
  },
  setTopNowLoading(state, topNowLoading) {
    state.topNowLoading = topNowLoading
  },
  setContent(state, payload) {
    state.lang = payload.lang
    state.langResource = resourceJson[payload.lang]
  }
}

export const actions = {
  openNavigation({ commit, dispatch }) {
    commit('openNavigation')
    dispatch('modal/lockScroll', null, { root: true })
  },
  closeNavigation({ commit, dispatch }) {
    commit('closeNavigation')
    dispatch('modal/unlockScroll', null, { root: true })
  },
  reset({ commit, dispatch }) {
    commit('reset')
    dispatch('modal/unlockScroll', null, { root: true })
  },
  setContent({ commit }, payload) {
    commit('setContent', payload)
  }
}

function ignoreTouchMove(e) {
  e.preventDefault()
}
