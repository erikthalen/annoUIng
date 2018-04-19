export default (currentPos, areaBorder) => {
  return currentPos > 0
    ? areaBorder + 20
    : -areaBorder - 20
}
