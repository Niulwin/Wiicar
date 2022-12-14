export interface ICars {
  id: number;
  licensePlate: string;
  brand: string;
  model: string;
  kilometer: number;
  transmission: 'automatic' | 'mechanic';
  price: number;
  type: 'Automóvil';
  provenance?: 'used' | 'new';
}
