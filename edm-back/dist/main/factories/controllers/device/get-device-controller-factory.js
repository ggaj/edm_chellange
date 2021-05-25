"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetDeviceController = void 0;
const controller_1 = require("@/modules/devices/presentation/controller");
const device_1 = require("../../use-case/device");
const makeGetDeviceController = () => {
    const controller = new controller_1.GetDeviceController(device_1.makeGetDeviceUseCase());
    return controller;
};
exports.makeGetDeviceController = makeGetDeviceController;
//# sourceMappingURL=get-device-controller-factory.js.map