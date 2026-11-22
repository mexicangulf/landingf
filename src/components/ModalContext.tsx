// standard modal implementation

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  imageUrl: string | null;
  openModal: (url: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const openModal = (url: string) => setImageUrl(url);
  const closeModal = () => setImageUrl(null);

  return (
    <ModalContext.Provider value={{ imageUrl, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("No ModalProvider");
  return context;
};
