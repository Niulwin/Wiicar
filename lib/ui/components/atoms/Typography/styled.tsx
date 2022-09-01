import styled from 'styled-components';
type TTextSpan = {
  fSize?: string;
  color?: string;
  align?: string;
};

export const TextSpan = styled.span<TTextSpan>`
  text-align: ${({ align }) => align || 'start'};
  font-size: ${({ fSize }) => fSize || '13px'};
  color: ${({ color }) => color};
  width: 100%;
  margin: 0;
`;
