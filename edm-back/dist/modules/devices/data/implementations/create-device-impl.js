"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeviceUseCase = void 0;
class CreateDeviceUseCase {
    constructor(createDeviceRepository) {
        this.createDeviceRepository = createDeviceRepository;
    }
    async create({ categoryId, color, partNumber }) {
        const device = await this.createDeviceRepository.create({ categoryId, color, partNumber });
        return device;
    }
}
exports.CreateDeviceUseCase = CreateDeviceUseCase;
//# sourceMappingURL=create-device-impl.js.map