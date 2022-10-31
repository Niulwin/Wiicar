import { NamespaceTranslate, useTranslate } from 'core/';
import { useMemo } from 'react';
import { FlexContainer } from '../../atoms/FlexContainer';
import { Typography } from '../../atoms/Typography';
import { Select } from './styled';
import { TSelectField } from './types';

export const SelectField = <IFormValues extends object>({
  placeholder,
  label,
  name,
  width,
  register,
  validate,
  error,
  options
}: TSelectField<IFormValues>) => {
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
      justify="flex-start"
      align="flex-start"
    >
      <Typography style={{ padding: 5 }} variant="body1">
        {label}
      </Typography>
      <Select
        defaultValue=""
        {...(register ? register(name, validate) : {})}
        placeholder={placeholder}
      >
        <option value="" disabled hidden>
          {translate('global.choose')}
        </option>
        {options?.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </Select>
      <Typography
        style={{ padding: 2, minHeight: 30 }}
        color="error"
        variant="caption3"
      >
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
      </Typography>
    </FlexContainer>
  );
};
