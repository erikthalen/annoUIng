import addImage from './../utils/addImage'
import flyImg from './../utils/flyImg'
import fromMiddlePixels from './../utils/fromMiddlePixels'
import inView from './../utils/inView'
import randomNumber from './../utils/randomNumber'

export const moveFly = fly => {
  const rect = fromMiddlePixels(fly.parentElement, 0)
  const fullWidth = rect.xBorder * 2
  const fullHeight = rect.yBorder * 2
  const random = randomNumber(fullWidth, fullHeight)

  if (inView(fly) && !fly.classList.contains("moving")) {
    fly.classList.add("moving")

    Object.assign(fly.style, {
      transform: `translate(
              ${random.x}px,
              ${random.y}px)
              rotate(${random.rotation}deg)`,
      transition: "transform 60s ease-out"
    })
  }

  else if (!inView(fly) && fly.classList.contains('moving')) {
    fly.classList.remove("moving")

    Object.assign(fly.style, {
      transform: `translate(
              ${random.x}px,
              ${random.y}px)
              rotate(${random.rotation}deg)`,
      transition: "transform 1s ease-out"
    })
  }

  return fly
}

export const initFly = arr => arr
  .map(element =>
    addImage(element, flyImg)
  )
