import { Table as AntTable } from 'antd';
import { ContentTable } from './styled';
import { TTable } from './types';

export const Table = <T extends object>({
  className,
  columns,
  data,
  loading,
  ...restProps
}: TTable<T>) => {
  return (
    <ContentTable>
      <AntTable
        className={`${className || ''} tableStyleOne`}
        columns={columns}
        dataSource={data || []}
        loading={loading}
        {...restProps}
      />
    </ContentTable>
  );
};
