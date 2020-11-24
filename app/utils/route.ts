import { Route } from '@@/node_modules/vue-router'

export const routeOption = (route: Route, key: string, value: boolean) => {
  return route.matched.some(m => {
    if (process.server) {
      return Object.values(m.components).some((component: any) =>
        Object.values(component._Ctor).some(
          (ctor: any) => ctor.options && ctor.options[key] === value
        )
      )
    } else {
      return Object.values(m.components).some(
        (component: any) => component.options && component.options[key] === value
      )
    }
  })
}
