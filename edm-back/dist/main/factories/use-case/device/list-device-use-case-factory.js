"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListDeviceUseCase = void 0;
const implementations_1 = require("@/modules/devices/data/implementations");
const db_1 = require("@/modules/devices/infra/db");
const makeListDeviceUseCase = () => {
    const listDeviceRepository = new db_1.ListDeviceRepository();
    const listDeviceUseCase = new implementations_1.ListDeviceUseCase(listDeviceRepository);
    return listDeviceUseCase;
};
exports.makeListDeviceUseCase = makeListDeviceUseCase;
//# sourceMappingURL=list-device-use-case-factory.js.map