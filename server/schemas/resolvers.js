const { AuthenticationError } = require('apollo-server-express');
const { Pet, Comment, Tail } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      pets: async () => {
        return Pet.find().sort({ createdAt: -1 });
      }
    }
  };

module.exports = resolvers;