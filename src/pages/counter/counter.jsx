import { useState } from "react";

import { Navbar } from "../../components/navbar";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="text-white">
      <Navbar />
      <div className="bg-zinc-800 h-screen flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 bg-zinc-900 p-5 rounded-xl">
          <p className="text-5xl col-span-3 bg-zinc-500 text-black text-center p-5">
            {count}
          </p>
          <button className="text-5xl bg-red-500 px-8 py-4" onClick={decrement}>
            -
          </button>
          <button className="bg-red-600" onClick={reset}>
            Reset
          </button>
          <button className="text-5xl bg-green-500" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
