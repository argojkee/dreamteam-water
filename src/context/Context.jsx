import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext(undefined);

export const useCustomContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalContextProvider');
  }
  return context;
};

export const Context = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState(null);

  const contextValue = {
    content,
    setContent,
    isShowModal,
    setIsShowModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
