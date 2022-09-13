import { FC } from 'react';
import { AntDSelect } from './styled';
import { TSelectProps } from './types';

export const Select: FC<TSelectProps> = ({
  defaultValue,
  value,
  handleChange,
  style,
  options,
  color,
  variant
}: TSelectProps) => {
  return (
    <AntDSelect
      value={value}
      defaultValue={defaultValue}
      bordered={false}
      style={style}
      onChange={handleChange as any}
      color={
        color || (variant === 'contained' ? 'textSecondary' : 'textPrimary')
      }
    >
      {options.map((op) => (
        <AntDSelect.Option key={op.value} value={op.value}>
          {op.title}
        </AntDSelect.Option>
      ))}
    </AntDSelect>
  );
};
