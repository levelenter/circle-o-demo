require('dotenv').config()
import { routes } from './dynamic-routes'
// import { directories } from './directories'

module.exports = {
  path: '/sitemap.xml',
  hostname: process.env.BASE_URL,
  //cacheTime: 1000 * 60 * 5,
  cacheTime: 0,
  gzip: true,
  // filter({ routes }: any) {
  //   return routes.map((route: any) => {
  //     if (directories.includes(route.url)) {
  //       route.url = `${route.url}/`
  //     }
  //     return route
  //   })
  // },
  exclude: [
    '/'
  ],
  routes
}
