export default function({ store, req }) {
  let ua = ''
  if (process.server && req) {
    ua = req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    ua = navigator.userAgent
  }
  store.commit('ua/setUserAgent', ua)
}
