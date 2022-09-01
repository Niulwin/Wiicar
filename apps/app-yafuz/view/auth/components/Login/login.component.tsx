import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Typography } from 'ui';
import { AuthComponent } from '../..';
import { BoxInput, ButtonIn, Container, Icon, Input } from './login.styled';

export const LoginComponent = () => {
  //custom states
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AuthComponent>
      <Container>
        <Typography align="center" fSize="24px" text="Inicio de sesion" />
        <BoxInput>
          <Input placeholder="Email de usuario" />
          <Icon icon="at" />
        </BoxInput>
        <BoxInput>
          <Input
            type={isVisible ? 'text' : 'password'}
            placeholder="Contraseña"
          />
          <Icon
            onClick={() => setIsVisible(!isVisible)}
            icon={isVisible ? 'lock-open' : 'lock'}
          />
        </BoxInput>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: '#6979f8', fontSize: 14 }}>
            ¿Has olvidado tu contraseña?
          </a>
        </Link>
        <ButtonIn onClick={() => router.push('/home')}>Iniciar sesión</ButtonIn>
      </Container>
    </AuthComponent>
  );
};
