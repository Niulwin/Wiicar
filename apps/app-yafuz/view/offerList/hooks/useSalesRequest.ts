import { joiResolver } from '@hookform/resolvers/joi';
import {
  IInvoices,
  NamespaceTranslate,
  SubmitHandler,
  useForm,
  useMutation
} from 'core';
import { ISales } from 'core/entities';
import { useEffect } from 'react';
import { salesSchema } from './schema.joi';
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
  const {
    watch,
    setValue,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ISaleRequest>({
    resolver: joiResolver(salesSchema)
  });

  const { mutate: handleRequest, isLoading: loadingRequest } = useMutation<
    IInvoices,
    ISaleRequest
  >('invoice-request', 'invoices/request', {
    onSuccess: (invoiceResponse) => onCompleted(invoiceResponse),
    translateErrorPath: 'offers_list'
  });
  useEffect(() => {
    selectedOffer.id && setValue('salesId', selectedOffer.id);
  }, [selectedOffer]);

  const onSubmit: SubmitHandler<ISaleRequest> = (data) =>
    handleRequest({
      quantity: data.quantity,
      salesId: data.salesId
    });

  const afterChangeQuantity = (value?: number) => {
    setValue('toPay', selectedOffer.price * +(value ?? 0));
  };

  const afterChangeToPay = (value?: number) =>
    setValue('quantity', +(value ?? 0) / selectedOffer.price);

  return {
    afterChangeQuantity,
    afterChangeToPay,
    control,
    errors,
    isLoading: loadingRequest,
    handleSaleRequest: handleSubmit(onSubmit)
  };
};
