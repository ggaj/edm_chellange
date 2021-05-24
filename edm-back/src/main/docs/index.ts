import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Bemol Pay',
    description: 'API para o contexto de pagamento Bemol',
    version: '1.0.0',
    contact: {
      name: 'BU Canal Digital',
      email: ''
    }
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Pix'
  }],
  paths,
  schemas,
  components
}
