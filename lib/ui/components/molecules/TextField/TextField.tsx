import { NamespaceTranslate, useTranslate } from 'core';
import { useMemo } from 'react';
import { FlexContainer } from '../../atoms/FlexContainer';
import { Typography } from '../../atoms/Typography';
import { InputTextField } from '../InputTextField';
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
  value,
  onChange,
  control,
  afterChange,
  disabled,
  iconRight,
  style,
  inputProps,
  className
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
      style={{ position: 'relative', ...style }}
      className={className}
    >
      {label && (
        <Typography style={{ padding: 5 }} variant="body1">
          {label}
        </Typography>
      )}
      <InputTextField
        style={inputProps?.style}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onChange}
        register={register}
        validate={validate}
        type={type}
        title={title}
      />

      {error && (
        <Typography
          style={{ padding: 2, minHeight: 30 }}
          color="error"
          variant="caption3"
        >
          {translate(errorMessage.key as NamespaceTranslate, {
            [errorMessage.interpolation as string]: errorMessage.value
          })}
        </Typography>
      )}
      {iconRight && (
        <Icon size="1x" icon={iconRight?.name} onClick={iconRight.onClick} />
      )}
    </FlexContainer>
  );
};
