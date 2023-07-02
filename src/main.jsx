import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
  // es un componente que nos permite activar algunas comprobaciones de desarrollo en React,
  //por ejemplo, detecta componentes que se renderizan de forma innecesaria por esto se puedenr epetir aveces los componentes
);
