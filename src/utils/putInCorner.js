export default (element, margin) => {

  Object.assign(element.parentElement.style, {
    position: "absolute",
    top: `${margin}px`,
    right: `${margin}px`
  })

  return element
}
