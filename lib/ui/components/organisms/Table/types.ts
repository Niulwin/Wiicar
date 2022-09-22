import React, { MouseEvent } from 'react';
import { TVColumns } from 'wvl-virtualized-list/dist/types';

export type TTableColumns = TVColumns;
export interface TTable<T> {
  className?: string;
  columns: TVColumns[];
  data: T[];
  count?: number;
  loading?: boolean;
  pagination?: boolean;
  onFetch?: (
    row: {
      startIndex?: number;
      stopIndex?: number;
    },
    range: number[]
  ) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLDivElement>,
    row: T,
    rowRendered: number
  ) => void;
  onContextMenu?: (
    e: MouseEvent<HTMLDivElement>,
    x: T,
    rowRendered: number
  ) => void;
  onClick?: (e: MouseEvent<HTMLDivElement>, x: T, rowRendered: number) => void;
}
