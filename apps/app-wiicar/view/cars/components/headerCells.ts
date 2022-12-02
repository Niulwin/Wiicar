import { NamespaceTranslate } from 'core';

export interface THeaderCell {
  id: string;
  label?: NamespaceTranslate;
}

export const headerCells: readonly THeaderCell[] = [
  {
    id: 'id',
    label: 'cars.table.id'
  },
  {
    id: 'licensePlate',
    label: 'cars.table.license_plate'
  },
  {
    id: 'brand',
    label: 'cars.table.brand'
  },
  {
    id: 'model',
    label: 'cars.table.model'
  },
  {
    id: 'kilometer',
    label: 'cars.table.kilometer'
  },
  {
    id: 'transmission',
    label: 'cars.table.transmission'
  },
  {
    id: 'type',
    label: 'cars.table.type'
  },
  {
    id: 'price',
    label: 'cars.table.price'
  },
  {
    id: 'provenance',
    label: 'cars.table.provenance'
  },
  {
    id: 'option'
  }
];
