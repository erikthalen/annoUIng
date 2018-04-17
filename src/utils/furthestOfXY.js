export default offset => {
  // Returns % cursor is from middle (how long the radius is)
  const pixels = Math.max(Math.abs(offset.x), Math.abs(offset.y))

  return Math.round(pixels / (offset.width / 100) * 2);

};
