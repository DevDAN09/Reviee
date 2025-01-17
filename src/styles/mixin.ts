import styled, { css } from 'styled-components';

type Direction = 'row' | 'column';
type JustifyContent =
  | 'between'
  | 'around'
  | 'evenly'
  | 'center'
  | 'start'
  | 'end';
type AlignItems = 'between' | 'around' | 'evenly' | 'center' | 'start' | 'end';

/*  ***************************************************************************** */

const justifyContentMap: Record<JustifyContent, string> = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

const alignItemsMap: Record<AlignItems, string> = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;

/** 공통 헤더 높이 */
export const HEADER_HEIGHT = 6;
/** 공통 바텀 네비게이션바 높이 */
export const BOTTOM_HEIGHT = 7;

export const containerStyle = {
  navigator: css`
    padding-top: ${HEADER_HEIGHT}rem;
    padding-bottom: ${BOTTOM_HEIGHT}rem;
  `,
  header: css`
    padding-top: ${HEADER_HEIGHT}rem;
  `,
  skinight: css`
    padding: 0rem;
  `,
};

/** tranform injector */
export const transform = (transformVal: string) => {
  return css`
    -webkit-transform: ${transformVal};
    -moz-transform: ${transformVal};
    -ms-transform: ${transformVal};
    transform: ${transformVal};
  `;
};

/** transition injector */
export const transition = (duration: string, animationType = 'linear') => {
  return css`
    -o-transition: all ${duration} ${animationType};
    -webkit-transition: all ${duration};
    -ms-transition: all ${duration};
    -moz-transition: all ${duration};
    transition: all ${duration};
  `;
};

  /** display flex injector */
export const flex = (
  direction: Direction,
  justifyContent: JustifyContent,
  alignItems: AlignItems,
  gap: number,
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContentMap[justifyContent]};
    align-items: ${alignItemsMap[alignItems]};
    gap: ${gap}rem;
  `;
};