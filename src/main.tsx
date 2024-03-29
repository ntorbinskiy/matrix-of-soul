import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { StateProvider } from "./provider/index.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";

import MainPage from "./pages/index.tsx";
import ResultPage from "./pages/result.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StateProvider>
        <RouterProvider router={router} />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
