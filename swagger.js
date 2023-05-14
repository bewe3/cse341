const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'swag money',
    description: 'temples swagger'
  },
  host: 'spring2023.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);