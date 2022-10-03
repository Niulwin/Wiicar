import { IInvoices, NamespaceTranslate, useMutation } from 'core';
import { ISales } from 'core/entities';
import { FormEvent, useEffect, useState } from 'react';
import { message } from 'ui';
import { ISaleRequest } from './types';

export const useSalesRequest = ({
  onCompleted,
  selectedOffer,
  translate
}: {
  onCompleted: (invoiceResponse: IInvoices) => void;
  selectedOffer: ISales;
  translate: (key: NamespaceTranslate) => string;
}) => {
  const [values, setValues] = useState<ISaleRequest>({
    quantity: 0,
    toPay: 0
  });

  const { mutate: handleRequest, isLoading: loadingRequest } = useMutation<
    IInvoices,
    ISaleRequest
  >('invoice-request', 'invoices/request', {
    onSuccess: (invoiceResponse) => onCompleted(invoiceResponse),
    translateErrorPath: 'offers_list'
  });

  const handleSaleRequest = (e: FormEvent) => {
    e.preventDefault();
    if (!values.quantity)
      return message.warn(translate('global.errors.MISSING_FIELDS'));

    handleRequest({
      quantity: values.quantity,
      salesId: values.salesId
    });
  };

  useEffect(() => {
    selectedOffer.id && setValues({ salesId: selectedOffer.id });
  }, [selectedOffer]);

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    if (name === 'quantity') {
      setValues({
        ...values,
        quantity: +value,
        toPay: selectedOffer.price * +value
      });
      return;
    }

    setValues({
      ...values,
      toPay: +value,
      quantity: +value / selectedOffer.price
    });
  };

  return {
    values,
    handleChange,
    isLoading: loadingRequest,
    handleSaleRequest: handleSaleRequest
  };
};
