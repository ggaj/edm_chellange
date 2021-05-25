"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryUseCase = void 0;
class DeleteCategoryUseCase {
    constructor(deleteCategoryRepository) {
        this.deleteCategoryRepository = deleteCategoryRepository;
    }
    async delete(category) {
        const isDeleted = await this.deleteCategoryRepository.delete(category);
        return isDeleted;
    }
}
exports.DeleteCategoryUseCase = DeleteCategoryUseCase;
//# sourceMappingURL=delete-category-impl.js.map