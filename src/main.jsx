import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={window.location.pathname || '/E-Commerce-App/'}>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
