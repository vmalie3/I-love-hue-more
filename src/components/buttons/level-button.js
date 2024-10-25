import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const LevelButton = ({ level }) => {
  const onClick = () => {
    console.log(level)
  }

  return (
    <Link to={`/level/${level.id}`} className="level-link" > 
      <button onClick={onClick} className='level-button' >
        {level.title}
      </button>
    </Link>
  )
}

export default LevelButton