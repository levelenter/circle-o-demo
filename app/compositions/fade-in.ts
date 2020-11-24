import { onMounted, SetupContext } from '@vue/composition-api'

export default function useFadeIn({ root } : SetupContext, elementId : string) {

  onMounted(() => {
    root.$nextTick().then(() => {
      // DOMの更新サイクル後
      const element = window.document.getElementById(elementId)
      if (element) {
        ['animated'].forEach(c => {
          element.classList.add(c)
        })
      }
    })
  })

  return {
  }
}

