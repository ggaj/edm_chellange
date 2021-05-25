"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = async (name = 'default') => {
    const defaultOptions = await typeorm_1.getConnectionOptions();
    const connection = await typeorm_1.createConnection(Object.assign(defaultOptions, {
        name,
        database: process.env.NODE_ENV === 'test'
            ? process.env.DB_TEST
            : defaultOptions.database
    }));
    await (connection === null || connection === void 0 ? void 0 : connection.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_DATABASE};`));
    return connection;
};
//# sourceMappingURL=index.js.map