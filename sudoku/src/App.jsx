import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SudokuGame } from './components/board.jsx'
import { SideNav } from './components/components.jsx'
import HomePage from './home_page.jsx'
import ChooseGames from './choose_games.jsx'
import Login from './login.jsx'
import Rules from './rules.jsx'
import Scoreboard from './scoreboard.jsx'
import TopNav from './components/components.jsx'  


function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<ChooseGames />} />
          <Route path="games/easy" element={<SudokuGame size={6} />} />
          <Route path="games/normal" element={<SudokuGame/>} />
          <Route path="/games/supereasy" element={<SudokuGame size={3} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/rules" element={<Rules/>} />
          <Route path="/scores" element={<Scoreboard/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;