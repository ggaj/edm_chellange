"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeviceController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
const device_schema_1 = require("../schema/device-schema");
class CreateDeviceController {
    constructor(validationSchema, createDeviceUseCase) {
        this.validationSchema = validationSchema;
        this.createDeviceUseCase = createDeviceUseCase;
    }
    async handle(request) {
        try {
            console.log(request);
            const error = await this.validationSchema.validate(device_schema_1.deviceSchema, request);
            if (error) {
                return helpers_1.missingFields(error);
            }
            const { categoryId, color, partNumber } = request;
            const category = await this.createDeviceUseCase.create({ categoryId, color, partNumber });
            return helpers_1.ok(category);
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.CreateDeviceController = CreateDeviceController;
//# sourceMappingURL=create-device-controller.js.map