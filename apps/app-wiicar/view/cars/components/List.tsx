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
import { useEffect, useState } from 'react';
import { Button, FlexContainer, Typography, useTheme } from 'ui';
import { headerCells } from './headerCells';
import { RowBody, RowHeader, TableBox } from './styled';

export interface TListProps {
  cars?: ICars[];
  handleSort: (key: string, direction: 'asc' | 'desc') => void;
}
export const List = ({ cars, handleSort }: TListProps) => {
  const translate = useTranslate();
  const { theme } = useTheme();
  const [checks, setChecks] = useState<number[]>([]);
  const [sort, setSort] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  }>({
    key: '',
    direction: 'asc'
  });

  useEffect(() => {
    if (sort.key) handleSort(sort.key, sort.direction);
  }, [sort]);

  return (
    <FlexContainer
      padding="2rem 3rem"
      justify="flex-start"
      style={{
        backgroundColor: `${theme?.colors.border.main}30`,
        height: '80vh'
      }}
    >
      <TableBox>
        <TableContainer>
          <Table
            sx={{ minWidth: 650, borderCollapse: 'separate' }}
            size="small"
          >
            <TableHead>
              {cars?.length ? (
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
                        direction={
                          sort.key === cell.id ? sort.direction : 'asc'
                        }
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
                        {cell.label && translate(cell.label)}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </RowHeader>
              ) : (
                <RowHeader>
                  <TableCell>
                    <Typography variant="body1" color="disabled" align="center">
                      No existen datos para mostrar
                    </Typography>
                  </TableCell>
                </RowHeader>
              )}
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
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{formatToNumber(car.kilometer)}</TableCell>
                  <TableCell>
                    {car.transmission === 'automatic'
                      ? 'Automática'
                      : 'Mecánica'}
                  </TableCell>
                  <TableCell>{car.type}</TableCell>
                  <TableCell>$ {formatCurrency(car.price)}</TableCell>
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
