export const state = () => ({
  scrollLocked: false,
})

export const getters = {
}

export const mutations = {
  lockScroll(state) {
    state.scrollLocked = true;
  },
  unlockScroll(state) {
    state.scrollLocked = false;
  },
}

export const actions = {
  lockScroll({ commit }) {
    commit('lockScroll')
    if (process.client) {
      document.addEventListener('touchmove', ignoreTouchMove, { passive: false })
    }
  },
  unlockScroll({ commit }) {
    commit('unlockScroll')
    if (process.client) {
      document.removeEventListener('touchmove', ignoreTouchMove, false)
    }
  },
  reset({ dispatch }) {
    dispatch('unlockScroll')
  },
}

function ignoreTouchMove(e) {
  e.preventDefault()
}
