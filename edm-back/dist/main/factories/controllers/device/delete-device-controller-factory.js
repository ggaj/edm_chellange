"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteDeviceController = void 0;
const controller_1 = require("@/modules/devices/presentation/controller");
const device_1 = require("../../use-case/device");
const makeDeleteDeviceController = () => {
    const controller = new controller_1.DeleteDeviceController(device_1.makeGetDeviceUseCase(), device_1.makeDeleteDeviceUseCase());
    return controller;
};
exports.makeDeleteDeviceController = makeDeleteDeviceController;
//# sourceMappingURL=delete-device-controller-factory.js.map