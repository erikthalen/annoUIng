export default element => {
  // Add a span that becomes the area of effect
  const sizes = element.getBoundingClientRect(),
    area = document.createElement("span");

  area.classList.add("yoyo-area");

  Object.assign(area.style, {
    width: `${sizes.width}px`,
    height: `${sizes.height}px`,
    transform: 'scale(2, 5)',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });

  Object.assign(element.style, {
    transform: 'scale(0.5, 0.2)',
  })

  element.parentNode.insertBefore(area, element);
  area.appendChild(element);

  return element;
};
