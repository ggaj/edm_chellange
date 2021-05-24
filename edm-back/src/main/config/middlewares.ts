import { bodyParser, contentType } from '../middlewares'
import { Express } from 'express'
import cors from 'cors'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors())
  app.use(contentType)
}
