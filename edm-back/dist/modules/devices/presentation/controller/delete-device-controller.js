"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDeviceController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
class DeleteDeviceController {
    constructor(getDeviceUseCase, deleteDeviceUseCase) {
        this.getDeviceUseCase = getDeviceUseCase;
        this.deleteDeviceUseCase = deleteDeviceUseCase;
    }
    async handle(request) {
        try {
            const { id } = request;
            const deviceExists = await this.getDeviceUseCase.show(id);
            if (!deviceExists)
                return helpers_1.badRequest({
                    name: 'delete action',
                    message: `Device id ${id} not found`
                });
            const hasDelete = await this.deleteDeviceUseCase.delete(id);
            if (hasDelete)
                return helpers_1.noContent();
            return helpers_1.badRequest({
                name: 'delete action',
                message: `failed to remove Device id ${id}`
            });
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.DeleteDeviceController = DeleteDeviceController;
//# sourceMappingURL=delete-device-controller.js.map