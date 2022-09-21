import { VirtualizedList } from 'wvl-virtualized-list';
import { ContentTable } from './styled';
import { TTable } from './types';

export { InitConfigTable } from 'wvl-virtualized-list';

export const Table = <T extends object>({
  columns,
  data,
  loading,
  onFetch,
  onKeyDown,
  pagination,
  onContextMenu,
  onClick
}: TTable<T>) => {
  return (
    <ContentTable>
      <VirtualizedList
        banner={false}
        data={data}
        columns={columns}
        serverSide
        loading={loading}
        requestAmount={40}
        missingToMakeRequest={1}
        onFetch={onFetch}
        orderable
        filterable={false}
        onContextMenu={onContextMenu}
        pagination={pagination}
        onKeyDown={onKeyDown}
        onClick={onClick}
      />
    </ContentTable>
  );
};
