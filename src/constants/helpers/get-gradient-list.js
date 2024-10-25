import { interpolateColor } from "./utilities";

const getGradientList = ({ size, colors }) => {
  const { height, width } = size
  const gradientArray = []

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const topColor = interpolateColor(colors[0], colors[1], col / (width - 1)) // Interpolate top row
      const bottomColor = interpolateColor(colors[2], colors[3], col / (width - 1)) // Interpolate bottom row
      const finalColor = interpolateColor(topColor, bottomColor, row / (height - 1)) // Interpolate between top and bottom
      gradientArray.push(finalColor) // Push color to a linear array
    }
  }

  // Calculate the corner indices for a rectangular grid
  const cornerIndices = [
    0, 
    width - 1, 
    (height - 1) * width, 
    height * width - 1
  ] // Top-left, top-right, bottom-left, bottom-right

  return gradientArray.map((color, index) => ({
    color,
    correctIndex: index,
    currentIndex: index,
    isStatic: cornerIndices.includes(index), // Check if the index is one of the corner indices
    isSelected: false
  }))
}

export default getGradientList


