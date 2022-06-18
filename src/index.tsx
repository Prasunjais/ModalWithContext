import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import ModalContextFun from "./ModalContext";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ModalContextFun />
  </React.StrictMode>,
  rootElement
);
