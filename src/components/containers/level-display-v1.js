import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import LevelA from "../../levels/level-A"
import { useParams } from "react-router-dom"
import levelsList from "../../constants/sections/A/levels-list"
import findLevelById from "../../constants/helpers/find-level-by-id"
import getGradientList from "../../constants/helpers/get-gradient-list"
import styled from "styled-components"
import { HeaderButton, HeaderWrapper } from "../styles/header-styled-components"

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

const LevelDisplay = () => {
  const { levelId } = useParams()
  const navigate = useNavigate()

  const currentLevel = findLevelById(levelsList, levelId)
  const levelDetails = getGradientList(currentLevel)

  const [isStarted, setIsStarted] = useState(false)
  const [isRestart, setIsRestart] = useState(false)

  const setRestartComplete = () => setIsRestart(false)

  const onStart = () => {
    setIsStarted(true)
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSave = () => {
    // TODO: save to local storage

    handleBackClick()
  }

  const getHeader = () => {
    if (isStarted) {
      return <>
        <HeaderButton onClick={() => handleSave()}>Save & Exit</HeaderButton>
          <h1>I 💜 HUE MORE</h1>
        <HeaderButton onClick={() => setIsRestart(true)}>Restart</HeaderButton>
      </>
    }

    return <>
      <HeaderButton onClick={() => handleBackClick()}>Back</HeaderButton>
        <h1>I 💜 HUE MORE</h1>
        <HeaderButton onClick={() => onStart()}>Start</HeaderButton>
    </>
  }

  return (
    <>
      <HeaderWrapper>
        {getHeader()}
      </HeaderWrapper>
      <MainContent>
          <LevelTitle>
            {currentLevel.title}
          </LevelTitle>
          <LevelA 
            squares={levelDetails} 
            size={currentLevel.size} 
            isStarted={isStarted}
            isRestart={isRestart}
            setRestartComplete={setRestartComplete}/>
      </MainContent>
    </>
  )
}

export default LevelDisplay
