"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeviceRepository = void 0;
const typeorm_1 = require("typeorm");
const device_entity_1 = __importDefault(require("../../domain/entity/device-entity"));
class GetDeviceRepository {
    async finOne(id) {
        const ormRepository = typeorm_1.getRepository(device_entity_1.default);
        const device = await ormRepository.findOne({ id });
        return device;
    }
}
exports.GetDeviceRepository = GetDeviceRepository;
//# sourceMappingURL=get-device-repository.js.map