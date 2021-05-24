import { createConnection, getConnectionOptions, Connection } from 'typeorm'

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()


  const connection = await createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? process.env.DB_TEST
          : defaultOptions.database
    })
  )

  await connection?.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_DATABASE};`);

  return connection
}
