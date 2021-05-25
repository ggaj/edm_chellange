"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.get('/', (_, response) => {
        return response.json({ message: 'Welcome to EDM API 1.0' });
    });
};
//# sourceMappingURL=welcome-routes.js.map