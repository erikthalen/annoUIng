import addArea from './../utils/addArea'
import addSwapText from './../utils/addSwapText'
import fromMiddle from './../utils/fromMiddle'
import furthestOfXY from './../utils/furthestOfXY'
import resetOpacity from './../utils/resetOpacity'

const textSwap = (element, e) => {
  const offset = fromMiddle(element.parentElement, e),
    percentFromMiddle = furthestOfXY(offset),
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
