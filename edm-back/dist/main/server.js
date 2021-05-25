"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
require("reflect-metadata");
require("module-alias/register");
require("dotenv/config");
const app_1 = __importDefault(require("./config/app"));
const DB_1 = __importDefault(require("../shared/infra/DB"));
const startConnection = async () => (await DB_1.default());
startConnection().then((_) => app_1.default.listen(process.env.PORT, () => {
    console.log(`🙌 Server started on port ${process.env.PORT}!`);
}));
//# sourceMappingURL=server.js.map