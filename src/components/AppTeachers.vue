<script setup>
import { Constants } from '../utils/constants'
import { nextTick, onMounted, ref } from 'vue'
import { nl2br, truncate } from '../utils'

const teachers = ref([])

onMounted(async () => {
  const url = import.meta.env.PUBLIC_API_TEACHERS
  const response = await fetch(url)
  if (response.ok) {
    const json = await response.json()
    teachers.value.push(...json.data.map(t => {
      const youtubeId = (t?.appeal_movie_url) ? t?.appeal_movie_url.split('/').pop() : ''
      return {
        ...t,
        youtubeId,
        image_url: 'https://circle-o.jp' + t.image_url,
        self_introduction: truncate(nl2br(t?.self_introduction), 69)
      }
    }))
    nextTick().then(() => {
      if (typeof Typekit !== 'undefined') {
        // console.log("%ci%c Typekit.load", "color: white; background: blue;", "");
        Typekit.load({
          scriptTimeout: 1000,
          async: true
        })
      }
    })
  }
})
</script>

<template>
  <ul class="form-row flex-nowrap flex-lg-wrap pl-3 pl-md-4 pl-lg-0 pb-5 pb-lg-0">
    <li v-for="t in teachers" :class="['col-10 col-sm-5 col-lg-4 col-xl-3', Constants.mtListTeacher]">
      <div class="form-row align-items-end">
        <div class="col-6">
          <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
            <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
            <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
            <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
            <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
            <iframe loading="lazy" v-if="t.youtubeId" class="embed-responsive-item" :src="`https://www.youtube-nocookie.com/embed/${t.youtubeId}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-6">
          <picture class="d-block w-2rem w-md-205rem h-2rem h-md-205rem rounded-circle ovh bsd bw-1px">
            <source :srcset="t.image_url" :media="Constants.mdSm" />
            <img loading="lazy" class="w-100 h-100 of-cover" :src="t.image_url" :alt="t.user_name + '先生'">
          </picture>
          <h2 class="fz-xsm lh-104 clr-blk mt-1">{{ t.user_name }}<small class="ml-1">先生</small></h2>
          <p class="fz-2xs fz-2xl-xs lh-106 mt-3 mt-sm-4" v-html="t.self_introduction"></p>
        </div>
      </div>
    </li>
  </ul>
</template>
