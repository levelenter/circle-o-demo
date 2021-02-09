<template>
  <div class="position-relative">
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    AppFooter
  },
  data() {
    return {
    }
  },
  setup(_, ctx) {
    return {
    }
  },
  computed: {
    lang() {
      return this?.$route?.params?.lang
    }
  },
  created() {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style></style>
