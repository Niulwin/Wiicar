import { IInvoices, useTranslate } from 'core';
import { Card, Chip, FlexContainer, Typography } from 'ui';

export const UserInformation = ({
  orderDetail
}: {
  orderDetail?: IInvoices;
}) => {
  const translate = useTranslate();

  return (
    <Card width="50%" gap="5px" direction="column" align="flex-start">
      <FlexContainer direction="row" padding="0">
        <FlexContainer sm="6" direction="column" align="flex-end">
          <FlexContainer
            direction="row"
            justify="flex-start"
            align="center"
            padding="0"
          >
            <Chip
              size="xs"
              background="primary"
              color="light"
              title={
                (orderDetail?.buyer || orderDetail?.seller)?.nombre?.slice(
                  0,
                  1
                ) || ''
              }
              variant="contained"
            />
            <Typography variant="body1" color="textPrimary">
              {(orderDetail?.buyer || orderDetail?.seller)?.nombre}{' '}
              {(orderDetail?.buyer || orderDetail?.seller)?.apellidos}
            </Typography>
          </FlexContainer>
          <FlexContainer
            direction="row"
            justify="flex-start"
            padding="5px 15px"
          >
            <Typography variant="caption2" color="info">
              309 &nbsp;
            </Typography>
            <Typography variant="caption3">ordenes | &nbsp;</Typography>
            <Typography variant="caption2" color="success">
              97 % &nbsp;
            </Typography>
            <Typography variant="caption3">completado</Typography>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer sm="6" direction="column" align="flex-end" padding="0">
          <Typography variant="caption2">
            {translate('offers_list.phone_number')}: &nbsp;
            {(orderDetail?.buyer || orderDetail?.seller)?.celular}
          </Typography>
          <Typography variant="caption2">
            {translate('offers_list.email')}: &nbsp;
            {(orderDetail?.buyer || orderDetail?.seller)?.email}
          </Typography>
        </FlexContainer>
      </FlexContainer>
    </Card>
  );
};
