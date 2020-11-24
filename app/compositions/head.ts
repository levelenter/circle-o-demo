import { isUnset, parseBoolean } from '~/utils'

export type HeadPropsOg = {
  image?: string
  title?: string
  description?: string
}

export type HeadProps = {
  path?: string
  title?: string
  description?: string
  og?: HeadPropsOg
  ogImage?: string
  titleSuffix?: boolean
  bodyClasses?: string[]
  htmlClasses?: string[]
  linkIcons?: {
    favicon: string
    appleTouchIcon: string
  },
  lang?: string
}

export type Page = {
  path: string,
  title: string,
  meta: {
    title: string,
    description: string,
    ogImage: string
  },
  hash_tags: string
}

export default (props: HeadProps, $store: any) => {
  const url = $store.getters['request/url']
  const baseUrl = $store.getters['request/baseUrl']
  const path = $store.getters['request/path']
  const canonicalUrl = $store.getters['request/canonicalUrl']
  const title = getTitle(props)
  const description = getDescription(props)
  const og = getOg(props, title, description, baseUrl)
  const { bodyClasses, htmlClasses } = getClasses(props, $store)

  const ALL_COUNTRIES = ['en', 'fr', 'de', 'cn', 'tw', 'kr', 'th']
  const ALL_LANGUAGES = ['en-US', 'fr-FR', 'de-DE', 'zh-CN', 'zh-TW', 'ko-KR', 'th-TH']
  const COUNTRY_LANGUAGE_MAP: { [key: string]: string } = ALL_COUNTRIES.reduce((acc: { [key: string]: string }, cur, idx) => {
    acc[cur] = ALL_LANGUAGES[idx]
    return acc
  }, {})
  const LANGUAGE_COUNTRY_MAP: { [key: string]: string } = ALL_LANGUAGES.reduce((acc: { [key: string]: string }, cur, idx) => {
    acc[cur] = ALL_COUNTRIES[idx]
    return acc
  }, {})

  const country = props.lang || 'en'
  const language = COUNTRY_LANGUAGE_MAP[country]
  let alternateLanguages: string[] = []
  if (props.lang) {
    alternateLanguages = ALL_LANGUAGES.filter(lang => lang !== language)
  }

  const meta = [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:title', property: 'og:title', content: og.title },
    {
      hid: 'og:description',
      property: 'og:description',
      content: og.description
    },
    { hid: 'og:image', property: 'og:image', content: og.image },
    { hid: 'og:locale', property: 'og:locale', content: getOgLocale(language) }
  ]
  const link = [
    { hid: 'rel:canonical', rel: 'canonical', href: canonicalUrl },
    { hid: 'rel:alternate', rel: 'alternate', href: url, hreflang: language}
  ]
  alternateLanguages.forEach(alternateLang => {
    const ogAltLocale = getOgLocale(alternateLang)
    meta.push({ hid: `og:locale:alternate:${ogAltLocale}`, property: 'og:locale:alternate', content: ogAltLocale })
    const href = `${baseUrl}` + getAlternatePath(country, LANGUAGE_COUNTRY_MAP[alternateLang], path)
    link.push({ hid: `rel:alternate:${alternateLang}`, rel: 'alternate', href, hreflang: alternateLang})
  })

  const head: any = {
    title: title,
    htmlAttrs: {
      lang: language
    },
    meta,
    script: [],
    link
  }
  if (bodyClasses) {
    head.bodyAttrs = {
      class: bodyClasses.join(' ')
    }
  }
  if (htmlClasses) {
    head.htmlAttrs['class'] = htmlClasses.join(' ')
  }
  // IE
  if ($store.state.ua.browser.isIe) {
    head.script.push({
      src: 'https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.js',
      async: true
    })
  }
  // icons
  if (props.linkIcons) {
    Array.prototype.push.apply(head.link, [
      { hid: 'favicon', rel: 'shortcut icon', href: props.linkIcons.favicon },
      {
        hid: 'apple-touch-icon-precomposed',
        rel: 'apple-touch-icon-precomposed',
        href: props.linkIcons.appleTouchIcon
      },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: props.linkIcons.appleTouchIcon }
    ])
  }
  // noindex, nofollow
  if (
    parseBoolean(process.env.metaRobotsNoIndexNoFollow) ||
    $store.getters['request/host'].lastIndexOf('.appspot.com') > 0 ||
    $store.getters['request/host'].lastIndexOf('.web.app') > 0 ||
    $store.getters['request/host'].lastIndexOf('.firebaseapp.com') > 0
  ) {
    head.meta.push({
      hid: 'robots',
      name: 'robots',
      content: 'noindex,nofollow'
    })
  }
  $store.commit('page/doneFirstHead')
  return head
}

const getTitle = (props: HeadProps) => {
  let title = props.title || ''
  if (props.titleSuffix) {
    title = `${title} | ${props.titleSuffix}`
  }
  return title
}

const getDescription = (props: HeadProps) => {
  return props.description || ''
}

const getOg = (props: HeadProps, title: string, description: string, baseUrl: string) => {
  let _image = ''
  if (props?.ogImage) {
    _image = props.ogImage
  } else if (props.og && props.og.image) {
    _image = props.og.image
  } else {
    _image = '/img/global/ogi/default.jpg'
  }

  return {
    image: baseUrl + _image,
    title: (props.og && props.og.title) ? props.og.title : title,
    description: (props.og && props.og.description) ? props.og.description : description,
  }
}

const getClasses = (props: HeadProps, $store: any) => {
  let browserClasses = $store.getters['ua/browserClasses']
  let deviceClasses = $store.getters['ua/deviceClasses']
  let bodyClasses = ['typesquare_option']
  let htmlClasses = [...browserClasses, ...deviceClasses]
  Array.prototype.push.apply(bodyClasses, props.bodyClasses ? props.bodyClasses : [])
  Array.prototype.push.apply(htmlClasses, props.htmlClasses? props.htmlClasses : [])

  if (!$store.state.page.isFirstHead) {
    if (window) {
      // 変更された値を追加
      const html = window.document.querySelector('html')
      const htmlClassList = html ? html.classList : []
      for (let i = 0; i < htmlClassList.length; i++) {
        const c = htmlClassList[i]
        if (!htmlClasses.includes(c)) {
          htmlClasses.push(c)
        }
      }
      const body = window.document.querySelector('body')
      const bodyClassList = body ? body.classList : []
      for (let i = 0; i < bodyClassList.length; i++) {
        const c = bodyClassList[i]
        if (!bodyClasses.includes(c)) {
          bodyClasses.push(c)
        }
      }
    }
  }

  // 条件付きクラスの処理 classをなければ追加あれば除去
  htmlClasses = toggleClasses(htmlClasses, $store.state.modal.scrollLocked, 'scroll-locked')
  bodyClasses = toggleClasses(bodyClasses, $store.state.modal.scrollLocked, 'scroll-locked')
  bodyClasses = toggleClasses(bodyClasses, $store.state.page.isOpenNavigation, 'navigation-is-open')
  bodyClasses = toggleClasses(bodyClasses, $store.state.ua.device.isAndroid, 'android')

  return {
    htmlClasses,
    bodyClasses
  }
}

function toggleClasses(classes: string[], flg: boolean, targetClass: string) {
  if (flg) {
    if (!classes.includes(targetClass)) {
      classes.push(targetClass)
    }
  } else {
    classes = classes.filter(c => c !== targetClass)
  }
  return classes
}

function getOgLocale(lang: string) {
  return lang.replace('-', '_')
}

function getAlternatePath(country: string, alternateCountry: string, path: string) {
  const search = new RegExp(`^\/${country}`)
  return path.replace(search, `/${alternateCountry}`)
}
