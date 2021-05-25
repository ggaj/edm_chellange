"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.ok = exports.serverError = exports.forbidden = exports.unauthorized = exports.badRequest = exports.missingFields = void 0;
const errors_1 = require("../errors");
const unauthorized_error_1 = require("../errors/unauthorized-error");
const missingFields = (error) => ({
    statusCode: 400,
    body: error
});
exports.missingFields = missingFields;
const badRequest = (error) => ({
    statusCode: 400,
    body: error
});
exports.badRequest = badRequest;
const unauthorized = () => ({
    statusCode: 401,
    body: new unauthorized_error_1.UnauthorizedError()
});
exports.unauthorized = unauthorized;
const forbidden = (error) => ({
    statusCode: 403,
    body: error
});
exports.forbidden = forbidden;
const serverError = (error) => ({
    statusCode: 500,
    body: new errors_1.ServerError(error.stack)
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
//# sourceMappingURL=http-helper.js.map