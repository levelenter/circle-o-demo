<template>
  <a class="d-block hvr-op-07 bbsd bc-gray-dark" :href="langResource['pref']['iwate']['visitLink']" target="_blank">
    <picture class="d-block text-center">
      <source data-srcset="img/global/logo-vi.png" media="--3xl" />
      <img class="h-2rem h-md-205rem d-inline-block hvr-op-1 lazyload lazypreload" data-src="img/global/logo-vi@0.5x.png" alt="visit iwate"/>
    </picture>
    <div class="form-row align-items-center w-cap mt-405 mt-md-5">
      <div class="col-auto">
        <picture class="d-block">
          <source data-srcset="img/vi@0.25x.png" media="--lg" />
          <img class="w-5rem w-md-6rem hvr-op-1 lazyload lazypreload" data-src="img/vi@0.15x.png" alt="visit iwate"/>
        </picture>
      </div>
      <div class="col">
        <p class="lh-105 clr-gray-light fz-2xs">{{ langResource['literals']['L013I'] }}</p>
      </div>
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VisitIwate',
  computed: {
    ...mapGetters({
      langResource: 'page/langResource',
    }),
  }
}
</script>

<style scoped>

</style>
