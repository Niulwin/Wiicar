import { IUserMethodPayments, TPagination, useQuery } from 'core';
import { useState } from 'react';

export const useUserMethodPayments = () => {
  const [userMethodPaymentSelected, setUserMethodPaymentSelected] = useState<
    IUserMethodPayments | undefined
  >(undefined);
  const { data, isLoading, refetch } = useQuery<
    TPagination<IUserMethodPayments>
  >('userMethodPayments', 'user-method-payments');

  const handleEdit = (row: IUserMethodPayments) => {
    setUserMethodPaymentSelected(row);
  };

  const clearInitialValues = () => {
    setUserMethodPaymentSelected(undefined);
  };

  return {
    data: data,
    refetch,
    isLoading,
    userMethodPaymentSelected,
    handleEdit,
    clearInitialValues
  };
};
