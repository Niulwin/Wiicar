import { Select } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import styled from 'styled-components';

export const AntDSelect = styled(Select)<{
  onChange?: (
    value: string,
    option: DefaultOptionType | DefaultOptionType[]
  ) => void;
  color?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary' | 'light';
}>`
  border: none;
  border-radius: 5px;
  color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  & .ant-select-arrow {
    color: ${({ theme, color }) => theme.colors.text[color || 'textPrimary']};
  }
`;
