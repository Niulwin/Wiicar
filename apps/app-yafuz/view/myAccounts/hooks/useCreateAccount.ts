import {
  ICountry,
  IMethodPayments,
  IUserMethodPayments,
  SubmitHandler,
  TPagination,
  useForm,
  useLazyQuery,
  useMutation,
  useQuery
} from 'core';
import { useEffect, useState } from 'react';
import { TInputUserMethodPayments, TUseCreateAccount } from './types';

export const useCreateAccount = ({
  refetch,
  setShowModal,
  initialValue
}: TUseCreateAccount) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<TInputUserMethodPayments>();
  const watchRegion = watch('region');
  const watchMethodPaymentId = watch('methodPaymentId');
  const [methodPaymentSelected, setMethodPaymentsSelected] = useState<
    IMethodPayments | undefined
  >(undefined);

  const { mutate, isLoading } = useMutation<
    IUserMethodPayments,
    TInputUserMethodPayments
  >('user-method-payments-create', 'user-method-payments', {
    onSuccess: () => {
      refetch();
      reset();
      setShowModal(false);
    }
  });

  const { data: dataCountries, isLoading: isLoadingCountry } = useQuery<
    TPagination<ICountry>
  >('all-countries', 'countries');

  const { data: dataMethodPayments, mutate: getMethodPayments } = useLazyQuery<
    TPagination<IMethodPayments>,
    unknown,
    unknown,
    { countryId: string }
  >('methodPayments', 'method-payments');

  const handleFetchMethodPayments = (countryId: string) => {
    getMethodPayments({
      query: {
        countryId
      }
    });
  };

  const onSubmit: SubmitHandler<TInputUserMethodPayments> = (data) =>
    mutate({ variables: data });

  useEffect(() => {
    watchRegion && handleFetchMethodPayments(watchRegion);
  }, [watchRegion]);

  useEffect(() => {
    if (watchMethodPaymentId) {
      const mpData = dataMethodPayments?.data || [];

      const methodPaymentSelected = mpData.find(
        (x) => x.id === watchMethodPaymentId
      );
      setMethodPaymentsSelected(methodPaymentSelected);
    }
  }, [watchMethodPaymentId, dataMethodPayments]);

  useEffect(() => {
    if (initialValue) {
      reset({
        accountHolder: initialValue.accountHolder,
        accountNumber: initialValue.accountNumber,
        accountType: initialValue.accountType as 'Ahorro',
        contactMethod: initialValue.contactMethod,
        contactUser: initialValue.contactUser,
        identificationCard: initialValue.identificationCard,
        methodPaymentId: initialValue.methodPaymentId,
        name: initialValue.name,
        red: initialValue.red,
        region: initialValue.methodPayment?.region
      });
    } else {
      reset({});
    }
  }, [initialValue]);

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading,
    dataCountries: dataCountries?.data || [],
    isLoadingCountry,
    methodPaymentSelected,
    dataMethodPayments: dataMethodPayments?.data || [],
    handleFetchMethodPayments
  };
};
