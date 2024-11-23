import styled from "styled-components";
import { getFontStyle } from "@/styles/typo";
import colors from "@/styles/color";

export const HomePageStyle = styled.div`
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
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @media screen and (max-width: 320px) {
        font-size: 2rem;
    }
`

export const Description = styled.div`
    margin-top: 0.5rem;
    ${getFontStyle('Body1')}
    color: ${colors.text};
    text-align: center;
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    animation: slideDown 0.8s ease-in-out, fadeIn 1s ease-in-out;
    

    @keyframes slideDown {
        from { transform: translateY(-50%); }
        to { transform: translateY(0); }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 20px;
`;

export const LoadingSpinner = styled.div`
    margin-top: 10rem;
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid ${colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const LoadingText = styled.div`
    ${getFontStyle('Body1')}
    color: ${colors.text};
`;