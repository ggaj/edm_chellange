"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = __importDefault(require("../../domain/entity/category-entity"));
class DeleteCategoryRepository {
    async delete(id) {
        const ormRepository = typeorm_1.getRepository(category_entity_1.default);
        const isDeleted = await ormRepository.delete({ id });
        return isDeleted.affected > 0;
    }
}
exports.DeleteCategoryRepository = DeleteCategoryRepository;
//# sourceMappingURL=delete-category-repository.js.map