require('dotenv/config')

module.exports = {
  name: 'default',
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  synchronize: true,
  database: process.env.DB_DATABASE,
  entities: ['./dist/modules/**/domain/entity/*.js'],
  migrations: ['./dist/shared/infra/DB/migrations/*.js'],
  cli: { migrationsDir: './dist/shared/infra/DB/migrations' }
}
