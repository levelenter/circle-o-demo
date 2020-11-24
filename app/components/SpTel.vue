<template>
  <span class="sp-tel">
    <a
      v-if="$store.getters['ua/isSpTel']"
      :href="'tel:' + tel">{{ tel }}</a>
    <template v-else>{{ tel }}</template>
  </span>
</template>

<script>
export default {
  name: 'SpTel',
  props: {
    tel: {
      type: String,
      default: '',
      required: true
    }
  },
}
</script>
