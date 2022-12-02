export {};

declare global {
  interface Window {
    ethereum?: import('ethers').providers.ExternalProvider & import('ethers');
  }
}
