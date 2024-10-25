import React from "react"
import LevelDisplay from "../components/containers/level-display-v1"
import styled from "styled-components"

const FullScreenContainer = styled.div`
  width: 99vw;
  height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column; // Stack children vertically
`

const LevelPage = () => {
  return (
    <FullScreenContainer>
      <LevelDisplay />
    </FullScreenContainer>
  )
}

export default LevelPage
