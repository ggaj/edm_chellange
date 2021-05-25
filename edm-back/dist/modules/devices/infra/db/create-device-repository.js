"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeviceRepository = void 0;
const category_entity_1 = __importDefault(require("@/modules/categories/domain/entity/category-entity"));
const typeorm_1 = require("typeorm");
const device_entity_1 = __importDefault(require("../../domain/entity/device-entity"));
class CreateDeviceRepository {
    async create({ categoryId, color, partNumber }) {
        try {
            const ormRepository = typeorm_1.getRepository(device_entity_1.default);
            let category = new category_entity_1.default();
            category.id = categoryId;
            const device = ormRepository.create({
                category: category,
                color: color,
                partNumber: partNumber,
            });
            await ormRepository.save(device);
            return device;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CreateDeviceRepository = CreateDeviceRepository;
//# sourceMappingURL=create-device-repository.js.map