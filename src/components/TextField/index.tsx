import { InputHTMLAttributes } from 'react';
import {
  StyledTextFieldContainer,
  StyledTextFieldHelperText,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledTextFieldLabelContainer,
  StyledTextFieldStarLabel,
} from './TextField.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  description: string;
  isError?: boolean;
  errorMessage?: string;
  value: string;
  width?: string;
  height?: string;
  multiline?: boolean;
}

const TextField = ({
  title,
  description,
  isError,
  errorMessage,
  value,
  onChange,
  width = '80%',
  height = 'auto',
  ...props
}: InputProps) => {
  
  return (
    <StyledTextFieldContainer $width={width}>
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
        $height={height}
        value={value}
        onChange={onChange}
        {...props}
      />
    </StyledTextFieldContainer>
  );
};

export default TextField;
