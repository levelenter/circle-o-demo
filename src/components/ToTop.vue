<script setup>
import {startScroll} from '@/utils/scroll'
import { onMounted, ref } from 'vue'

const isShow = ref(false)
onMounted(() => {
  (new IntersectionObserver(entries => {
    isShow.value = !(entries[0].isIntersecting)
  })).observe(document.getElementById('scroll-top-observer'))
})
</script>

<template>
  <div id="to-top" :class="{ 'is-show': isShow }" class="transition-fade w-100 bottomRight pl-3 pr-4 pb-4 px-lg-5">
    <div class="row no-gutters form-row-md align-items-center">
      <div class="col-auto ml-md-auto">
        <a href="https://circle-o.jp/app/#/entrance-student-page" target="_blank" class="d-block w-11rem w-sm-13rem w-lg-17rem px-3 px-sm-4 py-2 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
          <div class="h-100 d-flex flex-wrap align-items-center">
            <div class="font-V7MG-EB fz-xs fz-md-md fz-lg-lg">無料お申し込み</div>
            <div class="ml-auto"><i class="clr-wht fas fa-hands-helping"></i></div>
          </div>
        </a>
      </div>
      <div class="col-auto ml-2">
        <a href="/recruit/" class="d-block w-9rem w-sm-13rem w-lg-17rem px-3 px-sm-4 py-2 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
          <div class="h-100 d-flex flex-wrap align-items-center">
            <div class="font-V7MG-EB fz-xs fz-md-md fz-lg-lg">先生大募集</div>
            <div class="ml-auto"><i class="clr-wht fas fa-user-edit"></i> </div>
          </div>
        </a>
      </div>
      <div class="col-auto ml-auto">
        <a @click.prevent.stop="startScroll(0)" href="#page-top" class="fz-2xl fz-lg-3xl fz-xl-4xl clr-blk">
          <i class="fal fa-angle-up"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
#to-top {
  position: fixed;
  z-index: 500;
}
</style>
