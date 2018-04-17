export default (element) => {
  return {
    x: Math.floor(Math.random() * element.width),
    y: Math.floor(Math.random() * element.height),
    rotation: Math.floor(Math.random() * 360)
  }
}
