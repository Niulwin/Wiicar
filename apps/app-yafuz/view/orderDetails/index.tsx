import { useTranslate } from 'core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FlexContainer, StepsView, Typography } from 'ui';
import {
  MethodPaymentInformation,
  PayInformation,
  UserInformation
} from './components';
import { useOrderDetails } from './hooks';

export const OrderDetails: FC = () => {
  const translate = useTranslate();
  const { query } = useRouter();
  const { orderDetail, steps } = useOrderDetails({
    params: { id: query.id as string, type: query.type as string }
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
          current={
            steps?.find((step) => step.stage === orderDetail?.state)?.step ?? 1
          }
          menu={steps}
        />
        <FlexContainer
          padding="0"
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          <FlexContainer gap="10px">
            <FlexContainer gap="5px" padding="0" direction="row">
              <PayInformation orderDetail={orderDetail} />
              <UserInformation orderDetail={orderDetail} />
            </FlexContainer>
            <MethodPaymentInformation orderDetail={orderDetail} />
          </FlexContainer>

          <FlexContainer gap="10px" direction="column" align="flex-start">
            <Typography variant="caption">
              ¿Que deberia hacer tras recibir el pago?
            </Typography>
            <Typography variant="caption">
              ¿Que deberia hacer si la otra parte no realizo el pago?
            </Typography>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
