import { FC } from 'react';
import { Content, Typography } from 'ui';
import { GuidePay } from './components/guidePay';
import { InfoTable } from './components/infoTable';
import { SectionMenu } from './components/optionMenu';

export const HomeView: FC = () => {
  return (
    <Content>
      <Typography fSize="24px" text="¡Buenos días, Angelo!" />
      <Typography text="¿Tienes alguna pregunta? Visita nuestro centro de ayuda o escríbenos." />
      <SectionMenu />
      <GuidePay />
      <InfoTable />
    </Content>
  );
};
