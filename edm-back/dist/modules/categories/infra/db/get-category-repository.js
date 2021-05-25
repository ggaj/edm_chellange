"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = __importDefault(require("../../domain/entity/category-entity"));
class GetCategoryRepository {
    async finOne(id) {
        const ormRepository = typeorm_1.getRepository(category_entity_1.default);
        const category = await ormRepository.findOne({ id });
        return category;
    }
}
exports.GetCategoryRepository = GetCategoryRepository;
//# sourceMappingURL=get-category-repository.js.map