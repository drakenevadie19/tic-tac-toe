import { useState } from 'react'
import Board from './components/Board/Board'

const WIN_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]           // Diagonals
]

function App() {
  // State for the board, isXTurn, and winner
  // Initialize the board with 9 null values
  const [board, setBoard] = useState(Array(9).fill(null));
  // State for the current player (X or O, initially, I chose X as starting one)
  const [isXTurn, setIsXTurn] = useState(true);
  // State for the winner
  const winner = calculateWinner(board);

  // Status of draw => true or false
  const isDraw = board.every((cell) => cell !== null) && !winner;

  // Status of the game => a winner, a draw, or the next turn (X or O)
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? `Draw!`
    : `Next Turn: ${isXTurn ? "X" : "O"}`;

  // Function to handle a player's click on a square
  // It updates the board state and toggles the current player
  // It also checks for a winner and resets the game if necessary
  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  // Check the winner of the game
  function calculateWinner(b) {
    for (let [a, bIdx, c] of WIN_COMBINATIONS) {
      if (b[a] && b[a] === b[bIdx] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  }

  // Function to reset the game (fill the board will null values and set the current player to X)
  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <p>
        This is a simple and fun two-player game built with React. Take turns placing Xs and Os on the grid—first to align three in a row wins! The game automatically detects winners and draws, and you can restart anytime to play again. Clean design, smooth interaction, and minimal logic make this a great example of building interactive apps with React.
      </p>
      <Board board={board} onClick={handleClick} />
      <h2>{status}</h2>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

export default App
