"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteDeviceUseCase = void 0;
const implementations_1 = require("@/modules/devices/data/implementations");
const db_1 = require("@/modules/devices/infra/db");
const makeDeleteDeviceUseCase = () => {
    const deleteDeviceRepository = new db_1.DeleteDeviceRepository();
    const deleteDeviceUseCase = new implementations_1.DeleteDeviceUseCase(deleteDeviceRepository);
    return deleteDeviceUseCase;
};
exports.makeDeleteDeviceUseCase = makeDeleteDeviceUseCase;
//# sourceMappingURL=delete-device-use-case-factory.js.map