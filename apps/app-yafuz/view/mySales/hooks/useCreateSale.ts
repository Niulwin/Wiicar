import { ISales, SubmitHandler, useForm, useMutation } from 'core';
import { TInputSale, TUseCreteSale } from './types';

export const useCreateSale = ({ refetch, setShowModal }: TUseCreteSale) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TInputSale>();
  const { mutate, isLoading } = useMutation<ISales, TInputSale>(
    'create-sale',
    'sales',
    {
      onSuccess: () => {
        refetch();
        setShowModal(false);
      }
    }
  );

  const onSubmit: SubmitHandler<TInputSale> = (data) =>
    mutate({
      price: Number(data.price),
      quantity: Number(data.quantity),
      userMethodPaymentId: data.userMethodPaymentId
    });

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading
  };
};
