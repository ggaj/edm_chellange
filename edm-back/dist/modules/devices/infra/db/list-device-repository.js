"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDeviceRepository = void 0;
const typeorm_1 = require("typeorm");
const device_entity_1 = __importDefault(require("../../domain/entity/device-entity"));
class ListDeviceRepository {
    async find() {
        const ormRepository = typeorm_1.getRepository(device_entity_1.default);
        const devices = await ormRepository.find({
            relations: ['category']
        });
        return devices;
    }
}
exports.ListDeviceRepository = ListDeviceRepository;
//# sourceMappingURL=list-device-repository.js.map