export const missingFields = {
  description: 'Paramêtros não enviado',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/missingFields'
      }
    }
  }
}
