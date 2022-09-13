import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

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
export const Spinner = styled(FontAwesomeIcon)<{
  color?: 'primary' | 'secondary';
}>`
  color: ${({ theme, color }) => theme.colors[color || 'primary'].main};
  animation: ${Animation} 1s infinite;
`;
