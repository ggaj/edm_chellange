"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCategoryUseCase = void 0;
const implementations_1 = require("@/modules/categories/data/implementations");
const db_1 = require("@/modules/categories/infra/db");
const makeDeleteCategoryUseCase = () => {
    const deleteCategoryRepository = new db_1.DeleteCategoryRepository();
    const deleteCategoryUseCase = new implementations_1.DeleteCategoryUseCase(deleteCategoryRepository);
    return deleteCategoryUseCase;
};
exports.makeDeleteCategoryUseCase = makeDeleteCategoryUseCase;
//# sourceMappingURL=delete-category-use-case-factory.js.map