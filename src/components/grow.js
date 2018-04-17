import inView from './../utils/inView'

const grow = element => {
  if (inView(element) && !element.classList.contains("growing")) {
    element.classList.add("growing")
    Object.assign(element.style, {
      position: "relative",
      zIndex: "1001",
      transform: "scale(10)",
      transition: "360s linear"
    })
  } else if (!inView(element) && element.classList.contains("growing")) {
    element.classList.remove("growing")
    Object.assign(element.style, {
      zIndex: "1001",
      transform: "scale(1)",
      transition: "1s linear"
    })
  }

  return element
}

export default init => init.map(element => grow(element))
