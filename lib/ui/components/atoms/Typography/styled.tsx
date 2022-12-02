import styled from 'styled-components';
type TProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'disabled';
  align?: 'center' | 'left' | 'right';
  weight?: '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold';
};

export const TypographyH1 = styled.h1<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '300'};
  font-size: 6rem;
  line-height: 1.167;
  letter-spacing: -0.01562em;
`;

export const TypographyH2 = styled.h2<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '300'};
  font-size: 3.75rem;
  line-height: 1.2;
  letter-spacing: -0.00833em;
`;

export const TypographyH3 = styled.h3<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '400'};
  font-size: 3rem;
  line-height: 1.167;
  letter-spacing: 0em;
`;

export const TypographyH4 = styled.h4<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '400'};
  font-size: 2.125rem;
  line-height: 1.235;
  letter-spacing: 0.00735em;
`;

export const TypographyH5 = styled.h5<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '400'};
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
`;

export const TypographyH6 = styled.h6<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

export const TypographySubtitle = styled.h6<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 0.875rem;
  line-height: 1.57;
  letter-spacing: 0.00714em;
`;

export const TypographyBody1 = styled.p<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '400'};
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

export const TypographyBody2 = styled.p<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '400'};
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

export const TypographyCaption = styled.span<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.01071em;
  display: block;
`;

export const TypographyCaption2 = styled.span<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.01071em;
`;

export const TypographyCaption3 = styled.span<TProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${({ weight }) => weight || '300'};
  font-size: 0.675rem;
  line-height: 1.75;
  letter-spacing: 0.01071em;
`;
