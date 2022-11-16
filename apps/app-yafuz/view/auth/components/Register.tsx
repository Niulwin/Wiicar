import { useI18n, useTranslate } from 'core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import {
  Button,
  FlexContainer,
  message,
  SelectField,
  TextField,
  Typography,
  useTheme
} from 'ui';
import { useLogin, useRegister } from '../hooks/';
import {
  BackgroundBorderPrimary,
  BackgroundBorderSecondary,
  Body,
  FormContainer
} from './styled';

export const RegisterComponent: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslate();
  const i18n = useI18n();
  const {
    register,
    errors,
    handleSubmit,
    control,
    dataCountries,
    isLoading,
    countryCode,
    dataSponsor,
    handleMetamaskCode
  } = useRegister({
    translate: t,
    sponsorId: router.query?.sponsorId as string,
    onSuccess: () => router.push('/auth/login')
  });
  const { handleSessionWithMetamask } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FlexContainer>
      <>
        {/* <ButtonBack onClick={() => router.back()}>{t('global.back')}</ButtonBack> */}
        <Body>
          <Image src="/logo.svg" alt="logo" width={150} height={100} />
          <Typography variant="body1">{t('login.sign_up_yafuz')}</Typography>
          <form
            style={{ width: '100%', position: 'relative' }}
            onSubmit={handleSubmit}
          >
            <BackgroundBorderPrimary />
            <BackgroundBorderSecondary />
            <FormContainer>
              <FlexContainer direction="row" align="flex-start">
                <FlexContainer align="flex-start" justify="flex-start">
                  <TextField
                    name="nombre"
                    label={t('login.fields.first_name')}
                    width="100%"
                    placeholder="Jane"
                    register={register}
                    error={errors.nombre}
                  />
                  <TextField
                    name="apellidos"
                    label={t('login.fields.last_name')}
                    width="100%"
                    placeholder="Doe"
                    register={register}
                    error={errors.nombre}
                  />
                  <SelectField
                    name="country"
                    label={t('login.fields.country')}
                    width="100%"
                    register={register}
                    error={errors.country}
                    options={
                      dataCountries?.data?.map((country) => ({
                        value: country.id,
                        label:
                          i18n.language === 'es'
                            ? country?.nombre
                            : country?.name
                      })) || []
                    }
                  />
                  <TextField
                    name="celular"
                    type="phone"
                    label={t('login.fields.phone')}
                    width="100%"
                    placeholder={'1234567890'}
                    control={control}
                    countryCode={countryCode}
                    error={errors.celular}
                  />
                  <Typography variant="body1">
                    {t('login.fields.sponsor')}:{' '}
                    {dataSponsor
                      ? `${dataSponsor?.name} ${dataSponsor?.lastName}`
                      : t('login.no_sponsor')}
                  </Typography>
                  {dataSponsor && (
                    <Typography variant="body2">
                      {t('login.fields.sponsor_info', {
                        sponsor: `${dataSponsor?.name} ${dataSponsor?.lastName}`
                      })}
                    </Typography>
                  )}
                </FlexContainer>
                <FlexContainer align="flex-start" justify="flex-start">
                  <TextField
                    name="username"
                    label={t('login.fields.username')}
                    width="100%"
                    placeholder="JaneDoe123"
                    register={register}
                    error={errors.username}
                  />
                  <TextField
                    name="email"
                    label={t('login.fields.email')}
                    width="100%"
                    placeholder="jane@doe.com"
                    register={register}
                    error={errors.email}
                  />
                  <TextField
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label={t('login.fields.password')}
                    width="100%"
                    placeholder={t('login.fields.password')}
                    register={register}
                    error={errors.password}
                    iconRight={{
                      name: showPassword ? 'eye-slash' : 'eye',
                      onClick: () => setShowPassword(!showPassword)
                    }}
                  />
                  <TextField
                    type="password"
                    name="confirmPassword"
                    label={t('login.fields.confirm_password')}
                    width="100%"
                    placeholder={t('login.fields.confirm_password')}
                    register={register}
                    error={errors.confirmPassword}
                  />
                  <Button
                    type="button"
                    variant="outlined"
                    size="fullWidth"
                    onClick={() =>
                      handleSessionWithMetamask()
                        .then((r) => handleMetamaskCode(r[0]))
                        .catch((err) => message.error(err?.message))
                    }
                    title={t('login.fields.metamask')}
                  />
                  <TextField
                    noLabel
                    disabled={true}
                    name="address_wallet"
                    label={t('login.fields.wallet')}
                    width="100%"
                    placeholder={t('login.fields.wallet')}
                    register={register}
                    error={errors.address_wallet}
                  />
                </FlexContainer>
              </FlexContainer>
              <Button
                size="large"
                title={t('login.sign_up')}
                type="submit"
                variant="contained"
                color="light"
                loading={isLoading}
              />
              <Link href={'/auth/login'}>
                <a
                  style={{
                    marginTop: 15,
                    textDecoration: 'underline',
                    color: theme?.colors.secondary.secondary,
                    fontSize: 14
                  }}
                >
                  {t('login.login_yafuz_link')}
                </a>
              </Link>
            </FormContainer>
          </form>
        </Body>
      </>
    </FlexContainer>
  );
};
