import { FC, Fragment } from 'react';
import { TitleComponent } from '../Layout/common/TitleComponent';

export const MyAccountsView: FC = () => {
  return (
    <Fragment>
      <TitleComponent
        title="¡Buenos días, Angelo!"
        subTitle="Aqui se ve reflejado la informacion del usuario"
      />
    </Fragment>
  );
};
