import addArea from './../utils/addArea'
import fromMiddle from './../utils/fromMiddle'
import putInCorner from './../utils/putInCorner'

const avoid = (element, e) => {
  const a = element.parentElement, // Parent === area
    popUp = element.parentNode.parentNode,
    offset = fromMiddle(a, e),
    areaBorderX = offset.width / 2,
    areaBorderY = offset.height / 2,
    maxX = offset.x > 0 // If cursor is inside to the left
      ? areaBorderX + 20 // Move to the right
      : -areaBorderX - 20, // Else to the left
    maxY = offset.y > 0
      ? areaBorderY + 20
      : -areaBorderY - 20

  Object.assign(popUp.style, {
    zIndex: "1001",
    transform: `translate(
      ${-maxX}px,
      ${-maxY / 2.5}px)`,
    transition: 'all 2.8s cubic-bezier(0.4, 1.4, 1, 1)'
  })

  return element
}

const addAvoid = element =>
  element.parentElement.addEventListener(
    "mousemove",
    avoid.bind(null, element),
    false
  )

export default init => init
  .map(element => {
    return addAvoid(
      putInCorner(
        addArea(element), 10
      )
    )
  })
