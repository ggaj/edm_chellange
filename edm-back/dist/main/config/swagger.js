"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = require("swagger-ui-express");
const docs_1 = __importDefault(require("@/main/docs"));
const middlewares_1 = require("@/main/middlewares");
exports.default = (app) => {
    app.use('/api-docs', middlewares_1.noCache, swagger_ui_express_1.serve, swagger_ui_express_1.setup(docs_1.default));
};
//# sourceMappingURL=swagger.js.map