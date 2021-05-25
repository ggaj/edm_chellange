"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDeviceRepository = void 0;
const typeorm_1 = require("typeorm");
const device_entity_1 = __importDefault(require("../../domain/entity/device-entity"));
class DeleteDeviceRepository {
    async delete(id) {
        const ormRepository = typeorm_1.getRepository(device_entity_1.default);
        const isDeleted = await ormRepository.delete({ id });
        return isDeleted.affected > 0;
    }
}
exports.DeleteDeviceRepository = DeleteDeviceRepository;
//# sourceMappingURL=delete-device-repository.js.map