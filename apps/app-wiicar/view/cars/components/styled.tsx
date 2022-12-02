import { TableRow } from '@mui/material';
import styled from 'styled-components';

export const AppBaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 0px;
  padding: 1rem 2.5rem;
  position: fixed;
  bottom: 0px;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.background.main};
  box-shadow: rgb(0 0 0 / 12%) 0px -2px 6px 0px;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  & .pagination {
    padding-top: 10px;
    @media (min-width: 600px) {
      padding-top: 0px;
    }
  }

  & .pagination .pagination-offset {
    margin-left: 0;
    @media (min-width: 600px) {
      margin-left: 30px;
      margin-right: 20px;
    }
  }

  & .pagination .pagination-offset-right-icon {
    margin-left: 0;
    @media (min-width: 600px) {
      margin-left: 30px;
    }
  }
`;
export const TableBox = styled.div`
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  background-color: ${({ theme }) => theme.colors.background.main};
  width: 100%;
  margin-bottom: 100px;
`;
export const RowHeader = styled(TableRow)<any>(({ theme }) => ({
  backgroundColor: theme.colors.border.main + 30,
  borderRadius: 6,
  height: 60,
  ['& .MuiTableCell-head']: {
    border: `solid 1px ${theme.colors.border.main}`,
    borderStyle: 'solid none'
  },
  ['& > .MuiTableCell-head:first-child']: {
    borderLeftStyle: 'solid',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6
  },
  ['& > .MuiTableCell-head:last-child']: {
    borderRightStyle: 'solid',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6
  },
  ['& > .MuiTableCell-root']: {
    color: theme.colors.text.textPrimary,
    fontSize: 14
  }
}));
export const RowBody = styled(TableRow)<any>(({ theme }) => ({
  ['& > .MuiTableCell-root']: {
    color: theme.colors.text.textPrimary,
    borderBottom: `solid 1px ${theme.colors.border.main}`
  },
  ['&:nth-child(even)']: {
    backgroundColor: theme.colors.border.main + 30
  }
}));
