export function facebookShareUrl(url: string) {
  return 'https://www.facebook.com/share.php?u=' + encodeURIComponent(url)
}

export function twitterShareUrl(url: string, hashTags: string[] | string, text?: string) {
  if (Array.isArray(hashTags)) {
    hashTags = hashTags.map(ht => ht.trim()).join(',')
  }
  let _text = ''
  if (text) {
    _text = text
  }
  hashTags = hashTags.replace(/[# ]/g, '')
  return 'https://twitter.com/share?text=' + encodeURIComponent(_text)
    + '&hashtags=' + encodeURIComponent(hashTags)
    + '&url=' + encodeURIComponent(url)
}

export function lineShareUrl(url: string) {
  return 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(url)
}
