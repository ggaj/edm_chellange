"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDeviceUseCase = void 0;
class ListDeviceUseCase {
    constructor(listDeviceRepository) {
        this.listDeviceRepository = listDeviceRepository;
    }
    async index() {
        const categories = await this.listDeviceRepository.find();
        return categories;
    }
}
exports.ListDeviceUseCase = ListDeviceUseCase;
//# sourceMappingURL=list-device-impl.js.map