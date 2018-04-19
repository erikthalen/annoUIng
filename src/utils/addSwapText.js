const wrapText = (text) => {
  const container = document.createElement('SPAN')
  const textNode = document.createTextNode(text)
  
  container.appendChild(textNode)

  return container
}

export default element => {
  const swapTo = element.dataset.swap,
    originalText = element.firstChild,
    swapWraped = wrapText(swapTo),
    originalWraped = wrapText(originalText.nodeValue)

  element.replaceChild(originalWraped, originalText)
  element.appendChild(swapWraped)

  Object.assign(originalWraped.style, {
    transition: 'all 3s cubic-bezier(0.075, 0.82, 0.165, 1)'
  })

  Object.assign(swapWraped.style, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0%',
    opacity: '0',
    textAlign: 'center',
    cursorEvents: 'none',
    transition: 'all 3s cubic-bezier(0.075, 0.82, 0.165, 1)'
  })

  return element
}
