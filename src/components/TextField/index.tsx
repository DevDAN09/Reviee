import { InputHTMLAttributes, useState } from 'react';
import {
  StyledTextFieldContainer,
  StyledTextFieldHelperText,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledTextFieldLabelContainer,
  StyledTextFieldStarLabel,
} from './TextField.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
  isError?: boolean;
  errorMessage?: string;
  value: string;
}

const TextField = ({
  title,
  description,
  isError,
  errorMessage,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <StyledTextFieldContainer>
      <StyledTextFieldLabelContainer>
        <StyledTextFieldLabel htmlFor={title}>
          {props.required ? (
            <>
              {title}
              <StyledTextFieldStarLabel> * </StyledTextFieldStarLabel>
            </>
          ) : (
            title
          )}
        </StyledTextFieldLabel>
        {isError && (
          <StyledTextFieldHelperText $isError={isError}>{errorMessage}</StyledTextFieldHelperText>
        )}
      </StyledTextFieldLabelContainer>
      <StyledTextFieldInput
        id={title}
        placeholder={description}
        $isError={isError}
        value={value}
        onChange={onChange}
        {...props}
      />
    </StyledTextFieldContainer>
  );
};

export default TextField;
