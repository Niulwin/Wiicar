import { DefaultOptionType } from 'antd/lib/select';
import React from 'react';

export type TSelectProps = {
  defaultValue?: string;
  value?: string;
  handleChange?: (
    value: string,
    option: DefaultOptionType | DefaultOptionType[]
  ) => void;
  style?: React.CSSProperties;
  options: {
    value: string;
    title: string;
  }[];
  variant?: 'text' | 'contained' | 'outlined' = 'contained';
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light' = 'textPrimary';
};
