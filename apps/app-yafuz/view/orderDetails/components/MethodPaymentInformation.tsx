import { IInvoices, useTranslate } from 'core';
import { ChangeEvent } from 'react';
import { Card, FlexContainer, Label, Typography } from 'ui';
import { InputCharge } from '../styled';

export const MethodPaymentInformation = ({
  orderDetail,
  multiple,
  chargeMultiple
}: {
  orderDetail?: IInvoices;
  multiple?: {
    file?: string;
    name: string;
  };
  chargeMultiple: (e: ChangeEvent<HTMLInputElement>) => void;
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
        <FlexContainer padding="0" direction="column">
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.method_payment_type')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale?.userMethodPayment?.methodPayment?.name}
            </Typography>
          </FlexContainer>
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.account_type')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale?.userMethodPayment?.typeAccount || ''}
            </Typography>
          </FlexContainer>
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('offers_list.name')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale?.user?.nombre}{' '}
              {orderDetail?.sale?.user?.apellidos}
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
              {translate('my_accounts.method_payment_number')}
            </Typography>
            <Typography variant="caption">
              {orderDetail?.sale?.userMethodPayment?.value || ''}
            </Typography>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer padding="0" direction="column" align="flex-end">
          <Label
            size="xs"
            htmlFor="upload"
            iconLeft="upload"
            variant="outlined"
            background="secondary"
            color="secondary"
            title={translate('order_details.actions.upload_receipt')}
          />
          <InputCharge
            id="upload"
            type="file"
            hidden
            data-ignore
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              chargeMultiple(e);
            }}
          />
          <FlexContainer direction="column" align="center">
            {multiple?.file && (
              <img width={300} height={300} src={multiple?.file} />
            )}
          </FlexContainer>
        </FlexContainer>
      </Card>
    </FlexContainer>
  );
};
