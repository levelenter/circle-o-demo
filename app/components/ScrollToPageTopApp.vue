<template>
  <transition
    :css="false"
    name="fade"
    @enter="enter"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <div v-show="isShow" id="scroll-to-page-top" v-scroll="handleScroll" class="page-scroll w-100 bottomRight pl-3 pr-4 pb-4 px-lg-5">
      <div class="row no-gutters form-row-md align-items-center">
        <div class="col-auto ml-auto">
          <a v-scroll-to="'#page-top'" href="#page-top" class="fz-2xl fz-lg-3xl fz-xl-4xl clr-blk"><font-awesome-icon :icon="['fal', 'angle-up']"/></a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import anime from 'animejs'

export default {
  name: 'ScrollToPageTop',
  data() {
    return {
      isShow: false,
      animation: null
    }
  },
  created() {
    if (process.browser) {
      this.$nextTick(() => {
        this.handleScroll()
      })
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
      this.isShow = scrollTop > 200
    },
    enter(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        complete: done,
        easing: 'cubicBezier(0.02, 0.01, 0.47, 1)', // swing
        duration: 400
      })
    },
    leave(el, done) {
      this.animation = anime({
        targets: el,
        opacity: [1, 0],
        complete: done,
        easing: 'easeInQuart',
        duration: 1000
      })
    },
    afterLeave() {},
    leaveCancelled(el, done) {
      if (this.animation) {
        this.animation.reverse()
      }
    }
  }
}
</script>

<style>
#scroll-to-page-top {
  position: fixed;
  z-index: 500;
}
</style>
