"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateDeviceUseCase = void 0;
const implementations_1 = require("@/modules/devices/data/implementations");
const db_1 = require("@/modules/devices/infra/db");
const makeCreateDeviceUseCase = () => {
    const createDeviceRepository = new db_1.CreateDeviceRepository();
    const createDeviceUseCase = new implementations_1.CreateDeviceUseCase(createDeviceRepository);
    return createDeviceUseCase;
};
exports.makeCreateDeviceUseCase = makeCreateDeviceUseCase;
//# sourceMappingURL=create-device-use-case-factory.js.map