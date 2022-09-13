import { Card, Table, Typography } from 'ui';
import { Container, ContentOptions } from './styled';

const dataSource = [
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

const columnsx = [
  {
    title: 'Usuario',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Metodo de pago',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Cantidad',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Precio',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Total',
    dataIndex: 'address',
    key: 'address'
  }
];

export const InfoTable = () => {
  return (
    <Container>
      <Typography text="Compras y ventas" />
      <ContentOptions>
        <Card>
          <Table
            loading={false}
            columns={columnsx}
            dataSource={dataSource}
            className={''}
            data={[]}
          />
        </Card>
        <Card>
          <Table
            loading={false}
            columns={columnsx}
            dataSource={dataSource}
            className={''}
            data={[]}
          />
        </Card>
      </ContentOptions>
    </Container>
  );
};
