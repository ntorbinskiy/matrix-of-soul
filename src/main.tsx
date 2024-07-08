import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme.ts";

import MainPage from "./pages/index.tsx";
import ResultPage from "./pages/result.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
