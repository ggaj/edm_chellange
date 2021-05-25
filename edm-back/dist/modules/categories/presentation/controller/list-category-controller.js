"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
class ListCategoryController {
    constructor(listCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }
    async handle() {
        try {
            const categories = await this.listCategoryUseCase.index();
            if (!categories)
                return helpers_1.badRequest({
                    name: 'list action',
                    message: `No categories found`
                });
            return helpers_1.ok(categories);
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.ListCategoryController = ListCategoryController;
//# sourceMappingURL=list-category-controller.js.map