"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("../adapters");
const device_1 = require("../factories/controllers/device");
exports.default = (router) => {
    router.post('/device', adapters_1.adaptRoute(device_1.makeCreateDeviceController()));
    router.delete('/device/:id', adapters_1.adaptRoute(device_1.makeDeleteDeviceController()));
    router.get('/device/:id', adapters_1.adaptRoute(device_1.makeGetDeviceController()));
    router.get('/device', adapters_1.adaptRoute(device_1.makeListDeviceController()));
};
//# sourceMappingURL=device-routes.js.map