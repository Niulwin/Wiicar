import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Table } from './Table';

export default {
  title: 'organism/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

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

export const Primary = Template.bind({});
Primary.args = {
  data: dataSource,
  columns,
  loading: false,
  style: { width: '100%' }
};
