"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListCategoryController = void 0;
const controller_1 = require("@/modules/categories/presentation/controller");
const category_1 = require("../../use-case/category");
const makeListCategoryController = () => {
    const controller = new controller_1.ListCategoryController(category_1.makeListCategoryUseCase());
    return controller;
};
exports.makeListCategoryController = makeListCategoryController;
//# sourceMappingURL=list-category-controller-factory.js.map