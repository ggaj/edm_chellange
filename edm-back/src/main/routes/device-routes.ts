import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeCreateDeviceController, makeDeleteDeviceController, makeGetDeviceController, makeListDeviceController } from '../factories/controllers/device'

export default (router: Router): void => {
  router.post('/device', adaptRoute(makeCreateDeviceController()))
  router.delete('/device/:id', adaptRoute(makeDeleteDeviceController()))
  router.get('/device/:id', adaptRoute(makeGetDeviceController()))
  router.get('/device', adaptRoute(makeListDeviceController()))
}
