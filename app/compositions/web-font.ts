import { onMounted, SetupContext } from '@vue/composition-api'

declare const Ts: any
type TypekitType = {
  load(options: any): void
}

declare const Typekit: TypekitType

export default function useWebFont({ root } : SetupContext) {
  const load = () => {
    if (typeof Ts !== 'undefined') {
      // console.log("%ci%c Ts.loadFont", "color: white; background: blue;", "");
      Ts.loadFont()
    }
    if (typeof Typekit !== 'undefined') {
      // console.log("%ci%c Typekit.load", "color: white; background: blue;", "");
      Typekit.load({
        scriptTimeout: 1000,
        async: true
      })
    }
  }

  onMounted(() => {
    root.$nextTick().then(() => {
      // DOMの更新サイクル後
      load()
    })
  })

  return {
    load
  }
}

