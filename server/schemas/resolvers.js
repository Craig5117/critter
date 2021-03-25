const { AuthenticationError } = require('apollo-server-express');
const { Pet, Tail } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // Me (your account)
      me: async (parent, args, context) => {
        if (context.addPet) {
          const petData = await Pet.findOne({ _id: context.pet._id })
            .select('-__v -password')
            // .populate('tails')
            // .populate('friends');
      
          return petData;
        }
      
        throw new AuthenticationError('Not logged in');
      },
      // Pets (all pets)
      pets: async () => {
        return Pet.find()
        .select('-__v -password')
        .populate('friends')
        .populate('tails');
    },

      // Pet (single pet)
      pet: async (parent, { username }) => {
        return Pet.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('tails');
    },

      // Tails (all tails)
      tails: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Tail.find(params).sort({ createdAt: -1 });
      },

      // Tail (single tail)
      tail: async (parent, { _id }) => {
        return Tail.findOne({ _id });
      }
    },
    Mutation: {
        // Logging in
        login: async (parent, { email, password }) => {
            const pet = await Pet.findOne({ email });
    
            if (!pet) {
              throw new AuthenticationError('Incorrect credentials');
            }
    
            const correctPw = await pet.isCorrectPassword(password);
    
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(pet);
            return { token, pet };
            },
        // Create a Pet
        addPet: async (parent, args) => {
            const pet = await Pet.create(args);
            const token = signToken(pet);
    
            return { token, pet };
          },

        // Create a Tail

        //  Add a Comment to a Tail

        // Add another Pet as a Friend

        // Add a Profile Image???

    }
  };

module.exports = resolvers;