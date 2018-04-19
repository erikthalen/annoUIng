export default (area, mousePos) => {
  // Calc how many px from the area center the cursor is
  const rect = area.getBoundingClientRect();

  return {
    xBorder: rect.width / 2,
    yBorder: rect.height / 2,
    x: mousePos.clientX - rect.x - rect.width / 2,
    y: mousePos.clientY - rect.y - rect.height / 2
  };
};
