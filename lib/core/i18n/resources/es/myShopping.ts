export const my_shopping = {
  action_creator: 'Continuar comprando',
  buyer: 'Comprador',
  seller: 'Vendedor',
  method_payment: 'Método de pago',
  price: 'Precio',
  quantity: 'Cantidad',
  identification_card: 'Numero',
  upload_payment_file: 'Subir comprobante de pago',
  status: {
    name: 'Status',
    SELL: 'Vendido',
    ENABLE: 'Disponible',
    PROGRESS: 'En progreso',
    DISABLED: 'Inactivo',
    PAYMENT: 'Pagado',
    APPROVAL: 'Finalizado',
    CANCEL_BUYER: 'Cancelado por el comprador',
    CANCEL_SELLER: 'Cancelado por el vendedor',
    EXPIRED_TIME: 'Cancelado (tiempo expirado)'
  },
  errors: {
    INVALID_CREDENTIALS: 'Credenciales inválidas',
    PAYMENT_FILE_DIFFERENT_STATUS:
      'Para cargar un pago de compra, la compra debe de estar en el estado de progreso.',
    PAYMENT_FILE_EXISTING:
      'It is not possible to load the payment of the purchase because it has already been loaded previously.'
  }
};
