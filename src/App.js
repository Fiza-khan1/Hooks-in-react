import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Square component
function Square({ value, onSquareClick }) {
  return (
    <button className="btn btn-outline-primary square w-100 h-100" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Board component
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="alert alert-info text-center">{status}</div>
      <div className="row">
        {[0, 1, 2].map(i => (
          <div className="col-4 col-md-4" key={i}>
            <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
          </div>
        ))}
      </div>
      <div className="row">
        {[3, 4, 5].map(i => (
          <div className="col-4 col-md-4" key={i}>
            <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
          </div>
        ))}
      </div>
      <div className="row">
        {[6, 7, 8].map(i => (
          <div className="col-4 col-md-4" key={i}>
            <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Game component
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button className="btn btn-secondary" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4">
        <div className="card-body">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="card-footer">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

// Utility function to calculate winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
