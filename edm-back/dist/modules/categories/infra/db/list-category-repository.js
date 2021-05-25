"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = __importDefault(require("../../domain/entity/category-entity"));
class ListCategoryRepository {
    async find() {
        const ormRepository = typeorm_1.getRepository(category_entity_1.default);
        const categories = await ormRepository.find();
        return categories;
    }
}
exports.ListCategoryRepository = ListCategoryRepository;
//# sourceMappingURL=list-category-repository.js.map