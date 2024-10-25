import '../App.css'
import levelsList from '../constants/sections/A/levels-list'
import LevelButton from '../components/buttons/level-button'
import React from 'react'
import { HeaderButton, HeaderWrapper } from '../components/styles/header-styled-components'
import { useNavigate } from 'react-router-dom'

const Play = () => {
  const navigate = useNavigate()

  const resetProgress = () => {
    // TODO: Remove saved info in local storage

  }

  return (
    <div className="App">
      <HeaderWrapper>
        <HeaderButton onClick={() => {navigate(-1)}}>Home</HeaderButton>
        <h1>I 💜 HUE MORE Levels</h1>
        <HeaderButton onClick={() => resetProgress()} >Reset Progress</HeaderButton>
      </HeaderWrapper>
      <div className="levels-grid">
        {levelsList.map((level, index) => (
          <LevelButton key={index} level={level}/>
        ))}
      </div>
    </div>
  )
}

export default Play