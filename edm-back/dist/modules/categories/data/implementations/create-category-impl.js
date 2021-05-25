"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
class CreateCategoryUseCase {
    constructor(createCategoryRepository) {
        this.createCategoryRepository = createCategoryRepository;
    }
    async create(categoryName) {
        const category = await this.createCategoryRepository.create(categoryName);
        return category;
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
//# sourceMappingURL=create-category-impl.js.map