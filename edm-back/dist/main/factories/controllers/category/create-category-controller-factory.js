"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCategoryController = void 0;
const controller_1 = require("@/modules/categories/presentation/controller");
const create_category_use_case_factory_1 = require("../../use-case/category/create-category-use-case-factory");
const pix_1 = require("../../validations/pix");
const makeCreateCategoryController = () => {
    const controller = new controller_1.CreateCategoryController(pix_1.makeCategoryValidation(), create_category_use_case_factory_1.makeCreateCategoryUseCase());
    return controller;
};
exports.makeCreateCategoryController = makeCreateCategoryController;
//# sourceMappingURL=create-category-controller-factory.js.map