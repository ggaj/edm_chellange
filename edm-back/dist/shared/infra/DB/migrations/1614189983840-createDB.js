"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class createDB1614189983840 {
    async up(queryRunner) {
        await queryRunner.createDatabase('edm', true);
    }
    async down(queryRunner) {
        await queryRunner.dropDatabase('edm');
    }
}
exports.default = createDB1614189983840;
//# sourceMappingURL=1614189983840-createDB.js.map