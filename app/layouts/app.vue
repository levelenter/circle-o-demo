<template>
  <div class="position-relative">
    <!-- <app-loading /> -->
    <nuxt />
    <app-footer-app />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import AppLoading from '@/components/AppLoading'
import AppFooterApp from '@/components/AppFooterApp'
export default {
  components: {
    AppFooterApp
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
