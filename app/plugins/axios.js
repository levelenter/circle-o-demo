export default function({ $axios, store }) {
  $axios.onRequest(config => {
    config.baseURL = process.server
      ? 'http://' + process.env.NUXT_HOST + ':' + process.env.NUXT_PORT
      : store.getters['request/baseUrl']

    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
  })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
