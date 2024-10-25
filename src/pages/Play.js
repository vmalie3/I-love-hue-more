import '../App.css'
import levelsList from '../constants/sections/A/levels-list'
import LevelButton from '../components/buttons/level-button'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #282c34;
  color: white;
`

const Play = () => {
  return (
    <div className="App">
      <Header>
        <h1>I 💜 HUE MORE Levels</h1>
      </Header>
      <div className="levels-grid">
        {levelsList.map((level, index) => (
          <LevelButton key={index} level={level}/>
        ))}
      </div>
    </div>
  )
}

export default Play