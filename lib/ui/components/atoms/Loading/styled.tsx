import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import { TLoadingProps } from './types';

const Animation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;
export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Spinner = styled(FontAwesomeIcon)<Pick<TLoadingProps, 'color'>>`
  color: ${({ theme, color }) => theme.colors.text[color || 'primary']};
  animation: ${Animation} 1s infinite;
`;
