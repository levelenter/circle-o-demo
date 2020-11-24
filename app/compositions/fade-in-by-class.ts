import { onMounted, SetupContext } from '@vue/composition-api'

export default function useFadeInByClass({ root } : SetupContext, className : string) {

  onMounted(() => {
    root.$nextTick().then(() => {
      // DOMの更新サイクル後
      const elements = window.document.getElementsByClassName(className)
      if (elements) {
        for (let i = 0; i < elements.length; i++) {
          ['animate__fadeIn', 'animate__animated'].forEach(c => {
            elements[i].classList.add(c)
          })
        }
      }
    })
  })

  return {
  }
}

