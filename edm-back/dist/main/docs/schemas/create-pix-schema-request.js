"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPixSchemaRequest = void 0;
exports.createPixSchemaRequest = {
    type: 'object',
    properties: {
        orderId: {
            type: 'string'
        },
        amount: {
            type: 'number'
        }
    },
    required: ['amount']
};
//# sourceMappingURL=create-pix-schema-request.js.map