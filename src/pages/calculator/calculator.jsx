import React from "react";
import { useState } from "react";

import { Navbar } from "../../components/navbar";

export function Calculator() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleNumberClick = (value) => {
    setCurrentInput(currentInput + value);
  };

  const handleOperatorClick = (op) => {
    if (currentInput === "") return;
    setOperator(op);
    setPreviousInput(currentInput);
    setCurrentInput("");
  };

  const calculatorResult = () => {
    if (!operator || previousInput == "" || currentInput == "") return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    let calcResult = 0;
    switch (operator) {
      case "+":
        calcResult = prev + current;
        break;
      case "-":
        calcResult = prev - current;
        break;
      case "*":
        calcResult = prev * current;
        break;
      case "/":
        calcResult = prev / current;
        break;

      default:
        return;
    }

    setResult(calcResult);
    setCurrentInput(String(calcResult));
    setPreviousInput("");
    setOperator("");
  };

  const clearInput = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperator("");
    setResult(null);
  };

  return (
    <div className="text-white">
      <Navbar />
      <div className="bg-zinc-800 h-screen p-32">
        <div className="flex flex-col items-center ">
          <div className="bg-stone-900 p-12 rounded-xl">
            <div className="text-right p-5 bg-zinc-800 mb-8 rounded-full border">
              {result !== null ? result : currentInput || 0}
            </div>
            <div className="grid grid-cols-4 gap-5">
              <button
                className="bg-zinc-700 py-8 px-10 rounded-full text-2xl"
                onClick={() => handleNumberClick("7")}
              >
                7
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("8")}
              >
                8
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("9")}
              >
                9
              </button>
              <button
                className="bg-orange-400 rounded-full text-2xl"
                onClick={() => handleOperatorClick("/")}
              >
                /
              </button>

              <button
                className="bg-zinc-700 py-8 px-10 rounded-full text-2xl"
                onClick={() => handleNumberClick("4")}
              >
                4
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("5")}
              >
                5
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("6")}
              >
                6
              </button>
              <button
                className="bg-orange-400 rounded-full text-2xl"
                onClick={() => handleOperatorClick("*")}
              >
                x
              </button>

              <button
                className="bg-zinc-700 py-8 px-10 rounded-full text-2xl"
                onClick={() => handleNumberClick("1")}
              >
                1
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("2")}
              >
                2
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("3")}
              >
                3
              </button>
              <button
                className="bg-orange-400 rounded-full text-4xl"
                onClick={() => handleOperatorClick("-")}
              >
                -
              </button>

              <button
                className="bg-zinc-700 py-8 px-10 rounded-full text-2xl text-red-500"
                onClick={clearInput}
              >
                C
              </button>
              <button
                className="bg-zinc-700 rounded-full text-2xl"
                onClick={() => handleNumberClick("0")}
              >
                0
              </button>
              <button
                className="bg-green-500 rounded-full text-2xl"
                onClick={calculatorResult}
              >
                =
              </button>
              <button
                className="bg-orange-400 rounded-full text-4xl"
                onClick={() => handleOperatorClick("+")}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
