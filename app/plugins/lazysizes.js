import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes/plugins/aspectratio/ls.aspectratio'

// IE対応
if (
  navigator &&
  navigator.userAgent &&
  (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)
) {
  const respimg = () => import('lazysizes/plugins/respimg/ls.respimg')
  respimg()
}

Object.assign(lazySizes.cfg, {
  // expFactor: 1,
  // loadHidden: false,
  // loadMode: 1,
  customMedia: {
    '--xs-max': '(max-width: 575px)',
    '--sm': '(min-width: 576px)',
    '--md': '(min-width: 762px)',
    '--lg': '(min-width: 897px)',
    '--xl': '(min-width: 1200px)',
    '--2xl': '(min-width: 1366px)',
    '--3xl': '(min-width: 1600px)'
  },
})
