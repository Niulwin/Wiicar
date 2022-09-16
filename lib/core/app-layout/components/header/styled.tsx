import styled from 'styled-components';

export const Head = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 0rem 2rem;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.main};
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
`;
export const Section = styled.div<{ width?: string; justify?: string }>`
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'flex-end'};
  width: ${({ width }) => width || '100%'};
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextInfo = styled.div`
  width: 100%;
  font-size: 12px;
  color: #fff;
  text-align: end;
`;
export const BoxUser = styled.div`
  display: flex;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  overflow: hidden;
  border: 1px solid #fff;
  background-color: #fff;
  width: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
