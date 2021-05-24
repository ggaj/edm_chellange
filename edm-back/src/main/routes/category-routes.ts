import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeCreateCategoryController, makeDeleteCategoryController, makeGetCategoryController, makeListCategoryController } from '../factories/controllers/category'

export default (router: Router): void => {
  router.post('/category', adaptRoute(makeCreateCategoryController()))
  router.delete('/category/:id', adaptRoute(makeDeleteCategoryController()))
  router.get('/category/:id', adaptRoute(makeGetCategoryController()))
  router.get('/category', adaptRoute(makeListCategoryController()))
}
