import { keyframes, css } from 'styled-components'; // keyframes를 import 추가
import { transform } from './mixin';

const toastAnimations = {
    open: keyframes`
      0%{
        opacity: 0;
        ${transform('translate(-50%, -20%)')};
      }
      100%{
        opacity: 1;
        ${transform('translate(-50%, 0%)')};
      }
    `,
    close: keyframes`
      0%{
        opacity: 1;
        ${transform('translate(-50%, 0%)')};
      }
      100%{
        opacity: 0;
        ${transform('translate(-50%, -20%)')};
      }
    `,
    toastContent: keyframes`
      0%{
        width: 0;
      }
      100%{
        width: 100%;
      }
    `,
};

const floatAnimations = {
    slideDown: keyframes`
      0%{
        opacity: 0;
        ${transform('translate(-50%, -20%)')};
      }
      100%{
        opacity: 1;
        ${transform('translate(-50%, 0%)')};
      }
    `,
    slideUp: keyframes`
      0%{
        opacity: 0;
        ${transform('translate(-50%, 100%)')};
      }
      100%{
        opacity: 1;
        ${transform('translate(-50%, 0%)')};
      }
    `,
}

const modalAnimations = {
  open: keyframes`
    0%{
      opacity: 0;
      ${transform('translate(-50%, 70%)')};
    }
    100%{
      opacity: 1;
      ${transform('translate(-50%, 120%)')};
    }
  `,
  close: keyframes`
    0%{
      opacity: 1;
      ${transform('translate(-50%, 120%)')};
    }
    100%{
      opacity: 0;
      ${transform('translate(-50%, 70%)')};
    }
  `,
}

const fadeInAnimations = {
  fadeIn: keyframes`
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  `,
  fadeOut: keyframes`
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  `,
}

const animations = {
    toastOpen: toastAnimations.open,
    toastClose: toastAnimations.close,
    toastContent: toastAnimations.toastContent,
    floatSlideDown: floatAnimations.slideDown,
    floatSlideUp: floatAnimations.slideUp,
    modalOpen: modalAnimations.open,
    modalClose: modalAnimations.close,
    fadeIn: fadeInAnimations.fadeIn,
    fadeOut: fadeInAnimations.fadeOut,
}

export const injectAnimation = (
    animation: keyof typeof animations,
    duration = '1.5s',
    type = 'linear',
    delay = '0s',
    relative = false,
  ): ReturnType<typeof css> => {
    const newAnimation = css`
      animation: ${animations[animation]} ${duration} ${type} ${delay} forwards;
      ${relative &&
      css`
        position: relative;
      `};
    `;
  
    return newAnimation;
  };