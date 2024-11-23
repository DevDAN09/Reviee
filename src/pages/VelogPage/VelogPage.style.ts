import styled from "styled-components";
import { getFontStyle } from "@/styles/typo";
import colors from "@/styles/color";

export const VelogPageStyle = styled.div`
    width: inherit;
`

export const HeaderContainer = styled.div`
    width: inherit;
`

export const ContentContainer = styled.div`
    width: inherit;
    margin-left: 2rem;
`
export const Title = styled.div`
    margin-top: 10rem;
    ${getFontStyle('Header1')}
    color: ${colors.primary};
    text-align: start;
`

export const SubTitle = styled.div`
    margin-top: 1rem;
    ${getFontStyle('Header3')}
    color: ${colors.text};
    text-align: start;
`

export const Description = styled.div`
    margin-top: 0.3rem;
    ${getFontStyle('Body1')}
    color: ${colors.text};
    text-align: start;
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