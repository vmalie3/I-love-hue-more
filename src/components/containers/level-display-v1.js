import React, { useState } from "react"
import { Container } from "@material-ui/core"
import LevelA from "../../levels/level-A"
import { useParams } from "react-router-dom"
import levelsList from "../../constants/sections/A/levels-list"
import findLevelById from "../../constants/helpers/find-level-by-id"
import getGradientList from "../../constants/helpers/get-gradient-list"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; // Center items vertically
  background-color: #282c34;
  color: white;
  height: 10vh;
`

const MainContent = styled.div`
  flex: 1; // Take up the remaining space
  display: block;
  justify-content: center;
  align-items: center;
  max-height: 90vh;
  margin-left: auto;
  margin-right: auto;
`

const LevelTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`

const StyledButton = styled.button`
  background-color: #61dafb;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #21a1f1;
  }
`

const LevelDisplay = () => {
  const { levelId } = useParams()

  const currentLevel = findLevelById(levelsList, levelId)
  const levelDetails = getGradientList(currentLevel)

  const [isStarted, setIsStarted] = useState(false)

  const onStart = () => {
    setIsStarted(true)
  }

  return (
    <>
      <Header>
        <StyledButton>Back</StyledButton>
        <h1>I 💜 HUE MORE</h1>
        <StyledButton onClick={() => onStart()}>Start</StyledButton>
      </Header>
      <MainContent>
          <LevelTitle>
            {currentLevel.title}
          </LevelTitle>
          <LevelA squares={levelDetails} size={currentLevel.size} isStarted={isStarted}/>
      </MainContent>
    </>
  )
}

export default LevelDisplay
