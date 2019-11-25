const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    "openapi": '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    "info": {
      "title": 'Filmy-app', // Title (required)
      "version": '1.0.0', // Version (required)
    },
    "servers": [{
        "url": "https://development.gigantic-server.com/v1",
        "description": "Development server"
      },
      {
        "url": "https://staging.gigantic-server.com/v1",
        "description": "Staging server"
      },
      {
        "url": "https://api.gigantic-server.com/v1",
        "description": "Production server"
      }
    ],
    "securityDefinations": {
      "bearerAuth": {
        "type": "apiKey",
        "name": "Authorization",
        "scheme": 'bearer',
        "in": "header"
      },
    },
  },
  // Path to the API docs
  apis: ["./app/models/*.js", './app/routes/*.js'],


};
const swaggerSpec = swaggerJSDoc(options);
module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    explorer: false
  }));
}
