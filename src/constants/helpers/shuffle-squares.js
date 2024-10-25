const shuffleSquares = (unShuffledSquares) => {
  const squares = unShuffledSquares.map(obj => ({ ...obj }))
  // Iterate through the array backwards
  for (let i = squares.length - 1; i > 0; i--) {
    // Skip the iteration if the current element or the target element has isStatic = true
    if (squares[i].isStatic) continue

    // Find a random index j that is not static
    let j
    do {
      j = Math.floor(Math.random() * (i + 1))
    } while (squares[j].isStatic)

    // Swap elements at indices i and j
    var temp = squares[i]
    squares[i] = squares[j]
    squares[j] = temp

    // After swapping, update the currentIndex property for both swapped elements
    squares[i].currentIndex = i
    squares[j].currentIndex = j
  }

  return squares // Return the updated array
}

export default shuffleSquares;
