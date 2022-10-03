import { formatCurrency, IInvoices, useTranslate } from 'core';
import { Card, FlexContainer, Typography } from 'ui';

export const PendingPayment = ({
  orderDetail
}: {
  orderDetail?: IInvoices;
}) => {
  const translate = useTranslate();

  return (
    <FlexContainer gap="10px">
      <FlexContainer gap="5px" padding="0" direction="row">
        <Card width="50%" gap="5px" direction="column" align="flex-start">
          <Typography variant="caption"></Typography>
          <FlexContainer padding="0" direction="row" align="flex-start">
            {[
              { title: 'quantity', value: orderDetail?.quantity },
              {
                title: 'price',
                value: `${formatCurrency(orderDetail?.sale?.price)} COP`
              },
              {
                title: 'payment_amount',
                value: `${formatCurrency(orderDetail?.sale?.price)} COP`
              }
              // { title: 'payment_amount', value: orderDetail?.amount }
            ].map((x, i: number) => (
              <FlexContainer key={i} direction="column" align="flex-start">
                <Typography variant="caption">
                  {translate(`offers_list.${x.title}` as 'offers_list')}
                </Typography>
                <Typography variant="caption">{x.value}</Typography>
              </FlexContainer>
            ))}
          </FlexContainer>
        </Card>
        <Card width="50%" gap="5px" direction="column" align="flex-start">
          <Typography variant="caption">
            {translate('offers_list.price')}
          </Typography>
          <FlexContainer padding="0" direction="row" align="flex-start">
            <FlexContainer direction="column" align="flex-start">
              {translate('offers_list.payment_amount')}
              <Typography variant="caption">COL 3.000.000</Typography>
            </FlexContainer>
          </FlexContainer>
        </Card>
      </FlexContainer>
      <FlexContainer
        padding="0"
        direction="column"
        justify="space-between"
        align="center"
      >
        <Card gap="5px" direction="row" align="flex-start">
          <FlexContainer padding="0" direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('offers_list.method_payment')}
            </Typography>
            <Typography variant="caption">Bancolombia S.A</Typography>
          </FlexContainer>
          <FlexContainer padding="0" direction="column">
            {[...Array(4)].map((x: any, i: number) => (
              <FlexContainer key={i} direction="column" align="flex-start">
                <Typography variant="caption">Nombre</Typography>
                <Typography variant="caption">
                  Jose Gregorio Gonzalez
                </Typography>
              </FlexContainer>
            ))}
          </FlexContainer>
        </Card>
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
  );
};
