import { formatCurrency, IInvoices, useTranslate } from 'core';
import { Card, FlexContainer, Typography } from 'ui';

export const PayInformation = ({
  orderDetail
}: {
  orderDetail?: IInvoices;
}) => {
  const translate = useTranslate();
  return (
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
  );
};
