import React, { useState, useEffect } from 'react'
import Cell from './components/cell.jsx'
import { generateBoard } from './components/board.jsx'

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(generateBoard(9));
  }, []);

  return (
    <div>
      <h1>My Sudoku Game</h1>
      
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div className="container" key={rowIndex}>
            {row.map((value, colIndex) => (
              <Cell
                key={colIndex}
                value={value}
                rowIndex={rowIndex}
                colIndex={colIndex}
                editable={true}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App