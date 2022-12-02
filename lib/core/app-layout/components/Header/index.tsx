import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Button, FlexContainer, SelectField, useTheme } from 'ui';
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
      label: translate('global.language.Spanish')
    },
    {
      value: LanguagesSupport.English,
      label: translate('global.language.English')
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
        <SelectField
          width="110px"
          options={options}
          name="language"
          value={language}
          onChange={(ev) => changeLanguage(ev.target.value)}
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
