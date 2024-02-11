// resolvers.js

const { AuthenticationError } = require('apollo-server-express');
const authMiddleware = require('./middleware/authMiddleware'); // Import your authentication middleware
const { getMe, createUser, loginUser, saveBook, removeBook } = require('./dataSources/API'); // Import your data source functions

const resolvers = {
  Query: {
    // Resolver function to get user data
    me: (parent, args, context) => {
      const user = authMiddleware(context);
      
      return getMe(user);
    },
   
  },
  Mutation: {
    // Resolver function to create a new user
    addUser: async (parent, args) => {
      const { username, email, password } = args;
      // Your logic to create a new user
      return createUser({ username, email, password });
    },
    // Resolver function to login a user
    loginUser: async (parent, args) => {
      const { email, password } = args;
      // Your logic to login a user
      return loginUser({ email, password });
    },
    // Resolver function to save a book to user's account
    saveBook: async (parent, args, context) => {
      const user = authMiddleware(context);
      const { bookData } = args;
      // Your logic to save a book
      return saveBook(bookData, user.token);
    },
    // Resolver function to remove a book from user's account
    removeBook: async (parent, args, context) => {
      const user = authMiddleware(context);
      const { bookId } = args;
      // Your logic to remove a book
      return removeBook(bookId, user.token);
    },
    // Other mutation resolver functions...
  },
};

module.exports = resolvers;
