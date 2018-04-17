export default (area, element, andScale) => {
  area.style.zIndex = 0;
  if (andScale) {
    return Object.assign(element.style, {
      transform: 'scale(0.5, 0.2)'
    })
  } else {
    return element.style.transform = "translate(0,0)"
  }
};
