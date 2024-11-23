import React from "react";
import {
  ToastContainer,
  ToastInnerWrapper,
  ToastContent,
  ToastThemeLine,
} from "./ToastBox.style";

interface Props {
  theme: "positive" | "negative";
  content: string;
  isTransition: boolean;
  onClose: () => void;
}

export const ToastBox: React.FC<Props> = ({ theme, content, isTransition, onClose }) => {
  return (
    <ToastContainer $isTransition={isTransition}>
      <ToastInnerWrapper>
        <ToastContent>{content}</ToastContent>
        <ToastThemeLine $themestyle={theme} />
      </ToastInnerWrapper>
    </ToastContainer>
  );
};
