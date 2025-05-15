const dotenv = require('dotenv');
dotenv.config();

//Dynamically switch URL based on environment
const API_URL = process.env.NODE_ENV === 'production'
  ? process.env.API_URL
  : 'http://localhost';
const PORT = process.env.Node_ENV === 'production'
  ? process.env.PORT
  : '3000';
module.exports = {
  endpoint: API_URL,
  masterKey: process.env.API_KEY,
  port: PORT,
  environment: process.env.NODE_ENV,
  sessionSecret: process.env.SESSION_SECRET,
  dbUri: process.env.DB_URI
};