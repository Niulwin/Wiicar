export const my_shopping = {
  action_creator: 'Continue buying',
  buyer: 'Buyer',
  seller: 'Seller',
  method_payment: 'Payment Method',
  price: 'Price',
  quantity: 'Quantity',
  identification_card: 'Phone',
  upload_payment_file: 'Upload payment file',
  status: {
    name: 'State',
    SELL: 'Sell',
    ENABLE: 'Available',
    PROGRESS: 'In progress',
    DISABLED: 'Inactive',
    PAYMENT: 'Payment',
    APPROVAL: 'Approve',
    CANCEL_BUYER: 'Cancel Buyer',
    CANCEL_SELLER: 'Cancel Seller'
  },
  errors: {
    PAYMENT_FILE_DIFFERENT_STATUS:
      'To charge a purchase payment, the purchase must be in the progress state.',
    PAYMENT_FILE_EXISTING:
      'It is not possible to load the payment of the purchase because it has already been loaded previously.'
  }
};
