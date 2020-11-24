import Vue from 'vue'

const constants = {
  tlLB: 'small-xs fz-xl-2xs mt-1 mt-md-2 clr-blk',
  fzXs: 'fz-xs fz-md-sm',
  fz2Xs: 'fz-2xs fz-lg-xs',
  fzTl: 'fz-2xs fz-md-xs fz-lg-sm',
  tlCate: 'small-xs fz-lg-xs lh-1 lh-lg-102 clr-gray mb-n5 bf-_',
  mainClass: 'pl-1 pl-3xl-0 pr-3xl-2',
  p: 'small-xs small-md-xs small-lg-2xs fz-xl-2xs mt-3 mt-md-4 lh-2 lh-xl-202 ls-n001',
  pJp: 'font-TBG small-xs fz-2xl-2xs mt-3 mt-md-4 lh-2 lh-xl-206 ls-01',
  ptTop: 'pt-4 pt-xl-405',
  pbBottom: 'pb-4 pb-xl-405',
  ptMain: 'pt-6 pt-lg-center-10213',
  mtSec: 'mt-8 mt-md-12 mt-xl-13',
  mbSec: 'mb-8 mb-md-12 mb-xl-13',
  mySec: 'my-8 my-md-12 my-xl-13',
  mtP: 'mt-3 mt-md-4',
  mtFormRow: 'mt-3',


}

Vue.mixin({
  data() {
    return {
      constants: constants
    }
  }
})
