import { useForm as useReactHookForm } from 'react-hook-form';

export const useForm = <TInputs extends object>() => {
  const { register, handleSubmit, watch, formState } =
    useReactHookForm<TInputs>();

  return {
    register,
    handleSubmit,
    watch,
    formState
  };
};
