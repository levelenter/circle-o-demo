<template>
  <aside id="nav-share" class="position-fixed bg-wht text-center w-2rem d-block z-10 topRight bsd bc-gray rounded py-2 py-md-3 px-2 mr-2 mt-2 mr-xl-3 mt-xl-3 mr-2xl-405 mt-2xl-405">
    <h1 class="font-weight-800 text-center ls-n01 lh-09 w-07rem small-xs clr-gray">S<br>H<br>A<br>R<br>E</h1>
    <ul class="clr-red text-center">
      <li class="mt-2 mr-025">
        <a :href="`https://twitter.com/share?text=${encodedTitle}&hashtags=${hashTagString}&url=${encodedUrl}`"
        class="clr-gray hvr-clr-red"
        target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li class="mt-2">
        <a :href="`https://www.facebook.com/share.php?u=${encodedUrl}`"
        class="clr-gray hvr-clr-red"
        target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'ShareAside',
  props: {
    title: { type: String, default: '' },
    hashTags: { type: Array, default: () => [] }
  },
  data() {
    let hashTagString = 'circle-o'
    if (this.hashTags.length > 0) {
      hashTagString += ',' + this.hashTags.join(',')
    }
    return {
      encodedTitle: encodeURIComponent(this.title),
      encodedUrl: encodeURIComponent(this.$store.getters['request/url']),
      hashTagString: hashTagString
    }
  }
}
</script>

<style scoped>
</style>
