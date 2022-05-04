<template>
  <span class="sp-tel">
      <template v-if="isSp"><a :href="`tel:${tel}`">{{ tel }}</a></template>
      <template v-else>{{ tel }}</template>
  </span>
</template>

<script >

export default {
  props: {
    tel: String
  },
  data() {
    return {
      isSp: false
    }
  },
  mounted () {
    const ua = navigator.userAgent
    this.isSp = (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Chrome') > 0 && ua.indexOf('Mobile') > 0)
  }
}
</script>

