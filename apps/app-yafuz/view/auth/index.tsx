// Modules
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Typography } from 'ui';

// Utils, Styles and Types
import { Body, ButtonBack, Container, ImgInfo, Section } from './styled';

export const AuthComponent: FC<any> = ({ children }: any) => {
  //custom states
  const router = useRouter();

  return (
    <Container>
      <Section background="#fff">
        <ButtonBack onClick={() => router.back()}>Atrás</ButtonBack>
        <Body>{children}</Body>
      </Section>
      <Section>
        <Typography align="center" fSize="24px" text="Inicio de sesion con " />
        <ImgInfo src="/logo/Metamask-logo.svg" alt="logo" />
      </Section>
    </Container>
  );
};
