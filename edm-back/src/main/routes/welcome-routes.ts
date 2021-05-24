import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', (_, response) => {
    return response.json({ message: 'Welcome to EDM API 1.0' })
  })
}
