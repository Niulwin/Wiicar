import { useTranslate } from 'core';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { FlexContainer, StepsView, Typography } from 'ui';

//components
import { Filled } from './components/filled';
import { GenerateSale } from './components/generateSale';
import { PendingPayment } from './components/pendingPayment';

const steps = [
  {
    title: 'Pago pendiente',
    component: (props: any) => <PendingPayment />
  },
  {
    title: '¿Liberar criptomoneda al comprador?',
    component: (props: any) => <GenerateSale />
  },
  {
    title: 'Completado',
    component: (props: any) => <Filled />
  }
];

export const OrderDetails: FC = () => {
  const translate = useTranslate();
  const router = useRouter();
  const [active, setActive] = useState<string>('0');

  const handlePage = (index: number) =>
    router.push({ pathname: '/order-details', query: { page: index } });

  // Effect query page render
  useEffect(() => {
    setActive((router.query.page as string) || '0');
  });

  return (
    <FlexContainer>
      <FlexContainer
        padding="0"
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        <Typography variant="h6">
          <>{translate('global.menu_options.order_details')} </>
        </Typography>
        <StepsView
          current={Number(active)}
          onChange={handlePage}
          menu={steps}
        />
        <FlexContainer
          padding="0"
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          {steps?.[Number(router?.query?.page || 0)]?.component({
            handlePage: (index: any) => handlePage(index)
          })}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
