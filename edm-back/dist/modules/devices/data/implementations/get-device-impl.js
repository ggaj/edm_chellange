"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeviceUseCase = void 0;
class GetDeviceUseCase {
    constructor(getDeviceRepository) {
        this.getDeviceRepository = getDeviceRepository;
    }
    async show(id) {
        const device = await this.getDeviceRepository.finOne(id);
        return device;
    }
}
exports.GetDeviceUseCase = GetDeviceUseCase;
//# sourceMappingURL=get-device-impl.js.map