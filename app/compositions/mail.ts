import { SetupContext } from '@vue/composition-api'
import { getDecryptedString, getEncryptedString } from '~/utils/crypto'

export default function useMail({ root } : SetupContext, encrypted : string) {
  const encryptLog = () => {
    console.log(getEncryptedString(encrypted))
  }

  const mailTo = () => {
    if (isIosSafari(window?.navigator?.userAgent || '')) {
      window.location.href = 'mailto:' + getDecryptedString(encrypted)
    } else {
      window.open('mailto:' + getDecryptedString(encrypted), '_blank')
    }
  }

  return {
    encryptLog,
    mailTo
  }
}

function isIosSafari(_ua: string) {
  const ua = _ua.toLowerCase(),
    isIOS = /iphone|ipod|ipad/.test(ua),
    isLine = /line/.test(ua),
    isFb = /fb/.test(ua),
    isTw = /twitter/.test(ua),
    isSafari = /safari/.test(ua),
    isChrome = /crios/.test(ua)

  if (isIOS) {
    if (isLine || isFb || isTw || isChrome) {
      return false
    } else {
      return isSafari
    }
  } else {
    return false
  }
}
