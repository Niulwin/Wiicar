import { IMethodPayments, SubmitHandler, useForm, useMutation } from 'core';
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

  const onSubmit: SubmitHandler<IMethodPayments> = (data) => mutate(data);

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading
  };
};
