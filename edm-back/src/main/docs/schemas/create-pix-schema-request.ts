export const createPixSchemaRequest = {
  type: 'object',
  properties: {
    orderId: {
      type: 'string'
    },
    amount: {
      type: 'number'
    }
  },
  required: ['amount']
}
