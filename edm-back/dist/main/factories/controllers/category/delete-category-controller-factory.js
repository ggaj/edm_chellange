"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteCategoryController = void 0;
const controller_1 = require("@/modules/categories/presentation/controller");
const category_1 = require("../../use-case/category");
const makeDeleteCategoryController = () => {
    const controller = new controller_1.DeleteCategoryController(category_1.makeGetCategoryUseCase(), category_1.makeDeleteCategoryUseCase());
    return controller;
};
exports.makeDeleteCategoryController = makeDeleteCategoryController;
//# sourceMappingURL=delete-category-controller-factory.js.map