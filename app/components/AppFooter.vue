<template>
  <footer id="footer" class="bg-blk btsd bc-gray">
    <div class="row add2x-sm-gutters add3x-md-gutters justify-content-center py-7 py-md-9">
      <div class="col-12 mb-8">
        <h1 class="fz-2xl fz-md-3xl lh-103 text-center font-weight-200 clr-wht lang-common">Did You Find Your <br class="d-sm-none"><span class="font-weight-600">Perfect View?</span></h1>
        <h2 class="fz-xsm fz-sm-md fz-md-lg lh-103 text-center font-weight-200 clr-wht mt-3 lang-common">Welcome to <span class="font-weight-600 clr-red">kumamoto</span> Pref In JAPAN.</h2>
      </div>
    </div>
    <p class="small-xs clr-gray-light text-center pb-7 pt-xl-2 font-weight-600 ls-02 lang-common">&copy; kumamoto Prefecture. All right reserved.</p>
    <scroll-to-page-top />
  </footer>
</template>
<script>
import ScrollToPageTop from '@/components/ScrollToPageTop'
export default {
  name: 'AppFooter',
  components: { ScrollToPageTop },
  computed: {
  }
}
</script>
