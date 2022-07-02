<script setup>
import {scrollLock} from '@/composables/scrollLock'
import {backfaceFixed} from '@/utils/backface-fixed'

const props = defineProps({
  id: String,
})
import { onMounted } from 'vue'

// let scrollTop = 0

onMounted(() => {
  const dialog = document.getElementById(props.id)
  dialog.addEventListener('close', function onClose() {
    // document.removeEventListener('touchmove', scrollLock)

    backfaceFixed(false)
    // // console.log('close ' + props.id)
    // document.removeEventListener('touchmove', scrollLock)
    // // document.html.classList.remove('is-locked')
    // // document.body.classList.remove('is-locked')
    //
    // const scrollElement = document.scrollingElement
    // console.log(scrollElement)
    // scrollElement.style.position = ''
    // scrollElement.style.top = ''
    // scrollElement.style.width = ''
    // window.scroll({ top: scrollTop })
  })
})
const openModal = () => {
  // console.log('openModal')
  const dialog = document.getElementById(props.id)
  dialog.showModal()

  backfaceFixed(true)

  // document.addEventListener('touchmove', scrollLock, { passive: false })
  // document.html.classList.add('is-locked')
  // document.body.classList.add('is-locked')

  // const scrollElement = document.scrollingElement
  // scrollTop = scrollElement.scrollTop
  // scrollElement.style.position = 'fixed'
  // scrollElement.style.top = -scrollTop + 'px'
  // scrollElement.style.width = '100%'
}

const clickDialog = (e) => {
  const dialog = document.getElementById(props.id)
  if (e.target === dialog) {
    dialog.close()
  }
}

const close = () => {
  const dialog = document.getElementById(props.id)
  dialog.close()
}
</script>

<template>
  <a class="d-block p-2 text-center bsd bc-co ff-B fz-2xs mt-3 rounded clr-co hvr-bg-co hvr-clr-wht" @click="openModal">さらに読む +</a>
  <dialog class="p-4 p-md-5 rounded-sm bsd bc-co bw-02r" @click="clickDialog" :id="props.id">
    <button class="bg-none position-absolute topRight z-1 mt-3 mr-3" @click="close"><i class="fz-6 clr-co fa-thin fa-xmark"></i></button>
    <slot></slot>
<!--    <form method="dialog">-->
<!--      <slot name="close"></slot>-->
<!--    </form>-->
  </dialog>
</template>
