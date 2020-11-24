export const state = () => ({
  userAgent: '',
  isXs: false,
  isXsMd: false,
  isMd: false,
  isSpTel: false,
  isMobile: false,
  isPc: false,
  browser: {
    isIe: false,
    isIe11: false,
    isEdge: false,
    isFirefox: false,
    isOpera: false,
    isChrome: false,
    isIosChrome: false,
    isIosSafari: false,
    isSafari: false
  },
  device: {
    isIPod: false,
    isIPhone: false,
    isIPad: false,
    isAndroid: false,
    isAndroidTablet: false,
    isPc: false
  }
})

export const mutations = {
  setUserAgent(state, ua) {
    state.userAgent = ua

    state.isXs =
      (ua.indexOf('Android') !== -1 && ua.indexOf('Mobile') !== -1) ||
      (ua.indexOf('BB') !== -1 && ua.indexOf('Mobile') !== -1) ||
      ua.indexOf('iPhone') !== -1 ||
      ua.indexOf('Windows Phone') !== -1

    state.isXsMd =
      ua.indexOf('Android') !== -1 ||
      (ua.indexOf('Android') !== -1 && ua.indexOf('Mobile') !== -1) ||
      (ua.indexOf('BB') !== -1 && ua.indexOf('Mobile') !== -1) ||
      ua.indexOf('iPhone') !== -1 ||
      ua.indexOf('iPad') !== -1 ||
      ua.indexOf('Windows Phone') !== -1

    state.isMd = ua.indexOf('Android') !== -1 || ua.indexOf('iPad') !== -1

    state.isSpTel =
      ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 || (ua.indexOf('Chrome') > 0 && ua.indexOf('Mobile') > 0)

    state.isMobile = /iphone|ipod|ipad|android|Windows Phone/.test(ua.toLowerCase()) || ua.indexOf('Mobile') > 0
    state.isPc = !state.isMobile

    // browser
    setBrowser(state, ua)

    // device
    setDevice(state, ua)
  }
}

export const getters = {
  userAgent: state => state.userAgent,
  isXs: state => state.isXs,
  isXsMd: state => state.isXsMd,
  isMd: state => state.isMd,
  isSpTel: state => state.isSpTel,
  isMobile: state => state.isMobile,
  isPc: state => state.isPc,

  browserClasses(state) {
    let browser = []
    if (state.browser.isIe11) {
      browser = ['ie11', 'ie']
    } else if (state.browser.isEdge) {
      browser = ['edge']
    } else if (state.browser.isFirefox) {
      browser = ['firefox']
    } else if (state.browser.isOpera) {
      browser = ['opera']
    } else if (state.browser.isChrome) {
      browser = ['chrome', 'desktop']
    } else if (state.browser.isIosChrome) {
      browser = ['chrome', 'ios']
    } else if (state.browser.isIosSafari) {
      browser = ['safari', 'ios']
    } else if (state.browser.isSafari) {
      browser = ['safari']
    }
    return browser
  },
  deviceClasses(state) {
    let device = []
    if (state.device.isIPod) {
      device = ['ipod']
    } else if (state.device.isIPhone) {
      device = ['iphone']
    } else if (state.device.isIPad) {
      device = ['ipad']
    } else if (state.device.isAndroid) {
      device = ['android']
    } else if (state.device.isAndroidTablet) {
      device = ['android', 'tablet']
    }
    return device
  }
}

function setBrowser(state, ua) {
  ua = ua.toLowerCase()
  state.browser.isIe = ua.indexOf('trident') !== -1 || ua.indexOf('msie') !== -1
  state.browser.isIe11 = ua.indexOf('trident/7') !== -1
  state.browser.isEdge = ua.indexOf('edge') !== -1
  state.browser.isFirefox = ua.indexOf('firefox') !== -1
  state.browser.isOpera = ua.indexOf('opr') !== -1
  state.browser.isChrome = ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1 && ua.indexOf('safari') !== -1
  state.browser.isIosChrome = ua.indexOf('crios') !== -1 && ua.indexOf('mobile') !== -1 && ua.indexOf('safari') !== -1
  state.browser.isIosSafari = ua.indexOf('mobile') !== -1 && ua.indexOf('safari') !== -1
  state.browser.isSafari = ua.indexOf('safari') !== -1
}

function setDevice(state, ua) {
  ua = ua.toLowerCase()
  state.device.isIPod = ua.indexOf('ipod') !== -1
  state.device.isIPhone = ua.indexOf('iphone') !== -1
  state.device.isIPad = ua.indexOf('ipad') !== -1
  state.device.isAndroid = ua.indexOf('android') !== -1 && ua.indexOf('mobile') !== -1
  state.device.isAndroidTablet = ua.indexOf('android') !== -1 && ua.indexOf('mobile') === -1
  state.device.isPc =
    state.device.isIPod === false &&
    state.device.isIPhone === false &&
    state.device.isIPad === false &&
    state.device.isAndroid === false &&
    state.device.isAndroidTablet === false
}
