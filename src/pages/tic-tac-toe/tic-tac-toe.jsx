import { useState } from "react";
import { Navbar } from "../../components/navbar";

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //colums
    [0, 4, 8],
    [2, 4, 6], //diagonal
  ];

  const checkWinner = (newBoard) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        return;
      }

      if (!newBoard.includes(null)) {
        setWinner("Tie");
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setisXNext(!isXNext);
    checkWinner(newBoard);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setisXNext(true);
    setWinner(null);
  };

  return (
    <div className="text-white">
      <Navbar />
      <div className="bg-black h-screen flex justify-center items-center flex-col gap-10">
        <div>
          <h1 className=" text-4xl mb-2">Tic Tac Toe</h1>
          <h2 className="text-center">
            {winner
              ? winner == "Tie"
                ? "Its a Tie!"
                : `Winner: ${winner}`
              : `Next Player: ${isXNext ? "X" : "O"}`}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 w-72">
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-24 h-24 bg-white text-4xl font-bold border text-black border-gray-300 rounded-lg shadow-sm hover:bg-gray-400 transition"
            >
              {value}
            </button>
          ))}
        </div>

        {winner && (
          <button
            className="mt-4 px-6 py-2 bg-zinc-800 text-white font-semibold rounded-lg shadow-md hover:bg-zinc-700 transition"
            onClick={reset}
          >
            New Game
          </button>
        )}
      </div>
    </div>
  );
}
