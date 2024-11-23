import colors from '@/styles/color';
import styled from 'styled-components';
import { ButtonSizeType } from '@/constants/button.constant';
import { getFontStyle } from '@/styles/typo';

interface StyledButtonProps {
  $size: ButtonSizeType;
}

const sizes = {
  SMALL: 72,
  MEDIUM: 149,
  BIG: 279,
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0px;
  width: ${({ $size }) => `${sizes[$size]}px`};
  height: ${({ $size }) => ($size === 'SMALL' ? 23 : 38)}px;
  background: ${colors.button_background};
  color: ${colors.white};
  border-radius: 11px;
  ${({ $size }) => ($size === 'SMALL' ? getFontStyle('Caption2') : getFontStyle('Header5'))};
  cursor: pointer;

  &:hover {
    border: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.white};
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.18) 77.63%,
        rgba(255, 255, 255, 0.6) 100%
      ),
      linear-gradient(0deg, rgba(252, 214, 44, 0.5) 0%, rgba(255, 146, 68, 0.5) 100%);
  }
`;
