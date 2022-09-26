import { useTranslate } from 'core';
import { FC } from 'react';
import { Content, StepsView, Typography } from 'ui';

export const OrderDetails: FC = () => {
  const translate = useTranslate();

  const menu = [
    { title: 'Pago pendiente' },
    {
      title: '¿Liberar criptomonedas al comprador?'
    },
    { title: 'Completado' }
  ];

  return (
    <Content>
      <Content
        noPadding
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        <Typography variant="h6">
          <>{translate('global.menu_options.order_details')} </>
        </Typography>
        <StepsView menu={menu} />
        <Content
          noPadding
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          <Typography variant="h6">
            <>{translate('global.menu_options.order_details')} </>
          </Typography>
        </Content>
      </Content>
    </Content>
  );
};
