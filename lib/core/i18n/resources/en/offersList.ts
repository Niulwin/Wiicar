export const offers_list = {
  action_creator: 'Create offer',
  actions: {
    create: 'Create offer',
    edit: 'Edit',
    delete: 'Delete'
  },
  name: 'User',
  phone_number: 'Number phone',
  email: 'Email',
  method_payment: 'Method Payment',
  method_payments: 'method Payments',
  price: 'Price',
  quantity: 'Quantity',
  buy: 'Buy',
  available: 'Available',
  payment_amount: 'Payment amount',
  limit: 'Limit',
  limit_payment_time: 'Limit payment type',
  term_and_conditions: 'Terms and conditions',
  want_to_pay: 'Amount to pay',
  will_receive: 'Amount to receive',
  verify_amount_to_pay:
    'please, always verify the amount to pay before continuing',
  errors: {
    ORDER_IN_PROGRESS:
      'You have a purchase in progress, it is not possible to make another purchase until the purchase in progress is confirmed or cancelled.',
    QUANTITY_GREATER_THAN_WHAT_IS_AVAILABLE:
      'The quantity cannot be greater than what is available'
  }
};
