import {
  ICountry,
  ISales,
  SubmitHandler,
  TPagination,
  useForm,
  useMutation,
  useQuery
} from 'core';
import { TInputSale, TUseCreteSale } from './types';

export const useCreateSale = ({ refetch, setShowModal }: TUseCreteSale) => {
  const {
    register,
    handleSubmit,
    reset,
    reset: resetSale,
    formState: { errors }
  } = useForm<TInputSale>();
  const { data: dataBalance } = useQuery<{ balance?: number }>(
    'my-available-balance',
    'balance/available'
  );
  const { data: dataCountries, isLoading: isLoadingCountry } = useQuery<
    TPagination<ICountry>
  >('all-countries', 'countries');
  const { mutate, isLoading } = useMutation<ISales, TInputSale>(
    'create-sale',
    'sales',
    {
      translateErrorPath: 'offers_list',
      onSuccess: () => {
        refetch();
        resetSale();
        setShowModal(false);
      }
    }
  );
  const { mutate: mutateEdit, isLoading: isLoadingEdit } = useMutation<
    ISales,
    TInputSale
  >('edit-sale', 'sales/', {
    translateErrorPath: 'offers_list',
    httpMethod: 'PATCH',
    onSuccess: () => {
      refetch();
      resetSale;
      setShowModal(false);
    }
  });

  const onSubmit: SubmitHandler<TInputSale> = (data) => {
    if (data?.id) {
      mutateEdit({
        variables: {
          id: data?.id,
          price: Number(data.price),
          quantity: Number(data.quantity),
          region: data.region,
          exchangeCurrencyId: data.exchangeCurrencyId
        }
      });
    } else {
      mutate({
        variables: {
          price: Number(data.price),
          quantity: Number(data.quantity),
          region: data.region,
          exchangeCurrencyId: data.exchangeCurrencyId
        }
      });
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading: isLoading || isLoadingEdit,
    reset,
    dataBalance,
    isLoadingCountry,
    dataCountries: dataCountries?.data || []
  };
};
