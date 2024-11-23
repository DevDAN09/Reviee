import { styled }from "styled-components";
import { injectAnimation } from "@/styles/animation";
import { transform } from "@/styles/mixin";

export const ToastContainer = styled.div`
    position: fixed;
    z-index: 99;
    top: 2rem;
    left: 50%;
    opacity: 0;
    ${transform('translate(-50%, 0%)')};
    ${injectAnimation('toastOpen', '1s', 'ease')};
`