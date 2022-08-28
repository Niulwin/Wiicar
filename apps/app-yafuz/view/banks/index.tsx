import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Button, Card, Content, Table, Typography } from 'ui';

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

const columns = [
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

export const BanksView: FC = () => {
  return (
    <Content>
      <Typography fSize="24px" text="¡Buenos días, Angelo!" />
      <Typography text="¿Tienes alguna pregunta? Visita nuestro centro de ayuda o escríbenos." />
      <Button onClick={() => console.log('w')}>
        <FontAwesomeIcon icon="plus" color="#7367f0" />
        <Typography color="#7367f0" text="Crear registro" />
      </Button>
      <Card>
        <Typography fSize="18px" text="Bancos" />
        <Table loading={true} columns={columns} dataSource={dataSource} />
      </Card>
    </Content>
  );
};
