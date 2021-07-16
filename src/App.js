import "./App.css";
import { useEffect, useState } from "react";
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [boardValue, setBoardValue] = useState([2, 7, 6, 9, 5, 1, 4, 3, 8]);
  const [player, setPlayer] = useState("O");
  const [OScore, setOScore] = useState(0);
  const [OSquare, setOSquare] = useState([]);
  const [XScore, setXScore] = useState(0);
  const [XSquare, setXSquare] = useState([]);
  const [result, setResult] = useState("none");
  const [Olenght, setOlenght] = useState(0);
  const [Xlenght, setXlenght] = useState(0);

  useEffect(() => {
    checkScore();
    checkWin();
  }, [board, result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          if (player === "O") {
            setOScore(OScore + boardValue[idx]);
            setOSquare(OSquare.concat(boardValue[idx]));
            setOlenght(Olenght + 1);
          }

          if (player === "X") {
            setXScore(XScore + boardValue[idx]);
            setXSquare(XSquare.concat(boardValue[idx]));
            setXlenght(Xlenght + 1);
          }

          return player;
        }

        return val;
      })
    );

    if (player === "O") {
      setPlayer("X");
    } else {
      setPlayer("O");
    }
  };

  const checkScore = () => {
    var i;
    var j;
    var k;
    if (XScore === 15 && Xlenght === 3) {
      setResult("X");
    }
    if (XScore > 15 && Xlenght > 3 && Xlenght < 5) {
      let rest = XScore - 15;
      if (XSquare.includes(rest)) {
        setResult("X");
      }
    }
    if (XScore > 15 && Xlenght > 4) {
      for (i = 0; i < 3; i++) {
        for (j = i + 1; j < 4; j++) {
          for (k = j + 1; k < 5; k++) {
            if (XSquare[i] + XSquare[j] + XSquare[k] === 15) {
              setResult("X");
            }
          }
        }
      }
    } else {
      if (board.includes("") === false && result === "none") {
        setResult("Tie");
      }
    }

    if (OScore === 15 && Olenght === 3) {
      setResult("O");
    }
    if (OScore > 15 && Olenght > 3 && Olenght < 5) {
      let rest = OScore - 15;
      if (OSquare.includes(rest)) {
        setResult("O");
      }
    }
    if (OScore > 15 && Olenght > 4) {
      for (i = 0; i < 3; i++) {
        for (j = i + 1; j < 4; j++) {
          for (k = j + 1; k < 5; k++) {
            if (OSquare[i] + OSquare[j] + OSquare[k] === 15) {
              setResult("O");
            }
          }
        }
      }
    } else {
      if (board.includes("") === false && result === "none") {
        setResult("Tie");
      }
    }
  };
  const checkWin = () => {
    if (result !== "none" && result !== "Tie") {
      alert(`Game Finished. Winning player: ${result} `);
    }
    if (result === "Tie") {
      alert("Game Finished. It was a tie!");
    }
  };

  return (
    <div className="App">
      <h1>{OSquare}</h1>
      <div>{OScore}</div>
      <div>{result}</div>
      <div>{XScore}</div>

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
