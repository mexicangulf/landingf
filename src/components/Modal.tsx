import { useEffect, useState } from "react";
import { useModal } from "./ModalContext";

const Modal = () => {
  const { imageUrl, closeModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      const timeout = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setIsVisible(false);
    }
  }, [imageUrl]);

  if (!imageUrl) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeModal}
    >
      <img
        src={imageUrl}
        alt="Full size"
        className={`max-w-[95%] max-h-[90%] rounded-2xl object-contain shadow-2xl transform transition-transform duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Modal;
