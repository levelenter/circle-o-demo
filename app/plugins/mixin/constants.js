import Vue from 'vue'

const constants = {
  fzXl: 'fz-xl fz-2xl-2xl',
  fzLg: 'fz-lg fz-md-xlg',
  fzMd: 'fz-md fz-md-xmd',
  fzSm: 'fz-sm fz-md-xsm',
  fzXs: 'fz-xs fz-md-sm',
  fz2Xs: 'fz-2xs fz-lg-xs',
  pxMain: 'px-3 px-sm-5 px-2xl-6 px-3xl-9',
  mxNmain: 'mx-n3 mx-sm-n5 mx-2xln-6 mx-3xl-n9',
  mtListTeacher: 'mt-405 mt-sm-405 mt-3xl-6',
  mLg: 'm-6 m-sm-7 m-xl-8',
  mtLg: 'mt-6 mt-sm-7 mt-xl-8',
  mbLg: 'mb-6 mb-sm-7 mb-xl-8',
  myLg: 'my-6 my-sm-7 my-xl-8',
  mLg: 'm-6 m-sm-7 m-xl-8',
  mtSm: 'mt-4 mt-sm-405 mt-xl-5',
  mbSm: 'mb-4 mb-sm-405 mb-xl-5',
  mySm: 'my-4 my-sm-405 my-xl-5',
  mSec: 'm-405 m-sm-5 m-xl-505',
  mtSec: 'mt-405 mt-sm-5 mt-xl-505',
  mbSec: 'mb-405 mb-sm-5 mb-xl-505',
  mySec: 'my-405 my-sm-5 my-xl-505',
  pSec: 'p-405 p-sp-5 p-xl-505',
  ptSec: 'pt-405 pt-sp-5 pt-xl-505',
  pbSec: 'pb-405 pb-sp-5 pb-xl-505',
  pySec: 'py-405 py-sp-5 py-xl-505',
  whtBoard: 'bsd bc-wht bw-02r bg-wht-op06 px-3 px-sm-5 pt-4 pb-405 pt-sm-405 pb-5 rounded-lg',
  mtP: 'mt-4 mt-sm-405 mt-md-4',
  myP: 'my-4 my-sm-405 my-md-4',
  mtFormRow: 'mt-3',
  myFormRow: 'my-3',
}

Vue.mixin({
  data() {
    return {
      constants: constants
    }
  }
})
