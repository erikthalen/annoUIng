import addArea from './../utils/addArea'
import fromMiddlePixels from './../utils/fromMiddlePixels'
import moveAround from './../utils/moveAround'
import resetTransform from './../utils/resetTransform'

const mover = (element, mouseEvent) => {
  const area = element.parentElement, // Parent === area
    radius = fromMiddlePixels(area, mouseEvent),
    maxX = moveAround(radius.x, radius.xBorder),
    maxY = moveAround(radius.y, radius.yBorder)

  Object.assign(area.style, {
    position: "relative",
    zIndex: "1000"
  })

  Object.assign(element.style, {
    position: "relative",
    zIndex: "1001",
    transform: `translate(
      ${maxX / 2}px,
      ${maxY / 5}px)
      scale(0.5, 0.5)`,
    transition: 'all .7s cubic-bezier(0.4, 1.4, 1, 1)'
  })

  return element
}

const addEvents = element => {
  const area = element.parentElement
  area.addEventListener(
    "mousemove",
    mover.bind(null, element),
    false
  )
  area.addEventListener(
    "mouseleave",
    resetTransform.bind(null, area, element, true),
    false
  )
  return element
}

export default init => init
  .map(element =>
    addEvents(
      addArea(element)
    )
  )
