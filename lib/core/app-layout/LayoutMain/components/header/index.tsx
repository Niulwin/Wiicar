import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Button, Select, Typography, useTheme } from 'ui';
import { LanguagesSupport } from '../../../../i18n';
import { useI18n, useTranslate } from '../../../../i18n/hooks';
import { FlexContainer, Head, Section } from './styled';
import { THeaderProps } from './types';

export const Header: FC<THeaderProps> = ({
  hiddenLogin,
  currentUser,
  isSession
}: THeaderProps) => {
  const translate = useTranslate();
  const router = useRouter();
  const { theme, changeTheme } = useTheme();
  const { changeLanguage, language } = useI18n();
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
                  onClick={() => router.push('auth/login')}
                />
                <Button
                  color="light"
                  variant="contained"
                  title={translate('login.sign_up')}
                />
              </>
            ) : (
              <Typography variant="caption">
                {currentUser?.username || ''}
              </Typography>
            ))}
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
        </FlexContainer>
      </Section>
    </Head>
  );
};
