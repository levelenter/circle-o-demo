/**
 * route 表示前
 * ここでのcontext.appはVueRouter
 */

export default function({ store, route, req }) {
  if (process.client) {
    store.dispatch('request/setCSR', {
      path: route.path
    })
  }
  store.dispatch('page/reset')
}
