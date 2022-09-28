import { NamespaceTranslate, useTranslate } from 'core';
import { FlexContainer } from '../../atoms/FlexContainer';
import { Typography } from '../../atoms/Typography';
import { Input } from './styled';
import { TextFieldValidationsMessage, TTextField } from './types';

export const TextField = <IFormValues extends object>({
  placeholder,
  label,
  name,
  onChange,
  value,
  width,
  register,
  validate,
  error
}: TTextField<IFormValues>) => {
  const translate = useTranslate();

  return (
    <FlexContainer width={width} padding="0" align="flex-start">
      <Typography style={{ padding: 5 }} variant="body1">
        {label}
      </Typography>
      <Input
        {...(register ? register(name, validate) : {})}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      <Typography
        style={{ padding: 2, minHeight: 30 }}
        color="error"
        variant="caption3"
      >
        {error?.type === 'required'
          ? translate(
              TextFieldValidationsMessage.required as NamespaceTranslate
            )
          : ''}
      </Typography>
    </FlexContainer>
  );
};
