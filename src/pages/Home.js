import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I LOVE HUE MORE</h1>
        <Link to="/play">
          <button className="start-button">START</button>
        </Link>
      </header>
    </div>
  )
}

export default Home