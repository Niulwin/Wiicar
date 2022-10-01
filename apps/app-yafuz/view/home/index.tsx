import { useTranslate } from 'core';
import { FC } from 'react';
import { Content, FlexContainer, Typography } from 'ui';
import { InfoTable } from './components/infoTable';
import { SectionMenu } from './components/optionMenu';

export const Home: FC = () => {
  const translate = useTranslate();

  return (
    <Content>
      <FlexContainer align="flex-start">
        <Typography variant="h6">
          <>{translate('global.menu_options.home')} &gt;</>
        </Typography>
        <SectionMenu />
      </FlexContainer>
      {/* <GuidePay /> */}
      <InfoTable />
    </Content>
  );
};
