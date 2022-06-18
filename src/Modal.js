import React, { useContext } from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { ModalContext } from "./ModalContext";
// export const ModalContext = createContext([{}, function () {}]);

const ModalFun = () => {
  const [modal, setModal] = useContext(ModalContext);

  const setOnClose = (isReject = false) => {
    setModal((prev) => {
      return { ...prev, isOpen: false };
    });
    if (isReject) modal.resolvePromise(false);
    modal.resolvePromise(true);
  };
  console.log("isOpen", modal.isOpen);
  return (
    // <ModalContext.Provider value={[modal, setModal]}>
    <Modal isOpen={modal.isOpen} onClose={setOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modal.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modal.title}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={setOnClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={(reject) => setOnClose(reject)}>
            Secondary Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // </ModalContext.Provider>
  );
};

export default ModalFun;
