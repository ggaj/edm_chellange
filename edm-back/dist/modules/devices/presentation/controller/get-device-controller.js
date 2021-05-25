"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeviceController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
class GetDeviceController {
    constructor(getDeviceUseCase) {
        this.getDeviceUseCase = getDeviceUseCase;
    }
    async handle(request) {
        try {
            const { id } = request;
            const device = await this.getDeviceUseCase.show(id);
            if (!device)
                return helpers_1.badRequest({
                    name: 'get action',
                    message: `Devices id ${id} not found`
                });
            return helpers_1.ok(device);
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.GetDeviceController = GetDeviceController;
//# sourceMappingURL=get-device-controller.js.map