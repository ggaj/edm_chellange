"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pixPath = void 0;
exports.pixPath = {
    post: {
        tags: ['Pix'],
        summary: 'Criar pagemento com pix',
        requestBody: {
            name: 'body',
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/pixCreate'
                    }
                }
            }
        },
        responses: {
            400: {
                $ref: '#/components/missingFields'
            }
        }
    },
    get: {
        tags: ['Pix'],
        summary: 'Listagem e atualização de pagamento com pix',
        description: 'Obter os pagamentos com pix no banco local conforme {status}, consulta o serviço do eSitef por chave(nit) e atualiza o banco local se o status for diferente de PEN',
        parameters: [
            {
                name: 'status',
                in: 'query',
                required: true,
                schema: {
                    type: 'string'
                }
            }
        ],
        responses: {
            400: {
                $ref: '#/components/missingFields'
            }
        }
    }
};
//# sourceMappingURL=pix-path.js.map