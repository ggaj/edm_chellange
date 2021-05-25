"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetCategoryController = void 0;
const controller_1 = require("@/modules/categories/presentation/controller");
const category_1 = require("../../use-case/category");
const makeGetCategoryController = () => {
    const controller = new controller_1.GetCategoryController(category_1.makeGetCategoryUseCase());
    return controller;
};
exports.makeGetCategoryController = makeGetCategoryController;
//# sourceMappingURL=get-category-controller-factory.js.map