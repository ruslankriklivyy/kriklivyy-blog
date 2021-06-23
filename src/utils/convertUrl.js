export const convertUrl = url => {
  return url
    .slice(1)
    .split("")
    .map(item => {
      if (item === "-") {
        item = " "
      }
      return item
    })
    .join("")
}
