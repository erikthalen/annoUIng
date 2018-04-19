import addArea from './../utils/addArea'
import fromMiddlePixels from './../utils/fromMiddlePixels'
import moveOpposite from './../utils/moveOpposite'
import putInCorner from './../utils/putInCorner'

const avoid = (element, mouseEvent) => {
  const area = element.parentElement, // Parent === area
    container = element.parentNode.parentNode,
    radius = fromMiddlePixels(area, mouseEvent),
    maxX = moveOpposite(radius.x, radius.xBorder),
    maxY = moveOpposite(radius.y, radius.yBorder)

  Object.assign(container.style, {
    zIndex: "1001",
    transform: `translate(
      ${-maxX}px,
      ${-maxY}px)`,
    transition: 'all 2.8s cubic-bezier(0.4, 1.4, 1, 1)'
  })

  return element
}

const addEvents = element =>
  element.parentElement.addEventListener(
    "mousemove",
    avoid.bind(null, element),
    false
  )

export default init => init
  .map(element =>
    addEvents(
      putInCorner(
        addArea(element), 10
      )
    )
  )
