export default (x, y, border) => {
  // Returns % cursor is from middle
  return Math.round(
    Math.max(
      Math.abs(x),
      Math.abs(y)
    ) / (border / 200)
  )

}
