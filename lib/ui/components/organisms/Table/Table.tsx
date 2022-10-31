import { VirtualizedList } from 'wvl-virtualized-list';
import { ContentTable } from './styled';
import { TTable } from './types';

export { InitConfigTable } from 'wvl-virtualized-list';

export const Table = <T extends object>({
  columns,
  count,
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
        widthColMode={window.screen.width < 1280 ? 'rest' : 'no-rest'}
        showEntries={1000}
        banner={false}
        data={data}
        columns={columns}
        loading={loading}
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
