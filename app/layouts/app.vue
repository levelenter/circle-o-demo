<template>
  <div class="position-relative">
    <!-- <app-loading /> -->
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import AppLoading from '@/components/AppLoading'
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    // AppLoading,
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
