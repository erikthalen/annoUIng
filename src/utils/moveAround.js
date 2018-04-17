export default (cursorPos, areaBorder) => {
  return cursorPos > areaBorder
    ? areaBorder
    : cursorPos < -areaBorder
      ? -areaBorder
      : cursorPos
}
