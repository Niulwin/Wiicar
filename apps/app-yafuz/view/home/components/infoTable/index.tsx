import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Table, TTableColumns, Typography } from 'ui';
import { Container } from './styled';

type TDataSource = {
  key: string;
  name: string;
  age: number;
  address: string;
};
const dataSource: TDataSource[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '3',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '5',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

const columns: TTableColumns[] = [
  {
    name: '',
    width: 40,
    fixed: true,
    render: () => {
      return <FontAwesomeIcon size="2x" icon="user-circle" />;
    }
  },
  {
    name: 'User',
    accessor: 'name',
    width: 20
  },
  {
    name: 'Metodo de pago',
    accessor: 'age',
    width: 20
  },
  {
    name: 'Cantidad',
    accessor: 'address',
    width: 20
  },
  {
    name: 'Precio',
    accessor: 'address',
    width: 20
  },
  {
    name: 'Precio',
    accessor: 'address',
    width: 20
  }
];

export const InfoTable = () => {
  return (
    <Container>
      <Typography variant="caption">Compras y ventas</Typography>
      <Card>
        <Table<TDataSource>
          loading={false}
          columns={columns}
          data={dataSource}
          pagination
        />
      </Card>
    </Container>
  );
};
