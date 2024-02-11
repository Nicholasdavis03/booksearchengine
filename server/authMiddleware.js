// authMiddleware.js

const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
const { SECRET } = require('../config/config'); // Assuming you have a configuration file with your secret

const authMiddleware = (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = jwt.verify(token, SECRET);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }

    throw new Error('Authentication token must be provided in the format "Bearer [token]"');
  }

  throw new Error('Authorization header must be provided');
};

module.exports = authMiddleware;
