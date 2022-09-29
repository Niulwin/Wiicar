import { IInvoices, useMutation } from 'core';
import { ISales } from 'core/entities';
import { FormEvent, useEffect, useState } from 'react';
import { ISaleRequest } from './types';

export const useSalesRequest = ({
  onCompleted,
  selectedOffer
}: {
  onCompleted: (invoiceResponse: IInvoices) => void;
  selectedOffer: ISales;
}) => {
  const [values, setValues] = useState<ISaleRequest>({} as ISaleRequest);

  const { mutate: handleRequest, isLoading: loadingRequest } = useMutation<
    IInvoices,
    ISaleRequest
  >('invoice-request', 'invoices/request', {
    onSuccess: (invoiceResponse) => onCompleted(invoiceResponse)
  });

  const handleSaleRequest = (e: FormEvent) => {
    e.preventDefault();
    handleRequest(values);
  };

  useEffect(() => {
    selectedOffer.id && setValues({ salesId: selectedOffer.id });
  }, [selectedOffer]);

  const handleChange = ({
    name,
    value
  }: {
    name: string;
    value: string | number;
  }) => {
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
    isLoading: loadingRequest,
    handleSaleRequest: handleSaleRequest
  };
};
