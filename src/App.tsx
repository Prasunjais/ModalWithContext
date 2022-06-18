import React, { useCallback, createContext, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useConfirm } from "./ChakraModal";
import customTheme from "./theme";
import { Button } from "@chakra-ui/react";
// export const ModalContext = createContext([{}, function () {}]);

export default function App() {
  // const [modal, setModal] = useState({
  //   title: "",
  //   isOpen: false
  // });

  const { triggerConfirm, ConfirmDialog } = useConfirm();
  const handleClick = useCallback(async () => {
    let choice: boolean = await triggerConfirm({
      text: "Are you sure you want to delete this user ?"
    });
    console.log("Called after close", choice);
    if (choice) console.log("im called to delete");
  }, [triggerConfirm]);
  return (
    // <ModalContext.Provider value={[modal, setModal]}>
    <ChakraProvider theme={customTheme}>
      <ConfirmDialog />
      <Button onClick={handleClick}>Open</Button>
      {/* <Modal onClose={onClose} isOpen={isOpen} /> */}
    </ChakraProvider>
    // </ModalContext.Provider>
  );
}
