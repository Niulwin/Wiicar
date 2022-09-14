import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TVColumns } from 'wvl-virtualized-list/dist/types';

import { Table } from './Table';

export default {
  title: 'organism/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const dataSource = [
  {
    id: 1,
    name: 'Niulwin',
    lastName: 'Rios',
    age: 23,
    email: 'Niulwinrios87@gmail.com',
    gender: 'M',
    phone: '3044695324',
    dir: 'cra 60',
    birthdate: '2019-09-05',
    country: 'United States',
    city: 'Atlanta'
  },
  {
    id: 2,
    name: 'Marialex',
    lastName: 'Galue',
    age: 17,
    email: 'Marialex@gmail.com',
    gender: 'F',
    phone: '3044455324',
    dir: 'cra 60',
    birthdate: '2019-09-11',
    country: 'United States',
    city: 'Atlanta'
  },
  {
    id: 3,
    name: 'Niuman',
    lastName: 'Rios',
    age: 25,
    email: 'Niuman@gmail.com',
    gender: 'M',
    phone: '3044695234',
    dir: 'cra 60',
    birthdate: '2019-09-10',
    country: 'United States',
    city: 'Atlanta'
  },
  {
    id: 4,
    name: 'Jose',
    lastName: 'Gonzalez',
    age: 23,
    email: 'Jose@gmail.com',
    gender: 'M',
    phone: '3043395324',
    dir: 'cra 60',
    birthdate: '2019-09-08',
    country: 'United States',
    city: 'Atlanta'
  },
  {
    id: 5,
    name: 'Luis',
    lastName: 'Atencia',
    age: 24,
    email: 'Luis@gmail.com',
    gender: 'M',
    phone: '3044655324',
    dir: 'cra 60',
    birthdate: '2019-09-15',
    country: 'United States',
    city: 'Atlanta'
  }
];

const columns: TVColumns[] = [
  {
    name: '#',
    fixed: true,
    styles: { textAlign: 'right' },
    getValue: (_row, index) => (index || 0) + 1,
    width: 40,
    hideFilter: true
  },
  {
    name: 'Name',
    fixed: true,
    render(row) {
      return row;
    },
    width: 150,
    filter: true,
    filterAccessor: ['name', 'lastName'],
    orderable: true
  },
  { name: 'LastName', fixed: true, accessor: 'lastName', width: 150 },
  {
    name: 'Age',
    fixed: true,
    accessor: 'age',
    width: 150,
    styles: { textAlign: 'right' },
    filter: true,
    inputType: 'number',
    filterType: 'EQUAL',
    orderable: true
  },
  { name: 'Email', fixed: true, accessor: 'email', width: 150 },
  {
    name: 'Gender',
    accessor: 'gender',
    width: 25,
    styles: { textAlign: 'center' }
  },
  {
    name: 'Phone',
    accessor: 'phone',
    width: 25,
    styles: { textAlign: 'right' },
    numberFormat: true,
    filter: true,
    inputType: 'number',
    lSign: '$ ',
    align: 'right'
  },
  { name: 'Direction', fixed: true, accessor: 'dir', width: 150 },
  {
    name: 'Country',
    accessor: 'country',
    width: 25,
    select: true,
    filter: true,
    selectOptions: [
      { value: 1, option: 'Finalizado' },
      { value: 0, option: 'Rechazado' }
    ]
  },
  {
    name: 'Birth date',
    accessor: 'birthdate',
    width: 25,
    inputType: 'date',
    filter: true,
    filterType: 'EQUAL'
  },
  {
    name: 'Actions',
    fixed: true,
    render() {
      return <span style={{ width: '100%', display: 'inline-block' }}>o1</span>;
    },
    width: 150,
    hideFilter: true,
    orderable: false
  }
];

export const Primary = Template.bind({});
Primary.args = {
  data: dataSource,
  columns,
  loading: false,
  pagination: true
};
