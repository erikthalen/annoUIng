export default (width, height) => {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    rotation: Math.floor(Math.random() * 360)
  }
}
