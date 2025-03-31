"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  openModal: (content: ReactNode, title: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  isModalOpen: boolean;
  modalTitle: ReactNode | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalTitle, setmodalTitle] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode, modalContent: ReactNode) => {
    setModalContent(content);
    setmodalTitle(modalContent);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setmodalTitle(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, modalContent, isModalOpen, modalTitle }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
