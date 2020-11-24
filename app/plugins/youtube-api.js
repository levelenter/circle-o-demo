if (typeof window === 'undefined') {
  global.window = {}
}
let ready = false
let callback = null
window.onYouTubePlayerAPIReady = () => {
  ready = true
  if (callback) callback()
}

export default function({ store }) {
  if (ready) {
    store.commit('page/onYoutubePlayerAPIReady')
  } else {
    callback = () => {
      store.commit('page/onYoutubePlayerAPIReady')
    }
  }
}
