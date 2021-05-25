"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListDeviceController = void 0;
const controller_1 = require("@/modules/devices/presentation/controller");
const device_1 = require("../../use-case/device");
const makeListDeviceController = () => {
    const controller = new controller_1.ListDeviceController(device_1.makeListDeviceUseCase());
    return controller;
};
exports.makeListDeviceController = makeListDeviceController;
//# sourceMappingURL=list-device-controller-factory.js.map