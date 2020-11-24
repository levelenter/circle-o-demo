<template>
  <transition name="fade">
    <aside v-if="loading" class="position-fixed z-100 topLeft h-100vh w-100vw bg-blk d-flex justify-content-center align-items-center trs-all-05">
      <div class="pb-10 pb-sm-7 pb-lg-6 pr-4 pr-md-5 pr-xl-2">
        <div class="row no-gutters justify-content-end align-items-center">
          <div class="col-auto">
            <h1 class="small-xs fz-md-xs font-weight-400 ls-0 pr-1 clr-gray-dark">Loading</h1>
          </div>
          <div class="col-auto">
            <div class="loader"><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  created () {
    this.loading = this.$store.getters['showLoading']
  },
  mounted () {
    this.$nextTick(() => {
      this.finish()
    })
  },
  methods: {
    finish() {
      this.loading = false
      this.$store.dispatch('finishLoading')
    }
  }
}
</script>

<style scoped>
.loader{position:relative}.loader div{position:absolute;width:.35rem;height:1px;background:#999;animation-timing-function:cubic-bezier(0,1,1,0)}.loader div:nth-child(1){left:.3rem;animation:loader1 1.15s infinite}.loader div:nth-child(2){left:.3rem;animation:loader2 1.15s infinite}.loader div:nth-child(3){left:1.1rem;animation:loader2 1.15s infinite}.loader div:nth-child(4){left:1.8rem;animation:loader3 1.15s infinite}@keyframes loader1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes loader3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes loader2{0%{transform:translate(0,0)}100%{transform:translate(.7rem,0)}}
</style>

