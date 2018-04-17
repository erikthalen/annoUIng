import addArea from './../utils/addArea'
import fromMiddle from './../utils/fromMiddle'
import furthestOfXY from './../utils/furthestOfXY'
import resetOpacity from './../utils/resetOpacity'

const fade = (element, e) => {
  const a = element.parentElement, // Parent === area
    offset = fromMiddle(a, e),
    percentFromMiddle = furthestOfXY(offset)

  Object.assign(element.style, {
    opacity: percentFromMiddle / 100,
    transition: 'all .7s cubic-bezier(0.4, 1.4, 1, 1)'
  });

  return element
}

const addEvents = element => {
  const area = element.parentElement

  area.addEventListener(
    "mousemove",
    fade.bind(null, element),
    false
  )

  area.addEventListener(
    "mouseleave",
    resetOpacity.bind(null, area, element, 1),
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
