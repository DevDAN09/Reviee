import styled from "styled-components";
import { getFontStyle } from "@/styles/typo";
import colors from "@/styles/color";

export const VelogPageStyle = styled.div`
    width: inherit;
    height: 100%;
`

export const HeaderContainer = styled.div`
    width: inherit;
`

export const ContentContainer = styled.div`
    position: relative;
    width: 100%;
    margin-left: 2rem;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`
export const Title = styled.div`
    margin-top: 1rem;
    ${getFontStyle('Header1')}
    color: ${colors.primary};
    text-align: start;
        animation: slideDown 0.3s ease-in-out;
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @media screen and (max-width: 425px) {
        font-size: 1.5rem;
    }
`

export const SubTitle = styled.div`
    margin-top: 1rem;
    ${getFontStyle('Header3')}
    color: ${colors.text};
    text-align: start;
    animation: fadeIn 0.3s ease-in-out;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @media screen and (max-width: 425px) {
        font-size: 1rem;
    }
`

export const Description = styled.div`
    margin-top: 0.3rem;
    ${getFontStyle('Body1')}
    color: ${colors.text};
    text-align: start;
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: 425px) {
        font-size: 0.8rem;
    }

    animation: typing 2s steps(50);
    
    @keyframes typing {
        from { 
            width: 0;
        }
        to { 
            width: 100%;
        }
    }
`

export const StepDescription = styled.div`
    margin-top: 0.3rem;
    ${getFontStyle('Body1')}
    color: ${colors.text};
    text-align: start;
    width: fit-content;
`

export const ButtonContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;
`

export const TextFieldContainer = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const StepIndicatorContainer = styled.div`
    width: inherit;
    margin-top: 6rem;
`

export const BackButton = styled.img`
    margin-top: 2rem;
    margin-left: 2rem;
    width: 1rem;
    height: 1rem;

    @media screen and (max-width: 768px) {
        margin-left: 0rem;
    }
`

export const MDEditorWrapper = styled.div`
    width: inherit;

    @media screen and (max-width: 425px) {
        max-width: 300px;
    }
`

export const MarkdownWrapper = styled.div<{ isEditing: boolean }>`
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background-color: #ffffff;
  max-width: 80%;
  max-height: ${props => props.isEditing ? '250px' : '500px'};
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 425px) {
    max-width: 300px;
  }

  @media screen and (max-width: 375px) {
    max-width: 250px;
  }

  & > * {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  pre {
    background-color: #282c34; 
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 16px 0;
  }

  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 14px;
    color: #e6e6e6;
  }

  p code {
    background-color: #f0f0f0;
    color: #333;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  .hljs {
    background-color: #282c34;
    color: #abb2bf;
  }

  .hljs-keyword {
    color: #c678dd;
  }

  .hljs-string {
    color: #98c379;
  }

  .hljs-comment {
    color: #5c6370;
  }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    align-items: baseline;
    gap: 12px;
`;

export const EditorContainer = styled.div`
    width: inherit;
    max-width: 80%;
    max-height: 250px;
    animation: slideDown 0.3s ease-in-out;

    @media screen and (max-width: 425px) {
        max-width: 300px;
    }
    
    @media screen and (max-width: 375px) {
        max-width: 250px;
    }
`;

export const FloatingToggleButton = styled.button<{ isActive: boolean }>`
    position: fixed;
    padding: 12px 24px;
    right: 2rem;
    bottom: 2rem;
    border-radius: 25px;
    background-color: ${props => props.isActive ? colors.primary : '#000000'};
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
    z-index: 100;
    animation: shake 0.4s ease-in-out 3;

    &:focus {
        outline: none;
        border: none;
    }

    @keyframes shake {
        0%, 100% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-5px);
        }
        75% {
            transform: translateY(5px);
        }
    }

    &:hover {
        border: none;
        outline: none;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    &:active {
        transform: translateY(0);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;