import {
  ICountry,
  IMethodPayments,
  SubmitHandler,
  TPagination,
  useForm,
  useMutation,
  useQuery
} from 'core';
import { TUseCreteBank } from './types';

export const useCreateBank = ({ refetch, setShowModal }: TUseCreteBank) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IMethodPayments>();
  const { mutate, isLoading } = useMutation<IMethodPayments, IMethodPayments>(
    'create-method-payments',
    'method-payments',
    {
      onSuccess: () => {
        refetch();
        setShowModal(false);
      }
    }
  );
  const { data: dataCountries, isLoading: isLoadingCountry } = useQuery<
    TPagination<ICountry>
  >('all-countries', 'countries');

  const onSubmit: SubmitHandler<IMethodPayments> = (data) =>
    mutate({ variables: data });

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading,
    dataCountries: dataCountries?.data || [],
    isLoadingCountry
  };
};
