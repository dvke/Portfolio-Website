// ModalContext.js
import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalContent(null);
    setModalVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        modalContent,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
