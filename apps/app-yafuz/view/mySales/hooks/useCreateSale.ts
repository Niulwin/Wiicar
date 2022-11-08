import { ISales, SubmitHandler, useForm, useMutation } from 'core';
import { TInputSale, TUseCreteSale } from './types';

export const useCreateSale = ({ refetch, setShowModal }: TUseCreteSale) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TInputSale>();
  const { mutate, isLoading } = useMutation<ISales, TInputSale>(
    'create-sale',
    'sales',
    {
      translateErrorPath: 'offers_list',
      onSuccess: () => {
        refetch();
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
          userMethodPaymentId: data.userMethodPaymentId
        }
      });
    } else {
      mutate({
        variables: {
          price: Number(data.price),
          quantity: Number(data.quantity),
          userMethodPaymentId: data.userMethodPaymentId
        }
      });
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading: isLoading || isLoadingEdit,
    reset
  };
};
