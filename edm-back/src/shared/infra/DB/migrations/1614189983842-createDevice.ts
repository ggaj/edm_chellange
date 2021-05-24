
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export default class createDevice1614189983841 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'devices',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'categoryId',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'color',
            type: 'varchar',
            length: '16',
            isNullable: false
          },
          {
            name: 'partNumber',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )  
    
    await queryRunner.createForeignKey(
      "devices", 
      new TableForeignKey({
        name: "categoryId",
        columnNames: ["categoryId"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        onDelete: "CASCADE"
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("devices", "categoryId");
    await queryRunner.dropTable('devices')
  }
}
