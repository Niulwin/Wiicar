import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ContentOptions = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  padding: 0.5em;
  grid-template-columns: repeat(6, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Sections = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 1rem;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  height: 80px;
`;
export const Text = styled.span<{ weight?: string }>`
  width: 100%;
  text-align: center;
  font-weight: ${({ weight }) => weight};
  font-size: 11px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
