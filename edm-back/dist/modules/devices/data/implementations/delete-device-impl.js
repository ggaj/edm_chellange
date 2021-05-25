"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDeviceUseCase = void 0;
class DeleteDeviceUseCase {
    constructor(deleteDeviceRepository) {
        this.deleteDeviceRepository = deleteDeviceRepository;
    }
    async delete(id) {
        const isDeleted = await this.deleteDeviceRepository.delete(id);
        return isDeleted;
    }
}
exports.DeleteDeviceUseCase = DeleteDeviceUseCase;
//# sourceMappingURL=delete-device-impl.js.map