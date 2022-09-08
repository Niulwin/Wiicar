import { message } from 'antd';
import { useTranslate } from 'core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Typography } from 'ui';
import { useLogin } from '../hooks/useLogin';

import {
  Body,
  ButtonBack,
  Container,
  ImgInfo,
  Section
} from './AuthLayout.styles';

export const AuthComponent: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const router = useRouter();
  const translate = useTranslate();
  const { handleSessionWithMetamask, error } = useLogin();

  return (
    <>
      <Container>
        <Section background="#fff">
          <ButtonBack onClick={() => router.back()}>
            {translate('global.back')}
          </ButtonBack>
          <Body>{children}</Body>
        </Section>
        <Section>
          <Typography
            align="center"
            fSize="24px"
            text={translate('login.login_with')}
          />
          <ImgInfo
            src="/logo/Metamask-logo.svg"
            alt="logo"
            onClick={handleSessionWithMetamask}
          />
        </Section>
      </Container>
      {console.log('err')}
      {error && message.error('error')}
    </>
  );
};
