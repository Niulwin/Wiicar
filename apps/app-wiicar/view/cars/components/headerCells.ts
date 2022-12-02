export interface THeaderCell {
  id: string | number;
  label: string;
}

export const headerCells: readonly THeaderCell[] = [
  {
    id: 'id',
    label: 'ID'
  },
  {
    id: 'licensePlate',
    label: 'Placa'
  },
  {
    id: 'brand',
    label: 'Marca'
  },
  {
    id: 'module',
    label: 'Modelo'
  },
  {
    id: 'kilometer',
    label: 'Kilometraje'
  },
  {
    id: 'transmission',
    label: 'Transmisión'
  },
  {
    id: 'type',
    label: 'Tipo'
  },
  {
    id: 'purchasePrice',
    label: 'Precio de Compra'
  },
  {
    id: 'provenance',
    label: 'Proveniencia'
  },
  {
    id: 'option',
    label: ''
  }
];
