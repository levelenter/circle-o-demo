<template>
  <picture>
    <source :data-srcset="`${stem}@0.75x${ext}`" media="--2xl" />
    <source :data-srcset="`${stem}@0.5x${ext}`" media="--md" />
    <img :class="imgClass" :data-src="`${stem}@0.33x${ext}`" :alt="alt" />
  </picture>
</template>

<script>
  export default {
  name: 'PictureWork',
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
