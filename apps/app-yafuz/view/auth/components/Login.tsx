import { useTranslate } from 'core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Typography } from 'ui';
import { AuthComponent } from './AuthLayout';
import { BoxInput, ButtonIn, Container, Icon, Input } from './styles';

export const LoginComponent = () => {
  //custom states
  const router = useRouter();
  const t = useTranslate();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AuthComponent>
      <Container>
        <Typography align="center" fSize="24px" text={t('login.login_yafuz')} />
        <BoxInput>
          <Input placeholder={t('login.fields.email')} />
          <Icon icon="at" />
        </BoxInput>
        <BoxInput>
          <Input
            type={isVisible ? 'text' : 'password'}
            placeholder={t('login.fields.password')}
          />
          <Icon
            onClick={() => setIsVisible(!isVisible)}
            icon={isVisible ? 'lock-open' : 'lock'}
          />
        </BoxInput>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: '#6979f8', fontSize: 14 }}>
            {t('login.forgot_password')}
          </a>
        </Link>
        <ButtonIn onClick={() => router.push('/home')}>Iniciar sesión</ButtonIn>
      </Container>
    </AuthComponent>
  );
};
