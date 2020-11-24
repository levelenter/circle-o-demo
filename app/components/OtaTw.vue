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
                      <source data-srcset="img/global/logo-trip@0.33x.png" media="--lg" />
                      <img class="w-4rem d-inline-block hvr-op-1 lazyload lazypreload" data-src="img/global/logo-trip@0.25x.png" alt="visit iwate"/>
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
  name: 'OtaTw',
  data() {
    return {
      courses: [
        {
          title: '宮城縣名人課程风',
          description: '迷藏聖所！參拜神社',
          img: 'img/bnr/tw-a.jpg',
          href: 'https://tc.trip.com/things-to-do/detail/32784012/'
        },
        {
          title: '宮城縣南部地區魅力探索課程',
          description: '認識狐狸！歷史和城堡之旅',
          img: 'img/bnr/tw-b.jpg',
          href: 'https://tc.trip.com/things-to-do/detail/32783764/'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
