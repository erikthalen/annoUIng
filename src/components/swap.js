import addArea from './../utils/addArea'
import addSwapText from './../utils/addSwapText'
import fromMiddlePixels from './../utils/fromMiddlePixels'
import fromMiddlePercent from './../utils/fromMiddlePercent'
import resetOpacity from './../utils/resetOpacity'

const textSwap = (element, mouseEvent) => {
  const mousePos = fromMiddlePixels(element.parentElement, mouseEvent),
    percentFromMiddle = fromMiddlePercent(mousePos.x, mousePos.y, mousePos.xBorder),
    opacity = percentFromMiddle / 100

  Object.assign(element.firstChild.style, {
    opacity: opacity
  })

  Object.assign(element.lastElementChild.style, {
    opacity: 1 - opacity
  })

  return element
}

const resetSwap = (area, orgText, swapText) => {
  resetOpacity(area, orgText, 1)
  resetOpacity(area, swapText, 0)
}

const addListeners = element => {
  const area = element.parentElement

  area.addEventListener(
    "mousemove",
    textSwap.bind(null, element),
    false
  )

  area.addEventListener(
    "mouseleave",
    resetSwap.bind(null, area, element.firstChild, element.lastChild),
    false
  )

  return element
}

export default init => init
  .map(element =>
    addListeners(
      addSwapText(
        addArea(element)
      )
    )
  )
