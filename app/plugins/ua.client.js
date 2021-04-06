export default function({ store }) {
  store.commit('ua/setUserAgent', navigator.userAgent)
}
