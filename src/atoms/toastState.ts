import {create} from "zustand";

export type ToastTheme = "negative" | "positive";

export interface ToastType {
  isOpen?: boolean;
  theme: ToastTheme;
  content: string;
}

interface ToastState {
  toast: ToastType;
  setToast: (toast: ToastType) => void;
  isTransition: boolean;
  setIsTransition: (isTransition: boolean) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toast: {
    isOpen: false,
    theme: "positive",
    content: "",
  },
  setToast: (toast:ToastType) => set({ toast }),
  isTransition: false,
  setIsTransition: (isTransition: boolean) => set({ isTransition }),
}
));