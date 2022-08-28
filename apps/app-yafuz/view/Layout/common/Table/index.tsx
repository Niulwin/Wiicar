import { Table } from 'antd';
import { ContentTable } from './styled';

export const TableCustom = ({
  className,
  columns,
  data,
  loading,
  restProps
}: any) => {
  return (
    <ContentTable>
      <Table
        className={`${className || ''} tableStyleOne`}
        columns={columns}
        dataSource={data || []}
        loading={loading}
        {...restProps}
      />
    </ContentTable>
  );
};
