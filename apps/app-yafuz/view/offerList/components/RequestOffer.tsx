import {
  formatCurrency,
  formatToNumber,
  IInvoices,
  ISales,
  useTranslate
} from 'core';
import { Chip, FlexContainer, ModalFooter, TextField, Typography } from 'ui';
import { useSalesRequest } from '../hooks';

export const RequestOffer = ({
  selectedOffer,
  onCancel,
  onCompleted
}: {
  selectedOffer: ISales;
  onCancel: () => void;
  onCompleted: (invoiceResponse: IInvoices) => void;
  isLoading?: boolean;
}) => {
  const translate = useTranslate();
  const {
    handleSaleRequest,
    isLoading,
    control,
    errors,
    afterChangeQuantity,
    afterChangeToPay
  } = useSalesRequest({
    onCompleted,
    selectedOffer,
    translate
  });

  return (
    <FlexContainer direction="row">
      <FlexContainer direction="column" sm="8">
        <FlexContainer
          direction="row"
          justify="flex-start"
          align="center"
          padding="5px"
        >
          <Chip
            size="xs"
            background="primary"
            color="light"
            title={selectedOffer?.user?.nombre?.slice(0, 1) || ''}
            variant="contained"
          />
          <Typography
            variant="caption"
            color="textPrimary"
            style={{ marginRight: 15 }}
          >
            {selectedOffer?.user?.nombre} {selectedOffer?.user?.apellidos}
          </Typography>
          <Typography variant="caption2" color="info">
            309 &nbsp;
          </Typography>
          <Typography variant="caption3">ordenes | &nbsp;</Typography>
          <Typography variant="caption2" color="success">
            97 % &nbsp;
          </Typography>
          <Typography variant="caption3">completado</Typography>
        </FlexContainer>
        <FlexContainer direction="row" justify="flex-start">
          <Typography
            align="center"
            variant="caption"
            style={{ marginRight: 10 }}
          >
            {translate('offers_list.available')} YAZ
          </Typography>
          <Typography align="center" variant="body1" color="info">
            {formatToNumber(selectedOffer?.quantity || 0)}
          </Typography>
        </FlexContainer>
        <FlexContainer
          style={{ paddingTop: 0, marginBottom: 45 }}
          direction="row"
          justify="flex-start"
        >
          <Typography
            align="center"
            variant="caption"
            style={{ marginRight: 10 }}
          >
            {translate('my_sales.price')}
          </Typography>
          <Typography align="center" variant="body1" color="success">
            {formatCurrency(selectedOffer?.price || 0)} USDT
          </Typography>
        </FlexContainer>
        <FlexContainer direction="row" justify="flex-start" padding="0 1rem">
          <Typography
            align="center"
            variant="caption"
            style={{ marginRight: 10 }}
          >
            {translate('offers_list.limit_payment_time')}
          </Typography>
          <Typography align="center" variant="body1" color="success">
            30min
          </Typography>
        </FlexContainer>
        <FlexContainer direction="column" align="flex-start">
          <Typography align="center" variant="caption">
            {translate('offers_list.term_and_conditions')}
          </Typography>
          <Typography align="center" variant="caption">
            --Pronto--
          </Typography>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer align="flex-end" sm="4">
        <form style={{ width: '100%' }} onSubmit={handleSaleRequest}>
          <TextField
            width="100%"
            type="currency"
            label={`${translate('offers_list.will_receive')} YAZ`}
            name="quantity"
            title={translate('global.errors.input.numeric')}
            control={control}
            error={errors.quantity}
            afterChange={afterChangeQuantity}
          />
          <TextField
            width="100%"
            type="currency"
            label={`${translate('offers_list.want_to_pay')} USDT`}
            name="toPay"
            title={translate('global.errors.input.numeric')}
            control={control}
            error={errors.toPay}
            afterChange={afterChangeToPay}
          />

          <ModalFooter noPadding loading={isLoading} onCancel={onCancel} />
          <Typography align="center" variant="caption3" color="warning">
            {translate('offers_list.verify_amount_to_pay')}
          </Typography>
        </form>
      </FlexContainer>
    </FlexContainer>
  );
};
