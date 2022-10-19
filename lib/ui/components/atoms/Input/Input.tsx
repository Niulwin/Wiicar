import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { Input as InputStyled } from './styled';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<InputProps> = (props: InputProps) => {
  return <InputStyled {...(props as any)} />;
};
