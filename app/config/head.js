const meta = [
  { 'http-equiv': 'Content-Type', content: 'text/html', charset: 'UTF-8' },
  { equiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
  },
  {
    name: 'copyright',
    content: 'Copyright © IWATE MIYAGI Prefecture All rights reserved.'
  },
  { name: 'Author', content: 'TOHOKU JAPAN' },
  { name: 'format-detection', content: 'telephone=no' },
  { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
  { hid: 'og:type', property: 'og:type', content: 'website' },
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'TOHOKU JAPAN'
  },
  { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
]

module.exports = {
  meta: meta,
  link: [
    { hid: 'favicon', rel: 'shortcut icon', href: `/img/global/favicon.png` },
    { hid: 'apple-touch-icon-precomposed', rel: 'apple-touch-icon-precomposed', href: `/img/global/webclip.png` },
    { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: `/img/global/webclip.png` }
  ],
  bodyAttrs: {
    id: 'page-top'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'black'
  }
}
