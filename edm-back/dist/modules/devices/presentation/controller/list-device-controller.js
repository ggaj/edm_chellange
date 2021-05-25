"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDeviceController = void 0;
const helpers_1 = require("@/shared/presentation/helpers");
class ListDeviceController {
    constructor(listDeviceUseCase) {
        this.listDeviceUseCase = listDeviceUseCase;
    }
    async handle() {
        try {
            const devices = await this.listDeviceUseCase.index();
            if (!devices)
                return helpers_1.badRequest({
                    name: 'list action',
                    message: `No devices found`
                });
            return helpers_1.ok(devices);
        }
        catch (error) {
            return helpers_1.badRequest(error);
        }
    }
}
exports.ListDeviceController = ListDeviceController;
//# sourceMappingURL=list-device-controller.js.map