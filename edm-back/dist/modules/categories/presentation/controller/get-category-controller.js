"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
class GetCategoryController {
    constructor(getCategoryUseCase) {
        this.getCategoryUseCase = getCategoryUseCase;
    }
    async handle(request) {
        try {
            const { id } = request;
            const category = await this.getCategoryUseCase.show(id);
            if (!category)
                return helpers_1.badRequest({
                    name: 'get action',
                    message: `category id ${id} not found`
                });
            return helpers_1.ok(category);
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.GetCategoryController = GetCategoryController;
//# sourceMappingURL=get-category-controller.js.map