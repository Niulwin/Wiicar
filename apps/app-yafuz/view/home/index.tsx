import { useTranslate } from 'core';
import { FC } from 'react';
import { Content, Typography } from 'ui';
import { InfoTable } from './components/infoTable';
import { SectionMenu } from './components/optionMenu';

export const HomeView: FC = () => {
  const translate = useTranslate();

  return (
    <Content>
      <Typography variant="h6">
        <>{translate('global.menu_options.home')} &gt;</>
      </Typography>
      <SectionMenu />
      {/* <GuidePay /> */}
      <InfoTable />
    </Content>
  );
};
