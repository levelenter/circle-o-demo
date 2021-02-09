<template>
  <footer id="footer" class="">
    <div class="row add2x-sm-gutters add3x-md-gutters justify-content-center pb-6">
      <div class="col-12">
        <a href="https://silentvoice.co.jp/privacy-policy/" target="_blank" class="fz-2xs font-weight-600 d-block clr-co lh-103 text-center">プライバシーポリシー</a>
        <p class="small-xs clr-gray-light text-center pb-7 pt-2 font-weight-600 ls-0">&copy; CIRCLE-O. All right reserved.</p>
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
