import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { StateProvider } from "./provider/index.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";
import PersonalMatrix from "./Matrix/personal/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/result",
    element: <PersonalMatrix />,
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
