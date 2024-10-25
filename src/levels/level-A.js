import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite'
import shuffleSquares from "../constants/helpers/shuffle-squares"
import { checkIfComplete } from "../constants/helpers/utilities"
import AnimationStage from "../constants/enums/animation-stage"

const blinkAnimation = keyframes`
  0% {
    transform: scale(1); /* Original size */
  }
  50% {
    transform: scale(1.065); /* Grow slightly */
  }
  100% {
    transform: scale(1); /* Return to original size */
  }
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const GridWrapper = styled.div`
  display: grid; /* Use CSS Grid for layout */
  grid-template-columns: repeat(${(props) => props.columns}, 1fr); /* Create columns based on the number of squares */
  grid-template-rows: repeat(${(props) => props.rows}, 1fr); /* Create rows based on the number of squares */
  width: 75vw; /* Adjust width as needed */
  height: 75vh; /* Adjust height as needed */
  ${({ animationStage }) => {
    if (animationStage === AnimationStage.FadeIn) {
      return css`
      & > * {
        animation: ${fadeIn} 2s ease-in forwards;
      }
      `
    }
    if (animationStage === AnimationStage.FadeOut) {
      return css`
      & > * {
        animation: ${fadeOut} 2s ease-out forwards;
      }
      `
    }
  }}
`

const Square = styled.div`
  background-color: ${(props) => props.color}; /* Set background color from props */
  display: flex; /* Center content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  border: 2px solid transparent; /* Optional: Border for visual feedback */
  transition: border-color 0.3s ease;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
      animation: ${blinkAnimation} 1s ease-in-out infinite;
    `};
  ${({ isStarted, isStatic }) =>
    isStarted && !isStatic &&
    css `
      &:hover {
        border-color: rgba(0, 0, 0, 0.2); /* Change border color on hover */
        cursor: pointer;
      };
    `
  }
`

const LevelA = ({ squares, size, isStarted, isRestart, setRestartComplete }) => {
  const [currentSquares, setCurrentSquares] = useState(squares)
  const [isComplete, setIsComplete] = useState(false)
  const [gridAnimationStage, setGridAnimationStage] = useState(AnimationStage.Default)
  const [begin, setBegin] = useState(false)

  useEffect(() => {
    if (checkIfComplete(currentSquares)) {
      setIsComplete(true)
    }
    console.log(isComplete)
  }, [isComplete, currentSquares])

  useEffect(() => {
    if (isStarted && gridAnimationStage === AnimationStage.Default && !isRestart) {
      fadeOutToFadeIn()
    }

    if(isRestart) {
      restartLevel()
    }
  }, [isStarted, isRestart])

  const rearrangeSquares = () => {
    const shuffledSquares = shuffleSquares(squares)
    const sortedShuffledSquares = [...shuffledSquares].sort((a, b) => a.currentIndex - b.currentIndex)
    setCurrentSquares(sortedShuffledSquares)
  }

  const restartLevel = () => {
    setBegin(false)
    fadeOutToFadeIn(true)
    setRestartComplete()
  }

  const fadeOutToFadeIn = async (restart = false ) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    if (restart) {
      setGridAnimationStage(AnimationStage.FadeOut)
      await delay(2000)
      setCurrentSquares(squares)
      setGridAnimationStage(AnimationStage.FadeIn)
      await delay(2000)
    }

    setGridAnimationStage(AnimationStage.FadeOut)
    await delay(2000)
    rearrangeSquares()
    setGridAnimationStage(AnimationStage.FadeIn)
    await delay(2000)
    setBegin(true)
    setGridAnimationStage(AnimationStage.Default)
  }

  const onClick = (square) => {
    if (square.isStatic || !begin) return

    const updatedGrid = currentSquares.map(s => s)
    if (square.isSelected) {
      updatedGrid[square.currentIndex].isSelected = false

    } else {
      const currentlySelectedSquares = currentSquares.filter(s => s.isSelected === true)

      if (currentlySelectedSquares.length === 0) {
        updatedGrid[square.currentIndex].isSelected = true
      } else {
        swapSquares(updatedGrid, square.currentIndex, currentlySelectedSquares[0].currentIndex)
      }
    }

    setCurrentSquares(updatedGrid) 
  }

  const swapSquares = (squares, indexA, indexB) => {
    // Swap the two items
    const temp = squares[indexA]
    squares[indexA] = { ...squares[indexB], currentIndex: indexA, isSelected: false }
    squares[indexB] = { ...temp, currentIndex: indexB, isSelected: false }
  
    return squares
  }

  return (
    <GridWrapper columns={size.width} rows={size.height} animationStage={gridAnimationStage}>
      {currentSquares.map((square, index) => (
        <Square
          key={index}
          color={square.color}
          onClick={() => onClick(square)}
          isSelected={square.isSelected}
          isStatic={square.isStatic}
          isStarted={begin}
        >
          {square.isStatic && <FavoriteIcon />}
        </Square>
      ))}
    </GridWrapper>
  )
}

export default LevelA;
