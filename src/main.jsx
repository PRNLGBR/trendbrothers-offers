import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // opcional, só se quiser estilos globais

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
