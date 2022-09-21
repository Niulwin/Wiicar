import { useTranslate } from '../../../../core/i18n/hooks/useTranslate';
import { FlexContainer } from '../../atoms/FlexContainer';
import { Typography } from '../../atoms/Typography';
import { Select } from './styled';
import { SelectFieldValidationsMessage, TSelectField } from './types';

export const SelectField = <IFormValues extends object>({
  placeholder,
  label,
  name,
  onChange,
  value,
  width,
  register,
  validate,
  error,
  options
}: TSelectField<IFormValues>) => {
  const translate = useTranslate();

  return (
    <FlexContainer width={width} padding="0" align="flex-start">
      <Typography style={{ padding: 5 }} variant="body1">
        {label}
      </Typography>
      <Select
        {...(register ? register(name, validate) : {})}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
        {options?.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </Select>
      <Typography style={{ padding: 2 }} color="error" variant="caption3">
        {error?.type === 'required'
          ? translate(SelectFieldValidationsMessage.required)
          : ''}
      </Typography>
    </FlexContainer>
  );
};
