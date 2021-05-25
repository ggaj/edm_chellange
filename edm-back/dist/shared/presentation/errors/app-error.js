"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(message, errors = []) {
        this.message = message;
        this.errors = errors;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=app-error.js.map