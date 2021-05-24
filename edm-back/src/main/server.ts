/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'reflect-metadata'
import 'module-alias/register'
import 'dotenv/config'

import app from './config/app'

import createConnection from '../shared/infra/DB'

const startConnection = async () => (await createConnection())

startConnection().then(
  (_) => app.listen(process.env.PORT, () => {
    console.log(`🙌 Server started on port ${process.env.PORT}!`)
  })
)
