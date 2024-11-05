import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CycleProvider } from "./contexts/cycleContext/provider";
import "./tailwind.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root element not found!");
}

ReactDom.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <CycleProvider>
        <Router />
      </CycleProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
