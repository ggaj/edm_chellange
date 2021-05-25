"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../adapters");
const category_1 = require("../factories/controllers/category");
exports.default = (router) => {
    router.post('/category', adapters_1.adaptRoute(category_1.makeCreateCategoryController()));
    router.delete('/category/:id', adapters_1.adaptRoute(category_1.makeDeleteCategoryController()));
    router.get('/category/:id', adapters_1.adaptRoute(category_1.makeGetCategoryController()));
    router.get('/category', adapters_1.adaptRoute(category_1.makeListCategoryController()));
};
//# sourceMappingURL=category-routes.js.map