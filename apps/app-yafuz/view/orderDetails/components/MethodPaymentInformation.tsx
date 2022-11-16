import {
  IInvoices,
  IUserMethodPayments,
  NamespaceTranslate,
  useTranslate
} from 'core';
import Image from 'next/image';
import { ChangeEvent, useMemo, useState } from 'react';
import { Button, Card, FlexContainer, Label, Typography, useTheme } from 'ui';
import { InputCharge } from '../styled';

const nameEntity = {
  bank_transfer: 'bank_name',
  certified_turn: 'currency_transfer_name',
  crypto_wallet: 'crypto_name',
  virtual_wallet: 'virtual_wallet_name',
  internal_balance: 'internal_balance'
};
export const MethodPaymentInformation = ({
  orderDetail,
  multiple,
  chargeMultiple,
  type
}: {
  type?: string;
  orderDetail?: IInvoices;
  multiple?: {
    file?: string;
    name: string;
  };
  chargeMultiple: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const translate = useTranslate();
  const { theme } = useTheme();
  const [methodPayments, setMethodPayments] = useState<
    IUserMethodPayments[] | undefined
  >(undefined);

  const umpsDistinct = useMemo(() => {
    const umps =
      orderDetail?.seller?.usermethodpayment?.map(
        (item) => item.methodPayment?.halfAccount
      ) || [];

    return [...new Set(umps?.map((x) => x))];
  }, [orderDetail]);

  const handleChange = (halfAccount: string) => {
    setMethodPayments(
      orderDetail?.seller.usermethodpayment?.filter(
        (item) => item.methodPayment?.halfAccount === halfAccount
      )
    );
  };

  return (
    <FlexContainer
      padding="0"
      direction="column"
      justify="space-between"
      align="center"
    >
      <Card
        gap="5px"
        direction="row"
        align="flex-start"
        style={{ alignItems: 'flex-start' }}
      >
        <FlexContainer padding="0" direction="column" width="60%">
          <FlexContainer direction="column" align="flex-start">
            <Typography variant="caption">
              {translate('my_accounts.method_payment_type')}
            </Typography>
            <FlexContainer direction="row" justify="flex-start" padding="0">
              {umpsDistinct?.sort()?.map((item, index) => (
                <Button
                  style={{ margin: '0 5px', width: 200 }}
                  key={`${item}-${index}`}
                  background="info"
                  onClick={() => handleChange(item)}
                  title={translate(`bank.half_account_enum.${item}`)}
                  variant={
                    methodPayments?.find(
                      (methodPayment) =>
                        methodPayment.methodPayment?.halfAccount === item
                    )
                      ? 'contained'
                      : 'outlined'
                  }
                />
              ))}
            </FlexContainer>
          </FlexContainer>

          <FlexContainer
            direction="row"
            justify="flex-start"
            padding="0"
            style={{
              overflow: 'auto',
              alignItems: 'flex-start'
            }}
          >
            {methodPayments?.map((methodPayment, index) => (
              <FlexContainer
                direction="column"
                padding="0"
                style={{
                  minWidth: 200,
                  maxWidth: 250,
                  borderRight: `1px solid ${theme?.colors.border.main}`
                }}
              >
                <Typography variant="caption">{index + 1}</Typography>
                {methodPayment?.name && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(
                        `my_accounts.fields.${
                          nameEntity[methodPayment.methodPayment?.halfAccount]
                        }` as NamespaceTranslate
                      )}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.name || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.accountType && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(`my_accounts.fields.account_type`)}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.accountType || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.accountHolder && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(
                        methodPayment?.methodPayment?.halfAccount ===
                          'internal_balance'
                          ? 'my_accounts.fields.username'
                          : 'my_accounts.fields.account_holder'
                      )}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.accountHolder || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.accountNumber && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(
                        methodPayment?.methodPayment?.halfAccount ===
                          'bank_transfer'
                          ? 'my_accounts.fields.account_number'
                          : methodPayment?.methodPayment?.halfAccount ===
                            'virtual_wallet'
                          ? 'my_accounts.fields.user_number'
                          : 'my_accounts.fields.address_wallet'
                      )}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.accountNumber || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.red && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(`my_accounts.fields.red`)}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.red || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.identificationCard && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(`my_accounts.fields.identification_card`)}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.identificationCard || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.contactMethod && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(`my_accounts.fields.contact_method`)}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.contactMethod || ''}
                    </Typography>
                  </FlexContainer>
                )}
                {methodPayment?.contactUser && (
                  <FlexContainer direction="column" align="flex-start">
                    <Typography variant="caption" color="secondary">
                      {translate(`my_accounts.fields.contact_user`)}
                    </Typography>
                    <Typography variant="caption">
                      {methodPayment?.contactUser || ''}
                    </Typography>
                  </FlexContainer>
                )}
              </FlexContainer>
            ))}
          </FlexContainer>
        </FlexContainer>

        <FlexContainer padding="0" direction="column" align="flex-end">
          {type === 'buyer' &&
            orderDetail?.id &&
            orderDetail?.state === 'PROGRESS' && (
              <Label
                size="xs"
                htmlFor="upload"
                iconLeft="upload"
                variant="outlined"
                background="secondary"
                color="secondary"
                title={translate('order_details.actions.upload_receipt')}
              />
            )}
          {orderDetail?.state === 'PROGRESS' && (
            <InputCharge
              id="upload"
              type="file"
              hidden
              accept="image/png,image/jpeg,image/jpg"
              data-ignore
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                chargeMultiple(e);
              }}
            />
          )}
          <FlexContainer direction="column" align="center">
            <Typography variant="caption">
              {translate('order_details.proof_of_payment')}
            </Typography>{' '}
            {(multiple?.file || orderDetail?.photo) && (
              <Image
                width={300}
                height={300}
                src={multiple?.file || (orderDetail?.photo as string)}
                alt={translate('order_details.proof_of_payment')}
              />
            )}
          </FlexContainer>
        </FlexContainer>
      </Card>
    </FlexContainer>
  );
};
