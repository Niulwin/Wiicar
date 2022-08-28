import { FC, Fragment } from 'react';
import { Typography } from 'ui';

export const MyShoppingView: FC = () => {
  return (
    <Fragment>
      <Typography fSize="24px" text="¡Buenos días, Angelo!" />
      <Typography text="¿Tienes alguna pregunta? Visita nuestro centro de ayuda o escríbenos." />
    </Fragment>
  );
};
