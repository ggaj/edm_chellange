"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryUseCase = void 0;
class GetCategoryUseCase {
    constructor(getCategoryRepository) {
        this.getCategoryRepository = getCategoryRepository;
    }
    async show(id) {
        const category = await this.getCategoryRepository.finOne(id);
        return category;
    }
}
exports.GetCategoryUseCase = GetCategoryUseCase;
//# sourceMappingURL=get-category-impl.js.map