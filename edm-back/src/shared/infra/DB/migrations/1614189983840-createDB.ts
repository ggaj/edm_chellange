
import { MigrationInterface, QueryRunner } from 'typeorm'

export default class createDB1614189983840 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase(
      'edm',
      true 
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('edm')
  }
}
