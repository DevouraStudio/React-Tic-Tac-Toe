import { useState } from "react";

import Player from "./Player/Player";
import GameBoard from "./GameBoard/GameBoard";
import Log from "./Log/Log";
import GameOver from "./GameOver/GameOver";

import { winningConditions } from "../winningConditions";

import "../index.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const players = {
  X: "Player 1",
  O: "Player 2",
};

const activePlayer = (turn) => {
  let currentTurn = "X";
  if (turn.length > 0 && turn[0].player === "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
  return currentTurn;
};

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  for (turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
};

const deriveWinner = (gameBoard, playerName) => {
  let winner;
  for (condition of winningConditions) {
    const firstSquareSymbol = gameBoard[condition[0].row][condition[0].column];
    const secondSquareSymbol = gameBoard[condition[1].row][condition[1].column];
    const thirdSquareSymbol = gameBoard[condition[2].row][condition[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol];
    }
  }
  return winner;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [playerName, setPlayerName] = useState(players);

  const activeTurn = activePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, playerName);

  const draw = gameTurns.length === 9 && !winner;

  const shiftTurns = (rowIndex, colIndex) => {
    setGameTurns((preTurn) => {
      const currentTurn = activePlayer(preTurn);
      const newGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentTurn },
        ...preTurn,
      ];
      return newGameTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayerName((pre) => {
      return {
        ...pre,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={activeTurn === "X"}
            handlePlayerName={handlePlayerNameChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={activeTurn === "O"}
            handlePlayerName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} rematch={handleRematch} />
        )}
        <GameBoard shiftTurns={shiftTurns} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
