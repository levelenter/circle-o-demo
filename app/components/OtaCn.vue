<template>
  <div id="ota-area" class="btsd bc-gray py-7 py-md-9">
    <h1 class="fz-2xl fz-md-3xl lh-1 text-center font-weight-200 clr-wht lang-common"><span class="font-weight-600">FIND/EXPLORE</span></h1>
    <ul class="row add2x-sm-gutters add3x-2xl-gutters justify-content-center">
      <li v-for="c in courses" class="col-10 col-sm-5 col-lg-4 mt-5">
        <a class="d-block hvr-op-07 bsd bc-gray-dark position-relative" :href="c.href" target="_blank">
          <div class="row no-gutters align-items-center">
            <div class="col-4 ovh">
              <picture class="d-block h-9rem h-sm-10rem h-md-11rem h-lg-10rem h-2xl-11rem">
                <source :data-srcset="$srcSize(c.img, '@0.75x')" media="--2xl" />
                <img class="h-100 img-align-center hvr-op-1 lazyload lazypreload" :data-src="$srcSize(c.img, '@0.5x')" alt=""/>
              </picture>
            </div>
            <div class="col">
              <div class="px-4 px-md-405">
                <h3 class="clr-wht fz-2xs font-weight-600 lh-1">{{ c.title }}</h3>
                <p class="lh-105 clr-gray-light small mt-1 mt-sm-2 mt-2xl-3">{{ c.description }}</p>
                <div class="row justify-content-between align-items-center mt-2 mt-xl-3">
                  <div class="col-auto">
                    <picture class="d-block lh-1">
                      <source data-srcset="img/global/logo-c-trip@0.33x.png" media="--lg" />
                      <img class="w-3rem d-inline-block hvr-op-1 lazyload lazypreload" data-src="img/global/logo-c-trip@0.25x.png" alt="visit iwate"/>
                    </picture>
                  </div>
                  <div class="col-auto">
                    <span class="d-block z-1 fz-2xs clr-red lh-1"><font-awesome-icon :icon="['fas', 'external-link']" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OtaCn',
  data() {
    return {
      courses: [
        {
          title: '风光秀丽的松岛线路',
          description: '体验和服游松岛，拍网红美照！',
          img: 'img/bnr/cn-a.jpg',
          href: 'http://activity.ctrip-ttd.hk/ottd-activity/dest/t32784491.html'
        },
        {
          title: '与品酒师一起探寻美酒之旅',
          description: '一杯佳酿给爱酒的人，一起开启美酒探寻美酒之旅',
          img: 'img/bnr/cn-b.jpg',
          href: 'http://activity.ctrip-ttd.hk/ottd-activity/dest/t32784245.html'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
