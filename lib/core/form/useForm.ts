import {
  Controller as ControllerForm,
  Resolver,
  useForm as useReactHookForm
} from 'react-hook-form';

export const useForm = <TInputs extends object>(paramsForm?: {
  resolver?: Resolver<TInputs, any>;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState,
    control,
    getValues,
    setValue,
    reset
  } = useReactHookForm<TInputs>({
    ...paramsForm
  });

  return {
    setValue,
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState,
    reset
  };
};

export const Controller = ControllerForm;
