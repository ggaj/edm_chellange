"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
const category_schema_1 = require("../schema/category-schema");
class CreateCategoryController {
    constructor(validationSchema, createCategoryUseCase) {
        this.validationSchema = validationSchema;
        this.createCategoryUseCase = createCategoryUseCase;
    }
    async handle(request) {
        try {
            const error = await this.validationSchema.validate(category_schema_1.categorySchema, request);
            if (error) {
                return helpers_1.missingFields(error);
            }
            const { name } = request;
            const category = await this.createCategoryUseCase.create(name);
            return helpers_1.ok(category);
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.CreateCategoryController = CreateCategoryController;
//# sourceMappingURL=create-category-controller.js.map