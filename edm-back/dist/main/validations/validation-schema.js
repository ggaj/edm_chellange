"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationSchema = void 0;
// import { AppError } from '@/shared/presentation/errors'
const errors_1 = require("@/shared/presentation/errors");
class ValidationSchema {
    async validate(schema, payload) {
        try {
            await schema.validate(payload, {
                abortEarly: false
            });
            return;
        }
        catch (error) {
            const erros = error.inner.map((err) => ({
                name: err.path,
                message: err.message
            }));
            return new errors_1.AppError('Validation fails', erros);
        }
    }
}
exports.ValidationSchema = ValidationSchema;
//# sourceMappingURL=validation-schema.js.map