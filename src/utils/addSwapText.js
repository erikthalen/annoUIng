export default element => {
  const swapTo = element.dataset.swap, // What's in the data-attr
    swapToContainer = document.createElement('SPAN'), // To put new text in
    swapToAsNode = document.createTextNode(swapTo), // The new text
    originalText = element.firstChild, // The text in the button
    originalTextContainer = document.createElement('SPAN'), // To wrap original text
    originalTextAsNode = document.createTextNode(originalText.nodeValue)

  originalTextContainer.appendChild(originalTextAsNode); // Put original text in span
  element.replaceChild(originalTextContainer, originalText); // Replace original text with span wraped text
  swapToContainer.appendChild(swapToAsNode) // Append new text as well
  element.appendChild(swapToContainer) // And put into button

  Object.assign(originalTextContainer.style, {
    transition: 'all 4.7s cubic-bezier(0.075, 0.82, 0.165, 1)'
  })

  Object.assign(swapToContainer.style, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0%',
    opacity: '0',
    textAlign: 'center',
    cursorEvents: 'none',
    transition: 'all 4.7s cubic-bezier(0.075, 0.82, 0.165, 1)'
  })

  return element
}
