import React, { useState, useEffect } from 'react';
import Cell from './cell.jsx';
import CustomButton from './components.jsx';
import isValidMove from '../checks_valid.jsx';

// NEW COMPONENT - Add this above your App function
export function SudokuGame({ size = 9 }) {
  const [board, setBoard] = useState([]);
  const [initialBoard, setInitialBoard] = useState([]);
  const [cellStatus, setCellStatus] = useState([]);

  useEffect(() => {
    const newBoard = generateBoard(size);
    setBoard(newBoard);
    setInitialBoard(newBoard);
    setCellStatus(newBoard.map(row => row.map(() => '')));
  }, [size]);

  // Move handleValueChange function here too
  const handleValueChange = (rowIndex, colIndex, newValue) => {
    setBoard(prevBoard => {
      const updatedBoard = prevBoard.map(row => [...row]);
      const updatedStatus = cellStatus.map(row => [...row]);

      updatedBoard[rowIndex][colIndex] = 0;
      const valid = isValidMove(updatedBoard, rowIndex, colIndex, newValue);

      updatedBoard[rowIndex][colIndex] = newValue;
      updatedStatus[rowIndex][colIndex] = valid ? 'valid' : 'invalid';
      setCellStatus(updatedStatus);
      return updatedBoard;
    });
  };

  // Move all the JSX for the sudoku board here
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
                editable={initialBoard[rowIndex]?.[colIndex] === 0}
                status={cellStatus[rowIndex]?.[colIndex]}
                onValueChange={handleValueChange}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="center-Container">
        <CustomButton 
          title="New Game"
          onPress={() => {
            const newBoard = generateBoard(size);
            setBoard(newBoard);
            setInitialBoard(newBoard);
            setCellStatus(newBoard.map(row => row.map(() => '')));
          }}
        />
      </div>
    </div>
  );
}

function sudokuBoard(size) {
  const board = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    board.push(row);
  }
  
  for (let i = 0; i < size * (size / 2); ) {
    const randomRow = Math.floor(Math.random() * size);
    const randomCol = Math.floor(Math.random() * size);
    
    if (board[randomRow][randomCol] !== 0) {
      continue;
    }
    
    let placed = false;
    while (!placed) {
      const randomNum = Math.floor(Math.random() * size) + 1;
      let conflict = false;
      
      // Check row
      for (let k = 0; k < size; k++) {
        if (board[randomRow][k] === randomNum) {
          conflict = true;
          break;
        }
      }
      if (conflict) continue;
      
      // Check column
      for (let k = 0; k < size; k++) {
        if (board[k][randomCol] === randomNum) {
          conflict = true;
          break;
        }
      }
      if (conflict) continue;
      
      // Check box
      const boxSize = size === 9 ? 3 : 2;
      const boxRowStart = Math.floor(randomRow / boxSize) * boxSize;
      const boxColStart = Math.floor(randomCol / 3) * 3;
      
      for (let m = boxRowStart; m < boxRowStart + boxSize; m++) {
        for (let n = boxColStart; n < boxColStart + 3; n++) {
          if (board[m][n] === randomNum) {
            conflict = true;
            break;
          }
        }
        if (conflict) break;
      }
      if (conflict) continue;
      
      board[randomRow][randomCol] = randomNum;
      placed = true;
    }
    i++; 
  }
  return board;
}

export function generateBoard(size) {
  return sudokuBoard(size);
}
