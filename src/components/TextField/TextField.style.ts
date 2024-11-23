import styled from 'styled-components';
import colors from '@/styles/color';
import { getFontStyle } from '@/styles/typo';

interface isTextFieldProps {
  $isError?: boolean;
}

export const StyledTextFieldContainer = styled.div<{ $width: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${props => props.$width};
`;

export const StyledTextFieldLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const StyledTextFieldLabel = styled.label`
  padding-left: 5px;
  ${getFontStyle('Caption3')};
  font-weight: 700;
  color: ${colors.secondary_text};
`;

export const StyledTextFieldHelperText = styled.span<isTextFieldProps>`
  ${getFontStyle('Caption3')};
  font-weight: 700;
  color: ${({ $isError }) => ($isError ? `${colors.sub_1}` : `${colors.secondary_text}`)};
`;

export const StyledTextFieldStarLabel = styled.span`
  color: ${colors.sub_1};
`;

export const StyledTextFieldInput = styled.input<{ 
  $isError?: boolean;
  $height?: string;
}>`
  width: 100%;
  height: ${props => props.$height};
  padding: 12px 16px;
  border: 0.3px solid ${props => (props.$isError ? colors.error : colors.box_border)};
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${props => (props.$isError ? colors.error : colors.primary)};
  }
`;

export const StyledTextFieldTextArea = styled.textarea<{ 
  $isError?: boolean;
  $height?: string;
}>`
  width: 100%;
  height: ${props => props.$height};
  min-height: ${props => props.$height};
  padding: 12px 16px;
  border: 0.3px solid ${props => (props.$isError ? colors.error : colors.box_border)};
  border-radius: 8px;
  font-size: 16px;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${props => (props.$isError ? colors.error : colors.primary)};
  }
`;

