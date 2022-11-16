import { NamespaceTranslate, useTranslate } from 'core';
import { useMemo } from 'react';
import { FlexContainer } from '../../atoms/FlexContainer';
import { Typography } from '../../atoms/Typography';
import { InputTextField } from '../InputTextField';
import { NumberCurrencyField } from '../NumberCurrencyField';
import { PhoneNumberField } from '../PhoneNumberField';
import { Icon } from './styled';
import { TTextField } from './types';

export const TextField = <IFormValues extends object>({
  placeholder,
  label,
  name,
  width,
  register,
  validate,
  error,
  type,
  title,
  defaultValue,
  control,
  countryCode = 'CO',
  afterChange,
  disabled,
  noLabel,
  iconRight
}: TTextField<IFormValues>) => {
  const translate = useTranslate();
  const errorMessage = useMemo(() => {
    const err = error?.message?.split('%');
    return {
      key: err?.[0],
      interpolation: err?.[1],
      value: err?.[2]
    };
  }, [error?.message]);

  return (
    <FlexContainer
      width={width}
      padding="0"
      align="flex-start"
      style={{ position: 'relative' }}
    >
      {!noLabel && (
        <Typography style={{ padding: 5 }} variant="body1">
          {label}
        </Typography>
      )}
      {type === 'phone' ? (
        <PhoneNumberField
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
          title={title}
          control={control}
          countryCode={countryCode}
        />
      ) : type === 'currency' ? (
        <NumberCurrencyField
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
          title={title}
          control={control}
          afterChange={afterChange}
        />
      ) : (
        <InputTextField
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          register={register}
          validate={validate}
          type={type}
          title={title}
        />
      )}
      <Typography
        style={{ padding: 2, minHeight: 30 }}
        color="error"
        variant="caption3"
      >
        {error
          ? translate(errorMessage.key as NamespaceTranslate, {
              [errorMessage.interpolation as string]: errorMessage.value
            })
          : ''}
      </Typography>
      {iconRight && (
        <Icon size="1x" icon={iconRight?.name} onClick={iconRight.onClick} />
      )}
    </FlexContainer>
  );
};
