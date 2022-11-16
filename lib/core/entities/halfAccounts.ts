export enum HalfAccount {
  BankTransfer = 'bank_transfer',
  CertifiedTurn = 'certified_turn',
  CryptoWallet = 'crypto_wallet',
  VirtualWallet = 'virtual_wallet',
  InternalBalance = 'internal_balance'
}
export const HalfAccounts: (
  | 'bank_transfer'
  | 'certified_turn'
  | 'crypto_wallet'
  | 'virtual_wallet'
  | 'internal_balance'
)[] = [
  'bank_transfer',
  'certified_turn',
  'crypto_wallet',
  'virtual_wallet',
  'internal_balance'
];

export type IHalfAccounts =
  | 'BankTransfer'
  | 'CertifiedTurn'
  | 'CertifiedTurn'
  | 'CryptoWallet'
  | 'VirtualWallet'
  | 'InternalBalance';
