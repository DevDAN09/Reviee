import styled from "styled-components";
import { getFontStyle } from "@/styles/typo";
import colors from "@/styles/color";

export const LoginPageStyle = styled.div`
    width: inherit;
`

export const HeaderContainer = styled.div`
    width: inherit;
`

export const ContentContainer = styled.div`
    width: inherit;
`
export const Title = styled.div`
    margin-top: 10rem;
    ${getFontStyle('Header1')}
    color: ${colors.primary};
    text-align: center;
`

export const ButtonContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

export const TextFieldContainer = styled.div`
    margin-top: 1rem;
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`