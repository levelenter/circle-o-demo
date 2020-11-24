import { SetupContext, onMounted, onBeforeUnmount, reactive, toRefs, set } from '@vue/composition-api'

interface BreakPoint {
  key: string
  query: string
}

export default function useBreakPoint({ root } : SetupContext) {

  const breakPoints: BreakPoint[] = [
    { key: 'xs-max', query: 'screen and (max-width: 575px)' },
    { key: 'sm', query: 'screen and  (min-width:  576px)' },
    { key: 'md', query: 'screen and  (min-width:  762px)' },
    { key: 'lg', query: 'screen and  (min-width:  897px)' },
    { key: 'xl', query: 'screen and  (min-width: 1200px)' },
    { key: '2xl', query: 'screen and (min-width: 1366px)' },
    { key: '3xl', query: 'screen and (min-width: 1600px)' }
  ]

  let _state: { [key: string]: boolean } = {}
  breakPoints.forEach(bp => {
    _state[bp.key] = false
  })
  const state = reactive(_state)

  const mqls: { [key: string]: MediaQueryList } = {}

  const changeMediaQuery = (e: any) => {
    breakPoints.forEach(bp => {
      set(state, bp.key, mqls[bp.key].matches)
    })
  }
  onMounted(() => {
    breakPoints.forEach(bp => {
      const mql = window.matchMedia(bp.query)
      mql.addListener(changeMediaQuery)
      mqls[bp.key] = mql
    })
    changeMediaQuery(null)
  })
  onBeforeUnmount(() => {
    breakPoints.forEach(bp => {
      const mql = mqls[bp.key]
      if (mql) {
        mql.removeListener(changeMediaQuery)
      }
    })
  })
  return {
    state
  }
}

