import styled, { css } from "styled-components";
import { injectAnimation } from "@/styles/animation";
import Colors from "@/styles/color";

const toastStyles = {
  positive: css`
    background-color: ${Colors.primary};
  `,
  negative: css`
    background-color: ${Colors.error};
  `,
};

export const ToastContainer = styled.div<{ $isTransition: boolean }>`
  position: fixed;
  z-index: 99;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0%);
  
  ${({ $isTransition }) =>
    $isTransition
      ? injectAnimation('toastClose', "0.3s", "ease")
      : injectAnimation('toastOpen', "0.3s", "ease")};
`;

export const ToastInnerWrapper = styled.div`
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  position: relative;
  min-height: 50px;
  background-color: ${Colors.white};
`;

export const ToastContent = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${Colors.primary};
  ${injectAnimation('fadeIn', '0.3s', 'ease')}
`;

export const ToastThemeLine = styled.div<{ $themestyle: "positive" | "negative" }>`
  ${({ $themestyle }) => toastStyles[$themestyle]}
  width: 5px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 8px 0 0 8px;
`;
