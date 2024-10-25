const interpolateColor = (color1, color2, factor) => {
  const result = color1.slice(1).match(/.{2}/g)
    .map((hex, index) => {
      const decimal1 = parseInt(hex, 16);
      const decimal2 = parseInt(color2.slice(1).match(/.{2}/g)[index], 16);
      const interpolated = Math.round(
        decimal1 + (decimal2 - decimal1) * factor
      )
      return interpolated.toString(16).padStart(2, "0");
    })

  return `#${result.join("")}`;
}

const checkIfComplete = (array) => {
  return !array.some(x => x.currentIndex !== x.correctIndex) 
}

export { interpolateColor, checkIfComplete }
