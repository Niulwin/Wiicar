import { useTranslate } from 'core';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button, FlexContainer, Loading, Typography, useTheme } from 'ui';
import { useAuthLogin } from '../hooks/useAuthLogin';
import { Body, BoxInput, ButtonMetamask, Icon, ImgInfo, Input } from './styled';

export const LoginComponent: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const t = useTranslate();
  const { handleLogin, loading, values, handleChange, handleGeneralLogin } =
    useAuthLogin();

  return (
    <FlexContainer>
      <>
        {/* <ButtonBack onClick={() => router.back()}>{t('global.back')}</ButtonBack> */}
        <Body width="400px">
          <Image src="/logo.svg" alt="logo" width={150} height={100} />

          <Typography variant="body1">{t('login.login_yafuz')}</Typography>
          <BoxInput>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder={t('login.fields.email')}
            />
            <Icon icon="at" />
          </BoxInput>
          <BoxInput>
            <Input
              name="password"
              value={values.password}
              onChange={handleChange}
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
            loading={loading}
            style={{
              width: '100%',
              padding: '.5rem',
              justifyContent: 'center'
            }}
            title={t('login.login')}
            onClick={handleGeneralLogin}
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
          <Link href="/auth/register">
            <a
              style={{
                textDecoration: 'underline',
                color: theme?.colors.secondary.secondary,
                fontSize: 14
              }}
            >
              {t('login.sign_up_yafuz_link')}
            </a>
          </Link>
        </Body>
      </>
    </FlexContainer>
  );
};
