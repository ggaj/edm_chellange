"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCategoryUseCase = void 0;
const implementations_1 = require("@/modules/categories/data/implementations");
const db_1 = require("@/modules/categories/infra/db");
const makeCreateCategoryUseCase = () => {
    const createCategoryRepository = new db_1.CreateCategoryRepository();
    const createCategoryUseCase = new implementations_1.CreateCategoryUseCase(createCategoryRepository);
    return createCategoryUseCase;
};
exports.makeCreateCategoryUseCase = makeCreateCategoryUseCase;
//# sourceMappingURL=create-category-use-case-factory.js.map