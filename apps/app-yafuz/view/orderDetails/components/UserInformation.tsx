import { IInvoices } from 'core';
import { Card, Chip, FlexContainer, Typography } from 'ui';

export const UserInformation = ({
  orderDetail
}: {
  orderDetail?: IInvoices;
}) => {
  return (
    <Card width="50%" gap="5px" direction="column" align="flex-start">
      <FlexContainer direction="column" align="flex-end">
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
        <FlexContainer direction="row" justify="flex-start" padding="5px 15px">
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
    </Card>
  );
};
