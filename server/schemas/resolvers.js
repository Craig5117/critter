const { AuthenticationError } = require('apollo-server-express');
const { Pet, Tail, petType } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // Me (your account)
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await Pet.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('tails')
            .populate('friends');
      
          return userData;
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

      // Tails (all tails, or by username)
      tails: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Tail.find(params).sort({ createdAt: -1 });
      },

      // Tail (single tail)
      tail: async (parent, { _id }) => {
        return Tail.findOne({ _id });
      },
      // petTypes
      petTypes: async () => {
        return petType.find()
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
        addTail: async (parent, args, context) => {
            if (context.user) {
              const tail = await Tail.create({ ...args, username: context.user.username });
          
              await Pet.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { tails: tail._id } },
                { new: true }
              );
          
              return tail;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

        //  Add a Comment to a Tail
        addComment: async (parent, { tailId, commentText }, context) => {
            if (context.user) {
              const updatedTail = await Tail.findOneAndUpdate(
                { _id: tailId },
                { $push: { comments: { commentText, username: context.user.username } } },
                { new: true, runValidators: true }
              );
          
              return updatedTail;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },


        // Add another Pet as a Friend
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
              const updatedUser = await Pet.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { friends: friendId } },
                { new: true }
              ).populate('friends');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

        // Add a Profile Image
        addProfileImage: async (parent, { imageURL }, context) => {
          if (context.user) {
        
            const updatedUser = await Pet.findByIdAndUpdate(
              { _id: context.user._id },
              { image: context.user.image = imageURL }
            );
        
            return updatedUser;
          }
        
          throw new AuthenticationError('You need to be logged in!');
        }

    }
  };

module.exports = resolvers;