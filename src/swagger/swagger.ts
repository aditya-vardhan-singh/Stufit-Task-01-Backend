import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Stufit API Documentation",
      version: "1.0.0",
      description: "API documentation for Stufit server",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
        description: "Development server",
      },
    ],
  },
  apis: [
    "./src/routes/*.ts",
    "./src/controllers/*.ts",
    // Add more paths if you want to document models, etc.
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
