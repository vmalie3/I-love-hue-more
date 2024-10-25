import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  ${({ disabled }) => 
    disabled &&
    css`
      filter: grayscale(60%) brightness(90%); /* Add a greyscale and lower brightness */
      opacity: 0.6; /* Lower the opacity */
      cursor: not-allowed;
    `
  }
`

const LevelButton = ({ level }) => {
  return (
    <Link to={`/level/${level.id}`} className="level-link" > 
      <StyledButton className='level-button' disabled={level.disabled} >
        {level.title}
      </StyledButton>
    </Link>
  )
}

export default LevelButton