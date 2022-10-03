import { useTranslate } from 'core';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button, FlexContainer, StepsView, Typography } from 'ui';
import {
  MethodPaymentInformation,
  PayInformation,
  UserInformation
} from './components';
import { useOrderDetails } from './hooks';

export const OrderDetails: FC = () => {
  const translate = useTranslate();
  const { query } = useRouter();
  const {
    orderDetail,
    steps,
    handleApproveSeller,
    loadingApproveSeller,
    handlePaymentBuyer,
    loadingPaymentBuyer
  } = useOrderDetails({
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
        <Typography variant="h6" color="info">
          <>
            {moment(orderDetail?.expirationDate).diff(new Date(), 'minute')} min
          </>
        </Typography>
        <StepsView
          current={
            steps?.find((step) => step.stage === orderDetail?.state)?.step ?? 0
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

          <FlexContainer gap="5px" padding="0" direction="row">
            <FlexContainer
              sm="6"
              gap="10px"
              direction="column"
              align="flex-start"
            >
              <Typography variant="caption">
                ¿Que deberia hacer tras recibir el pago?
              </Typography>
              <Typography variant="caption">
                ¿Que deberia hacer si la otra parte no realizo el pago?
              </Typography>
            </FlexContainer>
            <FlexContainer
              sm="6"
              gap="10px"
              direction="column"
              align="flex-start"
            >
              {query.type === 'seller' &&
                orderDetail?.id &&
                orderDetail.state === 'PAYMENT' && (
                  <Button
                    // disabled={item.state !== 'PROGRESS'}
                    loading={loadingApproveSeller}
                    onClick={() =>
                      handleApproveSeller({ invoiceId: orderDetail?.id })
                    }
                    size="xs"
                    iconLeft="check-double"
                    variant="contained"
                    background="primary"
                    color="light"
                    title={translate('order_details.actions.accept')}
                  />
                )}
              {query.type === 'buyer' &&
                orderDetail?.id &&
                orderDetail.state === 'PROGRESS' && (
                  <Button
                    // disabled={item.state !== 'PROGRESS'}
                    loading={loadingPaymentBuyer}
                    onClick={() =>
                      handlePaymentBuyer({
                        invoiceId: orderDetail?.id,
                        photo: 'hola.png'
                      })
                    }
                    size="xs"
                    iconLeft="check-double"
                    variant="contained"
                    background="primary"
                    color="light"
                    title={translate('order_details.actions.buy')}
                  />
                )}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
