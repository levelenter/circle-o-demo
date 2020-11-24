<template>
  <div class="position-relative">
    <!-- <app-loading /> -->
    <nuxt />
    <app-footer />
    <share-aside v-if="lang !== 'cn'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import AppLoading from '@/components/AppLoading'
import AppFooter from '@/components/AppFooter'
import ShareAside from '~/components/ShareAside'
export default {
  components: {
    // AppLoading,
    ShareAside,
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
