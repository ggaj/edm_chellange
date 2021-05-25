"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateDeviceController = void 0;
const controller_1 = require("@/modules/devices/presentation/controller");
const device_1 = require("../../use-case/device");
const pix_1 = require("../../validations/pix");
const makeCreateDeviceController = () => {
    const controller = new controller_1.CreateDeviceController(pix_1.makeDeviceValidation(), device_1.makeCreateDeviceUseCase());
    return controller;
};
exports.makeCreateDeviceController = makeCreateDeviceController;
//# sourceMappingURL=create-device-controller-factory.js.map