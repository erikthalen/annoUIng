export default (element, imageSrc) => {
  const img = document.createElement("IMG")

  img.setAttribute("src", imageSrc)
  Object.assign(img.style, {
    position: "absolute",
    transform: "rotate(120deg)",
    opacity: "0.9",
    top: "0",
    left: "0"
  })
  element.appendChild(img)

  return {
    element: element,
    img: img
  }
}
