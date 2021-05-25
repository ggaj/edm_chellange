"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingFieldsSchema = void 0;
exports.missingFieldsSchema = {
    type: 'object',
    properties: {
        error: {
            type: 'string'
        },
        erros: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    message: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=missing-fields-schema.js.map