import { Section } from './styled';

export const Card = ({ onClick, children, mHeight, justify }: any) => {
  return (
    <Section justify={justify} mHeight={mHeight} onClick={onClick}>
      {children}
    </Section>
  );
};
