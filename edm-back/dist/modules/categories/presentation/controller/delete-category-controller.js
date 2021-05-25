"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
class DeleteCategoryController {
    constructor(getCategoryUseCase, deleteCategoryUseCase) {
        this.getCategoryUseCase = getCategoryUseCase;
        this.deleteCategoryUseCase = deleteCategoryUseCase;
    }
    async handle(request) {
        try {
            const { id } = request;
            const categoryExists = await this.getCategoryUseCase.show(id);
            if (!categoryExists)
                return helpers_1.badRequest({
                    name: 'delete action',
                    message: `category id ${id} not found`
                });
            const hasDelete = await this.deleteCategoryUseCase.delete(id);
            if (hasDelete)
                return helpers_1.noContent();
            return helpers_1.badRequest({
                name: 'delete action',
                message: `failed to remove category id ${id}`
            });
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
//# sourceMappingURL=delete-category-controller.js.map