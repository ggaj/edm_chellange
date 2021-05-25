"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetDeviceUseCase = void 0;
const implementations_1 = require("@/modules/devices/data/implementations");
const db_1 = require("@/modules/devices/infra/db");
const makeGetDeviceUseCase = () => {
    const getDeviceRepository = new db_1.GetDeviceRepository();
    const getDeviceUseCase = new implementations_1.GetDeviceUseCase(getDeviceRepository);
    return getDeviceUseCase;
};
exports.makeGetDeviceUseCase = makeGetDeviceUseCase;
//# sourceMappingURL=get-device-use-case-factory.js.map