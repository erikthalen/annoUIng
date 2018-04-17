import addImage from './../utils/addImage'
import flyImg from './../utils/flyImg'
import fromMiddle from './../utils/fromMiddle'
import inView from './../utils/inView'
import randomNumber from './../utils/randomNumber'

export const moveFly = fly => {
  const rect = fromMiddle(fly.parentElement, 0)
  const random = randomNumber(rect)

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
