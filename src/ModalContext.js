import React, { createContext, useState } from "react";
import App from "./App";
export const ModalContext = createContext([{}, function () {}]);

const ModalContextFun = () => {
  const [modal, setModal] = useState({
    title: "",
    isOpen: false
  });
  return (
    <ModalContext.Provider value={[modal, setModal]}>
      <App />
    </ModalContext.Provider>
  );
};

export default ModalContextFun;
