import styled from 'styled-components';

export const Head = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #7367f0;
  padding: 0rem 2rem;
  flex-direction: row;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
export const Section = styled.div<{ width?: string; justify?: string }>`
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'flex-end'};
  width: ${({ width }) => width || '100%'};
`;
export const BoxOptions = styled.div`
  display: flex;
  gap: 15px;
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const InfoUser = styled.div`
  display: flex;
  height: 40px;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextInfo = styled.span`
  width: 100%;
  font-size: 13px;
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
