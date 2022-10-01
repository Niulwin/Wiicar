import styled from 'styled-components';
import { CardHeightSize, CardWidthSize, TCardProps } from './types';

type TSection = Pick<
  TCardProps,
  | 'align'
  | 'background'
  | 'color'
  | 'direction'
  | 'gap'
  | 'justify'
  | 'mHeight'
  | 'padding'
  | 'position'
  | 'size'
  | 'variant'
  | 'width'
>;
export const Section = styled.div<TSection>`
  display: flex;
  gap: ${({ gap }) => gap || '15px'};
  padding: ${({ padding }) => padding || '16px'};
  text-align: center;
  justify-content: ${({ justify }) => justify || 'center'};
  min-height: ${({ mHeight }) => mHeight};
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'column'};
  border-radius: 5px;
  width: ${({ size, width }) => width || CardWidthSize[size || 'fullWidth']};
  height: ${({ size }) => CardHeightSize[size || 'auto']};
  box-shadow: 0px 2px 16px rgb(20 9 51 / 15%);
  cursor: pointer;
  background-color: ${({ variant, theme, background }) =>
    variant === 'contained'
      ? theme.colors[background || 'background'].main
      : 'transparent'};
  border: ${({ variant, theme, background }) =>
    variant === 'outlined'
      ? `1px solid ${theme.colors[background || 'border'].main}`
      : 'none'};
`;
