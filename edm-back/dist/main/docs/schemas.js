"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas/");
exports.default = {
    error: schemas_1.errorSchema,
    missingFields: schemas_1.missingFieldsSchema,
    pixCreate: schemas_1.createPixSchemaRequest,
    pixCreateResult: schemas_1.createPixSchemaResponse,
    getUpdatePixStatus: schemas_1.getUpdatePixStatusSchemaRequest
};
//# sourceMappingURL=schemas.js.map