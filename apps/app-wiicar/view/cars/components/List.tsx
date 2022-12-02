import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableSortLabel
} from '@mui/material';
import { formatCurrency, formatToNumber, ICars, useTranslate } from 'core';
import { useState } from 'react';
import { Button, FlexContainer, useTheme } from 'ui';
import { headerCells } from './headerCells';
import { RowBody, RowHeader, TableBox } from './styled';

export interface TListProps {
  cars?: ICars[];
}
export const List = ({ cars }: TListProps) => {
  const translate = useTranslate();
  const { theme } = useTheme();
  const [checks, setChecks] = useState<number[]>([]);
  const [sort, setSort] = useState<{
    key: string | number;
    direction: 'asc' | 'desc';
  }>({
    key: '',
    direction: 'asc'
  });

  return (
    <FlexContainer
      padding="2rem 3rem"
      style={{ backgroundColor: `${theme?.colors.border.main}30` }}
    >
      <TableBox>
        <TableContainer>
          <Table
            sx={{ minWidth: 650, borderCollapse: 'separate' }}
            size="small"
          >
            <TableHead>
              <RowHeader>
                <TableCell width={50}>
                  <FontAwesomeIcon
                    icon="square"
                    size="lg"
                    color={theme?.colors.disabled.main}
                  />
                </TableCell>
                {headerCells.map((cell) => (
                  <TableCell key={cell.id} style={{ fontWeight: 600 }}>
                    <TableSortLabel
                      active={sort.key === cell.id}
                      direction={sort.key === cell.id ? sort.direction : 'asc'}
                      onClick={() =>
                        setSort({
                          key: cell.id,
                          direction:
                            sort.key === cell.id
                              ? sort.direction === 'asc'
                                ? 'desc'
                                : 'asc'
                              : 'asc'
                        })
                      }
                    >
                      {cell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </RowHeader>
            </TableHead>
            <TableBody>
              {cars?.map((car, index) => (
                <RowBody
                  key={`${car.id}-${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell width={50}>
                    <FontAwesomeIcon
                      icon={
                        checks.find((check) => check === car.id)
                          ? 'check-square'
                          : 'square'
                      }
                      size="lg"
                      color={
                        checks.find((check) => check === car.id)
                          ? theme?.colors.primary.main
                          : theme?.colors.disabled.main
                      }
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        setChecks(
                          checks.find((check) => check === car.id)
                            ? checks.filter((check) => check !== car.id)
                            : [...checks, car.id]
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>{car.id}</TableCell>
                  <TableCell>{car.licensePlate}</TableCell>
                  <TableCell>{car.brand}</TableCell>
                  <TableCell align="center">{car.model}</TableCell>
                  <TableCell align="right">
                    {formatToNumber(car.kilometer)}
                  </TableCell>
                  <TableCell>
                    {car.transmission === 'automatic'
                      ? 'Automática'
                      : 'Mecánica'}
                  </TableCell>
                  <TableCell>{car.type}</TableCell>
                  <TableCell align="center">
                    $ {formatCurrency(car.price)}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      color="light"
                      variant="contained"
                      iconRight="eye"
                      background="success"
                      title={translate('cars.actions.new')}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      color="light"
                      size="small"
                      variant="contained"
                      iconRight="caret-down"
                      title={translate('cars.actions.self')}
                    />
                  </TableCell>
                </RowBody>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableBox>
    </FlexContainer>
  );
};
