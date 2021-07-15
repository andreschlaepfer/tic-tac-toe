import "./App.css";
import { useEffect, useState } from "react";
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [boardValue, setBoardValue] = useState([2, 7, 6, 9, 5, 1, 4, 3, 8]);
  const [player, setPlayer] = useState("O");
  const [OScore, setOScore] = useState(0);
  const [XScore, setXScore] = useState(0);
  const [result, setResult] = useState("none");

  useEffect(() => {
    checkScore();
    checkWin();
    checkTie();
  }, [board, result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          if (player == "O") {
            setOScore(OScore + boardValue[idx]);
          }

          if (player == "X") {
            setXScore(XScore + boardValue[idx]);
          }

          return player;
        }

        return val;
      })
    );

    if (player == "O") {
      setPlayer("X");
    } else {
      setPlayer("O");
    }
  };

  const checkTie = () => {
    if (board.includes("") == false) {
      setResult("Tie");
    }
  };
  const checkScore = () => {
    if (XScore == 15) {
      setResult("X");
    }
    if (OScore == 15) {
      setResult("O");
    }
  };
  const checkWin = () => {
    if (result != "none" && result != "Tie") {
      alert(`Game Finished. Winning player: ${result} `);
    }
    if (result == "Tie") {
      alert("Game Finished. It was a tie!");
    }
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
