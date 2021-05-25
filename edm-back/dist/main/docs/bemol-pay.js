"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    openapi: '3.0.1',
    info: {
        title: 'Swagger Petstore',
        description: 'This is a sample server Petstore server.',
        contact: {
            email: 'apiteam@swagger.io'
        },
        version: '1.0.0'
    },
    servers: [
        {
            url: 'https://petstore.swagger.io/v2'
        },
        {
            url: 'http://petstore.swagger.io/v2'
        }
    ],
    tags: [
        {
            name: 'pet',
            description: 'Everything about your Pets',
            externalDocs: {
                description: 'Find out more',
                url: 'http://swagger.io'
            }
        }
    ],
    paths: {
        '/pet': {
            post: {
                tags: [
                    'pet'
                ],
                summary: 'Add a new pet to the store',
                operationId: 'addPet',
                requestBody: {
                    description: 'Pet object that needs to be added to the store',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Pet'
                            }
                        },
                        'application/xml': {
                            schema: {
                                $ref: '#/components/schemas/Pet'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    405: {
                        description: 'Invalid input',
                        content: {}
                    }
                },
                security: [
                    {
                        petstore_auth: [
                            'write:pets',
                            'read:pets'
                        ]
                    }
                ],
                'x-codegen-request-body-name': 'body'
            }
        }
    },
    components: {
        schemas: {
            Category: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'int64'
                    },
                    name: {
                        type: 'string'
                    }
                },
                xml: {
                    name: 'Category'
                }
            },
            Tag: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'int64'
                    },
                    name: {
                        type: 'string'
                    }
                },
                xml: {
                    name: 'Tag'
                }
            },
            Pet: {
                required: [
                    'name',
                    'photoUrls'
                ],
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'int64'
                    },
                    category: {
                        $ref: '#/components/schemas/Category'
                    },
                    name: {
                        type: 'string',
                        example: 'doggie'
                    },
                    photoUrls: {
                        type: 'array',
                        xml: {
                            name: 'photoUrl',
                            wrapped: true
                        },
                        items: {
                            type: 'string'
                        }
                    },
                    tags: {
                        type: 'array',
                        xml: {
                            name: 'tag',
                            wrapped: true
                        },
                        items: {
                            $ref: '#/components/schemas/Tag'
                        }
                    },
                    status: {
                        type: 'string',
                        description: 'pet status in the store',
                        enum: [
                            'available',
                            'pending',
                            'sold'
                        ]
                    }
                },
                xml: {
                    name: 'Pet'
                }
            },
            ApiResponse: {
                type: 'object',
                properties: {
                    code: {
                        type: 'integer',
                        format: 'int32'
                    },
                    type: {
                        type: 'string'
                    },
                    message: {
                        type: 'string'
                    }
                }
            }
        },
        securitySchemes: {
            petstore_auth: {
                type: 'oauth2',
                flows: {
                    implicit: {
                        authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
                        scopes: {
                            'write:pets': 'modify pets in your account',
                            'read:pets': 'read your pets'
                        }
                    }
                }
            },
            api_key: {
                type: 'apiKey',
                name: 'api_key',
                in: 'header'
            }
        }
    }
};
//# sourceMappingURL=bemol-pay.js.map