import { FC, Fragment } from 'react';
import { TitleComponent } from '../Layout/common/TitleComponent';
import { GuidePay } from './components/guidePay';
import { InfoTable } from './components/infoTable';
import { SectionMenu } from './components/optionMenu';

export const HomeView: FC = () => {
  return (
    <Fragment>
      <TitleComponent
        title="¡Buenos días, Angelo!"
        subTitle="¿Tienes alguna pregunta? Visita nuestro centro de ayuda o escríbenos."
      />
      <SectionMenu />
      <GuidePay />
      <InfoTable />
    </Fragment>
  );
};
