"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class createDevice1614189983841 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createForeignKey("devices", new typeorm_1.TableForeignKey({
            name: "categoryId",
            columnNames: ["categoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE"
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("devices", "categoryId");
        await queryRunner.dropTable('devices');
    }
}
exports.default = createDevice1614189983841;
//# sourceMappingURL=1614189983842-createDevice.js.map