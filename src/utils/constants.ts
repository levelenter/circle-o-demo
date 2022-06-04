export const Constants = {
  mdSm: '(min-width: 576px)',
  mdMd: '(min-width: 762px)',
  mdLg: '(min-width: 897px)',
  mdXl: '(min-width: 1200px)',
  md2Xl: '(min-width: 1366px)',
  md3Xl: '(min-width: 1600px)',
  fzXl: 'fz-xl fz-2xl-2xl',
  fzLg: 'fz-lg fz-md-xlg',
  fzMd: 'fz-md fz-md-xmd',
  fzSm: 'fz-sm fz-md-xsm',
  fzXs: 'fz-xs fz-md-sm',
  fz2Xs: 'fz-2xs fz-lg-xs',
  pxMain: 'px-3 px-sm-5 px-2xl-6 px-3xl-9',
  pLg: 'p-6 p-sm-7 p-xl-8 p-2xl-9',
  ptLg: 'pt-6 pt-sm-7 pt-xl-8 pt-2xl-9',
  pbLg: 'pb-6 pb-sm-7 pb-xl-8 pb-2xl-9',
  pyLg: 'py-6 py-sm-7 py-xl-87 py-2xl-9',
  mxNmain: 'mx-n3 mx-sm-n5 mx-2xl-n6 mx-3xl-n9',
  mtListTeacher: 'mt-405 mt-sm-405 mt-3xl-6',
  mLg: 'm-6 m-sm-7 m-xl-8 m-2xl-9',
  mtLg: 'mt-6 mt-sm-7 mt-xl-8 mt-2xl-9',
  mbLg: 'mb-6 mb-sm-7 mb-xl-8 mb-2xl-9',
  myLg: 'my-6 my-sm-7 my-xl-87 my-2xl-9',
  mtSm: 'mt-4 mt-sm-405 mt-xl-5',
  mbSm: 'mb-4 mb-sm-405 mb-xl-5',
  mySm: 'my-4 my-sm-405 my-xl-5',
  mSec: 'm-5 m-xl-505',
  mtSec: 'mt-5 mt-xl-505',
  mbSec: 'mb-5 mb-xl-505',
  mySec: 'my-5 my-xl-505',
  pSec: 'p-5 p-xl-505',
  ptSec: 'pt-5 pt-xl-505',
  pbSec: 'pb-5 pb-xl-505',
  pySec: 'py-5 py-xl-505',
  gapDef: 'gap-3 gap-md-4',
  whtBoard: 'bsd bc-wht bw-02r bg-wht-op06 px-3 px-sm-5 pt-4 pb-405 pt-sm-405 pb-5 rounded-lg',
  mtP: 'mt-4 mt-sm-405 mt-2xl-5',
  mbP: 'mb-4 mb-sm-405 mb-2xl-5',
  myP: 'my-4 my-sm-405 my-2xl-5',
  mtFormRow: 'mt-3',
  myFormRow: 'my-3',
} as const
export type Constants = typeof Constants[keyof typeof Constants]
