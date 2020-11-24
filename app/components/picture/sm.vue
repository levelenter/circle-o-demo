<template>
  <picture>
    <source :data-srcset="`${stem}@0.33x${ext}`" media="--sm" />
    <img class="lazyload" :class="imgClass" :data-src="`${stem}@0.25x${ext}`" :alt="alt" />
  </picture>
</template>

<script>
export default {
  name: 'PictureSm',
  props: {
    src: {
      type: String,
      require: true,
      default: ''
    },
    alt: {
      type: String,
      require: true,
      default: ''
    },
    imgClass: {
      type: String,
      default: ''
    }
  },
  data() {
    const dotIndex = this.src.lastIndexOf('.')
    return {
      stem: this.src.substr(0, dotIndex) || '',
      ext: this.src.substr(dotIndex, this.src.length) || ''
    }
  }
}
</script>
