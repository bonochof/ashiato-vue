export default {
  isSp: () => {
    return (
      window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
      navigator.userAgent.indexOf('Android') > 0
    )
  }
}
