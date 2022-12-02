import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Button, FlexContainer, Select, useTheme } from 'ui';
import { LanguagesSupport } from '../../../i18n';
import { useI18n, useTranslate } from '../../../i18n/hooks';
import { Logo } from '../../LayoutMain/styled';
import { Head, MenuIcon } from './styled';
import { THeaderProps } from './types';

export const Header: FC<THeaderProps> = ({}: THeaderProps) => {
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
      <FlexContainer padding="0" align="flex-start">
        <MenuIcon icon="bars" fontSize="22px" />
      </FlexContainer>
      <FlexContainer padding="0">
        <Logo />
      </FlexContainer>
      <FlexContainer padding="0" direction="row" justify="flex-end">
        <Button
          iconLeft="power-off"
          color="primary"
          variant="outlined"
          size="small"
          onClick={() => alert('Logout')}
          title={translate('global.logout')}
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
      </FlexContainer>
    </Head>
  );
};
