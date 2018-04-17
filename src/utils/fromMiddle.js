export default (area, e) => {
  // Calc how far from the area center the cursor is
  const rect = area.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    x: e.clientX - rect.x - rect.width / 2,
    y: e.clientY - rect.y - rect.height / 2
  };
};
