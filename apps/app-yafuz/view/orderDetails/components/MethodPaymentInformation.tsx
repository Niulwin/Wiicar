import { IInvoices, useTranslate } from 'core';
import { Card, FlexContainer, Typography } from 'ui';

export const MethodPaymentInformation = ({
  orderDetail
}: {
  orderDetail?: IInvoices;
}) => {
  const translate = useTranslate();

  return (
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
          <Typography variant="caption">
            {orderDetail?.sale?.userMethodPayment?.methodPayment?.name}{' '}
            {orderDetail?.sale?.userMethodPayment?.value}
          </Typography>
        </FlexContainer>
        <FlexContainer padding="0" direction="column">
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.method_payment')}
            </Typography>
            <Typography variant="caption">
              {(orderDetail?.buyer || orderDetail?.buyer)?.nombre}{' '}
              {(orderDetail?.buyer || orderDetail?.buyer)?.apellidos}
            </Typography>
          </FlexContainer>
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.method_payment_number')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale?.userMethodPayment?.methodPayment?.name}
            </Typography>
          </FlexContainer>
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.identification')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale.userMethodPayment.identification_card}
            </Typography>
          </FlexContainer>
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.method_payment_type')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale?.userMethodPayment?.value || ''}
            </Typography>
          </FlexContainer>
        </FlexContainer>
      </Card>
    </FlexContainer>
  );
};
