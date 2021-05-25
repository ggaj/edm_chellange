"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryUseCase = void 0;
class ListCategoryUseCase {
    constructor(listCategoryRepository) {
        this.listCategoryRepository = listCategoryRepository;
    }
    async index() {
        const categories = await this.listCategoryRepository.find();
        return categories;
    }
}
exports.ListCategoryUseCase = ListCategoryUseCase;
//# sourceMappingURL=list-category-impl.js.map