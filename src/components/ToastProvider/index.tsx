import React from "react";
import { useToastStore } from "@/atoms/toastState";
import { ToastBox } from "./ToastBox";

const ToastProvider: React.FC = () => {
  const { toast, isTransition, setToast, setIsTransition } = useToastStore();

  const handleClose = () => {
    setIsTransition(true);
    setTimeout(() => {
      setToast({ isOpen: false, theme: "positive", content: "" });
      setIsTransition(false);
    }, 300); // Transition duration matches CSS animation
  };

  if (!toast.isOpen) return null;

  return (
    <ToastBox
      theme={toast.theme}
      content={toast.content}
      isTransition={isTransition}
      onClose={handleClose}
    />
  );
};

export default ToastProvider;
