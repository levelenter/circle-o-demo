<template>
  <footer :class="[constants.mtSec,constants.ptSec,constants.pxMain]" id="footer">
    <div class="row add2x-sm-gutters add3x-md-gutters align-items-center justify-content-between pb-6 px-1">
      <div class="col-auto">
        <a href="https://silentvoice.co.jp/privacy-policy/" target="_blank" class="fz-2xs font-weight-600 d-block clr-co lh-103 text-center">プライバシーポリシー</a>
      </div>
      <div class="col-auto">
        <p class="small-xs clr-gray-light text-center font-weight-600 ls-0">&copy; CIRCLE-O. All right reserved.</p>
      </div>
    </div>
    <scroll-to-page-top-app />
  </footer>
</template>
<script>
import ScrollToPageTopApp from '@/components/ScrollToPageTopApp'
export default {
  name: 'AppFooterApp',
  components: { ScrollToPageTopApp },
  computed: {
  }
}
</script>
