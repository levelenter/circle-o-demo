<script setup>
import {scrollLock} from '@/composables/scrollLock'

const props = defineProps({
  id: String,
})
import { onMounted } from 'vue'

let scrollTop = 0

onMounted(() => {
  const dialog = document.getElementById(props.id)
  dialog.addEventListener('close', function onClose() {
    // console.log('close ' + props.id)
    document.removeEventListener('touchmove', scrollLock)
    // document.html.classList.remove('is-locked')
    // document.body.classList.remove('is-locked')

    const scrollElement = document.scrollingElement
    scrollElement.style.position = ''
    scrollElement.style.top = ''
    scrollElement.style.width = ''
    window.scroll({ top: scrollTop })
  })
})
const openModal = () => {
  // console.log('openModal')
  const dialog = document.getElementById(props.id)
  dialog.showModal()
  document.addEventListener('touchmove', scrollLock, { passive: false })
  // document.html.classList.add('is-locked')
  // document.body.classList.add('is-locked')

  const scrollElement = document.scrollingElement
  scrollTop = scrollElement.scrollTop
  scrollElement.style.position = 'fixed'
  scrollElement.style.top = -scrollTop + 'px'
  scrollElement.style.width = '100%'
}

const clickDialog = (e) => {
  const dialog = document.getElementById(props.id)
  if (e.target === dialog) {
    dialog.close()
  }
}
</script>

<template>
  <a @click="openModal">
    <div class="btn">さらに読む</div>
  </a>
  <dialog @click="clickDialog" :id="props.id">
    <slot></slot>
<!--    <form method="dialog">-->
<!--      <slot name="close"></slot>-->
<!--    </form>-->
  </dialog>
</template>
