export function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
  return possibleKey in obj;
}

export function parseBoolean(value: any) {
  return value === 'true' || value === 'True' || value === '1' || value === 1 || value === true
}

export const isUnset = (o: any) => typeof o === 'undefined' || o === null
export const isSet = (o: any) => !isUnset(o)

export const isNumeric = (n: any) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const isSameURL = (a: string, b: string) => a.split('?')[0] === b.split('?')[0]

export const isRelativeURL = (u: string) =>
  u && u.length && /^\/[a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*[?]?([^#]*)#?([^#]*)$/.test(u)

export const parseQuery = (queryString: string) => {
  const query: {[key: string]: any} = {}
  const pairs = queryString.split('&')
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}

export const encodeQuery = (queryObject: {[key: string]: string | number | boolean}) => {
  return Object.entries(queryObject)
  .filter(([key, value]) => typeof value !== 'undefined')
  .map(
    ([key, value]) =>
      encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : '')
  )
  .join('&')
}

export function normalizePath(path = '') {
  // Remove query string
  let result = path.split('?')[0]
  // Remove redundant / from the end of path
  if (result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1)
  }
  return result
}

export function encodeValue(val: any) {
  if (typeof val === 'string') {
    return val
  }
  return JSON.stringify(val)
}

export function decodeValue(val: any) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val)
    } catch (_) { }
  }
  // Return as is
  return val
}

export function nl2br(str: string) {
  if (!str) str = ''
  return str.replace(/\r\n/g, '<br>').replace(/([\n\r])/g, '<br>')
}

export function srcSize(src: string, size: string) {
  const dotIndex = src.lastIndexOf('.')
  const stem = src.substr(0, dotIndex) || ''
  const ext = src.substr(dotIndex, src.length) || ''
  return stem + size + ext
}

export function truncate(str: string, size: number, suffix: string) {
  if (!str) str = ''
  if (!size) size = 32
  if (!suffix) suffix = '...'
  if (mbStrlen(str) > size) {
    return mbSubstr(str, 0, size) + suffix
  }
  return str
}

export function splitExt(src: string) {
  const dotIndex = src.lastIndexOf('.')
  return {
    stem: src.substr(0, dotIndex) || '',
    ext: src.substr(dotIndex, src.length) || ''
  }
}

export const isSurrogatePear = (upper: number, lower: number) => {
  return 0xD800 <= upper && upper <= 0xDBFF && 0xDC00 <= lower && lower <= 0xDFFF
}

export const mbStrlen = ( str: string ) => {
  let ret = 0
  for (let i = 0; i < str.length; i++,ret++) {
    let upper = str.charCodeAt(i)
    let lower = str.length > (i + 1) ? str.charCodeAt(i + 1) : 0
    if ( isSurrogatePear( upper, lower ) ) { i++ }
  }
  return ret
}

export const mbSubstr = ( str: string, begin: number, end: number ) => {
  let ret = ''
  for (let i = 0, len = 0; i < str.length; i++, len++) {
    let upper = str.charCodeAt(i)
    let lower = str.length > (i + 1) ? str.charCodeAt(i + 1) : 0
    let s = ''
    if( isSurrogatePear( upper, lower ) ) {
      i++
      s = String.fromCharCode( upper, lower )
    } else {
      s = String.fromCharCode( upper )
    }
    if ( begin <= len && len < end ) { ret += s }
  }
  return ret
};

export const getPrefectures = () => {
  return [
    '北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県',
    '茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県',
    '新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県',
    '静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県',
    '奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県',
    '徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県',
    '熊本県','大分県','宮崎県','鹿児島県','沖縄県'
  ]
}

export const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const splitArray = (arr: any[], n: number): [] => arr.reduce(
  (a, c, i) => i % n == 0
    ? [...a, [c]]
    : [...a.slice(0, -1), [...a[a.length - 1], c]],
  []
)

export const getValidUrlFileName = (filename: string) => {
  const splitFileName = splitExt(filename)
  const replaced = splitFileName.stem
    .replace(/\+/g, '.')
    .replace(/\//g, '_')
    .replace(/=/g, '-')
    .replace(/ /g, '_')
    .replace(/　/g, '_')
    + splitFileName.ext
  return encodeURIComponent(replaced)
}
