import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Head = styled.header`
  width: 100%;
  display: grid;
  align-content: center;
  padding: 0rem 0.7rem;
  grid-template-columns: 40px 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.background.main};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.main};
  transition: 0.3s;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0rem 2rem;
  }
`;
export const MenuIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 22px;
`;
