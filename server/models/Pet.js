const { Schema, model} = require('mongoose');

// petSchema
const petSchema = new Schema(
    {
        petUsername: {
            type: DataTypes.String,
            required: true,
            unique: true,
            trim: true
        },
        petType: {
            type: DataTypes.String,
            required: true,
            trim: true
        },
        image: {
            type: DataTypes.String
        },
        age: {
            type: DataTypes.INTEGER
        },
        sex: {
            type: DataTypes.String,
            required: true
        },
        bio: {
            type: DataTypes.String,
            required: true
        },
        adoptable: {
            type: DataTypes.BOOLEAN
        },
        posts: [Post],

        friends: [pet]
    },
    {
        toJSON: {
          virtuals: true
        }
      }
)
petSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

  const pet = model('pet', petSchema);
  module.exports = pet;
  
// petUsername {String, required, unique, trim}
// petType {String, required, trim}
// image {String}
// age {Number}
// sex {String, required}
// bio {string, required}
// adoptable {boolean}
// posts [{ref Post}]
// friends [{ ref Pet}]
// include a virtual for friendCount see logic at the bottom of user in Deep-Thoughts
