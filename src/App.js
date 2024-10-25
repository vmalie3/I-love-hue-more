import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Play from './pages/Play'
import LevelPage from './pages/Level'

function App() {
  return (
    <Router basename='https://vmalie3.github.io/I-love-hue-more/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path='/level/:levelId' element={<LevelPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App