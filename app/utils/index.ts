export function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
  return possibleKey in obj;
}

export function parseBoolean(value: any) {
  return value === 'true' || value === 'True' || value === '1' || value === 1 || value === true
}

export const isUnset = (o: any) => typeof o === 'undefined' || o === null
export const isSet = (o: any) => !isUnset(o)

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
  let b = 0
  for (let i = 0; i < str.length; i++) {
    b += str.charCodeAt(i) <= 255 ? 1 : 2
    if (b > size) {
      return str.substr(0, i) + suffix
    }
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

export function getJsonValue(values: { [key: string]: any; }, key: string) {
  if (isKeyof(values, key)) {
    return JSON.parse(JSON.stringify(values[key]))
  }
  throw new Error('getJsonValue: ' + key + ' is not defined')
}

export function toUpperCase(s: string) {
  if ('i' !== 'I'.toLowerCase()) {
    // 代替処理を行う
    return s.replace(/[a-z]/g, function(ch: string) {return String.fromCharCode(ch.charCodeAt(0) & ~32)})
  } else {
    return s.toUpperCase()
  }
}
