import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Button, Select, Typography, useTheme } from 'ui';
import { IExchangeCurrency } from '../../../entities';
import { LanguagesSupport } from '../../../i18n';
import { useI18n, useTranslate } from '../../../i18n/hooks';
import { useExchangeCurrency } from '../../hooks/useExchangeCurrency';
import { FlexContainer, Head, Section } from './styled';
import { THeaderProps } from './types';

export const Header: FC<THeaderProps> = ({
  hiddenLogin,
  currentUser,
  isSession,
  logout,
  currentExchangeCurrency,
  changeCurrentExchangeCurrency
}: THeaderProps) => {
  const translate = useTranslate();
  const router = useRouter();
  const { theme, changeTheme } = useTheme();
  const { changeLanguage, language } = useI18n();
  const { dataExchangeCurrencies } = useExchangeCurrency();

  const [options] = useState([
    {
      value: LanguagesSupport.Spanish,
      title: translate('global.language.Spanish')
    },
    {
      value: LanguagesSupport.English,
      title: translate('global.language.English')
    }
  ]);

  useEffect(() => {
    if (!currentExchangeCurrency?.id && dataExchangeCurrencies?.length)
      changeCurrentExchangeCurrency(
        dataExchangeCurrencies[0] as IExchangeCurrency
      );
  }, [dataExchangeCurrencies]);

  return (
    <Head>
      <Section justify="flex-end">
        <FlexContainer>
          {hiddenLogin ||
            (!isSession ? (
              <>
                <Button
                  variant="text"
                  title={translate('login.login')}
                  onClick={() => router.push('/auth/login')}
                />
                <Button
                  color="light"
                  variant="contained"
                  onClick={() => router.push('/auth/register')}
                  title={translate('login.sign_up')}
                />
              </>
            ) : (
              <Typography variant="caption">
                {currentUser?.username || ''}
              </Typography>
            ))}
          <Select
            options={
              dataExchangeCurrencies?.map((exchangeCurrency) => ({
                title: `${exchangeCurrency.prefix}`,
                value: exchangeCurrency.id
              })) || []
            }
            value={currentExchangeCurrency?.id}
            key="asda"
            defaultValue={currentExchangeCurrency?.id || 'currency'}
            handleChange={(value) =>
              changeCurrentExchangeCurrency(
                dataExchangeCurrencies?.find(
                  (x) => x.id === value
                ) as IExchangeCurrency
              )
            }
          />
          <Select
            options={options}
            value={language}
            defaultValue={language}
            handleChange={(value) => changeLanguage(value)}
          />
          <Button variant="text" onClick={changeTheme}>
            <FontAwesomeIcon
              color={theme?.colors.background.secondary}
              icon={faCircleHalfStroke}
              size="1x"
            />
          </Button>
          {hiddenLogin ||
            (isSession && (
              <Button
                variant="text"
                iconLeft="power-off"
                color="error"
                onClick={() => logout()}
              />
            ))}
        </FlexContainer>
      </Section>
    </Head>
  );
};
