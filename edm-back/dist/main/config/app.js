"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = __importDefault(require("./swagger"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
swagger_1.default(app);
middlewares_1.default(app);
routes_1.default(app);
exports.default = app;
//# sourceMappingURL=app.js.map