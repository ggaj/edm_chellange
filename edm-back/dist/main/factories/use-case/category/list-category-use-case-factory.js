"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListCategoryUseCase = void 0;
const implementations_1 = require("@/modules/categories/data/implementations");
const db_1 = require("@/modules/categories/infra/db");
const makeListCategoryUseCase = () => {
    const listCategoryRepository = new db_1.ListCategoryRepository();
    const listCategoryUseCase = new implementations_1.ListCategoryUseCase(listCategoryRepository);
    return listCategoryUseCase;
};
exports.makeListCategoryUseCase = makeListCategoryUseCase;
//# sourceMappingURL=list-category-use-case-factory.js.map