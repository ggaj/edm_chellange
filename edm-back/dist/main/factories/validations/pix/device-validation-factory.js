"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeviceValidation = void 0;
const validations_1 = require("@/main/validations");
const makeDeviceValidation = () => {
    const schema = new validations_1.ValidationSchema();
    return schema;
};
exports.makeDeviceValidation = makeDeviceValidation;
//# sourceMappingURL=device-validation-factory.js.map