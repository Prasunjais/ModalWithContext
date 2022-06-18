import React, { useCallback, useEffect, useState, useContext } from "react";
import Modal from "./Modal";
import { ModalContext } from "./ModalContext";

export const useConfirm = () => {
  const [modal, setModal] = useContext(ModalContext);
  console.log("modal -->", modal.isOpen);
  // const [isClosed, setIsClosed] = useState(false);
  // let interval = null;
  // const onCloseHandler = () => {
  //   // setIsClosed(true);
  //   onClose();
  // };
  // useEffect(() => {
  //   console.log("Im called here", isClosed);
  //   if (isClosed) clearInterval(interval);
  // }, [isClosed, interval]);

  const triggerConfirm = ({ text }) => {
    // console.log("im called here");
    // setModal((prev) => {
    //   return {
    //     ...prev,
    //     title: text,
    //     isOpen: true
    //   };
    // });
    // onOpen();
    let promiseNew = new Promise((resolve, reject) => {
      // let interval = setInterval(() => {
      // console.log("Im called here", isClosed);
      // resolve();
      setModal((prev) => {
        return {
          ...prev,
          title: text,
          isOpen: true,
          resolvePromise: (booleanVal) => resolve(booleanVal)
        };
      });
      console.log("osOpen", modal.isOpen);
      // if (!modal.isOpen) resolve();
      //   }
      // }, 2000);
    });
    return promiseNew.then((booleanValNew) => {
      return booleanValNew;
    });
  };

  return {
    // triggerConfirm: ({ text }) => {
    //   setTitle(text);
    //   onOpen();
    //   let infiniteWaiting = setInterval(() => {
    //     console.log("running", isClosed);
    //   }, 1000);
    //   if (isClosed) {
    //     console.log("im called cloised");
    //     clearInterval(infiniteWaiting);
    //   }
    //   // return new Promise((resolve, reject) => {
    //   //   if (isClosedRef) resolve();
    //   //   // clearInterval(infiniteWaiting);
    //   // });
    // },

    // triggerConfirm: async ({ text }) => {
    //   onOpen();
    //   setTitle(text);
    //   console.log("im getting called here", isOpen);
    //   await new Promise((resolve, reject) => {
    //     let interval = setInterval(() => {
    //       console.log("Im called here", isOpen);
    //       if (isClosed) {
    //         clearInterval(interval);
    //         resolve();
    //       }
    //     }, 2000);
    //   });
    //   return true;
    //   // return new Promise((resolve, reject) => {
    //   //   if (isClosed) resolve();
    //   // });
    // },

    triggerConfirm,
    ConfirmDialog: () => {
      return <Modal />;
    }
  };
};
