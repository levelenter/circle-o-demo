export const startScroll = (y: number) => {
  console.log('startScroll', y)
  const x = window.scrollX
  const startPositionY = window.scrollY
  const endPositionY = y
  const startTime = Date.now()
  const distance = Math.abs(endPositionY - startPositionY)
  const maxDuration = 500
  const duration = (distance < maxDuration) ? distance : maxDuration

  function easeOutQuart(x: number) {
    return 1 - Math.pow(1 - x, 4)
  }

  function animation() {
    const progress = Math.min(1, (Date.now() - startTime) / duration)
    const scrollValY = startPositionY + (endPositionY - startPositionY) * easeOutQuart(progress)
    window.scrollTo(x, scrollValY)
    if (progress < 1) {
      requestAnimationFrame(() => {
        animation()
      })
    }
  }
  animation()
}
