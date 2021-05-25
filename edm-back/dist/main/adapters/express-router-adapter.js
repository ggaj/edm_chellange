"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {})
        };
        const httpResponse = await controller.handle(request);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=express-router-adapter.js.map