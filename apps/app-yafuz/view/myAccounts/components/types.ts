import { FieldErrors, UseFormRegister } from 'core';
import { TInputUserMethodPayments } from '../hooks';

export type IBankTransferForm = {
  register: UseFormRegister<TInputUserMethodPayments>;
  errors: FieldErrors<TInputUserMethodPayments>;
};
