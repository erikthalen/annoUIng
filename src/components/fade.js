import addArea from './../utils/addArea'
import fromMiddlePixels from './../utils/fromMiddlePixels'
import fromMiddlePercent from './../utils/fromMiddlePercent'
import resetOpacity from './../utils/resetOpacity'

const fade = (element, mouseEvent) => {
  const area = element.parentElement,
    mousePos = fromMiddlePixels(area, mouseEvent),
    percentFromMiddle = fromMiddlePercent(mousePos.x, mousePos.y, mousePos.xBorder)

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
