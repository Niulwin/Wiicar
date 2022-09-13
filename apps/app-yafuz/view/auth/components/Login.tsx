import { useTranslate } from 'core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Button, Loading, Typography, useTheme } from 'ui';
import { useAuthLogin } from '../hooks/useAuthLogin';
import {
  Body,
  BoxInput,
  ButtonMetamask,
  Container,
  Icon,
  ImgInfo,
  Input
} from './styled';

export const LoginComponent: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslate();
  const { handleLogin, loading } = useAuthLogin();

  return (
    <Container>
      <>
        {/* <ButtonBack onClick={() => router.back()}>{t('global.back')}</ButtonBack> */}
        <Body>
          <Image src="/logo.svg" alt="logo" width={150} height={100} />

          <Typography variant="body1">{t('login.login_yafuz')}</Typography>
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
            <a
              style={{
                textDecoration: 'none',
                color: theme?.colors.secondary.main,
                fontSize: 14
              }}
            >
              {t('login.forgot_password')}
            </a>
          </Link>
          <Button
            style={{
              width: '100%',
              padding: '.5rem',
              justifyContent: 'center'
            }}
            title={t('login.login')}
            onClick={() => router.push('/home')}
            variant="contained"
            color="light"
          />

          <Typography variant="body1">{t('login.login_with')}</Typography>
          <ButtonMetamask>
            {loading ? (
              <Loading color="secondary" />
            ) : (
              <ImgInfo
                src="/logo/Metamask-logo.svg"
                alt="logo"
                onClick={handleLogin}
              />
            )}
          </ButtonMetamask>
        </Body>
      </>
    </Container>
  );
};
