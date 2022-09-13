import { ColumnGroupType, ColumnType, TableProps } from 'antd/lib/table';

export interface TTable<T> extends TableProps<T> {
  className?: string;
  columns: (ColumnGroupType<T> | ColumnType<T>)[];
  data: T[];
  loading?: boolean;
}
