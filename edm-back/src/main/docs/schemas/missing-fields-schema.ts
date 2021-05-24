export const missingFieldsSchema = {
  type: 'object',
  properties: {
    error: {
      type: 'string'
    },
    erros: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          message: {
            type: 'string'
          }
        }
      }
    }
  }
}
