import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import { Calculator } from "./pages/calculator/calculator.jsx";
import { Counter } from "./pages/counter/counter.jsx";
import { TicTacToe } from "./pages/tic-tac-toe/tic-tac-toe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
