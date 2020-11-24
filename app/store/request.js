import { directories } from '@/config/directories'

export const state = () => ({
  protocol: '',
  host: '',
  baseUrl: '',
  url: '',
  path: '',
  isSSR: false
})

export const getters = {
  protocol: state => state.protocol,
  host: state => state.host,
  baseUrl: state => state.baseUrl,
  path: state => state.path,
  url: state => state.url,
  isSSR: state => state.isSSR,
  canonicalUrl: state => {
    // URLの正規化(directoryは最後に「/」を付ける pageは最後の「/」を外す)
    const noTrailingSlash = state.path.replace(/\/$/, '')
    return state.baseUrl
    + noTrailingSlash
    + (directories.includes(noTrailingSlash) ? '/' : '')
  }
}

export const mutations = {
  SET_REQUEST(state, payload) {
    state.protocol = payload.protocol
    state.host = payload.host
    state.baseUrl = payload.protocol + '://' + payload.host + '/'
  },
  SET_PATH(state, path) {
    const noTrailingSlash = path.replace(/\/$/, '')
    state.path = noTrailingSlash + (directories.includes(noTrailingSlash) ? '/' : '')
    state.url = state.baseUrl + state.path
  },
  SET_SSR(state, ssr) {
    state.isSSR = ssr
  }
}

export const actions = {
  setSSR({ commit }, payload) {
    commit('SET_REQUEST', payload)
    commit('SET_PATH', payload.path)
    commit('SET_SSR', true)
  },
  setCSR({ commit }, payload) {
    commit('SET_PATH', payload.path)
    commit('SET_SSR', false)
  }
}
