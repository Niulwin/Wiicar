import { IUserMethodPayments, SubmitHandler, useForm, useMutation } from 'core';
import { TInputUserMethodPayments, TUseCreateAccount } from './types';

export const useCreateAccount = ({
  refetch,
  setShowModal
}: TUseCreateAccount) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TInputUserMethodPayments>();
  const { mutate, isLoading } = useMutation<
    IUserMethodPayments,
    TInputUserMethodPayments
  >('user-method-payments-create', 'user-method-payments', {
    onSuccess: () => {
      refetch();
      setShowModal(false);
    }
  });

  const onSubmit: SubmitHandler<TInputUserMethodPayments> = (data) =>
    mutate({ variables: data });

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading
  };
};
