import { useToastStore } from "@/atoms/toastState";
import { ToastType } from "@/atoms/toastState";

export const useToast = () => {
  const { setToast, setIsTransition } = useToastStore();

  const showToast = (toast: ToastType, callback?: () => void) => {
    setToast({ ...toast, isOpen: true });


    setTimeout(() => {
      setIsTransition(true);
      setTimeout(() => {
        setToast({ ...toast, isOpen: false });
        setIsTransition(false);

        if (callback) callback();
      }, 300);
    }, 3000);
  };

  return { showToast };
};