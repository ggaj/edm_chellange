"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = __importDefault(require("../../domain/entity/category-entity"));
class CreateCategoryRepository {
    async create(categoryName) {
        try {
            const ormRepository = typeorm_1.getRepository(category_entity_1.default);
            const category = ormRepository.create({
                name: categoryName
            });
            await ormRepository.save(category);
            return category;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CreateCategoryRepository = CreateCategoryRepository;
//# sourceMappingURL=create-category-repository.js.map