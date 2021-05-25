"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = __importDefault(require("./paths"));
const components_1 = __importDefault(require("./components"));
const schemas_1 = __importDefault(require("./schemas"));
exports.default = {
    openapi: '3.0.0',
    info: {
        title: 'Bemol Pay',
        description: 'API para o contexto de pagamento Bemol',
        version: '1.0.0',
        contact: {
            name: 'BU Canal Digital',
            email: ''
        }
    },
    servers: [{
            url: '/api',
            description: 'Servidor Principal'
        }],
    tags: [{
            name: 'Pix'
        }],
    paths: paths_1.default,
    schemas: schemas_1.default,
    components: components_1.default
};
//# sourceMappingURL=index.js.map