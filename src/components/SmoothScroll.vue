<template>
  <a :href="destination" @click.prevent.stop="onClick"><slot/></a>
</template>

<script>
import {startScroll} from '@/utils/scroll'

export default {
  props: {
    destination: String
  },
  methods: {
    onClick() {
      const elem = document.querySelector(this.destination)
      if (elem instanceof HTMLElement) {
        startScroll(elem.offsetTop)
      }
    }
  }
}
</script>
