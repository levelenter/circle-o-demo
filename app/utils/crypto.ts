const KEY = 3

 /* シーザーー暗号化 */
export function getEncryptedString(raw: string) {
  let encoded = encodeURIComponent(raw)
  let result = ''
  for (let i = 0; i < encoded.length; i++) {
    result += String.fromCharCode(encoded.charCodeAt(i) + KEY)
  }
  return result;
}

/* シーザー復号化 */
export function getDecryptedString(encrypted: string) {
  let result = "";
  for (let i = 0; i < encrypted.length; i++) {
    result += String.fromCharCode(encrypted.charCodeAt(i) - KEY);
  }
  return decodeURIComponent(result) ;
}
