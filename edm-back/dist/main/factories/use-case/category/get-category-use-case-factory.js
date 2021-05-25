"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetCategoryUseCase = void 0;
const implementations_1 = require("@/modules/categories/data/implementations");
const db_1 = require("@/modules/categories/infra/db");
const makeGetCategoryUseCase = () => {
    const getCategoryRepository = new db_1.GetCategoryRepository();
    const getCategoryUseCase = new implementations_1.GetCategoryUseCase(getCategoryRepository);
    return getCategoryUseCase;
};
exports.makeGetCategoryUseCase = makeGetCategoryUseCase;
//# sourceMappingURL=get-category-use-case-factory.js.map