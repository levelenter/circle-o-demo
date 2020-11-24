import Vue from 'vue'
import { truncate, nl2br, srcSize, toUpperCase } from '~/utils'

Vue.mixin({
  methods: {
    $truncate: truncate,
    $nl2br: nl2br,
    $console: (...args) => {
      console.dir(args)
    },
    $srcSize: srcSize,
    $upperCase: toUpperCase
  }
})
